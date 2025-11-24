import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/projects/:id' element={<ProjectDetailPage />} />
			</Routes>
		</Router>
	);
}

export default App;
