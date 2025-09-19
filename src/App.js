import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard.js";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Network response not ok");
        const data = await res.json();
        if (!cancelled) setUsers(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchUsers();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-container container mt-4">
        <h1 className="text-success mb-4 ">User Profile</h1>
        {loading ? (
          <div className="loader-container d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            Error: {error}
          </div>
        ) : (
          <div className="row">
            {users.map((each) => (
              <div className="col-md-4 mb-4" key={each.id}>
                <UserCard user={each} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
