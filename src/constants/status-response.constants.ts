export const STATUS_RESPONSE = {
    global: {
        serverError: {
            code: 'global-server-error',
            message: 'Server Error'
        }
    },
    session: {
        userNotFound: {
            code: 'user-not-found',
            message: "User not found!"
        },
        userUnauthorized: {
            code: 'user-unauthorized',
            message: "User incorrect"
        },
        userLoginSuccess: {
            code: 'user-loginsuccess',
            message: "Login-success"
        }
    },
    user: {
        userRegistered: {
            coder: 'user-registred',
            message: 'User registred succesfull'
        }
    }
}