import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles(theme => ({
    root: { 
        marginLeft: 20,
        marginTop: -20
    }
}));

const makeLinks = (props) => {

    var path = "";

    return (props.path.map(item => {
                path += "/" + item.toLowerCase();
                
                return(
                    <Link key={item+"00"} to={path} style={{ textDecoration: 'none' }}>
                        {item}
                    </Link>
                )
            }
        ));
};

const Bread = (props) => {

    const classes = useStyles();
    
    return (
        <Breadcrumbs className={classes.root} separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
            {makeLinks(props)}
        </Breadcrumbs>
    );
};

export default Bread;