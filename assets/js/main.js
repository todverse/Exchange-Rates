    let prevRates;
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
		];

		//функция из API
		function CBR_XML_Daily_Ru(rates) {
  		function trend(current, previous) {
  			//функция которая находит разницу между двумя числами
    		if (current > previous) {
    			let procent = previous/100;
    			procent = (current-previous)/procent;
    			return ' ' + procent.toFixed(2) + '% ▲';
    		};
    		if (current < previous) {
    			let procent = previous/100;
    			procent = (current-previous)/procent;
    			return ' ' + procent.toFixed(2) + '% ▼';
    		};
    		return ' 0% ◄ ►';
  		}

  		//перебор ключей в которх хранятся данные о валюте
  		for(valute in rates.Valute) {
  			//элементы в которые будут записываться данные о курсе
  			let elem = document.createElement('div');
  			let elem1 = document.createElement('div');
  			let elem2 = document.createElement('div');
  			let main = document.createElement('div');
  			let info = document.createElement('div');




  			//установка атрибутов для основных блоков
  			info.setAttribute('class', 'info');
  			main.setAttribute('class', 'root-p');
  			main.setAttribute('valute', valute);
        prevRates = rates;


        (async () => { 
              await getPrevState();
              await getPrevState();
              await getPrevState();
              await getPrevState();
              await getPrevState();
              await getPrevState();
              await getPrevState();
              await getPrevState();
              await getPrevState();
              await getPrevState();
            })()


  			//обработка клика по элементу с информацией о курсе для отправки запроса и получения данных за прошлые даты
  			main.addEventListener('click', () => {
          if(main.childNodes.length < 4) {
            main.appendChild(info);
          } else {
            main.removeChild(info);
          }
        });

  			//установка атрибутов для элементов в которых будет записана информация о текущем курсе
  			elem.setAttribute('class', 'col name');
  			elem.innerHTML = `${rates.Valute[valute].Name}`;
  			elem.setAttribute('title', `${valute} ${rates.Valute[valute].NumCode} ${rates.Valute[valute].Name}`);
        

  			elem1.setAttribute('class', 'col');
  			elem1.innerHTML = rates.Valute[valute].Value;

  			

  			elem2.setAttribute('class', 'col razn');
  			elem2.innerHTML = trend(rates.Valute[valute].Value, rates.Valute[valute].Previous);

  			

  			main.appendChild(elem);
  			main.appendChild(elem1);
  			main.appendChild(elem2);


  			document.getElementById('root').appendChild(main);
        async function getPrevState() {
          let infoElem = document.createElement('div');
          let infoElem1 = document.createElement('div');
          let infoElem2 = document.createElement('div');

          infoElem.setAttribute('class', 'col name');
          infoElem2.setAttribute('class', 'col razn');
          infoElem1.setAttribute('class', 'col');

          info.appendChild(infoElem);
          info.appendChild(infoElem1);
          info.appendChild(infoElem2);

          let getPrev = await fetch(`https:${prevRates.PreviousURL}`);
          let res = await getPrev.json();
          prevRates = res;
          let prevDate = new Date(res.Date);
              infoElem.innerHTML = `Курс на 
                          ${prevDate.getDate()} 
                          ${month[prevDate.getMonth()]} 
                          ${prevDate.getFullYear()}`
              infoElem1.innerHTML = res.Valute[main.getAttribute('valute')].Value;
              infoElem2.innerHTML = trend(res.Valute[main.getAttribute('valute')].Value, res.Valute[main.getAttribute('valute')].Previous);
      };
	}
}
