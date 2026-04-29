function LearningModule({ title, info, img1 }) {
  return (
    <div className="relative max-w-xl mx-auto mt-6 space-y-4 font-serif overflow-hidden">

      {/* Nature Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-300 via-green-200 to-green-500 rounded-3xl">

        {/* Trees */}
        <div className="absolute bottom-0 left-4 text-7xl">🌳</div>
        <div className="absolute bottom-0 right-6 text-8xl">🌴</div>
        <div className="absolute bottom-0 left-1/3 text-6xl">🌲</div>

        {/* Flowers */}
        <div className="absolute bottom-4 left-16 text-4xl">🌸</div>
        <div className="absolute bottom-6 right-20 text-4xl">🌺</div>
        <div className="absolute bottom-3 left-1/2 text-3xl">🌼</div>
        <div className="absolute bottom-8 right-1/3 text-3xl">🌻</div>
      </div>

      {/* Title + Image Card */}
      <div className="bg-gradient-to-br from-amber-200/95 via-orange-300/95 to-yellow-500/95
                      border-4 border-yellow-900
                      rounded-2xl
                      shadow-2xl
                      p-5 backdrop-blur-sm">

        <h1 className="text-3xl text-yellow-950 text-center font-bold uppercase tracking-wider mb-4">
          {title}
        </h1>

        <div className="flex justify-center">
          <img
            src={img1}
            alt="img1"
            className="w-52 h-52 object-cover rounded-xl border-4 border-yellow-900 shadow-lg"
          />
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-br from-yellow-100/95 via-amber-200/95 to-orange-300/95
                      border-4 border-yellow-900
                      rounded-2xl
                      shadow-2xl
                      p-5 backdrop-blur-sm">

        <p className="text-lg text-yellow-950 text-center leading-relaxed">
          {info}
        </p>
      </div>

    </div>
  );
}

export default LearningModule;