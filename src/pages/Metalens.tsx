import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
// import baseline from "/videos/CA_baseline_30.mp4";
// import meta from "/videos/CA_meta_30.mp4";
// import ours from "/videos/CA_ours_30.mp4";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #00c6ff, 0 0 10px #00c6ff33, 0 0 20px #00c6ff22;
  }
  50% {
    box-shadow: 0 0 15px #00c6ff, 0 0 25px #00c6ff44, 0 0 40px #00c6ff33;
  }
  100% {
    box-shadow: 0 0 5px #00c6ff, 0 0 10px #00c6ff33, 0 0 20px #00c6ff22;
  }
`;
const fadeSlide = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;
const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: white;
  font-size: 2rem;
  min-height: 500px;
  padding-top: 60px; // 给导航栏预留空间
  overflow-y: auto;
`;

const VideoRow = styled.div<{ animate: boolean }>`
  display: flex;
  gap: 20px;
  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeSlide} 0.6s ease;
    `}
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  cursor: crosshair;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 198, 255, 0.4);
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
`;

const VideoLabel = styled.div`
  margin-top: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #00c6ff;
  text-shadow: 0 0 5px rgba(0, 198, 255, 0.6);
  text-align: center;
`;

// interface MagnifierProps {
//   visible: boolean;
// }

const MagnifierCanvas = styled.canvas.attrs<{ visible: boolean }>({})`
  position: absolute;
  pointer-events: none;
  border: 2px solid white;
  border-radius: 50%;
  display: ${({ visible }) => (visible ? "block" : "none")};
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%);
  /* z-index: 99; */
`;

const PlayButton = styled.button`
  margin-top: 40px;
  padding: 12px 28px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  animation: ${glow} 2.5s infinite alternate;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(-2deg);
    background: linear-gradient(135deg, #0072ff, #00c6ff);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 30px #00c6ff88, 0 0 50px #00c6ff44;
  }

  /* 可选：增加文字阴影，让按钮更立体 */
  text-shadow: 0 0 5px rgba(0, 198, 255, 0.7);
`;
const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 52%;
  ${({ left }) => (left ? "left: 4%;" : "right: 4%;")}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: #00c6ff;
  border: none;
  font-size: 2rem;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(0, 198, 255, 0.6);
    color: white;
    transform: translateY(-50%) scale(1.2);
  }
`;
interface MagnifierState {
  relX: number;
  relY: number;
}
const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1.5px;
  color: #00c6ff;
  text-shadow: 0 0 8px rgba(0, 198, 255, 0.7), 0 0 16px rgba(0, 198, 255, 0.4);

  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-4px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

// const HighlightNumber = styled.span`
//   margin-left: 8px;
//   font-size: 2.4rem;
//   font-weight: 900;
//   background: linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff);
//   background-size: 200% auto;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   animation: shine 2s linear infinite;

//   @keyframes shine {
//     0% {
//       background-position: 0% center;
//     }
//     100% {
//       background-position: 200% center;
//     }
//   }
// `;
const videoSlides = [
  [
    "/videos/CA_meta_10_h264.mp4",
    "/videos/CA_baseline_10_h264.mp4",
    "/videos/CA_ours_10_h264.mp4",
  ],
  [
    "/videos/CA_meta_20_h264.mp4",
    "/videos/CA_baseline_20_h264.mp4",
    "/videos/CA_ours_20_h264.mp4",
  ],
  [
    "/videos/CA_meta_30_h264.mp4",
    "/videos/CA_baseline_30_h264.mp4",
    "/videos/CA_ours_30_h264.mp4",
  ],
  [
    "/videos/CA_meta_40_h264.mp4",
    "/videos/CA_baseline_40_h264.mp4",
    "/videos/CA_ours_40_h264.mp4",
  ],
  [
    "/videos/CA_meta_50_h264.mp4",
    "/videos/CA_baseline_50_h264.mp4",
    "/videos/CA_ours_50_h264.mp4",
  ],
];

