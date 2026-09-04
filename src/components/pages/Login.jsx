// src/pages/Login.jsx
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const Login = ({ onLogin }) => (
  <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-4 font-[-apple-system]">
    <Card className="w-full max-w-sm p-8 flex flex-col gap-6 text-center">
      <div>
        <div className="w-12 h-12 rounded-[16px] bg-[#0071E3] flex items-center justify-center text-white text-2xl mx-auto mb-3">🍃</div>
        <h2 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">EcoBite F&B</h2>
        <p className="text-sm text-[#86868B] mt-1">Sign in to access operational analytics</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="flex flex-col gap-4 text-left">
        <Input label="Email" type="email" placeholder="manager@restaurant.com" required />
        <Input label="Password" type="password" placeholder="••••••••" required />
        <Button type="submit" className="w-full mt-2 py-3">Sign In</Button>
      </form>
    </Card>
  </div>
);