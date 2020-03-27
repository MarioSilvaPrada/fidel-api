import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-dev.fidel.uk/v1d/transactions/2314f371-39b1-4c80-8040-4144ff1bad09',
  headers: {
    'fidel-key': 'sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6',
  },
});
