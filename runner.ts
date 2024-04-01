import { CharStreams, CommonTokenStream } from "antlr4ts";
import { RPNCalculatorParser } from "./generated/RPNCalculatorParser";
import { RPNCalculatorLexer } from "./generated/RPNCalculatorLexer";
import * as fs from "fs";

/**
 * it's very important to note that if you clone this repo now, you need to run `npm install` to install the dependencies\
 * and then run `npm start` and whole process of generating builds and transpiling ts to js will be done automatically\
 * and the main file will be executed. Then you'll get the AST output in the console.
 * @remarks at begining you'll get reference of grammar files error, but you need do above steps to setup.
 */
type Note = unknown;

const code = fs.readFileSync("EXAMPLE.txt", "utf8");
const inputStream = CharStreams.fromString(code);
const lexer = new RPNCalculatorLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new RPNCalculatorParser(tokenStream);
const tree = parser.file();

console.log(tree.toStringTree());