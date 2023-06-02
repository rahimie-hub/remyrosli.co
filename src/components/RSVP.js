import React, { useEffect, useState } from 'react';
import gallery1 from '../assets/images/1.jpg'
import table from '../assets/images/table.jpeg'
import gallery3 from '../assets/images/3.jpg'
import gallery4 from '../assets/images/4.jpg'
import gallery5 from '../assets/images/5.jpg'
import gallery6 from '../assets/images/6.jpg'
import { DatatablesHTMLLoading } from '../helper/Datatables/Datatables'
import jsonData from './data.json'; // Assuming the JSON file is named data.json and is in the same directory
import GenerateDatatables from './GenerateDatatables';
import { Card } from 'react-bootstrap'


function RSVP() {
  const [name, setName] = useState('');
  const [tableNo, setTableNo] = useState('');

  const findSeat = (event) => {
    event.preventDefault(); // Prevent form submission
    const enteredName = event.target.elements.name.value;
    if (enteredName) {
      setName(enteredName);
      setTableNo('1');
    } else {
      setName('');
      setTableNo('2');
    }
  };
  // const generateDatatables = () => {
  //   useEffect(() => {
  //     // Your useEffect logic here, if any
  //     // Make sure to include the relevant dependencies within the dependency array
  //     // For example, if you're using 'props.dtColumns' in your useEffect callback, include it in the dependency array like this:
  //     // props.dtColumns
  //   }, [/* Include the relevant dependencies here */]);

  //   return (
  //     <DatatablesHTMLLoading tableId="unikIdJikaBanykDatatable" dtTitle="Permohonan Sewa" loading={this.state.loading} dtColumns=":not(:last-child)">
  //       <thead>
  //         <tr>
  //           <th style={{ width: "1%" }}>Bil</th>
  //           <th>Nama</th>
  //           <th>No Telefon</th>
  //           <th>No Meja</th>
  //           <th className="text-nowrap text-center">Cetak</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {jsonData.map((data, index) => (
  //           <tr key={index}>
  //             <td>{index + 1}</td>
  //             <td>{data.nama}</td>
  //             <td>{data.noTelefon}</td>
  //             <td>{data.noMeja}</td>
  //             <td className="text-nowrap text-center">Cetak</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </DatatablesHTMLLoading>
  //   );
  // }


  return (
    <div id='table' className='section-padding bg-img bg-fixed'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            <span className='oliven-title-meta text-center'>Table Seating</span>
            <h2 className='oliven-title text-center'>Find Your Seat</h2>
            <br />
            <form className='row' onSubmit={findSeat}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    required
                    name='name'
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='FIND' />
                </div>
              </div>
            </form>
            <div className='row'>
              <div className='col-md-12'>
                {name && (
                  <p className='text-center'>
                    Hello, {name}! Your seat no is <strong>{tableNo}</strong>.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {/* <h2 className='oliven-title text-center'>Guest List</h2> */}
            <br />

            <div className='row'>
              <div className='col-m-3 '>
                <Card className='p-5'>
                  <h5 className='text-center'>Guest List</h5>
                  <p className='card-text text-center'>
                    {/* Guest List */}
                  </p>
                  <GenerateDatatables />
                  <h5 className='text-center mt-5'>Table Layout</h5>
                  <p className='card-text text-center'>
                    {/* Layout */}
                  </p>
                  <a href='/' className='img-zoom'>
                    <div className='gallery-box'>
                      <div className='gallery-img'>
                        {' '}
                        <img
                          src={table}
                          className='img-fluid mx-auto d-block'
                          alt=''
                        />{' '}
                      </div>
                      <div className='gallery-detail'>
                        <h4 className='mb-0'>Layout</h4>{' '}
                      </div>
                    </div>
                  </a>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RSVP;