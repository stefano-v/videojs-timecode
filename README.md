# videojs-timecode
Plugin for [VideoJS](http://www.videojs.com/) for showing current time and duration in 'broadcast' style: hh:mm:ss:ff

Options:

   * PAL
   * PALp
   * NTSC
   * STANDARD

*Requires jQuery, any version*

## Example of usage

Add this code after your videoJS video tag:
    <script src="/Scripts/videojs/videojs.timecode.js"></script>
    <script type="text/javascript">
        videojs("VideoPlayer").ready(function(){
            this.timecode({
                timeFormat: 'PAL'
            });
        });
    </script>