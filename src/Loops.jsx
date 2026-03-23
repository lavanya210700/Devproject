import { useState } from "react"
import './App.css'
import './Card.css'

function Loops(){
    const [like,setLike]=useState(0)
    const [dislike,setdisLike]=useState(0)
    
    

    return(
        <>
        <div className="card">
          <img className="img" 
          src="https://i.pinimg.com/736x/e8/b1/c1/e8b1c1643a32277514da3317eb652ef0.jpg"
          alt="card"/>
          <div>
            <button onClick={()=>setLike(like+1)} className="like">👍like</button>
            <h1>likes={like}</h1>
            <h1>dislikes={dislike}</h1>
            <h1>Master Branch Code</h1>
            <button onClick={()=>setdisLike(dislike-1)} className="dislike">👎dislike</button>
          </div>
        
        </div>
        </>
    )
}
export default Loops