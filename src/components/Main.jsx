import React from 'react'

function Main() {
    return (
        <div className='main'>
            <div className="container">
                <img className='photo' src='https://i.ibb.co/PgPRQBy/pana.png' />
                <div className="title">
                    <h1 className='title__name'>Welcome to
                        <span className='title__name__span'> Dwidasa Samsara Indonesia (DSI)</span>
                    </h1>
                    <h3 className='title__text'>
                        Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of
                        them has a common end objective to innovate new creations by making the most of the ever-growing
                        information technology through <sapn className="title__text__span">DSI’s</sapn> distinct front-end based application concept.
                    </h3>
                    <h3 className='title__text'>
                        Managed by a team of professional experts with extensive experience and impressive track records,
                        <sapn className="title__text__span">DSI</sapn> believes that continuous improvements and
                        innovations assure your business to run effectively and efficiently.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Main