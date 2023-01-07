import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from './components/Header';
import { Resume } from "./components/Resume";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Resume/>
    </div>
  )
}

export default App
