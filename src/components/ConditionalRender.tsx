import React from 'react'

import Loading from './Loading'
import { Typography } from '@material-ui/core'

interface IProps<T> {
    children: any
    dataArray: T[]
    loadingArray: boolean[]
    errorArray: any[]
    errorMessage: string
}

function ConditionalRender<T> ({ children, dataArray, loadingArray, errorArray, errorMessage }: IProps<T>) {
    if (loadingArray.some(element => element)) return <Loading />
    if (errorArray.some(element => !!element)) return <Typography>{errorMessage}</Typography>
    return children(dataArray)
}

export default ConditionalRender
