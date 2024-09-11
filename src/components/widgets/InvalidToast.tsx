// 不能实现功能需求，代码保留以便后续学习

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import styled from 'styled-components'

// // 定义可以接受的 type 字符串
// type ToastType = 'info' | 'danger' | 'warning'

// interface ToastProps {
//   message: string
//   id: number
//   type: ToastType
// }

// let toastId = 0
// const toasts: ToastProps[] = []

// const addToast = (
//   message: string,
//   type: ToastType,
//   duration: number = 3000
// ) => {
//   const id = toastId++
//   toasts.push({ message, id, type })
//   renderToasts()

//   setTimeout(() => {
//     const index = toasts.findIndex((toast) => toast.id === id)
//     if (index !== -1) {
//       toasts.splice(index, 1)
//       renderToasts()
//     }
//   }, duration)
// }

// const renderToasts = () => {
//   const root = document.getElementById('root')
//   if (root) {
//     ReactDOM.createRoot(root).render(
//       <ToastContainer>
//         {toasts.map((toast) => (
//           <ToastElement
//             key={toast.id}
//             type={toast.type}
//           >
//             {toast.message}
//           </ToastElement>
//         ))}
//       </ToastContainer>
//     )
//   }
// }

// const ToastContainer = styled.div`
//   position: fixed;
//   bottom: 1rem;
//   right: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 0.5rem;
// `

// const ToastElement = styled.div<{ type: ToastType }>`
//   min-width: 8rem;
//   max-width: 20rem;
//   min-height: 2.4rem;
//   padding: 0.4rem 1rem;
//   border-radius: 0.5rem;
//   background-color: white;
//   letter-spacing: 0.1rem;
//   font-size: 1rem;
//   font-weight: bold;
//   user-select: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   word-wrap: break-word;
//   word-break: break-all;
//   white-space: normal;
//   text-align: center;
//   color: ${({ type }) =>
//     type === 'info' ? 'lightgreen' : type === 'danger' ? 'lightcoral' : 'gold'};
// `

// export const showToast = {
//   info: (message: string, duration?: number) =>
//     addToast(message, 'info', duration),
//   danger: (message: string, duration?: number) =>
//     addToast(message, 'danger', duration),
//   warning: (message: string, duration?: number) =>
//     addToast(message, 'warning', duration)
// }
