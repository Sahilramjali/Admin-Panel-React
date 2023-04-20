import { ColorModeContext, useMode } from "./theme";
import{Routes,Route, Outlet} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./screens/layout/Topbar";
import DashBoard from "./screens/dashboard";
import SideBar from "./screens/layout/Sidebar";
import Team from "./screens/team";
import NotFound from "./screens/components/NotFound";
import Contacts from './screens/contacts';
import Invoice from "./screens/invoices";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path='/' element={<DashBoard/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/invoices' element={<Invoice/>}/>
              {/* <Route path='/form' element={<Form/>}/> */}
              {/* <Route path='/bar' element={<Bar/>}/> */}
              {/* <Route path='/pie' element={<Pie/>}/> */}
              {/* <Route path='/line' element={<Line/>}/> */}
              {/* <Route path='/faq' element={<Faq/>}/>  */}
              {/* <Route path='/geography' element={<Geography/>}/> */}
                  {/* <Route path='/calendar' element={<Calendar/>}/> */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
