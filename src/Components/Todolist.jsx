import React from 'react';

const Todolist = ({ data, toggleStatus, editTask }) => {
  return (
    <div className='container mt-2'>
      <h2>Todolist</h2>
      <hr />
      <div className='container mt-2' style={{ height: '50vh', overflow: 'scroll' }}>
        {data.map((item, index) => (
          <div
            className='border border-2 p-2'
            style={{ backgroundColor: item.status === 'Success' ? 'green' : 'white' }}
            key={index}
          >
            <h1>{item.title}</h1>
            <p>Description: {item.description}</p>
            <p>Status: {item.status}</p>
            <button onClick={() => toggleStatus(index)}>
              {item.status === 'Success' ? 'Undo' : 'Finished'}
            </button>
            <button onClick={() => editTask(index)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
