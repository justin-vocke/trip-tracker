import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [error, setError] = useState("");
  let navigateTo = useNavigate();

  useEffect(() => {
    populateTripsData();
  }, []);

  const populateTripsData = async () => {
    try {
      const res = await axios.get("https://localhost:7093/api/Trips/GetTrips");
      const response = res.data;
      setTrips(response);
      setLoading(false);
      if (failed == true) {
        setFailed(false);
      }
      if (error !== "") {
        setError("");
      }
    } catch (err) {
      setFailed(true);
      setError(
        "Error loading trips. Please refresh the page. If the error persists, please contact us at ohno@ohnooooo.com"
      );
    }
  };

  const onTripUpdate = (id) => {
    navigateTo("/update/" + id);
  };

  const onTripDelete = (id) => {
    navigateTo("/delete/" + id);
  };
  const renderAllTripsTable = (trips) => {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date started</th>
            <th>Date completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <td>{trip.name}</td>
              <td>{trip.description}</td>
              <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
              <td>
                {trip.dateCompleted
                  ? new Date(trip.dateCompleted).toISOString().slice(0, 10)
                  : "-"}
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="button"
                    value="Update"
                    className="btn btn-success"
                    onClick={() => onTripUpdate(trip.id)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={() => onTripDelete(trip.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  let contents = loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : failed ? (
    <div className="text-danger">{error}</div>
  ) : (
    renderAllTripsTable(trips)
  );

  return (
    <div>
      <h1>All trips</h1>
      <p>Here you will see a list of all trips.</p>
      {contents}
    </div>
  );
};
