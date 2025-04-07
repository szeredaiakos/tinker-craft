import { useEffect, useState } from 'react';
import './Menu.scss';
import { MenuController } from './MenuController';

export default function Menu() {
  const [storeData, setStoreData] = useState(MenuController.store);

  useEffect(() => {
    const unsub = MenuController.subscribe(setStoreData);
    return unsub;
  }, []);

  return (
    <div className={'appMenu'}>le menu with {storeData.menuItems.length} itemz</div>
  );
}