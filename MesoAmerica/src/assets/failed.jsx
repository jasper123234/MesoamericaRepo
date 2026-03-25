function Failed({ wrongQ1, wrongQ2, wrongQ3, a1, a2, a3 }) {
    return (
      <p class="text-green-100 b border border-green-900 c p-3 mt-3  border-4 top-4">
        Nice try! Heres what you got wrong:
        {wrongQ1}
        You shouldve said:
        {a1}
        {wrongQ2}
        {a2}
        {wrongQ3}
        {a3}
      </p>
    );
  }
  
  export default Failed;
  