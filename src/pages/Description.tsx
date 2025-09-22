import { useState } from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* background: #111; */
  color: white;
  padding: 60px 10%;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #00c6ff;
  text-shadow: 0 0 6px rgba(0, 198, 255, 0.7);
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ddd;
`;

const RightSection = styled.div`
  flex: 1.6; /* 比之前 1.4 更大一点 */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .video-preview {
    cursor: pointer;
    width: 100%;
    max-width: 720px; /* 从 560px 增大到 720px */
    aspect-ratio: 16 / 9; /* 保持视频比例 */
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.4);
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3.5rem; /* 稍微放大播放按钮 */
      color: #00c6ff;
      text-shadow: 0 0 12px rgba(0, 198, 255, 0.8);
      transition: transform 0.2s ease;
    }

    &:hover .play-icon {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }

  iframe {
    width: 100%;
    max-width: 720px; /* 让视频更大 */
    aspect-ratio: 16 / 9; /* 自动保持比例 */
    border: none;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.4);
  }

  @media (max-width: 900px) {
    flex: 1; /* 小屏幕下恢复正常占比 */
    .video-preview,
    iframe {
      max-width: 100%;
    }
  }
`;

const DescriptionPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const videoId = "HjbsgBEM1vs";

  return (
    <Page>
      <Content>
        <LeftSection>
          <Title>About Metalens</Title>
          <Description>
            Metalenses are flat optical devices that manipulate light with
            nanostructured surfaces, offering lightweight and compact
            alternatives to traditional lenses. They enable precise control of
            light propagation, opening possibilities in imaging, AR/VR, and
            advanced sensing systems.
          </Description>
        </LeftSection>
        <RightSection>
          {!loaded ? (
            <div className="video-preview" onClick={() => setLoaded(true)}>
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Video preview"
              />
              <div className="play-icon">▶</div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Metalens Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </RightSection>
      </Content>
    </Page>
  );
};

export default DescriptionPage;
