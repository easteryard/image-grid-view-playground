import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import GridDataProvider from './components/provider/GridDataProvider'
import Overview from './pages/Overview/Overview'

test('App should render GridDataProvider with Overview as child', () => {
    render(<App />)
    const overviewWithContext = render(
        <GridDataProvider>
            <Overview />
        </GridDataProvider>
    )
    expect(overviewWithContext.baseElement).toBeInTheDocument()
})
