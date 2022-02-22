// arr is the list of objects.
// arr = [
//  {
//      ISBN: string,
//      BookTitle: string,
//      BookAuthor: string,
//      YearOfPublication: number,
//      Publisher: string,
//      ....
//  }
//]
//keys is a array of objects. 
// keys = [
//    { ISBN: 'value1'}, 
//    { BookTitle: 'value2'}, 
//    { BookAuthor: 'value3'},
//    { YearOfPublication: 'value4'},
// ]
// the function only search for the first input key.


const searchfunc = (arr=[], keys=[]) => {

    if(arr.length==0) return 'Array is empty'
    if(keys.length==0)  return 'search keys is empty'

    const key = Object.keys(keys[0])[0]
    const value = keys[0][key].toLowerCase()
    const data = arr.filter((item)=>item[key].toLowerCase().includes(value))

    const result = { data: data, count: data.length}

    return result
}
export default searchfunc


