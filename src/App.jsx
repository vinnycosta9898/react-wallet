import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Form } from './components/Form';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Resume/>
      <Form/>
    </div>
  )
}

export default App
