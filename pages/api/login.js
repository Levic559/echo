import ax from 'axios'

const loginHandler = async (req, res) => {
    
    const loginData = req.body
    const URL = process.env.BASE_URL + "/auth"
    // const URL = process.env.LOCAL_URL + "/auth"

    try{
        const result = await ax.post(URL, loginData)
        res.json(result.data)

    } catch(err){
        res.json({"message": err.message})
    }

    
}

export default loginHandler