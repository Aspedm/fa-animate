import Vivus from "vivus";

const DEFAULT_SETTINGS = {
  stroke: "currentColor",
  fill: "transparent",
  strokeWidth: 1
};

const faAnimate = (el, binding) => {
  const svgAllPath = el.querySelectorAll("path");
  if (!svgAllPath) return;

  const { value } = binding;

  let svgSettings = Object.assign({}, DEFAULT_SETTINGS, value);

  const arrayPath = [...svgAllPath];
  arrayPath.forEach(item => {
    item.setAttribute("fill", svgSettings.fill);
    item.setAttribute("stroke", svgSettings.stroke);
    item.setAttribute("stroke-width", svgSettings.strokeWidth);
  });

  new Vivus(el, value);
};

export default {
  inserted: faAnimate
};
