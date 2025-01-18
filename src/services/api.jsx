import axios from 'axios';

const API_URL = 'http://localhost:5000/api/candidates';

export const getCandidates = async () => {
  return await axios.get(API_URL);
};

export const addCandidate = async (candidateData) => {
  return await axios.post(API_URL, candidateData);
};

export const updateCandidateStatus = async (id, status) => {
  return await axios.put(`${API_URL}/${id}/status`, { status });
};
