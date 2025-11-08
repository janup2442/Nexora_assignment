import { useState, useEffect } from 'react';
import { Card, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Save';

const CartItem = ({ id ,image, title, price, initialQuantity, onDelete, onUpdate }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [isModified, setIsModified] = useState(false);

    // useEffect(() => {
    //     setIsModified(quantity !== initialQuantity);
    // }, [quantity, initialQuantity]);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleUpdate = () => {
        // onUpdate(quantity);
        // setIsModified(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <Card className="mb-3 shadow-sm" sx={{ borderRadius: 2 }}>
            <div className="row g-0 align-items-center p-3">
                <div className="col-12 col-sm-3 col-md-2">
                    <img
                        src={image}
                        alt={title}
                        className="img-fluid rounded"
                        style={{
                            objectFit: 'cover',
                            height:'150px'
                        }}
                    />
                </div>

                <div className="col-12 col-sm-9 col-md-10">
                    <div className="row align-items-center h-100">
                        <div className="col-12 col-md-5 mt-3 mt-sm-0">
                            <h6 className="mb-1 fw-semibold text-truncate">{title}</h6>
                            <p className="mb-0 text-success fw-semibold fs-5">Rs {price.toFixed(2)}</p>
                        </div>

                        <div className="col-12 col-md-4 mt-3 mt-md-0">
                            <div className="d-flex align-items-center gap-2">
                                <IconButton
                                    size="small"
                                    onClick={handleDecrement}
                                    disabled={quantity <= 1}
                                    sx={{
                                        border: '1px solid #dee2e6',
                                        borderRadius: '4px',
                                        '&:hover': { backgroundColor: '#f8f9fa' }
                                    }}
                                >
                                    <RemoveIcon fontSize="small" />
                                </IconButton>

                                <div
                                    className="text-center fw-semibold px-3 py-1"
                                    style={{
                                        minWidth: '50px',
                                        border: '1px solid #dee2e6',
                                        borderRadius: '4px',
                                        backgroundColor: '#f8f9fa'
                                    }}
                                >
                                    {quantity}
                                </div>

                                <IconButton
                                    size="small"
                                    onClick={handleIncrement}
                                    sx={{
                                        border: '1px solid #dee2e6',
                                        borderRadius: '4px',
                                        '&:hover': { backgroundColor: '#f8f9fa' }
                                    }}
                                >
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            </div>
                            <small className="text-muted ms-1">Subtotal: ${(price * quantity).toFixed(2)}</small>
                        </div>

                        <div className="col-12 col-md-3 mt-3 mt-md-0">
                            <div className="d-flex gap-2 justify-content-md-end">
                                <Button
                                    variant="contained"
                                    size="small"
                                    disabled={!isModified}
                                    onClick={handleUpdate}
                                    startIcon={<SaveIcon />}
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#28a745',
                                        '&:hover': { backgroundColor: '#218838' },
                                        '&:disabled': {
                                            backgroundColor: '#e9ecef',
                                            color: '#6c757d'
                                        }
                                    }}
                                >
                                    Update
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="error"
                                    onClick={handleDelete}
                                    startIcon={<DeleteOutlineIcon />}
                                    sx={{ textTransform: 'none' }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CartItem;