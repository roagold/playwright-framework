import { fa, faker } from '@faker-js/faker';

export const users = {
    validUser: {
        email: process.env.USER_EMAIL!,
        password: process.env.USER_PASS!
    },
    invalidUser: {
        email: 'invalid@gmail.com',
        password: 'somepass'
    }
}

type Title =  'Mr' | 'Mrs' | 'Miss'

export interface User {
    name: string,
    email: string,
    password: string,
    title: string
    birth_date?: string,
    birth_month?: string,
    birth_year?: string,
    firstname: string,
    lastname: string,
    company?: string,
    address1?: string,
    address2?: string,
    country?: string,
    zipcode?: string,
    state?: string,
    city?: string,
    mobile_number?: string
}

export const newUser: User = {
    name: faker.internet.displayName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    title: faker.person.prefix('male'),
    firstname: faker.person.firstName('male'),
    lastname: faker.person.lastName('male'),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    country: faker.location.country(),
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number()
}