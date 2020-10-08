import { AppBar, Container, Toolbar } from '@material-ui/core';
import React from 'react'
import HMenu from 'components/Menu';
import { useStyles } from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Container>
                <Toolbar className={classes.root}>
                    <HMenu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
