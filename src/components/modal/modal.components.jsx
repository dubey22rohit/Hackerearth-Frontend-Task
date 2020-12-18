import React from 'react'
const Modal = (props)=>(
    <div style = {{border : '2px solid black' , 'width' : '100px' , 'height' : '100px'}}>
        <h1>{props.name} has been deleted</h1>
    </div>
)
export default Modal