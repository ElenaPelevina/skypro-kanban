import { GlobalStyles } from "../globalstyles"
import { SWrapper } from "../globalstyles"
import PopExit from "../components/popexit/popExit"
import PopNewCard from "../components/popnewcard/popnewcard"
import PopBrowse from "../components/popbrowse/popbrowse"
import Header from "../components/header/header"
import MainContent from "../components/maincontent/maincontent"
import { Outlet } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import { fetchTasks } from "../services/api"

const MainPage = () => {
   
return (
  <>
  <GlobalStyles/>
    <SWrapper>
		<Header /> 

		<MainContent /> 
		<Outlet />
    </SWrapper>

    <script src="js/script.js"></script>
</>
  )
}

export default MainPage;