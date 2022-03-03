const sum = require('../functions/sum')
it("should sum two numbers", () => {
    const result = sum(1,5)
    expect(result).toBe(6)
})