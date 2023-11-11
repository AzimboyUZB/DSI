import React from 'react'

function ProductAndServise() {

    const card = [
        {
            id: 1,
            img: "https://i.ibb.co/nc5WKrS/product-description-1.png",
            name: "Our Product",
            title: "Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.",
        },
        {
            id: 2,
            img: "https://i.ibb.co/vv8p20x/verified-1.png",
            name: "Our Service",
            title: "DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.",
        },
        {
            id: 3,
            img: "https://i.ibb.co/J5nYQHH/cogwheel-1.png",
            name: "Our Technology",
            title: "First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.",
        }
    ]

    return (
        <div className="products__and__sevise">
            <div className="container">
                <h1 className='name'>Product And Servise</h1>
                <div className="box__card">
                    {card.map((item) => (
                        <div className="card" key={item.id}>
                            <img className="card__img" src={item.img} />
                            <h2 className="card__name">{item.name}</h2>
                            <h6 className="card__title">{item.title}</h6>
                            <button className="card__btn">Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductAndServise