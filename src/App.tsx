import React, { ReactNode } from 'react'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

import GridDataProvider from './components/provider/GridDataProvider'
import Overview from './pages/Overview/Overview'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#199bd7'
        }
    }
})

interface IGlobalProviders {
    children: ReactNode
}

function GlobalProviders ({ children }: IGlobalProviders) {
    return (
        <ThemeProvider theme={theme}>
            <GridDataProvider>
                {children}
            </GridDataProvider>
        </ThemeProvider>
    )
}

function App () {
    return (
        <GlobalProviders>
            <Overview />
        </GlobalProviders>
    )
}

export default App
