import React, {useState} from 'react'
import { InputText } from '../atoms'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const [data, setData] = useState("")
  return (
    <div>
      <input type="text" />
      
      <p>{data}</p>
    </div>
  )
}

export default SearchBar