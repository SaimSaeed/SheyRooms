import React from 'react'

function Footer() {
    const date = new Date()
    const presentDate = date.getFullYear()
  return (
    <div className='text-center'>{presentDate} &reg; All Rights Reserved</div>
  )
}

export default Footer