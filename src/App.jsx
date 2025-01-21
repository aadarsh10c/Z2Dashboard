import Header from './layout/Header'
import SideBar from './layout/SideBar'
import Dashboard from './layout/Dashboard'
function App() {
  return (
    <main className="h-screen">
      <Header />
      <SideBar/>      
      <Dashboard />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
