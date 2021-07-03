import { RequestHandler, Request, Response, NextFunction } from "express";
import Expense from "../models/expense";
import { createDocumentMap, updateField } from "./utils";

/**
 * Retrieves all expense documents. This function is meant to be used for debugging.
 * @param req 
 * @param res 
 * @param next 
 */
export const getAll: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
   Expense.find({}, function(err, expenses){
       if(err) return next(err); // TODO what is next?
       const expenseMap = createDocumentMap(expenses);
       res.status(200).send(expenseMap);
   });
}

/**
 * Retrieves expense documents that match an email as the key
 * @param req 
 * @param res 
 * @param next 
 */
export const getByEmail: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    Expense.find({ "email": email }, function(err, expenses){
       if(err) return next(err);
       const expenseMap = createDocumentMap(expenses);
       res.status(200).send(expenseMap)
    })
}

/**
 * Creates a new expense document and inserts it to db
 * @param req body must contain an email, title, date, and amount field
 * @param res 
 * @param next 
 */
export const createExpense: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const newExpense = new Expense ({
        email: req.body.email,
        title: req.body.title,
        amount: req.body.amount,
        date: req.body.date,
        expenseType: req.body.expenseType
    });
    newExpense.save()
    .then(() => {
        res.status(200).send(newExpense);
    })
    .catch((error: Response) => {
        res.status(500).send(error);
    });
}

/**
 * Updates an expense document that matches the document's id (_id in mongodb)
 * @param req must contain an expenseId. Either title or amount can have a value, but neither can be undefined
 * @param res 
 * @param next 
 */
export const updateExpense: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    // can change amount or title of expense. cannot change email
    const expenseId = req.body.expenseId;
    const title = req.body.title;
    const amount = req.body.amount;
    const date = req.body.date;
    const expenseType = req.body.expenseType;
    let updateFields: updateField = {};
    
    if (typeof title !== 'undefined') {
        updateFields["title"] = title;
    }
    if (typeof amount !== 'undefined') {
        updateFields["amount"] = amount;
    }
    if (typeof date !== 'undefined') {
        updateFields["date"] = date;
    }
    if (typeof expenseType !== 'undefined') {
        updateFields["expenseType"] = expenseType;
    }
    
    Expense.updateOne({ "_id": expenseId }, updateFields, {
        new: true
    })
    .then((updated) => {
        res.status(200).send(updated);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}

/**
 * Delete an expense document that matches the id
 * @param req body must contain expenseId
 * @param res 
 * @param next 
 */
export const deleteExpense: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const expenseId = req.body.expenseId;
    Expense.deleteOne({ "_id": expenseId })
    .then(() => {
        res.status(200).send({});
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}