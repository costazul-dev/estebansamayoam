import React from "react";

import NavBar from "../PageTools/NavBar/NavBar";
import ContentsContainer from "../ContentTools/ContentContainer/ContentsContainer";
import Title from "../PageTools/Title/Title";

import styles from "./Experiences.module.css";

const experiences = [
  {
    title: "Winning Presence® - Growth Program for Young Professionals - Remote",
    timePeriod: "Jun 2023 - Present",
    description: "Full Stack Development Lead",
    bullets: [
      "Analyzed data to link personal branding with career success, enhancing product features.",
      "Designed the MVP’s UX/UI via Figma, ensuring ease of use and functionality.",
      "Built a scalable React-based web app, setting a strong foundation for future development.",
      "Implemented Firebase for secure, seamless backend support, gaining test users’ trust with their information.",
      "Deployed REST API and OpenAI for real-time user feedback, enhancing customer satisfaction.",
    ],
  },
  {
    title: "Simplo - Ciudad de Mexico, Remote",
    timePeriod: "Jan 2023 - Mar 2023",
    description: "Software Development Engineer (Freelance)",
    bullets: [
      "Automated web scraping in Python, enriching 1,000+ product entries for enhanced market analysis.",
      "Created data cleaning and spreadsheet compilation software making data amendable for analysis (Pandas).",
      "Implemented OpenAI for SEO-friendly descriptions, boosting search visibility and user engagement.",
      "Trained staff on software debugging, and customization, providing longevity to the program (Leadership).",
      "Prompted an increase in website usage and sales by more than 15% (Google Analytics, Shopify).",
    ],
  },
  {
    title: "Smith & Associates - San Jose, CA",
    timePeriod: "Jun 2022 - Aug 2022",
    description: "Sales Intern",
    bullets: [
      "Prospected 300 companies and averaged 400 calls/week, expanding sales funnel.",
      "Conducted SWOT and cost analyses, streamlining negotiations and boosting client satisfaction.",
      "Established 20 relationships and closed $100k deals, fortifying long-term revenue.",
      "Opened $1M+ potential annual profit accounts, elevating financial growth prospects.",
    ],
  },
  {
    title: "Swingbeats - Santa Clara, CA",
    timePeriod: "May 2021 - Aug 2022",
    description: "Chief Financial Officer | Product Manager",
    bullets: [
      "Created the 21-22 fiscal year budget from scratch, facilitating successful venture capital fundraising efforts.",
      "Strategized business goals and coordinated team efforts, fostering alignment, and meeting key deadlines.",
      "Designed the company's logo and UX strategy, enhancing brand consistency and user engagement.",
    ],
  },
];

const Experiences = () => {
  console.log(experiences);
  return (
    <div className={styles.Experiences}>
      <NavBar />
      <div className={styles.Content}>
        <div className={styles.TitleContainer}>
          <Title title="Experiences" />
        </div>
        <div className={styles.ContentsContainer}>
          <ContentsContainer list={experiences}/>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
