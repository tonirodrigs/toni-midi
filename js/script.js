setTimeout(() => {
  const keys = document.querySelectorAll("button.key");

  for (let i in keys) {
    const { innerHTML: value } = keys[i];
    if (value !== undefined) {
      const keyClass = `key_${value.toLowerCase()}`;
      const soundID = `sound_${keyClass}`;

      document
        .querySelector(`.${keyClass}`)
        .addEventListener("click", () => {
          document.getElementById(soundID).currentTime = 0;
          document.getElementById(soundID).play();
        });
    }
  }
}, 1000);