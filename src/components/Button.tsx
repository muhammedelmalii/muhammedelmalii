import React from 'react';

type ButtonProps = {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({ 
  primary = true, 
  children, 
  onClick,
  className = '',
  href
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={`
          inline-block px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
          ${primary 
            ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg hover:shadow-violet-500/30' 
            : 'bg-transparent border border-violet-400 text-violet-400 hover:bg-violet-400/10'}
          ${className}
        `}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
        ${primary 
          ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg hover:shadow-violet-500/30' 
          : 'bg-transparent border border-violet-400 text-violet-400 hover:bg-violet-400/10'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;