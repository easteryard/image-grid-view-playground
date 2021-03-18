import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useImageData from '../hooks/useImageData'

const useStyles = makeStyles(theme => ({
}))

interface IProps {
}

export default function GridView ({}: IProps) {
    const classes = useStyles()
    const { data, loading, error } = useImageData()

    console.log('data: ', data)

    return (
        <p>Hello!</p>
    )
}
