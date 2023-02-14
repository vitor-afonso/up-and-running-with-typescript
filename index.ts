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

/* *7* Create Your First Generic in TypeScript *** */

// Instead of "IdontKnowTheType" we usually use "T"

function fill<IdontKnowTheType>(someArray: any[], item: IdontKnowTheType): IdontKnowTheType[] {
  return someArray.map(() => item);
}

const result = fill([1, 2, 3], 'a');

result.map((value) => value.toUpperCase());

const result2 = fill(['a', 'b', 'c'], 4);

result2.map((value) => value / 2);

/* *8* Use Type Definitions for Popular Projects on npm with @types *** */

import _ from 'lodash';
// follow VSCode quick fix suggestion and install @types/lodash

console.log('lodash.uniq', _.uniq([1, 1, 7]));

_.add; // if we hover the mouse on "add" we will see the what types it can take now
