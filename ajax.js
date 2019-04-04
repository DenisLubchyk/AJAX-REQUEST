const resultBlock = document.querySelector("#result");
const ClickMeButton = document.querySelector("#click-me");
const pageNumber = document.querySelector("#page-number");


$(ClickMeButton).on('click', makeRequest);

function makeRequest(){
	$.ajax(`https://repetitora.net/API/JS/Images?page=${pageNumber.value}&count=1`, {
	success: function (data) {
		data.forEach(function(el) {
			const img = document.createElement("img");
			img.src = el.thumbnail;
			document.querySelector('body').appendChild(img);
		})
		console.log(data);
	}
})
}