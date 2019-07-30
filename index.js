// The idea is, we can detect what's plugged in where, and sort out the layout on our own.
//
// This will get us the connected devices in the following format:
// (this is my Particle setup with everything plugged in):
//  eDP-1 connected primary 1920x1080+1600+1440 (normal left inverted right x axis y axis) 309mm x 174mm
//  HDMI-1 connected 2560x1440+2560+0 (normal left inverted right x axis y axis) 597mm x 336mm
//  DP-2 connected 2560x1440+0+0 (normal left inverted right x axis y axis) 597mm x 336mm 
//FORMATS=$(xrandr -q | grep " connected")
//XRANDR_CMD="xrandr"

var parse = require('xrandr-parse');
var exec = require('child_process').exec;

exec('xrandr', function (err, stdout) {
    var query = parse(stdout);
    console.log(JSON.stringify(query, null, 2));
});




