import React from 'react'

function HeaderButtom() {
  return (
    <div className="header__buttom">
      <div className="title">
        <h1 className='title__name'>
          Making the most of the ever-growing <br />
          <span className='title__name__span'>Information Technology</span>
        </h1>
        <h4 className='title__text'>Managed by a team of professional experts with extensive experience and impressive track records</h4>
        <button className="title__btn">Read More</button>
      </div>
      <img className='photo' src='https://i.ibb.co/2Ythc8m/pana.png' />
    </div>
  )
}

export default HeaderButtom