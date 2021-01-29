import React from "react";
import Title from "../common/Title";
import SkillsCards from "./SkillsCards";
import { SkillsWrapper } from "./SkillsItems";

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <SkillsWrapper className="container">
      <Title text="Text" />
      <SkillsCards />
    </SkillsWrapper>
  );
};

export default Skills;
