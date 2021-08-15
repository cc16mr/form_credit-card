document.getElementById('number').addEventListener('keyup', function(){
  let number=document.getElementById('number').value;

/*Inserting spaces every 4 digits*/
	let spaceNumber= number.toString();
	spaceNumber = spaceNumber.substring(0, 4) + " " + spaceNumber.substring(4, 8) +" " + spaceNumber.substring(8, 12) + " "+ spaceNumber.substring(12, 16);
	number=spaceNumber.toString();

	document.getElementById('card-number').innerHTML = number;


/*Replacing empty field with a string - NOT WORKING*/
	if(document.getElementById('card-number').innerHTML===''){
		document.getElementById('card-number').innerHTML='000';
	}

});



document.getElementById('code').addEventListener('keyup', function(){
  let code=document.getElementById('code').value;
	document.getElementById('card-cvv').innerHTML = code;

/*Replacing empty field with a string*/
	if(document.getElementById('card-cvv').innerHTML===''){
		document.getElementById('card-cvv').innerHTML='000';
	}

});


/*Field group gets data by two id sources*/
document.querySelectorAll('[data-action="date"]').forEach(function(element){
  element.addEventListener('change', function(){
    let month=document.getElementById('month').value;
    let year=document.getElementById('year').value;
    document.getElementById('card-date').innerHTML = month+'/'+year;
  });

});


document.getElementById('name').addEventListener('keyup', function(){
  let name = document.getElementById('name').value;
  document.getElementById('card-name').innerHTML = name.toUpperCase();

	/*Replacing empty field with a string*/
		if(document.getElementById('card-name').innerHTML===''){
			document.getElementById('card-name').innerHTML='JOSÉ DA SILVA SOARES';
	}
});


document.getElementById('code').addEventListener('focus', function(){
  document.getElementById('credit-card').style.transform='rotateY(180deg)';
});


document.getElementById('code').addEventListener('blur', function(){
  document.getElementById('credit-card').style.transform='rotateY(0deg)';
});



function testacpf(cpf) {
  let sum, rest = 0;

  if (document.getElementById('cpf') === '00000000000') {
		return false;
	}

  for (i = 1; i <= 10; i++) {
		sum += ((cpf.substring(i-1, i)) * (12 - i)).parseInt();
	}

	rest = ((sum * 10) % 11).toString();

  if ((rest === '10') || (rest === '11')) {
		rest = '0';
	}

  if (rest !== (cpf.substring(10, 11).toString())) {
		return false;
	}

	return true;
}

document.getElementById('cpf').addEventListener('keyup', function(){
	console.log("controle");
	testacpf(cpf);

	if(cpf===false){
		console.log("CPF inválido! Repita a operação");
	}

});
