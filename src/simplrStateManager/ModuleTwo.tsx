import { DataContextProvider, useLiftedConext } from "./DataContext";

let updc = 0;
export default function ModuleTwo() {

  const { user, setAge } = useLiftedConext();
  updc++;
  return (
    <>
      <p style={{ textAlign: 'center' }}>this is module two {updc}</p>
      <p style={{ marginLeft: 12 }}>
        name: {user.name} <br />
        age: {user.age}
      </p>
      <button onClick={setAge}>update age</button>
    </>
  );
}