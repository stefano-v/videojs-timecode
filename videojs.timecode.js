/*
 * Video.js Timecode
 * Show timecodes in broadcast style hh:mm:ss:ff
 * Requires jQuery
 *
 * Copyright (c) 2015 gasvard
 */

(function(window, videojs) {
  'use strict';

  window['videojs_timecode'] = { version: "0.0.1" };
  var timecode = function(options) {
    var player = this;
    var def_options = {
        timeFormat: 'PAL'
    };
    options = options || {};
    var timeFormat = options.timeFormat || def_options.timeFormat;

    var videoWrapper = $(this.el());
    var timeEl = videoWrapper.find('.vjs-current-time-display');
    //making space for longer timecode
    timeEl.parent().css("width", "6em");
    var durationEl = videoWrapper.find('.vjs-duration-display');
      

    var timeUpdate = function (event) {
        timeEl.html(MillToTimecode(player.currentTime(), timeFormat));
        durationEl.html(MillToTimecode(player.duration(), timeFormat));
    };

    player.on('timeupdate', timeUpdate);

    

    return this;
  };

  videojs.plugin('timecode', timecode);

})(window, window.videojs);

//Converts time in seconds to a broadcast timecode
//timeFormat: 'PAL', 'PALp', 'NTSC', 'STANDARD'
function MillToTimecode(seconds, TimeFormat) {

    //alert(milliseconds);

    var h = Math.floor(seconds / 3600);

    seconds = seconds - h * 3600;

    var m = Math.floor(seconds / 60);

    seconds = seconds - m * 60;

    var s = Math.floor(seconds);

    seconds = seconds - s;

    if (TimeFormat == 'PAL') {
        var f = Math.floor((seconds * 1000) / 40);
    }
    else if (TimeFormat == 'NTSC') {
        var f = Math.floor((seconds * 1000) / (100 / 3));
    }
    else if (TimeFormat == 'PALp') {
        var f = Math.floor((seconds * 1000) / 20);
    }
    else if (TimeFormat == 'STANDARD') {
        var f = Math.floor(seconds * 1000);
    }

    // Check if we need to show hours
    h = (h < 10) ? ("0" + h) + ":" : h + ":";

    // If hours are showing, we may need to add a leading zero.
    // Always show at least one digit of minutes.
    m = (((h) && m < 10) ? "0" + m : m) + ":";

    // Check if leading zero is need for seconds
    s = ((s < 10) ? "0" + s : s) + ":";

    f = (f < 10) ? "0" + f : f;

    if (TimeFormat == 'STANDARD')
        f = (f < 100) ? "0" + f : f;

    return h + m + s + f;
}
