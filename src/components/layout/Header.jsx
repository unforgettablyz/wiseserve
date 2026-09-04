// src/components/layout/Header.jsx
export const Header = ({ title, user = "Store Manager" }) => (
  <header className="h-20 border-b border-black/[0.05] bg-white/50 backdrop-blur-md px-8 flex items-center justify-between font-[-apple-system]">
    <h1 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">{title}</h1>
    <div className="flex items-center gap-3 bg-[#F5F5F7] px-4 py-2 rounded-[20px]">
      <div className="w-6 h-6 rounded-full bg-[#0071E3]/10 text-[#0071E3] text-xs flex items-center justify-center font-semibold">
        {user.charAt(0)}
      </div>
      <span className="text-sm font-medium text-[#1D1D1F]">{user}</span>
    </div>
  </header>
);