function LearningModule({ title, info, img1 }) {
  return (
    <div className="max-w-xl mx-auto mt-6 space-y-4 font-serif">
      
      <div className="bg-gradient-to-br from-amber-200 via-orange-300 to-yellow-500 
                      border-4 border-yellow-900 
                      rounded-2xl 
                      shadow-xl 
                      p-5">

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
      <div className="bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 
                      border-4 border-yellow-900 
                      rounded-2xl 
                      shadow-xl 
                      p-5">

        <p className="text-lg text-yellow-950 text-center leading-relaxed">
          {info}
        </p>
      </div>

    </div>
  );
}

export default LearningModule;