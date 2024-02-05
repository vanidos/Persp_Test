var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [55.704060, 37.625921], // Координаты отеля
			zoom: 13 // Маштаб карты
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()  // Добавление элемента управления картой
		); 
	
		myPlacemark = new ymaps.Placemark([55.704060, 37.625921], { // Координаты метки объекта
			balloonContent: "<div class='ya_map'>Офис продаж</div>" // Подсказка метки
		}, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
		});
		
		myMap.geoObjects.add(myPlacemark); // Добавление метки
		myPlacemark.balloon.open(); // Открытие подсказки метки
		
        return myMap.geoObjects.add(myPlacemark);
      
}

    /* карта конец */

    /* Форма бронирования начало */

    var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
};
/* Форма бронирования конец */

