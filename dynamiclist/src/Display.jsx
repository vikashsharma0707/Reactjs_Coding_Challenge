import axios from "axios";
import { useEffect, useState } from "react";
        // ⬅️  add this line

const Display = () => {
  const [posts, setPosts]   = useState([]);
  const [loading, setLoad]  = useState(true);

  // 🔹 API call (runs once)
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoad(false);
      }
    };
    loadData();
  }, []);                      // ✅ dependency array — infinite‑loop नहीं होगा

  if (loading) return <p className="loader">Loading…</p>;

  return (
    <div className="container">
      <h1 className="title">React JS Dynamic List</h1>

      <table className="posts-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {posts.map(({ id, title }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
