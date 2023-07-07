import Link from 'next/link';
import React from 'react'
async function getQuotes(id){
  const quotes = await fetch(`https://dummyjson.com/quotes/${id}`);
 
  if(!quotes.ok){
    throw new Error("Data Fetching Failed")
  }

  const quotesData = quotes.json();
  return quotesData
}
const Post = async ({params}) => {
  const id = params.id;
  const quote = await getQuotes(id);
  return (
    
    <div className='px-12 md:px-0 md:w-[80%] md:mx-auto my-12'>
      <Link className='text-red-500 mb-12' href='/blog'>back to blog</Link><br/><br/>
      <small className=' p-2 w-4  h-4 rounded-full border-green-600  border-2 text-center '>{quote.id}</small><br/><br/>
<h1 className='mb-4'>{quote.quote}</h1>
<p>{quote.author}</p>


    </div>
  )
}

export default Post