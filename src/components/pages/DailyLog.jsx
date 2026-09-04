// src/pages/DailyLog.jsx
import { useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const DailyLog = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // Static operational state rows
  const mockItems = [
    { id: 1, name: "Chicken Teriyaki Bento", price: "$12.50" },
    { id: 2, name: "Salmon Sashimi Plate", price: "$16.00" },
    { id: 3, name: "Green Tea Ice Cream", price: "$4.50" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <p className="text-sm text-[#86868B]">Record daily operational output and remaining stock.</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-white border border-black/[0.05] rounded-[20px] px-4 py-2 text-sm text-[#1D1D1F] outline-none shadow-sm"
          />
          <Button>Save Log Entry</Button>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/[0.05] bg-[#F5F5F7]/50 text-xs font-semibold text-[#86868B]">
              <th className="py-4 px-6">Menu Item</th>
              <th className="py-4 px-6 w-36">Qty Prepared</th>
              <th className="py-4 px-6 w-36">Qty Sold</th>
              <th className="py-4 px-6 w-36">Qty Leftover</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.03] text-sm">
            {mockItems.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-6 font-medium text-[#1D1D1F]">{item.name}</td>
                <td className="py-3 px-6">
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-full bg-[#F5F5F7] rounded-[12px] px-3 py-1.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-[#0071E3]"
                  />
                </td>
                <td className="py-3 px-6">
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-full bg-[#F5F5F7] rounded-[12px] px-3 py-1.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-[#0071E3]"
                  />
                </td>
                <td className="py-3 px-6">
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-full bg-[#F5F5F7] rounded-[12px] px-3 py-1.5 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-[#0071E3]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};