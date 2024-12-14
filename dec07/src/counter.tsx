import { useEffect, useMemo, useRef, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const name = "diego";
  const title = useMemo(() => name + "Vive sin drogas", [name]);

  const ref = useRef<HTMLHeadingElement>(null);

  // No usar nunca useEffect, debe de ser nuestro ultimo recurso siempre!
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    if (count === 10) {
      if (ref.current) {
        ref.current.innerText = "holaaa";
      }
    }
  }, [count]);

  console.log(ref.current);

  // No bueno!!
  //useEffect(() => {
  //  async function fetchTodos() {
  //    const response = await fetch(
  //      "https://wd1-todos-api.diurivj.workers.dev/api/diego/todos",
  //    );
  //    const data = await response.json();
  //    setIsLoading(false);
  //    setTodos(data.todos);
  //  }
  //
  //  fetchTodos();
  //}, []);

  return (
    <>
      <h2 ref={ref}>{title}</h2>
      <p onClick={() => setCount(count + 1)}>{count}</p>
    </>
  );
}
