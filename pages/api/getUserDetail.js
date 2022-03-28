import ax from 'axios'

const getUserDetailHandler = async (req, res) => {

    const authHeader = await req.headers.authorization || req.headers.Authorization
    const URL = process.env.BASE_URL + "/user/detail"
    // const URL = process.env.LOCAL_URL + "/user/detail"

    try {
        const result = await ax.get(URL, {
            headers: {
                "Authorization": authHeader
            }
        })
        res.json(result.data)

    } catch (err) {
        res.json({"message": err.message})
    }
}

export default getUserDetailHandler