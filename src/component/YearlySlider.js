import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem  from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Paper from '@material-ui/core/Paper';
import {YEARLY_DATA, MARKS} from "./constants";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1100,

    },
    margin: {
        height: theme.spacing(3),
    },
}));

const useStyles1 = makeStyles((theme) => ({
    root: {
      border:"dotted",
      margin:0,
      padding:0,
        width:100,
        backgroundColor:"red"
    },
    paper: {
        width: 500,
        padding: '6px 16px',
        backgroundColor: "#BFE1EB"
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
        missingOppositeContent: {
            "&:before": {
                display: "none"
            }
    },
    timelineConnector:{
        color: '#BFE1EB',
        border:  'dotted'
    }
}));


const marksMapping = {
    0:'2003',
    15:'2005',
    30:'2008',
    45:'2010',
    60: '2018',
    65:'2019',
    75:'2021',
    100:'2022'
}



export default function DiscreteSlider() {
    const classes = useStyles();
    const class1= useStyles1();

    function getSliderData(e,data) {
            let idOfElm = marksMapping[data]
            const elmnt = document.getElementById(idOfElm);
            if(!!elmnt) {
                elmnt.scrollIntoView();
            }
    }

    return (
        <div>
        <div className={classes.root}>
                <p style={{fontStyle:'italic'}}>selected focus year</p>
            <Slider
                aria-labelledby="discrete-slider"
                marks={MARKS}
                onChange={getSliderData}
            />

        </div>
        <div >
            {YEARLY_DATA.map((v,i)=> {
                return (
                    <div id={v.key ? v.key : i}>
                        <Timeline align="left">
                        <TimelineItem className={class1.missingOppositeContent}>
                            <TimelineSeparator>
                                    <Typography variant="h6">
                                        {v.time}
                                    </Typography>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent >
                                <Paper elevation={3} className={class1.paper}>
                                    <Typography variant="h6" component="h1"color="textSecondary">
                                <h3 className="vertical-timeline-element-title">{v.data.header}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{v.key}</h4>
                                <p style={{margin:0}}>{v.data.body.add}</p>
                                <p style={{margin:0}}>{v.data.body.update}</p>
                                <p style={{margin:0}}>{v.data.body.remove}</p>
                            </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    </div>)
            })}
        </div>
    </div>
    );
}
