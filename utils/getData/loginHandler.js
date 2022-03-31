import ax from 'axios'

const loginHandler = async (ldata) => {
    const URL = process.env.BASE_URL + "/auth"

    console.log(URL)
    try{
        const res = await ax.post(URL, ldata)
        
        return res.data

    }catch(err){
        console.log(err.message)
    }
}

export default loginHandler