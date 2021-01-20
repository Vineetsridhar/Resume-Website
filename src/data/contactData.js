import images from "../assets"


export const icons = [
    {
        logo: images.github,
        title: "Github",
        onClick: () => window.open("https://github.com/vineetsridhar", "_blank")
    },
    {
        logo: images.email,
        title: "Email",
        onClick: () => window.location.href = `mailto:vs583@njit.edu`
    },
    {
        logo: images.linkedin,
        title: "LinkedIn",
        onClick: () => window.open("https://www.linkedin.com/in/vineet-sridhar-185385177/", "_blank")
    },
]