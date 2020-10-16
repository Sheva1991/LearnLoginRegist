import { AppBar, Avatar, Container, Toolbar } from '@material-ui/core';
import React from 'react'
import HMenu from 'components/Menu';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../features/Auth/selectors';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Header = () => {
    const classes = useStyles();
    const profile = useSelector(selectProfile)

    return (
        <AppBar position="static">
            <Container>
                <Toolbar className={classes.root}>
                    <HMenu />
                    <Avatar component={NavLink} to={ROUTES.account.profileInfo} alt={`${profile?.name} ${profile?.surname}`} src={profile?.avatar ? profile?.avatar : ''} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
