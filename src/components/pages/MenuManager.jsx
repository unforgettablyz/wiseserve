// src/pages/MenuManager.jsx
import { useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../ui/Modal";

export const MenuManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Presentational static list
  const mockMenu = [
    { id: 1, name: "Chicken Teriyaki Bento", category: "Mains", price: "$12.50" },
    { id: 2, name: "Salmon Sashimi Plate", category: "Appetizers", price: "$16.00" },
    { id: 3, name: "Green Tea Ice Cream", category: "Dessert", price: "$4.50" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-[#86868B]">Manage active menu items and standard pricing.</p>
        <Button onClick={() => setIsModalOpen(true)}>+ Add New Item</Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/[0.05] bg-[#F5F5F7]/50 text-xs font-semibold text-[#86868B]">
              <th className="py-4 px-6">Item Name</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.03] text-sm">
            {mockMenu.map((item) => (
              <tr key={item.id} className="hover:bg-[#F5F5F7]/30 transition-colors">
                <td className="py-4 px-6 font-medium text-[#1D1D1F]">{item.name}</td>
                <td className="py-4 px-6 text-[#86868B]">{item.category}</td>
                <td className="py-4 px-6 font-semibold text-[#1D1D1F]">{item.price}</td>
                <td className="py-4 px-6 text-right">
                  <Button variant="secondary" className="px-3 py-1 text-xs">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Menu Item">
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <Input label="Item Name" placeholder="e.g. Wagyu Beef Bowl" required />
          <Input label="Category" placeholder="e.g. Mains" required />
          <Input label="Selling Price ($)" type="number" step="0.01" placeholder="15.00" required />
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="secondary" type="button" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit">Save Item</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};