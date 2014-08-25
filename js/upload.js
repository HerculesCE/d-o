// Upload.js for DOE Site
// Thomas Flyvholm, 2014
// TODO: @optimization: Start over from scratch?
// HELPS STYLING THE CUSTOM UPLOAD BUTTON
jQuery(document).ready(function($){
	$('#file-url').bind("click" , function () {
        $('#file-picker').click();
    });
// ASSIGN PICKER-VALUE TO PLACEHOLDER-ATTRIBUTE IN URL
    document.getElementById("file-picker").onchange = function () {
    	document.getElementById("file-url").value = this.value;
	};
});