// Developed by: Bruno Sonvezzo, Elvis Claudino, Felipe Pires, Gabriel Fasolim

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

// Read the contents of the "EXAMPLE.txt" file
const code = fs.readFileSync("EXAMPLE.txt", "utf8");

// Create an input stream of characters from the code
const inputStream = CharStreams.fromString(code);

// Create a lexer that reads from the input stream
const lexer = new RPNCalculatorLexer(inputStream);

// Create a token stream from the lexer
const tokenStream = new CommonTokenStream(lexer);

// Create a parser that reads from the token stream
const parser = new RPNCalculatorParser(tokenStream);

// Parse the input and generate the parse tree
const tree = parser.file();

// Print the string representation of the parse tree
console.log(tree.toStringTree());
