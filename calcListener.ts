// Generated from calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { EquationContext } from "./calcParser";
import { ExpressionContext } from "./calcParser";
import { MultiplyingExpressionContext } from "./calcParser";
import { PowExpressionContext } from "./calcParser";
import { SignedAtomContext } from "./calcParser";
import { AtomContext } from "./calcParser";
import { ScientificContext } from "./calcParser";
import { ConstantContext } from "./calcParser";
import { VariableContext } from "./calcParser";
import { Func_Context } from "./calcParser";
import { FuncnameContext } from "./calcParser";
import { RelopContext } from "./calcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `calcParser`.
 */
export interface calcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `calcParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.powExpression`.
	 * @param ctx the parse tree
	 */
	enterPowExpression?: (ctx: PowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.powExpression`.
	 * @param ctx the parse tree
	 */
	exitPowExpression?: (ctx: PowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	enterSignedAtom?: (ctx: SignedAtomContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	exitSignedAtom?: (ctx: SignedAtomContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.scientific`.
	 * @param ctx the parse tree
	 */
	enterScientific?: (ctx: ScientificContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.scientific`.
	 * @param ctx the parse tree
	 */
	exitScientific?: (ctx: ScientificContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.func_`.
	 * @param ctx the parse tree
	 */
	enterFunc_?: (ctx: Func_Context) => void;
	/**
	 * Exit a parse tree produced by `calcParser.func_`.
	 * @param ctx the parse tree
	 */
	exitFunc_?: (ctx: Func_Context) => void;

	/**
	 * Enter a parse tree produced by `calcParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.relop`.
	 * @param ctx the parse tree
	 */
	enterRelop?: (ctx: RelopContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.relop`.
	 * @param ctx the parse tree
	 */
	exitRelop?: (ctx: RelopContext) => void;
}

