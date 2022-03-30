import ax from 'axios'

export const getOneUser = async (tk) => {
    const URL = process.env.BASE_URL + "/user/detail"
    try {
        const res = await ax.get(URL, {
            headers: {
            "Authorization": `Bearer ${tk}`
            },
        })
        return res.data
    } catch(err){
        console.log(err.message)
    }
}