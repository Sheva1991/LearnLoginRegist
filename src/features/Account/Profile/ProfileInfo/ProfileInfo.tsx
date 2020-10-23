import React, { useCallback, useEffect } from 'react'
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout, fetchProfile } from '../../../Auth/actions';
import { useStyles } from './styles';
import ProfileCard from 'components/ProfileCard';
import { selectProfile } from 'features/Auth/selectors';
import SimpleModal from 'components/Modal/Modal';
import ProfileEdit from '../ProfileEdit';
import { useModal } from 'hooks/useModal';

const ProfileInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const profile = useSelector(selectProfile)
    const { opened, Open, Close } = useModal()

    const handleLogout = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    return (
        <>
            <Box mb={4} className={classes.buttons}>
                <Box>
                    <Button color='primary' variant="contained" type="button" onClick={Open}>
                        Редактировать профиль
                </Button>
                    <SimpleModal opened={opened} modalClose={Close}>
                        <ProfileEdit modalClose={Close} />
                    </SimpleModal>
                </Box>
                <Box ml={2}><Button variant="contained" color="primary" onClick={handleLogout}>Выйти с профиля</Button></Box>
            </Box>
            <ProfileCard profile={profile} />
        </>
    )
}

export default ProfileInfo
