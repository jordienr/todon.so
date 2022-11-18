import './style.css';

const env = process.env.NODE_ENV;
const subdomain = window.location.hostname.split('.')[ 0 ];


// Redirect to mastodon.social/{subdomain}
if (env === 'production' && subdomain !== 'todon.so') {
  window.location.href = `https://mastodon.social/@${subdomain}`;
} else {
  const info = document.getElementById('info');
  info.classList.remove('hidden');
}
