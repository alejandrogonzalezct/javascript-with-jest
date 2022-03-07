const axios = require('axios')

const fetchData = async (id) => {
    const results = await axios.default.get(`https://jsonplaceholder.typicode.com/todos/${id}`).catch((error) => {throw error})
    console.log(results.data)
    return results.data
}

module.exports = fetchData