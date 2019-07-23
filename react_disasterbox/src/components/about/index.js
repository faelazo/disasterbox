import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    rootHeader: { 
        width: '100%',
        position: 'fixed',
        marginTop: 58,
    },
    bar: {
        maxHeight: 54,
        background: 'transparent',
    },
    title: {
        flexGrow: 1,
    },
    options: {
        color: 'rgb(100,100,100)',
        fontWeight: 'bold',
        fontSize: 16,
    },
    content: {
        marginTop: 10,
        height: 500,
        overflowY: 'auto'
    },
    paper: {
        padding: theme.spacing(3, 2),
        margin: 20,
    }
}));

const About = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.rootHeader}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={[classes.title, classes.options]}>
                        About
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.content}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" component="h3">
                        ¿Qué te cuento?
                    </Typography>
                    <br></br>
                    <Typography component="p" align="justify">
                        Esta web no es más que una web de pruebas. ¿Qué quiero decir con eso? Pues que es un espacio en la red donde hago pruebas para estudiar distintas técnicas, tecnologías, etc. 
                        Básicamente donde disfruto un ratito programando.
                    </Typography>
                    <br></br>
                    <Typography component="p" align="justify">
                        Como estoy comenzando a montar el tinglao este comento cuál es la idea que tengo. Principalmente la de practicar y estudiar mucho pero, ya que estoy
                        también quiero aprovechar este espacio para hacer distintas cosas de provecho como jueguecitos educativos para peques por ejemplo, quizás tener un espacio
                        para hablar de otra gran afición que tengo como es la fotografía, etc. Y obviamente un blog donde escribir sobre todo lo que voy viendo y aprendiendo: las
                        técnicas de programación que uso, cómo lo uso, los enlaces a los repositorios, etc.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography>
                    <br></br>
                    <Typography component="p" align="justify">
                        Y como del dicho al hecho hay un trecho aquí me cayo ya y me pongo al turrón!
                    </Typography>
                    <br></br>
                    <Typography component="p" align="justify">
                        Rafa.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography><br></br>
                    <Typography component="p" align="justify">
                        Para a quién le interese le cuento que esta web está construida con NodeJS en el servidor y React en el front. Estoy aprendiendo a usar Redux y estoy
                        intentado usarlo. No se si bien, de manera óptima o si estoy haciendo aberraciones. Para el diseño uso Material-UI. Por ahora, eso es todo. Conforme
                        vaya usando más cosas y haciendo más pruebas iré comentándolas en sus respectivos posts aunque no descarto modificar esta sección más adelante.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default About;