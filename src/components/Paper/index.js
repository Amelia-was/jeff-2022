import React, { useState } from 'react';

function Paper({ title, links, authors, journal, date, citation, abstract }) {
    const abstractCollapsed = true;
    const [isAbstractCollapsed, setIsAbstractCollapsed] = useState(abstractCollapsed);

    const citationCollapsed = true;
    const [isCitationCollapsed, setIsCitationCollapsed] = useState(citationCollapsed);

    return(
        <div className='paper mb-3'>
            
            <span>
                {title}
            </span>
            <p><b>{journal}</b>{journal && <> </>}{date}{date && <> </>}<em className='authors'>{authors}</em></p>
            {abstract && 
            <>
                <div className='mt-1'>
                    <button 
                        type='button' 
                        className='btn'
                        onClick={() => {
                            setIsCitationCollapsed(true);
                            setIsAbstractCollapsed(!isAbstractCollapsed);
                        }}
                    >
                        <p className='btn-inner d-inl-bl'>{isAbstractCollapsed ? '▸' : '▾'} Abstract</p>
                    </button>
                    {citation && 
                    <button
                    type='button'
                    className='btn'
                        onClick={() => {
                            setIsAbstractCollapsed(true);
                            setIsCitationCollapsed(!isCitationCollapsed);
                        }}
                    >
                             | <p className='btn-inner d-inl-bl'>{isCitationCollapsed ? '▸' : '▾'} Citation</p>
                    </button>}
                    {links && links.map(link => <div key={link.url} className='d-inl'> | <a key={link.url} href={link.url} target='_blank' rel='noreferrer' className='link'>{link.title}</a></div>)}
                </div>
                {isAbstractCollapsed ? <></> : <div id='abstract' className='abstract-text'>{abstract}</div>}
                {isCitationCollapsed ? <></> : <code id='citation' className='citation-text'>{citation}</code>}
            </>
            }
        </div>
    );
};

export default Paper;