import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import { IGridData } from './provider/GridDataProvider'

import ImageModal from './ImageModal'

const useStyles = makeStyles(theme => ({
    gridList: {
        margin: '0px !important'
    },
    gridListTileBar: {
        background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0))'
    },
    pagination: {
        marginTop: theme.spacing(2)
    }
}))

interface IProps {
    data: IGridData[]
    page: number
    onPageChange: (page: number) => void
    totalPages: number
}

export default function GridViewPaginated ({ data, page, onPageChange, totalPages }: IProps) {
    const classes = useStyles()
    const [selectedImageIdx, setSelectedImageIdx] = useState<number | undefined>(undefined)

    function handleAction (key: string, imageIdx?: number) {
        const keys = ['Enter', ' ', 'Escape', 'click']
        if (keys.includes(key)) {
            setSelectedImageIdx(imageIdx)
        }
    }

    function getImage () {
        if (selectedImageIdx !== undefined) return data[selectedImageIdx]
    }

    function changeImage (newIdx: number) {
        if (newIdx >= 0 && newIdx < data.length) setSelectedImageIdx(newIdx)
    }

    return (
        <Grid>
            {data.length < 1 ? <Typography variant='h5' role='alert'>No results found</Typography> : (
                <>
                    <GridList cellHeight={200} cols={3} className={classes.gridList}>
                        {data.map((tile, index) => (
                            <GridListTile key={index} onClick={e => handleAction(e.type, index)}
                                          onKeyPress={e => handleAction(e.key, index)} tabIndex={0}>
                                <img src={tile.imagePath} alt={tile.title} />
                                <GridListTileBar title={tile.title} aria-hidden classes={{ root: classes.gridListTileBar }} />
                            </GridListTile>
                        ))}
                    </GridList>
                    <Pagination page={page + 1} onChange={(event, page) => onPageChange(page - 1)}
                                count={totalPages} className={classes.pagination} />
                    <ImageModal image={getImage()} selectedIndex={selectedImageIdx}
                                isNextDisabled={selectedImageIdx === data.length - 1} handleChange={changeImage}
                                onClose={handleAction} />
                </>
            )}
        </Grid>
    )
}
