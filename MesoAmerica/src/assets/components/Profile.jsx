function Profile({ emoji, title, description }) {
    return (
      <div className="bg-gradient-to-br from-amber-200 via-orange-300 to-yellow-500 border-4 border-amber-900 rounded-2xl shadow-2xl p-6 max-w-sm text-center font-serif relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-2 bg-amber-900"></div>

        <div className="text-7xl mb-3 drop-shadow-lg">
          {emoji}
        </div>

        <h3 className="text-2xl font-bold text-amber-900 tracking-wide uppercase mb-2">
          {title}
        </h3>
  
        <div className="w-16 h-1 bg-amber-900 mx-auto mb-3 rounded"></div>
  
        <p className="text-amber-950 text-sm leading-relaxed">
          {description}
        </p>
  
        <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-900"></div>
      </div>
    );
  }
  
  export default Profile;

  


