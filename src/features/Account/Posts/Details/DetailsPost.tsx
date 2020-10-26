import React from 'react'
import { Card, CardContent, Typography, CardMedia, Box, Container, CircularProgress, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetails, editPost } from './actions';
import { selectLoading, selectPost } from './selectors';
import { useStyles } from './styles';
import SimpleModal from 'components/Modal/Modal';
import FormPost from '../components/FormPost';
import useModal from 'hooks/useModal';


const DetailsPost = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const post = useSelector(selectPost)
    const loading = useSelector(selectLoading)
    const [opened, modalOpen, modalClose] = useModal()
    const params = useParams<{ id: string }>();
    const id = +params.id

    React.useEffect(() => {
        dispatch(fetchPostDetails(id))
    }, [id, dispatch])
    return (
        <>
            {
                loading ?
                    <Container className={classes.loader}>
                        <CircularProgress />
                    </Container>
                    :
                    <Card className={classes.root}>
                        {post?.image ? <CardMedia
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
                            <Button color='primary' variant="contained" type="button" onClick={modalOpen}>
                                Edit post
                            </Button>
                            <SimpleModal opened={opened} modalClose={modalClose}>
                                <FormPost action={editPost} id={id} data={post} modalClose={modalClose} />
                            </SimpleModal>
                        </CardContent>
                    </Card>
            }
        </>
    )
}

export default DetailsPost
