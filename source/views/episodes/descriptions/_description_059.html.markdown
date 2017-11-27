Default IRQ handler does quite a few things for us. But it also wastes cycles and memory on tasks unrelated to our code.

Today we will learn how to handle IRQ signals ourselves and efficiently store the CPU state.