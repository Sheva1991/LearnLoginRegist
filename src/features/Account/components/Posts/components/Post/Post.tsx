import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { PropsType } from './types';

const Post: React.FC<PropsType> = ({ post }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h5">
                    Номер статьи: {post.id}. Название статьи: {post.title}
                </Typography>
                <Typography variant="h6" component="p">
                    Содержание: {post.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post
