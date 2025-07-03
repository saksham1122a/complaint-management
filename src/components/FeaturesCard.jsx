import React from 'react'

function FeaturesCard(props) {
    console.log("Props mil gya..", props)
    return (
        <>
            <a href="#" className="feature-card" data-category="faculty">
                <span style={{height:100, width:100}}>{props.icon}</span>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </a>
        </>
    )
}

export default FeaturesCard;