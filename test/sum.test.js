const sum = require('../functions/sum')
describe("sum two numbers" , () => {
    it("should sum two numbers", () => {
        const result = sum(1,5)
        expect(result).toBe(6)
    })
})