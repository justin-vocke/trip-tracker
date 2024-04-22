import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export const Delete = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateCompleted, setDateCompleted] = useState("");
  const params = useParams();
  let navigateTo = useNavigate();
  useEffect(() => {
    getTripData();
  }, []);

  const getTripData = () => {
    const id = params.id;

    axios.get("https://localhost:7093/api/Trips/" + id).then((res) => {
      const response = res.data;
      setName(response.name);
      setDescription(response.description);
      setDateStarted(new Date(response.dateStarted).toISOString().slice(0, 10));
      setDateCompleted(
        response.dateCompleted
          ? new Date(response.dateCompleted).toISOString().slice(0, 10)
          : null
      );
    });
  };

  const onDeleteCancel = () => {
    navigateTo("/trips");
  };

  const onConfirmation = () => {
    const id = params.id;
    axios
      .delete("https://localhost:7093/api/Trips/DeleteTrip/" + id)
      .then((res) => {
        navigateTo("/trips");
      });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <h2>Delete trip confirmation</h2>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <button onClick={onDeleteCancel} className="btn btn-default">
            Cancel
          </button>
          <button onClick={onConfirmation} className="btn btn-danger">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
