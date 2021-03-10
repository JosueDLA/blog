import React, { useContext } from "react";
import styled from "styled-components";
import ThemeToggleContext from "./ThemeContext";

const SwitchWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .circle {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--accent-secondary);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .circle:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--accent-primary);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .circle {
    background-color: var(--accent-secondary);
  }

  input:checked + .circle:before {
    content: "";
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Toggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeToggleContext);

  return (
    <SwitchWrapper>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          aria-label="Toggle Theme"
          checked={theme === "dark" ? true : false}
        />
        <div className="circle"></div>
      </label>
    </SwitchWrapper>
  );
};

export default Toggle;