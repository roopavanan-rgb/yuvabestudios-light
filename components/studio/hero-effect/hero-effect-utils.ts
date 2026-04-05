export const TAU = Math.PI * 2;

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export function easeOutQuart(value: number) {
  return 1 - Math.pow(1 - value, 4);
}

export function createSeededRandom(seed: number) {
  let state = ((Math.floor(seed * 1_000_000) || 1) >>> 0) + 0x9e3779b9;

  return () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

// The shared CSS token reader keeps both the canvas and WebGL layers aligned with the same brand palette.
export function readCssToken(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return value || fallback;
}

function getColorChannels(color: string) {
  const rgb = color.match(/\d+/g);

  if (rgb && rgb.length >= 3) {
    return [
      Number.parseInt(rgb[0], 10),
      Number.parseInt(rgb[1], 10),
      Number.parseInt(rgb[2], 10),
    ] as const;
  }

  const hex = color.replace("#", "").trim();

  if (hex.length === 3) {
    const red = Number.parseInt(hex[0] + hex[0], 16);
    const green = Number.parseInt(hex[1] + hex[1], 16);
    const blue = Number.parseInt(hex[2] + hex[2], 16);

    return [red, green, blue] as const;
  }

  if (hex.length === 6) {
    const red = Number.parseInt(hex.slice(0, 2), 16);
    const green = Number.parseInt(hex.slice(2, 4), 16);
    const blue = Number.parseInt(hex.slice(4, 6), 16);

    return [red, green, blue] as const;
  }

  return [88, 41, 199] as const;
}

// Canvas APIs expect RGBA strings, so this helper normalizes both token and hex values into that format.
export function withAlpha(color: string, alpha: number) {
  const [red, green, blue] = getColorChannels(color);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

// Band-aware effects need a clean way to interpolate within the shared palette instead of hard-switching colors.
export function mixColors(colorA: string, colorB: string, amount: number) {
  const [redA, greenA, blueA] = getColorChannels(colorA);
  const [redB, greenB, blueB] = getColorChannels(colorB);
  const progress = clamp(amount, 0, 1);
  const red = Math.round(redA + (redB - redA) * progress);
  const green = Math.round(greenA + (greenB - greenA) * progress);
  const blue = Math.round(blueA + (blueB - blueA) * progress);

  return `rgb(${red}, ${green}, ${blue})`;
}

