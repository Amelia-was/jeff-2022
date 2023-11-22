/*
    add a paper in this format
    the order of the properties (title, authors, etc. doesn't matter)
    note that citation is surrounded by backticks (`) not single-quotes (')
    whitespace matters on the citation; the indentation, linebreaks, etc. will appear as they are here
    only title, authors, and journal are required
    {
        title: 'title goes here',
        authors: 'Author 1, Author 2, etc.',
        journal: 'Journal Name Vol X. If there's no journal name only put the Month/Year [eg. November 2021]',
        date: 'March 2023',
        // the rest are optional
        abstract: 'abstract goes here',
        citation: `@article{ClemensGottliebHicks,
    title = {How Would Medicare for All Affect Health System Capacity? Evidence from Medicare for Some},
    author = {Jeffrey Clemens and Joshua D. Gottlieb and Jeffrey Hicks},
    year = {2020},
    journal = {Tax Policy and the Economy},
    month = {forthcoming}
}`,
        links: [
            // one of these should be the link to the journal/paper
            {
                title: 'Journal',
                url: 'journal url goes here'
            }
            {
                title: 'Name of Link',
                url: 'url goes here'
            },
            {
                title: 'Name of link',
                url: 'url goes here'
            }
        ]
    }
*/



const workingPapers = [
    {
        title: 'The Effect of Reducing Welfare Access on Employment, Health, and Children\'s Long-Run Outcomes',
        authors: 'Jeffrey Hicks (Co-Lead Author), Gaelle Simard - Duplain (Co-Lead Author), David Green, William Warburton',
        abstract: 'How does welfare affect the prosperity of mothers and their children? We study this question using a Canadian welfare reform and by linking administrative welfare records to tax returns, nearly all medical spending, and children\'s educational attainment. Eighty percent of mothers in the complier group found employment within a year, and for many, total income rose despite reduced transfers. We find precise zero effects on total health expenditures for both mothers and children. However, composition changes, including fewer family physician visits, indicate that mothers had less time to seek health care. We find precise zero effects on children\’s test scores and graduation, but modest reductions of intergenerational transmission of welfare.',
        journal: 'June 2022 Under Revision',
        links: [
            {
                title: 'Paper',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4147958'
            }
        ]
    },
    {
        title: 'Cash Welfare, Health Spending, and Long-Run Dependence',
        authors: 'Jeffrey Hicks',
        journal: 'Under pre-publication ministry review'
    },
    {
        title: 'The Spillover Effects of Top Income Inequality',
        authors: 'Joshua Gottlieb, David Hemous, Jeffrey Hicks, Morten Olsen',
        journal: 'December 2019',
        abstract: 'Top income inequality in the United States has increased considerably within occupations as diverse as bankers, managers, doctors, lawyers and scientists. The breadth of this phenomenon has led to a search for a common explanation.We show instead that increases in income inequality originating within a few occupations can "spill over" into others, driving broader changes in income inequality. We develop an assignment model where widget makers with heterogeneous income buy services from doctors with heterogeneous ability. In equilibrium the highest-earning widget makers match with the highest-ability doctors. Increases in income inequality among the widget makers feed directly into the doctors\' income inequality.We provide empirical support for the proposed mechanism using data on the match between doctors and patients, and the payments doctors receive. Using a Bartik-style instrument, we show that an increase in general income inequality causes higher income inequality for doctors and dentists, and in fact accounts for most of the increases in inequality within these occupations.',
        links: [
            {
                title: 'Paper',
                url: 'http://users.nber.org/~jdgottl/SpilloversGHHO.pdf'
            }
        ]
    }
]

