import React,{useState} from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropMenu = ({}) => {
const [gendervalue, setGendervalue]= useState()


  return  (
  <Menu vertical>
    <Dropdown item text={'Gender'|| e.target.value } >
      <Dropdown.Menu>
        <Dropdown.Item   onChange={(e)=>setSearchTerm(e.target.value)}>Male</Dropdown.Item>
        <Dropdown.Item  onChange={(e)=>setSearchTerm(e.target.value)}>Female</Dropdown.Item>
        <Dropdown.Item  onChange={(e)=>setSearchTerm(e.target.value)}>Secret</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
  )
}

export default DropMenu