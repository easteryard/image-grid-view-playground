import React, { createRef, useCallback, useEffect } from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton } from '@material-ui/core'
import { IGridData } from './provider/GridDataProvider'
import { Close as CloseIcon, ChevronLeft as LeftArrowIcon, ChevronRight as RightArrowIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    outerGrid: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        paddingTop: theme.spacing(10),
        backgroundColor: 'rgba(0, 0, 0, 0.95)'
    },
    closeIconButton: {
        position: 'absolute',
        top: 0,
        left: 5
    },
    closeIcon: {
        color: 'white'
    },
    arrowIconButton: {
        position: 'absolute',
        top: '50%',
        color: 'white'
    },
    leftArrow: {
        left: 0
    },
    rightArrow: {
        right: 0
    },
    image: {
        height: 'fit-content',
        maxHeight: '80vh',
        maxWidth: '90vw'
    }
}))

interface IProps {
    image?: IGridData
    selectedIndex?: number
    isNextDisabled: boolean
    handleChange: (index: number) => void
    onClose: (key: string) => void
}

export default function FullscreenImageModal ({ image, selectedIndex, isNextDisabled, handleChange, onClose }: IProps): JSX.Element | null {
    const classes = useStyles()

    const handleKeyDown = useCallback((event: any) => {
        if (event.key === 'Escape') onClose(event.key)
        else if (event.key === 'ArrowLeft' && selectedIndex !== undefined) handleChange(selectedIndex - 1)
        else if (event.key === 'ArrowRight' && selectedIndex !== undefined) handleChange(selectedIndex + 1)
    }, [handleChange, onClose, selectedIndex])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    return image && selectedIndex !== undefined ? (
        <Grid container justify='center' alignItems='center' className={classes.outerGrid}>
            <IconButton onClick={e => onClose(e.type)} onKeyDown={e => onClose(e.key)} tabIndex={0}
                        className={classes.closeIconButton}>
                <CloseIcon fontSize='large' className={classes.closeIcon} />
            </IconButton>
            <IconButton onClick={() => handleChange(selectedIndex - 1)} disabled={selectedIndex === 0}
                        className={classNames(classes.arrowIconButton, classes.leftArrow)}>
                <LeftArrowIcon fontSize='large' />
            </IconButton>
            <img src={image.imagePath} alt={image.title} className={classes.image} />
            <IconButton onClick={() => handleChange(selectedIndex + 1)} disabled={isNextDisabled}
                        className={classNames(classes.arrowIconButton, classes.rightArrow)}>
                <RightArrowIcon fontSize='large' />
            </IconButton>
        </Grid>
    ) : null
}
