import React, { useRef } from 'react'
import PropTypes from "prop-types";
import { Contact } from '../../../models/contact.class';
import '../../../styles/contactForm.scss';

const ContactForm = ({add, contactUpdate, updating}) => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const avatarRef = useRef("");
    let classNameButton = '';

    if (contactUpdate.name) {
        nameRef.current.value = contactUpdate.name
        emailRef.current.value = contactUpdate.email
        phoneRef.current.value = contactUpdate.phone
        avatarRef.current.value = contactUpdate.avatar
        classNameButton = 'btn-primary';
    } else {
        classNameButton = 'btn-success';
    }


    function addOrUpdateContact(e){
        e.preventDefault();

        if (contactUpdate.name) {
            updating({
                ...contactUpdate,
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                avatar: avatarRef.current.value
            })
        } else {
            const newContact = new Contact(
                nameRef.current.value,
                emailRef.current.value,
                phoneRef.current.value,
                avatarRef.current.value,
                false
            )
            add(newContact);
        }

        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        avatarRef.current.value = '';
    }

  return (
    <form onSubmit={addOrUpdateContact} className="task-form mb-4 contact-form">
      <div className="form-outline flex-fill">
        <input
          type="text"
          ref={nameRef}
          id="inputName"
          className="form-control form-control-lg"
          placeholder="Name"
          required
          autoFocus
        />
        <input
          type="email"
          ref={emailRef}
          id="inputEmail"
          placeholder="Email"
          className="form-control form-control-lg"
          required
        />
        <input
          type="text"
          ref={phoneRef}
          id="inputPhone"
          placeholder="Phone"
          className="form-control form-control-lg"
          required
        />
        <input
          type="text"
          ref={avatarRef}
          id="inputAvatar"
          placeholder="URL Avatar"
          className="form-control form-control-lg"
          required
        />
        
      </div>
      <button className={`btn ${classNameButton} btn-lg`} type="submit">
        {contactUpdate.name? 'Update': 'Add'}
      </button>
    </form>
  )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
    contactUpdate: PropTypes.instanceOf(Contact), 
    updating : PropTypes.func.isRequired
}

export default ContactForm;