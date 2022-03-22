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



        let infoElem = document.createElement('div');
        let infoElem1 = document.createElement('div');
        let infoElem2 = document.createElement('div');

        let infoElem01 = document.createElement('div');
        let infoElem11 = document.createElement('div');
        let infoElem21 = document.createElement('div');

        let infoElem02 = document.createElement('div');
        let infoElem12 = document.createElement('div');
        let infoElem22 = document.createElement('div');

        let infoElem03 = document.createElement('div');
        let infoElem13 = document.createElement('div');
        let infoElem23 = document.createElement('div');

        let infoElem04 = document.createElement('div');
        let infoElem14 = document.createElement('div');
        let infoElem24 = document.createElement('div');

        let infoElem05 = document.createElement('div');
        let infoElem15 = document.createElement('div');
        let infoElem25 = document.createElement('div');

        let infoElem06 = document.createElement('div');
        let infoElem16 = document.createElement('div');
        let infoElem26 = document.createElement('div');

        let infoElem07 = document.createElement('div');
        let infoElem17 = document.createElement('div');
        let infoElem27 = document.createElement('div');

        let infoElem08 = document.createElement('div');
        let infoElem18 = document.createElement('div');
        let infoElem28 = document.createElement('div');

        let infoElem09 = document.createElement('div');
        let infoElem19 = document.createElement('div');
        let infoElem29 = document.createElement('div');


        infoElem.setAttribute('class', 'col name');
        infoElem2.setAttribute('class', 'col razn');
        infoElem1.setAttribute('class', 'col');

        infoElem01.setAttribute('class', 'col name');
        infoElem21.setAttribute('class', 'col razn');
        infoElem11.setAttribute('class', 'col');

        infoElem02.setAttribute('class', 'col name');
        infoElem22.setAttribute('class', 'col razn');
        infoElem12.setAttribute('class', 'col');

        infoElem03.setAttribute('class', 'col name');
        infoElem23.setAttribute('class', 'col razn');
        infoElem13.setAttribute('class', 'col');

        infoElem04.setAttribute('class', 'col name');
        infoElem24.setAttribute('class', 'col razn');
        infoElem14.setAttribute('class', 'col');

        infoElem05.setAttribute('class', 'col name');
        infoElem25.setAttribute('class', 'col razn');
        infoElem15.setAttribute('class', 'col');

        infoElem06.setAttribute('class', 'col name');
        infoElem26.setAttribute('class', 'col razn');
        infoElem16.setAttribute('class', 'col');

        infoElem07.setAttribute('class', 'col name');
        infoElem27.setAttribute('class', 'col razn');
        infoElem17.setAttribute('class', 'col');

        infoElem08.setAttribute('class', 'col name');
        infoElem28.setAttribute('class', 'col razn');
        infoElem18.setAttribute('class', 'col');

        infoElem09.setAttribute('class', 'col name');
        infoElem29.setAttribute('class', 'col razn');
        infoElem19.setAttribute('class', 'col');

        info.appendChild(infoElem);
        info.appendChild(infoElem1);
        info.appendChild(infoElem2);

        info.appendChild(infoElem01);
        info.appendChild(infoElem11);
        info.appendChild(infoElem21);

        info.appendChild(infoElem02);
        info.appendChild(infoElem12);
        info.appendChild(infoElem22);

        info.appendChild(infoElem03);
        info.appendChild(infoElem13);
        info.appendChild(infoElem23);

        info.appendChild(infoElem04);
        info.appendChild(infoElem14);
        info.appendChild(infoElem24);

        info.appendChild(infoElem05);
        info.appendChild(infoElem15);
        info.appendChild(infoElem25);

        info.appendChild(infoElem06);
        info.appendChild(infoElem16);
        info.appendChild(infoElem26);

        info.appendChild(infoElem07);
        info.appendChild(infoElem17);
        info.appendChild(infoElem27);

        info.appendChild(infoElem08);
        info.appendChild(infoElem18);
        info.appendChild(infoElem28);

        info.appendChild(infoElem09);
        info.appendChild(infoElem19);
        info.appendChild(infoElem29);



  			//установка атрибутов для основных блоков
  			info.setAttribute('class', 'info');
  			main.setAttribute('class', 'root-p');
  			main.setAttribute('valute', valute);
        prevRates = rates;


        (async () => { 
              await getPrevState(infoElem, infoElem1, infoElem2);
              await getPrevState(infoElem01, infoElem11, infoElem21);
              await getPrevState(infoElem02, infoElem12, infoElem22);
              await getPrevState(infoElem03, infoElem13, infoElem23);
              await getPrevState(infoElem04, infoElem14, infoElem24);
              await getPrevState(infoElem05, infoElem15, infoElem25);
              await getPrevState(infoElem06, infoElem16, infoElem26);
              await getPrevState(infoElem07, infoElem17, infoElem27);
              await getPrevState(infoElem08, infoElem18, infoElem28);
              await getPrevState(infoElem09, infoElem19, infoElem29);
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
  			elem.innerHTML = `${valute}`;
  			elem.setAttribute('title', `${valute} ${rates.Valute[valute].NumCode} ${rates.Valute[valute].Name}`);
        

  			elem1.setAttribute('class', 'col');
  			elem1.innerHTML = rates.Valute[valute].Value;

  			

  			elem2.setAttribute('class', 'col razn');
  			elem2.innerHTML = trend(rates.Valute[valute].Value, rates.Valute[valute].Previous);

  			

  			main.appendChild(elem);
  			main.appendChild(elem1);
  			main.appendChild(elem2);


  			document.getElementById('root').appendChild(main);
        async function getPrevState(elem, elem1, elem2) {
          let getPrev = await fetch(`https:${prevRates.PreviousURL}`);
          let res = await getPrev.json();
          prevRates = res;
          let prevDate = new Date(res.Date);
              elem.innerHTML = `Курс на 
                          ${prevDate.getDate()} 
                          ${month[prevDate.getMonth()]} 
                          ${prevDate.getFullYear()}`
              elem1.innerHTML = res.Valute[main.getAttribute('valute')].Value;
              elem2.innerHTML = trend(res.Valute[main.getAttribute('valute')].Value, res.Valute[main.getAttribute('valute')].Previous);
      };
	}
}