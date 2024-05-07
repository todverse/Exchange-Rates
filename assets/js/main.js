//массив для получения месяца из даты
let month = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря',
]

let prevRates

let days = 8

let valt = {}
let valute_c

function render(valt) {
	let table = document.getElementsByClassName('render_table')[0]
	table.innerHTML = ''
	Object.keys(valt).forEach((val, index) => {
		// console.log(val)
		let valutes = document.createElement('div')
		valutes.setAttribute('class', 'flex_col')

		let name = document.createElement('p')
		name.setAttribute('class', 'col')
		name.setAttribute('title', `${valt[val].name} ${val}`)
		name.innerHTML = `${valt[val].name} ${val}`
		valutes.appendChild(name)

		let vals = document.createElement('p')
		vals.setAttribute('class', 'col')
		vals.innerHTML = valt[val].value
		valutes.appendChild(vals)

		let trend = document.createElement('p')
		trend.setAttribute('class', 'col')
		trend.innerHTML = valt[val].trend
		valutes.appendChild(trend)

		table.appendChild(valutes)

		// console.log(valt[val])
	})
}
function render_select(valute_c) {
	let to_select = document.getElementsByClassName('convert_to_select')[0]
	Object.keys(valute_c).forEach((val,index) => {
		let option_to = document.createElement('option')
		option_to.innerHTML = `${valt[val].name} ${val}`
		option_to.setAttribute('value', valt[val].value)

		to_select.appendChild(option_to)
		if(index == 0) document.getElementsByClassName('label_to')[0].innerHTML = `${valt[val].name} ${val}`
	})
}

//функция из API
async function CBR_XML_Daily_Ru(rates) {
	function trend(current, previous) {
		//функция которая находит разницу между двумя числами
		if (current > previous) {
			let procent = previous/100
			procent = (current-previous)/procent
			return ' ' + procent.toFixed(2) + '% ▲'
		}
		if (current < previous) {
			let procent = previous/100
			procent = (current-previous)/procent
			return ' ' + procent.toFixed(2) + '% ▼'
		}
		return ' 0% ◄ ►'
	}

	//перебор ключей в которх хранятся данные о валюте
	for(valute in rates.Valute) {
		valt[valute] = {
			name: rates.Valute[valute].Name,
			num_code: rates.Valute[valute].NumCode,
			valute: valute,
			value: rates.Valute[valute].Value,
			trend: trend(rates.Valute[valute].Value, rates.Valute[valute].Previous)
		}
		
		prevRates = rates;

		// for(let i = 0; i < days; i++) {			
		// 	let getPrev = await fetch(`https:${prevRates.PreviousURL}`)
		// 	let res = await getPrev.json()
		// 	prevRates = res
		// 	let prevDate = new Date(res.Timestamp)

		// 	valt[valute][Number(prevDate)] = {
		// 		name: res.Valute[valute].Name,
		// 		num_code: res.Valute[valute].NumCode,
		// 		valute: valute,
		// 		value: res.Valute[valute].Value,
		// 		trend: trend(res.Valute[valute].Value, res.Valute[valute].Previous)
		// 	}
		// }
	}
	valute_c = JSON.parse(JSON.stringify(valt))
	render(valt)
	render_select(valute_c)
}


