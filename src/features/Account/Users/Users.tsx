import { Grid, Container, Typography, CircularProgress } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react'
import User from './components/User'
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions';
import { selectData, selectFetching } from './selectors';


const Users = memo(() => {
    const [page, setPage] = useState(1)
    const data = useSelector(selectData)
    const fetching = useSelector(selectFetching)
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(fetchUsers())
        setPage(value)
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3">
                Пользователи
            </Typography>
            <Pagination className={classes.pagination} count={10} color="primary" page={page} onChange={handleChange} />
            {fetching ?
                <Container className={classes.root}>
                    <CircularProgress />
                </Container>
                :
                <Grid container spacing={2}>
                    {data && data.map((user) =>
                        <Grid item md={4} sm={6} key={user.id}>
                            <User user={user} />
                        </Grid>
                    )
                    }
                </Grid>}
        </Container>
    )
}
)

export default Users
