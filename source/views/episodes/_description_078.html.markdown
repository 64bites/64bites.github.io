Most SID registers are write-only.

It means that we can't use the usual read-modify-store construction to update just part of a register.

The most common technique to deal with this problem is to employ so-called shadow registers.

And that's what we are going to learn today!