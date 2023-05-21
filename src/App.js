import './App.css';
import './Neat.css';
import React, { useState } from 'react';
import List from './List.js';

function App() {

  // State hook -- 'useState'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([
    { id: 1, value: "Learn React" },
    { id: 2, value: "Learn JSX" },
    { id: 3, value: "Learn Hooks" },
  ]);

  // Helper Functions
  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
    {/* 1. Header */}
    <h1>Todo List App</h1>

    {/* 2. Input (input and button) */}
    <input
      type="text"
      placeholder='add an item'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
    />
    
    <button onClick={() => addItem()}>Add</button>

    {/* 3. List of items */}
    <List
      items={items}
      deleteItem={deleteItem}
    />

    </div>
  );
}

export default App;
