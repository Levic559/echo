// import {Save, Read} from '@/utils/helpers';
import bookslist from '@/utils/books.json'
import {GoToPage} from '../../utils/function'
import { filtering,sorting } from '@/utils/filter';
export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  //console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
const {txt,pub_year,sort_type,people,num,year}=req.query
  var lists =[]
  
  if(txt ||people||num||year){
lists =filtering(bookslist,{
  title:txt,
  authors:people,
  pub_year:year,
  isbn:num
})}
 if(pub_year){
  lists =sorting(lists,{
     key:"pub_year",
      type:sort_type
   })
 }

  // var lists = GoToPage(bookslist,1,15);
  // if(req.query.page){
  //   lists= GoToPage(bookslist,req.query.page,15)
  // }

  if(req.query._id){
    lists=bookslist.filter(o=>o._id=== req.query._id);
    // console.log(lists)
    // console.log(req.query.book_isbn)
  }
//  lists=lists.slice(0,15)

  // res.status(200).json(lists);
  console.log(lists)
  res.status(200).json(lists);
}
