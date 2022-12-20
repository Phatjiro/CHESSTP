import './App.css';

// import from components
import SidebarNavigation from './components/SidebarNavigation';
import PlayContent from './components/PlayContent';

function App() {
  return (
    <div className='grid md:grid-cols-11'>
      <SidebarNavigation />
      <main className='px-40 md:col-span-10 bg-bg-web'>
        <PlayContent />
        <PlayContent />
      </main>
    </div>
  )
}

export default App
