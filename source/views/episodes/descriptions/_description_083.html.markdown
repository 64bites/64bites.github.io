In this episode we continue stabilization of the raster.

All we need to do is solve two problems:
 * find out a way to detect if we are one cycle early and then 
 * delay the execution by just one cycle only in this situation.

The former can be solved by comparing current rasterline register value at the right moment.
Once we know that we need to just find an instruction that can take a variable amount of cycles.

But how to do it in practice?