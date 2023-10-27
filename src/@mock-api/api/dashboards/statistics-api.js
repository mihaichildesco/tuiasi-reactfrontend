import mockApi from '../../mock-api.json';
import mock from '../../mock';

const statistics = mockApi.components.examples.dashboards.value;

mock.onGet('/api/dashboards/statistics').reply((config) => {
    return [200, statistics];
});
