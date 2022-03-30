import ax from 'axios'

const loginHandler = async (ldata) => {
    const URL = process.env.BASE_URL + "/auth"

    try{
        const res = await ax.post(URL, ldata)
        
        return res.data

    }catch(err){
        console.log(err.message)
    }
}

export default loginHandler