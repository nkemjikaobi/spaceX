import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Launches from './components/Launches';
import logo from './logo.png';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div className='container'>
				<img src={logo} alt='SpaceX' />
				<Launches />
			</div>
		</ApolloProvider>
	);
};

export default App;
