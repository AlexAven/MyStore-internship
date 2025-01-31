import Layout from './components/Layout';
import UsersListPage from './pages/UsersListPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Layout>
      <UserProvider>
        <UsersListPage />
      </UserProvider>
    </Layout>
  );
}

export default App;
