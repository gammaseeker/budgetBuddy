import request from 'supertest';
import app from '../../src/app';
import Income from '../../src/models/income';

describe("Test POST routes for Income API", () => {
    it("POST /create - insert a doc into collection", async () => {
        const currentDate = new Date(2021, 0O7, 0O3, 17, 23, 42, 11);
        const mockIncome = {
            email: "integration@test.com",
            title: "Integration Test Income",
            amount: 100,
            date: currentDate,
        }
        const resp = await request(app).post('/api/income/create').send(mockIncome);
        expect(resp.status).toBe(200);
    })
});

describe("Test GET routes for Income API", () => {
    it("GET /getByEmail - retrieve doc with email integration@test.com", async () => {
        const mockIncome = {
            email: "integration@test.com",
            title: "Integration Test Income",
            amount: 100,
            date: new Date(2021, 0O7, 0O3, 17, 23, 42, 11),

        }
        const req = {
            email: "integration@test.com"
        }
        await request(app).post('/api/income/create').send(mockIncome);
        const resp = await request(app).get('/api/income/getByEmail').send(req);
        expect(resp.status).toBe(200);
        expect(resp.text).toEqual(expect.stringContaining("\"email\":\"integration@test.com\",\"title\":\"Integration Test Income\",\"amount\":100,\"date\":\"2021-08-03T21:23:42.011Z\""));
    })

});

describe("Test PUT routes for Income API", () => {
    it("PUT /update - update doc with email integration@test.com", async () => {
        const mockIncome = new Income ({
            email: "integration@test.com",
            title: "Integration Test Income",
            amount: 100,
            date: new Date(2021, 0O7, 0O3, 17, 23, 42, 11),
        });
        mockIncome.save(async function(err, income){
            const req = {
                incomdeId: income._id,
                amount: 200 
            }
            const resp = await request(app).put('/api/income/update').send(req);
            expect(resp.status).toBe(200);
            expect(resp.text).toEqual(expect.stringContaining("Modified:1"));
        });
    })
});

describe("Test DELETE routes for Income API", () => {
    it("DELETE /delete - delete doc with email integration@test.com", async () => {
        const mockIncome = {
            email: "integration@test.com",
            title: "Integration Test Income",
            amount: 100,
            date: new Date(2021, 0O7, 0O3, 17, 23, 42, 11),

        }
        let resp = await request(app).post('/api/income/create').send(mockIncome);
        const incomeId = resp.body._id;

        const req = {
            incomdeId: incomeId 
        }
        resp = await request(app).delete('/api/income/delete').send(req);
        expect(resp.status).toBe(200);
        expect(resp.text).toEqual(expect.stringContaining("message"));
    })
});