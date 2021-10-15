import React from 'react'

import BasicTable  from './components/BasicTable';
import checktable from './components/Checkbox';
import columnfil from './components/ColumnFilter';
import columnhide from './components/ColumnHiding.js';
import columnOrder from './components/ColumnOrder';
import column from './components/columns';
import filtertring from './components/FiltertingTable';
import globalfil from './components/GlobalFilter';
import pagination from './components/PaginationTable';
import rowselect from './components/RowSelection';
import sorting from './components/SortingTable';
import sticky from './components/StickyTable'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar ,Nav ,Container  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
   

    <Navbar bg="light" expand="lg">
  <Container>
   
      <Nav className="me-auto">

        <Nav.Link href="/">BasicTable</Nav.Link>
        <Nav.Link href="/sticky">sticky</Nav.Link>

        <Nav.Link href="/sorting">sorting</Nav.Link>
        <Nav.Link href="/rowselect">rowselect</Nav.Link>
        <Nav.Link href="/pagination">pagination</Nav.Link>
        <Nav.Link href="/filtertring">filtertring</Nav.Link>
        <Nav.Link href="/columnOrder">columnOrder</Nav.Link>
        <Nav.Link href="/columnhide">columnhide</Nav.Link>
        <Nav.Link href="/checktable">checktable</Nav.Link>
        
      </Nav>

  </Container>
</Navbar>



    <Route path="/"  exact component={BasicTable} />
    <Route path="/sticky" component={sticky} />
    <Route path="/sorting" component={sorting} />
    <Route path="/rowselect" component={rowselect} />
    <Route path="/pagination" component={pagination} />
    <Route path="/filtertring" component={filtertring} />
    <Route path="/columnOrder" component={columnOrder} />
    <Route path="/columnhide" component={columnhide} />
    <Route path="/checktable" component={checktable} />

    </Router>
  )
}

export default App
