import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('')
	const [temperature, setTemperature] = useState('')
	const [weather, setWeather] = useState('')

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=4707c215225f3783a2e45a56dd73e1b2'
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name)
				setTemperature(Math.round(main.temp))
				setWeather(weather[0].description)
			})
	}, [])

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{city}{' '}
					{new Date().toLocaleString('ru', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</div>
				<div>
					{temperature}
					{'°C,'} {weather}
				</div>
			</div>
		</div>
	)
}

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	// position: fixed;
	bottom: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	background-color: #fff;
	box-shadow: 0px 2px 17px #000;
`