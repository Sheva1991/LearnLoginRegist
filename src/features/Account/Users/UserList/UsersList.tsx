import { Grid, Container, Typography, CircularProgress } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions';
import { selectData, selectFetching, selectTotalUsers, selectPerPage } from './selectors';
import { useHistory } from 'react-router-dom';
import User from './User/User';


const UsersList = memo(() => {
    const [page, setPage] = useState(1)
    const history = useHistory()
    const data = useSelector(selectData)
    const total = useSelector(selectTotalUsers)
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
        dispatch(fetchUsers(page, 6))
        history.push({
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
                    <Pagination className={classes.pagination} count={totalPages} color="primary" page={page} onChange={handleChange} />
                    <Grid container spacing={2}>
                        {data && data.map((user) =>
                            <Grid item md={4} sm={6} key={user.id}>
                                <User profile={user.profile} postsCount={user.posts_count} id={user.id} />
                            </Grid>
                        )
                        }
                    </Grid>
                </>}
        </Container>
    )
}
)

export default UsersList
