import { createDocumentMap } from "../../src/controllers/utils";

describe("Create Income Map function", () => {
    test("Given an array of income documents, a map should be produced", () => {
        // GIVEN
        const mockData = [
            {
                _id: "60df80aed224b90c72a7fc07",
                email: 'asdf@example.com',
                title: 'mock 1',
                amount: 1,
                date: "2021-07-02T21:10:06.556Z",
                __v: 0
            },
            {
                _id: "60df80aed224b90c72a7fc08",
                email: 'asdf@example.com',
                title: 'mock 2',
                amount: 2,
                date: "2021-07-02T21:10:06.556Z",
                __v: 1
            },
            {
                _id: "60df80aed224b90c72a7fc09",
                email: 'asdf@example.com',
                title: 'mock 3',
                amount: 3,
                date: "2021-07-02T21:10:06.556Z",
                __v: 2
            }
        ]

        const expected = {
            "60df80aed224b90c72a7fc07": {
                _id: "60df80aed224b90c72a7fc07",
                email: 'asdf@example.com',
                title: 'mock 1',
                amount: 1,
                date: "2021-07-02T21:10:06.556Z",
                __v: 0
            },
            "60df80aed224b90c72a7fc08": {
                _id: "60df80aed224b90c72a7fc08",
                email: 'asdf@example.com',
                title: 'mock 2',
                amount: 2,
                date: "2021-07-02T21:10:06.556Z",
                __v: 1
            },
            "60df80aed224b90c72a7fc09": {
                _id: "60df80aed224b90c72a7fc09",
                email: 'asdf@example.com',
                title: 'mock 3',
                amount: 3,
                date: "2021-07-02T21:10:06.556Z",
                __v: 2
            }
        }

        // WHEN
        const actual = createDocumentMap(mockData);

        // THEN
        expect(actual).toEqual(expected);
    });
});