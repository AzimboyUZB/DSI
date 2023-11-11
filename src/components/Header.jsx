import { Select } from 'antd'
import Link from 'next/link'
import React from 'react'
import { HomeOutlined, MailOutlined, MenuOutlined } from '@ant-design/icons';
import IconArrow from '@/assets/icons/IconArrow';

function Header({setOpenModal}) {
    return (
        <div className="header">
            <div className="container">
                <img className="header__logo" src="https://i.ibb.co/VJJgnHb/Group-1317.png" />
                <div className="header__nav">
                    <Link href="">
                        <h1 className="header__list">Services</h1>
                    </Link>
                    <Link href="">
                        <h1 className="header__list">Product</h1>
                    </Link>
                    <Link href="">
                        <h1 className="header__list">Technology</h1>
                    </Link>
                    <Select
                        defaultValue="aboute1"
                        style={{
                            width: 90,
                        }}
                        options={[
                            {
                                value: 'aboute1',
                                label: 'Aboute',
                            },
                            {
                                value: 'aboute2',
                                label: 'Aboute',
                            },
                            {
                                value: 'aboute3',
                                label: 'Aboute',
                            },
                        ]}
                    />
                    <Select
                        defaultValue="client1"
                        style={{
                            width: 80,
                        }}
                        options={[
                            {
                                value: 'client1',
                                label: 'Client',
                            },
                            {
                                value: 'client2',
                                label: 'Client',
                            },
                            {
                                value: 'client3',
                                label: 'Client',
                            },
                        ]}
                    />
                    <Link href="">
                        <h1 className="header__list">Partner</h1>
                    </Link>
                </div>
                <div className="box__btns">
                    <Link href=""><HomeOutlined /></Link>
                    <Link href=""><MailOutlined /></Link>
                    <Link href=""><IconArrow /></Link>
                    <Link className="icon__menu" href="" onClick={() => setOpenModal(true)}><MenuOutlined /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header