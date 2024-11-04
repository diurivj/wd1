import type { User } from "../types/user";

const created_at = new Date();
const users: User[] = [
  {
    id: 1,
    name: "Diego",
    lastname: "Vazquez",
    age: 28,
    created_at,
  },
  {
    id: 2,
    name: "Mike",
    lastname: "Gonzalez",
    age: 27,
    created_at,
  },
];

async function getUsers(): Promise<User[] | Error> {
  const random = Math.round(Math.random());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random) {
        return resolve(users);
      }
      return reject("Something went wrong");
    }, 2000);
  });
}

const response = await getUsers();

type State =
  | {
      status: "loading";
    }
  | {
      status: "error";
      error: string;
    }
  | {
      status: "success";
      data: string;
    };

const renderUI = (state: State) => {
  if (state.status === "loading") {
    return "Loading...";
  }

  if (state.status === "error") {
    return `Error: ${state.error.toUpperCase()}`;
  }

  if (state.status === "success") {
    return `Data: ${state.data}`;
  }
};

renderUI({ status: "loading" });
