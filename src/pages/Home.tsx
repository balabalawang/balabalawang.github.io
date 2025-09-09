// import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import  homeImg from '../assets/home.png'
import { useNavigate } from 'react-router-dom'

// 动效：按钮呼吸光晕
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(0, 123, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:100vw;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`

const Image = styled.img`
  width: 400px;
  max-width: 90%;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.5);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 32px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Button = styled.button`
  padding: 14px 36px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  animation: ${pulse} 2s infinite;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(90deg, #0072ff, #00c6ff);
  }
`

const  Home = () => {
  const navigate = useNavigate()

  return (
    <Page>
      <Image src={homeImg} alt="Metalens" />
      <Title>Explore the Future of Metalenses</Title>
      <Button onClick={() => navigate('/metalens')}>Click Here</Button>
    </Page>
  )
}

export default Home;