import { useState } from "react"

const SearchBar = ({
    setSearchKeyword=()=>{},
    setSearchField=()=>{},
    fieldOptions=['Option 1', 'Option 2', 'Option3']
}) => {

    const [searchTerm, setSearchTerm]= useState()
    const [option, setOption] = useState()

    const handlerEnter = (e) => {
        if(e.key === 'Enter') {
            console.log(searchTerm, option)
            setSearchKeyword(searchTerm)
            setSearchField(option)
        }
    }

    return (
        <div className="search-bar">
            
            <select 
                className="search-op"
                value={option}
                onChange={(e)=>setOption(e.target.value)}
            >
                <option disabled selected>Filter</option>
                {fieldOptions.map((option,i)=>(
                    <option key={i}>{option}</option>
                    ))}

            </select>

            <input
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                onKeyPress={handlerEnter} 
                className="search-input"
                type='text' 
                placeholder="Search..."
            />

        </div>
    )
}

export default SearchBar