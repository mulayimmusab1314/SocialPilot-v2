import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import StatsFooter from "./components/landing/StatsFooter";
import VideoBackground from "./components/landing/VideoBackground";

export default function App() {
  return (
    <div className="relative flex min-h-[100vh] min-h-[100dvh] flex-col overflow-hidden bg-black">
      <VideoBackground />
      <Header />
      <Hero />
      <StatsFooter />
    </div>
  );
}
