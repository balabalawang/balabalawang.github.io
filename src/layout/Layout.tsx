// Layout.jsx
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 整个屏幕高度 */
  width: 100%;
`;

const Main = styled.main`
  flex: 1; /* 占满剩余高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Layout() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
