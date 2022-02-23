import React from 'react';

function ListElement({ title, description }) {
    return (
        <li className='flex row'>
            <span>{title}</span><p>{description}</p>
        </li>
    );
};

export default ListElement;