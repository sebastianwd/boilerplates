import React, { useEffect } from 'react'
import 'simplebar/dist/simplebar.min.css'
import { AppProps } from 'next/app'
import { AppProvider } from '@providers'
import { MainLayout } from 'src/layouts'
import 'ress/dist/ress.min.css'
import 'react-tabs/style/react-tabs.css'

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <AppProvider {...props}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}

export default App
