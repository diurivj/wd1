const root = document.getElementById("root");

const users = [
  { id: 1, name: "Diego", bio: "Viva mexico weyy" },
  { id: 2, name: "Mike", bio: "Que show" },
  { id: 3, name: "Humberto", bio: "Hola" },
  { id: 4, name: "Esme", bio: "Hola" },
  { id: 5, name: "Diana", bio: "Hola" },
  { id: 6, name: "Andres", bio: "Hola" },
];

function generateCard(user) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  div.id = user.id;
  div.className = "border rounded-lg flex flex-col gap-y-2";
  h4.innerText = user.name;
  h4.className = "font-medium text-xl";
  p.innerText = user.bio;
  p.className = "text-lg";

  div.appendChild(h4);
  div.appendChild(p);
  root.appendChild(div);
}

users.map((user) => generateCard(user));

users.push({
  id: 7,
  name: "Ulises",
  bio: "asdashdas",
});

generateCard(users[users.length - 1]);

// JSX
function Card(user) {
  return (
    <div id={user.id}>
      <h4 className="">{user.name}</h4>
      <p>{user.bio}</p>
    </div>
  );
}
