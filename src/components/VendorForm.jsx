import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import data from './Data/data.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontWeight: 600,
  },
}))

const jsonData = data.vendor
// console.log(jsonData);

let grandTotal = 0
for (let i = 0; i < jsonData.length; i++) {
  grandTotal += jsonData[i].price * jsonData[i].qty
}

export default function VendorForm() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} stickyHeader aria-label="spanning table">
        <TableHead>
          <TableRow className="bg-primary bg-gradient">
            <StyledTableCell width="10%">S.No.</StyledTableCell>
            <StyledTableCell width="20%">NAME OF MATERIALS</StyledTableCell>
            <StyledTableCell>PRICE</StyledTableCell>
            <StyledTableCell>UOM</StyledTableCell>
            <StyledTableCell width="20%">QTY</StyledTableCell>
            <StyledTableCell width="20%">TOTAL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jsonData.map((item, index) => (
            <TableRow key={index}>
              <TableCell width="10%">{item.sno}</TableCell>
              <TableCell width="20%">{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.uom}</TableCell>
              <TableCell width="20%">{item.qty}</TableCell>
              <TableCell width="20%">{item.price * item.qty}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4} />
            <TableCell className="fw-bold">Grand Total</TableCell>
            <TableCell className="fw-bold">{grandTotal}/-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
