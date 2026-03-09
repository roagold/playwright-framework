
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