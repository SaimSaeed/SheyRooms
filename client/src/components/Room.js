import React from 'react'

function Room({ room }) {
    return (
        <div className='room-box'>
            <div className='row bs'>
                <div className='col-md-4'>

                    <img src={room.imageurls[0]} className='smallimg' alt='thumbnail' />

                </div>
                <div className='col-md-7 text-left'>
  <h1>{room.name}</h1>
  <b>
  <p>Max Count: {room.maxcount}</p>
  <p>Phone Number: {room.phonenumber}</p>
  <p>Type: {room.type}</p>
  </b>
<div style={{float:"right"}}>
    <button className='btn btn-dark '>View Details</button>
</div>
                </div>
            </div>
        </div>
    )
}

export default Room