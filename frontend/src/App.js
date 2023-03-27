import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Description: ${description}, Status: ${status}`);
    setName('');
    setDescription('');
    setStatus('');
  }

  return (
    <div className="App justify-content-center">
      <header className="head">TO-DO List Application</header>
      <h5 className="stack">
        Tech Stack: DataBase- MongoDB, Server- FAST API, User- React JS
      </h5>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input className="form-in" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required/>
          <input className="form-in" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} required/>
          <select className="form-in" value={status} onChange={(event) => setStatus(event.target.value)} required>
            <option value="" disabled hidden>Status</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </form>
      </div>
      <div className="d-flex justify-content-center text-center">
        <button type="submit" className="btn btn-primary" style={{backgroundColor: 'black', fontFamily: 'monospace'}}>
          Add Task
        </button>
      </div>
      <div className="Tasks">
        {/* Another Component here to show all previous TODOs */}
      </div>  
      <h4 className="copyright">
        (◎﹏◎) Copyright- Kartik Kumar [2023]
        <br/> Email: <a href="mailto:kartik.official.acc@gmail.com" target="_blank" rel="noopener noreferrer">kartik.official.acc@gmail.com</a>
        <br/> LinkedIn: <a href="https://www.linkedin.com/in/kartik-kumar-gcelt" target="_blank" rel="noopener noreferrer">kartik-kumar-gcelt</a>    
        &nbsp; Leetcode: <a href="https://leetcode.com/kartyk" target="_blank" rel="noopener noreferrer">kartyk</a>
      </h4>

    </div>
  );
}

export default App;
