import React, { useState, useEffect, useRef } from 'react'
import ScrollAnimationWrapper from './css/ScrollAnimationWrapper.ts'

const ScrollAnimation = () => {
  const [activeIds, setActiveIds] = useState<Set<number>>(new Set())
  const refs = useRef(Array(10).fill(null))
  const RATIO = 0.6

  useEffect(() => {
    // IntersectionObserver的第一个参数是回调函数，他会在监视对象的交叉状态发生改变时调用
    const observer = new IntersectionObserver(
      (entries) => {
        // entries在页面首次渲染的时候传入所有的监视对象，
        // 并且在某个监视对象的交叉状态发生改变时，单独传入这个对象
        // console.log(entries)

        entries.forEach((entry) => {
          // console.log(entry.target)
          // 获取交叉状态改变的对象的index属性值
          const index = refs.current.findIndex((ref) => ref === entry.target)

          // 这段代码会使监视对象在视窗内时添加到activeIds中，在视窗外时移除
          setActiveIds((prev) => {
            const newActiveIds = new Set(prev)
            if (entry.intersectionRatio >= RATIO) {
              newActiveIds.add(index)
            } else {
              newActiveIds.delete(index)
            }
            return newActiveIds
          })
        })
      },
      { threshold: [RATIO] }
    )

    // 观察所有 refs
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  const ids = Array.from({ length: 10 }, (_, i) => i)

  return (
    <ScrollAnimationWrapper>
      <h1>滚动页面以查看动画效果</h1>
      {ids.map((id) => (
        <div
          key={id}
          ref={(el) => (refs.current[id] = el)}
          className={`content-card ${
            id <= Math.max(...Array.from(activeIds)) ? 'active' : ''
          }`}
        >
          Card {id}
        </div>
      ))}
    </ScrollAnimationWrapper>
  )
}

export default ScrollAnimation
