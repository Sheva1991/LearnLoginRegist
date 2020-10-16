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
        profileEdit: '/profile/edit',
        posts: '/posts',
        post: '/posts/:id?',
        users: '/users',
        userInfo: '/user/profile/:id?'
    }
}