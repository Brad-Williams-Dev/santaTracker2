import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="christmas-lights">Lucas & Nolan's Santa Tracker</h1>
                <p className="greeting">Let's find out where Santa is!</p>
                <div className="santa-tracker">
                    <iframe src="https://www.noradsanta.org/embed.html" allowFullScreen mozAllowFullScreen webkitAllowFullScreen></iframe>
                </div>
            </header>
        </div>
    );
}

export default App;
