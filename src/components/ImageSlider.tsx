import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { IGridData } from './provider/GridDataProvider'

const useStyles = makeStyles(theme => ({
    outerDiv: {
        maxWidth: '100vw'
    },
    gallery: {
        width: 500
    }
}))

interface IProps {
    images: IGridData[]
}

export default function ImageSlider ({ selectedIdx, images }: IProps) {
    const classes = useStyles()

    return (
        <div>
            
            <img src={images[selectedIdx].imagePath} alt={images[selectedIdx].title} />
        </div>
    )
}
