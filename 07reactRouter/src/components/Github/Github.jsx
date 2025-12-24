import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data= useLoaderData();

    //Alternate method to do this, in which case useLoaderData is not needed
    //Also in that case, remove from main.jsx the loader attribute from Route component
    //The useLoaderData hook is used to access the data returned by the loader function associated with the route.
    //It is also a better approach as the data is fetched before the component is rendered.


    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/anaghs-007')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-5 text-3xl p-4">
            <h2 className="text-purple-400 underline font-bold">Github Profile Info</h2>
            <h3 className="mt-4 text-2xl">Name: {data.name}</h3>
            <h3 className="mt-4 text-2xl">Username: {data.login}</h3>
            <h5 className="mt-2 text-lg">Bio: {data.bio}</h5>
            <h3 className="mt-4 text-2xl">Public Repositories: {data.public_repos}</h3>
            <img className="rounded-full mx-auto mt-4" src={data.avatar_url} alt="github profile pic" width="200" height="200"/>
        </div>
    )
}

export default Github;

export const githubInfoLoaader= async ()=>{
    const response= await fetch('https://api.github.com/users/anaghs-007')
    return response.json()
}