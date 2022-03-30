import ax from 'axios'

export const getAllClubs = async (tk) => {
    const URL = process.env.BASE_URL + "/club"

    try{
      const res = await ax.get(URL, {
        headers: {
          "Authorization": `Bearer ${tk}`
        }
      })
      return res.data

    } catch(err){
      console.log(err.message)
    }
}

export const getOneClub = async (tk, id) => {
    const URL = process.env.BASE_URL + "/club/id"

    try {
      const res = await ax.get(URL, {
        headers: {
          "Authorization": `Bearer ${tk}`
        },
        params: {
          id: id
        }
      })
      return res.data
    } catch(err){
      console.log(err.message)
    }
}