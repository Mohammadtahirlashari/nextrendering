import Link from "next/link";

async function getPost(q){
    const quotes = await fetch(`https://dummyjson.com/posts/search?q=${q}`);
   
    if(!quotes.ok){
      throw new Error("Data Fetching Failed")
    }
  
    const quotesData = quotes.json();
    return quotesData
  }

const Search = async ({searchParams}) => {
    const q = searchParams.q;
    
    const qq = await getPost(q)
  return (
    <div className='md:mx-auto my-12 p-6 border rounded-md shadow-md md:w-[80%]'>
    <div className='grid md:grid-cols-3 gap-6'>
    {qq.posts.map(quote=>{
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

export default Search