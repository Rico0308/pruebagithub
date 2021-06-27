import { types } from '../types/types';
import Swal from 'sweetalert2'

export const startNewUser = (user) => {
	return async (dispatch) => {
		fetch(`https://api.github.com/users/${user}/repos`)
		.then(res => res.json())
		.then(data => {
			if (data.length === 0 || data.message === "Not Found") {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: `El usuario ${user} no existe o no tiene repositorios`,
				})
				dispatch(addInfo([]))
			}else{
				dispatch(addInfo(data))
			}
		})
	}
}

export const addInfo = (info) => ({
	type: types.infoLoad,
	payload: info
})


