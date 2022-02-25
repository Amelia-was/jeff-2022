import React, { useState } from 'react';
import { IoLink } from 'react-icons/io5';

function Paper({ title, paperLink, links, authors, journal, abstract, isComingSoon }) {
    const collapsed = true;
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return(
        <div className='paper mb-3'>
            
            <span>
                {title} {isComingSoon && <h5 className='mb-2 d-inl'>(Coming Soon!)</h5>}
            </span>
            <p><b>{journal}</b> <em>{authors}</em></p>
            {abstract && 
            <>
                <div className='mt-1'>
                    <button type='button' className='btn' id='abstract-button' onClick={() => setIsCollapsed(!isCollapsed)}>{isCollapsed ? '▸' : '▾'} Abstract</button>
                    {links && links.map(link => <div key={link.url} className='d-inl'> | <a key={link.url} href={link.url} target='_blank' rel='noreferrer' className='link'>{link.title}</a></div>)}
                </div>
                {isCollapsed ? <></> : <div id='abstract' className='abstract-text'>{abstract}</div>}
            </>
            }
        </div>
    );
};

export default Paper;