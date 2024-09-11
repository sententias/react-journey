import React, { useState, useEffect, Fragment, useRef } from 'react'
import styled from 'styled-components'
import axios, { AxiosResponse } from 'axios'

const Test = () => {
  const [data, setData] = useState<any>([])

  const provinceRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // // axios
    // axios({
    //   url: 'http://hmajax.itheima.net/api/register',
    //   method: 'post',
    //   data: {
    //     username: 'itheima007',
    //     password: '1221334'
    //   }
    // })
    //   .then((res) => {
    //     console.log(res)
    //     setData(res.data.list)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     // alert(err.response.data.message)
    //   })

    // XHR(XMLHttpRequest)
    const xhr = new XMLHttpRequest()
    xhr.open('GET','https://api.github.com/users/111')
    // xhr.open('GET', 'http://hmajax.itheima.net/api/news')
    xhr.addEventListener('loadend', (res) => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText)
        console.log('res:',res)
        console.log('Data:', data)
        setData(data)
      } else {
        console.error('Request failed with status:', xhr.status)
      }
    })
    xhr.send()
  }, [])

  return (
    <TestWrapper>
      查询用户
      <input type='text' />
      <p>{data.id}</p>
    </TestWrapper>
  )
}

const TestWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  h1 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`

export default Test
