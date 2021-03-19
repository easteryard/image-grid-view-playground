import React from 'react'

import GridDataProvider from './components/provider/GridDataProvider'
import GridView from './pages/GridView'

function App () {
    return (
        <GridDataProvider>
            <GridView />
        </GridDataProvider>
    )
}

export default App
