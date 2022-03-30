import ax from 'axios'

export const addReadBookHandler = async (tk, formData) => {
    const URL = process.env.BASE_URL + "/readbook/add"

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