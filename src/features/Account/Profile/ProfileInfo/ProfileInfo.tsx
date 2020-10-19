import React, { useCallback, useEffect } from 'react'
import { Box, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { logout, fetchProfile } from '../../../Auth/actions';
import { useStyles } from './styles';
import ProfileCard from 'components/ProfileCard';
import { selectProfile } from 'features/Auth/selectors';

const ProfileInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const profile = useSelector(selectProfile)

    const handleLogout = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    return (
        <>
            <Box width='100%' mb={4} className={classes.buttons}>
                <Box><Button component={NavLink} to={ROUTES.account.profileEdit} variant="contained" color="primary">Редактировать профиль</Button></Box>
                <Box ml={2}><Button variant="contained" color="primary" onClick={handleLogout}>Выйти с профиля</Button></Box>
            </Box>
            <ProfileCard profile={profile} />
        </>
    )
}

export default ProfileInfo
