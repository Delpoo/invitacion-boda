(function () {
  const cover = document.getElementById("cover");
  const invite = document.getElementById("invite");
  const openInviteButton = document.getElementById("openInviteButton");
  const canvaFrame = document.getElementById("canvaFrame");
  const audio = document.getElementById("weddingAudio");
  const musicToggle = document.getElementById("musicToggle");
  const audioNotice = document.getElementById("audioNotice");

  const hideNotice = () => {
    audioNotice.hidden = true;
    audioNotice.textContent = "";
  };

  const showNotice = (message) => {
    audioNotice.textContent = message;
    audioNotice.hidden = false;
  };

  const setMusicButtonState = (isPlaying) => {
    musicToggle.textContent = isPlaying ? "Pausar música" : "Reproducir música";
    musicToggle.setAttribute("aria-pressed", String(isPlaying));
  };

  const loadCanvaInvite = () => {
    const canvaUrl = canvaFrame.dataset.canvaUrl;

    if (canvaUrl && canvaFrame.getAttribute("src") === "about:blank") {
      canvaFrame.setAttribute("src", canvaUrl);
    }
  };

  const playMusic = async () => {
    hideNotice();

    try {
      audio.loop = true;
      audio.muted = false;
      await audio.play();
      setMusicButtonState(true);
    } catch (error) {
      setMusicButtonState(false);
      showNotice(
        'No se pudo iniciar la música. Verificá que musica.mp3 esté en la raíz del sitio y tocá "Reproducir música" para intentarlo de nuevo.'
      );
    }
  };

  openInviteButton.addEventListener(
    "click",
    async () => {
      loadCanvaInvite();

      invite.hidden = false;
      invite.setAttribute("aria-hidden", "false");

      cover.classList.add("cover--hidden");
      cover.setAttribute("aria-hidden", "true");

      window.setTimeout(() => {
        cover.hidden = true;
      }, 330);

      musicToggle.hidden = false;
      await playMusic();
    },
    { once: true }
  );

  musicToggle.addEventListener("click", async () => {
    if (audio.paused) {
      await playMusic();
      return;
    }

    audio.pause();
    setMusicButtonState(false);
    hideNotice();
  });

  audio.addEventListener("play", () => {
    setMusicButtonState(true);
    hideNotice();
  });

  audio.addEventListener("pause", () => {
    setMusicButtonState(false);
  });

  audio.addEventListener("error", () => {
    if (!musicToggle.hidden) {
      setMusicButtonState(false);
      showNotice("No encontramos musica.mp3. Subí ese archivo junto a index.html en la raíz del repo.");
    }
  });
})();
