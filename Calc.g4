grammar Calc;

expr : term ((ADD | SUB) term)* ;
term : factor ((MUL | DIV) factor)* ;
factor : INT | '(' expr ')' ;

ADD : '+' ;
SUB : '-' ;
MUL : '*' ;
DIV : '/' ;

INT : [0-9]+ ;
WS : [ \t\r\n]+ -> skip ;
