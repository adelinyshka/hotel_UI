import $ from 'jquery';
import 'air-datepicker'

// var myDatepicker = $('#my-datepicker44').datepicker().data('datepicker');
//
// myDatepicker.show();

$('#my-datepicker44').datepicker({
range:true
});

// import 'jquery-ui/ui/widgets/datepicker';
// import 'bootstrap';
// import 'jquery-ui/themes/base/core.css';
// import 'jquery-ui/themes/base/theme.css';
// import 'jquery-ui/themes/base/selectable.css';
// import 'jquery-ui/ui/core';
// import 'jquery-ui/ui/widgets/selectable';




	// Передаем функцию, которая добавляет 11 числу каждого месяца класс 'my-class'
	// и делает их невозможными к выбору.
	// onRenderCell: function(date, cellType) {
		 // режим - выбор периода
// 		numberOfMonths: 2,
		// if (cellType == 'day' && date.getDate() == 11) {
		// 	return {
		// 		classes: 'my-class',
		// 		disabled: true,
		// 	}
		// }


// $('.my-datepicker').datepicker([options])
// // Инициализация
// $('#my-element').datepicker([options])
//
// // Доступ к экземпляру объекта
// $('#my-element').data('datepicker')
//
// $(function() {
// 	$('#date_range').datepicker({
// 		range: 'period', // режим - выбор периода
// 		numberOfMonths: 2,
// 		onSelect: function(dateText, inst, extensionRange) {
// 			// extensionRange - объект расширения
// 			$('#date_range').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
// 		}
// 	});
//
// 	// $('#date_range_multiple').datepicker({
// 	// 	range: 'multiple', // режим - выбор периода
// 	// 	onSelect: function(dateText, inst, extensionRange) {
// 	// 		// extensionRange - объект расширения
// 	// 		$('#date_range_multiple').val(extensionRange.datesText.join(', '));
// 	// 	}
// 	// });
// });
