//rfce를 입력하면 기본 세팅을 가져온다.

import React from 'react'

function Layout(props) {
  return (
    <>
    <header
        style={{
            margin: '10px',
            border: '1px solid gold',
        }}
    >항상 출력되는 헤더 머시기 입니다.
    </header>
    {props.children}
    </>
  )
}

export default Layout