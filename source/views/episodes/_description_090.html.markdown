In the previous episode, we have learned that if the sprite is to be displayed on a next raster line the graphical chip steals five cycles from the processor.

That's not the whole story, though.

Not all of those five stolen cycles are equal.

The number changes depending on which sprites are currently active.

Today we will try to figure out the required delay for up to seven sprites.