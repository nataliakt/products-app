export function capitalizeFirstLetter([first = "", ...rest]: string): string {
  return [first.toUpperCase(), ...rest].join("");
}
