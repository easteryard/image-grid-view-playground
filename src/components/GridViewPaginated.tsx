import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import { IGridData } from './provider/GridDataProvider'

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

    function render () {
        if (data.length < 1) return <Typography>No results found</Typography>
        return (
            <>
                <GridList cellHeight={200} cols={3}>
                    {data.map((tile, index) => (
                        <GridListTile key={index}>
                            <img src={tile.imagePath} alt='grid-data' />
                            <GridListTileBar title={tile.title} classes={{ root: classes.gridListTileBar }} />
                        </GridListTile>
                    ))}
                </GridList>
                <Pagination page={page + 1} onChange={(event, page) => onPageChange(page - 1)}
                            count={totalPages} className={classes.pagination} />
            </>
        )
    }

    return (
        <Grid>
            {data.length < 1 ? <Typography>No results found</Typography> : (
                <>
                    <GridList cellHeight={200} cols={3}>
                        {data.map((tile, index) => (
                            <GridListTile key={index}>
                                <img src={tile.imagePath} alt='grid-data' />
                                <GridListTileBar title={tile.title} classes={{ root: classes.gridListTileBar }} />
                            </GridListTile>
                        ))}
                    </GridList>
                    <Pagination page={page + 1} onChange={(event, page) => onPageChange(page - 1)}
                                count={totalPages} className={classes.pagination} />
                </>
            )}
        </Grid>
    )
}
