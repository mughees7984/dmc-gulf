import React from 'react';

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children = 'Sign In',
    onClick,
    className = '',
    type = 'button',
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-1 rounded-full bg-gradient-to-r from-[#E6C98E] to-[#40B5AD] disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;