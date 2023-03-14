import * as React from 'react';
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
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function CartWidget() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={8} color="secondary" max={99}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}