const getHost: () => string = () => {
  const protocol: string = window.location.protocol;
  const host: string = window.location.host;

  return `${protocol}//${host}`;
};

interface Config {
  API_URL: string | undefined;
  SPOTIFY_AUTH_URL: string;
  SPOTIFY_BASE_URL: string;
  SPOTIFY_SCOPE: string;
  RESPONSE_TYPE: string;
  REDIRECT_URI: string;
}

const config: Config = {
  API_URL: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  SPOTIFY_AUTH_URL: 'https://accounts.spotify.com/authorize',
  SPOTIFY_BASE_URL: 'https://api.spotify.com/v1',
  SPOTIFY_SCOPE: 'playlist-modify-private playlist-modify-public',
  RESPONSE_TYPE: 'token',
  REDIRECT_URI: getHost(),
};

export default config;