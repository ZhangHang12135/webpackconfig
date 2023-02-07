import _ from 'lodash';
export default function printMe() {
    console.log(_.join(['Another', 'module', 'loaded!'], ' '));
    console.log('I get called from print.js!');
  }