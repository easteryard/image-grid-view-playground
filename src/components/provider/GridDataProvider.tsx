import React, { ReactNode, useState } from 'react'

import GridData from '../../data/GridData'

interface IProps {
    children: ReactNode
}

export interface IGridData {
    title: string
    description: string
    imagePath: string
}

export interface IGridDataContext {
    gridData: IGridData[]
    setGridData: (gridData: IGridData[]) => void
}

export const GridDataContext = React.createContext({})

export default function GridDataProvider ({ children }: IProps) {
    const [gridData, setGridData] = useState<IGridData[]>(GridData || [])

    return (
        <GridDataContext.Provider value={{ gridData, setGridData } as IGridDataContext}>
            {children}
        </GridDataContext.Provider>
    )
}
