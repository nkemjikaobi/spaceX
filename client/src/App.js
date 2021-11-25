import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Launch from './components/Launch';
import Launches from './components/Launches';
import logo from './logo.png';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className='container'>
					<img src={logo} alt='SpaceX' />
					<Routes>
						<Route path='/' element={<Launches />} />
						<Route path='/launch/:flight_number' element={<Launch />} />
					</Routes>
				</div>
			</Router>
		</ApolloProvider>
	);
};

export default App;
