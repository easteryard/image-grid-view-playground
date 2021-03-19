import { useCallback, useContext, useEffect, useState } from 'react'
import { GridDataContext, IGridData, IGridDataContext } from '../components/provider/GridDataProvider'
import { getSliceByPageSize } from '../utils/helperMethods'

interface IGridViewData {
    gridViewData: IGridData[]
    totalPages: number
}

export default function useGridData (page: number, search?: string, pageSize = 6) {
    const { gridData } = useContext(GridDataContext) as IGridDataContext
    const [res, setRes] = useState<IGridViewData>({
        gridViewData: gridData ?? [],
        totalPages: 1
    })

    const roundNoOfPagesUp = useCallback((data: IGridData[]) => {
        return Math.ceil(data.length / pageSize)
    }, [pageSize])

    const filterGridDataByTitle = useCallback((searchString: string) => {
        return gridData.filter(element => element.title
            .toLowerCase()
            .includes(searchString.toLowerCase()))
    }, [gridData])

    const getGridDataPaginatedByTitle = useCallback((page: number, searchString?: string) => {
        const dataToSlice = searchString ? filterGridDataByTitle(searchString) : gridData
        return {
            gridViewData: getSliceByPageSize(dataToSlice, page, pageSize),
            totalPages: roundNoOfPagesUp(dataToSlice)
        }
    }, [gridData, pageSize, filterGridDataByTitle, roundNoOfPagesUp])

    useEffect(() => {
        const newData = getGridDataPaginatedByTitle(page, search)
        setRes(newData)
    }, [page, search, getGridDataPaginatedByTitle])

    return res
}
