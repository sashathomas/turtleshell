import React, { Component } from 'react';
import PromptSymbol from './PromptSymbol';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  flex: 1;
  border: 0;
  box-sizing: border-box;
  outline: none;
  color: ${({ theme }) => theme.commandColor};
  background: #00000000;
  font-size: 1em;
  font-family: Roboto Mono;
  padding: 0;
`;

class CommandInput extends Component {
  focus() {
    this.input.focus();
  }

  render() {
    const { autoFocus, promptSymbol, value, onChange, onSubmit, onKeyDown, cwd } = this.props;
    const displayCwd = cwd === "/home/murphy" ? "~" : cwd;
    return (
      <div className={'terminalInput'}>
        <StyledForm
          onKeyDown={onKeyDown}
          onSubmit={e => {
            e.preventDefault();
            onSubmit(this.input.value);
          }}
        >
          <PromptSymbol>{promptSymbol}{displayCwd}$</PromptSymbol>
          <StyledInput
            autoFocus={autoFocus}
            onChange={e => {
              e.persist();
              onChange(e);
            }}
            value={value}
            ref={ref => (this.input = ref)}
          />
        </StyledForm>
      </div>
    );
  }
};

CommandInput.propTypes = {
  autoFocus: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  cwd: PropTypes.string.isRequired,
  promptSymbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default CommandInput;
