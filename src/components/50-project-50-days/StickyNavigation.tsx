import React, { useEffect, useRef, useState } from 'react'
import StickyNavigationWrapper from './css/StickyNavigationWrapper.ts'

export const StickyNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > navRef.current.clientHeight) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <StickyNavigationWrapper $isScrolled={isScrolled}>
      <div
        className={`nav ${isScrolled ? 'over' : ''}`}
        ref={navRef}
      >
        <div className='navtext web-title'>个人网站</div>
        <div className='blocker'></div>
        <div className='web-pages'>
          <div className='navtext page active'>主页</div>
          <div className='navtext page'>关于</div>
          <div className='navtext page'>感谢</div>
        </div>
      </div>
      <div className='hero'></div>
      <div className='main-content'>
        <h1>Content 1</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
          quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
          officia aperiam corporis similique. Facilis quos tempore labore totam!
          Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
          modi dolorem sit architecto, voluptate magni sunt unde est quas?
          Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
          libero laboriosam ab eligendi omnis delectus earum labore, placeat
          officiis sint illum rem voluptas ipsum repellendus iste eius
          recusandae quae excepturi facere, iure rerum sequi? Illum velit
          delectus dicta et iste dolorum obcaecati minus odio eligendi!
        </p>
        <h1>Content 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          provident nostrum possimus inventore nisi laboriosam consequatur modi
          nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
          provident, voluptates illo odio nostrum minima beatae similique a sint
          sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
          quae iste aperiam hic cumque repellat?
        </p>
      </div>
    </StickyNavigationWrapper>
  )
}

export default StickyNavigation
