const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".hero-list");

if (menuButton && navigation) {
	const closeMenu = () => {
		menuButton.setAttribute("aria-expanded", "false");
		menuButton.setAttribute("aria-label", "Open navigation menu");
		navigation.classList.remove("is-open");
	};

	menuButton.addEventListener("click", () => {
		const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

		menuButton.setAttribute("aria-expanded", String(!isExpanded));
		menuButton.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
		navigation.classList.toggle("is-open", !isExpanded);
	});

	navigation.addEventListener("click", (event) => {
		if (event.target.closest("a")) {
			closeMenu();
		}
	});

	document.addEventListener("click", (event) => {
		if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
			closeMenu();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeMenu();
		}
	});
}
