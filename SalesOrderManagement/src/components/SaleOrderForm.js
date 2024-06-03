import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SaleOrderForm = ({ isOpen, onClose, onSubmitSuccess }) => {
  const { register, handleSubmit, setValue, watch, reset } = useForm();

  const onSubmit = (data) => {
    onSubmitSuccess(data); // Call onSubmitSuccess callback with form data
    reset(); // Reset the form fields
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => { reset(); onClose(); }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl>
              <FormLabel>Customer Name</FormLabel>
              <Input type="text" {...register('customer')} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input type="number" {...register('price')} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice Date</FormLabel>
              <DatePicker
                selected={watch('invoice_date')}
                onChange={(date) => setValue('invoice_date', date)}
                customInput={<Input />}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>Save</Button>
            <Button onClick={() => { reset(); onClose(); }}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;
