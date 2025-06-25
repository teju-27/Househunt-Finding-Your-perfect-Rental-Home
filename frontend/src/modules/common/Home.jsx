import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            {property.propType} - ₹{property.propAmt} - {property.propAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
