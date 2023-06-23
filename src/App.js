import { useEffect, useRef } from 'react';
import Welcoming from './components/Welcoming';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Organization from './components/Organization';
import Seating from './components/Seating';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Information from './components/Information';
import audioFile from '../src/assets/audio/audio.mp3';


/* BootStrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.css'

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
/* Icons */
import 'material-icons/iconfont/material-icons.css'

/* Kartik File Upload(https://plugins.krajee.com/file-input) */
import 'bootstrap-fileinput/css/fileinput.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-fileinput/js/plugins/piexif.js';
import 'bootstrap-fileinput/js/plugins/sortable.min.js';
// import 'bootstrap-fileinput/js/plugins/purify.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap-fileinput/js/fileinput.min.js';
// import 'bootstrap-fileinput/themes/fas/theme.min.js';
import 'bootstrap-fileinput/js/locales/LANG.js';
import WelcomeModal from './components/WelcomeModal';
import MainPage from './components/MainPage';
import Routes from './Routes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = JSZip;

function App() {
  const audioRef = useRef(null);


  // const handlePlay = () => {
  //   audioRef.current.play().catch((error) => {
  //     // Handle playback error if needed
  //     console.error('Failed to play audio:', error);
  //   });
  // };


  const handlePlay = () => {
    audioRef.current.play();
  };


  // useEffect(() => {
  //   // handlePlay();
  // }, []);

  return (
    <>
     <Router basename={process.env.PUBLIC_URL}>
      <Routes />
     </Router>
      {/* <WelcomeModal handlePlay={handlePlay} />
      <audio ref={audioRef} src={audioFile} />
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Welcoming />
        <Countdown />
        <Information />
        <Seeyou />
        <Seating />
        <Gallery />
        <Footer />
      </div> */}
    </>
  );
}

export default App;
