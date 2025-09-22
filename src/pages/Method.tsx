import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import pic1 from "../assets/method/Picture1.png";
import pic2 from "../assets/method/Picture2.png";
import pic3 from "../assets/method/Picture3.png";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  width: 100vw; // 占满屏幕宽度
  min-height: 100vh;
  color: #ddd;
`;

const TextRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; // 占满屏幕宽度
  gap: 40px;
  /* margin-bottom: 40px; */
`;

const TextItem = styled.div<{ active: boolean }>`
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  color: ${({ active }) => (active ? "#00c6ff" : "#555")};

  h3 {
    /* margin-bottom: 12px; */
    font-size: 1.6rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 420px;
  }
`;

const ImageArea = styled.div`
  width: 100%;
  max-width: 1200px; // 可以改大，控制图片最大宽度
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageItem = styled.img<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) =>
    active ? "translateY(0%)" : "translateY(-20%)"};
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

const images = [pic1, pic2, pic3];

const MethodPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsInView] = useState(false);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    startAutoPlay();
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 元素进入视口，开始轮播
          setIsInView(true);
          startAutoPlay();
        } else {
          // 元素离开视口，停止轮播并回到初始状态
          setIsInView(false);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setActiveIndex(0); // 回到初始状态
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <Page ref={containerRef}>
      <TextRow>
        <TextItem active={activeIndex === 0} onClick={() => handleClick(0)}>
          <h3>Raw Metalens Images</h3>
          <p>
            Raw metalens images typically suffer from multiple degradations,
            including inherent chromatic and angular aberrations. In addition,
            real-world illumination levels (IL) can vary dramatically—from very
            low light (e.g., IL = 2, left) to very bright conditions (e.g., IL =
            60, right)—posing a major challenge for restoration models that are
            pretrained under a fixed illumination setting (e.g., IL = 30).
          </p>
        </TextItem>
        <TextItem active={activeIndex === 1} onClick={() => handleClick(1)}>
          <h3>Our Method 1 </h3>
          <h3>RL-based Illumination Adapter</h3>
          <p>
            Powered by Reinforcement Learning (RL), we propose a novel
            illumination adapter that adaptively transforms the input image
            (with various IL) to better match the pretrained restoration model
            (e.g., on IL=30).
          </p>
        </TextItem>
        <TextItem active={activeIndex === 2} onClick={() => handleClick(2)}>
          <h3>Our Method 2 </h3>
          <h3>Spatial-Aware Attention Mechanism</h3>
          <p>
            To mitigate the intrinsic degradations introduced by metalens
            imaging, we propose a novel attention mechanism that dynamically
            tailors the restoration process according to spatial information.
          </p>
        </TextItem>
      </TextRow>
      <ImageArea>
        <ImageWrapper>
          {images.map((src, i) => (
            <ImageItem
              key={i}
              src={src}
              alt={`method-${i + 1}`}
              active={i === activeIndex}
            />
          ))}
        </ImageWrapper>
      </ImageArea>
    </Page>
  );
};

export default MethodPage;
