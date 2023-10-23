const request = require("supertest");
const server = require("../index");
const e = require("express");


describe("Operaciones CRUD de cafes", () => {
    it('GET /cafes debe devolver un status 200 y un array de cafes', async () => {
        const res = await request(server).get("/cafes");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);        

})
})
