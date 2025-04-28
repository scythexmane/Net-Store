import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Настроим базовый путь для деплоя
  base: '/', // Здесь указывается базовый путь для корня проекта. Если приложение на подкаталоге, указываем путь типа '/my-app/'
  
  // Указываем директорию для сборки
  build: {
    outDir: 'dist', // Директория для сборки (по умолчанию 'dist', но можно изменить на любую другую, если нужно)
    assetsDir: 'assets' // Указываем директорию для ассетов, если нужно
  }
});
