export default function ToogleTheme() {
  const html = document.getElementsByTagName('html')[0];
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }
}