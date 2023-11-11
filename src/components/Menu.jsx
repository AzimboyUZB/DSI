import { Select } from 'antd'
import Link from 'next/link'
import React from 'react'

function Menu({ openModal, setOpenModal }) {
    return (
        <div className={openModal ? "menu open" : "menu"}>
            <div className="container">
                <Link className="icon__menu" href="" onClick={() => setOpenModal(false)}>X</Link>
                <div className="menu__nav">
                    <Link href=""  onClick={() => setOpenModal(false)}>
                        <h1 className="menu__list">Services</h1>
                    </Link>
                    <Link href=""  onClick={() => setOpenModal(false)}>
                        <h1 className="menu__list">Product</h1>
                    </Link>
                    <Link href=""  onClick={() => setOpenModal(false)}>
                        <h1 className="menu__list">Technology</h1>
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
                    <Link href=""  onClick={() => setOpenModal(false)}>
                        <h1 className="menu__list">Partner</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu