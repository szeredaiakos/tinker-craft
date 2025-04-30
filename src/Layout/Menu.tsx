import { useEffect, useState } from 'react';
import './Menu.css';
import { MenuController } from './MenuController';
import { MenuItem } from './menu/MenuItem';

export default function Menu() {
  const [storeData, setStoreData] = useState(MenuController.store);

  useEffect(() => {
    const unsub = MenuController.subscribe(setStoreData);
    return unsub;
  }, []);

  return (
    <div className={'appMenu'}>
      {storeData.menuItems.map(mi => {
        const key = `${ mi.label }-${ mi.url }`;
        return <MenuItem label={mi.label} url={mi.url} key={key} />;
      })}
    </div>
  );
}