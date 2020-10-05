import React from 'react'
import { UserProps } from './types';
import { Card, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';



const User: React.FC<UserProps> = ({ user }) => {
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
            <CardActions>
                <Link component={NavLink} to='/posts' title='Posts' />
            </CardActions>
        </Card>
    )
}

export default User
