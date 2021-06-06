import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import {AppBar, Paper, Toolbar} from "@material-ui/core";
import DiscreteSlider from "./YearlySlider";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    menuButton: {
        marginRight: 36,
        borderTop: "dotted"
    },

    drawer: {
        width: 220,
        flexShrink: 1,
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 2,
        padding: theme.spacing(4),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {})}>
                <Toolbar>
                </Toolbar>
            </AppBar>

            <Paper variant="permanent">
                <div className={classes.toolbar}>
                </div>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                        <ListItemText/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon/></ListItemIcon>
                        <ListItemText/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ThumbsUpDownIcon/>
                        </ListItemIcon>
                        <ListItemText/>
                    </ListItem>
                </List>

            </Paper>
            <Paper style={{width: '200px'}}>
                <div className={classes.toolbar}>
                </div>
                <List style={{textAlign: 'center'}}>
                    <ListItem button>
                        <ListItemText>Overview</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Document Family</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Timeline</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Documents</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Alerts</ListItemText>
                    </ListItem>
                    <hr/>
                    <ListItem button>
                        <ListItemText>Solutions</ListItemText>
                    </ListItem>
                </List>
            </Paper>
            <main className={classes.content}>
                <DiscreteSlider/>
            </main>
        </div>
    );
}
