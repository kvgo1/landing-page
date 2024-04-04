const scrollRevealOption={
    distance: "50px" ,
    origin: "bottom",
    duration: 1000,
};
//header container
ScrollRevealOption().reveal(".header__content h1",{
    ...scrollRevealOption,
});
ScrollRevealOption().reveal(".header__content p",{
    ...scrollRevealOption,
    delay:500,
});
ScrollRevealOption().reveal(".header__content ",{
    ...scrollRevealOption,
    delay:1000,
});