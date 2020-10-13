import fetch from 'node-fetch';
import FormData = require('form-data');

interface Input {
  name: string;
  value: string;
}

export default async (
  link: string,
  inputs: Input[],
): Promise<string | null> => {
  const formData = new FormData();
  inputs.map(input => formData.append(input.name, input.value));

  const login = await fetch(link, {
    method: 'POST',
    body: formData,
    headers: {
      //'X-CSRFToken': 'csrftoken',
      'Content-Type': 'application/x-www-form-urlencoded',
      'cookie': 'fr=fr'

    },

  }).then(res => res.headers.get('set-cookie')); // res.headers.get('set-cookie')
  return login;
};
/*fetch("https://www.facebook.com/login/", {
  body: "email=jerderceres%40outlook.com&pass=senha123%21%40",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
*/
