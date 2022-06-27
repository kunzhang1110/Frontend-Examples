import "./App.css";

export interface Product<T> {
  id: number;
  name: string;
  type?: T;
}

export interface User {
  id: number;
  name: string;
  roles?: string[];
  basket: Product<string>[];
}

const users: Array<User> = [];
const usersMap: Map<number, User> = new Map();

function findUserById(id: User["id"]): User | undefined {
  return users.find((user) => user.id == id);
}

function App() {
  return <div></div>;
}

export default App;
