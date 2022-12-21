import './cart.css'


const Cart = ({ movieData,setList,list }) => {
    console.log(movieData);
    const AddToList=(title)=>{
     const result =list.includes()
        if(!result){
            setList([...list,title])
        }
           
    }
    return (
        <>

            {
                movieData?.map(item => {

                    return (
                        <div className="cart">

                          <img src={`${item.Poster}`}></img>
                          <div className='cart-right'>
                          <h2>{item.Title} ({item.Year})</h2>  
                          <button onClick={()=>{AddToList(item.Title)}}>Добавить в список</button>
                          </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Cart
