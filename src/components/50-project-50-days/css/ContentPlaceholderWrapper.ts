import styled from 'styled-components'

const ContentPlaceholderWrapper = styled.div`

  .card {
    width: 30vw;
    min-height: 60vh;
    background-color: #fff;
    border-radius: 0.3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .header,
  .content,
  .footer{
    border-radius: 0.3rem;
    user-select: none;
  }

  .header {
    flex:1;
  }

  .content {
    height: 40vh;
  }

  .footer {
    flex: 1;
  }
`

export default ContentPlaceholderWrapper