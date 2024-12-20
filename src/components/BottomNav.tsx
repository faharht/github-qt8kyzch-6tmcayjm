import { Home, Search, PlusSquare, Users, Bell, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/search', label: 'Search' },
    { icon: PlusSquare, path: '/create', label: 'Create' },
    { icon: Users, path: '/community', label: 'Community' },
    { icon: Bell, path: '/notifications', label: 'Notifications' },
    { icon: MessageSquare, path: '/messages', label: 'Messages' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex justify-between items-center">
          {navItems.map(({ icon: Icon, path, label }) => (
            <Link
              key={path}
              to={path}
              aria-label={label}
              className={`p-3 flex items-center justify-center ${
                location.pathname === path ? 'text-white' : 'text-gray-400'
              } hover:text-white transition-colors`}
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}