import React from 'react'
import styled from 'styled-components'

const TopNavBar = styled.header`
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
  height: ${(props) => props.theme.heights.header};
  background-color: ${(props) => props.theme.colors.background.main};
  width: 100%;
`

const NavBarHeight = styled.div`
  height: ${(props) => props.theme.spacing(6)};
`

const MainWrapper = styled.div`
  height: 100%;
`

const MainLayout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <TopNavBar />
      <NavBarHeight />
      {children}
    </MainWrapper>
  )
}

export default MainLayout
