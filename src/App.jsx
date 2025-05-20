import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopExit from './components/popexit/popExit'
import PopNewCard from './components/popnewcard/popnewcard'
import PopBrowse from './components/popbrowse/popbrowse'
import Header from './components/header/header'
import MainContent from './components/maincontent/maincontent'
import { GlobalStyles, SWrapper } from './globalstyles'


function App() {
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 3000)
 }, [])

  return (
  <>
  <GlobalStyles/>
    <SWrapper>
		
			<PopExit /> 

			<PopNewCard />

			<PopBrowse /> 
	

		<Header /> 

		<MainContent loading = {loading}/> 
		
    </SWrapper>

    <script src="js/script.js"></script>
</>
  )
}

export default App
