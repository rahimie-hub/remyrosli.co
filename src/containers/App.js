import React from 'react';
import { BrowserRouter,Link} from 'react-router-dom';
import Routes from './Routes';

import { Container, Row } from 'react-bootstrap';
import { axiosInterceptor } from '../services/AxiosInterceptor';
import './App.scss';


/* BootStrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


/* React Bootrap Datatable */
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

/* Datatable */
import JSZip from 'jszip';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-buttons-dt/js/buttons.dataTables.js';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.print';

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = JSZip;


axiosInterceptor();

function App() {
  return (
      <BrowserRouter>
            <Container fluid={true}>
              <Row>   
                  <Container fluid={true} className="mt-3">
                    <Routes />
                  </Container>
              </Row>
            </Container>
      </BrowserRouter>
  );
}

export default App;