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
