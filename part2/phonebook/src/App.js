import React, { useState, useEffect } from "react";
import People from "./components/People";
import Form from "./components/Form";
import Search from "./components/Search";
import Services from "./components/Services";
import Alert from "./components/Alert";
import "./index.css";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [whoToShow, setWhoToShow] = useState("");
  const [alert, setAlert] = useState(null);
  const [alertType, setAlertType] = useState("added");

  const hook = () => {
    Services.getData().then((res) => {
      setPersons(res.data);
    });
  };
  useEffect(hook, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newName || !newNumber) {
      alert("Please enter name and number ");
      return;
    }

    const addPerson = {
      name: newName,
      number: newNumber,
    };

    const clearField = () => {
      setNewName("");
      setNewNumber("");
    };

    const notify = (id, err) => {
      const placeholder =
        id && err
          ? `Information about ${newName} was already deleted from the server`
          : id
          ? `Updated ${newName}`
          : `Added ${newName}`;
      setAlert(`${placeholder}`);
      setTimeout(() => setAlert(null), 5000);
    };

    const name = persons.map((person) => person.name);

    if (name.includes(newName)) {
      const updateNumber = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );
      if (updateNumber) {
        const person = persons.find((person) => person.name === newName);

        const id = person.id;

        const updatedPerson = { ...person, number: newNumber };

        Services.updateData(id, updatedPerson)
          .then(() => {
            Services.getData().then((res) => {
              notify(id);
              setAlertType("updated");
              clearField();
              setPersons(res.data);
            });
          })
          .catch((err) => {
            notify(id, err);
            setAlertType("nonExist");
            clearField();
            setPersons(persons.filter((person) => person.name !== newName));
          });
      }
    } else {
      Services.addData(addPerson).then((res) => {
        notify();
        setAlertType("added");
        clearField();
        setPersons(persons.concat(res.data));
        console.log(addPerson);
      });
    }
  };

  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(whoToShow.toLowerCase())
  );

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const onSearch = (e) => {
    setWhoToShow(e.target.value);
  };

  const validate = (name) => {
    const placeholder = !name ? "delete all" : `delete ${name}`;
    return window.confirm(`Are you sure you want to ${placeholder}?`);
  };
  const deletePerson = (user) => {
    if (validate(user.name)) {
      Services.deletePerson(user.id).then(() => {
        const newList = persons.filter((person) => person !== user);
        setPersons(newList);
      });
    }
  };

  const deleteAll = () => {
    if (validate()) {
      persons.map((person) =>
        Services.deletePerson(person.id).then(() => setPersons([]))
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Alert alertType={alertType} message={alert} />
      <Search onSearch={onSearch} />
      <h2>Add a new name</h2>
      <Form
        handleSubmit={handleSubmit}
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <People
        deleteAll={deleteAll}
        deletePerson={deletePerson}
        people={filtered}
      />
      {filtered.length > 0 ? (
        <button onClick={deleteAll}>Delete all</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
