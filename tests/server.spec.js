const request = require("supertest");
const server = require("../index");


describe("Operaciones CRUD de cafes", () => {
    it('GET /cafes debe devolver un status 200 y un array de cafes', async () => {
        const response = await request(server).get("/cafes").send();
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); 
    
});

it('GET /cafes/:id debe devolver un status 404  al eliminar un cafe con un id que no existe', async () => {
    const res = await request(server).delete("/cafes/100").set('Authorization','token').send();
    expect(res.statusCode).toBe(404);
});

it ('post /cafes debe devolver un codigo 201 y agrega un nuevo cafe', async () => {
    const res = await request(server).post("/cafes").send({
        "id": 90,
        "nombre": "Cafe de prueba",
    
    })
    expect(res.statusCode).toBe(201)
    expect(res.body.length).toBe(5)
});

it ('put /cafes/:id debe devolver un codigo 400 si actulizas un parametro que sea diferente al id del payload', async () => {
    const res = await request(server).put("/cafes/1").send({
        "id": 90,
        "nombre": "Cafe de prueba",
    
    })
    expect(res.statusCode).toBe(400)

});

});