import { Box, Typography } from '@material-ui/core'
import React from 'react'

const VerifyAlert = () => {
    return (
        <>
            <Box margin={2}>
                <Typography variant="body1" component="h4">
                    Аккаунт не верийицирован! Для просмотра этой страницы - пройдите верификацию.
                    Письмо было отправлено на вашу почту!
                </Typography>
            </Box>
        </>
    )
}

export default VerifyAlert
