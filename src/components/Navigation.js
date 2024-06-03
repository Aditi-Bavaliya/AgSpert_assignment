import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, Text } from '@chakra-ui/react';

const Navigation = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [skuDetails, setSkuDetails] = useState({
    sellingRate: '',
    quantity: ''
  });

  // Dummy product list
  const products = [
    { id: 1, name: "Product 1", sku: { id: 227, amount: 234, sellingPrice: 324, quantityInInventory: 46 } },
    { id: 2, name: "Product 2", sku: { id: 228, amount: 150, sellingPrice: 250, quantityInInventory: 30 } },
    { id: 3, name: "Product 3", sku: { id: 229, amount: 100, sellingPrice: 200, quantityInInventory: 20 } }
    // Add more dummy products as needed
  ];

  const handleSaleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleProductSelection = (event) => {
    const selectedOption = event.target.value;
    setSelectedProduct(selectedOption);
    setSkuDetails({
      sellingRate: products.find(product => product.id === parseInt(selectedOption))?.sku.sellingPrice || '',
      quantity: ''
    });
  };

  const handleSkuDetailsChange = (event) => {
    const { name, value } = event.target;
    setSkuDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const selectedProductDetails = products.find(product => product.id === parseInt(selectedProduct));

  return (
    <HStack spacing={4} padding={4}>
      <Button
        as={Link}
        to="/orders/active"
        variant={location.pathname === '/orders/active' ? 'solid' : 'outline'}
      >
        Active Sale Orders
      </Button>
      <Button
        as={Link}
        to="/orders/completed"
        variant={location.pathname === '/orders/completed' ? 'solid' : 'outline'}
      >
        Completed Sale Orders
      </Button>
      <Button
        onClick={handleSaleOrderClick}
        variant="solid"
        colorScheme="teal"
        ml="auto"
      >
        + Sale Order
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Select a product</FormLabel>
              <Select onChange={handleProductSelection} value={selectedProduct}>
                <option value="">Select a product</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>{product.name}</option>
                ))}
              </Select>
            </FormControl>

            {selectedProduct && selectedProductDetails && (
              <Box mt={4} p={4} borderWidth={1} borderRadius="md">
                <HStack justifyContent="space-between">
                  <Text>SKU {selectedProductDetails.sku.id} ({selectedProductDetails.sku.amount} Kg)</Text>
                  <Text>Rate: ₹{selectedProductDetails.sku.sellingPrice}</Text>
                </HStack>
                <Stack mt={4}>
                  <FormControl>
                    <FormLabel>Selling Rate</FormLabel>
                    <Input
                      name="sellingRate"
                      placeholder="Enter selling rate"
                      value={skuDetails.sellingRate}
                      onChange={handleSkuDetailsChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Total Items</FormLabel>
                    <HStack>
                      <Input
                        name="quantity"
                        placeholder="Enter Quantity"
                        value={skuDetails.quantity}
                        onChange={handleSkuDetailsChange}
                      />
                      <Text color="green.500">{selectedProductDetails.sku.quantityInInventory} Item(s) Remaining</Text>
                    </HStack>
                  </FormControl>
                </Stack>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default Navigation;
