import { useState, useReducer } from "react";
import "./UseReducer2.css";

const initialState = [
  { id: Date.now(), name: "Sudhanshu", email: "Sudhanshu@gmail.com" }
];

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Delete":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      throw new Error();
  }
};
const UseReducer2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  const addContact = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Name can not be empty");
      return;
    }
    if (email === "") {
      alert("email can not be empty");
      return;
    }
    const contact = {
      id: Date.now(),
      name,
      email
    };
    setName("");
    setEmail("");
    dispatch({ type: "Add", payload: contact });
  };

  return (
    <>
      <h2>UseReducer 2</h2>
      <form onSubmit={addContact}>
        <div>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add Contact</button>
      </form>
      <hr style={{ width: "50%" }} />
      <ul>
        {state.length !== 0 &&
          state.map((contact) => {
            return (
              <div className="contact_details_body">
                <li key={contact.id}>{contact.name}</li>
                <li key={contact.id}>{contact.email}</li>
                <button
                  onClick={() =>
                    dispatch({ type: "Delete", payload: { id: contact.id } })
                  }
                >
                  Delete
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
};
export default UseReducer2;
