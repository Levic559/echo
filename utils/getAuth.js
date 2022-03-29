import ax from 'axios'

const getAuth = async (tk, rt) => {

    if(tk==null){
        rt.push("/")
    }

    // try{
    //     const auth = await ax.get('http://localhost:3500/refresh', {withCredentials: true})
    //     console.log("Auth:" + auth)
    //     return auth
    // } catch (err){
    //     console.log(err)
        
    // }
}

export default getAuth