/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        nacho: {
          1: '#FFFBE6',
          2: '#FFF1B8',
          3: '#FFE58F',
          4: '#FFD666',
          5: '#FFC53D',
          6: '#FFB800',
          7: '#F79E40',
          8: '#F3842B',
          9: '#F47530',
          10: '#F26724',
        },
        blue: {
          1: '#E6F4FF',
          2: '#BAE0FF',
          3: '#91CAFF',
          4: '#69B1FF',
          5: '#4096FF',
          6: '#1677FF',
          7: '#0958D9',
          8: '#003EB3',
          9: '#002C8C',
          10: '#001D66',
        },
        red: {
          1: '#FFF1F0',
          2: '#FFCCC7',
          3: '#FFA39E',
          4: '#FF7875',
          5: '#FF4D4F',
          6: '#F5222D',
          7: '#CF1322',
          8: '#A8071A',
          9: '#820014',
          10: '#5C0011',
        },
        'geek-blue': {
          1: '#F0F5FF',
          2: '#D6E4FF',
          3: '#ADC6FF',
          4: '#85A5FF',
          5: '#597EF7',
          6: '#2F54EB',
          7: '#1D39C4',
          8: '#10239E',
          9: '#061178',
          10: '#030852',
        },
        green: {
          1: '#F6FFED',
          2: '#D9F7BE',
          3: '#B7EB8F',
          4: '#95DE64',
          5: '#73D13D',
          6: '#52C41A',
          7: '#389E0D',
          8: '#237804',
          9: '#135200',
          10: '#092B00',
        },
        gray: {
          white: '#FFFFFF',
          0: '#FBFBFB',
          1: '#F5F5F5',
          2: '#EEEEEE',
          3: '#E8E8E8',
          4: '#C9C9C9',
          5: '#B0B0B0',
          6: '#868585',
          7: '#4B4B4B',
          8: '#313131',
          9: '#191919',
          black: '#000000',
        },
        purple: {
          1: '#F9F0FF',
          2: '#EFDBFF',
          3: '#D3ADF7',
          4: '#B37FEB',
          5: '#9254DE',
          6: '#722ED1',
          7: '#531DAB',
          8: '#391085',
          9: '#22075E',
          10: '#120338',
        },
      },
      backgroundColor: {},
      screens: {
        'nacho-sm': '444px',
        'nacho-md': '912px',
        'nacho-lg': '1084px',
        'nacho-xl': '1600px',
      },
      borderColor: {},
      borderRadius: {
        round: '100px',
        square: '8px',
      },
      fontSize: {
        heading1: [
          '72px',
          {
            lineHeight: '92px',
            fontWeight: '800',
          },
        ],
        heading2: [
          '42px',
          {
            lineHeight: '52px',
            fontWeight: '600',
          },
        ],
        text1: [
          '24px',
          {
            lineHeight: '34px',
            fontWeight: '500',
          },
        ],
        text2: [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '500',
          },
        ],
        text3: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '400',
          },
        ],
        'sm-heading1': [
          '48px',
          {
            lineHeight: '68px',
            fontWeight: '800',
          },
        ],
        'sm-heading2': [
          '28px',
          {
            lineHeight: '38px',
            fontWeight: '600',
          },
        ],
        'sm-text1': [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '500',
          },
        ],
        'sm-text2': [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '500',
          },
        ],
        'sm-text3': [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
      },
      padding: {
        default: '60px',
        'sm-default': '40px',
      },
      gap: {
        default: '55px',
        content: '24px',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        wave: 'wave 2.5s infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      boxShadow: {
        tertiary:
          '0px 0px 64px 0px rgba(0, 0, 0, 0.02), 16px 16px 64px 0px rgba(0, 0, 0, 0.04)',
        quaternaryBottom: '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
