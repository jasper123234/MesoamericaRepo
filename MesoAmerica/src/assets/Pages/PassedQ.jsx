import Header from "../components/Header.jsx";
import kante from "../kante.jpg"; 
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-emerald-800 to-yellow-900 relative overflow-hidden flex items-center justify-center px-6 py-10">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#facc15_1px,_transparent_1px)] [background-size:40px_40px]" />
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-yellow-800 via-yellow-700 to-yellow-900 border-4 border-yellow-500 rounded-3xl shadow-2xl p-8 text-center">
      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>

        <Header title={<span className="text-green-400">Green Bean</span>} />


        <div className="flex justify-center mt-6 mb-6">
          <div className="w-52 h-52 rounded-full border-4 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] overflow-hidden">
            <img
              src={kante}
              className="w-full h-full object-cover"
            />
          </div>
        </div>


        <p className="text-yellow-100 text-lg leading-relaxed">
          Congratulations on completing the quiz! Your dedication to learning about Mesoamerican civilizations is commendable!
        </p>

        {/* Decorative divider */}
        <div className="w-32 h-1 bg-yellow-400 mx-auto my-6 rounded-full"></div>

      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-yellow-500 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-yellow-500 rounded-br-3xl"></div>

    </div>
  );
}

export default App;
