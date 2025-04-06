import { DataContextProvider, useLiftedConext } from "./DataContext";

let updc = 0;
export default function ModuleOne() {
  updc++;
  const { user, setName } = useLiftedConext();

  return (
    <>
      <p style={{ textAlign: 'center' }}>this is module one {updc}</p>
      <p style={{ marginLeft: 12 }}>
        name: {user.name} <br />
        age: {user.age}
      </p>
      <button onClick={setName}>update name</button>
    </>
  );
}