const publications = [
    {
        title: 'How Well-Targeted are Payroll Tax Cuts as a Response to COVID-19? Evidence from China',
        authors: 'Wei Cui, Jeffrey Hicks, Max Norton',
        journal: 'International Tax and Public Finance',
        date: '2022, Vol 29',
        abstract: 'Numerous countries cut payroll taxes in response to COVID-19, including China, which reduced employer contributions by up to 21 percentage points. We use administrative data on more than 800,000 Chinese firms to evaluate payroll tax cuts as a business relief measure. We estimate that the tax cuts cover 31.5% of the decline in business cash flow, but labor informality causes 53% of registered firms---24% of aggregate economic activity---to receive no benefits at all. We quantify the targeting of the policy in terms of how much benefits flow to small firms less able to access external finance and to sectors worse hit by COVID-19. We find that (1) small firms and vulnerable industries are comparatively more labor intensive, which leads to desirable targeting; (2) labor informality worsens, but does not eliminate, targeting by firm size; and (3) labor informality is uncorrelated with the COVID-19 shock, and therefore does not affect targeting by sector.',
        citation: `@article{CuiHicksNorton,
            title = {How Well-Targeted are Payroll Tax Cuts as a Response to COVID-19? Evidence from China},
            journal = {International Tax and Public Finance},
            year = {2022},
            volume = {29},
            number = {5},
            doi = {https://doi.org/10.1007/s10797-022-09746-w},
            url = {https://link.springer.com/article/10.1007/s10797-022-09746-w},
            author = {Cui, Wei and Hicks, Jeffrey and Norton, Max},
        }`, 
        links: [
            {
                title: 'Journal',
                url: 'https://link.springer.com/article/10.1007/s10797-022-09746-w'
            },
            {
                title: 'Paper',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3686345'
            },
            {
               title: 'Online Appendix',
               url: 'https://static-content.springer.com/esm/art%3A10.1007%2Fs10797-022-09746-w/MediaObjects/10797_2022_9746_MOESM1_ESM.pdf' 
            },
            {
                title: 'Code',
                url: 'https://github.com/jeffhicks05/Code_repository_for_cui_hicks_norton_2022'
            }

        ]
    },
    {
        title: 'Cash on the Table? Imperfect Take-up of Tax Incentives and Firm Investment Behavior',
        authors: 'Wei Cui, Jeffrey Hicks, Jing Xing',
        journal: 'Journal of Public Economics',
        date: '2022, Vol 208',
        abstract: 'We investigate whether tax incentives are effective in stimulating private investment in less developed countries, by exploiting the introduction of accelerated depreciation for fixed assets investment in China as a natural experiment. In contrast to the large positive impact of similar tax incentives in the U.S. and U.K. found in recent studies, accelerated depreciation appeared ineffective in stimulating Chinese firms\' investment. Using confidential corporate tax returns from a large province, we find that firms fail to claim the tax benefits on over 80 percent of eligible investments. Firms\' take-up of the tax incentive is significantly influenced by their taxable positions and tax sophistication. Information transmission and resources of local tax authorities also play a significant role. Our study contributes to the understanding of conditions under which tax-based investment incentives can be effective.',
        citation: `@article{CuiHicksXing,
            title = {Cash on the table? Imperfect take-up of tax incentives and firm investment behavior},
            journal = {Journal of Public Economics},
            volume = {208},
            pages = {104632},
            year = {2022},
            issn = {0047-2727},
            doi = {https://doi.org/10.1016/j.jpubeco.2022.104632},
            url = {https://www.sciencedirect.com/science/article/pii/S0047272722000342},
            author = {Cui, Wei and Hicks, Jeffrey and Xing, Jing},
        }`, 
        links: [
            {
                title: 'Journal',
                url: 'https://www.sciencedirect.com/science/article/pii/S0047272722000342?dgcid=author'
            },
            {
                title: 'Paper',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3695120'
            },
            {
                title: 'Online Appendix',
                url: 'https://ars.els-cdn.com/content/image/1-s2.0-S0047272722000342-mmc1.pdf'
            },
            {
                title: 'Code',
                url: 'https://github.com/jeffhicks05/Code_Package_Cash_on_the_Table'
            }
        ]
    } ,
    {
        title: 'How Would Medicare for All Affect Health System Capacity? Evidence from Medicare for Some',
        authors: 'Jeffrey Clemens, Joshua Gottlieb, Jeffrey Hicks',
        journal: 'Tax Policy and the Economy',
        date: ' 2021, Vol 35',
        abstract: 'Proposals to create a national health care plan such as "Medicare for All" rely heavily on reducing the prices that insurers pay for health care. These changes affect physicians\' short-run incentives for care provision and may also change health care providers\' incentives to invest in capacity, thereby influencing the availability of care in the long term. We provide evidence on these responses using a major Medicare payment change combined with survey data on physicians\' time use. We find evidence that physicians increase their time spent on capacity building when remuneration increases, and that they are subsequently more willing to accept new patients—especially those who may be the residual claimants on marginal capacity. These forces imply that short-run supply curves likely differ from long-run supply curves. Policymakers need to account for how major changes to payment incentives would influence the investments that determine health system capacity.',
        citation: `@article{ClemensGottliebHicks,
            author = {Clemens, Jeffrey and Gottlieb, Joshua D. and Hicks, Jeffrey},
            title = {How Would Medicare for All Affect Health System Capacity? Evidence from Medicare for Some},
            journal = {Tax Policy and the Economy},
            volume = {35},
            number = {},
            pages = {225-262},
            year = {2021},
            doi = {10.1086/713497},
    url = {https://www.journals.uchicago.edu/doi/abs/10.1086/713497?journalCode=tpe}
}`,
        links: [
            {
                title: 'Journal',
                url: 'https://www.journals.uchicago.edu/doi/abs/10.1086/713497?journalCode=tpe'
            },
            {
                title: `Paper`,
                url: `https://www.nber.org/papers/w28062`    

            },
            {
                title: 'Online Appendix',
                url: 'https://users.nber.org/~jdgottl/ClemensGottliebHicksAppendix.pdf'
            },
            {
                title: 'Data and Code',
                url: 'https://github.com/jeffhicks05/Replication_Package_Clemens_Gottlieb_Hicks_2020'
            }
        ]
    }
   
]

