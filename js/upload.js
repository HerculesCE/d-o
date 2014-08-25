jQuery(document).ready(function($){
	$('#file-url').bind("click" , function () {
		console.log("upload file clicked");
        $('#file-picker').click();
    });
// ASSIGN PICKER-VALUE TO PLACEHOLDER-ATTRIBUTE IN URL
    document.getElementById("file-picker").onchange = function () {
    	document.getElementById("file-url").value = this.value;
	};
});