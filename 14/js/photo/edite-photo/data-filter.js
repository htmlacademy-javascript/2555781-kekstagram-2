const sliderSetting = {
  'effect-none': 'none',

  'effect-chrome': {
    name: 'grayscale',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    unit: ''
  },

  'effect-sepia': {
    name: 'sepia',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    unit: ''
  },

  'effect-marvin': {
    name: 'invert',
    minValue: 0,
    maxValue: 100,
    step: 1,
    unit: '%',
  },

  'effect-phobos': {
    name: 'blur',
    minValue: 0,
    maxValue: 3,
    step: 0.1,
    unit: 'px',
  },

  'effect-heat': {
    name: 'brightness',
    minValue: 1,
    maxValue: 3,
    step: 0.1,
    unit: '',
  },
};

export {sliderSetting};
