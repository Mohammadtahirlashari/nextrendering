import Link from 'next/link';
import React from 'react'
// this is function to get data from api end point
async function getQuotes(){
  const quotes = await fetch('https://dummyjson.com/posts?limit=150');
  // by-default it render on server as cached on server

  if(!quotes.ok){
    throw new Error("Data Fetching Failed")
  }

  const quotesData = quotes.json();
  return quotesData
}

const Blog = async () => {
  const quotes = await getQuotes();
  console.log(quotes.posts)
  return (
    <div className='md:mx-auto my-12 p-6 border rounded-md shadow-md md:w-[80%]'>
      <div className='grid md:grid-cols-3 gap-6'>
      {quotes.posts.map(quote=>{
        return <div key={quote.id} className='border border-gray-700 rounded-md p-4'>
          <h1 className='mb-5'>{quote.title}</h1>
          <p className='mb-5'>{quote.body}</p>
          <Link className='bg-orange-600 inline-block py-2 px-3 rounded-md text-white hover:bg-orange-400 hover:text-gray-800' href={`/blog/${quote.id}`}>Go to Single Quote</Link>
          </div>
      })}
      </div>
    </div>
  )
}

export default Blog