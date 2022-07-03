/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      'heading-1': ['28px', { lineHeight: '35px' }],
      'heading-2': ['24px', { lineHeight: '29px' }],
      'heading-3': ['20px', { lineHeight: '24px' }],
      'heading-4': ['14px', { lineHeight: '18px' }],
      body: ['16px', { lineHeight: '20px' }],
      body2: ['16px', { lineHeight: '26px' }],
    },
    extend: {
      colors: {
        violet: '#5964E0',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        white: '#fff',
        'light-grey': '#979797',
        grey: '#9DAEC2',
        'dark-grey': '#6E8098',
        'body-bg': 'rgb(227, 224, 247)',
        '19202D': '#19202D',
        '6E8098': '#6E8098',
        E99210: '#E99210',
        '9DAEC2': '#9DAEC2',
        '5964E0': '#5964E0',
        '34353F': '#34353F',
        121721: '#121721',
        '939BF4': '#939BF4',
      },
      width: {
        39: '39.98px',
        50: '50px',
        78: '78px',
        81: '81px',
        115: '115px',
        123: '123px',
        140: '140px',
        141: '141px',
        147: '147px',
        279: '279px',
        286: '286px',
        327: '327px',
        339: '339px',
        350: '350px',
        375: '375px',
        689: '689px',
        730: '730px',
        768: '768px',
        1110: '1110px',
      },
      height: {
        11: '11.42px',
        23: '23px',
        48: '48px',
        50: '50px',
        140: '140px',
        147: '147px',
        136: '136px',
        217: '217px',
        228: '228px',
      },
      padding: {
        42: '42px',
        45: '45px',
        72: '72px',
        156: '156px',
      },
      spacing: {
        18: '100px',
        25: '120px',
        54: '54px',
        244: '244px',
        282: '282px',
        355: '355px',
      },
    },
    screens: {
      sm: '640px',
      tablet: '768px',
      laptop: '1024px',
      xl: '1280px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
