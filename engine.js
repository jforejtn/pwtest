// engine.js

class Game {

    constructor(story, state) {

        this.state = state;
        this.story = story;
        this.currentScene = "start";
        this.currentAudio = null;

        this.image = document.getElementById("sceneImage");
        this.text = document.getElementById("sceneText");
        this.choices = document.getElementById("choices");
    }

    start() {
        this.showScene(this.currentScene);
    }

    showScene(sceneId) {

        const scene = this.story[sceneId];

        if (!scene) {
            console.error(`Unknown scene: ${sceneId}`);
            return;
        }

        this.currentScene = sceneId;

        this.stopAudio();

        this.showImage(scene.image);
        this.showText(scene.text);
        this.showChoices(scene.choices);

        if (scene.audio) {
            this.playAudio(scene.audio);
        }
    }

    showImage(filename) {

        if (!filename) {
            this.image.style.display = "none";
            return;
        }

        this.image.src = filename;
        this.image.style.display = "block";
    }

    showText(text) {
        this.text.textContent = text ?? "";
    }

    showChoices(choices) {

        this.choices.innerHTML = "";

        for (const choice of choices) {

            const button = document.createElement("button");

            if (choice.bgcolor)
            {
                button.style.background = choice.bgcolor;
            }

            button.textContent = choice.text;

            button.addEventListener("click", () => {

                if (choice.effect) {
                    if (choice.effect.type === "set") {
                        this.state[choice.effect.key] = choice.effect.value;
                    }
                }

                this.showScene(choice.next);
            });

            this.choices.appendChild(button);
        }
    }

    playAudio(filename) {

        this.currentAudio = new Audio(filename);

        this.currentAudio.play().catch(error => {
            console.log(error);
        });
    }

    stopAudio() {

        if (!this.currentAudio) {
            return;
        }

        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio = null;
    }

}

const game = new Game(story, state);

game.start();