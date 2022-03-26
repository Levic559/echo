import ax from 'axios'

const userHandler = async (req, res) => {
    
    const registerData = req.body
    // const URL = process.env.BASE_URL + "/register"
    const URL = process.env.LOCAL_URL + "/register"

    try{
        const result = await ax.post(URL, registerData)
        res.json(result.data)

    } catch(err){
        res.json({"message": err.message})
    }

    
}

export default userHandler