// App.tsx
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DescriptionPage from "./pages/Description";
import Metalens from "./pages/Metalens";
import ContactPage from "./pages/Contact";
import SetupPage from "./pages/Setup";
import MethodPage from "./pages/Method";

const PageContainer = styled.div`
  scroll-behavior: smooth;
`;

const Section = styled.section<{ alt?: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* padding-top: 60px; */
  background: ${({ alt }) =>
    alt ? "rgba(17,17,17,0.8)" : "rgba(34,34,34,0.45)"};
  /* backdrop-filter: blur(2px); */
  border-top: 1px solid rgba(255, 255, 255, 0.05); /* subtle 分割线 */
`;

export default function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Section id="home">
          <Home />
        </Section>
        <Section id="description" alt>
          <DescriptionPage />
        </Section>
        <Section id="setup">
          <SetupPage />
        </Section>
        <Section id="method" alt>
          <MethodPage />
        </Section>
        <Section id="results">
          <Metalens />
        </Section>
        <Section id="contact" alt>
          <ContactPage />
        </Section>
      </PageContainer>
    </>
  );
}
