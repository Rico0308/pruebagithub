import React from 'react'
import { Grid, FormGroup, TextField, Box, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cookies from 'universal-cookie';
import { startNewUser } from '../actions/git';
import { useDispatch } from 'react-redux';

export const FormUser = () => {
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			name: '',
			idcard: '',
			email: '',
			date: '',
			usergit: '',
		},
		//Validación con Yup
		validationSchema: Yup.object({
			name: Yup.string()
				.required('Nombre Requerido'),
			idcard: Yup.string()
				.required('Cédula Requerida'),
			email: Yup.string().email('Email Inválido').required('Email Requerido'),
			date: Yup.string()
				.required('Fecha Nacimiento Requerida'),
			usergit: Yup.string()
				.required('Usuario de GitHub Requerido'),
		}),
		onSubmit: values => {
			const cookies = new Cookies();
			cookies.set('nombre', values.name, { path: '/' })
			cookies.set('cedula', values.idcard, { path: '/' })
			cookies.set('email', values.email, { path: '/' })
			cookies.set('fecha_nacimiento', values.date, { path: '/' })
			cookies.set('usuario_git', values.usergit, { path: '/' })
			dispatch(startNewUser(values.usergit))
			formik.handleReset()
		},
	});

	return (
		<Grid item xs={6} align="center">
			<h2>Form User</h2>
			<form onSubmit={formik.handleSubmit}>
				<FormGroup >
					<TextField
						id="name"
						name="name"
						label="Nombre y Apellido"
						variant="outlined"
						margin="normal"
						autoComplete="off"
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
					{formik.errors.name ? <Alert severity="error">{formik.errors.name}</Alert> : null}

					<TextField
						id="idcard"
						name="idcard"
						type="number"
						label="Cedula"
						variant="outlined"
						margin="normal"
						autoComplete="off"
						value={formik.values.idcard}
						onChange={formik.handleChange}
					/>
					{formik.errors.idcard ? <Alert severity="error">{formik.errors.idcard}</Alert> : null}

					<TextField
						id="email"
						name="email"
						label="Correo"
						variant="outlined"
						margin="normal"
						autoComplete="off"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{formik.errors.email ? <Alert severity="error">{formik.errors.email}</Alert> : null}

					<TextField
						id="date"
						name="date"
						label="Fecha de Nacimiento"
						type="date"
						InputLabelProps={{
							shrink: true,
						}}
						variant="outlined"
						margin="normal"
						value={formik.values.date}
						onChange={formik.handleChange}
					/>
					{formik.errors.date ? <Alert severity="error">{formik.errors.date}</Alert> : null}

					<TextField
						id="usergit"
						name="usergit"
						label="Usuario de Github"
						variant="outlined"
						margin="normal"
						autoComplete="off"
						value={formik.values.usergit}
						onChange={formik.handleChange}
					/>
					{formik.errors.usergit ? <Alert margin="normal" severity="error">{formik.errors.usergit}</Alert> : null}
					<Box m={2}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							Enviar
						</Button>
					</Box>
				</FormGroup>
			</form>


		</Grid>
	)
}
