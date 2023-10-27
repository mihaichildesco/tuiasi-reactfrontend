import './api/dashboards/statistics-api';
import './api/file-manager-api';
import './api/profile-api';
import './api/auth-api';
import history from '@history';
import mock from './mock';

mock.onAny().passThrough();

if (module?.hot?.status() === 'apply') {
  const { pathname } = history.location;
  history.push('/loading');
  history.push({ pathname });
}
