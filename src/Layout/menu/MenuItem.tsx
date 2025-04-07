
import { useCallback } from 'react';
import './MenuItem.scss';
import { RouteController } from '../../com/Router/RouteController';

interface IMenuItem {
  label: string;
  url: string;
}

export function MenuItem(props: IMenuItem) {

  const handleClick = useCallback(() => {
    if (props.url) {
      RouteController.navigate(props.url);
    }
  }, [props]);

  return (
    <div className="menu-item" onClick={handleClick}>{props.label}</div>
  );
}