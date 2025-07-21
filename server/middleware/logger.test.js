const logger = require("./logger");

test("calls next after logging", () => {
  const req = { method: "GET", url: "/" };
  const res = {};
  const next = jest.fn();

  logger(req, res, next);

  expect(next).toHaveBeenCalled();
});
