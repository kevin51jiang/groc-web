import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Button } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import groc_logo from '../assets/groc_logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontWeight: 'lighter',
        fontFamily: 'Roboto',
    },
    appbar:{
        background:'none',
        marginTop: '3rem'
    },
    appbarWrapper:{
        width: '90%',
        margin: '0 auto'
    },
    appbarTitle:{
        flexGrow: '1',
        color:'#10120F',
        fontWeight: 'lighter',
    },
    icon:{
        color:'#10120F',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
    },
    logo:{
        marginTop:'0rem',
    },
    subtitle:{
        fontWeight: 'lighter',
    },
    signupbt:{
        background: "#4B9EFF",
        borderRadius: '48px'
    },
    topbutton:{
        marginLeft:'auto',
        /* marginRight:'0', */
    },
    buttoncontainer:{
        display:'flex',
        justifyContent:'center'
    },
    title: {
        color:'#10120F',
        fontSize: '5rem',
        fontWeight: 'lighter',
        marginBottom: 0
    }
}));

const Header = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className = {classes.appbarWrapper}>
                    <img className={classes.logo} src={groc_logo} alt="logo"/>
                    {/* <h1 className={classes.appbarTitle}>groc</h1> */}
                    {/* <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton> */}

                        <Button className={classes.topbutton} color="black">about</Button>
                        <Button className={classes.topbutton} color="black">help</Button>
                        <Button className={classes.topbutton} color="black">login</Button>
                        <Button className={classes.topbutton} color="black">sign up</Button>

                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Welcome to groc
                </h1>
                <h3 className={classes.subtitle}>
                    discover the hottest deals only for what you want
                </h3>
                <Button variant="contained" /* color="primary" */ className={classes.signupbt}>
                    Get started with G
                </Button>
            </div>
        </div>
     );
}
 
export default Header;