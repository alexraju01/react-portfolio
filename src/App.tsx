import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<Router>
			<Header />
			<main className='min-h-screen p-4'></main>
		</Router>
	);
}

export default App;
