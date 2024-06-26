'use client';

import clsx from 'clsx';


const Button = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(`
        btn
        btn-dark
        btn-md
      `,
      disabled && "opacity-50 cursor-default",
      fullWidth && "w-100",
      secondary ? 'text-gray-900' : 'text-white',
      danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
      !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
   );
}

export default Button;
