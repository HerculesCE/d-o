jQuery(document).ready(function($){
	$('#file-url').bind("click" , function () {
        $('#file-picker').click();
    });
    document.getElementById("file-picker").onchange = function () {
    	document.getElementById("file-url").value = this.value;
	};
});