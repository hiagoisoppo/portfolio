export function DetectTheme() {
  const html = document.getElementsByTagName('html')[0];
  const theme = window.localStorage.getItem("theme");

  if (theme) {
    if (theme === "dark") {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
      window.localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove('dark');
      window.localStorage.setItem("theme", "light")
    }
  }
} 

export default function ToogleTheme() {
  const html = document.getElementsByTagName('html')[0];
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    window.localStorage.setItem("theme", "light")
  } else {
    html.classList.add('dark');
    window.localStorage.setItem("theme", "dark")
  }
}