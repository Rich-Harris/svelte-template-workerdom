import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

// this is correct... but the DOM isn't updated?
console.log(document.body.innerHTML);

export default app;