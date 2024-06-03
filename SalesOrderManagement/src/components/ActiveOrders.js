import React, { useState } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import SaleOrderForm from './SaleOrderForm';

const ActiveOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Initial orders data
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Spider', price: 100, date: '24/5/2024 (11:07 PM)' },
    { id: 2, customer: 'Spider', price: 210, date: '24/5/2024 (11:30 PM)' },
  ]);

  // Handle form submission
  const handleAddOrder = (newOrder) => {
    const newOrderWithId = {
      ...newOrder,
      id: orders.length + 1,
      date: newOrder.invoice_date ? newOrder.invoice_date.toLocaleDateString() : '' // Format date as needed
    };
    setOrders([...orders, newOrderWithId]);
    onClose();
  };

  return (
    <Box p={4}>
      <Button onClick={onOpen}>+ Customer Order</Button>
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map(order => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer}</Td>
              <Td>{order.price}</Td>
              <Td>{order.date}</Td>
              <Td>...</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <SaleOrderForm isOpen={isOpen} onClose={onClose} onSubmitSuccess={handleAddOrder} />
    </Box>
  );
};

export default ActiveOrders;
