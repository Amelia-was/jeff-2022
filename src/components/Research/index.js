import React from 'react';
import { academicPapers } from '../../utils/research';
import Paper from '../Paper';

function Research() {
    return (
        <section>
        <h4>Academic Papers</h4>
            {academicPapers.map(paper => <Paper 
                key={paper.title} 
                title={paper.title}
                authors={paper.authors}
                journal={paper.journal}
                abstract={paper.abstract}
                paperLink={paper.paperLink}
                isComingSoon={paper.isComingSoon} />)}
        </section>
    )
}

export default Research;