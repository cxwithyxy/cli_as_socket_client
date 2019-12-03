import { createInterface } from "readline";


let rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input: string) =>
{
    console.log(`recv: ${input}`);
    
})
