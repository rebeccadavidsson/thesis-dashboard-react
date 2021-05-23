/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/thesisproject
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/thesisproject/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import DashboardPage from "views/Dashboard/Dashboard.js";
import FunctionsIcon from '@material-ui/icons/Functions';
import AlgorithmLSTM from './notebooks/M1';
import AlgorithmSIR from './notebooks/M2';
// import SIR_LSTM from './notebooks/SIR_LSTM';
import UQ from './notebooks/UQ';
import PolicyMeasures from './notebooks/policymeasures';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import Timeline from '@material-ui/icons/Timeline';
import BubbleChart from '@material-ui/icons/BubbleChart';


const dashboardRoutes = [
  {
    path: "/",
    name: "Master Thesis Project",
    icon: Dashboard,
    component: DashboardPage,
    layout: ""
  },
  {
    path: "/algorithm_LSTM",
    name: "Algorithm LSTM based model, augmented by SIR",
    icon: FunctionsIcon,
    component: AlgorithmLSTM,
    layout: ""
  },
  {
    path: "/algorithm_SIR",
    name: "Algorithm SIR based model, augmented by LSTM",
    icon: InsertChartIcon,
    component: AlgorithmSIR,
    layout: ""
  },
  {
    path: "/UQ",
    name: "Uncertainty Quantification",
    icon: BubbleChart,
    component: UQ,
    layout: ""
  },
  {
    path: "/PolicyMeasures",
    name: "Policy Measures",
    icon: Timeline,
    component: PolicyMeasures,
    layout: ""
  },

];

export default dashboardRoutes;
