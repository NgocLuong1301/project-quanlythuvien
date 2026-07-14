import { useState } from "react";
import "./Publishers.css";

function Publishers() {
  const [publishers, setPublishers] = useState([
    { id: 1, name: "NXB Giáo Dục" },
    { id: 2, name: "NXB Kim Đồng" },
    { id: 3, name: "NXB Trẻ" },
  ]);

  const [name, setName] = useState("");

  const addPublisher = () => {
    if (!name.trim()) return;

    setPublishers([
      ...publishers,
      {
        id: publishers.length + 1,
        name,
      },
    ]);

    setName("");
  };

  const deletePublisher = (id) => {
    setPublishers(publishers.filter((p) => p.id !== id));
  };

  return (
    <div className="publishers">

      <div className="page-header">
        <h2>Publisher Management</h2>
      </div>

      <div className="publisher-form">

        <input
          type="text"
          placeholder="Publisher name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addPublisher}>
          Add Publisher
        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {publishers.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() => deletePublisher(item.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Publishers;