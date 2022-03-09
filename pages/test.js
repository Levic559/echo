import React from 'react'
import SwitchPanel from '@/panels/SwitchPanel'
import SearchBar from '@/comps/SearchBar'
import HeartBut from '@/comps/HeartBut'
const test = () => {
  return (
    <div style={{
        width: '100%',
        padding: '5%',
    }}>
        <SwitchPanel/>
        <SearchBar/>

        <HeartBut/>
    </div>
  )
}

export default test