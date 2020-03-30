import axios from 'axios';

const URL = 'https://api-dev.fidel.uk/v1d/programs/2314f371-39b1-4c80-8040-4144ff1bad09/transactions';
const KEY = 'sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6';

export default axios.create({
  baseURL: URL,
  headers: {
    'content-Type': 'application/json',
    'fidel-key': KEY,
  },
});
