export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyles = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
  };

  const variantStyles = {
    primary: {},
    secondary: {
      backgroundColor: '#f5f5f5',
      color: '#333',
      border: '1px solid #e5e7eb',
    },
  };

  const variantClasses = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-200 text-gray-900',
  };

  return (
    <button
      className={variantClasses[variant]}
      onClick={onClick}
      style={{ ...baseStyles, ...variantStyles[variant] }}
    >
      {children}
    </button>
  );
}
