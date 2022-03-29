import ax from 'axios'

const getBooksHandler = async (req, res) => {
    
    const authHeader = await req.headers.authorization || req.headers.Authorization
    const page = await req.query.page
    const URL = process.env.BASE_URL + "/books/all/p"
    // const URL = process.env.LOCAL_URL + "/books/all/p"

    try{
        const result = await ax.get(URL, {
            headers: {
                "Authorization": authHeader
            },
            params: {
                p: page
            }
        })
        res.json(result.data)

    } catch(err){
        res.json({"message": err.message})
    }
    res.end()

    
}

export default getBooksHandler