import ax from 'axios'

const getOneBookHandler = async (req, res) => {
    
    const authHeader = await req.headers.authorization || req.headers.Authorization
    const bookID = await req.query.id
    const URL = process.env.BASE_URL + "/books/id"
    // const URL = process.env.LOCAL_URL + "/books/id"

    try{
        const result = await ax.get(URL, {
            headers: {
                "Authorization": authHeader
            },
            params: {
                id: bookID
            }
        })
        // console.log(result.data)
        res.json(result.data)

    } catch(err){
        res.json({"message": err.message})
    }
    res.end()

}

export default getOneBookHandler