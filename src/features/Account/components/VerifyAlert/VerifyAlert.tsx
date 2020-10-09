import { Box, Button, Typography } from '@material-ui/core'
import React, { useCallback } from 'react'

const VerifyAlert = () => {

    const handleClick = useCallback(
        () => {
            console.log('sent mail again');
        },
        [],
    )
    return (
        <Typography variant="h5" align='center' component="h4">
            Аккаунт не верийицирован!
            <Box margin={2}>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Отправить повторно письмо на почту для верификации
                    </Button>
            </Box>
        </Typography>
    )
}

export default VerifyAlert
