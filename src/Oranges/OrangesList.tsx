import { useCallback, useEffect } from "react";
import { DataDisplay } from "../com/uiComponents/DataDisplay";
import { OrangeActions, OrangeStore } from "./Oranges.store";
import "./OrangesList.css";

interface IOrangesList { }
export default function OrangesList(props: IOrangesList) {
  const { oranges } = OrangeStore.use();

  const orangesData = {
    headers: [
      { label: 'Cutivar', name: 'cultivar' },
      { label: 'Colour', name: 'colour' },
      { label: 'Size (cm)', name: 'medianSize' },
      { label: 'Stock (metric tons)', name: 'stock' },
    ],
    rows: oranges,
  };


  const handleAddOrange = () => {
    OrangeActions.addOrange({
      cultivar: 'Adersleber Calville',
      colour: 'yelowish',
      medianSize: 25,
      stock: Math.round(Math.random() * 100) / 100,
    });
  }


  useEffect(() => {
    OrangeActions.getOranges();
  }, []);


  return (
    <div className="oranges-list">
      <div className="top-24" />
      <button
        onClick={handleAddOrange}
      >Clickme</button>
      <div className="top-24" />
      <DataDisplay data={orangesData} />
    </div>
  );
}