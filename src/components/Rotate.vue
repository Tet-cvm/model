<template>
	<div id="rotate"></div>
</template>

<script>
import bunny from '@/assets/image/bunny.png';
import * as PIXI from 'pixi.js'
export default {
  name: 'rotate',
	data(){
		return {

		}
	},
	created() {

	},
	mounted() {
		const _width = window.innerWidth;

		const app = new PIXI.Application({
			width: _width,
			height: _width,
			backgroundColor: '0, 223, 33',
			resolution: 1, //比例
		}); 

		document.getElementById("rotate").appendChild(app.view);

		const container = new PIXI.Container();
		
		console.log(container, 'container')

		app.stage.addChild(container);

		// Create a new texture
		const texture = PIXI.Texture.from(bunny);

		console.log(texture, 'texture');

		// Create a 5x5 grid of bunnies
		for (let i = 0; i < 25; i++) {
			const bunny = new PIXI.Sprite(texture);
			bunny.anchor.set(0.5);
			bunny.x = (i % 5) * 40;
			bunny.y = Math.floor(i / 5) * 40;
			container.addChild(bunny);
		}

		// Move container to the center
		container.x = app.screen.width / 2;
		container.y = app.screen.height / 2;

		// Center bunny sprite in local container coordinates
		container.pivot.x = container.width / 2;
		container.pivot.y = container.height / 2;

		// Listen for animate update
		app.ticker.add((delta) => {
			// rotate the container!
			// use delta to create frame-independent transform
			container.rotation -= 0.01 * delta;
		});

	},
	methods: {

	}
}
</script>

<style scoped>
.model {

}
</style>