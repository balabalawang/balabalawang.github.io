import styled from "styled-components";
import { useEffect, useState } from "react";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
  padding: 0 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 99;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? "#00c6ff" : "#fff")};
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;
    background-color: #00c6ff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00c6ff;
  }
`;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      "home",
      "description",
      "setup",
      "method",
      "results",
      "contact",
    ];
    let timer: number | null = null; // <- 修改这里

    const handleScroll = () => {
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        for (let i = 0; i < sections.length; i++) {
          const el = document.getElementById(sections[i]);
          if (!el) continue;
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }, 50); // 防抖 50ms
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化高亮

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <Nav>
      <Logo onClick={() => scrollToSection("home")}>MetaLenStar</Logo>
      <Menu>
        <MenuItem
          active={activeSection === "home"}
          onClick={() => scrollToSection("home")}
        >
          Home
        </MenuItem>
        <MenuItem
          active={activeSection === "description"}
          onClick={() => scrollToSection("description")}
        >
          Introduction
        </MenuItem>
        <MenuItem
          active={activeSection === "setup"}
          onClick={() => scrollToSection("setup")}
        >
          Setup
        </MenuItem>
        <MenuItem
          active={activeSection === "method"}
          onClick={() => scrollToSection("method")}
        >
          Method
        </MenuItem>
        <MenuItem
          active={activeSection === "results"}
          onClick={() => scrollToSection("results")}
        >
          Results
        </MenuItem>
        <MenuItem
          active={activeSection === "contact"}
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </MenuItem>
      </Menu>
    </Nav>
  );
}
