import React, { useEffect, useState } from 'react';
import gallery1 from '../assets/images/1.jpg'
import table from '../assets/images/table.jpeg'
import gallery3 from '../assets/images/3.jpg'
import gallery4 from '../assets/images/4.jpg'
import gallery5 from '../assets/images/5.jpg'
import gallery6 from '../assets/images/6.jpg'
import { DatatablesHTMLLoading } from '../helper/Datatables/Datatables'
import GenerateDatatables from './GenerateDatatables';
import jsonData from '../data/data.json'; // Assuming the JSON file is named data.json and is in the same directory
import { Card } from 'react-bootstrap';
import natural from 'natural';
import stringSimilarity from 'string-similarity';


function Seating() {
  const [name, setName] = useState('');
  const [dataName, setDataName] = useState('');
  const [tableNo, setTableNo] = useState('');

  const calculateLevenshteinDistance = (str1, str2) => {
    const levDistance = natural.LevenshteinDistance(str1, str2);
    return levDistance;
  };

  const findSeat = (event) => {
    event.preventDefault(); // Prevent form submission
    const enteredName = event.target.elements.name.value;
  
    // Find the closest match based on Levenshtein distance
    let closestMatch = Infinity;
    let minDistance = Infinity;
  
    jsonData.forEach((entry) => {
      const distance = calculateLevenshteinDistance(enteredName, entry.nama);
      if (distance < minDistance) {
        minDistance = distance;
        closestMatch = entry;
      }
    });
  
    if (closestMatch) {
      setName(enteredName);
      setDataName(closestMatch.nama);
      setTableNo(closestMatch.noMeja);
    } else {
      setName('');
      setTableNo('2');
    }
  };

  // const findSeat = (event) => {
  //   event.preventDefault(); // Prevent form submission
  //   const enteredName = event.target.elements.name.value;
  
  //   // Find the best match based on similarity
  //   const matches = stringSimilarity.findBestMatch(enteredName, jsonData.map((entry) => entry.nama));
  //   const bestMatch = matches.bestMatch;
  
  //   if (bestMatch.rating >= 0.7) {
  //     const matchingEntry = jsonData[bestMatch];
  //     setName(enteredName);
  //     setDataName(matchingEntry.nama);
  //     setTableNo(matchingEntry.noMeja);
  //   } else {
  //     setName('');
  //     setTableNo('2');
  //   }
  // };

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
                    Hello, {dataName}! Your table no is <strong>{tableNo}</strong>.
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
                  {/* <h5 className='text-center'>Guest List</h5> */}
                  <span className='oliven-title-meta text-center'>Our Guest List</span>
                  <p className='card-text text-center'>
                    {/* Guest List */}
                  </p>
                  <GenerateDatatables />
                  <span className='oliven-title-meta text-center'>Table Layout</span>
                  {/* <h5 className='text-center mt-5'>Table Layout</h5> */}
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

export default Seating;