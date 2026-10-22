// Which Cat Are You? — small interactions, no libraries.

const catButtons = document.querySelectorAll(".cat-pick");
const result = document.getElementById("result");
const resultCat = document.getElementById("resultCat");
const resultWord = document.getElementById("resultWord");
const resultCaption = document.getElementById("resultCaption");
const resultKicker = document.getElementById("resultKicker");
const againButton = document.getElementById("again");
const catsStage = document.getElementById("catsStage");

const catInfo = {
  purple: {
    name: "MISO",
    word: "HMM.",
    caption: "you look like you need a nap.",
    kicker: "THE SLEEPY ONE",
    drawing: `<svg viewBox="0 0 160 130" shape-rendering="geometricPrecision">
      <g stroke="#211d32" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <path fill="#77739f" d="M27 53 L24 27 Q24 20 31 24 L48 39 Q60 33 75 38 L92 38 L111 25 Q118 20 119 30 L119 48 Q132 60 128 80 Q125 101 103 104 L43 104 Q22 101 20 82 Q17 65 27 53Z"/>
        <path fill="#5e5988" stroke="none" d="M30 69h7v6h-7zM47 84h6v6h-6zM98 65h6v6h-6z"/>
        <path fill="#211d32" stroke="none" d="M43 65 Q48 59 53 65 L53 73 L43 73Z M87 65 Q92 59 97 65 L97 73 L87 73Z"/>
        <path fill="#f6c5d7" stroke="none" d="M31 78 Q40 73 47 80 L44 87 L34 87Z M97 80 Q105 73 113 79 L111 87 L101 88Z"/>
        <path fill="none" d="M65 81 Q70 87 76 81 M76 81 Q82 87 87 81"/>
        <path fill="#f8e6a3" stroke="none" d="M66 48 l5 -7 5 7 -5 5Z"/>
        <path fill="#fff0ad" stroke="none" d="M34 47h5v5h-5zM105 48h5v5h-5z"/>
      </g>
    </svg>`
  },
  white: {
    name: "MOCHI",
    word: "BOO!",
    caption: "you have been chosen. no refunds.",
    kicker: "THE MYSTERIOUS ONE",
    drawing: `<svg viewBox="0 0 150 130" shape-rendering="geometricPrecision">
      <g stroke="#282632" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">
        <path fill="#fffdf5" d="M29 51 L27 25 Q27 17 34 23 L52 39 Q66 33 81 39 L97 39 L113 23 Q120 18 121 28 L120 51 Q134 62 130 83 Q127 105 105 107 L43 107 Q22 103 20 83 Q17 64 29 51Z"/>
        <path fill="#a7cc97" stroke="none" d="M35 80 Q46 72 54 76 L49 84 L40 89Z M93 48h7v7h-7z"/>
        <path fill="#282632" stroke="none" d="M45 65 Q50 59 55 65 L55 73 L45 73Z M88 65 Q93 59 98 65 L98 73 L88 73Z"/>
        <path fill="#f3bfd0" stroke="none" d="M33 78 Q42 73 49 80 L46 87 L36 87Z M96 80 Q105 73 113 79 L111 87 L101 88Z"/>
        <path fill="none" d="M65 81 Q71 88 77 81 Q83 88 89 81"/>
        <path fill="#78ad78" stroke="none" d="M70 38 L76 26 L82 38 L76 43Z"/>
        <path fill="#d9a5b8" stroke="none" d="M114 43l5 -5 5 5 -5 5z"/>
      </g>
    </svg>`
  },
  orange: {
    name: "TOAST",
    word: "HEY.",
    caption: "you share one brain cell. be nice.",
    kicker: "THE CHAOTIC ONE",
    drawing: `<svg viewBox="0 0 160 130" shape-rendering="geometricPrecision">
      <g stroke="#211d32" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <path fill="#f5a52e" d="M28 54 L26 28 Q26 20 33 25 L50 40 Q64 34 79 39 L96 39 L112 25 Q120 20 120 30 L119 52 Q132 63 129 83 Q126 105 104 107 L43 107 Q22 104 20 83 Q17 65 28 54Z"/>

        <path fill="#211d32" stroke="none" d="M44 65 Q49 59 54 65 L54 73 L44 73Z M87 65 Q92 59 97 65 L97 73 L87 73Z"/>
        <path fill="#f6c0d0" stroke="none" d="M32 79 Q41 74 48 81 L45 88 L35 88Z M97 81 Q106 74 113 80 L111 88 L101 89Z"/>
        <path fill="none" d="M66 82 Q72 88 78 82 Q84 88 90 82"/>
        <path fill="#ffe6a3" stroke="none" d="M60 86 Q70 78 81 86 L88 104 L54 104Z"/>
        <path fill="#d77e28" stroke="none" d="M42 47h7v5h-7zM91 47h7v5h-7z"/>
      </g>
    </svg>`
  },
  blue: {
    name: "BLOOP",
    word: "RUN.",
    caption: "this is not a drill. probably.",
    kicker: "THE TINY MENACE",
    drawing: `<svg viewBox="0 0 160 130" shape-rendering="geometricPrecision">
      <g stroke="#211d32" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <path fill="#fffaf0" d="M28 54 L26 28 Q26 20 33 25 L50 40 Q64 34 79 39 L96 39 L112 25 Q120 20 120 30 L119 52 Q132 63 129 83 Q126 105 104 107 L43 107 Q22 104 20 83 Q17 65 28 54Z"/>
        <path fill="#39bfd1" stroke="none" d="M27 82 Q39 76 49 83 L48 93 L61 93 L61 100 L88 100 L88 92 L105 92 L111 84 L124 88 L121 103 L105 108 L43 108 L25 99Z"/>
        <path fill="#211d32" stroke="none" d="M44 65 Q49 59 54 65 L54 73 L44 73Z M87 65 Q92 59 97 65 L97 73 L87 73Z"/>
        <path fill="#f3b6cb" stroke="none" d="M32 79 Q41 74 48 81 L45 88 L35 88Z M97 81 Q106 74 113 80 L111 88 L101 89Z"/>
        <path fill="none" d="M66 82 Q72 88 78 82 Q84 88 90 82"/>
        <path fill="#39bfd1" stroke="none" d="M34 51h9v4h-9zM99 51h9v4h-9z"/>
        <path fill="#9de8e9" stroke="none" d="M63 91h17v5H63zM83 91h10v5H83z"/>
      </g>
    </svg>`
  }
};

function showCat(catId) {
  const cat = catInfo[catId];

  if (!cat) {
    return;
  }

  resultCat.innerHTML = cat.drawing;
  resultWord.textContent = cat.word;
  resultCaption.textContent = cat.caption;
  resultKicker.textContent = cat.kicker;

  result.classList.remove("show");

  // Reading the layout forces the surprise animation to restart on every pick.
  void result.offsetWidth;

  result.classList.add("show");
  result.setAttribute("aria-hidden", "false");
  catsStage.setAttribute("aria-hidden", "true");
  againButton.focus({ preventScroll: true });
}

function returnToSelection() {
  result.classList.remove("show");
  result.setAttribute("aria-hidden", "true");
  catsStage.setAttribute("aria-hidden", "false");

  const firstCat = catButtons[0];
  if (firstCat) {
    firstCat.focus({ preventScroll: true });
  }
}

catButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    showCat(button.dataset.cat);
  });
});

againButton.addEventListener("click", returnToSelection);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && result.classList.contains("show")) {
    returnToSelection();
  }
});