const Metalens: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [magnifier, setMagnifier] = useState<MagnifierState>({
    relX: 0,
    relY: 0,
  });

  const videoRefs = useRef([
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ]).current;
  // useRef 包裹整个数组，数组引用固定
  const canvasRefs = useRef([
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
  ]).current;
  const handleMouseEnter = () => {
    setHovering(true);
    videoRefs.forEach((ref) => {
      const video = ref.current;
      if (video) {
        video.pause();
      }
    });
  };

  const handleMouseLeave = () => {
    setHovering(false);
    // 鼠标移出视频后恢复播放状态（如果之前是播放状态）
    if (isPlaying) {
      videoRefs.forEach((ref) => ref.current?.play());
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hovering) return; // 防止放大镜在鼠标移出后仍更新
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    setMagnifier({ relX, relY });
  };

  const togglePlay = () => {
    if (isPlaying) {
      videoRefs.forEach((ref) => ref.current?.pause());
      setIsPlaying(false);
    } else {
      videoRefs.forEach((ref) => ref.current?.play());
      setIsPlaying(true);
    }
  };
  // 切换 slide
  const changeSlide = (direction: "left" | "right") => {
    const newSlide = direction === "left" ? currentSlide - 1 : currentSlide + 1;
    if (newSlide < 0 || newSlide >= videoSlides.length) return;

    // 切换时暂停并重置所有视频
    videoRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
    setIsPlaying(false);

    setAnimate(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setAnimate(false), 600);
  };
  // 绘制放大镜
  useEffect(() => {
    if (!hovering) return;

    const MAG_SIZE = 150; // 放大镜大小
    const ZOOM = 2; // 放大倍数

    videoRefs.forEach((videoRef, i) => {
      const video = videoRef.current;
      const canvas = canvasRefs[i].current;
      if (!video || !canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const vw = video.videoWidth;
      const vh = video.videoHeight;

      const cx = magnifier.relX * vw;
      const cy = magnifier.relY * vh;

      const sw = MAG_SIZE / ZOOM;
      const sh = MAG_SIZE / ZOOM;
      const sx = Math.max(0, Math.min(vw - sw, cx - sw / 2));
      const sy = Math.max(0, Math.min(vh - sh, cy - sh / 2));

      ctx.clearRect(0, 0, MAG_SIZE, MAG_SIZE);
      ctx.save();
      ctx.beginPath();
      ctx.arc(MAG_SIZE / 2, MAG_SIZE / 2, MAG_SIZE / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(video, sx, sy, sw, sh, 0, 0, MAG_SIZE, MAG_SIZE);
      ctx.restore();
    });
  }, [magnifier, hovering, videoRefs, canvasRefs]);
  console.log("slide", currentSlide);

  return (
    <Page>
      <Title>Illumination Level (IL): {(currentSlide + 1) * 10}</Title>
      {currentSlide > 0 && (
        <ArrowButton left onClick={() => changeSlide("left")}>
          ❮
        </ArrowButton>
      )}
      <VideoRow animate={animate}>
        {videoSlides[currentSlide].map((src, i) => (
          <VideoCard key={i}>
            <VideoWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <StyledVideo
                key={src}
                ref={videoRefs[i]}
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src={src} type="video/mp4" />
              </StyledVideo>
              <MagnifierCanvas
                ref={canvasRefs[i]}
                visible={hovering}
                width={150}
                height={150}
                style={{
                  left:
                    magnifier.relX * (videoRefs[i].current?.clientWidth ?? 0),
                  top:
                    magnifier.relY * (videoRefs[i].current?.clientHeight ?? 0),
                }}
              />
            </VideoWrapper>
            <VideoLabel>
              {i === 0
                ? "Raw Metalens Video"
                : i === 1
                ? "Restored Video (Baseline)"
                : "Restored Video (Ours)"}
            </VideoLabel>
          </VideoCard>
        ))}
      </VideoRow>
      {currentSlide < videoSlides.length - 1 && (
        <ArrowButton onClick={() => changeSlide("right")}>❯</ArrowButton>
      )}
      <PlayButton onClick={togglePlay}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </PlayButton>
      {/* 隐藏预加载所有视频，避免切换延迟 */}
      <div style={{ display: "none" }}>
        {videoSlides.flat().map((src, idx) => (
          <video key={idx} preload="auto">
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>
    </Page>
  );
};

export default Metalens;
