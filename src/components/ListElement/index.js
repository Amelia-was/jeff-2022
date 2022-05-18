import React from 'react';

function ListElement({ title, description, links }) {
    return (
        <li className='list-el flex row align-baseline'>
            <span>{title}</span><p>{description}</p>
            {links && links.map((link, i) => <div key={link.url} className='d-inl'>{i > 0 ? ' |' : ''} <a key={link.url} href={link.external ? link.url : `${process.env.PUBLIC_URL}/evals/${link.url}`} target='_blank' rel='noreferrer' className='link'>{link.title}</a></div>)}
        </li>
    );
};

export default ListElement;