import React, { useEffect, useState } from 'react';
import gallery1 from '../assets/images/1.jpg'
import table from '../assets/images/table.png'
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

  const [tableName, setTableName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [matchingEntries, setMatchingEntries] = useState([]);

  const calculateLevenshteinDistance = (str1, str2) => {
    const levDistance = natural.LevenshteinDistance(str1, str2);
    return levDistance;
  };

  const findTable = (enteredName) => {
    const tableData = [
      {"name": "T1", "x": -5, "y": 6},
      {"name": "T2", "x": -5, "y": 5},
      {"name": "T3", "x": -5, "y": 4},
      {"name": "T4", "x": -5, "y": 3},
      {"name": "T5", "x": -5, "y": 2},
      {"name": "T6", "x": -5, "y": 1},

      {"name": "T7", "x": -4, "y": 1},
      {"name": "T8", "x": -4, "y": 2},
      {"name": "T9", "x": -4, "y": 3},
      {"name": "T10", "x":-4, "y": 4},
      {"name": "T11", "x": -4, "y":5},
      {"name": "T12", "x": -4, "y":6},

      {"name": "T13", "x": -3, "y": 6},
      {"name": "T14", "x": -3, "y": 5},
      {"name": "T15", "x": -3, "y": 4},
      {"name": "T16", "x":-3, "y": 3},
      {"name": "T17", "x": -3, "y": 2},
      {"name": "T18", "x": -3, "y": 1},

      {"name": "T19", "x": -2, "y": 1},
      {"name": "T20", "x": -2, "y": 2},
      {"name": "T21", "x": -2, "y": 3},
      {"name": "T22", "x":-2, "y": 4},
      {"name": "T23", "x": -2, "y": 5},
      {"name": "T24", "x": -2, "y": 6},

      {"name": "T25", "x": -1, "y": 6},
      {"name": "T26", "x": -1, "y": 5},
      {"name": "T27", "x": -1, "y": 4},
      {"name": "T28", "x": -1, "y": 3},
      {"name": "T29", "x": -1, "y": 2},
      {"name": "T30", "x": -1, "y": 1},

      {"name": "V1", "x": -1, "y": 6},
      {"name": "V2", "x":  1, "y": 6},

      {"name": "T31", "x": 1, "y": 1},
      {"name": "T32", "x": 1, "y": 2},
      {"name": "T33", "x": 1, "y": 3},
      {"name": "T34", "x": 1, "y": 4},
      {"name": "T35", "x": 1, "y": 5},
      {"name": "T36", "x": 1, "y": 6},

      {"name": "T37", "x": 2, "y": 6},
      {"name": "T38", "x": 2, "y": 5},
      {"name": "T39", "x": 2, "y": 4},
      {"name": "T40", "x": 2, "y": 3},
      {"name": "T41", "x": 2, "y": 2},
      {"name": "T42", "x": 2, "y": 1},

      {"name": "T43", "x": 3, "y": 1},
      {"name": "T44", "x": 3, "y": 2},
      {"name": "T45", "x": 3, "y": 3},
      {"name": "T46", "x": 3, "y": 4},
      {"name": "T47", "x": 3, "y": 5},
      {"name": "T48", "x": 3, "y": 6},

      {"name": "T49", "x": 4, "y": 6},
      {"name": "T50", "x": 4, "y": 5},
      {"name": "T51", "x": 4, "y": 4},
      {"name": "T52", "x": 4, "y": 3},

      {"name": "MAIN ENTRANCE", "x": 0, "y": 0}
    ];

    const table = tableData.find((table) => table.name.toLowerCase() === enteredName.toLowerCase());
    if (table) {
      if (table.name === "MAIN ENTRANCE") {
        setInstructions(`You are already at the main entrance.`);
      } else {
        const directionX = table.x > 0 ? "right" : "left";
        const directionY = table.y > 0 ? "up" : "down";
        const distanceX = Math.abs(table.x);
        const distanceY = Math.abs(table.y);
        
        setInstructions(`Hello, from Main Entrance, to go to table ${table.name}, Go ${distanceX} table ${directionX}, And ${distanceY} table ${directionY}.`);

        console.log(instructions);
      }
    } else {
      setInstructions('Table not found.');
      console.log(instructions);
    }
  };

  const findMatchingEntries = (name) => {
    console.log('Finding matching entries...'+name);
    const nameLowerCase = name.toLowerCase();

    const filteredEntries = jsonData.filter((entry) => {
      const entryNameLowerCase = entry.nama.toLowerCase();
      return entryNameLowerCase.includes(nameLowerCase);
    });

    setMatchingEntries(filteredEntries);
  };


  const findSeat = (event) => {
    const enteredName = event.target.elements.name.value.toUpperCase();
    if ((enteredName.startsWith('T') || enteredName.startsWith('V')) &&  (enteredName.length === 2 || enteredName.length === 3)) {
      console.log('Table Finder!');
      setName('');
      setDataName('');
      setTableNo('');
      setMatchingEntries([]);
      findTable(enteredName);
    } else {
      console.log('Seat Finder!');
      setInstructions('');
      setMatchingEntries([]);
      findMatchingEntries(enteredName);
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
        setDataName('');
        setTableNo('');
      }
    }
    event.preventDefault(); // Prevent form submission
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
                    placeholder='Name / Table No'
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
            <div className='row mt-5'>
              <div className='col-md-12'>
                {matchingEntries.length > 0 && (
                  <div  className='text-center'>
                    <p  className='text-center' >Matching Entries:</p>
                    <ul>
                      {matchingEntries.map((entry) => (
                        <li key={entry.no}>
                          Name: {entry.nama}, Table No: {entry.noMeja}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* {name && (
                  <p>
                    Hello, {dataName}! Your table no is <strong>{tableNo}</strong>.
                  </p>
                )} */}
                   {instructions && (
                  <p className='text-center'>
                    {instructions}
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
                </Card>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-m-3 '>
                <Card className='p-5'>
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