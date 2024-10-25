import React, { useEffect, useState } from 'react';
import './AllRecordings.css';
import axios from 'axios';

const AllRecordings = () => {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecordings();
  }, []);

  const fetchRecordings = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://apps-8gvh.vercel.app/records');
      setRecordings(response.data);
    } catch (error) {
      console.error('Error fetching recordings:', error);
      setError('Failed to fetch recordings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  const deleteRecording = async (id) => {
    try {
      await axios.delete(`https://apps-8gvh.vercel.app/recordings/${id}`); // Adjust this to your backend's delete endpoint
      fetchRecordings(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting recording:', error);
      setError('Failed to delete recording. Please try again later.');
    }
  };
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="all-recordings">
      <h1>All Recordings</h1>
      <ul className="recording-list">
        {Array.isArray(recordings) && recordings.map((recording) => (
          <li key={recording._id} className="voice-message">
            <audio src={recording.url} controls />
            <p>Recorded on: {new Date(recording.createdAt).toLocaleString()}</p>
            <button onClick={() => deleteRecording(recording._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRecordings;
