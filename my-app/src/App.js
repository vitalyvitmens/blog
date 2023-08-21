import logo from './logo.svg'
import styles from './app.module.css'
// import PropTypes from 'prop-types'
// import { useState } from 'react'

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.appHeader}>
				<img src={logo} className={styles.appLogo} alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className={styles.appLink}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}
