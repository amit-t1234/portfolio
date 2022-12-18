import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useState } from 'react';
import output from '../../output.json';

const TerminalController = ({ darkMode }) => {
    const [prompt, setPrompt] = useState('iamthakuramit@desktop:~$');
    const [history, setHistory] = useState(output["clear"]);
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState(null);
    let message = null;

    const emailBackend = async (email, message) => {
        try {
            const data = await fetch('https://sheet.best/api/sheets/a6b602e8-b060-4386-b32f-f4ee270a3625', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, message, created_at: new Date() }),
            });
            console.log(data);
        } catch {
            console.error('Error:', error);
        }
    }

    const runCommand = async (terminalInput) => {
        const current = [];
        if (step === 1) {
            setEmail(terminalInput);
            current.push(...history, { type: "input", data: terminalInput, prompt: prompt });
            setPrompt('Enter your Message:');
            setStep(2);
        } else if (step === 2) {
            message = terminalInput;
            await emailBackend(email, message);
            current.push(...history, { type: "input", data: terminalInput, prompt: prompt }, { data: 'Contact form successfully submitted!' });
            setPrompt('iamthakuramit@desktop:~$');
            setStep(0);
        } else {
            switch (terminalInput) {
                case "":
                    current.push(...history, { type: "input", data: terminalInput, prompt: prompt });
                    break;
                case "help":
                    current.push(...history, { type: "input", data: terminalInput, prompt: prompt }, ...output[terminalInput]);
                    break;
                case "about":
                    current.push(...history, { type: "input", data: terminalInput, prompt: prompt }, ...output[terminalInput]);
                    break;
                case "clear":
                    break;
                case "contact":
                    current.push(...history, { type: "input", data: terminalInput, prompt: prompt })
                    setPrompt('Enter your Email:');
                    setStep(1);
                    break;
                default:
                    current.push(...history, { type: "input", data: terminalInput, prompt: prompt }, { data: `${terminalInput} is not recognized as an internal or external command` }, { data: `Type "help" for the list of available commands` })
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
                            line.type === 'input' ? <div className="react-terminal-line react-terminal-input" data-terminal-prompt={line.prompt}>{ line.data }</div>: <p className='swap code bg-transparent mb-1'>{ line.data }</p>
                        ))
                    }
                </TerminalOutput>
            </Terminal>
        </section>
    );
}

export default TerminalController;