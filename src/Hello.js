import { Add, Email } from '@material-ui/icons';
import React from 'react';
import  ReactDOM from 'react-dom';
import Navbar from './component/Navbar';
import Login from './Login';
import Menu from './component/Menu';
import CenterCont from './component/CenterCont';
import LastCont from './component/LastCont';

function Hello() 
{
  return (
    <div>
        <Navbar/>
        <div className='Mcontent'>
          <Menu/>
          <CenterCont/>
          <LastCont/>
        </div>
    </div>
  )
}

export default Hello