//vertical menu on mobile devices
function responsiveMenu() {
	const menuItem = document.getElementById("site-nav");
	if (menuItem.className === "") {
		menuItem.className = "responsive";
	} else {
		menuItem.className = "";
	}
};
