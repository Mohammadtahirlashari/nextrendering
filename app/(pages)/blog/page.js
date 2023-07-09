import Link from 'next/link';
import React from 'react'
// this is function to get data from api end point
async function getQuotes(){
  const posts = await fetch('https://dummyjson.com/posts?limit=150');
  // by-default it render on server as cached on server

  if(!posts.ok){
    throw new Error("Data Fetching Failed")
  }

  const postsData = quotes.json();
  return postsData
}

const Blog = async () => {
  const posts = await getQuotes();
  return (
    <div className='md:mx-auto my-12 p-6 border rounded-md shadow-md md:w-[80%]'>
      <div className='grid md:grid-cols-3 gap-6'>
      {posts.posts.map(post=>{
        return <div key={post.id} className='border border-gray-700 rounded-md p-4'>
          <h1 className='mb-5'>{post.title}</h1>
          <p className='mb-5'>{post.body}</p>
          <Link className='bg-orange-600 inline-block py-2 px-3 rounded-md text-white hover:bg-orange-400 hover:text-gray-800' href={`/blog/${post.id}`}>Go to Single Quote</Link>
          </div>
      })}
      </div>
    </div>
  )
}

export default Blog