// src/components/ui/Modal.jsx
export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md p-4">
      <div className="bg-white rounded-[20px] border border-black/[0.05] shadow-2xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold text-[#1D1D1F] tracking-tight">{title}</h3>
          <button onClick={onClose} className="text-[#86868B] hover:text-[#1D1D1F] p-1.5 rounded-full hover:bg-[#F5F5F7] transition-colors">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};