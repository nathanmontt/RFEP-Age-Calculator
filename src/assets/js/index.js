const datepicker = window.datepicker;
const { DateTime } = window.luxon;

// const picker = datepicker('input[type="date"]');
// console.log(DateTime.now().toISODate());

// console.log(picker)

// const dt = DateTime.local(2017, 5, 31, 8, 30).toISODate();
// console.log(dt)

const now = DateTime.now();
console.log(now);
console.log(`Data completa: ${now}`);
console.log(`Dia: ${now.day}`)
console.log(`Mês: ${now.month}`)
console.log(`Ano: ${now.year}`)
console.log(`Hora: ${now.hour}`)
console.log(`Minutos: ${now.minute}`)
console.log(`Segundos: ${now.second}`)
console.log(`Milisegundos: ${now.millisecond}`)