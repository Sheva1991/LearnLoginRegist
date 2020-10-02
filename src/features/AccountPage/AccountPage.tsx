import React from 'react'
import { Container } from '@material-ui/core';

const AccountPage = () => {
    const loginOn = false;
    return (
        <Container>
            {
                loginOn ? <h3>Вы вошли. Информация юзера</h3>
                    : <h3>Зайдите в систему</h3>
            }
        </Container>


    )
}

export default AccountPage
