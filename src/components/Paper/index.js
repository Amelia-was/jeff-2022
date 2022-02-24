import React, { useState } from 'react';
import { IoLink } from 'react-icons/io5';

function Paper({ title, paperLink, links, authors, journal, abstract, isComingSoon }) {
    const collapsed = true;
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return(
        <div className='paper mb-3'>
            
            <span className='flex row align-center'>
                
                <a href={paperLink} target='_blank' rel='noreferrer' className={`paper-link ${isComingSoon && 'no-link'}`}>{title} {isComingSoon && <h5 className='mb-2 d-inl'>(Coming Soon!)</h5>}</a>{paperLink && <IoLink />}
            </span>
            <p><b>{journal}</b> <em>{authors}</em></p>
            {abstract && 
            <>
                <div className='flex row align-baseline mt-1'>
                    <button type='button' className='btn mr-1' id='abstract-button' onClick={() => setIsCollapsed(!isCollapsed)}><span className='arrow'>{isCollapsed ? '▸' : '▾'}</span> Abstract</button>
                    {links && links.map(link => <a key={link.title} href={link.url} target='_blank' rel='noreferrer' className='link mr-2'>{link.title}</a>)}
                </div>
                {isCollapsed ? <></> : <div id='abstract' className='abstract-text'>{abstract}</div>}
            </>
            }
        </div>
    );
};

export default Paper;