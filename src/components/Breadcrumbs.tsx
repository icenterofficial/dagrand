import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-6 lg:mb-8 font-medium overflow-x-auto whitespace-nowrap pb-2 lg:pb-0">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-brand-navy transition-colors shrink-0"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center shrink-0">
          <ChevronRight className="h-3.5 w-3.5 mx-2 text-gray-400" />
          {item.path ? (
            <Link 
              to={item.path}
              className="hover:text-brand-navy transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-brand-gold font-bold cursor-default">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};