
'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
    const router = useRouter();
    const [value, setValue] =useState('')
    
  return (
    <div className="w-max-[400px] mx-auto my-5 flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0">
        <input className="px-5 py-1 border border-green-600" placeholder="enter search term i.e love" type="text" name="searchTerm" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button className="border px-5 py-1 border-green-600 hover:bg-green-600 duration-500" onClick={()=>router.push(`/blog/search?q=${value}`)}>Search</button>
    </div>
  )
}

export default Search