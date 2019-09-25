<template>
	<div class="animate">
		<div id="pixi" style="z-index:-1;"></div>
	</div>
</template>

<script>
import * as PIXI from 'pixi.js'
import logo from '@/assets/image/aaa.png'
export default {
  name: 'animate',
	data(){
		return {

		}
	},
	mounted() {
		if (browser.versions.mobile && !browser.versions.iPad) {
			this.v_appWi = document.getElementById("pixi").offsetWidth;
		} else {
			this.v_appWi = Math.min(600, document.getElementById("pixi").offsetWidth);
		}
		this.init_pixi();
	},
	methods: {
		init_pixi() {
		let app = new PIXI.Application(this.v_appWi, this.v_appWi, {
			backgroundColor: 0x1099bb
		});
		document.getElementById("pixi").appendChild(app.view);
		// create a new Sprite from an image path
		var bunny = PIXI.Sprite.fromImage(logo);

		// center the sprite's anchor point
		bunny.anchor.set(0.5);

		// move the sprite to the center of the screen
		bunny.x = app.screen.width / 2;
		bunny.y = app.screen.height / 2;

		app.stage.addChild(bunny);

		// Listen for animate update
		app.ticker.add(function(delta) {
			// just for fun, let's rotate mr rabbit a little
			// delta is 1 if running at 100% performance
			// creates frame-independent transformation
			bunny.rotation += 0.1 * delta;
		}); 
		}
	}
}
</script>

<style scoped>
.animate {
	background-color: red;
}
</style>