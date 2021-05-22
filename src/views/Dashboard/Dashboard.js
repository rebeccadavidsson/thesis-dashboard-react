import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import VideoPlayer from 'components/Video/VideoPlayer';
import styles from "assets/jss/thesisproject/views/dashboardStyle.js";
import Footer from 'components/Footer/Footer';
import { Link } from 'react-router-dom';
import flowchart from "assets/img/choice_flowchart.png";
import MapChart from '../../components/WorldMap/Map';
import DateSlider from '../../components/DateSlider/DateSlider';
import ReactTooltip from "react-tooltip";
import InfoIcon from '@material-ui/icons/Info';
import CustomizedTooltip from '../../components/ToolTip/ToolTip';

import FunctionsIcon from '@material-ui/icons/Functions';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import Timeline from '@material-ui/icons/Timeline';
import BubbleChart from '@material-ui/icons/BubbleChart';


var getDaysArray = function (start, end) {
  for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    arr.push(new Date(dt));
  }
  return arr;
};

const dateRange = getDaysArray(new Date("2020-02-10"), new Date("2021-05-20"));

const dates = [];
dateRange.forEach((d) => {
  dates.push(d.toISOString().split('T')[0])
});

const useStyles = makeStyles(styles);

export default function Dashboard() {

  const classes = useStyles();
  const [content, setContent] = useState("");
  const [value, setValue] = useState(undefined);

  return (
    <div>
      <GridContainer>
        <h1 style={{ padding: '0 15px' }}>
          Modelling Covid-19 Interventions with Machine Learning and SIR Models
        </h1>
        <GridItem xs={12} sm={12} md={8} alignItems="stretch" style={{ display: 'flex' }}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Introduction Video</h4>
            </CardHeader>
            <CardBody className={"videoCard"}>
              <VideoPlayer />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4} alignItems="stretch" style={{ display: 'flex' }}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Summary</h4>
            </CardHeader>
            <CardBody>
              Many models have been implemented in order to predict future infections of Covid-19. Machine learning (ML)
              models and mathematical Susceptible-Infectious-Recovered (SIR) models have provided promising results towards
              accurate predictions. Multiple studies have shown that ML models can outperform variants of
              the SIR-models due to the ability of capturing variance in the data.
              However, recently, new research showed a variant of the SIR model can outperform other deep learning methods
              in predicting new infections after an intervention, such as a lockdown.
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer className="gridLinks">
        <GridItem xs={12} sm={12} md={12} alignItems="stretch" >
          <CardHeader color="primary">
            <Link to="algorithm_LSTM">
              <div className="gridLink">
                <FunctionsIcon />
                <h4 className={classes.cardTitleWhite}>
                  Algorithm for M1 - LSTM based model
              </h4>
              </div>
            </Link>
          </CardHeader>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} alignItems="stretch" >
          <CardHeader color="info">
            <Link onClick={() => window.location.href = "/algorithm_SIR"} >
              <div className="gridLink">
                <InsertChartIcon />
                <h4 className={classes.cardTitleWhite}>
                  Algorithm for M2 - SIR based model
              </h4>
              </div>
            </Link>
          </CardHeader>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} alignItems="stretch" >
          <CardHeader color="rose">
            <Link to="UQ">
              <div className="gridLink">
                <Timeline />
                <h4 className={classes.cardTitleWhite}>
                  Uncertainty Quantification
              </h4>
              </div>
            </Link>
          </CardHeader>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} alignItems="stretch" >
          <CardHeader color="warning">
            <Link to="PolicyMeasures">
              <div className="gridLink">
                <BubbleChart />
                <h4 className={classes.cardTitleWhite}>
                  Analysis of policy measure strength
              </h4>
              </div>
            </Link>
          </CardHeader>
        </GridItem>
      </GridContainer>



      <GridContainer>

        <GridItem xs={12} sm={12} md={12} alignItems="stretch">
          <Card>
            <CardHeader color="warning" className="bodyDark">
              <h4 className={classes.cardTitleWhite}>Stringency of government responses to Covid-19</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h4 style={{ margin: 0, display: "flex", alignItems: "end" }}>
                    {`Stringency Index for all countries`}
                    <CustomizedTooltip>
                      <span style={{ marginLeft: '5px' }}><InfoIcon /></span>
                    </CustomizedTooltip>
                  </h4>
                  <h2 style={{ margin: 0 }}>{value !== undefined ? dates[value] : '2021-05-19'}</h2>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <DateSlider value={value} setValue={setValue} dates={dates} />
                </GridItem>
              </GridContainer>
              <ReactTooltip>{content}</ReactTooltip>
              <MapChart setContent={setContent} ToolTip={ReactTooltip} value={value !== undefined ? value : 474} />

            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6} alignItems="stretch" >
          <Card>
            <CardBody>
              <img style={{ width: '100%' }} src={flowchart} alt="flowchart" />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} alignItems="stretch" style={{ display: 'flex' }}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Recommendations</h4>
            </CardHeader>
            <CardBody>
              For policy makers, it is crucial to know exactly which model to use for what situation. There are multiple aspects here that play a role.
              Before choosing a predictive model to predict the number of confirmed cases, the main aspects that should be considered are (1) the geographical scope, the date range of desired predictions and training data, modelling goal (predict effect of NPIs or predict the number of confirmed cases), data availability and data quality.
              A general flowchart of choices that include these points is displayed in this Figure. First of all, the flow chart starts a choice of geographical scope.
              SIR models are the better choice when it comes to global predictions due to the models' stability and logic regarding modelling epidemics.
              For country-level predictions, the second choice comes to whether predictions will be made on long or short-term. For short-term predictions, ML based models would be the superior choice regarding
              their short term prediction performance. SIR-based models can be used for long-term predictions. The most suitable SIR model variant is also country-specific
              and depends on whether there is data available of recovered and exposed cases for that country.
              For short-term predictions, a choice is made whether the goal is to model NPI scenarios or to predict
              the future cases without NPIs (regular predictions). To clarify, when the goal is to predict the number of cases after a lockdown,
              the choice is made to model NPI scenarios. This modelling can be done with either hybrid model M1 or M2,
              depending on whether the NPI has occurred before in this country and whether there is enough training data.
              Considering that M2 is mostly based on an SIR model enhanced by an LSTM, M2 can handle sparse training data better
              in comparison to M1. However, when training data is sufficient, M1 is able to predict future cases more accurately.
              Lastly, when the goal is to predict future infections without including NPIs, an LSTM can be used.
            </CardBody>
          </Card>
        </GridItem>

      </GridContainer>

      <Footer />
    </div >
  );
}