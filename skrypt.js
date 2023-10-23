const imgMain = document.querySelector(`main > img`);
const imgList = document.querySelectorAll('#lewy > img');
const resetIcon = document.querySelector('p img');

function swapImg(targetSrc, sourceReference) {
	sourceReference.src = targetSrc;
}

imgList.forEach((imgDiv) => {
	imgDiv.addEventListener('click', () => swapImg(imgDiv.src, imgMain));
});

let resetIconState = true;

resetIcon.addEventListener('click', () => {
	resetIconState = !resetIconState;
	const src = resetIconState ? 'icon-off.png' : 'icon-on.png';
	console.log(src);
	swapImg(`pliki/${src}`, resetIcon);
});
