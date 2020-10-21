import React from 'react'
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetails } from './actions';
import { selectPost } from './selectors';
import { useStyles } from './styles';

const DetailsPost = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const post = useSelector(selectPost)
    const params = useParams<{ id: string }>();
    const id = +params.id

    React.useEffect(() => {
        dispatch(fetchPostDetails(id))
    }, [id, dispatch])
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={post?.image}
                title={`image for ${post?.name}`}
            />
            <CardContent>
                <Typography variant="h5" component="h5">
                    Номер статьи: {post?.id}.
                </Typography>
                <Typography variant="h6" component="h3">
                    Название статьи: {post?.name}
                </Typography>
                <Typography variant="body1" component="p">
                    Содержание: {post?.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DetailsPost
