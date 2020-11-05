import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <ul>{task(2)}</ul>
      <ul>{task(3)}</ul>
    </div>
  );
}

export default App;
