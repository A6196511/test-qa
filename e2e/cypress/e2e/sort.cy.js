//The tests below are failing due to:
//Bug 1 - "page" query parameter actually is started from 0 instead of 1.
//Bug 2 - "sort" query parameter with value "asc" actually sorts by desc and vice versa


it('should successfully return 5 records sorted by id asc (with sort query parameter, value=asc)', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('BASE_PATH')}/courses?limit=5&sort=asc`,
    })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq([
                {
                    id: 12,
                    name: 'Assessing Drivers of Business Growth',
                    url: 'of-business-growth'
                },
                {
                    id: 14,
                    name: 'Budgeting and Forecasting',
                    url: 'budgeting-and-forecasting'
                },
                {
                    id: 57,
                    name: 'Building a 3 Statement Financial Model',
                    url: 'statement-financial-model'
                },
                {
                    id: 312,
                    name: '5 Cs of Credit',
                    url: '5-cs-of-credit'
                },
                {
                    id: 356,
                    name: 'Assessing Management',
                    url: 'assessing-management'
                },
            ])
        })
})

it('should successfully return 5 records sorted by id desc (with sort query parameter, value=desc)', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('BASE_PATH')}/courses?limit=5&sort=desc`,
    })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq([
                {
                    id: 356,
                    name: 'Assessing Management',
                    url: 'assessing-management'
                },
                {
                    id: 312,
                    name: '5 Cs of Credit',
                    url: '5-cs-of-credit'
                },
                {
                    id: 57,
                    name: 'Building a 3 Statement Financial Model',
                    url: 'statement-financial-model'
                },
                {
                    id: 14,
                    name: 'Budgeting and Forecasting',
                    url: 'budgeting-and-forecasting'
                },
                {
                    id: 12,
                    name: 'Assessing Drivers of Business Growth',
                    url: 'of-business-growth'
                },
            ])
        })
})