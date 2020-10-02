import React from 'react'
import { PropsType } from './types';
import { CardActionArea, CardMedia, Card as CustomCard, CardContent, Typography } from '@material-ui/core';
import classNames from 'classnames'
import styles from './Card.module.scss'

const Card: React.FC<PropsType> = ({ data }) => {
    return (
        <CustomCard className={styles.root}>
            <CardActionArea>
                <CardMedia
                    className={classNames(styles.img, { [styles.sm]: data.small })}
                    image={data.img}
                    title={`img-${data.title}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h4" className={styles.title}>
                        {data.title}
                    </Typography>
                    <Typography variant="body2" className={styles.text} component="p">
                        {data.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CustomCard>
    )
}

export default Card
