import { GlobalStyles } from "../globalstyles"
import { SWrapper } from "../globalstyles"
import PopExit from "../components/popexit/popExit"
import PopNewCard from "../components/popnewcard/popnewcard"
import PopBrowse from "../components/popbrowse/popbrowse"
import Header from "../components/header/header"
import MainContent from "../components/maincontent/maincontent"

const MainPage = ({loading}) => {
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

export default MainPage;