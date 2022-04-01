import ax from 'axios'

export const getAllBooksHandler = async (tk, pg) => {
    const URL = process.env.BASE_URL + "/books/all"

    try{
      const res = await ax.get(URL, {
        headers: {
            "Authorization": `Bearer ${tk}`
        },
        params: {
            p: pg
        }
      })

      return res.data

    } catch(err){
        console.log(err.message)
    }
}

export const getOneBookHandler = async (tk, bkid) => {
    const URL = process.env.BASE_URL + "/books/id"

    try {
      const res = await ax.get(URL, {
        headers: {
          "Authorization": `Bearer ${tk}`
        },
        params: {
          id: bkid
        }
      })
      return res.data

    } catch(err){
      console.log(err.message)
    }
}

export const searchBookHandler = async (tk,k,v,p) => {
    const URL = process.env.BASE_URL + "/books/search"

    try{
        const res = await ax.get(URL,{
          headers: {
            "Authorization": `Bearer ${tk}`
          },
          params: {
             key: k,
             value: v,
             page: p
          }
        })

        return res.data

    }catch(err){
        console.log(err.message)
    }
}
