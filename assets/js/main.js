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
	try {
		let table = document.getElementsByClassName('render_table')[0]
		table.innerHTML = `<div class="flex_col">
		<h3 class="col">Валюта</h3>
		<h3 class="col">Курс</h3>
		<h3 class="col">Тренд</h3>
	</div>`
		Object.keys(valt).forEach((val, index) => {
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
		})
	} catch(e) {
		setTimeout(() => {
			render(valt)
		}, 1000)
	}
}
function render_select(valute_c) {
	try {
		document.getElementsByClassName('main')[0].style.display = 'block'
		document.getElementsByClassName('loader')[0].style.display = 'none'
		let to_select = document.getElementsByClassName('convert_to_select')[0]
		Object.keys(valute_c).forEach((val,index) => {
			let option_to = document.createElement('option')
			option_to.innerHTML = `${valt[val].name} ${val}`
			option_to.setAttribute('value', valt[val].value)

			to_select.appendChild(option_to)
			if(index == 0) document.getElementsByClassName('label_to')[0].innerHTML = `${valt[val].name} ${val}`
		})
	} catch(e) {
		setTimeout(() => {
			render_select(valute_c)
		}, 1000)
	}
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
	}
	valute_c = JSON.parse(JSON.stringify(valt))
	setTimeout(() => {
		render(valt)
		render_select(valute_c)
	}, Math.floor(Math.random() * (3 - 1) + 1)* 1000)
}


