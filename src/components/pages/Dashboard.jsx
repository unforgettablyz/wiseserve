// src/pages/Dashboard.jsx
import { Card } from "../ui/Card";

export const Dashboard = () => {
  // Static placeholder metrics for presentation
  const mockMetrics = [
    { label: "Weekly Revenue", value: "$12,450", change: "+4.2%" },
    { label: "Food Prepared", value: "1,240 units", change: "This Week" },
    { label: "Food Wasted", value: "112 units", change: "-1.8% vs last week" },
    { label: "Waste Value", value: "$420.00", change: "3.3% of revenue" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockMetrics.map((m, idx) => (
          <Card key={idx} className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-[#86868B] tracking-tight">{m.label}</span>
            <span className="text-2xl font-bold text-[#1D1D1F] tracking-tight">{m.value}</span>
            <span className="text-xs text-[#0071E3] font-medium mt-1">{m.change}</span>
          </Card>
        ))}
      </div>

      {/* Analytics Visual Containers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[#1D1D1F] tracking-tight">Daily Sales vs. Waste Volume</h3>
            <span className="text-xs text-[#86868B]">Mon - Sun</span>
          </div>
          <div className="h-64 bg-[#F5F5F7] rounded-[20px] flex items-center justify-center text-[#86868B] text-sm font-medium border border-dashed border-black/[0.08]">
            [ Sales & Waste Bar Chart Component Ready ]
          </div>
        </Card>

        <Card className="flex flex-col gap-4">
          <h3 className="font-semibold text-[#1D1D1F] tracking-tight">Top Wasted Items</h3>
          <div className="flex flex-col gap-3">
            {[
              { name: "Chicken Teriyaki Bento", qty: "34 units", loss: "$170" },
              { name: "Salmon Sashimi Plate", qty: "18 units", loss: "$144" },
              { name: "Miso Soup Portion", qty: "42 units", loss: "$42" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-[#F5F5F7] rounded-[16px]">
                <div>
                  <p className="text-sm font-medium text-[#1D1D1F]">{item.name}</p>
                  <p className="text-xs text-[#86868B]">{item.qty} leftover</p>
                </div>
                <span className="text-sm font-semibold text-red-500">-{item.loss}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};