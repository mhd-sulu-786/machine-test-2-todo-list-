import React, { useState } from 'react';
import './App.css';
import Todolist from './Components/Todolist';

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [editingIndex, setEditingIndex] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    if (title === '' || description === '') {
      return alert("Fill the form");
    }
    if (editingIndex === null) {
      setData([...data, { title, description, status }]);
    } else {
      const newData = data.map((item, index) => (
        index === editingIndex ? { title, description, status } : item
      ));
      setData(newData);
      setEditingIndex(null);
    }
    setTitle('');
    setDescription('');
    setStatus('Pending');
  };

  const toggleStatus = (index) => {
    const newData = data.map((item, i) => (
      i === index ? { ...item, status: item.status === 'Pending' ? 'Success' : 'Pending' } : item
    ));
    setData(newData);
  };

  const editTask = (index) => {
    const task = data[index];
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setEditingIndex(index);
  };

  return (
    <div className="App">
      <form className='d-flex flex-column container w-25 gap-2 mt-2 p-2 border border-2 text-center' onSubmit={submitForm}>
        <h2>ToDo App</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
        />
        <button className='btn btn-primary' type="submit">
          {editingIndex === null ? 'Add' : 'Save'}
        </button>
      </form>
      {data.length > 0 && <Todolist data={data} toggleStatus={toggleStatus} editTask={editTask} />}
    </div>
  );
}

export default App;
