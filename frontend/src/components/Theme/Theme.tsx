import {Box, } from "@mui/material"
import React, { FC } from "react"
export const Theme:FC<{children: JSX.Element | JSX.Element[]} > = ({children}) => {
    return (
        <Box width={'100%'} height={'100vh'} bgcolor={'#343A4F'}>
            {children}
        </Box>
    )
}