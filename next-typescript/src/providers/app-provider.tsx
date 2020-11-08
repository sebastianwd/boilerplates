import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { StoreProvider } from 'easy-peasy'
import { ThemeProvider } from 'styled-components'
import { useApollo } from '@gql/apollo'
import theme from '@theme'
import { GlobalStyle } from '@theme/global-style'
import store from '@state'

const AppProvider: React.FC<AppProps> = (props) => {
  const { pageProps, children } = props

  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StoreProvider store={store}>{children}</StoreProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default AppProvider
