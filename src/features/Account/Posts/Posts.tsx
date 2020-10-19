import { CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import AddPost from 'features/Account/Posts/AddPost'
import React, { memo, useCallback, useEffect, useState } from 'react'
import Post from './Post'
import { useStyles } from './styles';
import Pagination from '@material-ui/lab/Pagination';
import SimpleModal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions';
import { selectData, selectFetching } from './selectors';


const Posts = memo(() => {
    const [page, setPage] = useState(1)
    const data = useSelector(selectData)
    const fetching = useSelector(selectFetching)
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(fetchPosts())
        setPage(value)
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3">
                Статьи
            </Typography>
            <SimpleModal btnTitle='Add post'>
                <AddPost />
            </SimpleModal>
            <Pagination className={classes.pagination} count={10} color="primary" page={page} onChange={handleChange} />
            {fetching ?
                <Container className={classes.root}>
                    <CircularProgress />
                </Container>
                :
                <Grid container>
                    {data && data.map((post) =>
                        <Grid item md={3} sm={6} key={post.id}>
                            <Post post={post} />
                        </Grid>
                    )
                    }
                </Grid>
            }
        </Container>
    )
}
)

export default Posts
