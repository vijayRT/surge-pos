import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Container } from 'react-bootstrap';
import SalesOrderEntry from './widgets/SalesOrderEntry';
import CreditCheck from './widgets/CreditCheck';
import { useSalesOrderStore } from './widgets/SalesOrderEntry/store';
function App() {
  const total = useSalesOrderStore(state => state.total)
  return (
    <Container className="justify-content-center">
      <h1 className="my-3 text-center">Surge POS</h1>
      <CreditCheck compareValue={total} />
      <SalesOrderEntry />
    </Container>
  );
}

export default App;
