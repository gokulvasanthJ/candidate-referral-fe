import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateCard = () => {
  const [candidates, setCandidates] = useState([]);
  const [editingCandidate, setEditingCandidate] = useState(null); // For storing candidate being edited
  const [updatedCandidate, setUpdatedCandidate] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    status: '',
    resumeFile: null, // To hold resume file for updating
  });

  // Fetch candidates from backend
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:3009/api/candidates');
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  // Handle Delete
  const handleDelete = async (candidateId) => {
    try {
      await axios.delete(`http://localhost:3009/api/candidates/${candidateId}`);
      setCandidates(candidates.filter((candidate) => candidate._id !== candidateId));
    } catch (error) {
      console.error('Error deleting candidate:', error);
    }
  };

  // Handle Update
  const handleUpdate = (candidate) => {
    setEditingCandidate(candidate);
    setUpdatedCandidate({
      name: candidate.name,
      email: candidate.email,
      phoneNumber: candidate.phoneNumber,
      jobTitle: candidate.jobTitle,
      status: candidate.status,
      resumeFile: null, // Reset resume field
    });
  };

  // Handle input changes for form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCandidate({
      ...updatedCandidate,
      [name]: value,
    });
  };

  // Handle resume file change
  const handleFileChange = (e) => {
    setUpdatedCandidate({
      ...updatedCandidate,
      resumeFile: e.target.files[0],
    });
  };

  // Handle form submission for updating candidate
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', updatedCandidate.name);
    formData.append('email', updatedCandidate.email);
    formData.append('phoneNumber', updatedCandidate.phoneNumber);
    formData.append('jobTitle', updatedCandidate.jobTitle);
    formData.append('status', updatedCandidate.status);
    if (updatedCandidate.resumeFile) {
      formData.append('resumeFile', updatedCandidate.resumeFile);
    }

    try {
      const response = await axios.put(
        `http://localhost:3009/api/candidates/${editingCandidate._id}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setCandidates(
        candidates.map((candidate) =>
          candidate._id === editingCandidate._id ? response.data : candidate
        )
      );
      setEditingCandidate(null); // Close the modal
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  };

  

  return (
    <div className="row">
      {candidates.map((candidate) => (
        <div className="col-md-4" key={candidate._id}>
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" // Placeholder image
                  alt="Candidate"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{candidate.name}</h5>
                  <p className="card-text"><strong>Email:</strong> {candidate.email}</p>
                  <p className="card-text"><strong>Phone:</strong> {candidate.phoneNumber}</p>
                  <p className="card-text"><strong>Job Title:</strong> {candidate.jobTitle}</p>
                  <p className="card-text"><strong>Status:</strong> {candidate.status}</p>
                  {candidate.resumeFileUrl && (
                    <p className="card-text">
                      <a
                        href={`http://localhost:3009${candidate.resumeFileUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        View Resume
                      </a>
                    </p>
                  )}
                  <div className="d-flex justify-content-between">
                    {/* Update button */}
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdate(candidate)}
                    >
                      <i className="fas fa-edit"></i> Update
                    </button>
                    {/* Delete button */}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(candidate._id)}
                    >
                      <i className="fas fa-trash-alt"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Update Modal */}
      {editingCandidate && (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="updateModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="updateModalLabel">Update Candidate</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingCandidate(null)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmitUpdate}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={updatedCandidate.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={updatedCandidate.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={updatedCandidate.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitle"
                      name="jobTitle"
                      value={updatedCandidate.jobTitle}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      name="status"
                      value={updatedCandidate.status}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="resumeFile" className="form-label">Resume File</label>
                    <input
                      type="file"
                      className="form-control"
                      id="resumeFile"
                      onChange={handleFileChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateCard;
