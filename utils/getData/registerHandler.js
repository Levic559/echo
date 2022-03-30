import ax from 'axios'

export const registerHandler = async (formData) => {
    const URL = process.env.BASE_URL + "/register"
    try {
      const res = await ax.post(URL, formData)
      return res
    } catch(err){
      console.log(err.message)
    }
}