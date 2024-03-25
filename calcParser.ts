// Generated from calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { calcListener } from "./calcListener";

export class calcParser extends Parser {
	public static readonly COS = 1;
	public static readonly SIN = 2;
	public static readonly TAN = 3;
	public static readonly ACOS = 4;
	public static readonly ASIN = 5;
	public static readonly ATAN = 6;
	public static readonly LN = 7;
	public static readonly LOG = 8;
	public static readonly SQRT = 9;
	public static readonly LPAREN = 10;
	public static readonly RPAREN = 11;
	public static readonly PLUS = 12;
	public static readonly MINUS = 13;
	public static readonly TIMES = 14;
	public static readonly DIV = 15;
	public static readonly GT = 16;
	public static readonly LT = 17;
	public static readonly EQ = 18;
	public static readonly COMMA = 19;
	public static readonly POINT = 20;
	public static readonly POW = 21;
	public static readonly PI = 22;
	public static readonly EULER = 23;
	public static readonly I = 24;
	public static readonly VARIABLE = 25;
	public static readonly SCIENTIFIC_NUMBER = 26;
	public static readonly WS = 27;
	public static readonly RULE_equation = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_multiplyingExpression = 2;
	public static readonly RULE_powExpression = 3;
	public static readonly RULE_signedAtom = 4;
	public static readonly RULE_atom = 5;
	public static readonly RULE_scientific = 6;
	public static readonly RULE_constant = 7;
	public static readonly RULE_variable = 8;
	public static readonly RULE_func_ = 9;
	public static readonly RULE_funcname = 10;
	public static readonly RULE_relop = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"equation", "expression", "multiplyingExpression", "powExpression", "signedAtom", 
		"atom", "scientific", "constant", "variable", "func_", "funcname", "relop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", "'atan'", "'ln'", 
		"'log'", "'sqrt'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", 
		"'='", "','", "'.'", "'^'", "'pi'", undefined, "'i'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "SQRT", 
		"LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", "EQ", 
		"COMMA", "POINT", "POW", "PI", "EULER", "I", "VARIABLE", "SCIENTIFIC_NUMBER", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(calcParser._LITERAL_NAMES, calcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return calcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return calcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return calcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(calcParser._ATN, this);
	}
	// @RuleVersion(0)
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, calcParser.RULE_equation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.expression();
			this.state = 25;
			this.relop();
			this.state = 26;
			this.expression();
			this.state = 27;
			this.match(calcParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, calcParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.multiplyingExpression();
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calcParser.PLUS || _la === calcParser.MINUS) {
				{
				{
				this.state = 30;
				_la = this._input.LA(1);
				if (!(_la === calcParser.PLUS || _la === calcParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 31;
				this.multiplyingExpression();
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplyingExpression(): MultiplyingExpressionContext {
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, calcParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.powExpression();
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calcParser.TIMES || _la === calcParser.DIV) {
				{
				{
				this.state = 38;
				_la = this._input.LA(1);
				if (!(_la === calcParser.TIMES || _la === calcParser.DIV)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 39;
				this.powExpression();
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public powExpression(): PowExpressionContext {
		let _localctx: PowExpressionContext = new PowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, calcParser.RULE_powExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.signedAtom();
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calcParser.POW) {
				{
				{
				this.state = 46;
				this.match(calcParser.POW);
				this.state = 47;
				this.signedAtom();
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedAtom(): SignedAtomContext {
		let _localctx: SignedAtomContext = new SignedAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, calcParser.RULE_signedAtom);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case calcParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.match(calcParser.PLUS);
				this.state = 54;
				this.signedAtom();
				}
				break;
			case calcParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.match(calcParser.MINUS);
				this.state = 56;
				this.signedAtom();
				}
				break;
			case calcParser.COS:
			case calcParser.SIN:
			case calcParser.TAN:
			case calcParser.ACOS:
			case calcParser.ASIN:
			case calcParser.ATAN:
			case calcParser.LN:
			case calcParser.LOG:
			case calcParser.SQRT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 57;
				this.func_();
				}
				break;
			case calcParser.LPAREN:
			case calcParser.PI:
			case calcParser.EULER:
			case calcParser.I:
			case calcParser.VARIABLE:
			case calcParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 58;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, calcParser.RULE_atom);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case calcParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.scientific();
				}
				break;
			case calcParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.variable();
				}
				break;
			case calcParser.PI:
			case calcParser.EULER:
			case calcParser.I:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 63;
				this.constant();
				}
				break;
			case calcParser.LPAREN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 64;
				this.match(calcParser.LPAREN);
				this.state = 65;
				this.expression();
				this.state = 66;
				this.match(calcParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scientific(): ScientificContext {
		let _localctx: ScientificContext = new ScientificContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, calcParser.RULE_scientific);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(calcParser.SCIENTIFIC_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, calcParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calcParser.PI) | (1 << calcParser.EULER) | (1 << calcParser.I))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, calcParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(calcParser.VARIABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_(): Func_Context {
		let _localctx: Func_Context = new Func_Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, calcParser.RULE_func_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.funcname();
			this.state = 77;
			this.match(calcParser.LPAREN);
			this.state = 78;
			this.expression();
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calcParser.COMMA) {
				{
				{
				this.state = 79;
				this.match(calcParser.COMMA);
				this.state = 80;
				this.expression();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
			this.match(calcParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcname(): FuncnameContext {
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, calcParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calcParser.COS) | (1 << calcParser.SIN) | (1 << calcParser.TAN) | (1 << calcParser.ACOS) | (1 << calcParser.ASIN) | (1 << calcParser.ATAN) | (1 << calcParser.LN) | (1 << calcParser.LOG) | (1 << calcParser.SQRT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relop(): RelopContext {
		let _localctx: RelopContext = new RelopContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, calcParser.RULE_relop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calcParser.GT) | (1 << calcParser.LT) | (1 << calcParser.EQ))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D_\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03#" +
		"\n\x03\f\x03\x0E\x03&\v\x03\x03\x04\x03\x04\x03\x04\x07\x04+\n\x04\f\x04" +
		"\x0E\x04.\v\x04\x03\x05\x03\x05\x03\x05\x07\x053\n\x05\f\x05\x0E\x056" +
		"\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06>\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07G\n\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07" +
		"\vT\n\v\f\v\x0E\vW\v\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02" +
		"\x02\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x02\x07\x03\x02\x0E\x0F\x03\x02\x10\x11\x03" +
		"\x02\x18\x1A\x03\x02\x03\v\x03\x02\x12\x14\x02\\\x02\x1A\x03\x02\x02\x02" +
		"\x04\x1F\x03\x02\x02\x02\x06\'\x03\x02\x02\x02\b/\x03\x02\x02\x02\n=\x03" +
		"\x02\x02\x02\fF\x03\x02\x02\x02\x0EH\x03\x02\x02\x02\x10J\x03\x02\x02" +
		"\x02\x12L\x03\x02\x02\x02\x14N\x03\x02\x02\x02\x16Z\x03\x02\x02\x02\x18" +
		"\\\x03\x02\x02\x02\x1A\x1B\x05\x04\x03\x02\x1B\x1C\x05\x18\r\x02\x1C\x1D" +
		"\x05\x04\x03\x02\x1D\x1E\x07\x02\x02\x03\x1E\x03\x03\x02\x02\x02\x1F$" +
		"\x05\x06\x04\x02 !\t\x02\x02\x02!#\x05\x06\x04\x02\" \x03\x02\x02\x02" +
		"#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x05\x03\x02\x02" +
		"\x02&$\x03\x02\x02\x02\',\x05\b\x05\x02()\t\x03\x02\x02)+\x05\b\x05\x02" +
		"*(\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-\x07\x03\x02\x02\x02.,\x03\x02\x02\x02/4\x05\n\x06\x0201\x07\x17\x02" +
		"\x0213\x05\n\x06\x0220\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02" +
		"\x0245\x03\x02\x02\x025\t\x03\x02\x02\x0264\x03\x02\x02\x0278\x07\x0E" +
		"\x02\x028>\x05\n\x06\x029:\x07\x0F\x02\x02:>\x05\n\x06\x02;>\x05\x14\v" +
		"\x02<>\x05\f\x07\x02=7\x03\x02\x02\x02=9\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02=<\x03\x02\x02\x02>\v\x03\x02\x02\x02?G\x05\x0E\b\x02@G\x05\x12\n" +
		"\x02AG\x05\x10\t\x02BC\x07\f\x02\x02CD\x05\x04\x03\x02DE\x07\r\x02\x02" +
		"EG\x03\x02\x02\x02F?\x03\x02\x02\x02F@\x03\x02\x02\x02FA\x03\x02\x02\x02" +
		"FB\x03\x02\x02\x02G\r\x03\x02\x02\x02HI\x07\x1C\x02\x02I\x0F\x03\x02\x02" +
		"\x02JK\t\x04\x02\x02K\x11\x03\x02\x02\x02LM\x07\x1B\x02\x02M\x13\x03\x02" +
		"\x02\x02NO\x05\x16\f\x02OP\x07\f\x02\x02PU\x05\x04\x03\x02QR\x07\x15\x02" +
		"\x02RT\x05\x04\x03\x02SQ\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02\x02" +
		"\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x07\r\x02" +
		"\x02Y\x15\x03\x02\x02\x02Z[\t\x05\x02\x02[\x17\x03\x02\x02\x02\\]\t\x06" +
		"\x02\x02]\x19\x03\x02\x02\x02\b$,4=FU";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!calcParser.__ATN) {
			calcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(calcParser._serializedATN));
		}

		return calcParser.__ATN;
	}

}

export class EquationContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public relop(): RelopContext {
		return this.getRuleContext(0, RelopContext);
	}
	public EOF(): TerminalNode { return this.getToken(calcParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_equation; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterEquation) {
			listener.enterEquation(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitEquation) {
			listener.exitEquation(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public multiplyingExpression(): MultiplyingExpressionContext[];
	public multiplyingExpression(i: number): MultiplyingExpressionContext;
	public multiplyingExpression(i?: number): MultiplyingExpressionContext | MultiplyingExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplyingExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calcParser.PLUS);
		} else {
			return this.getToken(calcParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calcParser.MINUS);
		} else {
			return this.getToken(calcParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_expression; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public powExpression(): PowExpressionContext[];
	public powExpression(i: number): PowExpressionContext;
	public powExpression(i?: number): PowExpressionContext | PowExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PowExpressionContext);
		} else {
			return this.getRuleContext(i, PowExpressionContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calcParser.TIMES);
		} else {
			return this.getToken(calcParser.TIMES, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calcParser.DIV);
		} else {
			return this.getToken(calcParser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
}


export class PowExpressionContext extends ParserRuleContext {
	public signedAtom(): SignedAtomContext[];
	public signedAtom(i: number): SignedAtomContext;
	public signedAtom(i?: number): SignedAtomContext | SignedAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignedAtomContext);
		} else {
			return this.getRuleContext(i, SignedAtomContext);
		}
	}
	public POW(): TerminalNode[];
	public POW(i: number): TerminalNode;
	public POW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calcParser.POW);
		} else {
			return this.getToken(calcParser.POW, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_powExpression; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterPowExpression) {
			listener.enterPowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitPowExpression) {
			listener.exitPowExpression(this);
		}
	}
}


export class SignedAtomContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(calcParser.PLUS, 0); }
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(calcParser.MINUS, 0); }
	public func_(): Func_Context | undefined {
		return this.tryGetRuleContext(0, Func_Context);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_signedAtom; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterSignedAtom) {
			listener.enterSignedAtom(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitSignedAtom) {
			listener.exitSignedAtom(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public scientific(): ScientificContext | undefined {
		return this.tryGetRuleContext(0, ScientificContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(calcParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(calcParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_atom; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class ScientificContext extends ParserRuleContext {
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(calcParser.SCIENTIFIC_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_scientific; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterScientific) {
			listener.enterScientific(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitScientific) {
			listener.exitScientific(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public PI(): TerminalNode | undefined { return this.tryGetToken(calcParser.PI, 0); }
	public EULER(): TerminalNode | undefined { return this.tryGetToken(calcParser.EULER, 0); }
	public I(): TerminalNode | undefined { return this.tryGetToken(calcParser.I, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_constant; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(calcParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_variable; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class Func_Context extends ParserRuleContext {
	public funcname(): FuncnameContext {
		return this.getRuleContext(0, FuncnameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(calcParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(calcParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calcParser.COMMA);
		} else {
			return this.getToken(calcParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_func_; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterFunc_) {
			listener.enterFunc_(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitFunc_) {
			listener.exitFunc_(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public COS(): TerminalNode | undefined { return this.tryGetToken(calcParser.COS, 0); }
	public TAN(): TerminalNode | undefined { return this.tryGetToken(calcParser.TAN, 0); }
	public SIN(): TerminalNode | undefined { return this.tryGetToken(calcParser.SIN, 0); }
	public ACOS(): TerminalNode | undefined { return this.tryGetToken(calcParser.ACOS, 0); }
	public ATAN(): TerminalNode | undefined { return this.tryGetToken(calcParser.ATAN, 0); }
	public ASIN(): TerminalNode | undefined { return this.tryGetToken(calcParser.ASIN, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(calcParser.LOG, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(calcParser.LN, 0); }
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(calcParser.SQRT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_funcname; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(calcParser.EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(calcParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(calcParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calcParser.RULE_relop; }
	// @Override
	public enterRule(listener: calcListener): void {
		if (listener.enterRelop) {
			listener.enterRelop(this);
		}
	}
	// @Override
	public exitRule(listener: calcListener): void {
		if (listener.exitRelop) {
			listener.exitRelop(this);
		}
	}
}


