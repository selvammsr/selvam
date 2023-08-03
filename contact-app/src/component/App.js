import React, {useState,useEffect} from 'react'
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
 const [contacts, setContacts] = useState([]);
 
 const addContactHandler = (contact) =>{
   console.log(contact);
   setContacts([...contacts, {id:Math.random() , ...contact } ]);
 };

 const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !==id;
  });

  setContacts(newContactList);

 }
 useEffect(()=>{
 const retriveContact = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
 if(retriveContact) setContacts(retriveContact);
 },[]);


 useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 },[contacts]);
  return (
    <div className="ui container" >
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contact={contacts} getContactId={removeContactHandler} /> 
    </div>
  );
}

export default App;
