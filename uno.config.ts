import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { classes } from '@warp-ds/css/component-classes/classes';

export default defineConfig({
  presets: [presetWarp()],
  safelist: classes,
});
