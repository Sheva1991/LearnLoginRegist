import { Grid, Container, Typography, CircularProgress, Box } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions';
import { selectData, selectFetching, selectTotalPages } from './selectors';
import { useHistory } from 'react-router-dom';
import User from './User/User';


const UsersList = memo(() => {
    const [page, setPage] = useState(1)
    const history = useHistory()
    const data = useSelector(selectData)
    const totalPages = useSelector(selectTotalPages)
    const fetching = useSelector(selectFetching)
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }, []);

    useEffect(() => {
        dispatch(fetchUsers(page, 6))
        history.replace({
            pathname: '/users',
            search: `page=${page}`
        })
    }, [dispatch, history, page])

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3">
                Пользователи
            </Typography>

            {fetching ?
                <Container className={classes.root}>
                    <CircularProgress />
                </Container>
                :
                <>
                    {totalPages > 1 ? <Pagination className={classes.pagination} count={totalPages} color="primary" page={page} onChange={handleChange} /> : null}
                    <Box mt={4}>
                        <Grid container spacing={2}>
                            {data && data.map((user) =>
                                <Grid item md={4} sm={6} key={user.id}>
                                    <User profile={user.profile} postsCount={user.posts_count} id={user.id} />
                                </Grid>
                            )
                            }
                        </Grid>
                    </Box>
                </>}
        </Container>
    )
}
)

export default UsersList
