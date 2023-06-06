import React, { useEffect } from 'react';
import jsonData from '../data/data.json'; // Assuming the JSON file is named data.json and is in the same directory
import { DatatablesEmptyLoading } from '../helper/Datatables/Datatables';

const GenerateDatatables = () => {
  useEffect(() => {
    // Your useEffect logic here
    // Include the relevant dependencies if needed
  }, []);

  return (
    <DatatablesEmptyLoading tableId="1" dtTitle="1" loading={false} dtColumns=":not(:last-child)">
      <thead>
        <tr>
          <th style={{ width: "1%" }}>No</th>
          <th>Name</th>
          {/* <th>No Telefon</th> */}
          <th>Table No</th>
          {/* <th className="text-nowrap text-center">Cetak</th> */}
        </tr>
      </thead>
      <tbody>
        {jsonData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.nama.toUpperCase()}</td>
            {/* <td>{data.noTelefon}</td> */}
            <td>{data.noMeja}</td>
            {/* <td className="text-nowrap text-center"></td> */}
          </tr>
        ))}
      </tbody>
    </DatatablesEmptyLoading>
  );
}

export default GenerateDatatables;