import { Box, Button, ButtonGroup } from '@material-ui/core'
import LoginForm from 'components/Forms/LoginForm'
import RegistrationForm from 'components/Forms/RegistrationForm'
import Link from 'components/Link'
import React, { useState } from 'react'
import styles from './LoginPage.module.scss'



const LoginPage = () => {
    const [toggle, setToggle] = useState(true)

    const onClickOn = () => {
        setToggle(true)
    }
    const onClickOff = () => {
        setToggle(false)
    }

    return (
        <div className={styles.root}>
            <Box mb={4}>
                <ButtonGroup color="secondary">
                    <Button size='large' onClick={onClickOn}>Log in</Button>
                    <Button size='large' onClick={onClickOff}>Registration</Button>
                </ButtonGroup>
            </Box>
            {toggle ?
                <>
                    <LoginForm />
                    <Link className={styles.link} link='/login/recoveryPassword' title='Восстановаить пароль' />
                </>
                : <RegistrationForm />}
        </div>
    )
}

export default LoginPage
