import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const headerStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#000', // Change color to black
};

const buttonStyle = {
  background: '#28a745',
  color: '#fff',
  padding: '0.3rem 0.7rem',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '1rem',
};

const inputStyle = {
  padding: '0.3rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const containerStyle = {
  padding: '0.5rem',
  background: '#343a40',
};

const rowStyle = {
  justifyContent: 'center',
  paddingTop: '0.3rem',
  paddingBottom: '0.2rem',
};

const colStyle = {
  display: 'flex',
  alignItems: 'center',
};

const cartIconStyle = {
  fontSize: '1.5rem',
  color: '#fff',
};

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.list);

   const totalQuantity = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <div className="p-2" style={containerStyle}>
      <h3 style={headerStyle}>KOOKABURRA</h3>
      <div className="row" style={rowStyle}>
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex" style={colStyle}>
          <button className="btn btn-success me-3" style={buttonStyle} onClick={() => navigate('/')}>
            Home
          </button>
          <input className="form-control" style={inputStyle} type="search" placeholder="Search..."></input>
          <button className="btn btn-success ms-2" style={buttonStyle} onClick={() => navigate('/cart')}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={totalQuantity} color="secondary">
                <ShoppingCartIcon style={cartIconStyle} />
              </StyledBadge>
            </IconButton>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
