import Head from 'next/head';
import { useTheme } from 'next-themes';

type SeoProps = {
  title?: string;
  description?: string;
};

const defaultMeta = {
  title: 'Zaid Mukaddam',
  description:
    'A medium or blog by Zaid for expressing opinions about website development, cyber security, etc.',
  siteName: 'zaidmukaddam.tech',
  url: 'https://zaidmukaddam.tech',
  type: 'website',
  robots: 'follow, index',
  image: '/android-chrome-256x256.png',
};

const Seo = ({ title, description }: SeoProps) => {
  const meta = {
    ...defaultMeta,
  };
  const { theme } = useTheme();


  return (
    <Head>
      <title>{title ? `${title} - ${meta.title}` : meta.title}</title>
      <meta content={description? description : meta.description} name='description' />
      <meta name='robots' content={meta.robots} />
      {/* openGraph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={description? description : meta.description} />
      <meta property='og:title' content={title ? `${title} - ${meta.title}` : meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter  */}
      <meta name='twitter:card' content='summary_large_image' />

      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      {theme === 'light' ? (
        <meta name='theme-color' content='#F5F5F5'></meta>

      ) : (
        <meta name='theme-color' content='#050505'></meta>

      )}
    </Head>
  );
};

export default Seo;
