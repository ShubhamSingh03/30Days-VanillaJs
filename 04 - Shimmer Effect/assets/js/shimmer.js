//  card data
const cardData = [
  {
    headerImgSrc: `https://source.unsplash.com/random/300X300?sig=${Math.floor(
      Math.random() * 100
    )}`,
    title: "Random Headline 1",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    profileImgSrc: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Harry Potter",
    date: "March 09, 2023",
  },
  {
    headerImgSrc: `https://source.unsplash.com/random/300X300?sig=${Math.floor(
      Math.random() * 100
    )}`,
    title: "Random Headline 2",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    profileImgSrc: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Hermie Granr",
    date: "March 29, 2023",
  },
  {
    headerImgSrc: `https://source.unsplash.com/random/300X300?sig=${Math.floor(
      Math.random() * 100
    )}`,
    title: "Random Headline 3",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
    profileImgSrc: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Ron Weasley",
    date: "April 09, 2023",
  },
];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(() => getData(cardData), 3500);

// get data function
const getData = (data) => {
  for (let i = 0; i < data.length; i++) {
    const header = document.querySelectorAll(".card-header")[i];
    const title = document.querySelectorAll(".card-title")[i];
    const excerpt = document.querySelectorAll(".card-excerpt")[i];
    const profile_img = document.querySelectorAll(".profile-img")[i];
    const name = document.querySelectorAll(".author-info strong")[i];
    const date = document.querySelectorAll(".author-info small")[i];

    header.innerHTML = `<img src="${data[i].headerImgSrc}" alt="" />`;
    title.innerHTML = data[i].title;
    excerpt.innerHTML = data[i].excerpt;
    profile_img.innerHTML = `<img src="${data[i].profileImgSrc}" alt="" />`;
    name.innerHTML = data[i].name;
    date.innerHTML = data[i].date;
  }

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
};
