import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  text-align: center;
  border-top: solid 2px var(--text-primary);
  color: var(--text-tertiary);
  top: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  background: inherit;

  @media screen and (${({ theme }) => theme.media.extraLarge}) {
    margin-top: 3em;
  }

  @media screen and (${({ theme }) => theme.media.medium}) {
    margin-top: 3em;
  }

  .major {
    background: inherit;
    font-size: 2rem;
    position: relative;
    top: -0.65em;
    display: inline;
    padding: 0 1em 0 1em;
  }
`;

export interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <Header className={className}>
      <h2 className="major">{text}</h2>
    </Header>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
