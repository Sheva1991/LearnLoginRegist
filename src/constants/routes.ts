export const ROUTES = {
    default: '/',
    auth: {
        main: '/auth',
        login: '/auth/login',
        recoverPassword: '/auth/recoverPassword',
        registration: '/auth/registration',
        verify: '/auth/email-verify'
    },
    account: {
        main: '/account',
        posts: '/account/posts',
        post: '/account/posts/:id?',
        users: '/account/users',
    }
}