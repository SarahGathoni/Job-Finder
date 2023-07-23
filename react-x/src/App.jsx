import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/contact'

function App() {
  
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Contact/>
      <Work />
    </div>
  )
}

export default App
