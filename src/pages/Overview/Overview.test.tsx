import React from 'react'
import { fireEvent, render, within } from '@testing-library/react'
import Overview from './Overview'
import GridDataProvider from '../../components/provider/GridDataProvider'

test('Should have 4 elements when page size changes to 4', () => {
    const { getByRole } = render(<Overview />, { wrapper: ({ children }) =>
            <GridDataProvider>{children}</GridDataProvider> })

    const list = getByRole('list', { name: 'List of images' })
    let { getAllByRole } = within(list)
    const items = getAllByRole('listitem')
    expect(items.length).toBe(6)

    fireEvent.mouseDown(getByRole('button', { name: 'page size' } ))
    const listbox = within(getByRole('listbox'))
    fireEvent.click(listbox.getByText('4'))

    const newItems = getAllByRole('listitem')
    expect(newItems.length).toBe(4)
})
