import React from 'react';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from './GridItem';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import FunctionsIcon from '@material-ui/icons/Functions';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import ComputerIcon from '@material-ui/icons/Computer';

const Inner = ({ title, text, className, icon }) => {
    return (
        <GridItem xs={6} sm={6} md={3} alignItems="stretch" style={{ display: 'flex' }}>
            <Card>
                <CardHeader color="info" className={className}>
                    <h3 className={"modelsHeader"}>{icon} {title} </h3>
                </CardHeader>
                <CardBody>
                    {text}
                </CardBody>
            </Card>
        </GridItem>
    )
}



const ModelsGrid = () => {
    return (
        <GridContainer>
            <Inner title={"SIR"}
                text={"The SIR model is a mathematical compartmental model based on the number of Susceptibles, Infecteds and Recovereds."}
                className={"b1"}
                icon={<FunctionsIcon />} />
            <Inner
                title={"LSTM"}
                text={"The LSTM model is a variant of Recurrent Neural Network (RNN) and can be used to predict time series data."}
                className={"b2"}
                icon={<ComputerIcon />} />
            <Inner
                title={"M1"}
                text={"M1 is an LSTM that is enhanced by SIR predictions. LSTM and SIR predictions are computed separately and combined."}
                className={"b3"}
                icon={<CallSplitIcon />} />
            <Inner
                title={"M2"}
                text={"M2 is a SIR model that is enhanced by an LSTM term. LSTM is used to estimate SIR model parameters."}
                className={"b4"}
                icon={< CompareArrowsIcon />} />
        </GridContainer>

    )
}
export default ModelsGrid;