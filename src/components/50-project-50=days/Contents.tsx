import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Welcome.tsx'
import NotFound from './NotFound.tsx'
import ContentsWrapper from './css/ContentsStyled.js'
import usePageNames from './usePageName.ts'

export const Contents = () => {
  const pageNames = usePageNames()
  return (
    <ContentsWrapper>
      <section className='nav2fbox'>
        <Routes>
          <Route
            path='/'
            element={<Welcome />}
          />
          {pageNames.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              // 动态渲染组件
              element={<Component />}
            /> 
            
          ))}
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </section>
    </ContentsWrapper>
  )
}

export default Contents
