import React, { ReactNode } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, Select } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: theme.spacing(15)
    }
}))

interface IProps<T> {
    label: string
    value: T
    handleChange: (value: T) => void
    children: ReactNode
}

export default function SelectWithLabel<T> ({ label, value, handleChange, children }: IProps<T>) {
    const classes = useStyles()

    return (
        <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={e => handleChange(e.target.value as T)} label={label}
                    SelectDisplayProps={{ 'aria-label': 'page size' }}>
                {children}
            </Select>
        </FormControl>
    )
}
