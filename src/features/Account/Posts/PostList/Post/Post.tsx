import { Card, CardContent, Typography, CardActions, Link, Button } from '@material-ui/core';
import React from 'react'
import { PropsType } from './types';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import { ROUTES } from 'constants/routes';

const Post: React.FC<PropsType> = ({ post }) => {
    const classes = useStyles()
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h5">
                    Номер статьи: {post.id}.
                </Typography>
                <Typography variant="h6" component="p">
                    Название статьи: {post.name}
                </Typography>
            </CardContent>
            <CardActions className={classes.btn}>
                <Link component={NavLink} to={ROUTES.account.posts + `/${post.id}`}>
                    < Button color='primary' variant="contained">Details</Button>
                </Link>
            </CardActions>
        </Card >
    )
}

export default Post
