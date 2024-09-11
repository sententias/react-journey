import React, { useRef, useState, useEffect } from 'react'
import DrawingAppWrapper from './css/DrawingAppWrapper.ts'

interface Pointer {
  x: number
  y: number
}

export const DrawingApp = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      const resizeCanvas = (canvas) => {
        canvas.height = canvas.clientHeight
        canvas.width = canvas.clientWidth
      }

      // console.dir(canvasRef.current)
      resizeCanvas(canvasRef.current)
      if (ctx) {
        ctx.lineCap = 'round'
        ctx.lineWidth = 1
        setContext(ctx)
      }

      const handleResize = () => {
        if (canvasRef.current) {
          resizeCanvas(canvasRef.current)
        }
      }

      window.addEventListener('resize', handleResize)

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (context) {
      setIsDrawing(true)
      console.log(canvasRef.current?.width)
      const rect = canvasRef.current?.getBoundingClientRect()
      const x = e.clientX - (rect?.left ?? 0)
      const y = e.clientY - (rect?.top ?? 0)
      context.beginPath()
      context.moveTo(x, y)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawing && context) {
      const rect = canvasRef.current?.getBoundingClientRect()
      const x = e.clientX - (rect?.left ?? 0)
      const y = e.clientY - (rect?.top ?? 0)
      context.lineTo(x, y)
      context.stroke()
    }
  }

  const handleMouseUp = () => {
    if (isDrawing) {
      setIsDrawing(false)
      context?.closePath()
    }
  }

  const clearCanvas = () => {
    if (canvasRef.current) {
      context?.clearRect(
        0,
        0,
        canvasRef.current?.width,
        canvasRef.current?.height
      )
    }
  }
  
  return (
    <DrawingAppWrapper>
      <canvas
        id='c'
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      ></canvas>
      <div className='tool-bar'>
        <button onClick={clearCanvas}>清空画板</button>
      </div>
    </DrawingAppWrapper>
  )
}

export default DrawingApp
