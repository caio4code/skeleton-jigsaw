ig.module('game.entities.killer16')
.requires('impact.entity')
.requires('game.entities.killer')
.defines(function () {
	EntityKiller16 = EntityKiller.extend({
		size: {x: 16, y: 16}
	});
});
