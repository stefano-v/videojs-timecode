# videojs-timecode
Plugin for [VideoJS](http://www.videojs.com/) for showing current time and duration in 'broadcast' style: hh:mm:ss:ff

Options:

   * PAL
   * PALp
   * NTSC
   * NTSCp
   * STANDARD
   * Any other frame rate, given in numeric form (i.e. 12, 23.976, etc.)

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
