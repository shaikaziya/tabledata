import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Data from "./database/Data"
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
const styles={
  borderRadius:15,
  margin:"10px 10px",
  maxWidth:950,
  marginTop:"90px",
  marginLeft:"250px"

}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export function Tabledata() {
  const [page, setPage] =useState(0);
  const [rowsPerPage, setRowsPerPage] =useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }} style={styles}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
           
            <StyledTableCell >ID</StyledTableCell>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell >EMAIL</StyledTableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
    
                    {Data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.id}>
                           <TableCell>{row.id}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell >{row.email}</TableCell>
                          <TableCell>
                            </TableCell>
                        </TableRow>
                      ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={Data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}