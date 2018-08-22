import { upgradeElement } from '@ampproject/worker-dom/dist/index.mjs';

upgradeElement(document.querySelector('main'), 'worker.js');