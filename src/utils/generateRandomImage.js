const generateRandomImage = () => {
  const imagesPath = [
    "src/assets/cat-animals-svgrepo-com.svg",
    "src/assets/duck-animals-svgrepo-com.svg",
    "src/assets/elephant-animals-svgrepo-com.svg",
    "src/assets/fish-animals-svgrepo-com.svg",
    "src/assets/lion-animals-svgrepo-com.svg",
    "src/assets/macaw-animals-svgrepo-com.svg",
    "src/assets/owl-animals-svgrepo-com.svg",
    "src/assets/raccoon-animals-svgrepo-com.svg",
    "src/assets/rhinoceros-animals-svgrepo-com.svg",
    "src/assets/sheep-animals-svgrepo-com.svg",
    "src/assets/tortoise-animals-svgrepo-com.svg",
    "src/assets/toucan-animals-svgrepo-com.svg",
  ];

  return imagesPath[Math.floor(Math.random() * imagesPath.length)];
};

export default generateRandomImage;
