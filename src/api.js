// src/services/api.js
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' 
  ? 'https://wshirt.test/api'    
  : 'https://your-production-url.com/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const storagePath = process.env.NODE_ENV === 'development' 
  ? 'https://wshirt.test/storage/'  // Adjust to match your development storage URL
  : 'https://your-production-url.com/storage/';

export {api as default, storagePath };
