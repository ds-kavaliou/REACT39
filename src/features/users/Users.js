import { Card } from "./components";

import data from "./data.json";

export default function Users() {
  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>
          <Card user={user} />
        </li>
      ))}
    </ul>
  );
}
