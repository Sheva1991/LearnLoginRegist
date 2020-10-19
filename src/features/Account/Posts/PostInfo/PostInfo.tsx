import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const PostInfo = () => {
    const params = useParams<{ id: string }>();
    const id = +params.id
    const post = {
        id: 3,
        title: '4',
        body: '5'
    }

    React.useEffect(() => {
        // getPost(id)
        //получаем пост
    }, [id])
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h5">
                    Номер статьи: {post.id}.
                </Typography>
                <Typography variant="h6" component="h3">
                    Название статьи: {post.title}
                </Typography>
                <Typography variant="body1" component="p">
                    Содержание: {post.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PostInfo
