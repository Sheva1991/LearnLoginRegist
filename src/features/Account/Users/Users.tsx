import { Grid, Container, Typography, CircularProgress } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react'
import User from './components/User'
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { fetchUsers } from './actions';
import withVerify from '../../../hoc/withVerify'


const Users = memo(() => {
    const [page, setPage] = useState(1)
    const { fetching, data } = useSelector((state: RootState) => state.users)
    const classes = useStyles();
    const dispatch = useDispatch()
    // const data = [
    //     {
    //         id: 0,
    //         name: '1',
    //         email: '2',
    //         photo: 'https://i1.wp.com/itc.ua/wp-content/uploads/2016/05/scarlett-johansson-s-black-widow-will-finally-star-in-her-own-movie-marvel-studios-969631.jpg?quality=100&strip=all&ssl=1',
    //         posts: [
    //             {
    //                 id: 3,
    //                 title: '4',
    //                 body: '5'
    //             }
    //         ]

    //     }
    // ]

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
                    {data.map((user) =>
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

export default withVerify(Users)