const worksInProgress = [
    {
    title: 'In-person Support, Application Costs, and Screening in Income Support Programs',
    authors: 'Jeffrey Hicks'
    }
]


const policyOutreach = [
    {
    title: 'BC Income Assistance Trends and Dynamics: Descriptions and Policy Implications',
    authors: 'David Green, Jeffrey Hicks, Rebecca Warburton, Bill Warburton',
    journal: 'Commissioned by the Expert Panel on Basic Income, British Columbia',
    date: '2021',
    abstract: 'This paper documents various features of B.C. Income Assistance (IA), including durations of spells of IA, how durations differ according to recipient case characteristics, and how durations and case characteristics have changed over time from February 1989 through December 2017, based on official B.C. administrative data. The goal of the paper is to relate these patterns to key policy questions, and so it is framed as a set of main patterns, each followed by a list of policy implications.',
    citation: `@article{GreenHicksWarburtons,
        author = {Green, David and Hicks, Jeffrey and Warburton, Rebecca and Warburton, William},
        title = {BC Income Assistance Trends and Dynamics: Descriptions and Policy Implications},
        journal = {Report commissioned by the Expert Panel on Basic Income},
        volume = {},
        number = {},
        pages = {},
        year = {2021},
url = {https://econ2017.sites.olt.ubc.ca/files/2021/03/BC-Income-Assistance-Trends-and-Dynamics-Descriptions-and-Policy-Implications_Green_Hicks_RWarburton_BWarburton1.pdf}
}`, 
    links: [
        {
            title: 'Journal',
            url: 'https://bcbasicincomepanel.ca/wp-content/uploads/2021/01/BC_Income_Assistance_Trends_and_Dynamics_Descriptions_and_Policy_Implications.pdf'
        }
    ]
    }
]

module.exports = { workingPapers, publications, worksInProgress, policyOutreach }