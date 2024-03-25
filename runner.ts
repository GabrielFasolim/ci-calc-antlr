import { CharStreams, CommonTokenStream } from "antlr4ts";
import { Expr_listContext, calcParser } from "./generated/calcParser";
import { calcLexer } from "./generated/calcLexer";
import * as fs from "fs";
import { calcListener } from "./calcListener";
import { Func_Context } from "./calcParser";
import { ParseTreeWalker } from "antlr4ts/tree";

// Create the lexer and parser
const code = fs.readFileSync("EXAMPLE.txt", "utf8");
const inputStream = CharStreams.fromString(code);
const lexer = new calcLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new calcParser(tokenStream);
const tree = parser.equation();

class ErrorCalcListener implements calcListener {
  constructor() {}
  enterFunc_(ctx: Func_Context) {
    console.log("Function: ", ctx._start.text);
  }
  enterExpr_list(ctx: Expr_listContext) {
    console.log("Expr_list: ", ctx._start.text);
  }
}

const listener: calcListener = new ErrorCalcListener();
ParseTreeWalker.DEFAULT.walk(listener, tree);
