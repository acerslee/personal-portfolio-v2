import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ProjectModal = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <TableContainer className = 'scroll-table'>
      <Table className={classes.table} stickyHeader = {true} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style ={{fontSize: 22}}></TableCell>
            <TableCell align="center" style ={{padding: 40}}></TableCell>
            <TableCell align="center" style ={{fontSize: 22}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectModal;