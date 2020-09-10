import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
export default function MatPaginationTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    fetch('http://localhost:8000/events')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    < Paper className={classes.root} >
      < TableContainer className={classes.container} >
        < Table stickyHeader aria-label="sticky table" >
          < TableHead >
            < TableRow >
              < TableCell align="right" > Event Type</TableCell >
              < TableCell align="right" > TimeStamp</TableCell >
              < TableCell align="right" > Visit ID</TableCell >
            </TableRow >
          </TableHead >
          < TableBody >
            {
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  < TableRow >
                    {/* < TableCell component="th" scope="row" >
                      {row.id}
                    </TableCell > */}
                    < TableCell align="right" > {row.event_type}</TableCell >
                    < TableCell align="right" > {row.timestamp}</TableCell >
                    < TableCell align="right" > {row.visit_id}</TableCell >
                  </TableRow >
                );
              })
            }
          </TableBody >
        </Table >
      </TableContainer >
      < TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper >
  );
}