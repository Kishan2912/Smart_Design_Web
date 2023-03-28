import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Css/login.css"

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false);

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		console.log(response)

		const data = await response.json()
		console.log(data)

		console.log("Data", data)

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='login'>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<div className='login_password'>
					<input
						id="password"
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<button
						style={{
							// position: 'absolute',
							// top: '50%',
							// right: '10px',
							// transform: 'translateY(-50%)',
							background: 'none',
							border: 'none',
							color: '#333',
							cursor: 'pointer',
						}}
						type="button"
						onClick={togglePasswordVisibility}
					>
						{showPassword ? 'Hide' : 'Show'}
					</button>
				</div>
				<br />
				<input type="submit" value="Login" />
			</form>

			<h3>do you have an account?</h3>
			<Link to="/register">Register</Link>
		</div>
	)
}

export default Login