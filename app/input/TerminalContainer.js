import styled from 'styled-components';

const TerminalContainer = styled.div`
  & > :last-child {
    padding-bottom: ${({ theme }) => theme.spacing};
  }
  height: ${({ theme }) => theme.height};
  width: ${({ theme }) => theme.width};
  line-height: 1.3em;
  padding: 25px;
  overflow-y: scroll;
  color: ${({ theme }) => theme.outputColor};
  background: ${({ theme }) => theme.background};
  font-family: Roboto Mono;
  font-size: ${({ theme }) => theme.fontSize};
  border-radius: 5px;
  background-image: ${({ theme }) => theme.url};
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default TerminalContainer;
