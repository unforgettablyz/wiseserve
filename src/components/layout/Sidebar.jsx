// src/components/layout/Sidebar.jsx
export const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "dashboard", label: "Analytics" },
    { id: "dailylog", label: "Daily Log" },
    { id: "menu", label: "Menu Manager" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#F5F5F7] border-r border-black/[0.05] p-6 flex flex-col justify-between font-[-apple-system]">
      <div>
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-8 h-8 rounded-[12px] bg-[#0071E3] flex items-center justify-center text-white font-bold">🍃</div>
          <span className="font-semibold text-lg text-[#1D1D1F] tracking-tight">EcoBite</span>
        </div>
        <nav className="flex flex-col gap-1.5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left px-4 py-3 rounded-[20px] text-sm font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-white text-[#0071E3] shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                  : "text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/[0.02]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="px-2 text-xs text-[#86868B]">F&B Waste Prevention v1.0</div>
    </aside>
  );
};



