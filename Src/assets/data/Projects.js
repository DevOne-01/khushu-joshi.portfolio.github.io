import PortfolioThumbnail from '../images/portfolio.png';
import ReactIcon from '../images/react-icon.png';
import SassIcon from '../images/sass-icon.png';
import HTMLIcon from '../images/html-icon.png';
import CSSIcon from '../images/css-icon.png';
import JSIcon from '../images/js-icon.png';
import DataLakeThumbnail from '../images/Data Lake.png';
import DataverseIcon from '../images/dataverse.png';
import DataLakeIcon from '../images/datalakeicon.png';
import DataFactoryIcon from '../images/ADF.png';
import SynapseIcon from '../images/synapse.png';
import SQLDBIcon from '../images/azuresqldb.png';
import PowerBIIcon from '../images/powerbi.png';
import SalesForecastThumbnail from '../images/SalesDashboard.png';
import Dynamics365Icon from '../images/Dynamics365.png';
import OneNineAIThumbnail from '../images/OneNineAI.png';
import PythonIcon from '../images/python.png';
import FastAPIIcon from '../images/fastapi.png';
import DockerIcon from '../images/docker.png';
import PandasProfilingIcon from '../images/pandas profiling.png';
import DeepfakesThumbnail from '../images/deepfakes.png';
import XGBoostIcon from "../images/xgboost.png";

const projects = [
    {
      title: "Data Lake Implementation",
      thumbnailSrc: DataLakeThumbnail,
      technologies: [
        {
          icon: DataverseIcon,
          title: "Dataverse",
        },
        {
          icon: DataLakeIcon,
          title: "ADLS Gen 2",
        },
        {
          icon: DataFactoryIcon,
          title: "ADF",
        },
        {
          icon: SynapseIcon,
          title: "Azure Synapse",
        },
        {
          icon: SQLDBIcon,
          title: "Azure SQL DB",
        },
        {
          icon: PowerBIIcon,
          title: "Power BI",
        },
      ],
      description:
        "Data export service from CE (Dynamics CRM) was about to deprecate in March 2023. Implemented end to end data lake solution for getting the data from the ERP system to the Azure SQL database. Created an Azure Synapse Link in the dataverse to extract the data from the various entities of the CE system and load into the serverless SQL pool in the synapse data warehouse. Applied various transformation steps to get the insightful data and to load into the Azure SQL database by creating the pipelines. Applied various transformation steps to get the insightful data and to load into the Azure SQL database by creating the pipelines. Prepared a meaningful data by creating virtual tables and views and loaded the data into the tabular cube / Azure Analysis Services. Using CI/CD tools such as Azure DevOps, to easily streamline the workflows, detect and resolve issues quickly, and ensure the reliability of the software. Developed insightful Power BI reports by transforming tabular data, facilitating in-depth analysis, and supporting informed decision-making for diverse clients and stakeholders.",
    },
    {
      title: "Power BI Report Development for forecasting Sales data",
      thumbnailSrc: SalesForecastThumbnail,
      technologies: [
        {
          icon: Dynamics365Icon,
          title: "Dynamics 365",
        },
        {
          icon: SQLDBIcon,
          title: "Azure SQL DB",
        },
        {
          icon: PowerBIIcon,
          title: "Power BI",
        },
      ],
      description:
        "Utilized Power BI to generate forecast reports that analyze sales data from Dynamics CRM. Identified and visualized sales trends over specific time periods to aid in strategic decision-making. Employed advanced forecasting models within Power BI to predict future sales trends based on historical Dynamics CRM data.Created visually compelling Power BI reports to represent forecasted sales data, incorporating key performance metrics for a comprehensive overview.Integrated seamlessly with Dynamics CRM to extract, transform, and load (ETL) sales data into Power BI for real-time and accurate forecasting.Implemented scenario analysis within Power BI, allowing stakeholders to explore different sales scenarios and assess the potential impact on overall forecasts.",
    },
    {
      title: "No Code AI Platform (AI as a Service - AIaaS)",
      thumbnailSrc: OneNineAIThumbnail,
      technologies: [
        {
          icon: PythonIcon,
          title: "Python",
        },
        {
          icon: FastAPIIcon,
          title: "Fast API",
        },
        {
          icon: DockerIcon,
          title: "Docker",
        },
        {
          icon: PandasProfilingIcon,
          title: "Pandas Profiling",
        },
      ],
      description:
        "Dashboard that enables automated and no-code machine learning and natural language processing (NLP) algorithms. We utilized libraries such as scikit-learn, XGBoost, dtale, pandas profiling, and Flask APIs. Additionally, I played a role in containerizing and deploying the application using Docker. Furthermore, I contributed to the development of an Intelligent Model consisting of Python functions for MLP regressor and classifier.",
    },
    {
      title: "Deepfakes Classification",
      thumbnailSrc: DeepfakesThumbnail,
      technologies: [
        {
          icon: PythonIcon,
          title: "Python",
        },
        {
          icon: XGBoostIcon,
          title: "Classifier",
        },
      ],
      description:
        "Detection of Deep Fakes using a hybrid neural network architecture : The Deep Fakes out there need to be kept in check and for that very reason we need to elevate our detection techniques too, in order to tackle them.This project requires studying the various implemented detection schemes and use the insights to devise a new and possibly better hybrid architecture for the detection of Deep Fakes.",
    },
    {
      title: "Porfolio",
      thumbnailSrc: PortfolioThumbnail,
      technologies: [
        {
          icon: ReactIcon,
          title: "React",
        },
        {
          icon: SassIcon,
          title: "Sass",
        },
        {
          icon: JSIcon,
          title: "JavaScript",
        },
        {
          icon: HTMLIcon,
          title: "HTML",
        },
        {
          icon: CSSIcon,
          title: "CSS",
        },
      ],
      description:
        "The portfolio is designed and developed from scratch taking some inspiration from designs on Dribble. The website is developed using ReactJS which allows for quick, efficient and consistent UI changes across the board. Designed in Figma, the website features a modern monochromatic design with an intuitive UX. ",
    },
  ];
  
  export default projects;
