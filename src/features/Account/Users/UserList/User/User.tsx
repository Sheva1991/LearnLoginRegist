import React from 'react'
import { PropsType } from './types';
import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';



const User: React.FC<PropsType> = ({ profile, postsCount, id }) => {
    const classes = useStyles()
    return (
        <Card>
            {profile.avatar ?
                <CardMedia
                    component='img'
                    image={profile.avatar}
                    title="User photo"
                    height="150"
                /> : null}
            <CardContent>
                <Typography variant="h5" component="h3">
                    Id: {profile.id}
                </Typography>
                <Typography variant="h4" component="h2">
                    Имя: {profile.name}
                </Typography>
                <Typography variant="h5" component="h3">
                    Фамилия: {profile.surname}
                </Typography>
                <Typography variant="h5" component="h3">
                    Количество постов: {postsCount}
                </Typography>

            </CardContent>
            <CardActions className={classes.btn}>
                <Link component={NavLink} to={`/users/${id}`}>
                    <Button color='primary' variant="contained">more info</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default User
