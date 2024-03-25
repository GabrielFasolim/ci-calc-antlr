grammar calc;

// Parser

equation : expr_list EOF;

expr_list : expr +;

expr : LPAREN expr RPAREN 
        | expr expr MATHOP 
        | expr MOP 
        | MOP expr
        | expr MATHOP
        | NUMBER 
        | MEM;

MATHOP : DIV 
        | POW 
        | PLUS 
        | MULT 
        | MINUS;

MOP : RES | MEM;

// Lexer

DIV : '/';
POW : '^';
PLUS : '+';
MULT : '*';
MINUS : '-';
LPAREN : '(';
RPAREN : ')';
RES : 'res' | 'RES';
MEM : 'mem' | 'MEM';
WS: [ \t\n\r\f]+ -> skip ;
NUMBER : '0' .. '9'+ ('.' '0' ..'9'{2})?;