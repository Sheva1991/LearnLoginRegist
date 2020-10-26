export const ROUTES = {
    auth: {
        main: '/auth',
        login: '/auth/login',
        recoverPassword: '/auth/recoverPassword',
        resetPassword: '/auth/password-reset',
        registration: '/auth/registration',
        verify: '/auth/email-verify'
    },
    account: {
        main: '/',
        profile: '/profile',
        profileInfo: '/profile/info',
        posts: '/posts',
        post: '/posts/:id?',
        users: '/users',
        userDetail: '/users/:id'
    }
}