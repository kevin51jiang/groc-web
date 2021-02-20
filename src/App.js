import logo from './logo.svg';
import { makeStyles, withTheme } from '@material-ui/core/styles'
import Header from './components/Header'
const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '100vh',
    backgroundColor: '#FCFCFC' 
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header/>
    </div>
  );
}

export default App;
