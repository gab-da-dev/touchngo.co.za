import React, {useState} from 'react';

const Jumbotron = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <div
                id="jumbotron"
                className="jumbotron col-12 hide"
                style={{
                backgroundImage: `url(http://localhost:8000/storage/product_images/_MEALS_IMAGES_2.jpeg`,
                backgroundSize: `cover`,
                height: `300px`,
                borderRadius: "0px",
                // display: 'block'
            }}></div>
        </React.Fragment>
    );
}

export default Jumbotron;