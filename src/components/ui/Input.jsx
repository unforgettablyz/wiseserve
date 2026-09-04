// src/components/ui/Input.jsx
export const Input = ({ label, className = "", ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    {label && <label className="text-xs font-semibold text-[#86868B] tracking-tight pl-1">{label}</label>}
    <input
      className={`bg-[#F5F5F7] border border-transparent focus:border-[#0071E3] focus:bg-white text-[#1D1D1F] rounded-[20px] px-4 py-2.5 text-sm outline-none transition-all duration-200 placeholder-[#86868B] ${className}`}
      {...props}
    />
  </div>
);