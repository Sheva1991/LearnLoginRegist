import { AppBar, Container, Toolbar } from '@material-ui/core';
import React from 'react'
import Link from 'components/Link';
import HMenu from 'components/Menu';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <AppBar position="static">
            <Container >
                <Toolbar className={styles.header}>
                    <Link link='/' title='Logo' className={styles.logo} />
                    <div style={{ display: 'flex', alignItems: 'center  ' }}>
                        <HMenu />
                        <Link link='/login' title='Login' className={styles.link} />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
