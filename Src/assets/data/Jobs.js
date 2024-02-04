import { GiBrain } from 'react-icons/gi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const jobs = [
  {
    jobTitle: "Associate Software Engineer",
    jobSubtitle: "Synoptek LLC",
    date: "07/2022 - 01/2024",
    description:
      "Specialize in building and maintaining data pipelines that enable businesses to make informed decisions based on accurate and timely information.Passionate about designing scalable and efficient data architectures that can handle large volumes of data and support complex data analysis.Worked with a variety of tools and technologies such as Azure Synapse, Snowflake, Analysis Services, Azure Data Factory, Azure DevOps, SQL, Python, Power BI. Python developer, consistently delivering robust solutions and contributing to the success of the data engineering projects.",
    icon: <HiOutlineDesktopComputer />,
    iconStyle: {
      color: "white",
      background: "#dcb723",
    },
    technologies: ["SQL", "Python", "DevOps", "Power BI", "Azure","Synapse Analytics"],
  },
  {
    jobTitle: "Business Intelligence Engineer",
    jobSubtitle: "Synoptek LLC",
    date: "01/2022 - 07/2022",
    description:
      "Worked on python with big data processing frameworks like Apache Spark. PySpark, the Python API for Apache Spark, to leverage the power of Spark for large-scale data processing and analytics.Gained experience of using snowflake a cloud-based data warehousing platform that has gained significant popularity for its unique architecture and features. Design and implemented data models within Power BI, ensuring efficient relationships between tables and the creation of calculated columns or measures for meaningful analytics. Created visually appealing and insightful reports and dashboards using Power BI Desktop. Created and maintained robust pipelines for the ETL(Extract, Transform, Load) processes within Microsoft SQL Server Integration Services. Created multidimensional and tabular model using the Microsoft SQL Serer Analysis Services.",
    icon: <HiOutlineDesktopComputer />,
    iconStyle: {
      color: "white",
      background: "#3877E1",
    },
    technologies: ["Python", "SQL", "Azure Cloud", "API", "DevOps", "Snowflake"],
  },
  {
    jobTitle: "Data Science Intern",
    jobSubtitle: "OneNineAI",
    date: "06/2020 - 09/2020",
    description:
      "Collect, clean, and pre process data from various sources to ensure high-quality datasets for analysis.Conduct exploratory data analysis to uncover patterns, trends, and insights within the datasets. Assist in the development and implementation of machine learning models or statistical algorithms to solve business problems and refine and optimize models for better performance. Feature engineering efforts by identifying relevant variables and creating new features to enhance model accuracy.Developed Intelligent Model of python functions for MLP regressor and Classifier.",
    icon: <GiBrain />,
    iconStyle: {
      color: "white",
      background: "#f44336",
    },
    technologies: ["Python", "MLOps", "Docker", "Fast API", "Rest API", "Flask", "Dtale"],
  },
];

export default jobs;