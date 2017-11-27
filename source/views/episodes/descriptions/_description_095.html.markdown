Often in programming Commodore 64, we need accurate and compact delay loops. 

We usually create them using one of branching instructions.

Once we introduce such loop, our code can become fragile, since branches can take one cycle more if the jump lands on a different page than the next instruction.

And it can happen by accident if we add some code to before those instructions or if we relocate the program.

This can lead to frustrating debugging sessions since the compiler doesn't warn us about this problem automatically.

Today we will change that.