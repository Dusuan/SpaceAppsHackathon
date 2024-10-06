import { Box, Grid, Flex } from "@chakra-ui/react";
import ChallengeLanding from "../components/Landing/ChallengeLanding";
import AboutUs from "../components/Landing/AboutUs";
import Ods from "../components/Landing/ODS";

const ODS = {
  1: {
    image: "/Images/ODS 1.jpeg",
    name: "No Poverty",
    description:
      "Eradicate extreme poverty for all people everywhere, measured as people living on less than $1.90 a day. This includes implementing social protection systems, ensuring equal rights to economic resources, and access to basic services such as education, health, and clean water. \n\n Example: Microfinance initiatives, like those in Bangladesh, provide small loans to low-income individuals to start businesses and become financially independent.",
  },
  2: {
    image: "/Images/ODS 2.jpeg",
    name: "Zero Hunger",
    description:
      "End hunger, achieve food security, and improve nutrition, while promoting sustainable agriculture. This goal focuses on doubling agricultural productivity, ensuring access to nutritious food for all, and supporting small-scale farmers, especially in vulnerable areas. \n\nExample: The 'Green Revolution' in India significantly improved agricultural yields and reduced food shortages.",
  },
  3: {
    image: "/Images/ODS 3.jpeg",
    name: "Good Health and Well-being",
    description:
      "Ensure healthy lives and promote well-being for all at all ages. This goal encompasses reducing maternal mortality, combating diseases like HIV/AIDS and malaria, and ensuring access to essential healthcare services. \n\nExample: Vaccination campaigns, such as the polio eradication initiative, have saved millions of lives and prevented diseases from spreading globally.",
  },
  4: {
    image: "/Images/ODS 4.jpeg",
    name: "Quality Education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. This goal aims to provide free primary and secondary education to all children, eliminate gender disparities, and ensure access to technical, vocational, and higher education. \n\nExample: Finland’s world-renowned education system offers free education and focuses on equality in learning outcomes.",
  },
  5: {
    image: "/Images/ODS 5.jpeg",
    name: "Gender Equality",
    description:
      "Achieve gender equality and empower all women and girls. This goal focuses on eliminating discrimination, violence, and harmful practices such as child marriage, while ensuring women's full participation in leadership and decision-making processes. \n\nExample: Rwanda's parliament is composed of over 60% women, making it a global leader in gender equality representation.",
  },
  6: {
    image: "/Images/ODS 6.jpeg",
    name: "Clean Water and Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all. This includes achieving universal access to safe and affordable drinking water, improving water quality, and promoting efficient water use in all sectors. \n\nExample: Water.org provides microloans to communities in developing countries to build wells and sanitation systems, improving access to clean water.",
  },
  7: {
    image: "/Images/ODS 7.jpeg",
    name: "Affordable and Clean Energy",
    description:
      "Ensure access to affordable, reliable, sustainable, and modern energy for all. This goal promotes the expansion of renewable energy sources, energy efficiency, and modern infrastructure to provide energy to remote and developing areas. \n\nExample: Solar power projects in sub-Saharan Africa provide renewable energy to off-grid communities, improving quality of life while reducing reliance on fossil fuels.",
  },
  8: {
    image: "/Images/ODS 8.jpeg",
    name: "Decent Work and Economic Growth",
    description:
      "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all. This goal emphasizes reducing unemployment, especially among youth, promoting entrepreneurship, and improving labor rights. \n\nExample: Programs like 'Youth Business International' help young people around the world access financing, mentoring, and skills to start their businesses.",
  },
  9: {
    image: "/Images/ODS 9.jpeg",
    name: "Industry, Innovation, and Infrastructure",
    description:
      "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation. This goal focuses on enhancing technological capabilities, increasing access to financial services, and ensuring that infrastructure developments are environmentally sustainable. \n\nExample: The construction of high-speed rail networks in Japan has improved transportation efficiency and reduced the carbon footprint of travel.",
  },
  10: {
    image: "/Images/ODS 10.jpeg",
    name: "Reduced Inequalities",
    description:
      "Reduce inequality within and among countries. This goal seeks to ensure that all people, regardless of their age, gender, ethnicity, or economic status, have equal opportunities and reduced barriers to resources and opportunities. \n\nExample: Sweden’s progressive tax system helps redistribute wealth and provides robust social services to reduce income inequality.",
  },
  11: {
    image: "/Images/ODS 11.jpeg",
    name: "Sustainable Cities and Communities",
    description:
      "Make cities and human settlements inclusive, safe, resilient, and sustainable. This goal addresses urban challenges, such as housing shortages, public transportation, and pollution, by promoting smart city initiatives, affordable housing, and sustainable planning. \n\nExample: Copenhagen’s commitment to becoming carbon-neutral by 2025 includes investments in bike infrastructure, green spaces, and renewable energy.",
  },
  12: {
    image: "/Images/ODS 12.jpeg",
    name: "Responsible Consumption and Production",
    description:
      "Ensure sustainable consumption and production patterns. This goal promotes the efficient use of natural resources, reduction of waste, and creation of a circular economy where products are reused, repaired, and recycled. \n\nExample: Patagonia, a clothing company, encourages customers to repair and reuse clothing, reducing waste and promoting responsible consumption.",
  },
  13: {
    image: "/Images/ODS 13.jpeg",
    name: "Climate Action",
    description:
      "Take urgent action to combat climate change and its impacts. This goal calls for global efforts to reduce greenhouse gas emissions, strengthen resilience to climate-related hazards, and integrate climate measures into policies. \n\nExample: The Paris Agreement, adopted by 196 countries, aims to limit global warming to well below 2°C by reducing carbon emissions.",
  },
  14: {
    image: "/Images/ODS 14.jpeg",
    name: "Life Below Water",
    description:
      "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development. This goal emphasizes reducing marine pollution, protecting ecosystems, and ensuring the sustainability of fisheries. \n\nExample: Marine protected areas, such as the Great Barrier Reef Marine Park, help preserve biodiversity and protect vulnerable species.",
  },
  15: {
    image: "/Images/ODS 15.jpeg",
    name: "Life on Land",
    description:
      "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse biodiversity loss. This goal addresses the need for land conservation, reforestation, and the protection of wildlife habitats. \n\nExample: Costa Rica’s reforestation programs have successfully restored large portions of tropical rainforest, protecting biodiversity and combating climate change.",
  },
  16: {
    image: "/Images/ODS 16.jpeg",
    name: "Peace, Justice, and Strong Institutions",
    description:
      "Promote peaceful and inclusive societies, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels. This goal focuses on reducing violence, protecting human rights, and ensuring the rule of law. \n\nExample: South Africa’s post-apartheid Truth and Reconciliation Commission is an example of promoting justice and reconciliation after conflict.",
  },
  17: {
    image: "/Images/ODS 17.jpeg",
    name: "Partnerships for the Goals",
    description:
      "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development. This goal promotes international cooperation, resource mobilization, and capacity building to achieve sustainable development globally. \n\nExample: The Bill & Melinda Gates Foundation partners with governments and organizations worldwide to fight poverty, improve healthcare, and expand educational opportunities.",
  },
};

const Landing = () => {
  return (
    <Box bg={""}>
      <ChallengeLanding />
      <AboutUs />
      <Ods ODS={ODS} />
    </Box>
  );
};

export default Landing;
