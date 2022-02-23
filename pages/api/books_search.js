// import {Save, Read} from '@/utils/helpers';
import bookslist from '@/utils/books500.json'
import {GoToPage} from '../../utils/function'
import { filtering,sorting } from '@/utils/filter';
export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  //console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
const {txt,year_publish,sort_type}=req.query
  var lists =[]
  
  if(txt){
lists =filtering(bookslist,{
  BookTitle:txt
})}
 if(year_publish){
  lists =sorting(lists,{
     key:"YearOfPublication",
      type:sort_type
   })
 }

  // var lists = GoToPage(bookslist,1,15);
  // if(req.query.page){
  //   lists= GoToPage(bookslist,req.query.page,15)
  // }

  if(req.query.book_isbn){
    lists=bookslist.filter(o=>o.ISBN=== req.query.book_isbn);
    // console.log(lists)
    // console.log(req.query.book_isbn)
  }
//  lists=lists.slice(0,15)

  // res.status(200).json(lists);
  console.log(lists)
  res.status(200).json(lists);
}
