export const ROUTES = {
    auth: {
        main: '/auth',
        login: '/auth/login',
        recoverPassword: '/auth/recoverPassword',
        registration: '/auth/registration',
        verify: '/auth/email-verify'
    },
    account: {
        main: '/',
        posts: '/posts',
        post: '/posts/:id?',
        users: '/users',
    }
}