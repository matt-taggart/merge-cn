import cn from "../index.ts";

describe("Parses strings correctly", () => {
  test("single string", () => {
    expect(cn("foo")).toBe("foo");
  });
});
