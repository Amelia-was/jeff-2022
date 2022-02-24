import React from 'react';

function ListElement({ title, description }) {
    return (
        <li className='list-el flex row align-baseline'>
            <span>{title}</span><p>{description}</p>
        </li>
    );
};

export default ListElement;