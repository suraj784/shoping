import React from "react";
import './Item.css';

const ItemList = ({ products}) => {
    const renderList = (products) => {
        if (products.length > 0) {
            return products.map((data) => (
                <div key={data.id} className="card">
                    <div className="row">
                        <div className="image">
                            <img src={data.img} alt={data.name} />
                        </div>
                        <hr />
                        <span className="temp">{data.name}</span>
                    </div>
                    
                    <div className="card-body">
                        <span className="type">{data.type}</span>
                        <h4 className="title">{data.type}</h4>
                        <div className="text">
                            <p className="money">Rs. {data.price}</p>
                        </div>
                    </div>
                </div>
                
            ));
        } else {
            return <p>No products available</p>;
        }
    };


    return (
        <div className="container">
            <div className="row">
                {renderList(products)}
            </div>
        </div>
    );
};

export default ItemList;
