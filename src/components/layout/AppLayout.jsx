// src/components/layout/AppLayout.jsx
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const AppLayout = ({ children, activeTab, setActiveTab, title }) => (
  <div className="flex h-screen bg-[#F5F5F7] font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','SF_Pro_Text',sans-serif]">
    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header title={title} />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  </div>
);