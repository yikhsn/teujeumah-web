import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzRjZmU2NmU0NGQ2MTJkMDZhZTZiZWIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NDg3MzU1Nzl9.hSBZ3wyjvpzpHBbEpu-fWpB7ZnmqkVrqlMlbHCMPtHI';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/words/search/',
    headers: { 'x-auth-token': token }
});

export default instance;