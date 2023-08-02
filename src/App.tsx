import './App.css'
import { FormBuilder } from "./components/FormBuilder.tsx";
import { FormView } from "./components/FormView.tsx";
import { Grid } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Grid container spacing={2} alignItems="flex-start">
				<Grid item xs={6}>
					<FormBuilder />
				</Grid>
				<Grid item xs={6}>
					<FormView />
				</Grid>
			</Grid>
			<ToastContainer />
		</>
	)
}

export default App
