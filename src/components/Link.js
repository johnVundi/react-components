import React from 'react'
import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';

function Link({to, children,className}) {
    const {navigate} = useContext(NavigationContext);

    const classes = classNames('text-blue-500', className);

    const handleClick = (event) =>{
        if(event.metaKey || event.ctrl){
            return;
        }
        event.preventDefault();

        navigate(to);
    }


  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link