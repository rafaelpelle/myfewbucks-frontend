import axios from 'axios'

const URL = process.env.URL

export let axiosInstance = axios.create({
	baseURL: URL,
	timeout: 10000,
	headers: {'Access-Control-Allow-Origin': '*'},
})


//////////////////////////////////////////////////////////////////////////////
////////////////////////////// USER REQUESTS /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
export const requestUserLogin = async (email: string, password: string) => {
	let error = ''
	let loginToken = ''
	try {
		const request = await axiosInstance.post('/login', {
			email,
			password,
		})
		loginToken = request.data.loginToken
	} catch(e) {
		const respError = e.response.data.error
		error = respError ? respError : 'It was not possible to sign in.'
	}
	return { error, loginToken }
}
