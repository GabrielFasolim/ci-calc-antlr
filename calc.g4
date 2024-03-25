grammar calc;

// Parser

equation : expr_list EOF;

expr_list : expr +;

/**
(1 8 +)
(2 3 *)
(1 2 ^)
(33 MEM)
((1 1 *) (1 2 +) /)
(MEM 6 *)
(3.1 (4.0 5.1 -) +)
((1 RES) MEM)
((MEM (1 RES) ^) (2 2 *) +)
*/

expr : LPAREN expr RPAREN 
        | expr expr MATHOP 
        | expr MOP 
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