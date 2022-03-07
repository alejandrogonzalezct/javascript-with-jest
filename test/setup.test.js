let animals = ['elephant', 'zebra', 'bear', 'tiger']

describe("animals array", () => {
    it("should add animal to end of array",()=> {
        animals.push('aligator')
        expect(animals[animals.length-1]).toBe('aligator')
        console.log(animals)
    })
    it("should add animal to beginning of array",() => {
        animals.unshift('monkey')
        expect(animals[0]).toBe('monkey')
        console.log(animals)
    })
})

