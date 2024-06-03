import React from 'react';
import { useColorMode, Switch, HStack, Text } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing={2}>
      <Text>{colorMode === 'light' ? 'Light' : 'Dark'} Mode</Text>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ThemeToggle;
