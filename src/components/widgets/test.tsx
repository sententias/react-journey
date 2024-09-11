import React, { useState } from 'react'
import styled from 'styled-components'

// 定义可以接受的 type 字符串
type ToastTypeOptions = 'info' | 'danger' | 'warning'

interface ToastProps {
  message: string
  id: number
  type: ToastTypeOptions
}

const Toast: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const [idCounter, setIdCounter] = useState(0)

  const showToast = (
    message: string = '请输入通知文本',
    duration: number = 3000,
    type: ToastTypeOptions = 'info'
  ) => {
    const id = idCounter
    setIdCounter((prev) => prev + 1)
    setToasts((prev) => [...prev, { message, id, type }])

    setTimeout(() => {
      console.log('toast', id)
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)
  }

  const info = (message?: string, duration?: number) =>
    showToast(message, duration, 'info')

  const danger = (message?: string, duration?: number) =>
    showToast(message, duration, 'danger')

  const warning = (message?: string, duration?: number) =>
    showToast(message, duration, 'warning')

  return (
    <ToastWrapper>
      <div className='toasts-container'>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast ${toast.type}`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastWrapper>
  )
}

const ToastWrapper = styled.div`
  .toasts-container {
    position: fixed;
    bottom: 0.8rem;
    right: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
  .toast {
    min-width: 8rem;
    max-width: 20rem;
    min-height: 2.4rem;
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    background-color: white;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: bold;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    /* 换行后的文本也能居中对齐 */
    text-align: center;
    &.info {
      color: lightgreen;
    }
    &.danger {
      color: lightcoral;
    }
    &.warning {
      color: gold;
    }
  }
`

export default Toast