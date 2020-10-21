import { CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react'
import Post from './Post'
import { useStyles } from './styles';
import Pagination from '@material-ui/lab/Pagination';
import SimpleModal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions';
import { selectData, selectFetching, selectTotalPosts, selectPerPage } from './selectors';
import { useHistory } from 'react-router-dom';
import FormPost from 'features/Account/Posts/PostList/FormPost';
import { addPost } from './FormPost/actions';


const PostsList = memo(() => {
    const [page, setPage] = useState(1)
    const history = useHistory()
    const data = useSelector(selectData)
    const total = useSelector(selectTotalPosts)
    const perPage = useSelector(selectPerPage)
    const fetching = useSelector(selectFetching)
    const classes = useStyles();
    const dispatch = useDispatch()
    const totalSize = total ? total : 1
    const perPageSize = perPage ? perPage : 1
    const totalPages = Math.ceil(totalSize / perPageSize)

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }, []);

    useEffect(() => {
        dispatch(fetchPosts(page, 6))
        history.push({
            pathname: '/posts',
            search: `page=${page}`
        })
    }, [dispatch, history, page])

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3">
                Статьи
            </Typography>
            <SimpleModal btnTitle='Add post'>
                <FormPost action={addPost} />
            </SimpleModal>

            {fetching ?
                <Container className={classes.loader}>
                    <CircularProgress />
                </Container>
                :
                <>
                    <Pagination className={classes.pagination} count={totalPages} color="primary" page={page} onChange={handleChange} />
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
                </>
            }
        </Container>
    )
}
)

export default PostsList
