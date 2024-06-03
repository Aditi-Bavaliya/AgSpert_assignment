import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button, Spinner } from '@chakra-ui/react';
import { fetchCompletedOrders } from '../api';

const CompletedOrders = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: 'completedOrders',
    queryFn: fetchCompletedOrders,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
          <Th>Customer ID</Th>
            <Th>Paid</Th>
            <Th>Invoice No</Th>
            <Th>Invoice Date</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
        {data.map((order, index) => (
            <Tr key={index}>
              <Td>{order.customer_id}</Td>
              <Td>{order.paid ? 'Paid' : 'Paid'}</Td>
              <Td>{order.invoice_no}</Td>
              <Td>{order.invoice_date}</Td>
              <Td>
                <Button>...</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CompletedOrders;
