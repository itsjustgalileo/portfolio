document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("toggle-theme");
    const body = document.body;
    const darkThemeClass = "dark-theme";
    const themeKey = "theme";

    // A. On page load, check local storage for saved preference
    const savedTheme = localStorage.getItem(themeKey);

    if (savedTheme === "dark") {
        body.classList.add(darkThemeClass);
    } else if (savedTheme === "light") {
        body.classList.remove(darkThemeClass);
    } else {
        // Optional: Fallback to system preference if no local storage value exists
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add(darkThemeClass);
            localStorage.setItem(themeKey, "dark");
        }
    }

    // B. Add event listener to the toggle button
    themeToggleBtn.addEventListener("click", () => {
        // Toggle the class on the body
        body.classList.toggle(darkThemeClass);

        // C. Update local storage with the new preference
        let themeToSave = "light";
        if (body.classList.contains(darkThemeClass)) {
            themeToSave = "dark";
        }
        localStorage.setItem(themeKey, themeToSave);
    });
});
