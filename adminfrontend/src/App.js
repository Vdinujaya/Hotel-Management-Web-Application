import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import AddEmployee from "./components/AddEmployee"
import AddRoom from "./components/AddRoom"
import AddSupplier from "./components/AddSupplier";
import AddEvent from "./components/AddEvents";
import AddInventory from "./components/AddInventory";
import ShowCustomer from "./components/ShowCustomer";
import ShowRoom from "./components/ShowRoom";
import ShowEmployee from "./components/ShowEmployee";
import ShowInventory from "./components/ShowInventory";
import ShowSupplier from "./components/ShowSupplier";
import ShowEvent from "./components/ShowEvent";
import DashBoard from "./components/DashBoard";
import './css/styles.css'
import Navbar from "./layouts/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";
import UpdateCustomer from "./components/UpdateCustomer";
import UpdateEvent from "./components/UpdateEvent";
import UpdateInventory from "./components/UpdateInventory";
import UpdateRoom from "./components/UpdateRoom";
import UpdateSupplier from "./components/UpdateSupplier";
import NavBar from "./components/NavBar";
import ShowBooking from "./components/ShowBooking";
import ShowContact from "./components/ShowContact";
import ShowFeedback from "./components/ShowFeedback";
import AddBooking from "./components/AddBooking";
import AddFeedback from "./components/AddFeedback";
import AddContact from "./components/AddContact";
import UpdateBooking from "./components/UpdateBooking";
import UpdateContact from "./components/UpdateContact";
import UpdateFeedback from "./components/UpdateFeedback";
import Overview from "./components/Overview";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">

        <Routes>
          <Route
            path="/DB"
            element={< DashBoard />}
          />
          <Route
            path="/AC"
            element={< AddCustomer />}
          />
          <Route
            path="/AE"
            element={< AddEmployee />}
          />
          <Route
            path="/AR"
            element={< AddRoom />}
          />
          <Route
            path="/AS"
            element={< AddSupplier />}
          />
          <Route
            path="/AEE"
            element={< AddEvent />}
          />
          <Route
            path="/AI"
            element={< AddInventory />}
          />
          <Route
            path="/AB"
            element={< AddBooking />}
          />
          <Route
            path="/AF"
            element={< AddFeedback />}
          />
          <Route
            path="/ACUS"
            element={< AddContact />}
          />
          <Route
            path="/"
            element={< ShowCustomer />}
          />
          <Route
            path="/SR"
            element={< ShowRoom />}
          />
          <Route
            path="/SE"
            element={< ShowEmployee />}
          />
          <Route
            path="/SI"
            element={< ShowInventory />}
          />
          <Route
            path="/SS"
            element={< ShowSupplier />}
          />
          <Route
            path="/SEE"
            element={< ShowEvent />}
          />
          <Route
            path="/SB"
            element={< ShowBooking />}
          />
          <Route
            path="/SCU"
            element={< ShowContact />}
          />
          <Route
            path="/SF"
            element={< ShowFeedback />}
          />
          <Route
            path="/updateEM/:id"
            element={< UpdateEmployee />}
          />
          <Route
            path="/updateCUS/:id"
            element={< UpdateCustomer />}
          />
          <Route
            path="/updateEvent/:id"
            element={< UpdateEvent />}
          />
          <Route
            path="/updateInventory/:id"
            element={< UpdateInventory />}
          />
          <Route
            path="/updateRoom/:id"
            element={< UpdateRoom />}
          />
          <Route
            path="/updateSupplier/:id"
            element={< UpdateSupplier />}
          />
          <Route
            path="/updateBooking/:id"
            element={< UpdateBooking />}
          />
          <Route
            path="/updateContact/:id"
            element={< UpdateContact />}
          />
          <Route
            path="/updateFeedback/:id"
            element={< UpdateFeedback />}
          />
          <Route
            path="/overview"
            element={< Overview />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
