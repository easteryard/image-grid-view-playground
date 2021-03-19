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
            <InputLabel htmlFor='page-size-select'>{label}</InputLabel>
            <Select id='page-size-select' value={value} onChange={e => handleChange(e.target.value as T)} label={label}>
                {children}
            </Select>
        </FormControl>
    )
}
