import items from '../files/ITENSMGVteste.txt';
//import items from '../files/ITENSMGV.BAK';

export default function GetItems() {
    fetch(items)
    .then((r) => r.text())
    .then(text => console.log(text))
    //return text;
}



function manipulate(text) {

}