import { useContext, useEffect, useRef, useState } from "react";
import axios from "../lib/axios";

export default function Table({ refresh }) {
  const [players, setPlayers] = useState([]);

  const loadPlayersFromApi = () => {
    axios
      .get("/api/v1/players")
      .then((data) => {
        setPlayers([]);
        setPlayers(data.data.data);
      })
      .catch(() => {
        alert("something wrong");
      });
  };

  useEffect(() => {
    loadPlayersFromApi();
  }, [refresh]);

  useEffect(() => {
    loadPlayersFromApi();
  }, []);

  return (
    <>
      <button
        className="btn btn-info btn-sm"
        onClick={() => loadPlayersFromApi()}
      >
        Load
      </button>
      <button className="btn btn-danger btn-sm" onClick={() => setPlayers([])}>
        Clear
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Exp</th>
            <th>Level</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          {players &&
            players.map((player, key) => (
              <tr key={key}>
                <td>{player.id}</td>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.password}</td>
                <td>{player.experience}</td>
                <td>{player.lvl}</td>
                <td>{player.createdAt}</td>
                <td>{player.updatedAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
