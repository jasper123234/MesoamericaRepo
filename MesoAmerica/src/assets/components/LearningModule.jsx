function LearningModule({ title, info, img1 }) {
  return (
    <div className="relative max-w-4xl mx-auto mt-10 px-6 py-8 overflow-hidden rounded-3xl">

      {/* FULL BACKGROUND DECORATION */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-100 via-green-200 to-green-500">

        {/* Sky */}
        <div className="absolute top-6 left-20 text-6xl opacity-70">☁️</div>
        <div className="absolute top-12 right-24 text-5xl opacity-70">☁️</div>

        {/* Sun symbols */}
        <div className="absolute top-2 left-2 text-7xl">☀️</div>
        <div className="absolute top-2 right-2 text-7xl">☀️</div>

        {/* Jungle trees */}
        <div className="absolute bottom-0 left-0 text-9xl">🌳</div>
        <div className="absolute bottom-0 left-24 text-8xl">🌴</div>
        <div className="absolute bottom-0 right-0 text-9xl">🌳</div>
        <div className="absolute bottom-0 right-24 text-8xl">🌴</div>

        {/* Flowers */}
        <div className="absolute bottom-4 left-1/4 text-5xl">🌺</div>
        <div className="absolute bottom-8 left-1/3 text-4xl">🌸</div>
        <div className="absolute bottom-5 right-1/4 text-5xl">🌼</div>
        <div className="absolute bottom-10 right-1/3 text-4xl">🌻</div>

        {/* Stone heads */}
        <div className="absolute bottom-2 left-6 text-6xl">🗿</div>
        <div className="absolute bottom-2 right-6 text-6xl">🗿</div>

        {/* Pyramid */}
        <div className="absolute top-32 left-4 text-8xl opacity-70">⛰️</div>
        <div className="absolute top-32 right-4 text-8xl opacity-70">⛰️</div>

        {/* Snake */}
        <div className="absolute bottom-20 right-10 text-7xl">🐍</div>
      </div>

      {/* TOP CARD */}
      <div className="bg-gradient-to-br from-yellow-200/95 via-orange-300/95 to-yellow-500/95
                      border-4 border-yellow-900
                      rounded-3xl
                      shadow-2xl
                      p-6 mb-5 relative">

        <h1 className="text-4xl text-yellow-950 text-center font-bold uppercase tracking-wider mb-6">
          {title}
        </h1>

        <div className="flex justify-center">
          <img
            src={img1}
            alt="img1"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-yellow-900 shadow-xl"
          />
        </div>

        {/* Side symbols */}
        <div className="absolute left-6 top-1/2 text-5xl">☀️</div>
        <div className="absolute right-6 top-1/2 text-5xl">☀️</div>
      </div>

      {/* INFO CARD */}
      <div className="bg-gradient-to-r from-yellow-100/95 via-yellow-200/95 to-orange-200/95
                      border-4 border-yellow-900
                      rounded-2xl
                      shadow-xl
                      p-6">

        <p className="text-xl text-yellow-950 text-center leading-relaxed font-medium">
          {info}
        </p>
      </div>
    </div>
  );
}

export default LearningModule;