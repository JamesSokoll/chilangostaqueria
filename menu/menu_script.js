document.addEventListener("DOMContentLoaded", function () {
    const menuSections = document.querySelectorAll(".menucontent");
    const menuTabs = document.querySelectorAll(".item-type");
    const menuList = document.getElementById("menulist");

    // Define background images for each menu section
    const backgroundImages = {
        "Tacos": "/Images/background/taco.jpg",
        "Burritos": "/Images/background/burrito.jpg",
        "Tortas": "/Images/background/torta.jpg",
        "Quesadillas": "/Images/background/quesadilla.jpg",
        "Tostadas": "/Images/background/tostada.jpg",
        "Specials": "/Images/background/specials.jpg",
        "Drinks": "/Images/background/drinks.jpg"
    };

    menuTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            let targetId = this.id.replace("item-", "");
            
            menuSections.forEach(section => {
                section.classList.remove("active");
                if (section.id === targetId) {
                    section.classList.add("active");

                    // Update the menu list background image
                    if (backgroundImages[targetId]) {
                        menuList.style.backgroundImage = `url('${backgroundImages[targetId]}')`;
                        menuList.style.backgroundSize = "cover";
                        menuList.style.backgroundPosition = "center";
                    }
                }
            });
        });
    });

    // Show first menu category by default
    if (menuSections.length > 0) {
        menuSections[0].classList.add("active");
        menuList.style.backgroundImage = `url('${backgroundImages["Tacos"]}')`;
    }
});
