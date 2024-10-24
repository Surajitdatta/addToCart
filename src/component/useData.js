import React, { useState, useEffect } from 'react'

const useData=()=>{
    const[datas, setDatas] = useState([])
    const [online, setOnline] = useState(navigator.onLine)
    
    
    useEffect(()=>{
        if(!online){
            setDatas([{}])
            return
        }else if(online){
            // window.location.reload()
            const url="https://fakestoreapi.com/products"
            const fun=async()=>{
                const urlApi = await fetch(url)
                const apiJson = await urlApi.json()
                setDatas(apiJson)
            }
            fun()
        }


    },[])
    return {datas}
}
export default useData;