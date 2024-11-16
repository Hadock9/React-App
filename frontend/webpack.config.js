const path = require('path');

module.exports = {
  // 1. Точка входу
  entry: './src/index.js',

  // 2. Вихідний файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // 3. Режим
  mode: 'development', // Змініть на 'production' для продакшн

  // 4. Завантажувачі
  module: {
    rules: [
      // JavaScript (Babel)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Зображення
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },

  // 5. Плагіни
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // 6. DevServer (опціонально)
 devServer: {
  allowedHosts: ['.localhost', '0.0.0.0'], // Приклад коректного значення
  port: 3000, // Ваш порт
  open: true, // Автоматичне відкриття браузера
},
};
