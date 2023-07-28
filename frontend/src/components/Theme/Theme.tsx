import {Box, } from "@mui/material"
import { useStore } from "effector-react"
import React, { FC } from "react"
import { $loading } from "../../store/LoadingStore/loading.store"
import { Loading } from "../Loading/Loading"
export const Theme:FC<{children: JSX.Element | JSX.Element[]} > = ({children}) => {
    const loading = useStore($loading);

    return (
        <Box width={'100%'} height={'100vh'} bgcolor={'#343A4F'}>
            {loading ? <Loading/> : children}
        </Box>
    )
}