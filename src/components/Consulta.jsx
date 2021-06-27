import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Box,
	Paper,
	Button,
	TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#B3E283',
		color: theme.palette.common.black,
		fontWeight: 'bold'
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		width: 1000,
		backgroundColor: 'white',
		border: '1px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3, 4),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	}
}))


export const Consulta = () => {

	const cookies = new Cookies();
	const { info } = useSelector(state => state.info)
	const [page, setPage] = useState(1);
	const rowsPerPage = 5;
	const pag = Math.ceil(info.length / rowsPerPage);
	const [open, setOpen] = useState(false);
	const styles = useStyles();
	const [result, setResult] = useState([]);

	let data = []

	const handleNext = () => {
		if (page < pag) {
			setPage(page + 1)
		}
	}

	const handlePrev = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}

	if (info.length > 5) {
		data = info.slice((page - 1) * rowsPerPage, page * rowsPerPage);
	} else {
		data = info
	}

	const handleSearch = (e) => {

		let searchRepo = document.getElementById('search').value
		let d = []

		if (searchRepo.length > 0) {
			data.filter(info => info.name.substr(0, 3).includes(searchRepo[2])).map(filtro => (
				d.push(filtro)
			))
			setResult(d)
		} else {
			setResult([])
		}
		setOpen(true);
	}

	const body = (

		<div className={styles.modal}>
			<h2 id="simple-modal-title" align="center">5 Resultados más cercanos a la búsqueda de Repositorio</h2>
			<Box m={2}>
				<TableContainer component={Paper}>
					<Table mt="2" aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell align="center">Nombre Repositorio</StyledTableCell>
								<StyledTableCell align="center">Lenguaje</StyledTableCell>
								<StyledTableCell align="center">Branch por Defecto</StyledTableCell>
								<StyledTableCell align="center">URL Git</StyledTableCell>
								<StyledTableCell align="center">Descripción</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{result.length > 0 ?
								result.map(info => (
									<StyledTableRow key={info.id}>
										<StyledTableCell align="center" component="th" scope="row">
											{info.name}
										</StyledTableCell>
										<StyledTableCell align="center">{info.language}</StyledTableCell>
										<StyledTableCell align="center">{info.default_branch}</StyledTableCell>
										<StyledTableCell align="center"><a href={info.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>{info.html_url}</a></StyledTableCell>
										<StyledTableCell align="center">{info.description}</StyledTableCell>
									</StyledTableRow>
								))
								:
								<StyledTableRow align="center">
									<StyledTableCell>
										<Alert severity="error">No hay resultados</Alert>
									</StyledTableCell>
								</StyledTableRow>
							}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</div>
	);

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<div>
			<h2>Información del usuario de GitHub:{cookies.get('usuario_git')}</h2>

			<TextField id="search" placeholder="Buscar Repositorio" disabled={data.length > 0 ? false : true} /><Button disabled={data.length > 0 ? false : true} onClick={handleSearch}><SearchIcon /></Button>

			<Box m={2}>
				<TableContainer component={Paper}>
					<Table mt="2" aria-label="customized table">
						<TableHead >
							<TableRow>
								<StyledTableCell align="center">
									Nombre Repositorio
								</StyledTableCell>

								<StyledTableCell align="center">
									Lenguaje
								</StyledTableCell>

								<StyledTableCell align="center">
									Branch por Defecto
								</StyledTableCell>

								<StyledTableCell align="center">
									URL Git
								</StyledTableCell>

								<StyledTableCell align="center">
									Descripción
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map(info => (
								<StyledTableRow key={info.id}>
									<StyledTableCell align="center" component="th" scope="row">
										{info.name}
									</StyledTableCell>
									<StyledTableCell align="center">{info.language}</StyledTableCell>
									<StyledTableCell align="center">{info.default_branch}</StyledTableCell>
									<StyledTableCell align="center"><a href={info.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>{info.html_url}</a></StyledTableCell>
									<StyledTableCell align="center">{info.description}</StyledTableCell>
								</StyledTableRow>
							))
							}
						</TableBody>
					</Table>
				</TableContainer>
				<Box m={2}>
					<ArrowBackIosIcon style={{ cursor: 'pointer' }} onClick={handlePrev} />
					<ArrowForwardIosIcon style={{ cursor: 'pointer' }} onClick={handleNext} />
				</Box>
				<Box>
					<p>Página: {info.length === 0 ? 0 : page}/{pag}</p>
				</Box>
			</Box>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>


		</div>
	)
}
