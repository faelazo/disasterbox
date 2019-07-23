import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles(theme => ({
    root: { 
        marginLeft: 20,
        marginTop: -20
    },
}));

const makeLinks = (props) => {

    var path = "";

    return (props.path.map(item => {
                path += "/" + item.toLowerCase();
                
                return(
                    <Link key={item+"00"} color="inherit" href={path} >
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