import { KeyboardEvent, useState } from "react";

type Person = {
  id: number;
  name: string;
  state: "normal" | "marked" | "deleted";
};

export function App() {
  const [list, setList] = useState<Person[]>([
    { id: 1, name: "Diego", state: "marked" },
    { id: 2, name: "Lorena", state: "normal" },
  ]);

  function handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const person = e.currentTarget.value;
    if (e.key === "Enter") {
      e.currentTarget.value = "";
      setList((prevState) => {
        return [
          { id: list.length + 1, name: person, state: "normal" },
          ...prevState,
        ];
      });
    }
  }

  function handleOnClick(id: Person["id"]) {
    const personToBeModified = list.find((p) => p.id === id);
    if (!personToBeModified) return;

    if (personToBeModified.state === "normal") {
      setList((prevState) =>
        prevState.map((person) => {
          if (person.id === id) {
            person.state = "marked";
          }
          return person;
        }),
      );
      return;
    }

    setList((prevState) => prevState.filter((p) => p.id !== id));
  }

  return (
    <main>
      {list.map((person) => {
        return (
          <p
            key={person.id}
            style={{
              textDecoration:
                person.state === "marked" ? "line-through" : undefined,
            }}
            onClick={() => handleOnClick(person.id)}
          >
            {person.name}
          </p>
        );
      })}
      <div>
        <label htmlFor="person">Add person</label>
        <input id="person" type="text" onKeyDown={handleOnKeyDown} />
      </div>
    </main>
  );
}
