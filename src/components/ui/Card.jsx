// src/components/ui/Card.jsx
export const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur-xl border border-black/[0.04] rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${className}`}>
    {children}
  </div>
);





