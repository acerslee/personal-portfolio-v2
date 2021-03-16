import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {modalProjects} from '../data/portfolioData.js';

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
            <TableCell align="center" style ={{fontSize: 22}}>Project Name</TableCell>
            <TableCell align="center" style ={{fontSize: 22, padding: 40}}>Tools Used</TableCell>
            <TableCell align="center" style ={{fontSize: 22}}>Github Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modalProjects.map(project => (
            <TableRow key = {project.id}>
            <TableCell align="center" style ={{fontSize: 16}}>
              {project.heading}</TableCell>
            <TableCell align="center" style ={{fontSize: 16}}>{project.tools}</TableCell>
            <TableCell
              align="center"
              style ={{fontSize: 16}}
              numeric component="a" target = 'blank' href={project.link}>
              {project.link}
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectModal;