import styled, { keyframes } from "styled-components";
import homeImg from "../assets/home_new.png";

// 动效：按钮呼吸光晕
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 198, 255, 0.7); }
  70% { box-shadow: 0 0 0 25px rgba(0, 198, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 198, 255, 0); }
`;

// 图片浮动动画
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #111 100%);
  position: relative;
  overflow: hidden;
`;

// 背景发光点（科技感）
const Glow = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 198, 255, 0.25), transparent 70%);
  top: 20%;
  left: -10%;
  filter: blur(60px);
  z-index: 0;
`;

const Glow2 = styled(Glow)`
  top: auto;
  bottom: 15%;
  left: auto;
  right: -10%;
  background: radial-gradient(circle, rgba(85, 63, 183, 0.3), transparent 70%);
`;

const Image = styled.img`
  width: 420px;
  max-width: 90%;
  border-radius: 20px;
  /* margin-bottom: 32px; */
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  transition: transform 0.4s ease;
  animation: ${float} 6s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 36px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #00c6ff, #553fb7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 12px rgba(0, 198, 255, 0.4);
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  padding: 16px 44px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(90deg, #00c6ff, #553fb7);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  animation: ${pulse} 2.5s infinite;
  transition: transform 0.25s ease, background 0.35s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: scale(1.12);
    background: linear-gradient(90deg, #553fb7, #00c6ff);
  }
`;

const Home = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page>
      <Glow />
      <Glow2 />
      <Image src={homeImg} alt="Metalens" />
      <Title>Explore the Future of Metalenses</Title>
      <Button onClick={() => scrollToSection("description")}>Click Here</Button>
    </Page>
  );
};

export default Home;
