import Header from "../components/Header.jsx";
import JR from "../JR.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-yellow-900 relative overflow-hidden flex items-center justify-center px-6 py-10">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#f87171_1px,_transparent_1px)] [background-size:40px_40px]" />

      <div className="relative w-full max-w-4xl bg-gradient-to-b from-red-800 via-red-700 to-red-900 border-4 border-yellow-600 rounded-3xl shadow-2xl p-8 text-center">

        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>

        {/* Enhanced Title */}
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-300 tracking-widest drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]">
            TRIAL FAILED
          </h1>
          <div className="absolute -inset-2 bg-red-600/20 blur-2xl rounded-full -z-10"></div>
        </div>

        <div className="flex justify-center mt-6 mb-6">
          <div className="w-52 h-52 rounded-full border-4 border-yellow-500 shadow-[0_0_25px_rgba(239,68,68,0.7)] overflow-hidden">
            <img
              src={JR}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>

        <p className="text-yellow-100 text-lg leading-relaxed">
          The spirits of knowledge did not favor this attempt.  
          Study the past, reflect, and return stronger in your next trial.
        </p>

        <div className="w-32 h-1 bg-yellow-500 mx-auto my-6 rounded-full"></div>

      </div>

    </div>
  );
}

export default App;