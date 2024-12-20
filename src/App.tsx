import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { CreatePage } from './pages/CreatePage';
import { CommunityPage } from './pages/CommunityPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { MessagesPage } from './pages/MessagesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;