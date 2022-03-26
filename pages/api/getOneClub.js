import ax from 'axios'

const getOneClubHandler = async (req, res) => {
    
    const authHeader = await req.headers.authorization || req.headers.Authorization
    const clubID = await req.query.id
    // const URL = process.env.BASE_URL + "/club"
    const URL = process.env.LOCAL_URL + "/club/id"

    try{
        const result = await ax.get(URL, {
            headers: {
                "Authorization": authHeader
            },
            params: {
                id: clubID
            }
        })
        res.json(result.data)

    } catch(err){
        res.json({"message": err.message})
    }
    res.end()

    
}

export default getOneClubHandler