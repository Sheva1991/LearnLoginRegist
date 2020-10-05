import { Container } from '@material-ui/core'
import AddPostForm from 'features/Account/components/Posts/components/AddPostForm'
import React, { memo } from 'react'
import Post from './components/Post/Post'

const Posts = memo(() => {
    const data = [
        {
            id: 3,
            title: '4',
            body: '5'
        }
    ]
    return (
        <Container>
            {/* <HtmlComponent className={styles.title} variant='h3' component='h3' title='Статьи' /> */}
            <div>
                {data.map((post) =>
                    <div key={post.id}>
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

export default Posts
