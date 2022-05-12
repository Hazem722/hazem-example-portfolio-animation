const balloon = document.getElementById("air-balloon");
const cloudOne = document.getElementById("cloud-one");
const cloudTwo = document.getElementById("cloud-two");
const cloudThree = document.getElementById("cloud-three");
const cloudFour = document.getElementById("cloud-four");
const cloudFive = document.getElementById("cloud-five");
const javascript = document.getElementById("javascript");
const react = document.getElementById("react");
const graphql = document.getElementById("graphql");

// balloon
const balloonYFromBottom = 10;
balloon.style.bottom = balloonYFromBottom + "%";
// CloudOne
const cloudOneYFromBottom = 40;
cloudOne.style.bottom = cloudOneYFromBottom + "%";
const cloudOneXFromLeft = 75;
cloudOne.style.left = cloudOneXFromLeft + "%";
// cloudTwo
const cloudTwoYFromBottom = 80;
cloudTwo.style.bottom = cloudTwoYFromBottom + "%";
const cloudTwoXFromLeft = 70;
cloudTwo.style.left = cloudTwoXFromLeft + "%";
// cloudThree
const cloudThreeYFromBottom = 60;
cloudThree.style.bottom = cloudThreeYFromBottom + "%";
const cloudThreeXFromLeft = 0;
cloudThree.style.left = cloudThreeXFromLeft + "%";
// cloudFour
const cloudFourYFromBottom = 70;
cloudFour.style.bottom = cloudFourYFromBottom + "%";
const cloudFourXFromLeft = 20;
cloudFour.style.left = cloudFourXFromLeft + "%";
// cloudFive
const cloudFiveYFromBottom = 60;
cloudFive.style.bottom = cloudFiveYFromBottom + "%";
const cloudFiveXFromLeft = 60;
cloudFive.style.left = cloudFiveXFromLeft + "%";
// javascript
const javascriptXFromLeft = 20;
javascript.style.left = javascriptXFromLeft + "%";
// react
const reactXFromLeft = 26;
react.style.left = reactXFromLeft + "%";
// javascript
const graphqlXFromLeft = 32;
graphql.style.left = graphqlXFromLeft + "%";

function move() {
  const incrementer = window.scrollY;

  // the '10' refers to the height from the bottom of the sky section. We added this
  // in the css file. Feel free to move all styling to the JS file if you prefer to keep the
  // the '10' consistent.
  balloon.style.bottom = balloonYFromBottom + incrementer * 0.1 + "%";

  cloudOne.style.bottom = cloudOneYFromBottom + incrementer * 0.12 + "%";
  cloudOne.style.left = cloudOneXFromLeft + incrementer * 0.1 + "%";
  cloudTwo.style.bottom = cloudTwoYFromBottom + incrementer * 0.14 + "%";
  cloudTwo.style.left = cloudTwoXFromLeft + incrementer * 0.15 + "%";
  cloudThree.style.bottom = cloudThreeYFromBottom + incrementer * 0.1 + "%";
  cloudThree.style.left = cloudThreeXFromLeft + incrementer * -0.12 + "%";
  cloudFour.style.bottom = cloudFourYFromBottom + incrementer * 0.16 + "%";
  cloudFour.style.left = cloudFourXFromLeft + incrementer * -0.15 + "%";
  cloudFive.style.bottom = cloudFiveYFromBottom + incrementer * 0.2 + "%";
  cloudFive.style.left = cloudFiveXFromLeft + incrementer * 0.16 + "%";
  javascript.style.left = javascriptXFromLeft + incrementer * -2.2 + "%";
  react.style.left = reactXFromLeft + incrementer * -1.5 + "%";
  graphql.style.left = graphqlXFromLeft + incrementer * -1 + "%";
}

window.addEventListener("scroll", move);
