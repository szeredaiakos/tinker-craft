import { useCallback, useEffect, useState } from "react";
import { DataDisplay } from "../com/uiComponents/DataDisplay";
import { AppleActions, AppleStore } from "./Apples.store";
import "./ApplesList.css";
import { TextField } from "../com/uiComponents/TextField";


interface IApplesList { }
export default function ApplesList(props: IApplesList) {
  const { apples } = AppleStore.use();

  const applesData = {
    headers: [
      { label: 'Cutivar', name: 'cultivar' },
      { label: 'Colour', name: 'colour' },
      { label: 'Size (cm)', name: 'medianSize' },
      { label: 'Stock (metric tons)', name: 'stock' },
    ],
    rows: apples,
  };


  const handleAddApple = () => {
    AppleActions.addApple({
      cultivar: 'Adersleber Calville',
      colour: 'yelowish',
      medianSize: 25,
      stock: Math.round(Math.random() * 100) / 100,
    });
  }


  useEffect(() => {
    AppleActions.getApples();
  }, []);

  const [fValue, setFieldValue] = useState('');
  return (
    <div className="apples-list">
      <div className="top-24" />
      <button
        onClick={handleAddApple}
      >Clickme</button>

      <div className="top-24" />
      <DataDisplay data={applesData} />

      <div className="top-24" />
      <TextField
        label='this is a neat label'
        value={fValue}
        onChange={setFieldValue}
      />
    </div>
  );
}