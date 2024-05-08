import Users from "./features/users/Users";
import Form from "./Form";

export default function App() {
  return (
    <main>
      <div className="container">
        <Form />
        <Users />
      </div>
    </main>
  );
}
