import Header from "./components/header/Header";
import Form from "./components/form/Form";
import './app.css';

function App() {
  return (
    <div className="app">
        <Header 
          title="Qual é o melhor Petshop?"
          description="Calcule abaixo qual é o melhor petshop para os seus pets tomarem banho."
        />
        <Form />
    </div>
  );
}

export default App;
