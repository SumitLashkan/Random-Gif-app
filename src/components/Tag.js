import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
    const [tag , setTag] = useState('');
    const {gif , loading , fetchData} = useGif()


  return (
    <div className='w-[800px] h-[400px] bg-blue-500 rounded-lg border border-black
       flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>A RANDOM GIF</h1>
     {
      loading ? (<Spinner/>) : ( <img src={gif} width="450" />)
     }

     <input className='w-10/12 text-lg py-2 rounded-lg mb[3px] text-center'
           onChange ={(event) => setTag(event.target.value)}
            value = {tag}
           />


      <button className='w-10/12 border rounded border-yellow-50 bg-yellow-200 px-1 py-1'
       onClick={() =>fetchData}> Generate</button>
    </div>
  )
}

export default Tag

