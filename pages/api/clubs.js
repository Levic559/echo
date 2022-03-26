// import {Save, Read} from '@/utils/helpers';
import clubslist from '@/utils/clubs.json'
import {GoToPage} from '../../utils/function'
import { filtering,sorting } from '@/utils/filter';
export default async function handler(req, res) {


  var lists =[]


  var lists = GoToPage(clubslist,1,15);
  if(req.query.page){
    lists= GoToPage(clubslist,req.query.page,15)
  }

  if(req.query._id){
    lists=clubslist.filter(o=>o._id=== req.query._id);
    // console.log(lists)
    console.log(req.query._id)
  }
//  lists=lists.slice(0,15)

  // res.status(200).json(lists);
  // console.log(lists)
  res.status(200).json(lists);
}
