import React from 'react'

import GridDataProvider from './components/provider/GridDataProvider'
import Overview from './pages/Overview/Overview'

function App () {
    return (
        <GridDataProvider>
            <Overview />
        </GridDataProvider>
    )
}

export default App
