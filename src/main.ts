import { createInterface } from "readline";
import { Socket } from "net";
import { decode } from "iconv-lite";

let net_s = new Socket()

net_s.connect(Number(process.argv[2]))

net_s.on("data", (data: Buffer) =>
{
    console.log(decode(data, "GB2312"))
})

let rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input: string) =>
{
    net_s.write(input)
})

