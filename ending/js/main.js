document.addEventListener('DOMContentLoaded', ()=> {
	let form = document.querySelector('form');
	let sbmt = document.querySelector('.form__submit');
	let btn = document.querySelector('.section-form__button');
	let message = document.querySelector('.section-form__message');
	let inpts = document.querySelectorAll('input');

	let types = {
	  'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	  'text': /.+/,
	}

	let validate = (form) => {
	  let inputs = [...form.querySelectorAll('[data-type]')];
	  let passed = true;
	  let password;
	  
	  inputs.forEach((item) => {
	  
	    if ((types[item.dataset.type] && types[item.dataset.type].test(item.value)) || (item.value == password && item.value != '')){
	      item.classList.remove('form__input_novalid');
	    }
	    else{
	      passed = false;
	      item.classList.add('form__input_novalid');
	    }
	  });
	  if(inputs[2].value !== inputs[3].value) {
	  	inputs[2].classList.add('form__input_novalid');
	  	inputs[3].classList.add('form__input_novalid');
	  	passed = false;
	  }
	  
	  return passed;
	/*  if(passed) {
	  	let message `"Thank you for registering the ${inputs[].value.toUpperCase} from the city ${inputs[].value.toUpperCase()}."`;
	  }*/
	  
	};

	sbmt.addEventListener('click', (e)=> {
		e.preventDefault();
		if(validate(form)) {
			let arr = form.querySelectorAll('[data-id]');
			console.log(arr);
			
			message.innerHTML = `"Thank you for registering the ${arr[0].value.toUpperCase()} from the city ${arr[1].value.toUpperCase()}."`;

			form.style.display = 'none';
			btn.style.display = 'block';
			message.style.display = 'block';
		}
	});

	btn.addEventListener('click', () => {
		inpts.forEach( item => {
			item.value = '';
		})
		form.style.display = 'block';
		message.style.display = 'none';
		btn.style.display = 'none';
	});

})
