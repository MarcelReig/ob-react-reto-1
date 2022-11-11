import { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import { Contact } from "./models/contact.class";

function App() {
  const [newContact, setContact] = useState(
    new Contact("Marcel", "Reig", "marcel@ibm.com", false)
  );

  return (
    <div className="App">
      <header className="App-header">
        <ComponentA contact={newContact} setContact={setContact}></ComponentA>
      </header>
    </div>
  );
}

export default App;
