		// FUNCTION TO THE CALCULATE THE GPA
		
		function Calculate(){
			// VARIABLES FOR HOLDING LETTER GRADE POINTS
			var c1 = parseInt("16");
			var c2 = parseInt("12");
			var c3 = parseInt("9");
			var c4 = parseInt("8");
			var c5 = parseInt("6");
			var c6 = parseInt("3");
			var c7 = parseInt("0");

			var totalPoint = document.getElementById('right-float');

			// FIRST COURSE
			var gpaValue = document.getElementById('credit-result');
			var course1 = document.getElementById('course-one').value;
			var credit1 = parseInt(document.getElementById('credit-one').value);
			var letter1 = document.getElementById('letter-one').value;
			var ltr1 = document.getElementById('ltr-1');
			var crd1 = document.getElementById('crd-1');
			var crs1 = document.getElementById('crs-1');
			var ptn1 = document.getElementById('pnt-1');
			crs1.innerHTML = course1;
			ltr1.innerHTML = letter1;
			crd1.innerHTML = credit1;


			if (letter1 == "A" && credit1 == "4") {
				ptn1.innerHTML = c1;
			}else if (letter1 == "A" && credit1 == "3") {
				ptn1.innerHTML = c2;
			}else if (letter1 == "B" && credit1 == "4"){
				ptn1.innerHTML = c2;
			}else if (letter1 == "B" && credit1 == "3"){
				ptn1.innerHTML = c3;
			}else if (letter1 == "C" && credit1 == "4"){
				ptn1.innerHTML = c4;
			}else if (letter1 == "C" && credit1 == "3") {
				ptn1.innerHTML = c5;
			}else if (letter1 == "D" && credit1 == "4") {
				ptn1.innerHTML = c5;
			}else if (letter1 == "D" && credit1 == "3") {
				ptn1.innerHTML = c6;
			}else {
				ptn1.innerHTML = c7;
			}




			if (letter1 == "A" && credit1 == "4") {
				ptn1 = c1;
			}else if (letter1 == "A" && credit1 == "3") {
				ptn1 = c2;
			}else if (letter1 == "B" && credit1 == "4"){
				ptn1 = c2;
			}else if (letter1 == "B" && credit1 == "3"){
				ptn1 = c3;
			}else if (letter1 == "C" && credit1 == "4"){
				ptn1 = c4;
			}else if (letter1 == "C" && credit1 == "3") {
				ptn1 = c5;
			}else if (letter1 == "D" && credit1 == "4") {
				ptn1 = c5;
			}else if (letter1 == "D" && credit1 == "3") {
				ptn1 = parseInt(3);
			}else {
				ptn1 = c7;
			}



			// SECOND COURSE
			var course2 = document.getElementById('course-two').value;
			var credit2 = parseInt(document.getElementById('credit-two').value);
			var letter2 = document.getElementById('letter-two').value;
			var ltr2 = document.getElementById('ltr-2');
			var crd2 = document.getElementById('crd-2');
			var crs2 = document.getElementById('crs-2');
			var ptn2 = document.getElementById('pnt-2');
			crs2.innerHTML = course2;
			ltr2.innerHTML = letter2;
			crd2.innerHTML = credit2;

			if (letter2 == "A" && credit2 == "4") {
				ptn2.innerHTML = c1;
			}else if (letter2 == "A" && credit2 == "3") {
				ptn2.innerHTML = c2;
			}else if (letter2 == "B" && credit2 == "4"){
				ptn2.innerHTML = c2;
			}else if (letter2 == "B" && credit2 == "3"){
				ptn2.innerHTML = c3;
			}else if (letter2 == "C" && credit2 == "4"){
				ptn2.innerHTML = c4;
			}else if (letter2 == "C" && credit2 == "3") {
				ptn2.innerHTML = c5;
			}else if (letter2 == "D" && credit2 == "4") {
				ptn2.innerHTML = c5;
			}else if (letter2 == "D" && credit2 == "3") {
				ptn2.innerHTML = c6;
			}else {
				ptn2.innerHTML = c7;
			}


			if (letter2 == "A" && credit2 == "4") {
				ptn2 = c1;
			}else if (letter2 == "A" && credit2 == "3") {
				ptn2 = c2;
			}else if (letter2 == "B" && credit2 == "4"){
				ptn2 = c2;
			}else if (letter2 == "B" && credit2 == "3"){
				ptn2 = c3;
			}else if (letter2 == "C" && credit2 == "4"){
				ptn2 = c4;
			}else if (letter2 == "C" && credit2 == "3") {
				ptn2 = c5;
			}else if (letter2 == "D" && credit2 == "4") {
				ptn2 = c5;
			}else if (letter2 == "D" && credit2 == "3") {
				ptn2 = c6;
			}else {
				ptn2 = c7;
			}

			
			// THIRD COURSE
			var course3 = document.getElementById('course-three').value;
			var credit3 = parseInt(document.getElementById('credit-three').value);
			var letter3 = document.getElementById('letter-three').value;
			var ltr3 = document.getElementById('ltr-3');
			var crd3 = document.getElementById('crd-3');
			var crs3 = document.getElementById('crs-3');
			var ptn3 = document.getElementById('pnt-3');
			crs3.innerHTML = course3;
			ltr3.innerHTML = letter3;
			crd3.innerHTML = credit3;

			if (letter3 == "A" && credit3 == "4") {
				ptn3.innerHTML = parseInt(16);
			}else if (letter3 == "A" && credit3 == "3") {
				ptn3.innerHTML = parseInt(12);
			}else if (letter3 == "B" && credit3 == "4"){
				ptn3.innerHTML = parseInt(12);
			}else if (letter3 == "B" && credit3 == "3"){
				ptn3.innerHTML = parseInt(9);
			}else if (letter3 == "C" && credit3 == "4"){
				ptn3.innerHTML = parseInt(8);
			}else if (letter3 == "C" && credit3 == "3") {
				ptn3.innerHTML = parseInt(6);
			}else if (letter3 == "D" && credit3 == "4") {
				ptn3.innerHTML = parseInt(4);
			}else if (letter3 == "D" && credit3 == "3") {
				ptn3.innerHTML = parseInt(3);
			}else {
				ptn3.innerHTML = parseInt(0);
			}
			


			if (letter3 == "A" && credit3 == "4") {
				ptn3 = c1;
			}else if (letter3 == "A" && credit3 == "3") {
				ptn3 = c2;
			}else if (letter3 == "B" && credit3 == "4"){
				ptn3 = c2;
			}else if (letter3 == "B" && credit3 == "3"){
				ptn3 = c3;
			}else if (letter3 == "C" && credit3 == "4"){
				ptn3 = c4;
			}else if (letter3 == "C" && credit3 == "3") {
				ptn3 = c5;
			}else if (letter3 == "D" && credit3 == "4") {
				ptn3 = c5;
			}else if (letter3 == "D" && credit3 == "3") {
				ptn3 = c4;
			}else {
				ptn3 = c7;
			}

			
			// FOURTH COURSE
			var course4 = document.getElementById('course-four').value;
			var credit4 = parseInt(document.getElementById('credit-four').value);
			var letter4 = document.getElementById('letter-four').value;
			var ltr4 = document.getElementById('ltr-4');
			var crd4 = document.getElementById('crd-4');
			var crs4 = document.getElementById('crs-4');
			var ptn4 = document.getElementById('pnt-4');
			crs4.innerHTML = course4;
			ltr4.innerHTML = letter4;
			crd4.innerHTML = credit4;

			if (letter4 == "A" && credit4 == "4") {
				ptn4.innerHTML = parseInt(16);
			}else if (letter4 == "A" && credit4 == "3") {
				ptn4.innerHTML = parseInt(12);
			}else if (letter4 == "B" && credit4 == "4"){
				ptn4.innerHTML = parseInt(12);
			}else if (letter4 == "B" && credit4 == "3"){
				ptn4.innerHTML = parseInt(9);
			}else if (letter4 == "C" && credit4 == "4"){
				ptn4.innerHTML = parseInt(8);
			}else if (letter4 == "C" && credit4 == "3") {
				ptn4.innerHTML = parseInt(6);
			}else if (letter4 == "D" && credit4 == "4") {
				ptn4.innerHTML = parseInt(4);
			}else if (letter4 == "D" && credit4 == "3") {
				ptn4.innerHTML = parseInt(3);
			}else {
				ptn4.innerHTML = parseInt(0);
			}


			
			if (letter4 == "A" && credit4 == "4") {
				ptn4 = c1;
			}else if (letter4 == "A" && credit4 == "3") {
				ptn4 = c2;
			}else if (letter4 == "B" && credit4 == "4"){
				ptn4 = c2;
			}else if (letter4 == "B" && credit4 == "3"){
				ptn4 = c3;
			}else if (letter4 == "C" && credit4 == "4"){
				ptn4 = c4;
			}else if (letter4 == "C" && credit4 == "3") {
				ptn4 = c5;
			}else if (letter4 == "D" && credit4 == "4") {
				ptn4 = c4;
			}else if (letter4 == "D" && credit4 == "3") {
				ptn4 = c4;
			}else {
				ptn4 = c7;
			}




			
			// FIFTH COURSE
			var course5 = document.getElementById('course-five').value;
			var credit5 = parseInt(document.getElementById('credit-five').value);
			var letter5 = document.getElementById('letter-five').value;
			var ltr5 = document.getElementById('ltr-5');
			var crd5 = document.getElementById('crd-5');
			var crs5 = document.getElementById('crs-5');
			var ptn5 = document.getElementById('pnt-5');
			crs5.innerHTML = course5;
			ltr5.innerHTML = letter5;
			crd5.innerHTML = credit5;

			if (letter5 == "A" && credit5 == "4") {
				ptn5.innerHTML = parseInt(16);
			}else if (letter5 == "A" && credit5 == "3") {
				ptn5.innerHTML = parseInt(12);
			}else if (letter5 == "B" && credit5 == "4"){
				ptn5.innerHTML = parseInt(12);
			}else if (letter5 == "B" && credit5 == "3"){
				ptn5.innerHTML = parseInt(9);
			}else if (letter5 == "C" && credit5 == "4"){
				ptn5.innerHTML = parseInt(8);
			}else if (letter5 == "C" && credit5 == "3") {
				ptn5.innerHTML = parseInt(6);
			}else if (letter5 == "D" && credit5 == "4") {
				ptn5.innerHTML = parseInt(4);
			}else if (letter5 == "D" && credit5 == "3") {
				ptn5.innerHTML = parseInt(3);
			}else {
				ptn5.innerHTML = parseInt(0);
			}


			if (letter5 == "A" && credit5 == "4") {
				ptn5 = c1;
			}else if (letter5 == "A" && credit5 == "3") {
				ptn5 = c2;
			}else if (letter5 == "B" && credit5 == "4"){
				ptn5 = c2;
			}else if (letter5 == "B" && credit5 == "3"){
				ptn5 = c3;
			}else if (letter5 == "C" && credit5 == "4"){
				ptn5 = c4;
			}else if (letter5 == "C" && credit5 == "3") {
				ptn5 = c5;
			}else if (letter5 == "D" && credit5 == "4") {
				ptn5 = c4;
			}else if (letter5 == "D" && credit5 == "3") {
				ptn5 = c4;
			}else {
				ptn5 = c7;
			}
			


			// SIX COURSE
			var course6 = document.getElementById('course-six').value;
			var credit6 = parseInt(document.getElementById('credit-six').value);
			var letter6 = document.getElementById('letter-six').value;
			var ltr6 = document.getElementById('ltr-6');
			var crd6 = document.getElementById('crd-6');
			var crs6 = document.getElementById('crs-6');
			var ptn6 = document.getElementById('pnt-6');
			crs6.innerHTML = course6;
			ltr6.innerHTML = letter6;
			crd6.innerHTML = credit6;

			if (letter6 == "A" && credit6 == "4") {
				ptn6.innerHTML = parseInt(16);
			}else if (letter6 == "A" && credit6 == "3") {
				ptn6.innerHTML = parseInt(12);
			}else if (letter6 == "B" && credit6 == "4"){
				ptn6.innerHTML = parseInt(12);
			}else if (letter6 == "B" && credit6 == "3"){
				ptn6.innerHTML = parseInt(9);
			}else if (letter6 == "C" && credit6 == "4"){
				ptn6.innerHTML = parseInt(8);
			}else if (letter6 == "C" && credit6 == "3") {
				ptn6.innerHTML = parseInt(6);
			}else if (letter6 == "D" && credit6 == "4") {
				ptn6.innerHTML = parseInt(4);
			}else if (letter6 == "D" && credit6 == "3") {
				ptn6.innerHTML = parseInt(3);
			}else {
				ptn6.innerHTML = parseInt(0);
			}
			


			if (letter6 == "A" && credit6 == "4") {
				ptn6 = c1;
			}else if (letter6 == "A" && credit6 == "3") {
				ptn6 = c2;
			}else if (letter6 == "B" && credit6 == "4"){
				ptn6 = c2;
			}else if (letter6 == "B" && credit6 == "3"){
				ptn6 = c3;
			}else if (letter6 == "C" && credit6 == "4"){
				ptn6 = c4;
			}else if (letter6 == "C" && credit6 == "3") {
				ptn6 = c5;
			}else if (letter6 == "D" && credit6 == "4") {
				ptn6 = c4;
			}else if (letter6 == "D" && credit6 == "3") {
				ptn6 = c4;
			}else {
				ptn6 = c7;
			}



			// CODE FOR CALCULATING THE GPA
			var totalCredit = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;
			gpaValue.innerHTML = "Total Credit: " + totalCredit;
			
			var totalgpa = ptn1 + ptn2 + ptn3 + ptn4 + ptn5 + ptn6;
			totalgpa /= totalCredit;
			totalPoint.innerHTML = "Accum GPA: " + totalgpa.toFixed(2);
		}




// FUNCTION TO CLEAR SOME OF THE TEXT BOXES

function Clear() {
	var course1 = document.getElementById('course-one');
	var course2 = document.getElementById('course-two');
	var course3 = document.getElementById('course-three');
	var course4 = document.getElementById('course-four');
	var course5 = document.getElementById('course-five');
	var course6 = document.getElementById('course-six');
	course1.value = "";
	course2.value = "";
	course3.value = "";
	course4.value = "";
	course5.value = "";
	course6.value = "";

	var credit1 = document.getElementById('credit-one');
	var credit2 = document.getElementById('credit-two');
	var credit3 = document.getElementById('credit-three');
	var credit4 = document.getElementById('credit-four');
	var credit5 = document.getElementById('credit-five');
	var credit6 = document.getElementById('credit-six');
	credit1.value = 0;
	credit2.value = 0;
	credit3.value = 0;
	credit4.value = 0;
	credit5.value = 0;
	credit6.value = 0;
}




// FUNCTION TO CLOSE THE BROWSER

function Close() {
	window.close();
}