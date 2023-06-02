import React, { useEffect } from 'react';
import jsonData from './data.json'; // Assuming the JSON file is named data.json and is in the same directory
import { DatatablesEmptyLoading } from '../helper/Datatables/Datatables';

const GenerateDatatables = () => {
  useEffect(() => {
    // Your useEffect logic here
    // Include the relevant dependencies if needed
  }, []);

  return (
    <DatatablesEmptyLoading tableId="unikIdJikaBanykDatatable" dtTitle="Permohonan Sewa" loading={false} dtColumns=":not(:last-child)">
      <thead>
        <tr>
          <th style={{ width: "1%" }}>Bil</th>
          <th>Nama</th>
          <th>No Telefon</th>
          <th>No Meja</th>
          <th className="text-nowrap text-center">Cetak</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.nama}</td>
            <td>{data.noTelefon}</td>
            <td>{data.noMeja}</td>
            <td className="text-nowrap text-center">Cetak</td>
          </tr>
        ))}
      </tbody>
    </DatatablesEmptyLoading>
  );
}

export default GenerateDatatables;