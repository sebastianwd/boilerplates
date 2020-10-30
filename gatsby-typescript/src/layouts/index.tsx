import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { ThemesContextProvider, ThemesContext } from '@context'
import { GlobalStyle } from '@theme/global-styles'
import DefaultLayout from './default'
import 'animate.css'
import 'bootstrap-4-grid'
import 'ress/dist/ress.min.css'

interface Props {
  children: React.ReactNode
}

interface LayoutProps extends RouteComponentProps {
  children: React.ReactNode
}

const App = (props: Props) => {
  const { children } = props

  const { theme } = useContext(ThemesContext)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const Layout = (props: LayoutProps) => {
  const { children, location } = props

  const renderLayout = (): JSX.Element => {
    return <DefaultLayout location={location}>{children}</DefaultLayout>
  }

  return (
    <ThemesContextProvider>
      <App>
        <GlobalStyle />
        {renderLayout()}
      </App>
    </ThemesContextProvider>
  )
}

export default Layout
