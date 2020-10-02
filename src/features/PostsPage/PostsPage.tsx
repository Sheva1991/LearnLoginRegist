import { Container } from '@material-ui/core'
import AddPostForm from 'components/Forms/AddPostForm'
import HtmlComponent from 'components/HtmlComponent'
import React, { memo } from 'react'
import Post from './Post/Post'
import styles from './PostsPage.module.scss'

const PostsPage = memo(() => {
    const data = [
        {
            id: 3,
            title: '4',
            body: '5'
        }
    ]
    return (
        <Container className={styles.root}>
            <HtmlComponent className={styles.title} variant='h3' component='h3' title='Статьи' />
            <div className={styles.content}>
                {data.map((post) =>
                    <div className={styles.item} key={post.id}>
                        <Post post={post} />
                    </div>
                )
                }
            </div>
            <AddPostForm />
        </Container>
    )
}
)

export default PostsPage
