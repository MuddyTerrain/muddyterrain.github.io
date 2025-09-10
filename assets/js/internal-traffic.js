
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
