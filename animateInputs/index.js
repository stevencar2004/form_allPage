const inputs = document.querySelectorAll(".form__inputs");
const formInputs = document.querySelectorAll(".form__box--border");

inputs.forEach((input) => {
	input.addEventListener("focus", () => {
		if (input.id == "input1") {
			formInputs[0].classList.add("form__box--active");
		} else {
			formInputs[1].classList.add("form__box--active");
		}
	});
});

inputs.forEach((input) => {
	input.addEventListener("blur", () => {
		if (input.id == "input1" && input.value == "") {
			formInputs[0].classList.remove("form__box--active");
		}
		if (input.id == "input2" && input.value == "") {
			formInputs[1].classList.remove("form__box--active");
		}
	});
});
