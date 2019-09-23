const callmise = require(".");

function oldFn(shouldError, result, callback) {
  if (shouldError) callback(new Error(result));
  else callback(null, result);
}

describe("callmise, direct style", function() {
  it("should run successfully", async () => {
    const res = await callmise(oldFn, false, "hi");
    expect(res).toBe("hi");
  });

  it("should throw error", async () => {
    expect.assertions(1);
    try {
      await callmise(oldFn, true, "Oops");
    } catch (err) {
      expect(err.message).toBe("Oops");
    }
  });
});

describe("callmise, indirect style", function() {
  it("should run successfully", async () => {
    const res = await callmise(callback => oldFn(false, "hi", callback));
    expect(res).toBe("hi");
  });

  it("should throw error", async () => {
    expect.assertions(1);
    try {
      await callmise(callback => oldFn(true, "Oops", callback));
    } catch (err) {
      expect(err.message).toBe("Oops");
    }
  });
});
