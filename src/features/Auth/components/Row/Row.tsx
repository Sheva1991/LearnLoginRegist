import React from 'react'
import { Box } from '@material-ui/core';

const Row: React.FC = ({ children }) => {
    return (
        <Box margin={1} mb={2} >
            {children}
        </Box>
    )
}

export default Row
