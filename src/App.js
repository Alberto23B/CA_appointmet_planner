import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [appointments, setAppointments] = useState([])
 const [contacts, setContacts] = useState([])

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addAppointment = (name, contact, date, time) => {
  const newApp = {
    name: name,
    contact: contact,
    date: date,
    time: time
  }
  setAppointments((prev) => [...prev, newApp])
 };

 const addContact = (name, phone, email) => {
  const newContact = {
    name: name,
    phone: phone,
    email: email
  }
  setContacts((prev) => [...prev, newContact])
 }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ), {
    basename: "/CA_appointment_planner"
  });
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
