import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

export default function CustomizedTooltip({ children }) {
    return (
        <>
            <HtmlTooltip
                interactive={true}
                title={
                    <React.Fragment>
                        <Typography color="inherit">The Oxford Covid-19 Government Response Tracker</Typography>
                        <Typography variant="body2">The Oxford Covid-19 Government Response Tracker (OxCGRT)
                        collects systematic information on which governments have taken
                        which measures, and when.
                        </Typography> <br />
                        <Typography variant="body2"><Typography style={{ fontWeight: 800 }} variant="body2">Stringency Index (SI)</Typography>The SI represents the overall policy stringency of a country.
                        It is an additive score of seven indicators of interventions. This measure is for
                        comparative purposes only, and should not be interpreted as a rating of the
                        appropriateness or effectiveness of a country's response.
                        </Typography> <br />
                        <a href="https://covidtracker.bsg.ox.ac.uk/">Data source</a>
                    </React.Fragment>
                }
            >
                {children}
            </HtmlTooltip >
        </>
    );
}