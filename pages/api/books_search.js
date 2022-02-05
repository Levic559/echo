import {Save, Read} from '@/utils/helpers';
import booklist from '@/utils/booklist.json'
import {GoToPage} from '@/utils/function'
import { filtering,sorting } from '@/utils/filter';


export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  //console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
  // const {code}=useCode()
  
const {txt,sort_rating, sort_type,lan,trc, rc,person}=req.query
  var lists =[]
  
  if(txt || lan||person||rc||trc){
lists =filtering(booklist,{
  title:txt,
  language_code:lan, 
  authors:person,
  ratings_count:rc,
  text_reviews_count: trc
  
  
})}
 if(sort_rating){
  lists =sorting(lists,{
     key:"average_rating",
    type:sort_type
   })
 }




  // var lists = GoToPage(lists,1,15);
  if(req.query.page){
    lists= GoToPage(lists,req.query.page,15)
  }
  // console.log(lists)
  // if(req.query.book_id){
  //   lists=booklist.filter(o=>o.bookID=== Number(req.query.book_id));
  //   console.log(lists)
  // }
//  lists=lists.slice(0,15)

  res.status(200).json(lists);
}
