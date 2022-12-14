import React, { useState, useEffect } from "react";
import ContactList from "../components/container/ContactList";
import ContactForm from "../components/pure/forms/ContactForm";
import { Contact } from "../models/contact.class";
import "../styles/home.scss";

const Home = () => {
  const initialContact = new Contact(
    "Cristian Garzon",
    "cg@gmail.com",
    "321321321",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0w7_KUeXej0ywVHhMs9s_6ACxPfACE3xwg&usqp=CAU",
    true
  );
  const initialContact2 = new Contact(
    "Daniel Pineda",
    "danielaPineda@gmail.com",
    "321321321",
    "data:image/jpeg;base64,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",
    true
  );

  const [contacts, setContacts] = useState([initialContact, initialContact2]);
  const [contactSelected, setContactSelected] = useState({});

  useEffect(() => {
    console.log("modified");
    return () => {
      console.log("unmount");
    };
  }, [contacts]);

  function add(contact) {
    const contactsProv = [...contacts];
    contactsProv.push(contact);

    setContacts(contactsProv);
  }

  function update(contact) {
    setContactSelected(contact);
  }

  function updating(contact) {
    const index = contacts.indexOf(contactSelected);
    const contactsProv = [...contacts];
    contactsProv[index].name = contact.name;
    contactsProv[index].email = contact.email;
    contactsProv[index].phone = contact.phone;
    contactsProv[index].avatar = contact.avatar;
    contactsProv[index].connect = contact.connect;

    setContacts(contactsProv);
    setContactSelected({});
  }

  function remove(contact) {
    const index = contacts.indexOf(contact);
    const contactsProv = [...contacts];
    contactsProv.splice(index, 1);
    setContacts(contactsProv);
  }

  function changeStatus(contact) {
    const index = contacts.indexOf(contact);
    const contactsProv = [...contacts];
    contactsProv[index].connect = !contactsProv[index].connect;
    setContacts(contactsProv);
  }

  return (
    <div className="container text-center p-5 home">
      <h1>Contact List</h1>
      <ContactForm
        add={add}
        updating={updating}
        contactUpdate={contactSelected}
      ></ContactForm>

      <ContactList
        contacts={contacts}
        remove={remove}
        update={update}
        changeStatus={changeStatus}
      ></ContactList>
    </div>
  );
};

export default Home;
