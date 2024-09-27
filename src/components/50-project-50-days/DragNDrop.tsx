import React, { useState } from 'react'
import DragNDropWrapper from './css/DragNDropWrapper.ts'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const DragNDrop = () => {
  // 用于设定有多少个盒子
  const BOX_NUMBER = 5
  // 用于记录当前图片应该在哪个盒子中显示
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // 当图片被放下时，更新activeIndex值
  const handleDrop = (index: number) => {
    setActiveIndex(index)
  }

  return (
    // 用于提供ReactDnd的服务，必须要包裹在使用ReactDnd Hook的组件的外层，否则会报错
    <DndProvider backend={HTML5Backend}>
      {/* CSS组件 */}
      <DragNDropWrapper $box_number={BOX_NUMBER}>
        {Array.from({ length: BOX_NUMBER }, (_, i) => (
          // 放置对象
          <DropBox
            key={i}
            className={`container${i}`}
            handleDrop={() => handleDrop(i)}
          >
            {/* 拖动对象，在对应的盒子中才会显示 */}
            {i === activeIndex ? <DragImg index={i} /> : null}
          </DropBox>
        ))}
      </DragNDropWrapper>
    </DndProvider>
  )
}

interface DragImgProps {
  index: number
}

const DragImg: React.FC<DragImgProps> = ({ index }) => {
  // 第一个返回值是collect对象，第二个返回值是代表拖拽元素的ref，第三个返回值代表拖拽元素拖拽后实际操作到的dom
  const [{ isDragging }, dragRef] = useDrag(() => ({
    // 自己声明，相当于取一个类名
    type: 'image',
    // 自己声明，放置对象(drop)只能获取其中的信息
    // 如果是对象，则是放置对象用于获取这个被拖动数据的信息的唯一信息源，必须使用放置对象需要的最小信息
    // 它会在拖动操作开始时触发，并返回一个代表拖动操作的对象。如果返回 null，拖动操作将被取消
    item: { index },
    // 作为useDrag的第一个返回值，主要用途是返回monitor监听器监听到的状态，monito用于监听拖动对象当前的状态。
    // 1.isDragging(): 是否正在拖动。
    // 2.getItem(): 返回当前拖动项的数据。
    // 3.getItemType(): 返回当前拖动项的类型。
    // 4.getDifferenceFromInitialOffset(): 拖动项相对于初始位置的偏移量。
    // 5.getInitialClientOffset(): 拖动开始时的客户端坐标。
    // 6.getClientOffset(): 拖动过程中当前的客户端坐标。
    // 7.isOver(): 当前是否有拖动项悬停在目标上。
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div
      ref={dragRef}
      className='img'
      style={{
        backgroundImage: `url('/assets/images/minilogo.png')`,
        // 拖动时隐藏
        opacity: isDragging ? 0 : 1
      }}
    />
  )
}

interface DropBoxProps {
  className: string
  handleDrop: () => void
  children: React.ReactNode
}

const DropBox: React.FC<DropBoxProps> = ({
  className,
  handleDrop,
  children
}) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    // 接收Drag对象的对应type
    accept: 'image',
    // 类似Drag对象的collect
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    // 当被放置时执行回调函数
    drop: () => handleDrop()
  }))

  return (
    <div
      className={className}
      ref={dropRef}
      style={{
        border: isOver
          ? '2px dashed rgba(0, 119, 255, 0.7)'
          : '2px solid rgba(0, 0, 0, 0.7)',
        backgroundColor: isOver ? 'lightgray' : 'white'
      }}
    >
      {children}
    </div>
  )
}

export default DragNDrop
