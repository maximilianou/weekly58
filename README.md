# node-puhchu

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-puhchu)

[TODO]: **take 15' to solve one**, ( while you have time and you are not doing real linux typescript javascript solidity html css sql nosql design problem solving understanding learning staking nft erc1155 ethereum eth mp4 video screening pairing layout react nextjs vercel netlify kubernetes k3s docker lxc lxd snap zx markdown markdown update system blog ecommerce nft marketplace profile resume cv bio svg .. blockchain the merge pull request peer review learning different environments readgin some code in other lang )

- One

```tsx
import { notEqual } from 'assert';
import { delay } from 'bluebird';
//import { EventEmitter } from 'events';

/**
 * Task
 *
 * Use abort controller class
 *   to cancel the generator
 *   before all letters emitted
 *
 * 1. Update the source function to be able to be cancelled
 * 2. Use the controller to cancel the generation
 */
const eventsBreak = new AbortController();

async function* source() {
  let letsGo = true;
  eventsBreak.signal.onabort = () => {
    letsGo = false;
  };
  const data = ['C', 'B', 'A'];
  while (!!data.length && letsGo) {
    console.log(` ---- ---------------------------`);
    console.log(` ---- Step ${data.length}`);
    await delay(100);

    yield data.pop()!;
  }
}

async function bootstrap() {
  const promise = collect(source());

  // abort call here
  eventsBreak.abort('Breaking!');
  const result = await promise;

  notEqual(result, 'ABC');

  console.log('OK');
}

bootstrap()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

async function collect(source: AsyncGenerator<string>): Promise<string> {
  let result = '';

  for await (const value of source) {
    result += value;
  }

  return result;
}
```
