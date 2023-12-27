import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'happy-habits',
  webDir: '../../dist/apps/happy-habits',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
