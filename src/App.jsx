// src/App.jsx
import { useState } from 'react'
import { AppLayout } from './components/layout/AppLayout'
import { Login } from './components/pages/Login'
import { Dashboard } from './components/pages/Dashboard'
import { DailyLog } from './components/pages/DailyLog'
import { MenuManager } from './components/pages/MenuManager'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  // Map active tab IDs to user-friendly section headers
  const pageTitles = {
    dashboard: 'Analytics Dashboard',
    dailylog: 'Daily Operational Log',
    menu: 'Menu Management',
  }

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <AppLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      title={pageTitles[activeTab]}
    >
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'dailylog' && <DailyLog />}
      {activeTab === 'menu' && <MenuManager />}
    </AppLayout>
  )
}