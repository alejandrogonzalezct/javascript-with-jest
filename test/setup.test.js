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
    it("should have inital length of 4 animals", ()=> {
        expect(animals.length).toBe(4)
    })

    /*
        At the end of this test the last one will fail because 
        the other test running before the last one and process the
        array of animals and it added two elements before so the length 
        of our array will not be 4 animals. So in the other commit we will solve this problem.
    */
})

