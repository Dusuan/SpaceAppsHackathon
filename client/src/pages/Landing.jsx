import { Box, Grid, Flex} from "@chakra-ui/react";
import ChallengeLanding from "../components/Landing/ChallengeLanding";
import AboutUs from "../components/Landing/AboutUs";
import Ods from "../components/Landing/ODS";

const ODS = {
  1: {
      image: "/Images/ODS 1.jpeg",
      name: "No Poverty",
      description: "End poverty in all its forms everywhere."
  },
  2: {
      image: "/Images/ODS 2.jpeg",
      name: "Zero Hunger",
      description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture."
  },
  3: {
      image: "/Images/ODS 3.jpeg",
      name: "Good Health and Well-being",
      description: "Ensure healthy lives and promote well-being for all at all ages."
  },
  4: {
      image: "/Images/ODS 4.jpeg",
      name: "Quality Education",
      description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."
  },
  5: {
      image: "/Images/ODS 5.jpeg",
      name: "Gender Equality",
      description: "Achieve gender equality and empower all women and girls."
  },
  6: {
      image: "/Images/ODS 6.jpeg",
      name: "Clean Water and Sanitation",
      description: "Ensure availability and sustainable management of water and sanitation for all."
  },
  7: {
      image: "/Images/ODS 7.jpeg",
      name: "Affordable and Clean Energy",
      description: "Ensure access to affordable, reliable, sustainable, and modern energy for all."
  },
  8: {
      image: "/Images/ODS 8.jpeg",
      name: "Decent Work and Economic Growth",
      description: "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all."
  },
  9: {
      image: "/Images/ODS 9.jpeg",
      name: "Industry, Innovation, and Infrastructure",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation."
  },
  10: {
      image: "/Images/ODS 10.jpeg",
      name: "Reduced Inequalities",
      description: "Reduce inequality within and among countries."
  },
  11: {
      image: "/Images/ODS 11.jpeg",
      name: "Sustainable Cities and Communities",
      description: "Make cities and human settlements inclusive, safe, resilient, and sustainable."
  },
  12: {
      image: "/Images/ODS 12.jpeg",
      name: "Responsible Consumption and Production",
      description: "Ensure sustainable consumption and production patterns."
  },
  13: {
      image: "/Images/ODS 13.jpeg",
      name: "Climate Action",
      description: "Take urgent action to combat climate change and its impacts."
  },
  14: {
      image: "/Images/ODS 14.jpeg",
      name: "Life Below Water",
      description: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development."
  },
  15: {
      image: "/Images/ODS 15.jpeg",
      name: "Life on Land",
      description: "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss."
  },
  16: {
      image: "/Images/ODS 16.jpeg",
      name: "Peace, Justice, and Strong Institutions",
      description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels."
  },
  17: {
      image: "/Images/ODS 17.jpeg",
      name: "Partnerships for the Goals",
      description: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development."
  },
};

const Landing = () =>{
 return (
    <Box bg={''}>
      <ChallengeLanding/>   
      <AboutUs/>
      <Ods ODS={ODS}/>
    </Box>
 );
}



export default Landing;