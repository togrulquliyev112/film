
import React, { useEffect, useState } from "react"
import { getMuvieData } from "../../services/db"
import Cart from "../cart/cart"
import './form.css'
//#region
const Form = ({setList,list}) => {
  const [data, setData] = useState([])
  const handleSubmit = async (e) => {

    e.preventDefault()

    const result = await getMuvieData(e.target.movie.value)
    setData(result)
    //#endregion
  }
 
  return (
    <>
      <div className="formlar">
        <div className="form1">
          <form onSubmit={handleSubmit}>
            <label>
              <h6> Искать фильм по названию:</h6>
              <input type='text' placeholder="film adini daxil edin" name="movie"></input>
            </label>
            <button type="submit">Искать</button>
          </form>
        </div>
      </div>
     <>
      <Cart movieData={data} setList={setList} list={list}/>
     </>
    
    </>
  )






}
export default Form