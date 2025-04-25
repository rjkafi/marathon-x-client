import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyMarathons = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMarathon, setSelectedMarathon] = useState(null);
  const [updatedMarathon, setUpdatedMarathon] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/my-marathons?email=${user.email}`)
        .then((res) => setMarathons(res.data));
    }
  }, [user]);

  const handleUpdateClick = (marathon) => {
    setSelectedMarathon(marathon);
    setUpdatedMarathon({
      title: marathon.title,
      location: marathon.location,
      startRegDate: marathon.startRegDate,
      endRegDate: marathon.endRegDate,
    });
    setShowUpdateModal(true);
  };

  const handleDeleteClick = (marathon) => {
    setSelectedMarathon(marathon);
    setShowDeleteModal(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://marathon-x-server.vercel.app/marathon/${selectedMarathon._id}`, updatedMarathon)
      .then((response) => {
        setMarathons(
          marathons.map((m) =>
            m._id === selectedMarathon._id ? { ...m, ...updatedMarathon } : m
          )
        );
        setShowUpdateModal(false);
        toast.success("Marathon updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating marathon:", error);
        toast.error("Failed to update marathon.");
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://marathon-x-server.vercel.app/marathon/${selectedMarathon._id}`)
      .then(() => {
        setMarathons(marathons.filter((m) => m._id !== selectedMarathon._id));
        setShowDeleteModal(false);
        toast.success("Marathon deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting marathon:", error);
        toast.error("Failed to delete marathon.");
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">My Marathons</h2>
      <table className="min-w-full  border rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Title</th>
            <th className="py-2 px-4 text-left">Location</th>
            <th className="py-2 px-4 text-left">Dates</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          { marathons.length > 0 ? (
             marathons.map((marathon) => (
              <tr key={marathon._id} className="border-b">
                <td className="py-2 px-4">{marathon.title}</td>
                <td className="py-2 px-4">{marathon.location}</td>
                <td className="py-2 px-4">
                  {new Date(marathon.startRegDate).toLocaleDateString()} -{" "}
                  {new Date(marathon.endRegDate).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleUpdateClick(marathon)}
                    className="text-blue-500 hover:underline mx-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteClick(marathon)}
                    className="text-red-500 hover:underline mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ): (
            <tr >
            <td colSpan="6" className="text-center py-20">
              No marathon found.
            </td>
          </tr>
          )}
         
        </tbody>
      </table>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Marathon</h3>
            <form onSubmit={handleUpdateSubmit}>
              <div className="form-control mb-4">
                <label className="label">Title</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={updatedMarathon.title}
                  onChange={(e) =>
                    setUpdatedMarathon({ ...updatedMarathon, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">Location</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={updatedMarathon.location}
                  onChange={(e) =>
                    setUpdatedMarathon({ ...updatedMarathon, location: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">Start Date</label>
                <input
                  type="date"
                  className="input input-bordered"
                  value={updatedMarathon.startRegDate}
                  onChange={(e) =>
                    setUpdatedMarathon({
                      ...updatedMarathon,
                      startRegDate: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">End Date</label>
                <input
                  type="date"
                  className="input input-bordered"
                  value={updatedMarathon.endRegDate}
                  onChange={(e) =>
                    setUpdatedMarathon({
                      ...updatedMarathon,
                      endRegDate: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="modal-action">
                <button type="button" className="btn" onClick={() => setShowUpdateModal(false)}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
            <p>Are you sure you want to delete this marathon?</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowDeleteModal(false)}>
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

export default MyMarathons;
