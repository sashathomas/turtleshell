import {
    OutputFactory, CommandMapping, defaultCommandMapping
} from 'javascript-terminal-turtle';

const customCommandMapping = CommandMapping.create({
    ...defaultCommandMapping,
    'whoami': {
        'function': (state, opts) => {
            const experience = "murphy";
            return {
                output: OutputFactory.makeTextOutput(experience)
            };
        },
        'optDef': {}
    },
    ...defaultCommandMapping,
});


export default customCommandMapping;