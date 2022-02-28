import React from 'react';
import ListElement from '../ListElement';
import { instructor, teachingAssistant, education, invitedPresentations, researchGrants, awards, refereeService, software, languages } from '../../utils/info';

function ListGroup({ heading }) {

    function pickCat(h) {
        switch (h) {
            case 'Instructor':
                return instructor;
            case 'Education':
                return education;
            case 'Teaching Assistant':
                return teachingAssistant;
            case 'Invited Presentations':
                return invitedPresentations;
            case 'Research Grants':
                return researchGrants;
            case 'Awards':
                return awards;
            case 'Referee Service':
                return refereeService;
            case 'Software':
                return software;
            case 'Languages':
                return languages;
            default:
                console.log(h,'something broke')
                return instructor;
        }
    }

    return (
        <div className='list-group'>
            <h4>{heading}</h4>
            <ul>
                {pickCat(heading).map(
                    obj => <ListElement key={obj.title} title={obj.title} description={obj.description} links={obj.links} />
                )}
            </ul>
        </div>
    );
};

export default ListGroup;