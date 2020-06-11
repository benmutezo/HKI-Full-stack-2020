import React from "react";

const People = ({ people, deletePerson }) => {
  return people.length === 0 ? (
    <p>no contacts</p>
  ) : (
    people.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}{" "}
        <button onClick={() => deletePerson(person)}>delete</button>{" "}
      </p>
    ))
  );
};
export default People;
