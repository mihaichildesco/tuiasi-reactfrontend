import mockApi from '../mock-api.json';
import mock from '../mock';

const aboutApi = mockApi.components.examples.profile_about.value;

mock.onGet('/api/profile/about').reply((config) => {
  return [200, aboutApi];
});
