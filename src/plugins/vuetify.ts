// Styles
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          Color1: '#fcfcfc', 
          Color2: '#2f3333',  
          Color3: '#e1e3e3',   
          Color4: '#b6bcbc',   
          Color5: '#487073',   
          Color6: '#284245',   
        },
      },
      dark: {
        colors: {
          customGreen: '#487073', // Custom color for the dark theme if needed
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
