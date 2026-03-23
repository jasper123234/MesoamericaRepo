import Profile from './components/Profile.jsx';

export default function AboutUs() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-900 tracking-wide uppercase mb-2 text-center">
        About Us Page
      </h3>
      <Profile
        emoji="🐠"
        title="Extra Seal the Camp"
        description="Hello, my name is Ezra and I am very fascinated in the beheadings of Aztecs through the game Ullamaliztli. Oh wait.. These are not completely accurate and I’m determined to let others know!
      "
      />
      <Profile
        emoji="🍀"
        title="Jispo Creen"
        description="I love exotic shrimp cultivation it is one of my most deep and sincere passions, I spend 6 hours a day tending to my ever growing shrimp farm, currently harboring 7 different species of Wild Alaskan Mountain Shrimp. They eat shrimp in mesoamerica"
      />
      <Profile
        emoji="🐅"
        title="Tiger"
        description="I stand, behold the Olmec head, staring back at me, its history betrayed by misinterpretations, its truth succumbing to the western media.
      "
      />
      <Profile
        emoji="🪙"
        title="Lipo Lust"
        description="Hi! I am Leo and I find myself increasingly more and more invested in the Aztec Culture. I have decided to dedicate the remainder of my life to exploring the various Mesoamerican cultures that live rent free in my mind."
      />
    </div>
  );
}

