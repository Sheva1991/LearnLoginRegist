import React from 'react'
import { UserProps } from './types';
import Link from 'components/Link';
import styles from './User.module.scss'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';



const User: React.FC<UserProps> = ({ user }) => {
    return (
        <Card className={styles.root}>
            <CardMedia
                className={styles.media}
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
            <CardActions className={styles.linkContainer}>
                <Link className={styles.link} link='/posts' title='Posts' />
            </CardActions>
        </Card>
    )
}

export default User
