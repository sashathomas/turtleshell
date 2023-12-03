import React from 'react';
import PropTypes from 'prop-types';
import PromptSymbol from '../input/PromptSymbol';
import OutputContainer from './OutputContainer';
import TextCommandWrapper from './TextCommandWrapper';

const HeaderOutput = ({ content, promptSymbol }) => {
  const displayCwd = content.cwd === "/home/murphy" ? "~" : content.cwd;

  return (
    <OutputContainer>
      <PromptSymbol>
        {promptSymbol}{displayCwd}$
      </PromptSymbol>
      <TextCommandWrapper>{content.command}</TextCommandWrapper>
    </OutputContainer>
  );
};

HeaderOutput.propTypes = {
  cwd: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  promptSymbol: PropTypes.string.isRequired
};

export default HeaderOutput;
