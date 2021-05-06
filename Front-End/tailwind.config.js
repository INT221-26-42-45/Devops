module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: '#FF008C',
        pkras: '#D2386C',
        pklight: '#FF91D3',
        darkgray: '#3D3D3D',
        orange: '#FFA826'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [

  ],
}
