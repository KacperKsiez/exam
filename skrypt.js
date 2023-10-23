const imgMain = document.querySelector(`main > img`);
const imgList = document.querySelectorAll('#lewy > img');

function swapImg(targetSrc, sourceReference) {
	sourceReference.src = targetSrc;
}
