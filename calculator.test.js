const calculator = require("./calculator");

test("1 plus 2 should be equal to 3", () => {
	expect(calculator.add("1,2")).toBe(3);
});
