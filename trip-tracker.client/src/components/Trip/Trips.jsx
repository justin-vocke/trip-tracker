import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigateTo = useNavigate();
  useEffect(() => {
    populateTripsData();
  }, []);

  const populateTripsData = () => {
    axios.get("https://localhost:7093/api/Trips/GetTrips").then((res) => {
      const response = res.data;
      setTrips(response);
      setLoading(false);
    });
  };

  const onTripUpdate = (id) => {
    navigateTo("/update/" + id);
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
              <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
              <td>
                {trip.dateCompleted
                  ? new Date(trip.dateCompleted).toLocaleDateString()
                  : "-"}
              </td>
              <td>
                <div className="form-group">
                  <button
                    onClick={() => onTripUpdate(trip.id)}
                    className="btn btn-success"
                  >
                    Update
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // let contents = this.props.loading ? (
  //   <p>
  //     <em>Loading...</em>
  //   </p>
  // ) : (
  //   this.renderAllTripsTable(this.state.trips)
  // );

  let contents = loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderAllTripsTable(trips)

    // this.renderAllTripsTable(this.state.trips)
  );

  return (
    <div>
      <h1>All trips</h1>
      <p>Here you will see a list of all trips.</p>
      {contents}
    </div>
  );
};
