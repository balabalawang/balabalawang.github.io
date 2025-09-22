import styled from "styled-components";
import ff from "../assets/pics/Picture1.png";
import ml from "../assets/pics/Picture2.png";
import whn from "../assets/pics/Picture3.png";
import xn from "../assets/pics/Picture4.png";
import xl from "../assets/pics/Picture5.png";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  /* background: #111; */
  color: white;
  padding: 80px 10%;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #00c6ff;
  text-shadow: 0 0 8px rgba(0, 198, 255, 0.6);
  text-align: center;
`;

const AuthorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 60px;
`;

const AuthorCard = styled.div`
  background: linear-gradient(145deg, #1a1a1a, #222, #1a1a1a);
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 198, 255, 0.1);
  border: 1px solid rgba(0, 198, 255, 0.2);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.3);
    border: 1px solid rgba(0, 198, 255, 0.6);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at top left,
        rgba(0, 198, 255, 0.15),
        transparent 70%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(255, 0, 255, 0.1),
        transparent 70%
      );
    pointer-events: none;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 3px solid #00c6ff;
  object-fit: cover;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 10px 0 5px;
  color: #fff;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 15px;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制两行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  min-height: 2.6em; /* 始终至少两行高 (1行≈1.3em，这里2行≈2.6em) */
`;

const Email = styled.a`
  display: inline-block;
  color: #00c6ff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: #66e0ff;
    text-decoration: underline;
  }
`;

const ContactPage: React.FC = () => {
  const authors = [
    {
      name: "Fen Fang",
      bio: "Senior Scientist, I2R, A*STAR",
      email: "fang_fen@i2r.a-star.edu.sg",
      avatar: ff,
    },
    {
      name: "Muli Yang",
      bio: "Scientist, I2R, A*STAR",
      email: "yangml@i2r.a-star.edu.sg",
      avatar: ml,
    },
    {
      name: "Henan Wang",
      bio: "Independent Researcher",
      email: "nnhhwang@gmail.com",
      avatar: whn,
    },
    {
      name: "Xinan Liang",
      bio: "Lead Research Engineer, IMRE, A*STAR",
      email: "liang_xinan@imre.a-star.edu.sg",
      avatar: xn,
    },
    {
      name: "Xulei Yang",
      bio: "Principal Scientist, I2R, A*STAR",
      email: "yang_xulei@i2r.a-star.edu.sg",
      avatar: xl,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Page>
        <Content>
          <Title>Contact the Authors</Title>
          <AuthorsGrid>
            {authors.map((author, index) => (
              <AuthorCard key={index}>
                <Avatar src={author.avatar} alt={author.name} />
                <Name>{author.name}</Name>
                <Bio>{author.bio}</Bio>
                <Email href={`mailto:${author.email}`}>{author.email}</Email>
              </AuthorCard>
            ))}
          </AuthorsGrid>
        </Content>
      </Page>
      <SiteFooter />
    </div>
  );
};

export default ContactPage;

const Footer = styled.footer`
  background: #1a1a1a;
  padding: 60px 10% 20px; /* 底部多留空间给版权 */
  color: #ddd;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;
`;

const ColumnTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #00c6ff;
  text-shadow: 0 0 6px rgba(0, 198, 255, 0.6);
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #bbb;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 12px;

  a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
      color: #00c6ff;
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 0.95rem;
  line-height: 1.8;

  a {
    color: #00c6ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* 版权栏 */
const Copyright = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  margin-top: 20px;
`;

const SiteFooter: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Footer>
      <Columns>
        {/* 第一列 */}
        <Column>
          <ColumnTitle>About MetaLenStar</ColumnTitle>
          <Text>
            MetaLenStar aims to build a next generation metalens vision system,
            powered by AI, and applied to AI.
          </Text>
        </Column>

        {/* 第二列 */}
        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <LinkList>
            <LinkItem>
              <a onClick={() => scrollToSection("home")}>Home</a>
            </LinkItem>
            <LinkItem>
              <a onClick={() => scrollToSection("description")}>Introduction</a>
            </LinkItem>
            <LinkItem>
              <a onClick={() => scrollToSection("setup")}>Setup</a>
            </LinkItem>
            <LinkItem>
              <a onClick={() => scrollToSection("method")}>Method</a>
            </LinkItem>
            <LinkItem>
              <a onClick={() => scrollToSection("results")}>Results</a>
            </LinkItem>
            <LinkItem>
              <a onClick={() => scrollToSection("contact")}>Contact Us</a>
            </LinkItem>
          </LinkList>
        </Column>

        {/* 第三列 */}
        <Column>
          <ColumnTitle>Contact Us</ColumnTitle>
          <ContactInfo>
            <p>
              📧 Email:{" "}
              <a href="mailto:info@metalens.com">contact@metalenstar.com</a>
            </p>
            <p>
              🏢 Address: 1 Fusionopolis Way, #09-01, Connexis South Tower,
              138632
            </p>
          </ContactInfo>
        </Column>
      </Columns>

      {/* 底部版权栏 */}
      <Copyright>
        © {new Date().getFullYear()} Metalens. All rights reserved.
      </Copyright>
    </Footer>
  );
};
