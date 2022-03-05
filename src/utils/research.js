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
        title: 'How Well-Targeted are Payroll Tax Cuts as a Response to COVID-19? Evidence from China',
        authors: 'Wei Cui, Jeffrey Hicks, Max Norton',
        journal: 'November 2021',
        abstract: 'Numerous countries cut payroll taxes in response to COVID-19, including China, which reduced employer contributions by 21 percentage points. We use administrative data on 900,000 firms to evaluate payroll tax cuts as a business relief measure. We estimate that the tax cuts cover 31.5% of the decline in business cash flow, but labor informality causes 53% of registered firms—24% of aggregate economic activity—to receive no benefits at all. We quantify the targeting of the policy in terms of how much benefits flow to small firms less able to access external finance and to sectors worse hit by COVID-19. We find that (1) small firms and vulnerable industries are comparatively more labor intensive, which leads to desirable targeting; (2) labor informality worsens, but does not eliminate, targeting by firm size; and (3) labor informality is uncorrelated with the COVID-19 shock, and therefore does not affect targeting by sector.',
        links: [
            {
                title: 'Journal',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3686345'
            }
        ]
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
    },
    {
        title: 'Resilient Mothers: The Effect of Reducing Welfare Access on Employment, Health, and Children\'s Long-Run Outcomes',
        authors: 'Jeffrey Hicks, Gaelle Simard - Duplain, David Green, William Warburton',
        journal: 'Coming Soon'
    }
]

const publications = [
    {
        title: 'How Would Medicare for All Affect Health System Capacity? Evidence from Medicare for Some',
        authors: 'Jeffrey Clemens, Joshua Gottlieb, Jeffrey Hicks',
        journal: 'Tax Policy and the Economy, 2021, Vol 35',
        abstract: 'Proposals to create a national health care plan such as "Medicare for All" rely heavily on reducing the prices that insurers pay for health care. These changes affect physicians\' short-run incentives for care provision and may also change health care providers\' incentives to invest in capacity, thereby influencing the availability of care in the long term. We provide evidence on these responses using a major Medicare payment change combined with survey data on physicians\' time use. We find evidence that physicians increase their time spent on capacity building when remuneration increases, and that they are subsequently more willing to accept new patients—especially those who may be the residual claimants on marginal capacity. These forces imply that short-run supply curves likely differ from long-run supply curves. Policymakers need to account for how major changes to payment incentives would influence the investments that determine health system capacity.',
        citation: `@article{ClemensGottliebHicks,
	title = {How Would Medicare for All Affect Health System Capacity? Evidence from Medicare for Some},
	author = {Jeffrey Clemens and Joshua D. Gottlieb and Jeffrey Hicks},
	year = {2020},
	journal = {Tax Policy and the Economy},
	month = {forthcoming}
}`,
        links: [
            {
                title: 'Paper',
                url: 'https://www.journals.uchicago.edu/doi/abs/10.1086/713497?journalCode=tpe'
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
    },
    {
        title: 'Cash on the Table? Imperfect Take-up of Tax Incentives and Firm Investment Behavior',
        authors: 'Wei Cui, Jeffrey Hicks, Jing Xing',
        journal: 'Journal of Public Economics (Accepted)',
        abstract: 'We investigate whether tax incentives are effective in stimulating private investment in less developed countries, by exploiting the introduction of accelerated depreciation for fixed assets investment in China as a natural experiment. In contrast to the large positive impact of similar tax incentives in the U.S. and U.K. found in recent studies, accelerated depreciation appeared ineffective in stimulating Chinese firms\' investment. Using confidential corporate tax returns from a large province, we find that firms fail to claim the tax benefits on over 80 percent of eligible investments. Firms\' take-up of the tax incentive is significantly influenced by their taxable positions and tax sophistication. Information transmission and resources of local tax authorities also play a significant role. Our study contributes to the understanding of conditions under which tax-based investment incentives can be effective.',
        links: [
            {
                title: 'Paper',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3695120'
            }
        ]
    }    
]

const policyOutreach = [
    {
    title: 'BC Income Assistance Trends and Dynamics: Descriptions and Policy Implications',
    authors: 'David Green, Jeffrey Hicks, Rebecca Warburton, Bill Warburton',
    journal: 'Commissioned by the Expert Panel on Basic Income, British Columbia (2021)',
    abstract: 'This paper documents various features of B.B Income Assistance (IA), including durations of spells of IA, how durations differ according to recipient case characteristics, and how durations and case characteristics have changed over time from February 1989 through December 2017, based on official B.C. administrative data. The goal of the paper is to relate these patterns to key policy questions, and so it is framed as a set of main patterns, each followed by a list of policy implications.',
    links: [
        {
            title: 'Journal',
            url: 'https://bcbasicincomepanel.ca/wp-content/uploads/2021/01/BC_Income_Assistance_Trends_and_Dynamics_Descriptions_and_Policy_Implications.pdf'
        }
    ]
    }
]

module.exports = { workingPapers, publications, policyOutreach }