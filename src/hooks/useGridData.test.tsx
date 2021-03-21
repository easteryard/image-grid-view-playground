import { renderHook } from '@testing-library/react-hooks'
import useGridData from './useGridData'
import GridDataProvider from '../components/provider/GridDataProvider'

test('Should have 6 data items and totalPages equals 4 per default', () => {
    const { result } = renderHook(() => useGridData(0), { wrapper: GridDataProvider })

    expect(result.current.gridViewData.length).toBe(6)
    expect(result.current.totalPages).toBe(4)
})

test('Should have 2 data items when 2 items match search criteria', () => {
    const { result } = renderHook(() => useGridData(0, 'we'), { wrapper: GridDataProvider })

    expect(result.current.gridViewData.length).toBe(2)
})

test('Should have 4 data items when pageSize is 4', () => {
    const { result } = renderHook(() => useGridData(0, '', 4), { wrapper: GridDataProvider })

    expect(result.current.gridViewData.length).toBe(4)
})
