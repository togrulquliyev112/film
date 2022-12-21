import React from "react"
import './list.css'
 
const List=({list,setList})=>{
    const removeData=(title)=>{
        const index= list.indexOf(title);
        list.splice(index,1)
        setList([...list])
    }
   return(
       <>
       <div className="form2">
          <input type='text' placeholder="film adini daxil edin"></input>
          <ul>
            {
                list?.map(item=>{
                    return(
                        <>
                        <li>{item}</li>
                        <button className="delete"onClick={()=>{removeData(item)}}>X</button>
                        </>
                    )
                })
            }
          </ul>
          <button type="submit">daxil edin</button>
        </div>
       </>
   )
}
export default List