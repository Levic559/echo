import React,{useState} from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropMenuAge = ({
  OneOnClick=()=>{},
  TwoOnClick=()=>{},
  ThreeOnClick=()=>{},
  FourOnClick=()=>{},
  FiveOnClick=()=>{},
  SixOnClick=()=>{},
  SevenOnClick=()=>{},
  EightOnClick=()=>{},
  text,
  onChange=()=>{},
  value,
  
  
}) => {

// console.log(gendervalue)
  return  <div>
   
   {/* <p style={{margin:0,padding:0,fontSize:"1.5rem"}}>{title}</p> */}
  <Menu style={{margin:0,padding:0, width:"20rem"}} vertical>
    <Dropdown item text={text } onChange={onChange} value={value}>
      <Dropdown.Menu>
        <Dropdown.Item value="11-20"   onClick={OneOnClick}>11-20</Dropdown.Item>
        <Dropdown.Item value="21-30" onClick={TwoOnClick}>21-30</Dropdown.Item>
        <Dropdown.Item value="31-40"  onClick={ThreeOnClick}>31-40</Dropdown.Item>
        <Dropdown.Item value="41-50"  onClick={FourOnClick}>41-50</Dropdown.Item>
        <Dropdown.Item value="51-60"  onClick={FiveOnClick}>51-60</Dropdown.Item>
        <Dropdown.Item value="61-70"  onClick={SixOnClick}>61-70</Dropdown.Item>
        <Dropdown.Item value="71-80"  onClick={SevenOnClick}>71-80</Dropdown.Item>
        <Dropdown.Item value="81-90"  onClick={EightOnClick}>81-90</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
  </div>
}

export default DropMenuAge