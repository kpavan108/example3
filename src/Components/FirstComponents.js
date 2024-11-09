import React, { useEffect, useState } from "react";

function Firstcomponent() {
    const [data, setData] = useState("firstname");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const handleApi = async () => {
            let response = await fetch('https://fakestoreapi.com/products');
            let finalData = await response.json();
            setCards(finalData);
        };

        handleApi();
    }, []);

    // Toggle the data state between "firstname" and "secondname"
    const toggleData = () => {
        setData((prevData) => (prevData === "firstname" ? "secondname" : "firstname"));
    };

    return (
        <div>
            <h1>First Component</h1>
            <button onClick={toggleData}>{data}</button>

            <div className="row">
                {cards.map((item) => (
                    <div key={item.id} className="bg-success col">
                        <h1>{item.category}</h1>
                        <p>{item.description}</p>
                        <p>ID: {item.id}</p>
                        <img src={item.image} alt="product" style={{ width: "100px" }} />
                        <p className="text-primary">Price: ${item.price}</p>
                        <p>Rating: {item.rating.rate}</p>
                        <p>Reviews: {item.rating.count}</p>
                        <p>Title: {item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Firstcomponent;