const axios = require('axios')
const books1 = async (req,res) => {
    try {
        const res = await axios.get("http://echoserver-env.eba-bccqr6dt.us-east-1.elasticbeanstalk.com/books/1")
        // console.log(res.data)
        return(
            res.data
            // console.log(res.data)
        )
    }
    catch (err) {
        // console.log('err')
    }
}
books1()

module.exports = books1