import './style.css';

const env = process.env.NODE_ENV;
const host = window.location.hostname;
const subdomain = host.split('.')[ 0 ];

if (host.split('.').length > 2) {
  window.location.href = `https://mastodon.social/@${subdomain}`;
} else {
  const info = document.getElementById('info');
  info.classList.remove('hidden');
}
