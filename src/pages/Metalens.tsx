import styled from 'styled-components'
import metalensImg from '../assets/lens.png' 

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:100vw;
  background: #111;
  color: white;
  font-size: 2rem;
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
const Metalens = () => {
    return ( <Page>🌌 Welcome to the Metalens demo<Image src={metalensImg} alt="Metalens" /></Page>)

}
export default  Metalens;