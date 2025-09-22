import {} from "react";
import styled from "styled-components";
import method from "../assets/output.webm";
import camera from "../assets/setup/camera.png";
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh - 60px;
  width: 100vw;
  /* background: #111; */
  color: white;
  font-size: 2rem;
  min-height: 500px;
  padding-top: 60px; // 给导航栏预留空间
  /* overflow-y: auto; */
`;
const Text = styled.div`
  /* font-size: 1rem; */
  /* line-height: 1.6; */
  /* color: #ddd; */
`;

const Link = styled.a`
  color: #fff; // 链接颜色
  text-decoration: none; // 去掉默认下划线
  border-bottom: 1px solid #fff; // 永久显示的下划线
  transition: all 0.3s ease;

  &:hover {
    color: #00a0d0; // 鼠标悬停可以稍微变色
    border-bottom-color: #00a0d0;
  }
`;
const SetupPage: React.FC = () => {
  return (
    <Page>
      <IntroSection>
        <IntroText>
          <h2>Camera Information</h2>
          <div style={{ fontSize: "16px" }}>
            <Text>
              The metalens camera used in this demo is a single-layer,
              multi-metalens full-color camera (Fig. a) that operates over a
              wide field of view (70°) and a broad wavelength range,
              manufactured by{" "}
              <Link
                href="https://metaoptics.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MetaOptics
              </Link>
              .
            </Text>{" "}
            It incorporates three metalenses fabricated on a single glass
            substrate, each designed for a specific wavelength corresponding to
            the red (λR = 635 nm), green (λG = 540 nm), and blue (λB = 460 nm)
            channels, while maintaining the same focal length (1.5 mm) and close
            spatial proximity. These metalenses project the R, G, and B
            components of light reflected or emitted from an object onto
            distinct regions of a monochromatic CMOS sensor (Thorlab
            CS165MU(/M)).
            <br />
            <br />
            <div>
              Given a ground truth image (shown in Fig. b), to generate a
              full-color metalens image, the designated regions corresponding to
              each wavelength are aligned pixel-to-pixel. They are then cropped
              from the captured monochrome image and assigned to the R, G, and B
              channels (as shown in Fig. c) of a digital color image to produce
              the final output. However, the quality of the resulting color
              image shown in Fig. d remains suboptimal: it often appears blurry
              and exhibits a vignetting effect, particularly at the edges of the
              wide field of view. Therefore, a robust and well-generalized
              AI-based image restoration algorithm is highly desirable.
            </div>
          </div>
        </IntroText>
        <IntroImageUp src={camera} alt="Metalens illustration" />
      </IntroSection>
      <IntroSection>
        <IntroVideo src={method} autoPlay muted loop playsInline />
        <IntroText>
          <h2>Task Description</h2>
          <div style={{ fontSize: "16px" }}>
            This task aims to validate the robustness and reliability of our
            restoration model by comparing its performance against the baseline*
            when tested under real-world illumination levels (IL) different from
            the one (e.g., IL=30) used during training.
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>
              *Deep-learning-driven end-to-end metalens imaging, Advanced
              Photonics, 2024
            </span>
          </div>
        </IntroText>
      </IntroSection>
    </Page>
  );
};

export default SetupPage;

const IntroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding: 60px 10%;
  max-width: 1200px;
  /* width: 100%; */
  margin-bottom: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const IntroText = styled.div`
  flex: 1;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ddd;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #00c6ff;
    text-shadow: 0 0 8px rgba(0, 198, 255, 0.6);
  }
`;
const IntroImageUp = styled.img`
  flex: 1;
  max-width: 400px; // 增大图片最大宽度
  width: 100%; // 保证在小屏下自适应
  height: auto;
  border-radius: 0; // 去掉圆角
  box-shadow: none; // 去掉阴影
  object-fit: cover;
`;
const IntroVideo = styled.video`
  flex: 1;
  max-width: 750px; // 增大最大宽度
  width: 100%; // 保证小屏下自适应
  height: auto;
  border-radius: 0; // 去掉圆角
  box-shadow: none; // 去掉阴影
  object-fit: cover;
`;

// const IntroImage = styled.img`
//   flex: 1;
//   max-width: 750px; // 增大图片最大宽度
//   width: 100%; // 保证在小屏下自适应
//   height: auto;
//   border-radius: 0; // 去掉圆角
//   box-shadow: none; // 去掉阴影
//   object-fit: cover;
// `;
