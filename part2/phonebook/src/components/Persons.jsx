import networking from "../services/networking";
import React from "react";

const Persons = (props) => {
  const { filter, persons, setStateUpdate, stateUpdate, setMessage } = props;
  const chosen = [];
  persons.forEach((e) => {
    if (e.name.toLowerCase().includes(filter) === true) {
      chosen.push(e);
    }
  });

  const deletePerson = (person) => {
    const popup = window.confirm('The person is already saved. Would you like to update number?');
    if(popup){
      networking
        .deletePerson(person.id)
        .then((res) => {
          console.log("delete resp: ", res);
          setStateUpdate(!stateUpdate);
        })
        .catch((e) => {
          if(e.message.includes('404') === true){
            setMessage(`Information of ${person.name} has already been removed from the server`)
            setTimeout(() => {
              setMessage(null)
            }, 5000) 
          }
         
          console.log(e)
        });
    }
      
      
    
  };

  return (
    <div>
      {chosen.map((e) => (
        <div key={e.id}>
          {e.name}: {e.number}{" "}
          <button onClick={() => deletePerson(e)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default Persons;
