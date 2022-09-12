import React from 'react'
import "./PageHeader.css"

function PageHeader(props) {

    const dogimage = props.picture;
  return (
    <div className='PageHeader'>
        <h1>{props.name}</h1>
        <div className='pageheader_dog'>
            <img src={dogimage}/>
        </div>
    </div>
  )
}

export default PageHeader