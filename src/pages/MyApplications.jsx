import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const MyApplications = () => {
  const [registrations, setRegistrations] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({});
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      axios
        .get(`https://marathon-x-server.vercel.app/my-registrations`, {
          params: { email: userEmail, search: searchQuery },
        })
        .then((response) => {
          setRegistrations(response.data);
        })
        .catch((error) => {
          console.error("Error fetching registrations:", error);
        });
    }
  }, [userEmail, searchQuery]);

  // Handle Update 
  const handleUpdateClick = (registration) => {
    setSelectedRegistration(registration);
    setUpdatedDetails({
      firstName: registration.firstName,
      lastName: registration.lastName,
      contactNumber: registration.contactNumber,
    });
    setShowUpdateModal(true);
  };

  // Handle Update Submit
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://marathon-x-server.vercel.app/registration/${selectedRegistration._id}`, updatedDetails)
      .then((response) => {
        setRegistrations(
          registrations.map((r) =>
            r._id === selectedRegistration._id ? { ...r, ...updatedDetails } : r
          )
        );
        setShowUpdateModal(false);
        toast.success("Registration updated successfully!"); 
      })
      .catch((error) => {
        console.error("Error updating registration:", error);
        toast.error("Error updating registration!"); 
      });
  };

  // Handle Delete Click
  const handleDeleteClick = (registration) => {
    setSelectedRegistration(registration);
    setShowDeleteModal(true);
  };

  // Handle Delete
  const handleDelete = () => {
    axios
      .delete(`https://marathon-x-server.vercel.app/registration/${selectedRegistration._id}`)
      .then(() => {
        setRegistrations(registrations.filter((r) => r._id !== selectedRegistration._id));
        setShowDeleteModal(false);
        toast.success("Registration deleted successfully!"); 
      })
      .catch((error) => {
        console.error("Error deleting registration:", error);
        toast.error("Error deleting registration!");
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">My Marathon Applications</h2>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Marathon Title"
          className="input input-bordered w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Marathon Title</th>
              <th>Start Date</th>
              <th>Location</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.length > 0 ? (
              registrations.map((registration, idx) => (
                <tr key={idx}>
                  <td>{registration.marathonTitle}</td>
                  <td>{new Date(registration.startDate).toLocaleDateString()}</td>
                  <td>{registration.location}</td>
                  <td>{registration.firstName}</td>
                  <td>{registration.lastName}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      onClick={() => handleUpdateClick(registration)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDeleteClick(registration)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No registrations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Registration</h3>
            <form onSubmit={handleUpdateSubmit}>
              <input
                type="text"
                className="input input-bordered w-full my-2"
                value={updatedDetails.firstName}
                onChange={(e) =>
                  setUpdatedDetails({ ...updatedDetails, firstName: e.target.value })
                }
                placeholder="First Name"
              />
              <input
                type="text"
                className="input input-bordered w-full my-2"
                value={updatedDetails.lastName}
                onChange={(e) =>
                  setUpdatedDetails({ ...updatedDetails, lastName: e.target.value })
                }
                placeholder="Last Name"
              />
              <input
                type="text"
                className="input input-bordered w-full my-2"
                value={updatedDetails.contactNumber}
                onChange={(e) =>
                  setUpdatedDetails({ ...updatedDetails, contactNumber: e.target.value })
                }
                placeholder="Contact Number"
              />
              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowUpdateModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
            <p>Are you sure you want to delete this registration?</p>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
  
    </div>
  );
};

export default MyApplications;
