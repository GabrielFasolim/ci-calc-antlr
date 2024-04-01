// Developed by: Bruno Sonvezzo, Elvis Claudino, Felipe Pires, Gabriel Fasolim

// Parser

equation : expr_list EOF;  // A complete equation consists of an expr_list followed by the end of the file

expr_list : expr+;  // An expression list consists of one or more expressions

expr : LPAREN expr RPAREN  // An expression can be enclosed in parentheses
        | expr expr MATHOP  // Or it can be two expressions combined with a mathematical operator
        | expr MOP  // Or it can be an expression followed by a memory operation
        | MOP expr  // Or it can be a memory operation followed by an expression
        | expr MATHOP  // Or it can be an expression followed by a mathematical operator
        | NUMBER  // Or it can be just a number
        | MEM;  // Or it can be a memory operation

MATHOP : DIV  // Defines the division operator
        | POW  // Defines the power operator
        | PLUS  // Defines the addition operator
        | MULT  // Defines the multiplication operator
        | MINUS;  // Defines the subtraction operator

MOP : RES  // Defines the "res" (result) operation
    | MEM;  // Defines the "mem" (memory) operation

// Lexer

DIV : '/';  // Recognizes the division symbol
POW : '^';  // Recognizes the power symbol
PLUS : '+';  // Recognizes the plus symbol
MULT : '*';  // Recognizes the multiplication symbol
MINUS : '-';  // Recognizes the minus symbol
LPAREN : '(';  // Recognizes the left parenthesis symbol
RPAREN : ')';  // Recognizes the right parenthesis symbol
RES : 'res' | 'RES';  // Recognizes the "res" or "RES" keyword for result operation
MEM : 'mem' | 'MEM';  // Recognizes the "mem" or "MEM" keyword for memory operation
WS: [ \t\n\r\f]+ -> skip ;  // Defines whitespace to be ignored
NUMBER : '0' .. '9'+ ('.' '0' ..'9'{2})?;  // Recognizes a number, which can include a decimal part
