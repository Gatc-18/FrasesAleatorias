import Frases from './components/Frases.jsx'
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Frases/>
    </ChakraProvider>
      
    </div>
  );
}

export default App;
