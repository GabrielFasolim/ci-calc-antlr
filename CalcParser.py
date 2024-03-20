from antlr4 import *
from CalculatorLexer import CalculatorLexer
from CalculatorParser import CalculatorParser
from CalculatorListener import CalculatorListener

class CalculatorParserImpl(CalculatorParser):
    def __init__(self, input:TokenStream):
        super().__init__(input)
        self.result = None  # Armazena o resultado da expressão
        self.stack = []     # Usado como uma pilha para operandos e resultados intermediários

    def exitExpr(self, ctx:CalculatorParser.ExprContext):
        right = self.stack.pop()  # Pega o operando à direita
        left = self.stack.pop()   # Pega o operando à esquerda
        op = ctx.getChild(1).getText()  # Pega o operador (+ ou -) do nó
        if op == '+':
            self.result = left + right  # Soma os operandos
        elif op == '-':
            self.result = left - right  # Subtrai os operandos

    def exitTerm(self, ctx:CalculatorParser.TermContext):
        right = self.stack.pop()  # Pega o operando à direita
        left = self.stack.pop()   # Pega o operando à esquerda
        op = ctx.getChild(1).getText()  # Pega o operador (* ou /) do nó
        if op == '*':
            self.result = left * right  # Multiplica os operandos
        elif op == '/':
            self.result = left / right  # Divide os operandos

    def exitFactor(self, ctx:CalculatorParser.FactorContext):
        if ctx.INT():
            # Se for um número inteiro, adiciona à pilha
            self.stack.append(int(ctx.INT().getText()))
        elif ctx.expr():
            # Se for uma expressão dentro de parênteses, adiciona o resultado à pilha
            self.stack.append(self.result)

def main():
    # Ler a expressão do arquivo
    with open('./expressions/expr.3.txt', 'r') as file:
        expressao = file.read()

    # Criar o lexer
    input_stream = InputStream(expressao)
    lexer = CalculatorLexer(input_stream)
    tokens = CommonTokenStream(lexer)

    # Criar o parser
    parser = CalculatorParserImpl(tokens)
    tree = parser.expr()

    # Criar o listener e visitar a árvore de parsing
    listener = CalculatorListener()
    walker = ParseTreeWalker()
    walker.walk(listener, tree)

    # Imprimir a expressão e o resultado
    print("Expressão:", expressao)
    print("Resultado:", listener.result)

if __name__ == '__main__':
    main()
