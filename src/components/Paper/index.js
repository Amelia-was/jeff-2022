import React from 'react';
import { IoLink } from 'react-icons/io5';

function Paper({ title, paperLink, authors, journal, abstract, isComingSoon }) {
    return(
        <div>
            {isComingSoon && <span className='coming-soon'>Coming Soon!</span>}
            <span className='flex row align-center'>
                <a href={paperLink} target='_blank' rel='noreferrer' className={`paper-link ${isComingSoon && 'no-link'}`}>{title}</a>{paperLink && <IoLink />}
            </span>
            <p><b>{journal}</b> <em>{authors}</em></p>
            <div className='flex row'><button type='button' id='abstract-button'><span id='open-arrow'>►▼</span>Abstract</button><a>link</a><a>link</a></div>
            <div id='abstract' className='abstract-text'>{abstract}</div>
        </div>
    );
};

export default Paper;