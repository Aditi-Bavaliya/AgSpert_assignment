import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ActiveOrders from './components/ActiveOrders';
import CompletedOrders from './components/CompletedOrders';
import LoginPage from './components/LoginPage';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';

const AuthContext = createContext();

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Router>
            <div>
              <ThemeToggle />
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                  path="/orders/*"
                  element={isAuthenticated ? <Orders /> : <Navigate to="/" />}
                />
              </Routes>
            </div>
          </Router>
        </AuthContext.Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

const Orders = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="active" element={<ActiveOrders />} />
        <Route path="completed" element={<CompletedOrders />} />
      </Routes>
    </div>
  );
};

export default App;
export { AuthContext };
