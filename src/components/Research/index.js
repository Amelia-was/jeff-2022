import React from 'react';

import { workingPapers, publications, policyOutreach } from '../../utils/research';
import Paper from '../Paper';

function Research() {
    console.log('Built by Amelia')
    return (
        <section>
        <h4>Working Papers</h4>
            {workingPapers.map(paper => <Paper 
                key={paper.title} 
                title={paper.title}
                authors={paper.authors}
                journal={paper.journal}
                links={paper.links}
                abstract={paper.abstract}
                citation={paper.citation} />)}
        <h4>Publications</h4>
            {publications.map(paper => <Paper
                key={paper.title}
                title={paper.title}
                authors={paper.authors}
                journal={paper.journal}
                links={paper.links}
                abstract={paper.abstract}
                citation={paper.citation} />)}
        <h4>Policy Outreach</h4>
            <p>I was part of the team of researchers involved in the <a href='https://bcbasicincomepanel.ca/wp-content/uploads/2021/01/Final_Report_BC_Basic_Income_Panel.pdf' target='_blank' rel='noreferrer' className='link'>British Columbia Basic Income Panel</a>. One policy piece coming out of this was:</p><br />

            <Paper
                title={policyOutreach[0].title}
                authors={policyOutreach[0].authors}
                journal={policyOutreach[0].journal}
                links={policyOutreach[0].links}
                abstract={policyOutreach[0].abstract}
                citation={policyOutreach[0].citation} />
        </section>
    )
}

export default Research;

/*         
worksInProgress
            <h4>Works In Progress</h4>
{worksInProgress.map(paper => <Paper
                key={paper.title}
                title={paper.title}
                authors={paper.authors}
                journal={paper.journal}
                links={paper.links}
                abstract={paper.abstract}
                citation={paper.citation} />)}
                */