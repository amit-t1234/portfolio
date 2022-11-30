import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useState } from 'react';
import output from '../../output.json';

const TerminalController = ({ darkMode }) => {
    let prompt = 'iamthakuramit@desktop:~$';
    // const [prompt, setPrompt] = useState('iamthakuramit@desktop:~$');
    const [history, setHistory] = useState(output["clear"]);
    let contactFormStep = 0;
    let email = null;
    let message = null;

    const emailBackend = (email, message) => {
        console.log(email, message);
    }

    const runCommand = (terminalInput) => {
        const current = [];
        switch (terminalInput) {
            case "help":
                current.push(...history, `input:${terminalInput}`, ...output[terminalInput]);
                break;
            case "clear":
                break;
            case "contact":
                current.push(...history, `input:${terminalInput}`)
                prompt = 'Enter your Email:';
                contactFormStep = 1;
                break;
            default:
                if (contactFormStep === 1) {
                    email = terminalInput;
                    current.push(...history, `input:${terminalInput}`);
                    prompt = 'Enter your Message:';
                } else if (contactFormStep === 2) {
                    message = terminalInput;
                    current.push(...history, `input:${terminalInput}`);
                    prompt = 'iamthakuramit@desktop:~$';
                    emailBackend(email, message);
                } else {
                    current.push(...history, `input:${terminalInput}`, `${terminalInput} is not recognized as an internal or external command`, `Type "help" for the list of available commands`)
                }
        }
        setHistory(current);
    }
    // Terminal has 100% width by default so it should usually be wrapped in a container div
    return (
        <section className="light-bg">
            <Terminal name='Tour Terminal (Under Development)' prompt={prompt} colorMode={darkMode ? ColorMode.Dark: ColorMode.Light} onInput={terminalInput => runCommand(terminalInput)}>
                <TerminalOutput>
                    {
                        history.map(line => (
                            line.indexOf('input:') === 0 ? <div className="react-terminal-line react-terminal-input" data-terminal-prompt={prompt}>{ line.replace('input:', '') }</div>: <p className='swap code bg-transparent mb-1'>{ line }</p>
                        ))
                    }
                </TerminalOutput>
            </Terminal>
        </section>
    );
}

export default TerminalController;