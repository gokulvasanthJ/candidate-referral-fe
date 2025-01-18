import React, { useState } from 'react';
import axios from 'axios';

const ReferralForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [status, setStatus] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('jobTitle', jobTitle);
    formData.append('status', status);
    if (resume) formData.append('resume', resume);

    try {
      await axios.post('http://localhost:3009/api/referral', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Referral submitted successfully!');
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('Error submitting referral');
    }
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="card my-4 shadow-3">
            <div className="row g-0">
              <div className="col-xl-6 d-xl-block bg-image vh-100">
                <img
                  src="https://img.freepik.com/free-vector/spiral-red-notebook-mockup-isolated-vector_53876-62042.jpg?t=st=1737182020~exp=1737185620~hmac=ec0a856b11ccef04e3e47682e490e3d256805951358267349046953f426b8f86&w=740"
                  alt="Referral"
                  className="img-fluid "
                />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-4 text-uppercase">Submit Referral</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="jobTitle"
                          className="form-control form-control-lg"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="jobTitle">
                          Job Title
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="status"
                          className="form-control form-control-lg"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        />
                        <label className="form-label" htmlFor="status">
                          Status
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-outline">
                        <input
                          type="file"
                          className="form-control form-control-lg"
                          id="resume"
                          onChange={(e) => setResume(e.target.files[0])}
                        />
                        <label className="form-label" htmlFor="resume">
                          Resume
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit Referral
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
