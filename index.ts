/* *4* Explore TypeScript by Writing Functions *** */

type GreetTypo = {
  greeting: string;
  name?: string;
};

function greet({ greeting, name = 'Vitto' }: GreetTypo): string {
  return `${greeting} ${name}!`;
}

const message: string = greet({ greeting: 'É modi', name: 'Casemiro' });

console.log('Greeting', message);

/* *6* Work with DOM Elements in TypeScript using Type Assertions *** */

// THIS WILL NOT WORK

// const inputText: HTMLInputElement = document.getElementById('inputText');

// inputText.autofocus = true;

// THIS WILL WORK

const inputText = document.getElementById('inputText') as HTMLInputElement;

inputText.autofocus = true;

// ex.2

inputText.addEventListener('input', (e) => {
  const myInput = e.currentTarget as HTMLInputElement;
  console.log(myInput.value);
});
