import React from 'react';
import ListElement from '../ListElement';

function ListGroup({ heading }) {
    const instructor = [
        {
            title: 'Labour Economics: Employment, Wages, and Public Policy',
            description: 'Undergrad, University of Toronto, 2021-2022',
            link: [
                {
                text: 'Evals 1',
                url: 'url'
            }
        ]
        }
    ]

    const teachingAssistant = [
        {
            title: 'Research Design and Policy Analysis',
            description: 'MA, UBC, 2019'
        },
        {
            title: 'Microeconomics for Policy Analysis',
            description: 'Master’s of Public Policy and Global Affairs, UBC, 2018',
            link: [
                {
                text: 'Evals 1',
                url: 'url'
                },
                {
                    text: 'Evals 2',
                    url: 'url'
                }
            ]
        },
        {
            title: 'Benefit - Cost Analysis',
            description: 'UBC, Undergraduate, 2017',
            link: [ 
                {
                    text: 'Evaluation',
                    url: 'url'
                }
            ]
        },
        {
            title: 'Introduction to Microeconomics / Macroeconomics',
            description: 'Queen’s University 2014 / 15'
        },
        {
            title: 'International Trade',
            description: 'Mount Allison University, 2013'
        },
        {
            title: 'Intermediate Microeconomics',
            description: 'Mount Allison University, 2012 - 2013'
        }
    ]

    function pickCat(h) {
        if (h == 'Instructor') {
            console.log(h, 'instructor')
            return instructor;
        }
        else {
            console.log(h, 'TA')
            return teachingAssistant;
        }
    }

    return (
        <div>
            <h4>{heading}</h4>
            <ul>
                {pickCat(heading).map(
                    obj => <ListElement key={obj.title} title={obj.title} description={obj.description} />
                )}
            </ul>
        </div>
    );
};

export default ListGroup;