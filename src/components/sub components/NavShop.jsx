import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../../css/navshop.css'


function NavShop() {
  return (
    <div className='navshop'>
      <div className='navshop__list'>
        <div className='navshop__listmenu1'>
          <ul tabIndex={0}>
            <li><MenuOutlinedIcon sx={{fontSize: 25}}/></li>
            <li>all</li>
          </ul>
        </div>
        <div className='navshop__listmenu2'>
          <ul>
            <li tabIndex={0}>Today's deals</li>
            <li tabIndex={0}>customer's service</li>
            <li tabIndex={0}>registry</li>
            <li tabIndex={0}>gift cards</li>
            <li tabIndex={0}>sells</li>
          </ul>
        </div>
        <div className='navshop__progressive__content'>
          <p tabIndex={0}>shop mother's day gifts</p>
        </div>
      </div>
    </div>
  );
}

export default NavShop;