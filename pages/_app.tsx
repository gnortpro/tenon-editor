import '../styles/globals.css';
import '../components/EmailEditor/src/lib/bootstrap/bootstrap.min.css';
import '../components/EmailEditor/src/lib/fontawesome-free/css/fontawesome.min.css';
import '../components/EmailEditor/src/lib/fontawesome-free/css/brands.min.css';
import '../components/EmailEditor/src/lib/fontawesome-free/css/solid.min.css';
import '../components/EmailEditor/src/css/font.css';
import '../components/EmailEditor/src/css/beepro.css';
import '../components/EmailEditor/src/css/app.css';
import '../components/EmailEditor/src/css/builder_core.css';
import '../components/EmailEditor/src/scss/builder.scss';
import '../components/EmailEditor/src/scss/builder_ext.scss';
import '../components/EmailEditor/src/lib/sweetalert/sweetalert2.min.css';
import '../components/EmailEditor/src/scss/popup.scss';
import type { AppProps } from 'next/app';

const SafeHydrate = ({ children }) => (
  <div suppressHydrationWarning>
    {typeof window === 'undefined' ? null : children}
  </div>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

export default MyApp;
