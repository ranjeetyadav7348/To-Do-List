import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
export default function Plan(props) {
    const [cross, Newcross] = useState(false)
    const handledelete = () => {
        Newcross(!cross)
    }
    return (<>
    <div className='main'>
    <div className='notes' style={{ textDecoration: cross ? "line-through" : "none" }}>
       {props.name} </div >
        <div className='delete'> <AiOutlineDelete onClick={handledelete} /> </div>

    </div>  </>)
}

{/* <AiFillDelete onClick={handledelete} />
                <span style={{textDecoration:cross?"line-through":"none"}} >{z}</span> */}