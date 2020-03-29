import axios from 'axios';

const URL = 'https://api.fidel.uk/v1/transactions/84782884-6ab8-4885-820f-4cd081dd658f';
const KEY = 'sk_test_50ea90b6-2a3b-4a56-814d-1bc592ba4d63';

// const URL = 'https://api-dev.fidel.uk/v1d/transactions/84782884-6ab8-4885-820f-4cd081dd658f';
// const KEY = 'sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6';

export default axios.create({
  baseURL: URL,
  headers: {
    'content-Type': 'application/json',
    'fidel-key': KEY,
  },
});
