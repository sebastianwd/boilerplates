import React from 'react'
import { RouteComponentProps } from '@reach/router'

interface Props extends RouteComponentProps {
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { children, location } = props

  return <div style={{ display: 'flex' }}>{children}</div>
}

export default DefaultLayout
