import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './components/Index'
import Notfound from './components/Notfoundpage'
import Screencast from './components/screencast/Screencast';
import Chatsection from './components/App/Communication'
import HoursTrack from './components/reports/HoursTracked'
import Employee from "./components/projects/Employee";
import Ticketlist from "./components/projects/Ticketlist";
import TicketDetail from "./components/projects/TicketDetail";
import Attedance from "./components/reports/Attedance";
import Timeline from "./components/reports/Timeline";
import Employeelogs from "./components/reports/Employeelogs";
import Timesheet from "./components/projects/Timesheet";
import Calandar from "./components/App/Calandar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />

        {/* ================ NOT FOUND PAGE ============== */}
        <Route path="/" element={<Notfound />} />

        {/* ================ Screencast PAGE ============== */}
        <Route path="/screen" element={<Screencast />} />

        {/* ================ CHAT PAGE ============== */}
        <Route path="/chat" element={<Chatsection />} />
        <Route path="/calandar" element={<Calandar />} />

        {/* ================ REPORT PAGE ============== */}

        <Route path="/hourstrack" element={<HoursTrack />} />
        <Route path="/attendance" element={<Attedance/>} />
        <Route path="/timeline" element={<Timeline/>} />
        <Route path="/employee_logs" element={<Employeelogs/>} />


         {/* ================ PROJECT ============== */}
         <Route path="/employee" element={<Employee/>} />
         <Route path="/ticketlist" element={<Ticketlist/>} />
         <Route path="/ticketdetail" element={<TicketDetail/>} />
         <Route path="/timesheet" element={<Timesheet/>} />
        
      

      </Routes>
    </BrowserRouter>
  )
}

export default App;
