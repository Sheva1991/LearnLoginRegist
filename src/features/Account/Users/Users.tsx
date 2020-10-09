import { Grid, Container, Typography, CircularProgress } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react'
import User from './components/User'
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { fetchUsers } from './actions';


const Users = memo(() => {
    const [page, setPage] = useState(1)
    const { fetching, data } = useSelector((state: RootState) => state.users)
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(fetchUsers())
        setPage(value)
    }, []);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

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
