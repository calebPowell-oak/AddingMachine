import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  log: any = "123123";

  value = '';
  onEnter(value: string) { this.log += "\n" + this.run(value); }
  ops: string[] = [];
  vals: number[] = [];

  constructor() {}

  public run(toEvaluate: string): number{
    let tokens: string[] = toEvaluate.split(" ");
    for(let token of tokens){
      if(token === "("){}
        else if (token === "+")    this.ops.push(token);
        else if (token === "-")    this.ops.push(token);
        else if (token === "*")    this.ops.push(token);
        else if (token === "/")    this.ops.push(token);
        else if (token === "sqrt") this.ops.push(token);
        else if (token === ")") {
          let op: string = this.ops.pop();
          let v: number = this.vals.pop();
          if      (op === "+")    v = this.vals.pop() + v;
          else if (op === "-")    v = this.vals.pop() - v;
          else if (op === "*")    v = this.vals.pop() * v;
          else if (op === "/")    v = this.vals.pop() / v;
          else if (op === "sqrt") v = Math.sqrt(v);
          this.vals.push(v);
        }
        else this.vals.push(Number.parseFloat(token));
    }
    return this.vals.pop();
  }

  public returnsAString(): string{
    return "hello world";
  }

  ngOnInit() {
  }

}
