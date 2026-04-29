function LearningModule({ title, info, img1 }) {
  return (
    <div className="relative max-w-4xl mx-auto mt-10 px-6 py-8 overflow-hidden rounded-3xl">

      {/* FULL BACKGROUND (GREEN GRADIENT ONLY) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-200 via-green-400 to-green-700" />

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