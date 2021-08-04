import "./Card.css";
import React from "react";

const Card = (props) => {
    const styleCard = {
        borderColor: props.color
    }
    const styleCardTitle = {
        backgroundColor: props.color,
    }
    return (
        <div className="Card" style={styleCard}>
            <div className="Card-Title" style={styleCardTitle}>
                <h2>{props.titulo}</h2>
            </div>
            <div className="Card-Content">{props.children}</div>
        </div>
    );
};

export default Card