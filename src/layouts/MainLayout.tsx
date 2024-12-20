import { Outlet } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}