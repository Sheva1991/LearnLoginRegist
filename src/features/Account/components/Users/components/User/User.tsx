import React from 'react'
import { UserProps } from './types';
import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { useStyles } from './styles';



const User: React.FC<UserProps> = ({ user }) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia
                component='img'
                image={user.photo}
                title="User photo"
                height="150"
            />
            <CardContent>
                <Typography variant="h4" component="h2">
                    Имя: {user.name}
                </Typography>
                <Typography variant="h5" component="h3">
                    Пользователь id: {user.id}
                </Typography>
                <Typography variant="h5" component="h3">
                    Email: {user.email}
                </Typography>
            </CardContent>
            <CardActions className={classes.btn}>
                <Link component={NavLink} to={ROUTES.account.posts}>
                    <Button color='primary' variant="contained">Posts</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default User
