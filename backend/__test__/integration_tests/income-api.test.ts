import express from 'express';
import request from 'supertest';
import incomeRouter from '../../src/routes/income';

const app: express.Application = express();
app.use('/api/income', incomeRouter);

// Mock database data
jest.mock("", () => [

]);

describe("Test GET routes for Income API", () => {
    it("GET /getAll - success", () => {
        const resp = request(app).get("/getAll");
        //expect(resp).toEqual()
    })

});

describe("Test POST routes for Income API", () => {

});

describe("Test PUT routes for Income API", () => {

});

describe("Test DELETE routes for Income API", () => {

});