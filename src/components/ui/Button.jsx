// src/components/ui/Button.jsx
export const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-sm",
    secondary: "bg-[#E8E8ED] hover:bg-[#E2E2E7] text-[#1D1D1F]",
    danger: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
  };
  return (
    <button
      className={`px-5 py-2.5 rounded-[20px] font-medium text-sm transition-all duration-200 active:scale-[0.98] cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};