import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`va payer ${courseValue} pour ce cours!`); // eslint-disable-line no-console
