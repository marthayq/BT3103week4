var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    message: "Greetings",
    newTitle: "",
    dIndex: -1,
    newUrl: "",
    videos: [
      {
        show: true,
        title: "Senorita",
        url: "https://www.youtube.com/embed/UXAdlaUhrlE"
      },
      {
        show: false,
        title: "Senorita_dance",
        url: "https://www.youtube.com/embed/oFQIYooKzxc"
      }
    ]
  },
  methods: {
    addVideo: function() {
      console.log("Adding video");
      var obj = {
        show: true,
        title: this.newTitle,
        url: this.newUrl
      };
      this.videos.push(obj);
    },
    deleteVideo: function(index) {
      console.log("Deleting video");
      index = this.dIndex;
      if (index > -1) {
        this.videos.splice(index - 1, 1);
      }
    }
  }
});
