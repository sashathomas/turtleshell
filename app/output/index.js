import { OutputType } from 'javascript-terminal-turtle';
import TextOutput from './TextOutput';
import TextErrorOutput from './TextErrorOutput';
import HeaderOutput from './HeaderOutput';

export default {
  [OutputType.TEXT_OUTPUT_TYPE]: TextOutput,
  [OutputType.TEXT_ERROR_OUTPUT_TYPE]: TextErrorOutput,
  [OutputType.HEADER_OUTPUT_TYPE]: HeaderOutput
};
