import networking from "../services/networking";

const PersonForm = (props) => {
  const {
    persons,
    setMessage,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    filter,
  } = props;

  

  const onChangeName = (event) => {
    setNewName(event.target.value);
  };
  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  console.log('persons in form: ', persons)
  
  const onSubmitPerson = (event) => {
    event.preventDefault();
   
    let newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const duplicateCheck = persons.find((e) => e.name === newPerson.name);
    console.log('newPerson: ', newPerson)
    console.log('duplicate: ', duplicateCheck)
    if (duplicateCheck != undefined) {
      let popup = window.confirm(
        `${newName} is already in the phonebook, replace the old number with a new one?`
      );
      if (popup) {
        const updatedPerson = { ...duplicateCheck, number: newPerson.number };
        networking.update(updatedPerson).then((res) => {
          console.log("PERSON UPDATED: ", res);
          
        });
        
     }
    } else {

        networking
          .create(newPerson)
          .then((res) => {
            console.log("POSTED: ", res);
          })
          .then( () => {
            setMessage(`${newPerson.name} is added to the server`)
            setTimeout(() => {
              setMessage(null)
            }, 5000) 
          
            }
            )
          .catch((e) => ("create error: ", e));
      
    }
    setNewName("");
    setNewNumber("");
  };

  const chosen = [];
  persons.forEach((e) => {
    if (e.name.toLowerCase().includes(filter) === true) {
      chosen.push(e);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmitPerson}>
        <div>
          name: <input value={newName} onChange={onChangeName} />
        </div>
        <div>
          phonenumber: <input value={newNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
