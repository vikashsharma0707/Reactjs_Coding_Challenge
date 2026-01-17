// src/components/Display.jsx
import React, { useState, useEffect } from "react";
import api from "../services/api";
// import "./Display.css"; // Uncomment if you have CSS styling

const Display = () => {
  const [val, setVal] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await api.get("/?_limit=10"); // fetch only 10 posts
      setVal(res.data);
    } catch (error) {
      console.error("API error:", error);
      setVal([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="display-container">
      

      <div className="result-card">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <table className="styled-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {val.slice(0, 10).map((post) => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <button onClick={loadData} className="refresh-btn" disabled={loading}>
        🔄 {loading ? "Loading..." : "Refresh"}
      </button>
    </div>
  );
};

export default Display;
