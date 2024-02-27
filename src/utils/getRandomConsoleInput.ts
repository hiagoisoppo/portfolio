function getRandomNumber(){
  const min = 0;
  const max = 99999;
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomTag(){
  const min = 3;
  const max = 8;
  const tagLength = Math.floor(Math.random() * (max - min) + min);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < tagLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


export default function getRandomConsoleInput(){
  const tag = getRandomTag();
  const code1 = getRandomNumber();
  const code2 = getRandomNumber();
  return `${tag}-${code1}-${code2}`
}