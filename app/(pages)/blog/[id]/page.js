import Link from 'next/link';
import React from 'react'
async function getQuotes(id){
  const post = await fetch(`https://dummyjson.com/posts/${id}`);
 
  if(!post.ok){
    throw new Error("Data Fetching Failed")
  }

  const postData = post.json();
  return postData
}
const Post = async ({params}) => {
  const id = params.id;
  const post = await getQuotes(id);
  return (
    
    <div className='px-12 md:px-0 md:w-[80%] md:mx-auto my-12'>
      <Link className='text-red-500 mb-12' href='/blog'>back to blog</Link><br/><br/>
      <small className=' p-2 w-4  h-4 rounded-full border-green-600  border-2 text-center '>{post.id}</small><br/><br/>
<h1 className='mb-4'>{post.title}</h1>
<p>{post.body}</p>


    </div>
  )
}

export default Post