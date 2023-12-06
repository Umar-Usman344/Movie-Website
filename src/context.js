import React, { useContext, useEffect, useState } from "react"

export const API_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext= React.createContext()

const AppProvider = ({children})=>{
const[isLoading, setIsLoading]=useState(true)
const[Movie, setMovie]=useState([])
const[search,setSearch]=useState("titanic")
const[errorMsg, setErrorMsg]=useState({show:"false",msg:""})
    const getMovie = async (url)=>{
        setIsLoading(true)
try{
       const res= await fetch(url);
       const data= await res.json();
       
       if((data.Response) === "True"){
          setIsLoading(false);
          setErrorMsg({
            show:"false", 
            msg: ""
          })
          setMovie(data.Search)
       }
       else{
        setErrorMsg({show:"true",msg:data.Error})
       }
}catch(error){
    console.log(error)
}
    }

useEffect(()=>{
   let timerOut= setTimeout(()=>{
        getMovie(`${API_URL}&s=${search}`)
    },500)
return ()=>clearTimeout(timerOut)
},[search])

return <AppContext.Provider value={{isLoading,Movie,errorMsg,search,setSearch}}>
    {children}
</AppContext.Provider>
}

const GlobalContext = ()=>{
    return  useContext(AppContext)
}

export {AppContext,AppProvider, GlobalContext}