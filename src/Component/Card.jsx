import React, { useState } from 'react'
import '../Styles/Card.css'

function Card(props) {
  let projectDet = props.details;

  console.log(props.isPersonal);

  return (
    <>
      {props.isPersonal && <div className='card card1'>
        <div className='p-box'>
          <div className='f2 p1'>{projectDet}
          </div>
        </div>
      </div>
      }

      {!props.isPersonal && <div className='card'>
        <div className='box'>
          <div className='f2 p1'>{projectDet}
          </div>
          <h2>{props.pno}</h2>
        </div>
      </div>}
    </>
  )
}

export default Card;