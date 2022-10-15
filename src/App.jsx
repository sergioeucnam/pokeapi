import Landing from './components/Landing';
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import Home from './components/Home';
import { PokemonProvider } from './components/Context/PokemonContext';
import CardDetails from './components/Cards/CardDetails';
function App() {
	return (
		<BrowserRouter>
			<PokemonProvider>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/home' element={<Home />} />
					<Route exact path='/details/:id' element={<CardDetails />} />
					<Route path='*' element={<h1>404</h1>} />
				</Routes>
			</PokemonProvider>
		</BrowserRouter>
	);
}

export default App;
