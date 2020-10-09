import { Container, Grid, Typography } from '@material-ui/core';
import AddPost from 'features/Account/Posts/components/AddPost'
import React, { memo, useState } from 'react'
import Post from './components/Post'
import { useStyles } from './styles';
import Pagination from '@material-ui/lab/Pagination';
import SimpleModal from 'components/Modal/Modal';


export const data = [
    {
        id: 3,
        title: 'Title',
        body: 'Body'
    }
]

const Posts = memo(() => {
    const [page, setPage] = useState(1);
    const classes = useStyles()


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h3" component="h3">
                Статьи
            </Typography>
            <SimpleModal btnTitle='Add post'>
                <AddPost />
            </SimpleModal>
            <Pagination className={classes.pagination} count={10} color="primary" page={page} onChange={handleChange} />
            <Grid container>
                {data.map((post) =>
                    <Grid item md={3} sm={6} key={post.id}>
                        <Post post={post} />
                    </Grid>
                )
                }
            </Grid>
        </Container>
    )
}
)

export default Posts
