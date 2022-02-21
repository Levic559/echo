// const books =require("./books500.json") 
export const GoToPage=(bks=[], page=1, num=5)=>{
    // const list =bks.slice(0,5)
    // const list2 =bks.splice(0,5)
    const result =bks.slice((page-1)*num,page*num)
    // console.log(result)
    return result
}

// GoToPage()
// const booklist =require("./bookslist.json")
// export const filiter=(
//     arr=[]
// )=>{
// console.log(arr.slice(0,5))
// }

// filiter(booklist)