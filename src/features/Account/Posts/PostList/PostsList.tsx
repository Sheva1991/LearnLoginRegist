import { Box, CircularProgress, Container, Grid, Typography, Button } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react'
import Post from './Post'
import { useStyles } from './styles';
import Pagination from '@material-ui/lab/Pagination';
import SimpleModal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost } from './actions';
import { selectData, selectFetching, selectTotalPages, selectCurrentPage, selectPerPage } from './selectors';
import FormPost from '../components/FormPost';
import { useModal } from '../../../../hooks/useModal';


const PostsList = memo(() => {
    const data = useSelector(selectData)
    const totalPages = useSelector(selectTotalPages)
    const perPage = useSelector(selectPerPage)
    const currentPage = useSelector(selectCurrentPage)
    const fetching = useSelector(selectFetching)
    const [page, setPage] = useState(currentPage)
    const { opened, Open, Close } = useModal()
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }, []);

    useEffect(() => {
        dispatch(fetchPosts(page, perPage))
    }, [dispatch, page, perPage])

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3">
                Статьи
            </Typography>
            <Button color='primary' variant="contained" type="button" onClick={Open}>
                Добавить пост
            </Button>
            <SimpleModal opened={opened} modalClose={Close}>
                <FormPost action={addPost} modalClose={Close} />
            </SimpleModal>

            {fetching ?
                <Container className={classes.loader}>
                    <CircularProgress />
                </Container>
                :
                <>
                    {totalPages > 1 ? <Pagination className={classes.pagination} count={totalPages} color="primary" page={page} onChange={handleChange} /> : null}
                    <Box mt={4}>
                        <Grid container spacing={2}>
                            {data && data.length > 0 ? data.map((post) =>
                                <Grid item md={4} sm={6} key={post.id}>
                                    <Post post={post} />
                                </Grid>
                            )
                                :
                                <Typography gutterBottom variant="h4" component="h4">
                                    Постов пока нет
                                </Typography>
                            }
                        </Grid>
                    </Box>
                </>
            }
        </Container>
    )
}
)

export default PostsList
