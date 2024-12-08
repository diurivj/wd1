import { useState, type ChangeEvent, type MouseEvent } from "react";

type AppProps = {
  message: string;
};

export function App({ message }: AppProps) {
  const [name, setName] = useState("");
  const [apiResponse, setApiResponse] = useState();

  const onClick = async () => {
    const response = await fetch(
      `https://wd1-todos-api.diurivj.workers.dev/api/diego/todos`,
      {
        method: "post",
        body: JSON.stringify({ todo: name }),
      },
    );
    const data = await response.json();
    setName("");
    setApiResponse(data.todo.todo);
  };

  const onMouseMove = (e: MouseEvent<HTMLParagraphElement>) => {
    console.log(e);
    console.log("Mouse is moviiiiinggg!");
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <p onMouseMove={onMouseMove} style={{ display: "inline" }}>
        {message}
      </p>
      {apiResponse ? <h3>todo: {apiResponse} ha sido guardado!</h3> : null}
      <input type="text" value={name} onChange={onChange} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
