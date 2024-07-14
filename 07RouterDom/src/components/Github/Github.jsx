import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shivkumar20')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])



    const data = useLoaderData()
  return (
    <div className='bg-gray-600 text-center text-white text-lg px-4 py-4'>Github Name : {data.login}
        <div className='flex m-5'>
            <div><img src={data.avatar_url} alt="account logo" width={300}/></div>
            <div className='m-5'>
                Github Followers: {data.followers} <br/>
                Full Name: {data.name}
                
            </div>
            
        </div>
    </div>
  )
}

export default Github

export const githubLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/shivkumar20')
    return response.json()
    
}