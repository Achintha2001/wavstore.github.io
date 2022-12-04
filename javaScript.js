let btnDownload = document.querySelection('button');
let aud = document.querySelection('audio') ;

btnDownload.addEventListener('click',()=> {
	let audPath = audio.getAttribute('src');
	let FileName = getFileName(audPath);

	saveAs(audPath,fileName);

})
function getFileName(str) {
	return str.substring(str.lastIndexOf('/')+1);
}