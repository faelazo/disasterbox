import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: 100,
        marginBottom: 60
    }
}));

const ContentHome = () => {
    
    const classes = useStyle();

    return (
        <Container className={classes.root} maxWidth='xl'>
            <p>Phasellus a ante risus. Vivamus placerat sodales leo, eu rutrum arcu. Duis magna ipsum, interdum a hendrerit at, tincidunt a tortor. Sed quis convallis purus. Phasellus augue diam, cursus eget suscipit vehicula, fringilla blandit arcu. Curabitur leo lacus, vulputate ac lectus et, iaculis interdum sapien. Nullam fringilla venenatis libero eget fermentum. In eget molestie mi, sit amet varius leo. Nulla ut ante sodales dolor interdum rutrum vel eu tortor. Fusce finibus, lacus ac aliquam commodo, metus nisl venenatis ex, non cursus augue tellus in diam. Phasellus lacinia, orci eu consequat maximus, ipsum tortor elementum ex, sed efficitur felis orci scelerisque purus. Nunc venenatis dui neque, et congue dolor interdum sollicitudin. Vestibulum vestibulum leo at ligula gravida tempor. Suspendisse sit amet pellentesque eros, vitae sollicitudin est.</p>
            <p>Phasellus a ante risus. Vivamus placerat sodales leo, eu rutrum arcu. Duis magna ipsum, interdum a hendrerit at, tincidunt a tortor. Sed quis convallis purus. Phasellus augue diam, cursus eget suscipit vehicula, fringilla blandit arcu. Curabitur leo lacus, vulputate ac lectus et, iaculis interdum sapien. Nullam fringilla venenatis libero eget fermentum. In eget molestie mi, sit amet varius leo. Nulla ut ante sodales dolor interdum rutrum vel eu tortor. Fusce finibus, lacus ac aliquam commodo, metus nisl venenatis ex, non cursus augue tellus in diam. Phasellus lacinia, orci eu consequat maximus, ipsum tortor elementum ex, sed efficitur felis orci scelerisque purus. Nunc venenatis dui neque, et congue dolor interdum sollicitudin. Vestibulum vestibulum leo at ligula gravida tempor. Suspendisse sit amet pellentesque eros, vitae sollicitudin est.</p>
            <p>Phasellus a ante risus. Vivamus placerat sodales leo, eu rutrum arcu. Duis magna ipsum, interdum a hendrerit at, tincidunt a tortor. Sed quis convallis purus. Phasellus augue diam, cursus eget suscipit vehicula, fringilla blandit arcu. Curabitur leo lacus, vulputate ac lectus et, iaculis interdum sapien. Nullam fringilla venenatis libero eget fermentum. In eget molestie mi, sit amet varius leo. Nulla ut ante sodales dolor interdum rutrum vel eu tortor. Fusce finibus, lacus ac aliquam commodo, metus nisl venenatis ex, non cursus augue tellus in diam. Phasellus lacinia, orci eu consequat maximus, ipsum tortor elementum ex, sed efficitur felis orci scelerisque purus. Nunc venenatis dui neque, et congue dolor interdum sollicitudin. Vestibulum vestibulum leo at ligula gravida tempor. Suspendisse sit amet pellentesque eros, vitae sollicitudin est.</p>
        </Container>
    );
};

export default ContentHome;