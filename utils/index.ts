export function mixColors(hexColor1: string, hexColor2: string) {
  // Convert hex colors to RGB values
  const rgb1 = hexToRgb(hexColor1)
  const rgb2 = hexToRgb(hexColor2)

  if (!rgb1 || !rgb2) return

  // Calculate the mixed RGB values
  const mixedR = Math.round(rgb1.r * 0.9 + rgb2.r * 0.1)
  const mixedG = Math.round(rgb1.g * 0.9 + rgb2.g * 0.1)
  const mixedB = Math.round(rgb1.b * 0.9 + rgb2.b * 0.1)

  // Convert the mixed RGB values back to hex
  const mixedHex = rgbToHex(mixedR, mixedG, mixedB)

  return mixedHex
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

// Helper function to convert RGB to hex
function componentToHex(c: number) {
  const hex = c.toString(16)
  return hex.length == 1 ? "0" + hex : hex
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}
