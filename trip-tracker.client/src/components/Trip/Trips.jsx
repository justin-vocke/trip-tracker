import { useState, useEffect } from "react";
import axios from "axios";
export const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

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
              <td>{trip.dateStarted}</td>
              <td>{trip.dateCompleted}</td>
              <td>a</td>
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
