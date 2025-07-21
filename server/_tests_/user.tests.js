const request = require("supertest");
const express = require("express");
const userRoute = require("../routes/user");

const app = express();
app.use(userRoute);

test("GET /api/users", async () => {
  const res = await request(app).get("/api/users");
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual([{ name: "Hamidah" }]);
});
