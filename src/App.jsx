import './App.css'
import ComponentWithData from './components/ComponentWithData'
import ComponentWithError from './components/ComponentWithError'
import ComponentWithLoading from './components/ComponentWithLoading'

function App() {

  return (
    <div className='app-container'>
      <ComponentWithData />
      <ComponentWithError />
      <ComponentWithLoading />
    </div>
  )
}

export default App
