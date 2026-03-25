function Passed({ a1, a2, a3 }) {
    return (
      <p class="text-green-100 b border border-green-900 c p-3 mt-3  border-4 top-4">
        Well done! You passed the quiz! Here are the correct answers:
        {a1}
        {a2}
        {a3}
      </p>
    );
  }
  
  export default Passed;