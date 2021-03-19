import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import useGridData from '../hooks/useGridData'
import { Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import GridViewPaginated from '../components/GridViewPaginated'
import SelectWithLabel from '../components/SelectWithLabel'

const useStyles = makeStyles(theme => ({
    optionsGrid: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    searchField: {
        marginRight: theme.spacing(1)
    }
}))

interface IProps {
}

const pageSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Overview ({}: IProps) {
    const classes = useStyles()
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(6)
    const { gridViewData, totalPages } = useGridData(page, search, pageSize)

    function handleSearch (value: string) {
        setSearch(value)
        setPage(0)
    }

    function handlePageChange (page: number) {
        setPage(page)
    }

    function handlePageSizeChange (size: number) {
        setPageSize(size)
        setPage(0)
    }

    return (
        <>
            <Typography variant='h4'>Image Grid Page</Typography>
            <Grid container className={classes.optionsGrid}>
                <TextField label='Search' value={search} onChange={e => handleSearch(e.target.value)} variant='outlined'
                           className={classes.searchField} />
                <SelectWithLabel label='Page size' value={pageSize} handleChange={handlePageSizeChange}>
                    {pageSizes.map((size, index) => <MenuItem key={index} value={size}>{size}</MenuItem>)}
                </SelectWithLabel>
            </Grid>
            <GridViewPaginated data={gridViewData} page={page} onPageChange={handlePageChange}
                               totalPages={totalPages} />
        </>
    )
}
