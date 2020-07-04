var main = new Vue({
    el: '#main',
    data: {
        inputFrame: 0,
        framesMeasure: 0,
        totalFrames: 0,
        videoLength: 0,
    },
    created() {
        console.log("Created!");

    },
    methods: {

    },
    computed: {
        timeLong: function() {
            var total = (this.framesMeasure / this.inputFrame);
            var html_return;
            if (isNaN(total)) {
                html_return = `Waiting for Inputs...`;
            } else {
                html_return = `<small>@ ${this.inputFrame}fps, ${this.framesMeasure} Frames is </small><strong class="blue-text" style="text-decoration: underline;">${total}s</strong><small> long.</small>`;
            }
            return html_return;
        },
        totalFramesInVideo: function() {
            var total = (this.totalFrames / this.videoLength);
            var html_return_fps;
            if (total == 0) {
                html_return_fps = `Waiting for Inputs...`;
            } else {
                html_return_fps = `<small>${this.totalFrames} frames over ${this.videoLength}s is </small><strong class="blue-text" style="text-decoration: underline;">${total}fps</strong><small></small>`;
            }
            return html_return_fps;
        },
    }
});