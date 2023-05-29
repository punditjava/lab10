const image = document.querySelector('.image');

    image.addEventListener('click', () => {
      
      image.setAttribute('src', "https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg");
      caption.classList.toggle('active');
    });

    const caption = document.querySelector('.caption');

      caption.addEventListener('click', () => {
        caption.classList.toggle('active');
    });
    const captionText = document.querySelector('.caption-text');

    captionText.addEventListener('click', () => {
      captionText.classList.toggle('active');
    });