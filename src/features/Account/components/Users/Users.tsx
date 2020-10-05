import { Grid, Container } from '@material-ui/core';
import React, { memo } from 'react'
import User from './components/User'
import Pagination from '@material-ui/lab/Pagination';


const Users = memo(() => {
    const [page, setPage] = React.useState(1);
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
        <Container>
            {/* <HtmlComponent className={styles.title} variant='h3' component='h3' title='Пользователи' /> */}
            <Pagination count={10} color="primary" page={page} onChange={handleChange} />
            <Grid container >
                {data.map((user) =>
                    <Grid item lg={3} key={user.id}>
                        <User user={user} />
                    </Grid>
                )
                }
            </Grid>
        </Container>
    )
}
)

export default Users
