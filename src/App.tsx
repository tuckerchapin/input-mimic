import * as React from 'react';
import './App.css';

interface Props {}

interface State {
    inputValue: string,
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            inputValue: "",
        };
    }

    public render() {
        return (
            <div id="app-container">
                <input
                    id="master"
                    className="mirror-input"
                    placeholder="Type something here..."
                    value={this.state.inputValue}
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => this.setState({inputValue: e.target.value})
                    }
                    autoFocus
                />
                <input
                    id="replica"
                    className="mirror-input"
                    placeholder="and it will be reflected here."
                    disabled
                    value={this.state.inputValue}
                />
            </div>
        );
    }
}

export default App;
