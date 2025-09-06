
document.addEventListener('DOMContentLoaded', function() {
  const internalTrafficCookieName = 'internal_user';
  const urlParam = 'traffic_type';
  const internalValue = 'internal';

  const params = new URLSearchParams(window.location.search);

  // 1. Check for URL parameter and set cookie
  if (params.has(urlParam) && params.get(urlParam) === internalValue) {
    // Set a cookie that expires in 30 days
    const d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = internalTrafficCookieName + "=true;" + expires + ";path=/";
  }
});

// Function to get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
