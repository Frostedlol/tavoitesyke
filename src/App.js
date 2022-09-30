import { useState } from 'react';
import './App.css';

function App() {


  const [age, setAge] = useState(0)

  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)
  

  function Laske(e) {
    e.preventDefault()
    const Lower = (220 - age) * 0.65
    setLower(Lower)

    const Upper = (220 - age) * 0.85
    setUpper(Upper)
  }
  

  

  return (
    <div id="content">

      <h3>Heart rate limits calculator</h3>

      <form onSubmit={Laske}>
        <div>
          <label>Age</label>
          <br />
          <input value={age} onChange={e => setAge(e.target.value)}/>
        </div>

        <div>
          <label>Heart rate limits</label>
          <br />
          <output>{lower.toFixed(0) +"-"+ upper.toFixed(0)}</output>
        </div>
        <button>Calculate</button>
      </form>
      
    </div>
  );
}

export default App;
