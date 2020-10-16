import React from 'react'
import { Box } from '@material-ui/core';
import { PropsType } from './types';

const Row: React.FC<PropsType> = ({ children, className }) => {
    return (
        <Box margin={1} mb={2} className={className}>
            {children}
        </Box>
    )
}

export default Row
