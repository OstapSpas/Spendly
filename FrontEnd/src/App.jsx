import './styles/App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Statistic from './components/Statistic'
import Step from './components/Step'
import Footer from './components/Footer'

function App() {

  return (
    <div className="container">
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <Header />
      <Statistic />
      <Step />
      <Footer />
    </div>

  )
}

export default App
