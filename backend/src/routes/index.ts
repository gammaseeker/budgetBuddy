import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', function(req, res){
    res.send('Hello world');
});

//--- GET ROUTES  ---

//--- POST ROUTES ---
export { router }