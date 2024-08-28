import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ( {contact, addContact } ) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  /*
  Define state variables for 
  contact info and duplicate check
  */


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate) {
    addContact(name, phone, email)
    setName("");
    setPhone("");
    setEmail("");
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contact.includes((n) => n === name)) {
      setIsDuplicate(true);
      alert("The name is duplicate");
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name} setName={setName}
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail}
        onSubmit={handleSubmit} 
        />  
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contact={contact} /> 
      </section>
    </div>
  );
};
