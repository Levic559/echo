import ax from 'axios'

const getClubHandler = async (req, res) => {
    
    const authHeader = await req.headers.authorization || req.headers.Authorization
    const URL = process.env.BASE_URL + "/club"
    // const URL = process.env.LOCAL_URL + "/club"

    try{
        const result = await ax.get(URL, {
            headers: {
                "Authorization": authHeader
            }
        })
        res.json(result.data)

    } catch(err){
        res.json({"message": err.message})
    }
    res.end()

    
}

export default getClubHandler