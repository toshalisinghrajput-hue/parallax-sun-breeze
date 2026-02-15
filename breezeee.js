//  let sun1 = document.getElementById('sun1');
//  let sun2 = document.getElementById('sun2');
//  let air1 = document.getElementById('air1');
//  let air2 = document.getElementById('air2');
//  let mnt1 = document.getElementById('mnt1');
//  let mnt2 = document.getElementById('mnt2');
//  let mnt3 = document.getElementById('mnt3');
//  let mnt4 = document.getElementById('mnt4');
//  let mnt5 = document.getElementById('mnt5');
//  let text = document.getElementById('text');
//  let sun1 document.getElementById('sun1')


// window.addEventListener('scroll', () => {
//     let value = window.scrollY;


//  	air1.style.left = value * -1.5 + 'px';
// 	mnt5.style.top = value * 2 + 'px';

// });
let text = document.getElementById('text');
let sun1 = document.getElementById('sun1');
let sun2 = document.getElementById('sun2');
let air1 = document.getElementById('air1');
let air2 = document.getElementById('air2');
let mnt1 = document.getElementById('mnt1');
let mnt2 = document.getElementById('mnt2');
let mnt3 = document.getElementById('mnt3');
let mnt4 = document.getElementById('mnt4');
let mnt5 = document.getElementById('mnt5');
// let text = document.getElementById('text');
// let text = document.getElementById('text');
// let text = document.getElementById('text');


window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text.style.marginTop = value * 2 + 'px';
	air2.style.left = value * 1 + 'px';
	air1.style.left = value * -1 + 'px';
	// mnt5.style.top = value * 1 + 'px';
    // mnt4.style.left = value * -1 + 'px';
    
	// mnt2.style.top= value * 1 + 'px';
	mnt1.style.left = value * 1 + 'px';
	sun1.style.top = value * -1 + 'px';
	sun2.style.top = value * -1 + 'px';
	
	// air1.style.left = value * -1 + 'px';
	// air1.style.left = value * -1 + 'px';
	// air1.style.left = value * -1 + 'px';

});