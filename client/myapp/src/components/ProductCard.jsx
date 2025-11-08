import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Rating, Box, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

const ProductCard = ({ product }) => {
  const addingToCart = async () => {
    try {
      const result = await axios.post(`${import.meta.env.VITE_API_URL}/api/cart`,{
        productId: product._id,
        qty:1
      })

      if(result.status>=200 && result.status<400){
        alert(result.data.message)
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }
  return (
    <Card
      className="h-100 d-flex flex-column shadow-sm hover-shadow"
      sx={{
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: 'contain',
          padding: '20px',
          backgroundColor: '#f8f9fa'
        }}
      />

      <CardContent className="flex-grow-1 d-flex flex-column">
        <Box className="mb-2">
          <Chip
            label={product.category}
            size="small"
            sx={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              fontWeight: 500,
              fontSize: '0.75rem'
            }}
          />
        </Box>

        <Typography
          variant="h6"
          component="h3"
          className="mb-2"
          sx={{
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.4,
            minHeight: '2.8em',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            color: '#212529'
          }}
        >
          {product.title}
        </Typography>

        <Box className="d-flex align-items-center mb-2">
          <Rating
            value={product.rating?.rate || 0}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            sx={{ ml: 1, color: '#6c757d', fontSize: '0.875rem' }}
          >
            ({product.rating?.count || 0})
          </Typography>
        </Box>

        <Box className="mt-auto">
          <Typography
            variant="h5"
            component="p"
            className="mb-3"
            sx={{
              fontWeight: 700,
              color: '#2e7d32',
              fontSize: '1.5rem'
            }}
          >
            Rs {product.price?.toFixed(2)}
          </Typography>
          <button onClick={addingToCart} className='btn btn-primary w-100'>Add to Cart</button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
