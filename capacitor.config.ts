import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.cap',
  appName: 'ExampleApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
