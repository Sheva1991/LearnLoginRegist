import { Grid, Container, Typography } from '@material-ui/core';
import React, { memo } from 'react'
import User from './components/User'
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';
import withVerify from 'hoc';


const Users = memo(() => {
    const [page, setPage] = React.useState(1);
    const classes = useStyles();
    const data = [
        {
            id: 0,
            name: '1',
            email: '2',
            photo: 'https://i1.wp.com/itc.ua/wp-content/uploads/2016/05/scarlett-johansson-s-black-widow-will-finally-star-in-her-own-movie-marvel-studios-969631.jpg?quality=100&strip=all&ssl=1',
            posts: [
                {
                    id: 3,
                    title: '4',
                    body: '5'
                }
            ]

        }
    ]

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3">
                Пользователи
            </Typography>
            <Pagination className={classes.pagination} count={10} color="primary" page={page} onChange={handleChange} />
            <Grid container >
                {data.map((user) =>
                    <Grid item md={3} sm={6} key={user.id}>
                        <User user={user} />
                    </Grid>
                )
                }
            </Grid>
        </Container>
    )
}
)

export default withVerify(Users)
