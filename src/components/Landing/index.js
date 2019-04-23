import React from 'react';
import { Grid, Button, Typography, Paper, List, ListItem, ListItemText } from '@material-ui/core';
import Form from './Form';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { withStyles } from '@material-ui/core/styles';
import parallax from '../../images/clock-parallax.jpg';
import watches from '../../images/watches.jpg';
import watchTransition from '../../images/watch-transition.png';

import './Landing.css';

const styles = theme => ({
    paper: {
        padding: 50,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            padding: 20
        }
    },
    paperIntro: {
        [theme.breakpoints.down('xs')]: {
            minHeight: '100vh'
        }
    },
    paperImage: {
        height: '100vh',
        [theme.breakpoints.down('xs')]: {
            height: '50vh'
        }
    },
    paperTransitionWatch: {
        height: '100vh',
        [theme.breakpoints.down('xs')]: {
            height: '65vh'
        }
    },
    parallax: {
        background: `url(${parallax}) no-repeat fixed right`,
        backgroundSize: '50% 100vh',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            backgroundAttachment: 'scroll',
            backgroundSize: '100%'
        }
    },
    paperWatches: {
        background: `url(${watches}) no-repeat center`,
        backgroundSize: 'cover',
    },
    listItem: {
        paddingLeft: 0
    },
    listItemText: {
        fontSize: '1.4rem'
    }
});

const Landing = ({ classes }) => {
    return (
        <main>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper className={`${classes.paper} ${classes.paperIntro}`} square elevation={0}>
                        <Typography gutterBottom variant="h3">Best Clocks</Typography>
                        <Button
                            style={{ background: 'black', color: 'white' }}
                            variant="contained"
                            size="medium">
                            Discover
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper
                        className={`${classes.paperImage} ${classes.parallax}`}
                        square
                        elevation={0}>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper
                        className={`${classes.paperImage} ${classes.paperWatches}`}
                        square
                        elevation={0}>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper style={{ background: '#E5DBD6' }} className={classes.paper} square elevation={0}>
                        <div style={{ width: '100%' }}>
                            <Fade right>
                                <Typography variant="h4" gutterBottom>
                                    Rewriting an old story
                                </Typography>
                                <Typography variant="h6">
                                    Best Clocks believes in the cult of individualism. From stylish sports to bold fashion statements, the Best Clocks range combines unique features and gadgets with a wide range of colours and shapes. Best Clocks continually seeks stimulation for new challenges in design. Best Clock's team of dedicated designers take inspiration from the world around them, combining unconventional materials together with precision instrumentation.
                                </Typography>
                            </Fade>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper className={classes.paper} square elevation={0}>
                        <div style={{ width: '100%' }}>
                            <Fade left delay={500}>
                                <Typography style={{ width: '100%' }} align="left" variant="h4">
                                    Features
                                </Typography>
                                <List style={{ width: '100%' }}>
                                    <ListItem className={classes.listItem}>
                                        <ListItemText
                                            classes={{ primary: classes.listItemText }}
                                            primary="Original" />
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <ListItemText
                                            classes={{ primary: classes.listItemText }}
                                            primary="Excellents materials" />
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <ListItemText
                                            classes={{ primary: classes.listItemText }}
                                            primary="Cool Design" />
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <ListItemText
                                            classes={{ primary: classes.listItemText }}
                                            primary="Quality" />
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <ListItemText
                                            classes={{ primary: classes.listItemText }}
                                            primary="Cheap" />
                                    </ListItem>
                                </List>
                            </Fade>
                            <Button
                                style={{ background: 'black', color: 'white' }}
                                variant="contained"
                                size="large">
                                Discover
                            </Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper className={classes.paperTransitionWatch} square elevation={0}>
                        <Reveal effect="reveal" delay={500}>
                            <div className="watch-transition-container">
                                <Fade top delay={1200}>
                                    <img className="watch-transition" src={watchTransition} />
                                </Fade>
                            </div>
                        </Reveal>
                    </Paper>
                </Grid>
            </Grid>
            <Form />
        </main>
    )
}

export default withStyles(styles)(Landing);
