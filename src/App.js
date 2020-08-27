import React from 'react';

// styles
import './App.css';

// components
import DogList from './components/dogList/DogList';

function App() {
  return (
    <div className="content">
      <h1>Achat de chien</h1>
      <table className="dogs-list">
        <thead className="dogs-list__head">
        <tr>
          <th>Photo</th>
          <th>Nom</th>
          <th>Race</th>
          <th>Sexe</th>
          <th>Age</th>
          <th>État</th>
        </tr>
        </thead>
        <tbody className="dogs-list__body">
          <DogList />
        </tbody>
      </table>
    </div>
  );
}

export default App;
