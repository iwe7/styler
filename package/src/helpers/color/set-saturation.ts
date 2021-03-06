import { parseToHsl } from './parse-to-hsl';
import { toColorString } from './to-color-string';

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * background: setSaturation(0.2, '#CCCD64'),
 * background: setSaturation(0.75, 'rgba(204,205,100,0.7)'),
 */
export function setSaturation(saturation: number, color: string): string {
  return toColorString({
    ...parseToHsl(color),
    saturation,
  });
}
