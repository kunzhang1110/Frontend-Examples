import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";

const initNames = ["Alice", "Bob", "Curry"];

const initPerson = {
  id: 1,
  name: "Alice",
  age: 20,
};

const initPersonList = [
  {
    id: 1,
    name: "Alice",
    age: 20,
  },
  {
    id: 2,
    name: "Bob",
    age: 50,
  },
];

export const StateCrudExp = () => {
  const [names, setNames] = useState(initNames);
  const [person, setPerson] = useState(initPerson);
  const [personList, setPersonList] = useState(initPersonList);

  const addNames = (index = 1) => {
    // add item at index
    setNames([...names.slice(0, index), "Charlie", ...names.slice(index)]);
  };
  const updateNames = (index = 1) => {
    // update item at index
    const newNames = [...names];
    newNames[index] = "Zeno";
    setNames(newNames);
  };
  const deleteNames = (index = 1) => {
    // delete item at index
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const addPropertyToPerson = (propertyName = "location") => {
    // add property
    setPerson({ ...person, [propertyName]: "AU" });
  };
  const updatePropertyInPerson = (propertyName = "age") => {
    // update property
    setPerson({
      ...person,
      [propertyName]: 30,
    });
  };

  const deletePropertyInPerson = (propertyName = "age") => {
    //delete property
    const { [propertyName]: deleted, ...updatedState } = person;
    setPerson(updatedState);
    console.log(deleted);
  };

  const findPersonByName = (name = "Alice") => {
    // find by obj property
    const result = personList.find((p) => p.name == name);
    console.log(result);
    return result;
  };

  const updatePersonInListById = (
    id = 1,
    updatedData = {
      age: 30,
    }
  ) => {
    // update by id
    const updatedState = personList.map((p) => {
      if (p.id === id) {
        return { ...p, ...updatedData };
      }
      return p;
    });
    setPersonList(updatedState);
  };

  const deletePersonInListById = (id = 1) => {
    // delete by id
    const updatedState = personList.filter((p) => p.id !== id);
    console.log(updatedState);
    setPersonList(updatedState);
  };

  return (
    <div className="text-center w-50">
      <h1>CRUD Simple Array</h1>
      <Card className="mt-2 align-items-center">
        <CardBody className="d-flex flex-column">
          <Button className="m-2" onClick={() => addNames()}>
            Add
          </Button>
          <Button className="m-2" onClick={() => updateNames()}>
            Update
          </Button>
          <Button className="m-2" onClick={() => deleteNames()}>
            Delete
          </Button>
          <Button className="m-2" onClick={() => setNames(initNames)}>
            Reset
          </Button>
        </CardBody>
        <div className="m-2"> {names.join(", ")}</div>
      </Card>
      <Card className="mt-2 align-items-center">
        <CardBody className="d-flex flex-column">
          <Button className="m-2" onClick={() => addPropertyToPerson()}>
            Add
          </Button>
          <Button className="m-2" onClick={() => updatePropertyInPerson()}>
            Update
          </Button>
          <Button className="m-2" onClick={() => deletePropertyInPerson()}>
            Delete
          </Button>
          <Button className="m-2" onClick={() => setPerson(initPerson)}>
            Reset
          </Button>
        </CardBody>
        <div className="m-2"> {JSON.stringify(person)}</div>
      </Card>
      <Card className="mt-2 align-items-center">
        <CardBody className="d-flex flex-column">
          <Button className="m-2" onClick={() => findPersonByName()}>
            Find
          </Button>
          <Button className="m-2" onClick={() => updatePersonInListById()}>
            Update
          </Button>
          <Button className="m-2" onClick={() => deletePersonInListById()}>
            Delete
          </Button>
          <Button className="m-2" onClick={() => setPersonList(initPersonList)}>
            Reset
          </Button>
        </CardBody>
        <div className="m-2"> {JSON.stringify(personList)}</div>
      </Card>
    </div>
  );
};
