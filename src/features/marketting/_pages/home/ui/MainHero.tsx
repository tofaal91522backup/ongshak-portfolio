const MainHero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pb-40">
          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center text-center w-full  container">
            {/* Main Heading */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight font-normal  container animate-fade-rise"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              347+ Products Built. Zero Shortcuts.
            </h1>

            {/* Subtext */}
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mt-8 leading-relaxed animate-fade-rise-delay">
              We are Ongshak — a technology partner that builds software, AI
              systems, and digital products for companies that need things done
              right. From MVPs to enterprise platforms, since 2021.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-rise-delay-2">
              <button className="bg-foreground text-background px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow cursor-pointer">
                Start a Conversation
              </button>
              <button className="liquid-glass text-foreground px-8 py-3 rounded-full font-medium hover:scale-[1.03] transition-transform cursor-pointer">
                See Our Work →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
