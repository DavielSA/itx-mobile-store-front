export default {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react', { runtime: 'automatic' }]  // 👈 Esto habilita la auto-importación
  ],
};