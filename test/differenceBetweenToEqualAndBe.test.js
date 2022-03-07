const sum = require('../functions/sum')
describe("difference between using ToBe and ToEqual" , () => {
    //to be
    it("should sum two numbers", () => {
        const result = sum(1,5)
        expect(result).toBe(6)
    })
    //to Equal
    it("object assignment", () => {
        const obj = {}
        expect(obj).toEqual({})
    })
})

describe("truthy of falsy", () => {
    it("null", ()=>{
        const n = ""

        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        //expect(n).toBeNull()
        // expect(n).not.toBeUndefined()
    })
})

