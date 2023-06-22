// import './App.css';
import '../src/assets/css/style.css'

import { Dashboard } from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { NewLeads } from './components/NewLeads/NewLeads';
import { SideNav } from './components/SideBar/SideNav';
import SideBar from './components/SideBar/SideBar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Renewal } from './components/Renewal/Renewal';
import { Expired } from './components/Expired/Expired';
import FormExample from './components/FormCheck';
import { AddNewLeadForm } from './components/NewLeads/AddNewLeads/AddNewLeadForm';
import { QuotationSummary } from './components/NewLeads/AddNewLeads/QuotationSummary';
import { Catalogue } from './components/ProductCatalogue/Catalogue';
import { ViewProduct1 } from './components/ProductCatalogue/ViewProduct1';
import { PersonalDetails } from './components/NewLeads/AddNewLeads/PersonalDetails';
import BasicTabs from './components/NoMatch';

library.add(fab, faCheckSquare, faCoffee);

function App() {

  return (
    <div>

      {/* <FormExample /> */}

     <Header />
     {/* <SideNav /> */}
     <SideBar />

     {/* <Dashboard /> */}
    {/* <NewApplicants /> */}

      <div>
          <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route path='Header' element={<Header />} />
              <Route path='SideNav' element={<SideNav />} />
              <Route path='Dashboard' element={<Dashboard />} />
              <Route path='NewLeads' element={<NewLeads />} />
              <Route path='Renewal' element={<Renewal />} />
              <Route path='Expired' element={<Expired />} />
              <Route path='AddNewLeadForm' element={<AddNewLeadForm />} />
              <Route path='QuotationSummary' element={<QuotationSummary />} />
              <Route path='Catalogue' element={<Catalogue />} />
              <Route path='CGProtectProduct' element={<ViewProduct1 />} />
          </Routes>
      </div>

      {/* <BasicTabs /> */}
      
    </div>
  );
}

export default App;

























 {/* <Route path='find-by-name/:name' element={<FindByName />} />
          <Route path='find-by-country/:country' element={<FindByCountry />}/>
          <Route path='find-by-gt-runs/:runs' element={<FindByRuns />}/>

          <Route path='update-player/:id' element={<UpdatePlayer />} />
          <Route path='show-player/:id' element={<ShowPlayerDetail />} /> */}
          
          {/* <Route path = '*' element={<NoMatch />}/>  */}