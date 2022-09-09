const fetchData = require('../functions/async')

it("Should return correct todo", async () => {
    const result = await fetchData(5)
    expect(result.id).toBe(5)

    //xd
})