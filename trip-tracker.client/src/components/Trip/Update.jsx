/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";
export const Update = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateCompleted, setDateCompleted] = useState("");
  const params = useParams();
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
  let navigateTo = useNavigate();
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDateStarted = (e) => {
    setDateStarted(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDateCompleted = (e) => {
    setDateCompleted(e.target.value);
  };

  const onUpdateCancel = () => {
    navigateTo("/trips");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const id = params.id;

    let tripObject = {
      name: name,
      description: description,
      dateStarted: new Date(dateStarted).toISOString(),
      dateCompleted: dateCompleted
        ? new Date(dateCompleted).toISOString()
        : null,
    };
    axios
      .put("https://localhost:7093/api/Trips/UpdateTrip/" + id, tripObject)
      .then((res) => {
        navigateTo("/trips");
      });
  };
  return (
    <div className="trip-from">
      <h3>Update Trip</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Trip name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={onChangeName}
          />
          {console.log(description)}
        </div>
        <div className="form-group">
          <label>Trip description: </label>
          <textarea
            type="text"
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="row">
          <div className="col col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <label>Date of start: </label>
              <input
                type="date"
                className="form-control"
                value={dateStarted}
                onChange={onChangeDateStarted}
              />
            </div>
          </div>
          <div className="col col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <label>Date of completion: </label>
              <input
                type="date"
                className="form-control"
                value={dateCompleted}
                onChange={onChangeDateCompleted}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <button onClick={onUpdateCancel} className="btn btn-default">
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
