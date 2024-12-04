import { useState } from 'react'

export const App = () => {
  const [switchon, setSwitchon] = useState("off");

  const handleClick = () => {
    if (switchon == "off"){
     setSwitchon ("on");
    } else {
      setSwitchon ("off")
    }
  }

  return (
    
     <div className='App'>
      <h1>Light Switch</h1>
      <p>{switchon}</p>
      <button onClick={handleClick}>on</button>
      
     </div>
        
    
  )
}

export default App