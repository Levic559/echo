import React,{useState} from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropMenu = ({
  maleOnClick=()=>{},
  femaleOnClick=()=>{},
  secretOnClick=()=>{},
  text,
  onChange=()=>{},
  value,
  title="Gender",
  
  
}) => {

// console.log(gendervalue)
  return  <>
   
   {/* <p style={{margin:0,padding:0,fontSize:"1.5rem"}}>{title}</p> */}
  <Menu className='dropMenu'  vertical>
    <Dropdown item text={text } onChange={onChange} value={value}>
      <Dropdown.Menu>
        <Dropdown.Item value="Male"   onClick={maleOnClick}>Male</Dropdown.Item>
        <Dropdown.Item  value="Female" onClick={femaleOnClick}>Female</Dropdown.Item>
        <Dropdown.Item value="Secret"  onClick={secretOnClick}>Secret</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
  </>
}

export default DropMenu