//your JS code here. If required.
const input = document.querySelector('#fname');

input.addEventListener("focusout",(e)=>{
    // alert(e.target.value.toUpperCase());
	let data = e.target.value.toUpperCase();
			input.value=data
})
