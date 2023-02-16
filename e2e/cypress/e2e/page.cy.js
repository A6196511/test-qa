//The tests below are failing due to Bug 1 - "page" query parameter actually is started from 0 instead of 1.

it('should successfully return an empty list (with page query parameter, value=0)', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('BASE_PATH')}/courses?page=0`,
    })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq([])
        })
})


it('should successfully return 1st page with 2 records (without page query parameter)', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('BASE_PATH')}/courses`,
    })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq([
                {
                    id: 312,
                    name: '5 Cs of Credit',
                    url: '5-cs-of-credit'
                },
                {
                    id: 12,
                    name: 'Assessing Drivers of Business Growth',
                    url: 'of-business-growth'
                },
            ])
        })
})

it('should successfully return 1st page with 2 records (with page query parameter, value=1)', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('BASE_PATH')}/courses?page=1`,
    })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq([
                {
                    id: 312,
                    name: '5 Cs of Credit',
                    url: '5-cs-of-credit'
                },
                {
                    id: 12,
                    name: 'Assessing Drivers of Business Growth',
                    url: 'of-business-growth'
                },
            ])
        })
})


it('should successfully return 2nd page with 2 records (with page query parameter, value=2)', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('BASE_PATH')}/courses?page=2`,
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
                    id: 14,
                    name: 'Budgeting and Forecasting',
                    url: 'budgeting-and-forecasting'
                },
            ])
        })
})

it('should successfully return 3rd page with 1 record (with page query parameter, value=3)', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('BASE_PATH')}/courses?page=3`,
    })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq([
                {
                    id: 57,
                    name: 'Building a 3 Statement Financial Model',
                    url: 'statement-financial-model'
                },
            ])
        })
})