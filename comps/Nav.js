import React from "react";
import { header_theme, text_theme } from '../utils/variables'
import { useTheme, useSearchKey, useSearchValue } from '../utils/provider'
import { Router } from "next/router";
import { useRouter } from "next/router";
import { Input } from 'semantic-ui-react'
import Logo from "./Logo";
import NavLogo from "./NavLogo";
import { Icon, Button, Select } from 'semantic-ui-react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { global_theme, comp_theme } from '../utils/variables';
import { Dropdown, Menu, Segment } from 'semantic-ui-react'

const Nav = ({
  users = 'Guest',
  onChange = () => { },
  onClick = () => { },
  options,
  filterValue,
  onFilterChange = () => { },
  placeholder = 'Search...',
  onSubmitSearch = () => { },
}) => {

  const { theme } = useTheme();
  const { searchKey, setSearchKey } = useSearchKey("title")
  const { searchValue, setSearchValue } = useSearchValue()
  const router = useRouter()
  const option = [
    { "key": 'Title', "text": 'Title', "value": 'title' },
    { "key": 'Authors', "text": 'Authors', "value": 'authors' },
    { "key": 'ISBN', "text": 'ISBN', "value": 'isbn' },
  ]

const handleDropDownSelect = (event, data) => {
  setSearchKey(data.value);
 };
 
  const DropMenu = () => (
    <div>
      <Menu attached='top' style={{ border: "0px" }}>
        <Dropdown item icon='bars' simple style={{ backgroundColor: global_theme[theme].body, color: comp_theme[theme].label }} >
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => router.push("/bookShelf")}>BookShelf</Dropdown.Item>
            <Dropdown.Item onClick={() => router.push("/comments")}>Comments</Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Constructing")}>Friends</Dropdown.Item>
            <Dropdown.Item onClick={() => router.push("/clubs")}>Clubs</Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Constructing")}>Subscription</Dropdown.Item>
            <Dropdown.Item onClick={() => router.push("/personalSite")}>PersonalSite</Dropdown.Item>
            <Dropdown.Item onClick={() => router.push("/setting")}>Setting</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

    </div>
  )
  return (

    <div className="navBar" style={{ background: global_theme[theme].body }} >
      <div className="navLogoCon  " onClick={() => router.push("/bookShelf")}>
        <NavLogo className="lightColor " />
      </div>

      <div className="navInputCon">
        <Input type='text' placeholder='Search...' action>
          <input  onChange={e=>setSearchValue(e.target.value)} value={searchValue}/>
          <Select className="select"   defaultValue="title" compact options={option} value={searchKey}
          onChange={handleDropDownSelect} />

          {router.pathname == '/bookShelf/search' ?
          <Button type='submit' onClick={onSubmitSearch}><Icon name="search" /></Button>
          :
          <Button type='submit' onClick={onClick}><Icon name="search" /></Button>
        }
         
        </Input>
        {/* <input className="input" placeholder={placeholder} onChange={(e)=>setSearchValue(e.target.value)} value={searchValue}/>

                <select value={searchKey} onChange={e=>setSearchKey(e.target.value)}>
                  <option value='title'>BookTitle</option>
                  <option value='authors'>Authors</option>
                  <option value='isbn'>ISBN</option>
                </select> */}

        {/* {router.pathname == '/bookShelf/search' ?
          <Button onClick={onSubmitSearch}></Button>
          :
          <Button onClick={onClick}></Button>
        } */}

      </div>

      <div className="navUsers " style={{ color: text_theme[theme].title }}>
        Hello~ {users}
      </div>
      <div className="iconCon">
        <Icon className='user' name='user' size='large' onClick={() => router.push("/personalSite")} style={{ color: text_theme[theme].title }} />
        <Icon className='setting' name='setting' size='large' onClick={() => router.push("/setting")} style={{ color: text_theme[theme].title }} />
      </div>
      <div className="iconCon450">
        <DropMenu />
      </div>
      <div>

      </div>

    </div>
  )
}


export default Nav