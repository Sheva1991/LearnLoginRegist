import React from 'react'
import { Card, CardContent, Typography, CardMedia, Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetails, editPost } from './actions';
import { selectPost } from './selectors';
import { useStyles } from './styles';
import SimpleModal from 'components/Modal/Modal';
import FormPost from 'features/Account/Posts/PostList/FormPost';

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
        <Card className={classes.root}>
            { post?.image ? <CardMedia
                className={classes.media}
                image={post?.image}
                title={`image for ${post?.name}`}
            /> : null}
            <CardContent>
                <Box mb={4}>
                    <Typography variant="h5" component="h5">
                        Номер статьи: {post?.id}.
                    </Typography>
                    <Typography variant="h6" component="h3">
                        Название статьи: {post?.name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        Содержание: {post?.text}
                    </Typography>
                </Box>
                <SimpleModal btnTitle='Edit post'>
                    <FormPost action={editPost} id={id} data={post} />
                </SimpleModal>
            </CardContent>
        </Card>
    )
}

export default DetailsPost
