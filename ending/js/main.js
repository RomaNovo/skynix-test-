document.addEventListener('DOMContentLoaded', ()=> {
	let form 	= document.querySelector('form'),
		sbmt 	= document.querySelector('.form__submit'),
		btn 	= document.querySelector('.section-form__button'),
		message = document.querySelector('.section-form__message'),
		inpts 	= document.querySelectorAll('[data-type]');

	let types = {
	  'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	  'text': /.+/,
	}

	let inputs = [...form.querySelectorAll('[data-type]')];
	inputs.forEach( (item) => {
		let input = item;
		
		input.addEventListener('input', () => {

			( types[input.dataset.type].test(input.value) ) ? 
				input.classList.remove('form__input_novalid') :
				input.classList.add('form__input_novalid');
			
			if( input.getAttribute('type') === 'password' ){
				( input.value.length < 6 ) ? 
					input.classList.add('form__input_novalid') :	
					input.classList.remove('form__input_novalid');			
			};
		})
	})

	let validate = (form) => {
	  let inputs = [...form.querySelectorAll('[data-type]')],
	  	  passed = true;
	   
	  inputs.forEach((item) => {
	  
	    if ( (types[item.dataset.type] && types[item.dataset.type].test(item.value)) ){
	      item.classList.remove('form__input_novalid');
	    }
	    else{
	      passed = false;
	      item.classList.add('form__input_novalid');
	    }
	  });

	  if( (inputs[2].value.length < 6) || (inputs[2].value !== inputs[3].value) ) {
	  	inputs[2].classList.add('form__input_novalid');
	  	inputs[3].classList.add('form__input_novalid');
	  	passed = false;
	  }
	  
	  return passed;  
	};

	sbmt.addEventListener('click', (e)=> {
		e.preventDefault();
		if(validate(form)) {
			let arr = form.querySelectorAll('[data-id]');
			message.innerHTML = `"Thank you for registering the ${arr[0].value.toUpperCase()} from the city ${arr[1].value.toUpperCase()|| ['KIEV', 'ODESSA', 'LVIV', 'DONETSK', 'KHARKIV'][Math.floor(Math.random() * 5)]}."`;
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
