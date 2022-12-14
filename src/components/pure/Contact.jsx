import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import "../../styles/contact.scss";

const ContactComponent = ({ contact, remove, update, changeStatus }) => {
  function userStatusIcon() {
    if (contact.connect) {
      return (
        <i
          className="bi-toggle-on task-action text-primary"
          onClick={() => changeStatus(contact)}
        ></i>
      );
    } else {
      return (
        <i
          className="bi-toggle-off task-action"
          onClick={() => changeStatus(contact)}
        ></i>
      );
    }
  }

  return (
    <tr>
      <th className="aling-middle contact-name d-flex justify-content-star align-items-center">
        <img src={contact.avatar} alt={contact.name} />
        <span>{contact.name}</span>
      </th>
      <td className="aling-middle">{contact.email}</td>
      <td className="aling-middle">{contact.phone}</td>
      <td className="aling-middle">
        {contact.connect ? "Connected" : "Disconnected"}
      </td>
      <td className="aling-middle contactList-actions">
        <i className="bi bi-pencil text-warning" onClick={() => update(contact)}></i>
        {userStatusIcon()}
        <i className="bi-trash task-action text-danger" onClick={() => remove(contact)}></i>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComponent;
