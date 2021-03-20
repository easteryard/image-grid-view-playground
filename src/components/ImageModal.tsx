import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ImageSlides from 'react-imageslides'

import { Close as CloseIcon } from '@material-ui/icons'
import { IconButton, SvgIcon } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    outerDiv: {
        // position: 'relative'
    },
    closeIcon: {
        color: 'white'
        // top: 0,
        // right: 0
    }
}))

interface IProps {
    images: string[]
    initialImageIdx?: number
    onClose: (key: string) => void
}

export default function ImageModal ({ images, initialImageIdx, onClose }: IProps) {
    const classes = useStyles()

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') onClose(e.key)
    })

    return (
        <div className={classes.outerDiv} onKeyDown={e => onClose(e.key)}>
            <ImageSlides images={images} isOpen={initialImageIdx !== undefined} index={initialImageIdx && initialImageIdx + 1} showPageButton
                         onClose={() => onClose('Escape')} addon={() => (
                             <IconButton onClick={e => onClose(e.type)} onKeyDown={e => onClose(e.key)} tabIndex={0}>
                                 <CloseIcon fontSize='large' className={classes.closeIcon} />
                             </IconButton>
                         )} />
        </div>
    )
}
