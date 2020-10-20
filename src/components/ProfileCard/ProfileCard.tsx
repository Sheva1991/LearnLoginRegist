import React from 'react'
import { useStyles } from './styles';
import { Container, Typography, Box, Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { PropsType } from './types';


const ProfileCard: React.FC<PropsType> = ({ profile }) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Typography variant="h2" component="h1">
                Профиль
            </Typography>
            <Box width='100%' my={4} className={classes.box}>
                <Avatar variant="square" component={NavLink} to={ROUTES.account.profile} alt={`${profile?.name} ${profile?.surname}`}
                    src={profile?.avatar ? profile?.avatar : ''} className={classes.large} />
                <Typography variant="h3" component="h2">
                    {profile?.name} {profile?.surname}
                </Typography>
            </Box>
            <Typography variant="h5" component="h4">
                Информация
            </Typography>
            <Box width='100%'>
                <Typography variant="body1" component="p">
                    Дата рождения: {profile?.birthday ? profile?.birthday : `информации пока нет`}
                </Typography>
                <Typography variant="body1" component="p">
                    Телефон: {profile?.phone.code && profile?.phone.number ? `${profile?.phone.code}-${profile?.phone.number}` : 'информации пока нет'}
                </Typography>
                <Typography variant="body1" component="p">
                    Область: {profile?.address.state ? profile?.address.state : 'информации пока нет'}
                </Typography>
                <Typography variant="body1" component="p">
                    Город: {profile?.address.city ? profile?.address.city : 'информации пока нет'}
                </Typography>
            </Box>

        </Container>
    )
}

export default ProfileCard
