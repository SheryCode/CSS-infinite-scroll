import Endless from 'https://cdn.skypack.dev/react';
import EndlessDOM from 'https://cdn.skypack.dev/react-dom';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'C++', 'REACT', 'NEXT.JS', 'SQL', 'UI/UX', 'SVG', 'ANIMATIONS', 'WEBDEV'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = arr => [...arr].sort(() => .5 - Math.random());

const EndlessLoopSlider = ({ children, duration, reverse = false }) => {
  return /*#__PURE__*/(
    Endless.createElement("div", { className: "loop-slider", style: {
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal' } }, /*#__PURE__*/

    Endless.createElement("div", { className: "inner" },
    children,
    children)));



};

const Tag = ({ text }) => /*#__PURE__*/
Endless.createElement("div", { className: "tag" }, /*#__PURE__*/Endless.createElement("span", null, "#"), " ", text);


const App = () => /*#__PURE__*/
Endless.createElement("div", { className: "app" }, /*#__PURE__*/
Endless.createElement("header", null, /*#__PURE__*/
Endless.createElement("h1", null, "Sheryians Coding School"), /*#__PURE__*/
Endless.createElement("p", null, "Endless Scrolling Animation")), /*#__PURE__*/

Endless.createElement("div", { className: "tag-list" },
[...new Array(ROWS)].map((_, i) => /*#__PURE__*/
Endless.createElement(EndlessLoopSlider, { key: i, duration: random(DURATION - 5000, DURATION + 5000), reverse: i % 2 },
shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag) => /*#__PURE__*/
Endless.createElement(Tag, { text: tag, key: tag })))), /*#__PURE__*/



Endless.createElement("div", { className: "fade" })));




EndlessDOM.render( /*#__PURE__*/
Endless.createElement(App, null),
document.body);