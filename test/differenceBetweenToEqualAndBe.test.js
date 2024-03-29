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

describe("numbers", () => {
    it("two plus two", ()=>{
        const value = 2+2
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(3)
        expect(value).toBeLessThan(7)
        expect(value).toBeLessThanOrEqual(4)
    })
    it("adding floats", () => {
        const value = 0.1 + 0.2
        expect(value).toBeCloseTo(0.29999)
    })
})

describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ]

    it("contain word in array", () => {
        expect(shoppingLists).toContain('milk')
    })
})

function compileAndroidCode() {
    throw new Error("You are using the wrong JDK")
}

describe('exceptions ', () => {
    it("compiling android goes as expected", () => {
        expect(()=> compileAndroidCode()).toThrow(Error)
    })
});
 