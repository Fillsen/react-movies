import {Typography, Container, Grid, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0, 6)
    },
    buttons: {
        paddingTop: '10px'
    }
}))

function Header() {
    const classes = useStyles();
    return (
        <main>
            <div className={classes.root}>
                <Container maxWidth='sm'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        React Shop
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' gutterBottom>
                        This simple project made by Fillsen with M-UI & React JS
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button href='https://github.com/Fillsen' target='_blank' variant='contained' color='primary'>Github</Button>
                            </Grid>
                            <Grid item>
                                <Button href='https://tlgg.ru/Fillsen' target='_blank' variant='outlined' color='primary'>Contact me</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export {Header}