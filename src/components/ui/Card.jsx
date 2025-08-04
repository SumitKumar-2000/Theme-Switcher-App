// src/components/Card.jsx
import { Cn } from '@/lib/utils/Cn';
import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={Cn(`rounded-lg shadow-md p-4 transition-all bg-primary text-primary-foreground border border-border duration-300 ${className}`)}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className = '' }) {
  return (
    <h2 className={Cn(`text-xl font-semibold mb-2 ${className}`)}>
      {children}
    </h2>
  );
};

Card.Content = function CardContent({ children, className = '' }) {
  return (
    <div className={Cn(`text-base ${className}`)}>
      {children}
    </div>
  );
};

export default Card;
