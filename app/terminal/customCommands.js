import {
  OutputFactory,
  CommandMapping,
  defaultCommandMapping,
} from "javascript-terminal-turtle";

const customCommandMapping = CommandMapping.create({
  ...defaultCommandMapping,
  whoami: {
    function: (state, opts) => {
      const me = "murphy";
      return {
        output: OutputFactory.makeTextOutput(me),
      };
    },
    optDef: {},
  },
  help: {
    function: (state, opts) => {
      const commands =
        "Available commands:\r\nbash\r\ncat\r\ncd\r\nclear\r\ncp\r\necho\r\nhead\r\nhistory\r\nindex\r\nls\r\nmkdir\r\nprintenv\r\nrm\r\nrmdir\r\nsh\r\ntail\r\ntouch\r\nwhoami";
      return {
        output: OutputFactory.makeTextOutput(commands),
      };
    },
    optDef: {},
  },
});

export default customCommandMapping;
