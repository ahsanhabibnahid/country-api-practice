import React from 'react';

const Country = (props) => {
    const {name, population, region, flags} = props.country
    const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry
    return (
        <div style={countryStyle}>
            <h3>This is a {name}</h3>
            <img style={{height: '50px'}} src={flags[0]} alt="" />
            <p>This is a {population}</p>
            <p>This is a {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;