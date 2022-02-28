import React from 'react';
import { workingPapers, publications } from '../../utils/research';
import Paper from '../Paper';

function Research() {
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
                    title='BC Income Assistance Trends and Dynamics: Descriptions and Policy Implications'
                    authors='David Green, Jeffrey Hicks, Rebecca Warburton, Bill Warburton'
                    journal='Commissioned by the Expert Panel on Basic Income, British Columbia (2021)'
                    paperLink='https://bcbasicincomepanel.ca/wp-content/uploads/2021/01/BC_Income_Assistance_Trends_and_Dynamics_Descriptions_and_Policy_Implications.pdf' />

            <p>
                A series of academic papers stemming from this work are expected in 2021.
            </p>
        </section>
    )
}

export default Research;