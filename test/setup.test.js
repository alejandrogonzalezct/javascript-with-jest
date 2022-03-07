let animals = []

// beforeAll(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })
// afterEach(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })
// afterAll(()=> {
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})

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
        The tests passed because forEach hook run each test so 
        it will set the array to animals variable to manipulate information
        in each test
    */

    
})

describe("testing something else", () => {
    it.only("true should be truthy", () => {
        expect(true).toBeTruthy()
    })
})

