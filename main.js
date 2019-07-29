//listen for form submission 
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(){
	//get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;
	
	//prevent form from submitting
	e.preventDefault();
	
	
}