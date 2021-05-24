const app = Vue.createApp({
  data() {
    return {
      Name: "Shynu Mary Varghese",
      Age: 28,

      Img: "https://th.bing.com/th/id/R290c0e6ddd86546909d73c1ff454ba76?rik=KQrFTKDTcSpzNg&riu=http%3a%2f%2fwww.lovethispic.com%2fuploaded_images%2f178430-Quote-From-The-Secret.PNG&ehk=S4Dt442DohV%2fdBEKNVw8XdbxkCT5TwceTfFQsr%2bE8NI%3d&risl=&pid=ImgRaw",
    };
  },
  methods: {
    calculateAge() {
      return this.Age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
