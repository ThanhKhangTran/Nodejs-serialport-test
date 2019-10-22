const SerialPort = require('serialport');
const Delimiter = require('@serialport/parser-delimiter');
const port = new SerialPort('COM9', {
  baudRate: 9600
});

// Read data that is available but keep the stream in "paused mode"
/*port.on('readable', function () {
    console.log('Data:', port.read())
})*/
const parser = port.pipe(new Delimiter({ delimiter: '\n' }));
parser.on('data', LogData);// emits data after every '\n'

function LogData(data) {
    console.log('Data: '+data);
} 