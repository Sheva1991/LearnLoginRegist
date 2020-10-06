import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { verifyAccount } from '../../actions';

const VerifyForm = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(verifyAccount())
    }
    return (
        <>
            <Box margin={2}>
                <Typography variant="body1" component="h4">
                    Аккаунт не верийицирован! Для просмотра этой страницы - пройдите верификацию
                </Typography>
            </Box>
            <Button variant='contained' color='primary' onClick={handleClick}>
                Отправить письмо для верификации
                </Button>
        </>
    )
}

export default VerifyForm
