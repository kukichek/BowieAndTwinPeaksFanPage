var headingArr = ["Очень плохо", "Плохо", "Не так уж и плохо", "Хорошо", "Отлично"];
var outputArr = [];
outputArr.push("Вы наверняка случайно наткнулись на сайт, " + 
	"иначе зачем вам проходить тест, если вы даже не смотрели сериал.");
outputArr.push("Могу сказать, что у вас явно не эйдетическая память." + 
	" Либо вы смотрели сериал очень давно, либо смотрели его под винишко.");
outputArr.push("Что ж, вы явно улыбнетесь при упоминании имени Дениз, хотя до прожженного фаната вам далеко.");
outputArr.push("Сам Дэвид Линч показывает вам палец вверх. Вы же видите здесь Дэвида Линча?");
outputArr.push("Поздравляю, вы задрот!");

var selectIDs = ["question2Moto", "question2Log", "question2Dictophone", "question2EyePad"];

cancel.onclick = clearQuiz();

function uploadPreview() {
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();

	reader.onloadend = function () {
		yourPhoto.src = reader.result;
	}

	if (file) {
		yourPhotoDiv.style.display = "block";
		reader.readAsDataURL(file);
	} else {
		yourPhoto.src = "";
		yourPhotoDiv.style.display = "none";
	}
}

function showQuizResult(event) {
	var date = new Date();
	var points = 0;

	if (question1Choice2.checked == true) {
		points += 15;
	}

	for (var i = 0; i < selectIDs.length; ++i) {
		if (document.getElementById(selectIDs[i]).value == "true") {
			points += 2.5;
		}
	}

	if (question3.value == "Бобби") {
		points += 20;
	}

	if (question4Choice1.checked == true) {
		points += 20;
	}

	var checkBoxes = document.getElementsByName("question5");
	if (checkBoxes[0].checked == true) { points += 5; }
	if (checkBoxes[1].checked == false) { points += 5; }
	if (checkBoxes[2].checked == true) { points += 5; }
	if (checkBoxes[3].checked == true) { points += 5; }

	if (question6Choice4.checked == true) {
		points += 15;
	}

	var resultDiv = document.getElementById("scoreOutput");
	resultDiv.style.display = "block";

	var resIndex = Math.floor(((points == 0)? 0 : points - 1) / 20);
	var innerString = "<h2>" +  headingArr[resIndex] + "</h2>" + outputArr[resIndex] + "<br><br> <img src='gif/" + resIndex + ".gif'>";
	resultDiv.innerHTML = innerString;

	var table = document.getElementById("results_table");

    var row = table.insertRow(-1);
    var timeCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var photoCell = row.insertCell(2);
    var pointsCell = row.insertCell(3);
    var resultCell = row.insertCell(4);

    timeCell.innerHTML =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    nameCell.innerHTML = agentName.value;

    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    var img = new Image(150);

    reader.onloadend = function() {
    	img.src = reader.result;
    }

    if (file) {
    	reader.readAsDataURL(file);
    	photoCell.appendChild(img); 
    }

    pointsCell.innerHTML = points + "%";
    resultCell.innerHTML = headingArr[resIndex];
}

