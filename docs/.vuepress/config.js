module.exports = {
  base: '/guide/',
  title: '',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'The solution to create gradients light, dark and with transparency in runtime, using the CSS Custom Properties (CSS Variables)'
    },
    '/es/': {
      lang: 'es-ES',
      description: 'La solución para crear degradados claros, oscuros y con transparencia en tiempo de ejecución, utilizando las Propiedades personalizadas de CSS (Variables CSS)'
    }
  },
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/CSSColorVars/csscolorvars/master/src/assets/cssColorVars-dark.png',
    locales: {
      '/': {
        sidebar: [
          {
            title: 'Guide',
            collapsable: false
          }
        ]
      },
      '/es/': {
        sidebar: [
          {
            title: 'Guía',
            collapsable: false,
            children: [
              '/es/',
              '/es/tecnologias-utilizadas'          
            ]
          }
        ]
      }
    }
  }
}