import React from "react";
import PropTypes from "prop-types";
import ContactComponent from "../pure/Contact";

const ContactList = ({ contacts, remove, update, changeStatus }) => {
  
  return (
    <div className="card">
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            {contacts.map((contact, index) => {
                return <ContactComponent key={index} contact={contact} remove={remove} update={update} changeStatus={changeStatus}></ContactComponent>;
            })}
        </tbody>
      </table>
    </div>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
    remove: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired
}

export default ContactList;
