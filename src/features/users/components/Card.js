export function Card({ user }) {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </>
  );
}
