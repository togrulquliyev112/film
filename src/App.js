 import React, { useState } from "react"
import Form from "./component/form/form"
import List from "./component/form/list"
import Header from "./component/header/header"

 
 const App=()=>{
    const [list,setList]=useState([])
    return(
        <>
       <Header/>
       <List list={list} setList={setList}/>
       <Form setList={setList} list={list}/>
        </>
    )
 }
 export default App