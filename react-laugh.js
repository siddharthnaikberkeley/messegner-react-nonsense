elems = document.querySelectorAll('[role="row"]');
var event = new MouseEvent('mouseover', 
       {view: window, bubbles: true, cancelable: true});
for (i = 0; i < elems.length; i++) {
var elem = elems[i];
elem.dispatchEvent(event);
}
console.log("waiting")
await new Promise(r => setTimeout(r, 5000));
var elems_two = document.querySelectorAll('[aria-label="React"]')
for (z=0; z<elems_two.length; z++ ) {
elems_two[z].click()
}
console.log("waiting again")
await new Promise(r => setTimeout(r, 5000));
var elems_three = document.querySelectorAll('[src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1/32/1f606.png"]')
for (q=0; q< elems_three.length; q++){
elems_three[q].click()
}
