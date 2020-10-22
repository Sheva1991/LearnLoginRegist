import React, { useCallback, useEffect } from 'react'
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout, fetchProfile } from '../../../Auth/actions';
import { useStyles } from './styles';
import ProfileCard from 'components/ProfileCard';
import { selectProfile } from 'features/Auth/selectors';
import SimpleModal from 'components/Modal/Modal';
import ProfileEdit from '../ProfileEdit';

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
                <Box>
                    <SimpleModal btnTitle='Редактировать профиль'>
                        <ProfileEdit />
                    </SimpleModal>
                </Box>
                <Box ml={2}><Button variant="contained" color="primary" onClick={handleLogout}>Выйти с профиля</Button></Box>
            </Box>
            <ProfileCard profile={profile} />
        </>
    )
}

export default ProfileInfo
