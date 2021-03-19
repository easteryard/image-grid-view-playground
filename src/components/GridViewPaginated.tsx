import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import { IGridData } from './provider/GridDataProvider'
import ImageSlider from './ImageSlider'

const useStyles = makeStyles(theme => ({
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

    function handleAction (key: string) {
        if (key === 'Enter' || key === ' ' || key === 'click') console.log('Called by key: ', key)
    }

    return (
        <Grid>
            {data.length < 1 ? <Typography variant='h5' role='alert'>No results found</Typography> : (
                <>
                    <GridList cellHeight={200} cols={3}>
                        {data.map((tile, index) => (
                            <GridListTile key={index} onClick={e => handleAction(e.type)}
                                          onKeyPress={e => handleAction(e.key)} tabIndex={0}>
                                <img src={tile.imagePath} alt={tile.title} />
                                <GridListTileBar title={tile.title} aria-hidden classes={{ root: classes.gridListTileBar }} />
                            </GridListTile>
                        ))}
                    </GridList>
                    <Pagination page={page + 1} onChange={(event, page) => onPageChange(page - 1)}
                                count={totalPages} className={classes.pagination} />
                    <ImageSlider images={data} />
                </>
            )}
        </Grid>
    )
}
