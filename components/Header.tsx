import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import FavoriteButton from './FavoriteButton';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-b-blac/20'>
      <Container className='flex items-center justify-between'>
        <Logo />
        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
