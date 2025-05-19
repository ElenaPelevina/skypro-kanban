import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopExit from './components/popexit/popExit'
import PopNewCard from './components/popnewcard/popnewcard'
import PopBrowse from './components/popbrowse/popbrowse'
import Header from './components/header/header'
import MainContent from './components/maincontent/maincontent'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="wrapper">
		
			<PopExit /> 

			<PopNewCard />

			<PopBrowse /> 
	

		<Header /> 

		<MainContent /> 
		
    </div>

    <script src="js/script.js"></script>
</>
  )
}

export default App
