import { useEffect, useState } from 'react';
import './Menu.scss';
import { MenuController } from './MenuController';

export default function Menu() {
  const [menuData, setMenuData] = useState(MenuController.state);

  useEffect(() => {
    return MenuController.subscribe(setMenuData);
  }, []);

  return (
    <div className={'appMenu'}>le menu with {menuData.menuItems.length} items</div>
  );
}