import React from 'react'
import styles from './HtmlComponent.module.scss'
import classNames from 'classnames'
import { PropsType } from './types';

const HtmlComponent: React.FC<PropsType> = ({ title, component: Component = 'div', variant, className, children }) => {

    return (
        <Component className={classNames(styles.root, className,
            {
                [styles.h1]: variant === 'h1',
                [styles.h2]: variant === 'h2',
                [styles.h3]: variant === 'h3',
                [styles.h4]: variant === 'h4',

            })}>
            {title}{children}
        </Component>
    )
}

export default HtmlComponent
