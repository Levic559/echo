import ax from 'axios'

export const addFavoBookHandler = async (tk, formData) => {
    const URL = process.env.BASE_URL + "/favobook/add"

    try {
      const res = await ax.post(URL,{ bookID: formData}, {        
        headers: {
            "Authorization": `Bearer ${tk}`
        }
      })
      return res.status
    } catch(err){
      console.log(err.message)
    }
}


export const getFavoBookHandler = async (tk) => {
    const URL = process.env.BASE_URL + "/favobook"

    try {
        const res = await ax.post(URL, {user:''}, {
            headers: {
                "Authorization": `Bearer ${tk}`
            }            
        })
        return res.data
    } catch(err){
        console.log(err.message)
    }
}