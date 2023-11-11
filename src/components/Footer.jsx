import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__box">
                    <img className='footer__box__img' src='https://i.ibb.co/0VtV8zM/Group-1317-1.png' />
                    <h3 className='footer__box__name'>PT Dwidasa Samsara Indonesia</h3>
                    <h6 className='footer__box__title'>Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</h6>
                </div>
                <div className="footer__box">
                    <h3 className="footer__box__name2">Contact</h3>
                    <div className="footer__box__title">
                        Phone : +62.21.5314.1135
                        Fax : +62.21.5314.1135
                        Email : community@dwidasa.com
                    </div>
                </div>
            </div>
            <div className="footer__buttom">Copyright © 2015 - Dwidasa Samsara Indonesia</div>
        </div>
    )
}

export default Footer