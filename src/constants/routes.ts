export const ROUTES = {
    default: '/',
    auth: {
        main: '/auth',
        recoverPassword: '/auth/recoverPassword',
        registration: '/auth/registration',
    },
    account: {
        main: '/account',
        posts: '/account/posts',
        post: '/account/posts/:id?',
        users: '/account/users',
    }
}