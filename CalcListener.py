from antlr4 import *
if "." in __name__:
    from .CalculatorParser import CalculatorParser
else:
    from CalculatorParser import CalculatorParser

# Esta classe define um ouvinte completo para uma árvore de análise produzida por CalculatorParser.
class CalculatorListener(ParseTreeListener):

    # Entrar em uma árvore de análise produzida por CalculatorParser#expr.
    def enterExpr(self, ctx:CalculatorParser.ExprContext):
        pass

    # Sair de uma árvore de análise produzida por CalculatorParser#expr.
    def exitExpr(self, ctx:CalculatorParser.ExprContext):
        pass

    # Entrar em uma árvore de análise produzida por CalculatorParser#term.
    def enterTerm(self, ctx:CalculatorParser.TermContext):
        pass

    # Sair de uma árvore de análise produzida por CalculatorParser#term.
    def exitTerm(self, ctx:CalculatorParser.TermContext):
        pass

    # Entrar em uma árvore de análise produzida por CalculatorParser#factor.
    def enterFactor(self, ctx:CalculatorParser.FactorContext):
        pass

    # Sair de uma árvore de análise produzida por CalculatorParser#factor.
    def exitFactor(self, ctx:CalculatorParser.FactorContext):
        pass

del CalculatorParser
