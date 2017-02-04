#= require "highlight"
#= require "syntax-highlighting"
#= require "jquery.bbq"

self.loadKMTrackableVideo = (wistia_object, videoName) ->
  wistia_object.bind "play", ->
    _kmq.push(['record', 'Played Video', {'Played Video Name': videoName}])
  wistia_object.bind "pause", ->
    _kmq.push(['record', 'Paused Video', {'Paused Video Name':videoName}])
  wistia_object.bind "end", ->
    _kmq.push(['record', 'Finished Video', {'Finished Video Name':videoName}])
  wistia_object.bind "conversion", ->
    _kmq.push(['record', 'Finished Video', {'Entered Email Within Video Name':videoName}])
  wistia_object.bind "seek", ->
    _kmq.push(['record', 'Finished Video', {'Seeked Video Name':videoName}])
