import { RequestHandler, Request, Response, NextFunction } from "express";
import Income from "../models/income";
import { createDocumentMap } from "./utils";

interface updateField {
    [key: string]: any
}

/**
 * Retrieves all income documents. This function is meant to be used for debugging.
 * @param req 
 * @param res 
 * @param next 
 */
export const getAll: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
   Income.find({}, function(err, incomes){
       if(err) return next(err); // TODO what is next?
       const incomeMap = createDocumentMap(incomes);
       res.status(200).send(incomeMap);
   });
}

/**
 * Retrieves income documents that match an email as the key
 * @param req 
 * @param res 
 * @param next 
 */
export const getByEmail: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    Income.find({ "email": email }, function(err, incomes){
       if(err) return next(err);
       const incomeMap = createDocumentMap(incomes);
       res.status(200).send(incomeMap)
    })
}

/**
 * Creates a new income document and inserts it to db
 * @param req body must contain an email, title, date, and amount field
 * @param res 
 * @param next 
 */
export const createIncome: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const newIncome = new Income ({
        email: req.body.email,
        title: req.body.title,
        amount: req.body.amount,
        date: req.body.date
    });
    newIncome.save()
    .then(() => {
        res.status(200).send(newIncome);
    })
    .catch((error: Response) => {
        res.status(500).send(error);
    });
}

/**
 * Updates an income document that matches the document's id (_id in mongodb)
 * @param req must contain an incomeId. Either title or amount can have a value, but neither can be undefined
 * @param res 
 * @param next 
 */
export const updateIncome: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    // can change amount or title of income. cannot change email
    const incomeId = req.body.incomeId;
    const title = req.body.title;
    const amount = req.body.amount;
    const date = req.body.date;
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
    
    Income.updateOne({ "_id": incomeId }, updateFields, {
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
 * Delete an income document that matches the id
 * @param req body must contain incomeId
 * @param res 
 * @param next 
 */
export const deleteIncome: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const incomeId = req.body.incomeId;
    Income.deleteOne({ "_id": incomeId })
    .then(() => {
        res.status(200).send({});
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}