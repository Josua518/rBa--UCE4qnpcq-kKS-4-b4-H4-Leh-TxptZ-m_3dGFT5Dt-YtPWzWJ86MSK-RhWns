!
function e(t, r, n) {
	function i(a, s) {
		if (!r[a]) {
			if (!t[a]) {
				var f = "function" == typeof require && require;
				if (!s && f) return f(a, !0);
				if (o) return o(a, !0);
				var c = new Error("Cannot find module '" + a + "'");
				throw c.code = "MODULE_NOT_FOUND",
				c
			}
			var u = r[a] = {
				exports: {}
			};
			t[a][0].call(u.exports,
			function(e) {
				return i(t[a][1][e] || e)
			},
			u, u.exports, e, t, r, n)
		}
		return r[a].exports
	}
	for (var o = "function" == typeof require && require,
	a = 0; a < n.length; a++) i(n[a]);
	return i
} ({
	1 : [function(e, t) {
		t.exports = function(e, t) { (null == t || t > e.length) && (t = e.length);
			for (var r = 0,
			n = Array(t); r < t; r++) n[r] = e[r];
			return n
		}
	},
	{}],
	2 : [function(e, t) {
		var r = e("./arrayLikeToArray");
		t.exports = function(e) {
			if (Array.isArray(e)) return r(e)
		}
	},
	{
		"./arrayLikeToArray": 1
	}],
	3 : [function(e, t) {
		function r(e, t, r, n, i, o, a) {
			try {
				var s = e[o](a),
				f = s.value
			} catch(e) {
				return void r(e)
			}
			s.done ? t(f) : Promise.resolve(f).then(n, i)
		}
		t.exports = function(e) {
			return function() {
				var t = this,
				n = arguments;
				return new Promise(function(i, o) {
					function a(e) {
						r(f, i, o, a, s, "next", e)
					}
					function s(e) {
						r(f, i, o, a, s, "throw", e)
					}
					var f = e.apply(t, n);
					a(void 0)
				})
			}
		}
	},
	{}],
	4 : [function(e, t) {
		t.exports = function(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r,
			e
		}
	},
	{}],
	5 : [function(e, t) {
		t.exports = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
	},
	{}],
	6 : [function(e, t) {
		t.exports = function(e) {
			if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
		}
	},
	{}],
	7 : [function(e, t) {
		t.exports = function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
	},
	{}],
	8 : [function(e, t) {
		var r = e("./arrayWithoutHoles"),
		n = e("./iterableToArray"),
		i = e("./unsupportedIterableToArray"),
		o = e("./nonIterableSpread");
		t.exports = function(e) {
			return r(e) || n(e) || i(e) || o()
		}
	},
	{
		"./arrayWithoutHoles": 2,
		"./iterableToArray": 6,
		"./nonIterableSpread": 7,
		"./unsupportedIterableToArray": 9
	}],
	9 : [function(e, t) {
		var r = e("./arrayLikeToArray");
		t.exports = function(e, t) {
			if (e) {
				if ("string" == typeof e) return r(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name),
				"Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
			}
		}
	},
	{
		"./arrayLikeToArray": 1
	}],
	10 : [function(e, t) {
		var r = function(e) {
			"use strict";
			function t(e, t, i, o) {
				var a, s, c, u, h = t && t.prototype instanceof n ? t: n,
				l = Object.create(h.prototype),
				p = new d(o || []);
				return l._invoke = (a = e, s = i, c = p, u = "suspendedStart",
				function(e, t) {
					if ("executing" === u) throw new Error("Generator is already running");
					if ("completed" === u) {
						if ("throw" === e) throw t;
						return {
							value: void 0,
							done: !0
						}
					}
					for (c.method = e, c.arg = t;;) {
						var n = c.delegate;
						if (n) {
							var i = f(n, c);
							if (i) {
								if (i === w) continue;
								return i
							}
						}
						if ("next" === c.method) c.sent = c._sent = c.arg;
						else if ("throw" === c.method) {
							if ("suspendedStart" === u) throw u = "completed",
							c.arg;
							c.dispatchException(c.arg)
						} else "return" === c.method && c.abrupt("return", c.arg);
						u = "executing";
						var o = r(a, s, c);
						if ("normal" === o.type) {
							if (u = c.done ? "completed": "suspendedYield", o.arg === w) continue;
							return {
								value: o.arg,
								done: c.done
							}
						}
						"throw" === o.type && (u = "completed", c.method = "throw", c.arg = o.arg)
					}
				}),
				l
			}
			function r(e, t, r) {
				try {
					return {
						type: "normal",
						arg: e.call(t, r)
					}
				} catch(e) {
					return {
						type: "throw",
						arg: e
					}
				}
			}
			function n() {}
			function i() {}
			function o() {}
			function a(e) { ["next", "throw", "return"].forEach(function(t) {
					e[t] = function(e) {
						return this._invoke(t, e)
					}
				})
			}
			function s(e, t) {
				var n;
				this._invoke = function(i, o) {
					function a() {
						return new t(function(n, a) { !
							function n(i, o, a, s) {
								var f = r(e[i], e, o);
								if ("throw" !== f.type) {
									var c = f.arg,
									u = c.value;
									return u && "object" == typeof u && b.call(u, "__await") ? t.resolve(u.__await).then(function(e) {
										n("next", e, a, s)
									},
									function(e) {
										n("throw", e, a, s)
									}) : t.resolve(u).then(function(e) {
										c.value = e,
										a(c)
									},
									function(e) {
										return n("throw", e, a, s)
									})
								}
								s(f.arg)
							} (i, o, n, a)
						})
					}
					return n = n ? n.then(a, a) : a()
				}
			}
			function f(e, t) {
				var n = e.iterator[t.method];
				if (void 0 === n) {
					if (t.delegate = null, "throw" === t.method) {
						if (e.iterator.
						return && (t.method = "return", t.arg = void 0, f(e, t), "throw" === t.method)) return w;
						t.method = "throw",
						t.arg = new TypeError("The iterator does not provide a 'throw' method")
					}
					return w
				}
				var i = r(n, e.iterator, t.arg);
				if ("throw" === i.type) return t.method = "throw",
				t.arg = i.arg,
				t.delegate = null,
				w;
				var o = i.arg;
				return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, w) : o: (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, w)
			}
			function c(e) {
				var t = {
					tryLoc: e[0]
				};
				1 in e && (t.catchLoc = e[1]),
				2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
				this.tryEntries.push(t)
			}
			function u(e) {
				var t = e.completion || {};
				t.type = "normal",
				delete t.arg,
				e.completion = t
			}
			function d(e) {
				this.tryEntries = [{
					tryLoc: "root"
				}],
				e.forEach(c, this),
				this.reset(!0)
			}
			function h(e) {
				if (e) {
					var t = e[g];
					if (t) return t.call(e);
					if ("function" == typeof e.next) return e;
					if (!isNaN(e.length)) {
						var r = -1,
						n = function t() {
							for (; ++r < e.length;) if (b.call(e, r)) return t.value = e[r],
							t.done = !1,
							t;
							return t.value = void 0,
							t.done = !0,
							t
						};
						return n.next = n
					}
				}
				return {
					next: l
				}
			}
			function l() {
				return {
					value: void 0,
					done: !0
				}
			}
			var p = Object.prototype,
			b = p.hasOwnProperty,
			y = "function" == typeof Symbol ? Symbol: {},
			g = y.iterator || "@@iterator",
			m = y.asyncIterator || "@@asyncIterator",
			v = y.toStringTag || "@@toStringTag";
			e.wrap = t;
			var w = {},
			_ = {};
			_[g] = function() {
				return this
			};
			var S = Object.getPrototypeOf,
			k = S && S(S(h([])));
			k && k !== p && b.call(k, g) && (_ = k);
			var E = o.prototype = n.prototype = Object.create(_);
			return i.prototype = E.constructor = o,
			o.constructor = i,
			o[v] = i.displayName = "GeneratorFunction",
			e.isGeneratorFunction = function(e) {
				var t = "function" == typeof e && e.constructor;
				return !! t && (t === i || "GeneratorFunction" === (t.displayName || t.name))
			},
			e.mark = function(e) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : (e.__proto__ = o, v in e || (e[v] = "GeneratorFunction")),
				e.prototype = Object.create(E),
				e
			},
			e.awrap = function(e) {
				return {
					__await: e
				}
			},
			a(s.prototype),
			s.prototype[m] = function() {
				return this
			},
			e.AsyncIterator = s,
			e.async = function(r, n, i, o, a) {
				void 0 === a && (a = Promise);
				var f = new s(t(r, n, i, o), a);
				return e.isGeneratorFunction(n) ? f: f.next().then(function(e) {
					return e.done ? e.value: f.next()
				})
			},
			a(E),
			E[v] = "Generator",
			E[g] = function() {
				return this
			},
			E.toString = function() {
				return "[object Generator]"
			},
			e.keys = function(e) {
				var t = [];
				for (var r in e) t.push(r);
				return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n,
						r.done = !1,
						r
					}
					return r.done = !0,
					r
				}
			},
			e.values = h,
			d.prototype = {
				constructor: d,
				reset: function(e) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(u), !e) for (var t in this)"t" === t.charAt(0) && b.call(this, t) && !isNaN( + t.slice(1)) && (this[t] = void 0)
				},
				stop: function() {
					this.done = !0;
					var e = this.tryEntries[0].completion;
					if ("throw" === e.type) throw e.arg;
					return this.rval
				},
				dispatchException: function(e) {
					function t(t, n) {
						return o.type = "throw",
						o.arg = e,
						r.next = t,
						n && (r.method = "next", r.arg = void 0),
						!!n
					}
					if (this.done) throw e;
					for (var r = this,
					n = this.tryEntries.length - 1; 0 <= n; --n) {
						var i = this.tryEntries[n],
						o = i.completion;
						if ("root" === i.tryLoc) return t("end");
						if (i.tryLoc <= this.prev) {
							var a = b.call(i, "catchLoc"),
							s = b.call(i, "finallyLoc");
							if (a && s) {
								if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return t(i.finallyLoc)
							} else if (a) {
								if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return t(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(e, t) {
					for (var r, n = this.tryEntries.length - 1; 0 <= n; --n) if ((r = this.tryEntries[n]).tryLoc <= this.prev && b.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
						var i = r;
						break
					}
					i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
					var o = i ? i.completion: {};
					return o.type = e,
					o.arg = t,
					i ? (this.method = "next", this.next = i.finallyLoc, w) : this.complete(o)
				},
				complete: function(e, t) {
					if ("throw" === e.type) throw e.arg;
					return "break" === e.type || "continue" === e.type ? this.next = e.arg: "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
					w
				},
				finish: function(e) {
					for (var t, r = this.tryEntries.length - 1; 0 <= r; --r) if ((t = this.tryEntries[r]).finallyLoc === e) return this.complete(t.completion, t.afterLoc),
					u(t),
					w
				},
				catch: function(e) {
					for (var t, r = this.tryEntries.length - 1; 0 <= r; --r) if ((t = this.tryEntries[r]).tryLoc === e) {
						var n = t.completion;
						if ("throw" === n.type) {
							var i = n.arg;
							u(t)
						}
						return i
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(e, t, r) {
					return this.delegate = {
						iterator: h(e),
						resultName: t,
						nextLoc: r
					},
					"next" === this.method && (this.arg = void 0),
					w
				}
			},
			e
		} ("object" == typeof t ? t.exports: {});
		try {
			regeneratorRuntime = r
		} catch(e) {
			Function("n", "regeneratorRuntime=n")(r)
		}
	},
	{}],
	11 : [function(e, t) {
		t.exports = e("regenerator-runtime")
	},
	{
		"regenerator-runtime": 10
	}],
	12 : [function(e, t, r) {
		var n = Math.max,
		i = Math.pow,
		o = Math.floor,
		a = Math.round; !
		function(e, n) {
			if ("object" == typeof r && "object" == typeof t) t.exports = n();
			else if ("function" == typeof define && define.amd) define([], n);
			else {
				var i = n();
				for (var o in i)("object" == typeof r ? r: e)[o] = i[o]
			}
		} ("undefined" == typeof self ? this: self,
		function() {
			return r = {},
			e.m = t = [function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = r(2),
				i = new WeakMap;
				t.keySignatureKeys = ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"];
				var o = (s.prototype.update = function() {
					var e = this,
					t = 0,
					r = 0;
					this.tempos.sort(function(e, t) {
						return e.ticks - t.ticks
					}),
					this.tempos.forEach(function(n, i) {
						var o = 0 < i ? e.tempos[i - 1].bpm: e.tempos[0].bpm,
						a = n.ticks / e.ppq - r;
						n.time = 60 / o * a + t,
						t = n.time,
						r += a
					}),
					this.timeSignatures.sort(function(e, t) {
						return e.ticks - t.ticks
					}),
					this.timeSignatures.forEach(function(t, r) {
						var n = 0 < r ? e.timeSignatures[r - 1] : e.timeSignatures[0],
						i = (t.ticks - n.ticks) / e.ppq / n.timeSignature[0] / (n.timeSignature[1] / 4);
						n.measures = n.measures || 0,
						t.measures = i + n.measures
					})
				},
				s.prototype.ticksToSeconds = function(e) {
					var t = n.search(this.tempos, e);
					if ( - 1 === t) return e / this.ppq * .5;
					var r = this.tempos[t],
					i = r.time,
					o = (e - r.ticks) / this.ppq;
					return i + 60 / r.bpm * o
				},
				s.prototype.ticksToMeasures = function(e) {
					var t = n.search(this.timeSignatures, e);
					if ( - 1 === t) return e / this.ppq / 4;
					var r = this.timeSignatures[t],
					i = (e - r.ticks) / this.ppq;
					return r.measures + i / (r.timeSignature[0] / r.timeSignature[1]) / 4
				},
				Object.defineProperty(s.prototype, "ppq", {
					get: function() {
						return i.get(this)
					},
					enumerable: !0,
					configurable: !0
				}), s.prototype.secondsToTicks = function(e) {
					var t = n.search(this.tempos, e, "time");
					if ( - 1 === t) return a(e / .5 * this.ppq);
					var r = this.tempos[t],
					i = (e - r.time) / (60 / r.bpm);
					return a(r.ticks + i * this.ppq)
				},
				s.prototype.toJSON = function() {
					return {
						keySignatures: this.keySignatures,
						meta: this.meta,
						name: this.name,
						ppq: this.ppq,
						tempos: this.tempos.map(function(e) {
							return {
								bpm: e.bpm,
								ticks: e.ticks
							}
						}),
						timeSignatures: this.timeSignatures
					}
				},
				s.prototype.fromJSON = function(e) {
					this.name = e.name,
					this.tempos = e.tempos.map(function(e) {
						return Object.assign({},
						e)
					}),
					this.timeSignatures = e.timeSignatures.map(function(e) {
						return Object.assign({},
						e)
					}),
					this.keySignatures = e.keySignatures.map(function(e) {
						return Object.assign({},
						e)
					}),
					this.meta = e.meta.map(function(e) {
						return Object.assign({},
						e)
					}),
					i.set(this, e.ppq),
					this.update()
				},
				s.prototype.setTempo = function(e) {
					this.tempos = [{
						bpm: e,
						ticks: 0
					}],
					this.update()
				},
				s);
				function s(e) {
					var r = this;
					this.tempos = [],
					this.timeSignatures = [],
					this.keySignatures = [],
					this.meta = [],
					this.name = "",
					i.set(this, 480),
					e && (i.set(this, e.header.ticksPerBeat), e.tracks[0].forEach(function(e) {
						e.meta && ("timeSignature" === e.type ? r.timeSignatures.push({
							ticks: e.absoluteTime,
							timeSignature: [e.numerator, e.denominator]
						}) : "setTempo" === e.type ? r.tempos.push({
							bpm: 6e7 / e.microsecondsPerBeat,
							ticks: e.absoluteTime
						}) : "keySignature" === e.type ? r.keySignatures.push({
							key: t.keySignatureKeys[e.key + 7],
							scale: 0 === e.scale ? "major": "minor",
							ticks: e.absoluteTime
						}) : "trackName" === e.type ? r.name = e.text: "endOfTrack" !== e.type && r.meta.push({
							text: e.text,
							ticks: e.absoluteTime,
							type: e.type
						}))
					}), this.update())
				}
				t.Header = o
			},
			function(e, t, r) {
				t.parseMidi = r(6),
				t.writeMidi = r(7)
			},
			function(e, t) {
				"use strict";
				function r(e, t, r) {
					void 0 === r && (r = "ticks");
					var n = 0,
					i = e.length,
					a = i;
					if (0 < i && e[i - 1][r] <= t) return i - 1;
					for (; n < a;) {
						var s = o(n + (a - n) / 2),
						f = e[s],
						c = e[s + 1];
						if (f[r] === t) {
							for (var u = s; u < e.length; u++) e[u][r] === t && (s = u);
							return s
						}
						if (f[r] < t && c[r] > t) return s;
						f[r] > t ? a = s: f[r] < t && (n = s + 1)
					}
					return - 1
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				t.search = r,
				t.insert = function(e, t, n) {
					if (void 0 === n && (n = "ticks"), e.length) {
						var i = r(e, t[n], n);
						e.splice(i + 1, 0, t)
					} else e.push(t)
				}
			},
			function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = r(2),
				o = r(4),
				a = r(10),
				s = r(11),
				f = r(12),
				c = r(14),
				u = new WeakMap,
				d = (h.prototype.addNote = function(e) {
					var t = u.get(this),
					r = new c.Note({
						midi: 0,
						ticks: 0,
						velocity: 1
					},
					{
						ticks: 0,
						velocity: 0
					},
					t);
					return Object.assign(r, e),
					n.insert(this.notes, r, "ticks"),
					this
				},
				h.prototype.addCC = function(e) {
					var t = u.get(this),
					r = new o.ControlChange({
						controllerType: e.number
					},
					t);
					return delete e.number,
					Object.assign(r, e),
					Array.isArray(this.controlChanges[r.number]) || (this.controlChanges[r.number] = []),
					n.insert(this.controlChanges[r.number], r, "ticks"),
					this
				},
				h.prototype.addPitchBend = function(e) {
					var t = u.get(this),
					r = new s.PitchBend({},
					t);
					return Object.assign(r, e),
					n.insert(this.pitchBends, r, "ticks"),
					this
				},
				Object.defineProperty(h.prototype, "duration", {
					get: function() {
						var e = this.notes[this.notes.length - 1];
						return e ? e.time + e.duration: 0
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(h.prototype, "durationTicks", {
					get: function() {
						var e = this.notes[this.notes.length - 1];
						return e ? e.ticks + e.durationTicks: 0
					},
					enumerable: !0,
					configurable: !0
				}), h.prototype.fromJSON = function(e) {
					var t = this;
					for (var r in this.name = e.name,
					this.channel = e.channel,
					this.instrument = new f.Instrument(void 0, this), this.instrument.fromJSON(e.instrument), e.controlChanges) e.controlChanges[r] && e.controlChanges[r].forEach(function(e) {
						t.addCC({
							number: e.number,
							ticks: e.ticks,
							value: e.value
						})
					});
					e.notes.forEach(function(e) {
						t.addNote({
							durationTicks: e.durationTicks,
							midi: e.midi,
							ticks: e.ticks,
							velocity: e.velocity
						})
					})
				},
				h.prototype.toJSON = function() {
					for (var e = {},
					t = 0; t < 127; t++) this.controlChanges.hasOwnProperty(t) && (e[t] = this.controlChanges[t].map(function(e) {
						return e.toJSON()
					}));
					return {
						channel: this.channel,
						controlChanges: e,
						pitchBends: this.pitchBends.map(function(e) {
							return e.toJSON()
						}),
						instrument: this.instrument.toJSON(),
						name: this.name,
						notes: this.notes.map(function(e) {
							return e.toJSON()
						})
					}
				},
				h);
				function h(e, t) {
					var r = this;
					if (this.name = "", this.notes = [], this.controlChanges = a.createControlChanges(), this.pitchBends = [], u.set(this, t), e) {
						var n = e.find(function(e) {
							return "trackName" === e.type
						});
						this.name = n ? n.text: ""
					}
					if (this.instrument = new f.Instrument(e, this), this.channel = 0, e) {
						for (var o = e.filter(function(e) {
							return "noteOn" === e.type
						}), s = e.filter(function(e) {
							return "noteOff" === e.type
						}), c = function() {
							var e = o.shift();
							d.channel = e.channel;
							var t = s.findIndex(function(t) {
								return t.noteNumber === e.noteNumber && t.absoluteTime >= e.absoluteTime
							});
							if ( - 1 !== t) {
								var r = s.splice(t, 1)[0];
								d.addNote({
									durationTicks: r.absoluteTime - e.absoluteTime,
									midi: e.noteNumber,
									noteOffVelocity: r.velocity / 127,
									ticks: e.absoluteTime,
									velocity: e.velocity / 127
								})
							}
						},
						d = this; o.length;) c();
						e.filter(function(e) {
							return "controller" === e.type
						}).forEach(function(e) {
							r.addCC({
								number: e.controllerType,
								ticks: e.absoluteTime,
								value: e.value / 127
							})
						}),
						e.filter(function(e) {
							return "pitchBend" === e.type
						}).forEach(function(e) {
							r.addPitchBend({
								ticks: e.absoluteTime,
								value: e.value / i(2, 13)
							})
						})
					}
				}
				t.Track = d
			},
			function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				t.controlChangeNames = {
					1 : "modulationWheel",
					2 : "breath",
					4 : "footController",
					5 : "portamentoTime",
					7 : "volume",
					8 : "balance",
					10 : "pan",
					64 : "sustain",
					65 : "portamentoTime",
					66 : "sostenuto",
					67 : "softPedal",
					68 : "legatoFootswitch",
					84 : "portamentoControl"
				},
				t.controlChangeIds = Object.keys(t.controlChangeNames).reduce(function(e, r) {
					return e[t.controlChangeNames[r]] = r,
					e
				},
				{});
				var r = new WeakMap,
				n = new WeakMap,
				i = (Object.defineProperty(o.prototype, "number", {
					get: function() {
						return n.get(this)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(o.prototype, "name", {
					get: function() {
						return t.controlChangeNames[this.number] ? t.controlChangeNames[this.number] : null
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(o.prototype, "time", {
					get: function() {
						return r.get(this).ticksToSeconds(this.ticks)
					},
					set: function(e) {
						var t = r.get(this);
						this.ticks = t.secondsToTicks(e)
					},
					enumerable: !0,
					configurable: !0
				}), o.prototype.toJSON = function() {
					return {
						number: this.number,
						ticks: this.ticks,
						time: this.time,
						value: this.value
					}
				},
				o);
				function o(e, t) {
					r.set(this, t),
					n.set(this, e.controllerType),
					this.ticks = e.absoluteTime,
					this.value = e.value
				}
				t.ControlChange = i
			},
			function(e, t, r) {
				"use strict";
				var i = this && this.__awaiter ||
				function(e, t, r, n) {
					return new(r = r || Promise)(function(i, o) {
						function a(e) {
							try {
								f(n.next(e))
							} catch(e) {
								o(e)
							}
						}
						function s(e) {
							try {
								f(n.
								throw (e))
							} catch(e) {
								o(e)
							}
						}
						function f(e) {
							var t;
							e.done ? i(e.value) : ((t = e.value) instanceof r ? t: new r(function(e) {
								e(t)
							})).then(a, s)
						}
						f((n = n.apply(e, t || [])).next())
					})
				},
				o = this && this.__generator ||
				function(e, t) {
					function r(r) {
						return function(a) {
							return function(r) {
								if (n) throw new TypeError("Generator is already executing.");
								for (; s;) try {
									if (n = 1, i && (o = 2 & r[0] ? i.
									return: r[0] ? i.
									throw || ((o = i.
									return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
									switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
									case 0:
									case 1:
										o = r;
										break;
									case 4:
										return s.label++,
										{
											value: r[1],
											done: !1
										};
									case 5:
										s.label++,
										i = r[1],
										r = [0];
										continue;
									case 7:
										r = s.ops.pop(),
										s.trys.pop();
										continue;
									default:
										if (! ((o = 0 < (o = s.trys).length && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
											s = 0;
											continue
										}
										if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
											s.label = r[1];
											break
										}
										if (6 === r[0] && s.label < o[1]) {
											s.label = o[1],
											o = r;
											break
										}
										if (o && s.label < o[2]) {
											s.label = o[2],
											s.ops.push(r);
											break
										}
										o[2] && s.ops.pop(),
										s.trys.pop();
										continue
									}
									r = t.call(e, s)
								} catch(a) {
									r = [6, a],
									i = 0
								} finally {
									n = o = 0
								}
								if (5 & r[0]) throw r[1];
								return {
									value: r[0] ? r[1] : void 0,
									done: !0
								}
							} ([r, a])
						}
					}
					var n, i, o, a, s = {
						label: 0,
						sent: function() {
							if (1 & o[0]) throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: r(0),
						throw: r(1),
						return: r(2)
					},
					"function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}),
					a
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = r(1),
				s = r(8),
				f = r(0),
				c = r(3),
				u = (d.fromUrl = function(e) {
					return i(this, void 0, void 0,
					function() {
						var t;
						return o(this,
						function(r) {
							switch (r.label) {
							case 0:
								return [4, fetch(e)];
							case 1:
								return (t = r.sent()).ok ? [4, t.arrayBuffer()] : [3, 3];
							case 2:
								return [2, new d(r.sent())];
							case 3:
								throw new Error("could not load " + e)
							}
						})
					})
				},
				Object.defineProperty(d.prototype, "name", {
					get: function() {
						return this.header.name
					},
					set: function(e) {
						this.header.name = e
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(d.prototype, "duration", {
					get: function() {
						var e = this.tracks.map(function(e) {
							return e.duration
						});
						return n.apply(Math, e)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(d.prototype, "durationTicks", {
					get: function() {
						var e = this.tracks.map(function(e) {
							return e.durationTicks
						});
						return n.apply(Math, e)
					},
					enumerable: !0,
					configurable: !0
				}), d.prototype.addTrack = function() {
					var e = new c.Track(void 0, this.header);
					return this.tracks.push(e),
					e
				},
				d.prototype.toArray = function() {
					return s.encode(this)
				},
				d.prototype.toJSON = function() {
					return {
						header: this.header.toJSON(),
						tracks: this.tracks.map(function(e) {
							return e.toJSON()
						})
					}
				},
				d.prototype.fromJSON = function(e) {
					var t = this;
					this.header = new f.Header,
					this.header.fromJSON(e.header),
					this.tracks = e.tracks.map(function(e) {
						var r = new c.Track(void 0, t.header);
						return r.fromJSON(e),
						r
					})
				},
				d.prototype.clone = function() {
					var e = new d;
					return e.fromJSON(this.toJSON()),
					e
				},
				d);
				function d(e) {
					var t = this,
					r = null;
					e && (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (r = a.parseMidi(e)).tracks.forEach(function(e) {
						var t = 0;
						e.forEach(function(e) {
							t += e.deltaTime,
							e.absoluteTime = t
						})
					}), r.tracks = function(e) {
						for (var t = [], r = 0; r < e.length; r++) for (var n = t.length,
						i = new Map,
						o = Array(16).fill(0), a = 0, s = e[r]; a < s.length; a++) {
							var f = s[a],
							c = n,
							u = f.channel;
							if (void 0 !== u) {
								"programChange" === f.type && (o[u] = f.programNumber);
								var d = o[u] + " " + u;
								i.has(d) ? c = i.get(d) : (c = n + i.size, i.set(d, c))
							}
							t[c] || t.push([]),
							t[c].push(f)
						}
						return t
					} (r.tracks)),
					this.header = new f.Header(r),
					this.tracks = [],
					e && (this.tracks = r.tracks.map(function(e) {
						return new c.Track(e, t.header)
					}), 1 === r.header.format && 0 === this.tracks[0].duration && this.tracks.shift())
				}
				t.Midi = u;
				var h = r(3);
				t.Track = h.Track;
				var l = r(0);
				t.Header = l.Header
			},
			function(e) {
				function t(e) {
					function t() {
						var e = {};
						e.deltaTime = o.readVarInt();
						var t = o.readUInt8();
						if (240 == (240 & t)) {
							if (255 !== t) {
								if (240 == t) return e.type = "sysEx",
								i = o.readVarInt(),
								e.data = o.readBytes(i),
								e;
								if (247 == t) return e.type = "endSysEx",
								i = o.readVarInt(),
								e.data = o.readBytes(i),
								e;
								throw "Unrecognised MIDI event type byte: " + t
							}
							e.meta = !0;
							var r = o.readUInt8(),
							i = o.readVarInt();
							switch (r) {
							case 0:
								if (e.type = "sequenceNumber", 2 !== i) throw "Expected length for sequenceNumber event is 2, got " + i;
								return e.number = o.readUInt16(),
								e;
							case 1:
								return e.type = "text",
								e.text = o.readString(i),
								e;
							case 2:
								return e.type = "copyrightNotice",
								e.text = o.readString(i),
								e;
							case 3:
								return e.type = "trackName",
								e.text = o.readString(i),
								e;
							case 4:
								return e.type = "instrumentName",
								e.text = o.readString(i),
								e;
							case 5:
								return e.type = "lyrics",
								e.text = o.readString(i),
								e;
							case 6:
								return e.type = "marker",
								e.text = o.readString(i),
								e;
							case 7:
								return e.type = "cuePoint",
								e.text = o.readString(i),
								e;
							case 32:
								if (e.type = "channelPrefix", 1 != i) throw "Expected length for channelPrefix event is 1, got " + i;
								return e.channel = o.readUInt8(),
								e;
							case 33:
								if (e.type = "portPrefix", 1 != i) throw "Expected length for portPrefix event is 1, got " + i;
								return e.port = o.readUInt8(),
								e;
							case 47:
								if (e.type = "endOfTrack", 0 != i) throw "Expected length for endOfTrack event is 0, got " + i;
								return e;
							case 81:
								if (e.type = "setTempo", 3 != i) throw "Expected length for setTempo event is 3, got " + i;
								return e.microsecondsPerBeat = o.readUInt24(),
								e;
							case 84:
								if (e.type = "smpteOffset", 5 != i) throw "Expected length for smpteOffset event is 5, got " + i;
								var a = o.readUInt8();
								return e.frameRate = {
									0 : 24,
									32 : 25,
									64 : 29,
									96 : 30
								} [96 & a],
								e.hour = 31 & a,
								e.min = o.readUInt8(),
								e.sec = o.readUInt8(),
								e.frame = o.readUInt8(),
								e.subFrame = o.readUInt8(),
								e;
							case 88:
								if (e.type = "timeSignature", 4 != i) throw "Expected length for timeSignature event is 4, got " + i;
								return e.numerator = o.readUInt8(),
								e.denominator = 1 << o.readUInt8(),
								e.metronome = o.readUInt8(),
								e.thirtyseconds = o.readUInt8(),
								e;
							case 89:
								if (e.type = "keySignature", 2 != i) throw "Expected length for keySignature event is 2, got " + i;
								return e.key = o.readInt8(),
								e.scale = o.readUInt8(),
								e;
							case 127:
								return e.type = "sequencerSpecific",
								e.data = o.readBytes(i),
								e;
							default:
								return e.type = "unknownMeta",
								e.data = o.readBytes(i),
								e.metatypeByte = r,
								e
							}
						} else {
							var s;
							if (0 == (128 & t)) {
								if (null === n) throw "Running status byte encountered before status byte";
								s = t,
								t = n,
								e.running = !0
							} else s = o.readUInt8(),
							n = t;
							var f = t >> 4;
							switch (e.channel = 15 & t, f) {
							case 8:
								return e.type = "noteOff",
								e.noteNumber = s,
								e.velocity = o.readUInt8(),
								e;
							case 9:
								var c = o.readUInt8();
								return e.type = 0 === c ? "noteOff": "noteOn",
								e.noteNumber = s,
								0 === (e.velocity = c) && (e.byte9 = !0),
								e;
							case 10:
								return e.type = "noteAftertouch",
								e.noteNumber = s,
								e.amount = o.readUInt8(),
								e;
							case 11:
								return e.type = "controller",
								e.controllerType = s,
								e.value = o.readUInt8(),
								e;
							case 12:
								return e.type = "programChange",
								e.programNumber = s,
								e;
							case 13:
								return e.type = "channelAftertouch",
								e.amount = s,
								e;
							case 14:
								return e.type = "pitchBend",
								e.value = s + (o.readUInt8() << 7) - 8192,
								e;
							default:
								throw "Unrecognised MIDI event type: " + f
							}
						}
					}
					for (var n, i, o = new r(e), a = []; ! o.eof();) i = t(),
					a.push(i);
					return a
				}
				function r(e) {
					this.buffer = e,
					this.bufferLen = this.buffer.length,
					this.pos = 0
				}
				r.prototype.eof = function() {
					return this.pos >= this.bufferLen
				},
				r.prototype.readUInt8 = function() {
					var e = this.buffer[this.pos];
					return this.pos += 1,
					e
				},
				r.prototype.readInt8 = function() {
					var e = this.readUInt8();
					return 128 & e ? e - 256 : e
				},
				r.prototype.readUInt16 = function() {
					return (this.readUInt8() << 8) + this.readUInt8()
				},
				r.prototype.readInt16 = function() {
					var e = this.readUInt16();
					return 32768 & e ? e - 65536 : e
				},
				r.prototype.readUInt24 = function() {
					return (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
				},
				r.prototype.readInt24 = function() {
					var e = this.readUInt24();
					return 8388608 & e ? e - 16777216 : e
				},
				r.prototype.readUInt32 = function() {
					return (this.readUInt8() << 24) + (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
				},
				r.prototype.readBytes = function(e) {
					var t = this.buffer.slice(this.pos, this.pos + e);
					return this.pos += e,
					t
				},
				r.prototype.readString = function(e) {
					var t = this.readBytes(e);
					return String.fromCharCode.apply(null, t)
				},
				r.prototype.readVarInt = function() {
					for (var e, t = 0; ! this.eof();) {
						if (! (128 & (e = this.readUInt8()))) return t + e;
						t += 127 & e,
						t <<= 7
					}
					return t
				},
				r.prototype.readChunk = function() {
					var e = this.readString(4),
					t = this.readUInt32();
					return {
						id: e,
						length: t,
						data: this.readBytes(t)
					}
				},
				e.exports = function(e) {
					var n, i, o, a = new r(e),
					s = a.readChunk();
					if ("MThd" != s.id) throw "Bad MIDI file.  Expected 'MHdr', got: '" + s.id + "'";
					for (var f, c = (i = n = void 0, i = {
						format: (n = new r(s.data)).readUInt16(),
						numTracks: n.readUInt16()
					},
					32768 & (o = n.readUInt16()) ? (i.framesPerSecond = 256 - (o >> 8), i.ticksPerFrame = 255 & o) : i.ticksPerBeat = o, i), u = [], d = 0; ! a.eof() && d < c.numTracks; d++) {
						if ("MTrk" != (f = a.readChunk()).id) throw "Bad MIDI file.  Expected 'MTrk', got: '" + f.id + "'";
						var h = t(f.data);
						u.push(h)
					}
					return {
						header: c,
						tracks: u
					}
				}
			},
			function(e) {
				function t(e, t, i) {
					var o, a = new n,
					s = t.length,
					f = null;
					for (o = 0; o < s; o++) ! 1 !== i.running && (i.running || t[o].running) || (f = null),
					f = r(a, t[o], f, i.useByte9ForNoteOff);
					e.writeChunk("MTrk", a.buffer)
				}
				function r(e, t, r, n) {
					var i = t.type,
					a = t.deltaTime,
					s = t.text || "",
					f = t.data || [],
					c = null;
					switch (e.writeVarInt(a), i) {
					case "sequenceNumber":
						e.writeUInt8(255),
						e.writeUInt8(0),
						e.writeVarInt(2),
						e.writeUInt16(t.number);
						break;
					case "text":
						e.writeUInt8(255),
						e.writeUInt8(1),
						e.writeVarInt(s.length),
						e.writeString(s);
						break;
					case "copyrightNotice":
						e.writeUInt8(255),
						e.writeUInt8(2),
						e.writeVarInt(s.length),
						e.writeString(s);
						break;
					case "trackName":
						e.writeUInt8(255),
						e.writeUInt8(3),
						e.writeVarInt(s.length),
						e.writeString(s);
						break;
					case "instrumentName":
						e.writeUInt8(255),
						e.writeUInt8(4),
						e.writeVarInt(s.length),
						e.writeString(s);
						break;
					case "lyrics":
						e.writeUInt8(255),
						e.writeUInt8(5),
						e.writeVarInt(s.length),
						e.writeString(s);
						break;
					case "marker":
						e.writeUInt8(255),
						e.writeUInt8(6),
						e.writeVarInt(s.length),
						e.writeString(s);
						break;
					case "cuePoint":
						e.writeUInt8(255),
						e.writeUInt8(7),
						e.writeVarInt(s.length),
						e.writeString(s);
						break;
					case "channelPrefix":
						e.writeUInt8(255),
						e.writeUInt8(32),
						e.writeVarInt(1),
						e.writeUInt8(t.channel);
						break;
					case "portPrefix":
						e.writeUInt8(255),
						e.writeUInt8(33),
						e.writeVarInt(1),
						e.writeUInt8(t.port);
						break;
					case "endOfTrack":
						e.writeUInt8(255),
						e.writeUInt8(47),
						e.writeVarInt(0);
						break;
					case "setTempo":
						e.writeUInt8(255),
						e.writeUInt8(81),
						e.writeVarInt(3),
						e.writeUInt24(t.microsecondsPerBeat);
						break;
					case "smpteOffset":
						e.writeUInt8(255),
						e.writeUInt8(84),
						e.writeVarInt(5);
						var u = 31 & t.hour | {
							24 : 0,
							25 : 32,
							29 : 64,
							30 : 96
						} [t.frameRate];
						e.writeUInt8(u),
						e.writeUInt8(t.min),
						e.writeUInt8(t.sec),
						e.writeUInt8(t.frame),
						e.writeUInt8(t.subFrame);
						break;
					case "timeSignature":
						e.writeUInt8(255),
						e.writeUInt8(88),
						e.writeVarInt(4),
						e.writeUInt8(t.numerator);
						var d = 255 & o(Math.log(t.denominator) / Math.LN2);
						e.writeUInt8(d),
						e.writeUInt8(t.metronome),
						e.writeUInt8(t.thirtyseconds || 8);
						break;
					case "keySignature":
						e.writeUInt8(255),
						e.writeUInt8(89),
						e.writeVarInt(2),
						e.writeInt8(t.key),
						e.writeUInt8(t.scale);
						break;
					case "sequencerSpecific":
						e.writeUInt8(255),
						e.writeUInt8(127),
						e.writeVarInt(f.length),
						e.writeBytes(f);
						break;
					case "unknownMeta":
						null != t.metatypeByte && (e.writeUInt8(255), e.writeUInt8(t.metatypeByte), e.writeVarInt(f.length), e.writeBytes(f));
						break;
					case "sysEx":
						e.writeUInt8(240),
						e.writeVarInt(f.length),
						e.writeBytes(f);
						break;
					case "endSysEx":
						e.writeUInt8(247),
						e.writeVarInt(f.length),
						e.writeBytes(f);
						break;
					case "noteOff":
						(c = (!1 !== n && t.byte9 || n && 0 == t.velocity ? 144 : 128) | t.channel) !== r && e.writeUInt8(c),
						e.writeUInt8(t.noteNumber),
						e.writeUInt8(t.velocity);
						break;
					case "noteOn":
						(c = 144 | t.channel) !== r && e.writeUInt8(c),
						e.writeUInt8(t.noteNumber),
						e.writeUInt8(t.velocity);
						break;
					case "noteAftertouch":
						(c = 160 | t.channel) !== r && e.writeUInt8(c),
						e.writeUInt8(t.noteNumber),
						e.writeUInt8(t.amount);
						break;
					case "controller":
						(c = 176 | t.channel) !== r && e.writeUInt8(c),
						e.writeUInt8(t.controllerType),
						e.writeUInt8(t.value);
						break;
					case "programChange":
						(c = 192 | t.channel) !== r && e.writeUInt8(c),
						e.writeUInt8(t.programNumber);
						break;
					case "channelAftertouch":
						(c = 208 | t.channel) !== r && e.writeUInt8(c),
						e.writeUInt8(t.amount);
						break;
					case "pitchBend":
						(c = 224 | t.channel) !== r && e.writeUInt8(c);
						var h = 8192 + t.value;
						e.writeUInt8(127 & h),
						e.writeUInt8(127 & h >> 7);
						break;
					default:
						throw "Unrecognized event type: " + i
					}
					return c
				}
				function n() {
					this.buffer = []
				}
				n.prototype.writeInt8 = n.prototype.writeUInt8 = function(e) {
					this.buffer.push(255 & e)
				},
				n.prototype.writeInt16 = n.prototype.writeUInt16 = function(e) {
					this.writeUInt8(255 & e >> 8),
					this.writeUInt8(255 & e)
				},
				n.prototype.writeInt24 = n.prototype.writeUInt24 = function(e) {
					this.writeUInt8(255 & e >> 16),
					this.writeUInt8(255 & e >> 8),
					this.writeUInt8(255 & e)
				},
				n.prototype.writeInt32 = n.prototype.writeUInt32 = function(e) {
					this.writeUInt8(255 & e >> 24),
					this.writeUInt8(255 & e >> 16),
					this.writeUInt8(255 & e >> 8),
					this.writeUInt8(255 & e)
				},
				n.prototype.writeBytes = function(e) {
					this.buffer = this.buffer.concat(Array.prototype.slice.call(e, 0))
				},
				n.prototype.writeString = function(e) {
					var t, r = e.length,
					n = [];
					for (t = 0; t < r; t++) n.push(e.codePointAt(t));
					this.writeBytes(n)
				},
				n.prototype.writeVarInt = function(e) {
					if (e < 0) throw "Cannot write negative variable-length integer";
					if (e <= 127) this.writeUInt8(e);
					else {
						var t = e,
						r = [];
						for (r.push(127 & t), t >>= 7; t;) {
							var n = 128 | 127 & t;
							r.push(n),
							t >>= 7
						}
						this.writeBytes(r.reverse())
					}
				},
				n.prototype.writeChunk = function(e, t) {
					this.writeString(e),
					this.writeUInt32(t.length),
					this.writeBytes(t)
				},
				e.exports = function(e, r) {
					if ("object" != typeof e) throw "Invalid MIDI data";
					r = r || {};
					var i, o = e.header || {},
					a = e.tracks || [],
					s = a.length,
					f = new n;
					for (function(e, t) {
						var r = null == o.format ? 1 : o.format,
						i = 128;
						o.timeDivision ? i = o.timeDivision: o.ticksPerFrame && o.framesPerSecond ? i = -(255 & o.framesPerSecond) << 8 | 255 & o.ticksPerFrame: o.ticksPerBeat && (i = 32767 & o.ticksPerBeat);
						var a = new n;
						a.writeUInt16(r),
						a.writeUInt16(t),
						a.writeUInt16(i),
						e.writeChunk("MThd", a.buffer)
					} (f, s), i = 0; i < s; i++) t(f, a[i], r);
					return f.buffer
				}
			},
			function(e, t, r) {
				"use strict";
				function n(e) {
					return c.
				default(e.notes.map(function(t) {
						return r = t,
						n = e.channel,
						[{
							absoluteTime: r.ticks,
							channel: n,
							deltaTime: 0,
							noteNumber: r.midi,
							type: "noteOn",
							velocity: o(127 * r.velocity)
						},
						{
							absoluteTime: r.ticks + r.durationTicks,
							channel: n,
							deltaTime: 0,
							noteNumber: r.midi,
							type: "noteOff",
							velocity: o(127 * r.noteOffVelocity)
						}];
						var r, n
					}))
				}
				var i = this && this.__spreadArrays ||
				function() {
					for (var e = 0,
					t = 0,
					r = arguments.length; t < r; t++) e += arguments[t].length;
					var n = Array(e),
					i = 0;
					for (t = 0; t < r; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
					return n
				},
				a = this && this.__importDefault ||
				function(e) {
					return e && e.__esModule ? e: {
					default:
						e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var s = r(1),
				f = r(0),
				c = a(r(9));
				t.encode = function(e) {
					var t = {
						header: {
							format: 1,
							numTracks: e.tracks.length + 1,
							ticksPerBeat: e.header.ppq
						},
						tracks: i([i([{
							absoluteTime: 0,
							deltaTime: 0,
							meta: !0,
							text: e.header.name,
							type: "trackName"
						}], e.header.keySignatures.map(function(e) {
							return t = e,
							r = f.keySignatureKeys.indexOf(t.key),
							{
								absoluteTime: t.ticks,
								deltaTime: 0,
								key: r + 7,
								meta: !0,
								scale: "major" === t.scale ? 0 : 1,
								type: "keySignature"
							};
							var t, r
						}), e.header.meta.map(function(e) {
							return {
								absoluteTime: e.ticks,
								deltaTime: 0,
								meta: !0,
								text: e.text,
								type: e.type
							}
						}), e.header.tempos.map(function(e) {
							return {
								absoluteTime: e.ticks,
								deltaTime: 0,
								meta: !0,
								microsecondsPerBeat: o(6e7 / e.bpm),
								type: "setTempo"
							}
						}), e.header.timeSignatures.map(function(e) {
							return {
								absoluteTime: e.ticks,
								deltaTime: 0,
								denominator: e.timeSignature[1],
								meta: !0,
								metronome: 24,
								numerator: e.timeSignature[0],
								thirtyseconds: 8,
								type: "timeSignature"
							}
						}))], e.tracks.map(function(e) {
							return i([{
								absoluteTime: 0,
								deltaTime: 0,
								meta: !0,
								text: e.name,
								type: "trackName"
							},
							{
								absoluteTime: 0,
								channel: (o = e).channel,
								deltaTime: 0,
								programNumber: o.instrument.number,
								type: "programChange"
							}], n(e),
							function(e) {
								for (var t = [], r = 0; r < 127; r++) e.controlChanges.hasOwnProperty(r) && e.controlChanges[r].forEach(function(r) {
									var n, i;
									t.push((n = r, i = e.channel, {
										absoluteTime: n.ticks,
										channel: i,
										controllerType: n.number,
										deltaTime: 0,
										type: "controller",
										value: n.value
									}))
								});
								return t
							} (e), (r = [], (t = e).pitchBends.forEach(function(e) {
								var n;
								r.push((n = t.channel, {
									absoluteTime: e.ticks,
									channel: n,
									deltaTime: 0,
									type: "pitchBend",
									value: e.value
								}))
							}), r));
							var t, r, o
						}))
					};
					return t.tracks = t.tracks.map(function(e) {
						e = e.sort(function(e, t) {
							return e.absoluteTime - t.absoluteTime
						});
						var t = 0;
						return e.forEach(function(e) {
							e.deltaTime = e.absoluteTime - t,
							t = e.absoluteTime,
							delete e.absoluteTime
						}),
						e.push({
							deltaTime: 0,
							meta: !0,
							type: "endOfTrack"
						}),
						e
					}),
					new Uint8Array(s.writeMidi(t))
				}
			},
			function(e) {
				"use strict";
				function t(e) {
					return function e(t, r) {
						for (var n, i = 0; i < t.length; i++) n = t[i],
						Array.isArray(n) ? e(n, r) : r.push(n);
						return r
					} (e, [])
				}
				function r(e, t) {
					if ("number" != typeof t) throw new TypeError("Expected the depth to be a number");
					return function e(t, r, n) {
						n--;
						for (var i, o = 0; o < t.length; o++) i = t[o],
						-1 < n && Array.isArray(i) ? e(i, r, n) : r.push(i);
						return r
					} (e, [], t)
				}
				e.exports = function(e) {
					if (!Array.isArray(e)) throw new TypeError("Expected value to be an array");
					return t(e)
				},
				e.exports.from = t,
				e.exports.depth = function(e, t) {
					if (!Array.isArray(e)) throw new TypeError("Expected value to be an array");
					return r(e, t)
				},
				e.exports.fromDepth = r
			},
			function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = r(4);
				t.createControlChanges = function() {
					return new Proxy({},
					{
						get: function(e, t) {
							return e[t] ? e[t] : n.controlChangeIds.hasOwnProperty(t) ? e[n.controlChangeIds[t]] : void 0
						},
						set: function(e, t, r) {
							return n.controlChangeIds.hasOwnProperty(t) ? e[n.controlChangeIds[t]] = r: e[t] = r,
							!0
						}
					})
				}
			},
			function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = new WeakMap,
				n = (Object.defineProperty(i.prototype, "time", {
					get: function() {
						return r.get(this).ticksToSeconds(this.ticks)
					},
					set: function(e) {
						var t = r.get(this);
						this.ticks = t.secondsToTicks(e)
					},
					enumerable: !0,
					configurable: !0
				}), i.prototype.toJSON = function() {
					return {
						ticks: this.ticks,
						time: this.time,
						value: this.value
					}
				},
				i);
				function i(e, t) {
					r.set(this, t),
					this.ticks = e.absoluteTime,
					this.value = e.value
				}
				t.PitchBend = n
			},
			function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = r(13),
				i = new WeakMap,
				a = (Object.defineProperty(s.prototype, "name", {
					get: function() {
						return this.percussion ? n.DrumKitByPatchID[this.number] : n.instrumentByPatchID[this.number]
					},
					set: function(e) {
						var t = n.instrumentByPatchID.indexOf(e); - 1 !== t && (this.number = t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(s.prototype, "family", {
					get: function() {
						return this.percussion ? "drums": n.InstrumentFamilyByID[o(this.number / 8)]
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(s.prototype, "percussion", {
					get: function() {
						return 9 === i.get(this).channel
					},
					enumerable: !0,
					configurable: !0
				}), s.prototype.toJSON = function() {
					return {
						family: this.family,
						name: this.name,
						number: this.number
					}
				},
				s.prototype.fromJSON = function(e) {
					this.number = e.number
				},
				s);
				function s(e, t) {
					if (this.number = 0, i.set(this, t), this.number = 0, e) {
						var r = e.find(function(e) {
							return "programChange" === e.type
						});
						r && (this.number = r.programNumber)
					}
				}
				t.Instrument = a
			},
			function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				t.instrumentByPatchID = ["acoustic grand piano", "bright acoustic piano", "electric grand piano", "honky-tonk piano", "electric piano 1", "electric piano 2", "harpsichord", "clavi", "celesta", "glockenspiel", "music box", "vibraphone", "marimba", "xylophone", "tubular bells", "dulcimer", "drawbar organ", "percussive organ", "rock organ", "church organ", "reed organ", "accordion", "harmonica", "tango accordion", "acoustic guitar (nylon)", "acoustic guitar (steel)", "electric guitar (jazz)", "electric guitar (clean)", "electric guitar (muted)", "overdriven guitar", "distortion guitar", "guitar harmonics", "acoustic bass", "electric bass (finger)", "electric bass (pick)", "fretless bass", "slap bass 1", "slap bass 2", "synth bass 1", "synth bass 2", "violin", "viola", "cello", "contrabass", "tremolo strings", "pizzicato strings", "orchestral harp", "timpani", "string ensemble 1", "string ensemble 2", "synthstrings 1", "synthstrings 2", "choir aahs", "voice oohs", "synth voice", "orchestra hit", "trumpet", "trombone", "tuba", "muted trumpet", "french horn", "brass section", "synthbrass 1", "synthbrass 2", "soprano sax", "alto sax", "tenor sax", "baritone sax", "oboe", "english horn", "bassoon", "clarinet", "piccolo", "flute", "recorder", "pan flute", "blown bottle", "shakuhachi", "whistle", "ocarina", "lead 1 (square)", "lead 2 (sawtooth)", "lead 3 (calliope)", "lead 4 (chiff)", "lead 5 (charang)", "lead 6 (voice)", "lead 7 (fifths)", "lead 8 (bass + lead)", "pad 1 (new age)", "pad 2 (warm)", "pad 3 (polysynth)", "pad 4 (choir)", "pad 5 (bowed)", "pad 6 (metallic)", "pad 7 (halo)", "pad 8 (sweep)", "fx 1 (rain)", "fx 2 (soundtrack)", "fx 3 (crystal)", "fx 4 (atmosphere)", "fx 5 (brightness)", "fx 6 (goblins)", "fx 7 (echoes)", "fx 8 (sci-fi)", "sitar", "banjo", "shamisen", "koto", "kalimba", "bag pipe", "fiddle", "shanai", "tinkle bell", "agogo", "steel drums", "woodblock", "taiko drum", "melodic tom", "synth drum", "reverse cymbal", "guitar fret noise", "breath noise", "seashore", "bird tweet", "telephone ring", "helicopter", "applause", "gunshot"],
				t.InstrumentFamilyByID = ["piano", "chromatic percussion", "organ", "guitar", "bass", "strings", "ensemble", "brass", "reed", "pipe", "synth lead", "synth pad", "synth effects", "world", "percussive", "sound effects"],
				t.DrumKitByPatchID = {
					0 : "standard kit",
					8 : "room kit",
					16 : "power kit",
					24 : "electronic kit",
					25 : "tr-808 kit",
					32 : "jazz kit",
					40 : "brush kit",
					48 : "orchestra kit",
					56 : "sound fx kit"
				}
			},
			function(e, t) {
				"use strict";
				function r(e) {
					return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][e % 12]
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n, i, a = (n = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i, i = {
					cbb: -2,
					cb: -1,
					c: 0,
					"c#": 1,
					cx: 2,
					dbb: 0,
					db: 1,
					d: 2,
					"d#": 3,
					dx: 4,
					ebb: 2,
					eb: 3,
					e: 4,
					"e#": 5,
					ex: 6,
					fbb: 3,
					fb: 4,
					f: 5,
					"f#": 6,
					fx: 7,
					gbb: 5,
					gb: 6,
					g: 7,
					"g#": 8,
					gx: 9,
					abb: 7,
					ab: 8,
					a: 9,
					"a#": 10,
					ax: 11,
					bbb: 9,
					bb: 10,
					b: 11,
					"b#": 12,
					bx: 13
				},
				function(e) {
					var t = n.exec(e),
					r = t[1],
					o = t[2];
					return i[r.toLowerCase()] + 12 * (parseInt(o, 10) + 1)
				}),
				s = new WeakMap,
				f = (Object.defineProperty(c.prototype, "name", {
					get: function() {
						return e = this.midi,
						t = o(e / 12) - 1,
						r(e) + t.toString();
						var e, t
					}, set: function(e) {
						this.midi = a(e)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "octave", {
					get: function() {
						return o(this.midi / 12) - 1
					},
					set: function(e) {
						var t = e - this.octave;
						this.midi += 12 * t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "pitch", {
					get: function() {
						return r(this.midi)
					},
					set: function(e) {
						this.midi = 12 * (this.octave + 1) + ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"].indexOf(e)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "duration", {
					get: function() {
						var e = s.get(this);
						return e.ticksToSeconds(this.ticks + this.durationTicks) - e.ticksToSeconds(this.ticks)
					},
					set: function(e) {
						var t = s.get(this).secondsToTicks(this.time + e);
						this.durationTicks = t - this.ticks
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "time", {
					get: function() {
						return s.get(this).ticksToSeconds(this.ticks)
					},
					set: function(e) {
						var t = s.get(this);
						this.ticks = t.secondsToTicks(e)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "bars", {
					get: function() {
						return s.get(this).ticksToMeasures(this.ticks)
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.toJSON = function() {
					return {
						duration: this.duration,
						durationTicks: this.durationTicks,
						midi: this.midi,
						name: this.name,
						ticks: this.ticks,
						time: this.time,
						velocity: this.velocity
					}
				},
				c);
				function c(e, t, r) {
					s.set(this, r),
					this.midi = e.midi,
					this.velocity = e.velocity,
					this.noteOffVelocity = t.velocity,
					this.ticks = e.ticks,
					this.durationTicks = t.ticks - e.ticks
				}
				t.Note = f
			}],
			e.c = r,
			e.d = function(t, r, n) {
				e.o(t, r) || Object.defineProperty(t, r, {
					enumerable: !0,
					get: n
				})
			},
			e.r = function(e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}),
				Object.defineProperty(e, "__esModule", {
					value: !0
				})
			},
			e.t = function(t, r) {
				if (1 & r && (t = e(t)), 8 & r) return t;
				if (4 & r && "object" == typeof t && t && t.__esModule) return t;
				var n = Object.create(null);
				if (e.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: t
				}), 2 & r && "string" != typeof t) for (var i in t) e.d(n, i,
				function(e) {
					return t[e]
				}.bind(null, i));
				return n
			},
			e.n = function(t) {
				var r = t && t.__esModule ?
				function() {
					return t.
				default
				}:
				function() {
					return t
				};
				return e.d(r, "a", r),
				r
			},
			e.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			},
			e.p = "",
			e(e.s = 5);
			function e(n) {
				if (r[n]) return r[n].exports;
				var i = r[n] = {
					i: n,
					l: !1,
					exports: {}
				};
				return t[n].call(i.exports, i, i.exports, e),
				i.l = !0,
				i.exports
			}
			var t, r
		})
	}, {}], 13 : [function(e, t, r) {
		var n = r;
		n.bignum = e("bn.js"),
		n.define = e("./asn1/api").define,
		n.base = e("./asn1/base"),
		n.constants = e("./asn1/constants"),
		n.decoders = e("./asn1/decoders"),
		n.encoders = e("./asn1/encoders")
	},
	{
		"./asn1/api": 14,
		"./asn1/base": 16,
		"./asn1/constants": 20,
		"./asn1/decoders": 22,
		"./asn1/encoders": 25,
		"bn.js": 28
	}],
	14 : [function(e, t, r) {
		function n(e, t) {
			this.name = e,
			this.body = t,
			this.decoders = {},
			this.encoders = {}
		}
		var i = e("../asn1"),
		o = e("inherits");
		r.define = function(e, t) {
			return new n(e, t)
		},
		n.prototype._createNamed = function(t) {
			var r;
			try {
				r = e("vm").runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
			} catch(t) {
				r = function(e) {
					this._initNamed(e)
				}
			}
			return o(r, t),
			r.prototype._initNamed = function(e) {
				t.call(this, e)
			},
			new r(this)
		},
		n.prototype._getDecoder = function(e) {
			return e = e || "der",
			this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(i.decoders[e])),
			this.decoders[e]
		},
		n.prototype.decode = function(e, t, r) {
			return this._getDecoder(t).decode(e, r)
		},
		n.prototype._getEncoder = function(e) {
			return e = e || "der",
			this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(i.encoders[e])),
			this.encoders[e]
		},
		n.prototype.encode = function(e, t, r) {
			return this._getEncoder(t).encode(e, r)
		}
	},
	{
		"../asn1": 13,
		inherits: 113,
		vm: 167
	}],
	15 : [function(e, t, r) {
		function n(e, t) {
			return o.call(this, t),
			a.isBuffer(e) ? (this.base = e, this.offset = 0, void(this.length = e.length)) : void this.error("Input not Buffer")
		}
		var i = e("inherits"),
		o = e("../base").Reporter,
		a = e("buffer").Buffer;
		i(n, o),
		(r.DecoderBuffer = n).prototype.save = function() {
			return {
				offset: this.offset,
				reporter: o.prototype.save.call(this)
			}
		},
		n.prototype.restore = function(e) {
			var t = new n(this.base);
			return t.offset = e.offset,
			t.length = this.offset,
			this.offset = e.offset,
			o.prototype.restore.call(this, e.reporter),
			t
		},
		n.prototype.isEmpty = function() {
			return this.offset === this.length
		},
		n.prototype.readUInt8 = function(e) {
			return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
		},
		n.prototype.skip = function(e, t) {
			if (! (this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
			var r = new n(this.base);
			return r._reporterState = this._reporterState,
			r.offset = this.offset,
			r.length = this.offset + e,
			this.offset += e,
			r
		},
		n.prototype.raw = function(e) {
			return this.base.slice(e ? e.offset: this.offset, this.length)
		},
		(r.EncoderBuffer = function e(t, r) {
			if (Array.isArray(t)) this.length = 0,
			this.value = t.map(function(t) {
				return t instanceof e || (t = new e(t, r)),
				this.length += t.length,
				t
			},
			this);
			else if ("number" == typeof t) {
				if (! (0 <= t && t <= 255)) return r.error("non-byte EncoderBuffer value");
				this.value = t,
				this.length = 1
			} else if ("string" == typeof t) this.value = t,
			this.length = a.byteLength(t);
			else {
				if (!a.isBuffer(t)) return r.error("Unsupported type: " + typeof t);
				this.value = t,
				this.length = t.length
			}
		}).prototype.join = function(e, t) {
			return e = e || new a(this.length),
			t = t || 0,
			0 === this.length || (Array.isArray(this.value) ? this.value.forEach(function(r) {
				r.join(e, t),
				t += r.length
			}) : ("number" == typeof this.value ? e[t] = this.value: "string" == typeof this.value ? e.write(this.value, t) : a.isBuffer(this.value) && this.value.copy(e, t), t += this.length)),
			e
		}
	},
	{
		"../base": 16,
		buffer: 61,
		inherits: 113
	}],
	16 : [function(e, t, r) {
		var n = r;
		n.Reporter = e("./reporter").Reporter,
		n.DecoderBuffer = e("./buffer").DecoderBuffer,
		n.EncoderBuffer = e("./buffer").EncoderBuffer,
		n.Node = e("./node")
	},
	{
		"./buffer": 15,
		"./node": 17,
		"./reporter": 18
	}],
	17 : [function(e, t) {
		function r(e, t) {
			var r = {}; (this._baseState = r).enc = e,
			r.parent = t || null,
			r.children = null,
			r.tag = null,
			r.args = null,
			r.reverseArgs = null,
			r.choice = null,
			r.optional = !1,
			r.any = !1,
			r.obj = !1,
			r.use = null,
			r.useDecoder = null,
			r.key = null,
			r.
		default = null,
			r.explicit = null,
			r.implicit = null,
			r.contains = null,
			r.parent || (r.children = [], this._wrap())
		}
		var n = e("../base").Reporter,
		i = e("../base").EncoderBuffer,
		o = e("../base").DecoderBuffer,
		a = e("minimalistic-assert"),
		s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
		f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);
		t.exports = r;
		var c = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
		r.prototype.clone = function() {
			var e = this._baseState,
			t = {};
			c.forEach(function(r) {
				t[r] = e[r]
			});
			var r = new this.constructor(t.parent);
			return r._baseState = t,
			r
		},
		r.prototype._wrap = function() {
			var e = this._baseState;
			f.forEach(function(t) {
				this[t] = function() {
					var r = new this.constructor(this);
					return e.children.push(r),
					r[t].apply(r, arguments)
				}
			},
			this)
		},
		r.prototype._init = function(e) {
			var t = this._baseState;
			a(null === t.parent),
			e.call(this),
			t.children = t.children.filter(function(e) {
				return e._baseState.parent === this
			},
			this),
			a.equal(t.children.length, 1, "Root node can have only one child")
		},
		r.prototype._useArgs = function(e) {
			var t = this._baseState,
			r = e.filter(function(e) {
				return e instanceof this.constructor
			},
			this);
			e = e.filter(function(e) {
				return ! (e instanceof this.constructor)
			},
			this),
			0 !== r.length && (a(null === t.children), (t.children = r).forEach(function(e) {
				e._baseState.parent = this
			},
			this)),
			0 !== e.length && (a(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) {
				if ("object" != typeof e || e.constructor !== Object) return e;
				var t = {};
				return Object.keys(e).forEach(function(r) {
					r == (0 | r) && (r |= 0);
					var n = e[r];
					t[n] = r
				}),
				t
			}))
		},
		["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(e) {
			r.prototype[e] = function() {
				var t = this._baseState;
				throw new Error(e + " not implemented for encoding: " + t.enc)
			}
		}),
		s.forEach(function(e) {
			r.prototype[e] = function() {
				var t = this._baseState,
				r = Array.prototype.slice.call(arguments);
				return a(null === t.tag),
				t.tag = e,
				this._useArgs(r),
				this
			}
		}),
		r.prototype.use = function(e) {
			a(e);
			var t = this._baseState;
			return a(null === t.use),
			t.use = e,
			this
		},
		r.prototype.optional = function() {
			return this._baseState.optional = !0,
			this
		},
		r.prototype.def = function(e) {
			var t = this._baseState;
			return a(null === t.
		default),
			t.
		default = e,
			t.optional = !0,
			this
		},
		r.prototype.explicit = function(e) {
			var t = this._baseState;
			return a(null === t.explicit && null === t.implicit),
			t.explicit = e,
			this
		},
		r.prototype.implicit = function(e) {
			var t = this._baseState;
			return a(null === t.explicit && null === t.implicit),
			t.implicit = e,
			this
		},
		r.prototype.obj = function() {
			var e = this._baseState,
			t = Array.prototype.slice.call(arguments);
			return e.obj = !0,
			0 !== t.length && this._useArgs(t),
			this
		},
		r.prototype.key = function(e) {
			var t = this._baseState;
			return a(null === t.key),
			t.key = e,
			this
		},
		r.prototype.any = function() {
			return this._baseState.any = !0,
			this
		},
		r.prototype.choice = function(e) {
			var t = this._baseState;
			return a(null === t.choice),
			t.choice = e,
			this._useArgs(Object.keys(e).map(function(t) {
				return e[t]
			})),
			this
		},
		r.prototype.contains = function(e) {
			var t = this._baseState;
			return a(null === t.use),
			t.contains = e,
			this
		},
		r.prototype._decode = function(e, t) {
			var r = this._baseState;
			if (null === r.parent) return e.wrapResult(r.children[0]._decode(e, t));
			var n, i = r.
		default,
			a = !0,
			s = null;
			if (null !== r.key && (s = e.enterKey(r.key)), r.optional) {
				var f = null;
				if (null === r.explicit ? null === r.implicit ? null !== r.tag && (f = r.tag) : f = r.implicit: f = r.explicit, null !== f || r.any) {
					if (a = this._peekTag(e, f, r.any), e.isError(a)) return a
				} else {
					var c = e.save();
					try {
						null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t),
						a = !0
					} catch(t) {
						a = !1
					}
					e.restore(c)
				}
			}
			if (r.obj && a && (n = e.enterObject()), a) {
				if (null !== r.explicit) {
					var u = this._decodeTag(e, r.explicit);
					if (e.isError(u)) return u;
					e = u
				}
				var d = e.offset;
				if (null === r.use && null === r.choice) {
					r.any && (c = e.save());
					var h = this._decodeTag(e, null === r.implicit ? r.tag: r.implicit, r.any);
					if (e.isError(h)) return h;
					r.any ? i = e.raw(c) : e = h
				}
				if (t && t.track && null !== r.tag && t.track(e.path(), d, e.length, "tagged"), t && t.track && null !== r.tag && t.track(e.path(), e.offset, e.length, "content"), i = r.any ? i: null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t), e.isError(i)) return i;
				if (r.any || null !== r.choice || null === r.children || r.children.forEach(function(r) {
					r._decode(e, t)
				}), r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
					var l = new o(i);
					i = this._getUse(r.contains, e._reporterState.obj)._decode(l, t)
				}
			}
			return r.obj && a && (i = e.leaveObject(n)),
			null === r.key || null === i && !0 !== a ? null !== s && e.exitKey(s) : e.leaveKey(s, r.key, i),
			i
		},
		r.prototype._decodeGeneric = function(e, t, r) {
			var n = this._baseState;
			return "seq" === e || "set" === e ? null: "seqof" === e || "setof" === e ? this._decodeList(t, e, n.args[0], r) : /str$/.test(e) ? this._decodeStr(t, e, r) : "objid" === e && n.args ? this._decodeObjid(t, n.args[0], n.args[1], r) : "objid" === e ? this._decodeObjid(t, null, null, r) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, r) : "null_" === e ? this._decodeNull(t, r) : "bool" === e ? this._decodeBool(t, r) : "objDesc" === e ? this._decodeStr(t, e, r) : "int" === e || "enum" === e ? this._decodeInt(t, n.args && n.args[0], r) : null === n.use ? t.error("unknown tag: " + e) : this._getUse(n.use, t._reporterState.obj)._decode(t, r)
		},
		r.prototype._getUse = function(e, t) {
			var r = this._baseState;
			return r.useDecoder = this._use(e, t),
			a(null === r.useDecoder._baseState.parent),
			r.useDecoder = r.useDecoder._baseState.children[0],
			r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(), r.useDecoder._baseState.implicit = r.implicit),
			r.useDecoder
		},
		r.prototype._decodeChoice = function(e, t) {
			var r = this._baseState,
			n = null,
			i = !1;
			return Object.keys(r.choice).some(function(o) {
				var a = e.save(),
				s = r.choice[o];
				try {
					var f = s._decode(e, t);
					if (e.isError(f)) return ! 1;
					n = {
						type: o,
						value: f
					},
					i = !0
				} catch(o) {
					return e.restore(a),
					!1
				}
				return ! 0
			},
			this),
			i ? n: e.error("Choice not matched")
		},
		r.prototype._createEncoderBuffer = function(e) {
			return new i(e, this.reporter)
		},
		r.prototype._encode = function(e, t, r) {
			var n = this._baseState;
			if (null === n.
		default || n.
		default !== e) {
				var i = this._encodeValue(e, t, r);
				return void 0 === i || this._skipDefault(i, t, r) ? void 0 : i
			}
		},
		r.prototype._encodeValue = function(e, t, r) {
			var i = this._baseState;
			if (null === i.parent) return i.children[0]._encode(e, t || new n);
			var o = null;
			if (this.reporter = t, i.optional && void 0 === e) {
				if (null === i.
			default) return;
				e = i.
			default
			}
			var a = null,
			s = !1;
			if (i.any) o = this._createEncoderBuffer(e);
			else if (i.choice) o = this._encodeChoice(e, t);
			else if (i.contains) a = this._getUse(i.contains, r)._encode(e, t),
			s = !0;
			else if (i.children) a = i.children.map(function(r) {
				if ("null_" === r._baseState.tag) return r._encode(null, t, e);
				if (null === r._baseState.key) return t.error("Child should have a key");
				var n = t.enterKey(r._baseState.key);
				if ("object" != typeof e) return t.error("Child expected, but input is not object");
				var i = r._encode(e[r._baseState.key], t, e);
				return t.leaveKey(n),
				i
			},
			this).filter(function(e) {
				return e
			}),
			a = this._createEncoderBuffer(a);
			else if ("seqof" === i.tag || "setof" === i.tag) {
				if (!i.args || 1 !== i.args.length) return t.error("Too many args for : " + i.tag);
				if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
				var f = this.clone();
				f._baseState.implicit = null,
				a = this._createEncoderBuffer(e.map(function(r) {
					var n = this._baseState;
					return this._getUse(n.args[0], e)._encode(r, t)
				},
				f))
			} else null === i.use ? (a = this._encodePrimitive(i.tag, e), s = !0) : o = this._getUse(i.use, r)._encode(e, t);
			if (!i.any && null === i.choice) {
				var c = null === i.implicit ? i.tag: i.implicit,
				u = null === i.implicit ? "universal": "context";
				null === c ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (o = this._encodeComposite(c, s, u, a))
			}
			return null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)),
			o
		},
		r.prototype._encodeChoice = function(e, t) {
			var r = this._baseState,
			n = r.choice[e.type];
			return n || a(!1, e.type + " not found in " + JSON.stringify(Object.keys(r.choice))),
			n._encode(e.value, t)
		},
		r.prototype._encodePrimitive = function(e, t) {
			var r = this._baseState;
			if (/str$/.test(e)) return this._encodeStr(t, e);
			if ("objid" === e && r.args) return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
			if ("objid" === e) return this._encodeObjid(t, null, null);
			if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
			if ("null_" === e) return this._encodeNull();
			if ("int" === e || "enum" === e) return this._encodeInt(t, r.args && r.reverseArgs[0]);
			if ("bool" === e) return this._encodeBool(t);
			if ("objDesc" === e) return this._encodeStr(t, e);
			throw new Error("Unsupported tag: " + e)
		},
		r.prototype._isNumstr = function(e) {
			return /^[0-9 ]*$/.test(e)
		},
		r.prototype._isPrintstr = function(e) {
			return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)
		}
	},
	{
		"../base": 16,
		"minimalistic-assert": 118
	}],
	18 : [function(e, t, r) {
		function n(e) {
			this._reporterState = {
				obj: null,
				path: [],
				options: e || {},
				errors: []
			}
		}
		function i(e, t) {
			this.path = e,
			this.rethrow(t)
		}
		var o = e("inherits"); (r.Reporter = n).prototype.isError = function(e) {
			return e instanceof i
		},
		n.prototype.save = function() {
			var e = this._reporterState;
			return {
				obj: e.obj,
				pathLen: e.path.length
			}
		},
		n.prototype.restore = function(e) {
			var t = this._reporterState;
			t.obj = e.obj,
			t.path = t.path.slice(0, e.pathLen)
		},
		n.prototype.enterKey = function(e) {
			return this._reporterState.path.push(e)
		},
		n.prototype.exitKey = function(e) {
			var t = this._reporterState;
			t.path = t.path.slice(0, e - 1)
		},
		n.prototype.leaveKey = function(e, t, r) {
			var n = this._reporterState;
			this.exitKey(e),
			null !== n.obj && (n.obj[t] = r)
		},
		n.prototype.path = function() {
			return this._reporterState.path.join("/")
		},
		n.prototype.enterObject = function() {
			var e = this._reporterState,
			t = e.obj;
			return e.obj = {},
			t
		},
		n.prototype.leaveObject = function(e) {
			var t = this._reporterState,
			r = t.obj;
			return t.obj = e,
			r
		},
		n.prototype.error = function(e) {
			var t, r = this._reporterState,
			n = e instanceof i;
			if (t = n ? e: new i(r.path.map(function(e) {
				return "[" + JSON.stringify(e) + "]"
			}).join(""), e.message || e, e.stack), !r.options.partial) throw t;
			return n || r.errors.push(t),
			t
		},
		n.prototype.wrapResult = function(e) {
			var t = this._reporterState;
			return t.options.partial ? {
				result: this.isError(e) ? null: e,
				errors: t.errors
			}: e
		},
		o(i, Error),
		i.prototype.rethrow = function(e) {
			if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, i), !this.stack) try {
				throw new Error(this.message)
			} catch(e) {
				this.stack = e.stack
			}
			return this
		}
	},
	{
		inherits: 113
	}],
	19 : [function(e, t, r) {
		var n = e("../constants");
		r.tagClass = {
			0 : "universal",
			1 : "application",
			2 : "context",
			3 : "private"
		},
		r.tagClassByName = n._reverse(r.tagClass),
		r.tag = {
			0 : "end",
			1 : "bool",
			2 : "int",
			3 : "bitstr",
			4 : "octstr",
			5 : "null_",
			6 : "objid",
			7 : "objDesc",
			8 : "external",
			9 : "real",
			10 : "enum",
			11 : "embed",
			12 : "utf8str",
			13 : "relativeOid",
			16 : "seq",
			17 : "set",
			18 : "numstr",
			19 : "printstr",
			20 : "t61str",
			21 : "videostr",
			22 : "ia5str",
			23 : "utctime",
			24 : "gentime",
			25 : "graphstr",
			26 : "iso646str",
			27 : "genstr",
			28 : "unistr",
			29 : "charstr",
			30 : "bmpstr"
		},
		r.tagByName = n._reverse(r.tag)
	},
	{
		"../constants": 20
	}],
	20 : [function(e, t, r) {
		var n = r;
		n._reverse = function(e) {
			var t = {};
			return Object.keys(e).forEach(function(r) { (0 | r) == r && (r |= 0);
				var n = e[r];
				t[n] = r
			}),
			t
		},
		n.der = e("./der")
	},
	{
		"./der": 19
	}],
	21 : [function(e, t) {
		var r = String.fromCharCode;
		function n(e) {
			f.Node.call(this, "der", e)
		}
		function i(e, t) {
			var r = e.readUInt8(t);
			if (e.isError(r)) return r;
			var n = u.tagClass[r >> 6],
			i = 0 == (32 & r);
			if (31 == (31 & r)) {
				var o = r;
				for (r = 0; 128 == (128 & o);) {
					if (o = e.readUInt8(t), e.isError(o)) return o;
					r <<= 7,
					r |= 127 & o
				}
			} else r &= 31;
			return {
				cls: n,
				primitive: i,
				tag: r,
				tagStr: u.tag[r]
			}
		}
		function o(e, t, r) {
			var n = e.readUInt8(r);
			if (e.isError(n)) return n;
			if (!t && 128 === n) return null;
			if (0 == (128 & n)) return n;
			var i = 127 & n;
			if (4 < i) return e.error("length octect is too long");
			for (var o = n = 0; o < i; o++) {
				n <<= 8;
				var a = e.readUInt8(r);
				if (e.isError(a)) return a;
				n |= a
			}
			return n
		}
		var a = e("inherits"),
		s = e("../../asn1"),
		f = s.base,
		c = s.bignum,
		u = s.constants.der; (t.exports = function(e) {
			this.enc = "der",
			this.name = e.name,
			this.entity = e,
			this.tree = new n,
			this.tree._init(e.body)
		}).prototype.decode = function(e, t) {
			return e instanceof f.DecoderBuffer || (e = new f.DecoderBuffer(e, t)),
			this.tree._decode(e, t)
		},
		a(n, f.Node),
		n.prototype._peekTag = function(e, t, r) {
			if (e.isEmpty()) return ! 1;
			var n = e.save(),
			o = i(e, 'Failed to peek tag: "' + t + '"');
			return e.isError(o) ? o: (e.restore(n), o.tag === t || o.tagStr === t || o.tagStr + "of" === t || r)
		},
		n.prototype._decodeTag = function(e, t, r) {
			var n = i(e, 'Failed to decode tag of "' + t + '"');
			if (e.isError(n)) return n;
			var a = o(e, n.primitive, 'Failed to get length of "' + t + '"');
			if (e.isError(a)) return a;
			if (!r && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
			if (n.primitive || null !== a) return e.skip(a, 'Failed to match body of: "' + t + '"');
			var s = e.save(),
			f = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
			return e.isError(f) ? f: (a = e.offset - s.offset, e.restore(s), e.skip(a, 'Failed to match body of: "' + t + '"'))
		},
		n.prototype._skipUntilEnd = function(e, t) {
			for (;;) {
				var r = i(e, t);
				if (e.isError(r)) return r;
				var n, a = o(e, r.primitive, t);
				if (e.isError(a)) return a;
				if (n = r.primitive || null !== a ? e.skip(a) : this._skipUntilEnd(e, t), e.isError(n)) return n;
				if ("end" === r.tagStr) break
			}
		},
		n.prototype._decodeList = function(e, t, r, n) {
			for (var i = []; ! e.isEmpty();) {
				var o = this._peekTag(e, "end");
				if (e.isError(o)) return o;
				var a = r.decode(e, "der", n);
				if (e.isError(a) && o) break;
				i.push(a)
			}
			return i
		},
		n.prototype._decodeStr = function(e, t) {
			if ("bitstr" === t) {
				var n = e.readUInt8();
				return e.isError(n) ? n: {
					unused: n,
					data: e.raw()
				}
			}
			if ("bmpstr" === t) {
				var i = e.raw();
				if (1 == i.length % 2) return e.error("Decoding of string type: bmpstr length mismatch");
				for (var o = "",
				a = 0; a < i.length / 2; a++) o += r(i.readUInt16BE(2 * a));
				return o
			}
			if ("numstr" === t) {
				var s = e.raw().toString("ascii");
				return this._isNumstr(s) ? s: e.error("Decoding of string type: numstr unsupported characters")
			}
			if ("octstr" === t) return e.raw();
			if ("objDesc" === t) return e.raw();
			if ("printstr" !== t) return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported");
			var f = e.raw().toString("ascii");
			return this._isPrintstr(f) ? f: e.error("Decoding of string type: printstr unsupported characters")
		},
		n.prototype._decodeObjid = function(e, t, r) {
			for (var n, i, o = [], a = 0; ! e.isEmpty();) a <<= 7,
			a |= 127 & (i = e.readUInt8()),
			0 == (128 & i) && (o.push(a), a = 0);
			128 & i && o.push(a);
			var s = 0 | o[0] / 40,
			f = o[0] % 40;
			if (n = r ? o: [s, f].concat(o.slice(1)), t) {
				var c = t[n.join(" ")];
				void 0 === c && (c = t[n.join(".")]),
				void 0 !== c && (n = c)
			}
			return n
		},
		n.prototype._decodeTime = function(e, t) {
			var r = e.raw().toString();
			if ("gentime" === t) var n = 0 | r.slice(0, 4),
			i = 0 | r.slice(4, 6),
			o = 0 | r.slice(6, 8),
			a = 0 | r.slice(8, 10),
			s = 0 | r.slice(10, 12),
			f = 0 | r.slice(12, 14);
			else {
				if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
				n = 0 | r.slice(0, 2),
				i = 0 | r.slice(2, 4),
				o = 0 | r.slice(4, 6),
				a = 0 | r.slice(6, 8),
				s = 0 | r.slice(8, 10),
				f = 0 | r.slice(10, 12),
				n = n < 70 ? 2e3 + n: 1900 + n
			}
			return Date.UTC(n, i - 1, o, a, s, f, 0)
		},
		n.prototype._decodeNull = function() {
			return null
		},
		n.prototype._decodeBool = function(e) {
			var t = e.readUInt8();
			return e.isError(t) ? t: 0 !== t
		},
		n.prototype._decodeInt = function(e, t) {
			var r = e.raw(),
			n = new c(r);
			return t && (n = t[n.toString(10)] || n),
			n
		},
		n.prototype._use = function(e, t) {
			return "function" == typeof e && (e = e(t)),
			e._getDecoder("der").tree
		}
	},
	{
		"../../asn1": 13,
		inherits: 113
	}],
	22 : [function(e, t, r) {
		var n = r;
		n.der = e("./der"),
		n.pem = e("./pem")
	},
	{
		"./der": 21,
		"./pem": 23
	}],
	23 : [function(e, t) {
		function r(e) {
			o.call(this, e),
			this.enc = "pem"
		}
		var n = e("inherits"),
		i = e("buffer").Buffer,
		o = e("./der");
		n(r, o),
		(t.exports = r).prototype.decode = function(e, t) {
			for (var r, n = e.toString().split(/[\r\n]+/g), a = t.label.toUpperCase(), s = -1, f = -1, c = 0; c < n.length; c++) if (null !== (r = n[c].match(/^-----(BEGIN|END) ([^-]+)-----$/)) && r[2] === a) {
				if ( - 1 !== s) {
					if ("END" !== r[1]) break;
					f = c;
					break
				}
				if ("BEGIN" !== r[1]) break;
				s = c
			}
			if ( - 1 === s || -1 === f) throw new Error("PEM section not found for: " + a);
			var u = n.slice(s + 1, f).join("");
			u.replace(/[^a-z0-9\+\/=]+/gi, "");
			var d = new i(u, "base64");
			return o.prototype.decode.call(this, d, t)
		}
	},
	{
		"./der": 21,
		buffer: 61,
		inherits: 113
	}],
	24 : [function(e, t) {
		function r(e) {
			s.Node.call(this, "der", e)
		}
		function n(e) {
			return e < 10 ? "0" + e: e
		}
		var i = e("inherits"),
		o = e("buffer").Buffer,
		a = e("../../asn1"),
		s = a.base,
		f = a.constants.der; (t.exports = function(e) {
			this.enc = "der",
			this.name = e.name,
			this.entity = e,
			this.tree = new r,
			this.tree._init(e.body)
		}).prototype.encode = function(e, t) {
			return this.tree._encode(e, t).join()
		},
		i(r, s.Node),
		r.prototype._encodeComposite = function(e, t, r, n) {
			var i, a = function(e, t, r, n) {
				var i;
				if ("seqof" === e ? e = "seq": "setof" == e && (e = "set"), f.tagByName.hasOwnProperty(e)) i = f.tagByName[e];
				else {
					if ("number" != typeof e || (0 | e) !== e) return n.error("Unknown tag: " + e);
					i = e
				}
				return 31 <= i ? n.error("Multi-octet tag encoding unsupported") : (t || (i |= 32), i |= f.tagClassByName[r || "universal"] << 6)
			} (e, t, r, this.reporter);
			if (n.length < 128) return (i = new o(2))[0] = a,
			i[1] = n.length,
			this._createEncoderBuffer([i, n]);
			for (var s = 1,
			c = n.length; 256 <= c; c >>= 8) s++; (i = new o(2 + s))[0] = a,
			i[1] = 128 | s,
			c = 1 + s;
			for (var u = n.length; 0 < u; c--, u >>= 8) i[c] = 255 & u;
			return this._createEncoderBuffer([i, n])
		},
		r.prototype._encodeStr = function(e, t) {
			if ("bitstr" === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
			if ("bmpstr" !== t) return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) || "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported");
			for (var r = new o(2 * e.length), n = 0; n < e.length; n++) r.writeUInt16BE(e.charCodeAt(n), 2 * n);
			return this._createEncoderBuffer(r)
		},
		r.prototype._encodeObjid = function(e, t, r) {
			if ("string" == typeof e) {
				if (!t) return this.reporter.error("string objid given, but no values map found");
				if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
				e = t[e].split(/[\s\.]+/g);
				for (var n = 0; n < e.length; n++) e[n] |= 0
			} else if (Array.isArray(e)) for (e = e.slice(), n = 0; n < e.length; n++) e[n] |= 0;
			if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
			if (!r) {
				if (40 <= e[1]) return this.reporter.error("Second objid identifier OOB");
				e.splice(0, 2, 40 * e[0] + e[1])
			}
			var i = 0;
			for (n = 0; n < e.length; n++) for (a = e[n], i++; 128 <= a; a >>= 7) i++;
			var a, s = new o(i),
			f = s.length - 1;
			for (n = e.length - 1; 0 <= n; n--) for (a = e[n], s[f--] = 127 & a; 0 < (a >>= 7);) s[f--] = 128 | 127 & a;
			return this._createEncoderBuffer(s)
		},
		r.prototype._encodeTime = function(e, t) {
			var r, i = new Date(e);
			return "gentime" === t ? r = [n(i.getFullYear()), n(i.getUTCMonth() + 1), n(i.getUTCDate()), n(i.getUTCHours()), n(i.getUTCMinutes()), n(i.getUTCSeconds()), "Z"].join("") : "utctime" === t ? r = [n(i.getFullYear() % 100), n(i.getUTCMonth() + 1), n(i.getUTCDate()), n(i.getUTCHours()), n(i.getUTCMinutes()), n(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"),
			this._encodeStr(r, "octstr")
		},
		r.prototype._encodeNull = function() {
			return this._createEncoderBuffer("")
		},
		r.prototype._encodeInt = function(e, t) {
			if ("string" == typeof e) {
				if (!t) return this.reporter.error("String int or enum given, but no values map");
				if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
				e = t[e]
			}
			if ("number" != typeof e && !o.isBuffer(e)) {
				var r = e.toArray(); ! e.sign && 128 & r[0] && r.unshift(0),
				e = new o(r)
			}
			if (o.isBuffer(e)) {
				var n = e.length;
				0 === e.length && n++;
				var i = new o(n);
				return e.copy(i),
				0 === e.length && (i[0] = 0),
				this._createEncoderBuffer(i)
			}
			if (e < 128) return this._createEncoderBuffer(e);
			if (e < 256) return this._createEncoderBuffer([0, e]);
			n = 1;
			for (var a = e; 256 <= a; a >>= 8) n++;
			for (a = (i = Array(n)).length - 1; 0 <= a; a--) i[a] = 255 & e,
			e >>= 8;
			return 128 & i[0] && i.unshift(0),
			this._createEncoderBuffer(new o(i))
		},
		r.prototype._encodeBool = function(e) {
			return this._createEncoderBuffer(e ? 255 : 0)
		},
		r.prototype._use = function(e, t) {
			return "function" == typeof e && (e = e(t)),
			e._getEncoder("der").tree
		},
		r.prototype._skipDefault = function(e, t, r) {
			var n, i = this._baseState;
			if (null === i.
		default) return ! 1;
			var o = e.join();
			if (void 0 === i.defaultBuffer && (i.defaultBuffer = this._encodeValue(i.
		default, t, r).join()), o.length !== i.defaultBuffer.length) return ! 1;
			for (n = 0; n < o.length; n++) if (o[n] !== i.defaultBuffer[n]) return ! 1;
			return ! 0
		}
	},
	{
		"../../asn1": 13,
		buffer: 61,
		inherits: 113
	}],
	25 : [function(e, t, r) {
		var n = r;
		n.der = e("./der"),
		n.pem = e("./pem")
	},
	{
		"./der": 24,
		"./pem": 26
	}],
	26 : [function(e, t) {
		function r(e) {
			i.call(this, e),
			this.enc = "pem"
		}
		var n = e("inherits"),
		i = e("./der");
		n(r, i),
		(t.exports = r).prototype.encode = function(e, t) {
			for (var r = i.prototype.encode.call(this, e).toString("base64"), n = ["-----BEGIN " + t.label + "-----"], o = 0; o < r.length; o += 64) n.push(r.slice(o, o + 64));
			return n.push("-----END " + t.label + "-----"),
			n.join("\n")
		}
	},
	{
		"./der": 24,
		inherits: 113
	}],
	27 : [function(e, t, r) {
		"use strict";
		function n(e) {
			var t = e.length;
			if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
			var r = e.indexOf("=");
			return - 1 === r && (r = t),
			[r, r === t ? 0 : 4 - r % 4]
		}
		function i(e, t, r) {
			for (var n, i = [], a = t; a < r; a += 3) n = (16711680 & e[a] << 16) + (65280 & e[a + 1] << 8) + (255 & e[a + 2]),
			i.push(o[63 & (s = n) >> 18] + o[63 & s >> 12] + o[63 & s >> 6] + o[63 & s]);
			var s;
			return i.join("")
		}
		r.byteLength = function(e) {
			var t = n(e),
			r = t[0],
			i = t[1];
			return 3 * (r + i) / 4 - i
		},
		r.toByteArray = function(e) {
			var t, r, i, o = n(e),
			f = o[0],
			c = o[1],
			u = new s(3 * (f + (i = c)) / 4 - i),
			d = 0,
			h = 0 < c ? f - 4 : f;
			for (r = 0; r < h; r += 4) t = a[e.charCodeAt(r)] << 18 | a[e.charCodeAt(r + 1)] << 12 | a[e.charCodeAt(r + 2)] << 6 | a[e.charCodeAt(r + 3)],
			u[d++] = 255 & t >> 16,
			u[d++] = 255 & t >> 8,
			u[d++] = 255 & t;
			return 2 === c && (t = a[e.charCodeAt(r)] << 2 | a[e.charCodeAt(r + 1)] >> 4, u[d++] = 255 & t),
			1 === c && (t = a[e.charCodeAt(r)] << 10 | a[e.charCodeAt(r + 1)] << 4 | a[e.charCodeAt(r + 2)] >> 2, u[d++] = 255 & t >> 8, u[d++] = 255 & t),
			u
		},
		r.fromByteArray = function(e) {
			for (var t, r = e.length,
			n = r % 3,
			a = [], s = 0, f = r - n; s < f; s += 16383) a.push(i(e, s, f < s + 16383 ? f: s + 16383));
			return 1 == n ? (t = e[r - 1], a.push(o[t >> 2] + o[63 & t << 4] + "==")) : 2 == n && (t = (e[r - 2] << 8) + e[r - 1], a.push(o[t >> 10] + o[63 & t >> 4] + o[63 & t << 2] + "=")),
			a.join("")
		};
		for (var o = [], a = [], s = "undefined" == typeof Uint8Array ? Array: Uint8Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, u = f.length; c < u; ++c) o[c] = f[c],
		a[f.charCodeAt(c)] = c;
		a[45] = 62,
		a[95] = 63
	},
	{}],
	28 : [function(e, t) {
		var r = Math.ceil,
		n = Math.min,
		i = Math.max,
		o = Math.round; !
		function(t, a) {
			"use strict";
			var s, f = Math.imul,
			c = Math.clz32;
			function u(e, t) {
				if (!e) throw new Error(t || "Assertion failed")
			}
			function d(e, t) {
				function r() {}
				e.super_ = t,
				r.prototype = t.prototype,
				e.prototype = new r,
				e.prototype.constructor = e
			}
			function h(e, t, r) {
				return h.isBN(e) ? e: (this.negative = 0, this.words = null, this.length = 0, void((this.red = null) !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))))
			}
			function l(e, t, r) {
				for (var i, o = 0,
				a = n(e.length, r), s = t; s < a; s++) o <<= 4,
				o |= 49 <= (i = e.charCodeAt(s) - 48) && i <= 54 ? i - 49 + 10 : 17 <= i && i <= 22 ? i - 17 + 10 : 15 & i;
				return o
			}
			function p(e, t, r, i) {
				for (var o, a = 0,
				s = n(e.length, r), f = t; f < s; f++) a *= i,
				a += 49 <= (o = e.charCodeAt(f) - 48) ? o - 49 + 10 : 17 <= o ? o - 17 + 10 : o;
				return a
			}
			function b(e, t, r) {
				r.negative = t.negative ^ e.negative;
				var o = 0 | e.length + t.length;
				o = 0 | (r.length = o) - 1;
				var a = 0 | e.words[0],
				s = 0 | t.words[0],
				f = a * s,
				c = 67108863 & f,
				u = 0 | f / 67108864;
				r.words[0] = c;
				for (var d = 1; d < o; d++) {
					for (var h, l = u >>> 26,
					p = 67108863 & u,
					b = n(d, t.length - 1), y = i(0, d - e.length + 1); y <= b; y++) h = 0 | d - y,
					l += 0 | (f = (a = 0 | e.words[h]) * (s = 0 | t.words[y]) + p) / 67108864,
					p = 67108863 & f;
					r.words[d] = 0 | p,
					u = 0 | l
				}
				return 0 === u ? r.length--:r.words[d] = 0 | u,
				r.strip()
			}
			function y(e, t, r) {
				return (new g).mulp(e, t, r)
			}
			function g(e, t) {
				this.x = e,
				this.y = t
			}
			function m(e, t) {
				this.name = e,
				this.p = new h(t, 16),
				this.n = this.p.bitLength(),
				this.k = new h(1).iushln(this.n).isub(this.p),
				this.tmp = this._tmp()
			}
			function v() {
				m.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
			}
			function w() {
				m.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
			}
			function _() {
				m.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
			}
			function S() {
				m.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
			}
			function k(e) {
				if ("string" == typeof e) {
					var t = h._prime(e);
					this.m = t.p,
					this.prime = t
				} else u(e.gtn(1), "modulus must be greater than 1"),
				this.m = e,
				this.prime = null
			}
			function E(e) {
				k.call(this, e),
				this.shift = this.m.bitLength(),
				0 != this.shift % 26 && (this.shift += 26 - this.shift % 26),
				this.r = new h(1).iushln(this.shift),
				this.r2 = this.imod(this.r.sqr()),
				this.rinv = this.r._invmp(this.m),
				this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
				this.minv = this.minv.umod(this.r),
				this.minv = this.r.sub(this.minv)
			}
			"object" == typeof t ? t.exports = h: a.BN = h,
			(h.BN = h).wordSize = 26;
			try {
				s = e("buffer").Buffer
			} catch(t) {}
			h.isBN = function(e) {
				return !! (e instanceof h) || null !== e && "object" == typeof e && e.constructor.wordSize === h.wordSize && Array.isArray(e.words)
			},
			h.max = function(e, t) {
				return 0 < e.cmp(t) ? e: t
			},
			h.min = function(e, t) {
				return e.cmp(t) < 0 ? e: t
			},
			h.prototype._init = function(e, t, r) {
				if ("number" == typeof e) return this._initNumber(e, t, r);
				if ("object" == typeof e) return this._initArray(e, t, r);
				"hex" === t && (t = 16),
				u(t === (0 | t) && 2 <= t && t <= 36);
				var n = 0;
				"-" === (e = e.toString().replace(/\s+/g, ""))[0] && n++,
				16 === t ? this._parseHex(e, n) : this._parseBase(e, t, n),
				"-" === e[0] && (this.negative = 1),
				this.strip(),
				"le" !== r || this._initArray(this.toArray(), t, r)
			},
			h.prototype._initNumber = function(e, t, r) {
				e < 0 && (this.negative = 1, e = -e),
				e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, 67108863 & e / 67108864], this.length = 2) : (u(e < 9007199254740992), this.words = [67108863 & e, 67108863 & e / 67108864, 1], this.length = 3),
				"le" !== r || this._initArray(this.toArray(), t, r)
			},
			h.prototype._initArray = function(e, t, n) {
				if (u("number" == typeof e.length), e.length <= 0) return this.words = [0],
				this.length = 1,
				this;
				this.length = r(e.length / 3),
				this.words = Array(this.length);
				for (var i = 0; i < this.length; i++) this.words[i] = 0;
				var o, a, s = 0;
				if ("be" === n) for (i = e.length - 1, o = 0; 0 <= i; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16,
				this.words[o] |= 67108863 & a << s,
				this.words[o + 1] = 67108863 & a >>> 26 - s,
				26 <= (s += 24) && (s -= 26, o++);
				else if ("le" === n) for (o = i = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16,
				this.words[o] |= 67108863 & a << s,
				this.words[o + 1] = 67108863 & a >>> 26 - s,
				26 <= (s += 24) && (s -= 26, o++);
				return this.strip()
			},
			h.prototype._parseHex = function(e, t) {
				this.length = r((e.length - t) / 6),
				this.words = Array(this.length);
				for (var n = 0; n < this.length; n++) this.words[n] = 0;
				var i, o, a = 0;
				for (n = e.length - 6, i = 0; t <= n; n -= 6) o = l(e, n, n + 6),
				this.words[i] |= 67108863 & o << a,
				this.words[i + 1] |= 4194303 & o >>> 26 - a,
				26 <= (a += 24) && (a -= 26, i++);
				n + 6 !== t && (o = l(e, t, n + 6), this.words[i] |= 67108863 & o << a, this.words[i + 1] |= 4194303 & o >>> 26 - a),
				this.strip()
			},
			h.prototype._parseBase = function(e, t, r) {
				this.words = [0];
				for (var i = 0,
				o = this.length = 1; o <= 67108863; o *= t) i++;
				i--,
				o = 0 | o / t;
				for (var a = e.length - r,
				s = a % i,
				f = n(a, a - s) + r, c = 0, u = r; u < f; u += i) c = p(e, u, u + i, t),
				this.imuln(o),
				this.words[0] + c < 67108864 ? this.words[0] += c: this._iaddn(c);
				if (0 != s) {
					var d = 1;
					for (c = p(e, u, e.length, t), u = 0; u < s; u++) d *= t;
					this.imuln(d),
					this.words[0] + c < 67108864 ? this.words[0] += c: this._iaddn(c)
				}
			},
			h.prototype.copy = function(e) {
				e.words = Array(this.length);
				for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
				e.length = this.length,
				e.negative = this.negative,
				e.red = this.red
			},
			h.prototype.clone = function() {
				var e = new h(null);
				return this.copy(e),
				e
			},
			h.prototype._expand = function(e) {
				for (; this.length < e;) this.words[this.length++] = 0;
				return this
			},
			h.prototype.strip = function() {
				for (; 1 < this.length && 0 === this.words[this.length - 1];) this.length--;
				return this._normSign()
			},
			h.prototype._normSign = function() {
				return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
				this
			},
			h.prototype.inspect = function() {
				return (this.red ? "<BN-R: ": "<BN: ") + this.toString(16) + ">"
			};
			var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
			I = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
			A = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
			h.prototype.toString = function(e, t) {
				var r;
				if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
					r = "";
					for (var n = 0,
					i = 0,
					o = 0; o < this.length; o++) {
						var a = this.words[o],
						s = (16777215 & (a << n | i)).toString(16);
						r = 0 != (i = 16777215 & a >>> 24 - n) || o !== this.length - 1 ? x[6 - s.length] + s + r: s + r,
						26 <= (n += 2) && (n -= 26, o--)
					}
					for (0 !== i && (r = i.toString(16) + r); 0 != r.length % t;) r = "0" + r;
					return 0 !== this.negative && (r = "-" + r),
					r
				}
				if (e === (0 | e) && 2 <= e && e <= 36) {
					var f = I[e],
					c = A[e];
					r = "";
					var d = this.clone();
					for (d.negative = 0; ! d.isZero();) {
						var h = d.modn(c).toString(e);
						r = (d = d.idivn(c)).isZero() ? h + r: x[f - h.length] + h + r
					}
					for (this.isZero() && (r = "0" + r); 0 != r.length % t;) r = "0" + r;
					return 0 !== this.negative && (r = "-" + r),
					r
				}
				u(!1, "Base should be between 2 and 36")
			},
			h.prototype.toNumber = function() {
				var e = this.words[0];
				return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : 2 < this.length && u(!1, "Number can only safely store up to 53 bits"),
				0 === this.negative ? e: -e
			},
			h.prototype.toJSON = function() {
				return this.toString(16)
			},
			h.prototype.toBuffer = function(e, t) {
				return u(void 0 !== s),
				this.toArrayLike(s, e, t)
			},
			h.prototype.toArray = function(e, t) {
				return this.toArrayLike(Array, e, t)
			},
			h.prototype.toArrayLike = function(e, t, r) {
				var n = this.byteLength(),
				o = r || i(1, n);
				u(n <= o, "byte array longer than desired length"),
				u(0 < o, "Requested array length <= 0"),
				this.strip();
				var a, s, f = new e(o),
				c = this.clone();
				if ("le" !== t) {
					for (s = 0; s < o - n; s++) f[s] = 0;
					for (s = 0; ! c.isZero(); s++) a = c.andln(255),
					c.iushrn(8),
					f[o - s - 1] = a
				} else {
					for (s = 0; ! c.isZero(); s++) a = c.andln(255),
					c.iushrn(8),
					f[s] = a;
					for (; s < o; s++) f[s] = 0
				}
				return f
			},
			h.prototype._countBits = c ?
			function(e) {
				return 32 - c(e)
			}: function(e) {
				var t = e,
				r = 0;
				return 4096 <= t && (r += 13, t >>>= 13),
				64 <= t && (r += 7, t >>>= 7),
				8 <= t && (r += 4, t >>>= 4),
				2 <= t && (r += 2, t >>>= 2),
				r + t
			},
			h.prototype._zeroBits = function(e) {
				if (0 === e) return 26;
				var t = e,
				r = 0;
				return 0 == (8191 & t) && (r += 13, t >>>= 13),
				0 == (127 & t) && (r += 7, t >>>= 7),
				0 == (15 & t) && (r += 4, t >>>= 4),
				0 == (3 & t) && (r += 2, t >>>= 2),
				0 == (1 & t) && r++,
				r
			},
			h.prototype.bitLength = function() {
				var e = this.words[this.length - 1],
				t = this._countBits(e);
				return 26 * (this.length - 1) + t
			},
			h.prototype.zeroBits = function() {
				if (this.isZero()) return 0;
				for (var e, t = 0,
				r = 0; r < this.length && (t += e = this._zeroBits(this.words[r]), 26 === e); r++);
				return t
			},
			h.prototype.byteLength = function() {
				return r(this.bitLength() / 8)
			},
			h.prototype.toTwos = function(e) {
				return 0 === this.negative ? this.clone() : this.abs().inotn(e).iaddn(1)
			},
			h.prototype.fromTwos = function(e) {
				return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
			},
			h.prototype.isNeg = function() {
				return 0 !== this.negative
			},
			h.prototype.neg = function() {
				return this.clone().ineg()
			},
			h.prototype.ineg = function() {
				return this.isZero() || (this.negative ^= 1),
				this
			},
			h.prototype.iuor = function(e) {
				for (; this.length < e.length;) this.words[this.length++] = 0;
				for (var t = 0; t < e.length; t++) this.words[t] |= e.words[t];
				return this.strip()
			},
			h.prototype.ior = function(e) {
				return u(0 == (this.negative | e.negative)),
				this.iuor(e)
			},
			h.prototype.or = function(e) {
				return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
			},
			h.prototype.uor = function(e) {
				return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
			},
			h.prototype.iuand = function(e) {
				for (var t = this.length > e.length ? e: this, r = 0; r < t.length; r++) this.words[r] &= e.words[r];
				return this.length = t.length,
				this.strip()
			},
			h.prototype.iand = function(e) {
				return u(0 == (this.negative | e.negative)),
				this.iuand(e)
			},
			h.prototype.and = function(e) {
				return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
			},
			h.prototype.uand = function(e) {
				return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
			},
			h.prototype.iuxor = function(e) {
				var t, r;
				r = this.length > e.length ? (t = this, e) : (t = e, this);
				for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
				if (this !== t) for (; n < t.length; n++) this.words[n] = t.words[n];
				return this.length = t.length,
				this.strip()
			},
			h.prototype.ixor = function(e) {
				return u(0 == (this.negative | e.negative)),
				this.iuxor(e)
			},
			h.prototype.xor = function(e) {
				return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
			},
			h.prototype.uxor = function(e) {
				return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
			},
			h.prototype.inotn = function(e) {
				u("number" == typeof e && 0 <= e);
				var t = 0 | r(e / 26),
				n = e % 26;
				this._expand(t),
				0 < n && t--;
				for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
				return 0 < n && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n),
				this.strip()
			},
			h.prototype.notn = function(e) {
				return this.clone().inotn(e)
			},
			h.prototype.setn = function(e, t) {
				u("number" == typeof e && 0 <= e);
				var r = 0 | e / 26,
				n = e % 26;
				return this._expand(1 + r),
				t ? this.words[r] |= 1 << n: this.words[r] &= ~ (1 << n),
				this.strip()
			},
			h.prototype.iadd = function(e) {
				var t, r, n;
				if (0 !== this.negative && 0 === e.negative) return this.negative = 0,
				t = this.isub(e),
				this.negative ^= 1,
				this._normSign();
				if (0 === this.negative && 0 !== e.negative) return e.negative = 0,
				t = this.isub(e),
				e.negative = 1,
				t._normSign();
				n = this.length > e.length ? (r = this, e) : (r = e, this);
				for (var i = 0,
				o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i,
				this.words[o] = 67108863 & t,
				i = t >>> 26;
				for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i,
				this.words[o] = 67108863 & t,
				i = t >>> 26;
				if (this.length = r.length, 0 !== i) this.words[this.length] = i,
				this.length++;
				else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
				return this
			},
			h.prototype.add = function(e) {
				var t;
				return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
			},
			h.prototype.isub = function(e) {
				if (0 !== e.negative) {
					e.negative = 0;
					var t = this.iadd(e);
					return e.negative = 1,
					t._normSign()
				}
				if (0 !== this.negative) return this.negative = 0,
				this.iadd(e),
				this.negative = 1,
				this._normSign();
				var r, n, o = this.cmp(e);
				if (0 === o) return this.negative = 0,
				this.length = 1,
				this.words[0] = 0,
				this;
				n = 0 < o ? (r = this, e) : (r = e, this);
				for (var a = 0,
				s = 0; s < n.length; s++) a = (t = (0 | r.words[s]) - (0 | n.words[s]) + a) >> 26,
				this.words[s] = 67108863 & t;
				for (; 0 !== a && s < r.length; s++) a = (t = (0 | r.words[s]) + a) >> 26,
				this.words[s] = 67108863 & t;
				if (0 === a && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
				return this.length = i(this.length, s),
				r !== this && (this.negative = 1),
				this.strip()
			},
			h.prototype.sub = function(e) {
				return this.clone().isub(e)
			};
			var B = function(e, t, r) {
				var n, i, o, a = e.words,
				s = t.words,
				c = r.words,
				u = 0,
				d = 0 | a[0],
				h = 8191 & d,
				l = d >>> 13,
				p = 0 | a[1],
				b = 8191 & p,
				y = p >>> 13,
				g = 0 | a[2],
				m = 8191 & g,
				v = g >>> 13,
				w = 0 | a[3],
				_ = 8191 & w,
				S = w >>> 13,
				k = 0 | a[4],
				E = 8191 & k,
				x = k >>> 13,
				I = 0 | a[5],
				A = 8191 & I,
				B = I >>> 13,
				j = 0 | a[6],
				T = 8191 & j,
				O = j >>> 13,
				P = 0 | a[7],
				C = 8191 & P,
				U = P >>> 13,
				M = 0 | a[8],
				R = 8191 & M,
				N = M >>> 13,
				L = 0 | a[9],
				D = 8191 & L,
				q = L >>> 13,
				z = 0 | s[0],
				F = 8191 & z,
				K = z >>> 13,
				H = 0 | s[1],
				V = 8191 & H,
				W = H >>> 13,
				J = 0 | s[2],
				G = 8191 & J,
				X = J >>> 13,
				Z = 0 | s[3],
				Y = 8191 & Z,
				$ = Z >>> 13,
				Q = 0 | s[4],
				ee = 8191 & Q,
				te = Q >>> 13,
				re = 0 | s[5],
				ne = 8191 & re,
				ie = re >>> 13,
				oe = 0 | s[6],
				ae = 8191 & oe,
				se = oe >>> 13,
				fe = 0 | s[7],
				ce = 8191 & fe,
				ue = fe >>> 13,
				de = 0 | s[8],
				he = 8191 & de,
				le = de >>> 13,
				pe = 0 | s[9],
				be = 8191 & pe,
				ye = pe >>> 13;
				r.negative = e.negative ^ t.negative,
				r.length = 19;
				var ge = 0 | (0 | u + (n = f(h, F))) + ((8191 & (i = 0 | (i = f(h, K)) + f(l, F))) << 13);
				u = 0 | (0 | (o = f(l, K)) + (i >>> 13)) + (ge >>> 26),
				ge &= 67108863,
				n = f(b, F),
				i = 0 | (i = f(b, K)) + f(y, F),
				o = f(y, K);
				var me = 0 | (0 | u + (n = 0 | n + f(h, V))) + ((8191 & (i = 0 | (i = 0 | i + f(h, W)) + f(l, V))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, W)) + (i >>> 13)) + (me >>> 26),
				me &= 67108863,
				n = f(m, F),
				i = 0 | (i = f(m, K)) + f(v, F),
				o = f(v, K),
				n = 0 | n + f(b, V),
				i = 0 | (i = 0 | i + f(b, W)) + f(y, V),
				o = 0 | o + f(y, W);
				var ve = 0 | (0 | u + (n = 0 | n + f(h, G))) + ((8191 & (i = 0 | (i = 0 | i + f(h, X)) + f(l, G))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, X)) + (i >>> 13)) + (ve >>> 26),
				ve &= 67108863,
				n = f(_, F),
				i = 0 | (i = f(_, K)) + f(S, F),
				o = f(S, K),
				n = 0 | n + f(m, V),
				i = 0 | (i = 0 | i + f(m, W)) + f(v, V),
				o = 0 | o + f(v, W),
				n = 0 | n + f(b, G),
				i = 0 | (i = 0 | i + f(b, X)) + f(y, G),
				o = 0 | o + f(y, X);
				var we = 0 | (0 | u + (n = 0 | n + f(h, Y))) + ((8191 & (i = 0 | (i = 0 | i + f(h, $)) + f(l, Y))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, $)) + (i >>> 13)) + (we >>> 26),
				we &= 67108863,
				n = f(E, F),
				i = 0 | (i = f(E, K)) + f(x, F),
				o = f(x, K),
				n = 0 | n + f(_, V),
				i = 0 | (i = 0 | i + f(_, W)) + f(S, V),
				o = 0 | o + f(S, W),
				n = 0 | n + f(m, G),
				i = 0 | (i = 0 | i + f(m, X)) + f(v, G),
				o = 0 | o + f(v, X),
				n = 0 | n + f(b, Y),
				i = 0 | (i = 0 | i + f(b, $)) + f(y, Y),
				o = 0 | o + f(y, $);
				var _e = 0 | (0 | u + (n = 0 | n + f(h, ee))) + ((8191 & (i = 0 | (i = 0 | i + f(h, te)) + f(l, ee))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, te)) + (i >>> 13)) + (_e >>> 26),
				_e &= 67108863,
				n = f(A, F),
				i = 0 | (i = f(A, K)) + f(B, F),
				o = f(B, K),
				n = 0 | n + f(E, V),
				i = 0 | (i = 0 | i + f(E, W)) + f(x, V),
				o = 0 | o + f(x, W),
				n = 0 | n + f(_, G),
				i = 0 | (i = 0 | i + f(_, X)) + f(S, G),
				o = 0 | o + f(S, X),
				n = 0 | n + f(m, Y),
				i = 0 | (i = 0 | i + f(m, $)) + f(v, Y),
				o = 0 | o + f(v, $),
				n = 0 | n + f(b, ee),
				i = 0 | (i = 0 | i + f(b, te)) + f(y, ee),
				o = 0 | o + f(y, te);
				var Se = 0 | (0 | u + (n = 0 | n + f(h, ne))) + ((8191 & (i = 0 | (i = 0 | i + f(h, ie)) + f(l, ne))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, ie)) + (i >>> 13)) + (Se >>> 26),
				Se &= 67108863,
				n = f(T, F),
				i = 0 | (i = f(T, K)) + f(O, F),
				o = f(O, K),
				n = 0 | n + f(A, V),
				i = 0 | (i = 0 | i + f(A, W)) + f(B, V),
				o = 0 | o + f(B, W),
				n = 0 | n + f(E, G),
				i = 0 | (i = 0 | i + f(E, X)) + f(x, G),
				o = 0 | o + f(x, X),
				n = 0 | n + f(_, Y),
				i = 0 | (i = 0 | i + f(_, $)) + f(S, Y),
				o = 0 | o + f(S, $),
				n = 0 | n + f(m, ee),
				i = 0 | (i = 0 | i + f(m, te)) + f(v, ee),
				o = 0 | o + f(v, te),
				n = 0 | n + f(b, ne),
				i = 0 | (i = 0 | i + f(b, ie)) + f(y, ne),
				o = 0 | o + f(y, ie);
				var ke = 0 | (0 | u + (n = 0 | n + f(h, ae))) + ((8191 & (i = 0 | (i = 0 | i + f(h, se)) + f(l, ae))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, se)) + (i >>> 13)) + (ke >>> 26),
				ke &= 67108863,
				n = f(C, F),
				i = 0 | (i = f(C, K)) + f(U, F),
				o = f(U, K),
				n = 0 | n + f(T, V),
				i = 0 | (i = 0 | i + f(T, W)) + f(O, V),
				o = 0 | o + f(O, W),
				n = 0 | n + f(A, G),
				i = 0 | (i = 0 | i + f(A, X)) + f(B, G),
				o = 0 | o + f(B, X),
				n = 0 | n + f(E, Y),
				i = 0 | (i = 0 | i + f(E, $)) + f(x, Y),
				o = 0 | o + f(x, $),
				n = 0 | n + f(_, ee),
				i = 0 | (i = 0 | i + f(_, te)) + f(S, ee),
				o = 0 | o + f(S, te),
				n = 0 | n + f(m, ne),
				i = 0 | (i = 0 | i + f(m, ie)) + f(v, ne),
				o = 0 | o + f(v, ie),
				n = 0 | n + f(b, ae),
				i = 0 | (i = 0 | i + f(b, se)) + f(y, ae),
				o = 0 | o + f(y, se);
				var Ee = 0 | (0 | u + (n = 0 | n + f(h, ce))) + ((8191 & (i = 0 | (i = 0 | i + f(h, ue)) + f(l, ce))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, ue)) + (i >>> 13)) + (Ee >>> 26),
				Ee &= 67108863,
				n = f(R, F),
				i = 0 | (i = f(R, K)) + f(N, F),
				o = f(N, K),
				n = 0 | n + f(C, V),
				i = 0 | (i = 0 | i + f(C, W)) + f(U, V),
				o = 0 | o + f(U, W),
				n = 0 | n + f(T, G),
				i = 0 | (i = 0 | i + f(T, X)) + f(O, G),
				o = 0 | o + f(O, X),
				n = 0 | n + f(A, Y),
				i = 0 | (i = 0 | i + f(A, $)) + f(B, Y),
				o = 0 | o + f(B, $),
				n = 0 | n + f(E, ee),
				i = 0 | (i = 0 | i + f(E, te)) + f(x, ee),
				o = 0 | o + f(x, te),
				n = 0 | n + f(_, ne),
				i = 0 | (i = 0 | i + f(_, ie)) + f(S, ne),
				o = 0 | o + f(S, ie),
				n = 0 | n + f(m, ae),
				i = 0 | (i = 0 | i + f(m, se)) + f(v, ae),
				o = 0 | o + f(v, se),
				n = 0 | n + f(b, ce),
				i = 0 | (i = 0 | i + f(b, ue)) + f(y, ce),
				o = 0 | o + f(y, ue);
				var xe = 0 | (0 | u + (n = 0 | n + f(h, he))) + ((8191 & (i = 0 | (i = 0 | i + f(h, le)) + f(l, he))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, le)) + (i >>> 13)) + (xe >>> 26),
				xe &= 67108863,
				n = f(D, F),
				i = 0 | (i = f(D, K)) + f(q, F),
				o = f(q, K),
				n = 0 | n + f(R, V),
				i = 0 | (i = 0 | i + f(R, W)) + f(N, V),
				o = 0 | o + f(N, W),
				n = 0 | n + f(C, G),
				i = 0 | (i = 0 | i + f(C, X)) + f(U, G),
				o = 0 | o + f(U, X),
				n = 0 | n + f(T, Y),
				i = 0 | (i = 0 | i + f(T, $)) + f(O, Y),
				o = 0 | o + f(O, $),
				n = 0 | n + f(A, ee),
				i = 0 | (i = 0 | i + f(A, te)) + f(B, ee),
				o = 0 | o + f(B, te),
				n = 0 | n + f(E, ne),
				i = 0 | (i = 0 | i + f(E, ie)) + f(x, ne),
				o = 0 | o + f(x, ie),
				n = 0 | n + f(_, ae),
				i = 0 | (i = 0 | i + f(_, se)) + f(S, ae),
				o = 0 | o + f(S, se),
				n = 0 | n + f(m, ce),
				i = 0 | (i = 0 | i + f(m, ue)) + f(v, ce),
				o = 0 | o + f(v, ue),
				n = 0 | n + f(b, he),
				i = 0 | (i = 0 | i + f(b, le)) + f(y, he),
				o = 0 | o + f(y, le);
				var Ie = 0 | (0 | u + (n = 0 | n + f(h, be))) + ((8191 & (i = 0 | (i = 0 | i + f(h, ye)) + f(l, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(l, ye)) + (i >>> 13)) + (Ie >>> 26),
				Ie &= 67108863,
				n = f(D, V),
				i = 0 | (i = f(D, W)) + f(q, V),
				o = f(q, W),
				n = 0 | n + f(R, G),
				i = 0 | (i = 0 | i + f(R, X)) + f(N, G),
				o = 0 | o + f(N, X),
				n = 0 | n + f(C, Y),
				i = 0 | (i = 0 | i + f(C, $)) + f(U, Y),
				o = 0 | o + f(U, $),
				n = 0 | n + f(T, ee),
				i = 0 | (i = 0 | i + f(T, te)) + f(O, ee),
				o = 0 | o + f(O, te),
				n = 0 | n + f(A, ne),
				i = 0 | (i = 0 | i + f(A, ie)) + f(B, ne),
				o = 0 | o + f(B, ie),
				n = 0 | n + f(E, ae),
				i = 0 | (i = 0 | i + f(E, se)) + f(x, ae),
				o = 0 | o + f(x, se),
				n = 0 | n + f(_, ce),
				i = 0 | (i = 0 | i + f(_, ue)) + f(S, ce),
				o = 0 | o + f(S, ue),
				n = 0 | n + f(m, he),
				i = 0 | (i = 0 | i + f(m, le)) + f(v, he),
				o = 0 | o + f(v, le);
				var Ae = 0 | (0 | u + (n = 0 | n + f(b, be))) + ((8191 & (i = 0 | (i = 0 | i + f(b, ye)) + f(y, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(y, ye)) + (i >>> 13)) + (Ae >>> 26),
				Ae &= 67108863,
				n = f(D, G),
				i = 0 | (i = f(D, X)) + f(q, G),
				o = f(q, X),
				n = 0 | n + f(R, Y),
				i = 0 | (i = 0 | i + f(R, $)) + f(N, Y),
				o = 0 | o + f(N, $),
				n = 0 | n + f(C, ee),
				i = 0 | (i = 0 | i + f(C, te)) + f(U, ee),
				o = 0 | o + f(U, te),
				n = 0 | n + f(T, ne),
				i = 0 | (i = 0 | i + f(T, ie)) + f(O, ne),
				o = 0 | o + f(O, ie),
				n = 0 | n + f(A, ae),
				i = 0 | (i = 0 | i + f(A, se)) + f(B, ae),
				o = 0 | o + f(B, se),
				n = 0 | n + f(E, ce),
				i = 0 | (i = 0 | i + f(E, ue)) + f(x, ce),
				o = 0 | o + f(x, ue),
				n = 0 | n + f(_, he),
				i = 0 | (i = 0 | i + f(_, le)) + f(S, he),
				o = 0 | o + f(S, le);
				var Be = 0 | (0 | u + (n = 0 | n + f(m, be))) + ((8191 & (i = 0 | (i = 0 | i + f(m, ye)) + f(v, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(v, ye)) + (i >>> 13)) + (Be >>> 26),
				Be &= 67108863,
				n = f(D, Y),
				i = 0 | (i = f(D, $)) + f(q, Y),
				o = f(q, $),
				n = 0 | n + f(R, ee),
				i = 0 | (i = 0 | i + f(R, te)) + f(N, ee),
				o = 0 | o + f(N, te),
				n = 0 | n + f(C, ne),
				i = 0 | (i = 0 | i + f(C, ie)) + f(U, ne),
				o = 0 | o + f(U, ie),
				n = 0 | n + f(T, ae),
				i = 0 | (i = 0 | i + f(T, se)) + f(O, ae),
				o = 0 | o + f(O, se),
				n = 0 | n + f(A, ce),
				i = 0 | (i = 0 | i + f(A, ue)) + f(B, ce),
				o = 0 | o + f(B, ue),
				n = 0 | n + f(E, he),
				i = 0 | (i = 0 | i + f(E, le)) + f(x, he),
				o = 0 | o + f(x, le);
				var je = 0 | (0 | u + (n = 0 | n + f(_, be))) + ((8191 & (i = 0 | (i = 0 | i + f(_, ye)) + f(S, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(S, ye)) + (i >>> 13)) + (je >>> 26),
				je &= 67108863,
				n = f(D, ee),
				i = 0 | (i = f(D, te)) + f(q, ee),
				o = f(q, te),
				n = 0 | n + f(R, ne),
				i = 0 | (i = 0 | i + f(R, ie)) + f(N, ne),
				o = 0 | o + f(N, ie),
				n = 0 | n + f(C, ae),
				i = 0 | (i = 0 | i + f(C, se)) + f(U, ae),
				o = 0 | o + f(U, se),
				n = 0 | n + f(T, ce),
				i = 0 | (i = 0 | i + f(T, ue)) + f(O, ce),
				o = 0 | o + f(O, ue),
				n = 0 | n + f(A, he),
				i = 0 | (i = 0 | i + f(A, le)) + f(B, he),
				o = 0 | o + f(B, le);
				var Te = 0 | (0 | u + (n = 0 | n + f(E, be))) + ((8191 & (i = 0 | (i = 0 | i + f(E, ye)) + f(x, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(x, ye)) + (i >>> 13)) + (Te >>> 26),
				Te &= 67108863,
				n = f(D, ne),
				i = 0 | (i = f(D, ie)) + f(q, ne),
				o = f(q, ie),
				n = 0 | n + f(R, ae),
				i = 0 | (i = 0 | i + f(R, se)) + f(N, ae),
				o = 0 | o + f(N, se),
				n = 0 | n + f(C, ce),
				i = 0 | (i = 0 | i + f(C, ue)) + f(U, ce),
				o = 0 | o + f(U, ue),
				n = 0 | n + f(T, he),
				i = 0 | (i = 0 | i + f(T, le)) + f(O, he),
				o = 0 | o + f(O, le);
				var Oe = 0 | (0 | u + (n = 0 | n + f(A, be))) + ((8191 & (i = 0 | (i = 0 | i + f(A, ye)) + f(B, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(B, ye)) + (i >>> 13)) + (Oe >>> 26),
				Oe &= 67108863,
				n = f(D, ae),
				i = 0 | (i = f(D, se)) + f(q, ae),
				o = f(q, se),
				n = 0 | n + f(R, ce),
				i = 0 | (i = 0 | i + f(R, ue)) + f(N, ce),
				o = 0 | o + f(N, ue),
				n = 0 | n + f(C, he),
				i = 0 | (i = 0 | i + f(C, le)) + f(U, he),
				o = 0 | o + f(U, le);
				var Pe = 0 | (0 | u + (n = 0 | n + f(T, be))) + ((8191 & (i = 0 | (i = 0 | i + f(T, ye)) + f(O, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(O, ye)) + (i >>> 13)) + (Pe >>> 26),
				Pe &= 67108863,
				n = f(D, ce),
				i = 0 | (i = f(D, ue)) + f(q, ce),
				o = f(q, ue),
				n = 0 | n + f(R, he),
				i = 0 | (i = 0 | i + f(R, le)) + f(N, he),
				o = 0 | o + f(N, le);
				var Ce = 0 | (0 | u + (n = 0 | n + f(C, be))) + ((8191 & (i = 0 | (i = 0 | i + f(C, ye)) + f(U, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(U, ye)) + (i >>> 13)) + (Ce >>> 26),
				Ce &= 67108863,
				n = f(D, he),
				i = 0 | (i = f(D, le)) + f(q, he),
				o = f(q, le);
				var Ue = 0 | (0 | u + (n = 0 | n + f(R, be))) + ((8191 & (i = 0 | (i = 0 | i + f(R, ye)) + f(N, be))) << 13);
				u = 0 | (0 | (o = 0 | o + f(N, ye)) + (i >>> 13)) + (Ue >>> 26),
				Ue &= 67108863;
				var Me = 0 | (0 | u + (n = f(D, be))) + ((8191 & (i = 0 | (i = f(D, ye)) + f(q, be))) << 13);
				return u = 0 | (0 | (o = f(q, ye)) + (i >>> 13)) + (Me >>> 26),
				Me &= 67108863,
				c[0] = ge,
				c[1] = me,
				c[2] = ve,
				c[3] = we,
				c[4] = _e,
				c[5] = Se,
				c[6] = ke,
				c[7] = Ee,
				c[8] = xe,
				c[9] = Ie,
				c[10] = Ae,
				c[11] = Be,
				c[12] = je,
				c[13] = Te,
				c[14] = Oe,
				c[15] = Pe,
				c[16] = Ce,
				c[17] = Ue,
				c[18] = Me,
				0 !== u && (c[19] = u, r.length++),
				r
			};
			f || (B = b),
			h.prototype.mulTo = function(e, t) {
				var r = this.length + e.length;
				return (10 === this.length && 10 === e.length ? B: r < 63 ? b: r < 1024 ?
				function(e, t, r) {
					r.negative = t.negative ^ e.negative,
					r.length = e.length + t.length;
					for (var o, a = 0,
					s = 0,
					f = 0; f < r.length - 1; f++) {
						o = s,
						s = 0;
						for (var c = 67108863 & a,
						u = n(f, t.length - 1), d = i(0, f - e.length + 1); d <= u; d++) {
							var h = f - d,
							l = (0 | e.words[h]) * (0 | t.words[d]),
							p = 67108863 & l;
							c = 67108863 & (p = 0 | p + c),
							s += (o = 0 | (o = 0 | o + (0 | l / 67108864)) + (p >>> 26)) >>> 26,
							o &= 67108863
						}
						r.words[f] = c,
						a = o,
						o = s
					}
					return 0 === a ? r.length--:r.words[f] = a,
					r.strip()
				}: y)(this, e, t)
			},
			g.prototype.makeRBT = function(e) {
				for (var t = Array(e), r = h.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
				return t
			},
			g.prototype.revBin = function(e, t, r) {
				if (0 === e || e === r - 1) return e;
				for (var n = 0,
				i = 0; i < t; i++) n |= (1 & e) << t - i - 1,
				e >>= 1;
				return n
			},
			g.prototype.permute = function(e, t, r, n, i, o) {
				for (var a = 0; a < o; a++) n[a] = t[e[a]],
				i[a] = r[e[a]]
			},
			g.prototype.transform = function(e, t, r, n, i, o) {
				var a = Math.sin,
				s = Math.cos,
				f = Math.PI;
				this.permute(o, e, t, r, n, i);
				for (var c = 1; c < i; c <<= 1) for (var u = c << 1,
				d = s(2 * f / u), h = a(2 * f / u), l = 0; l < i; l += u) for (var p = d,
				b = h,
				y = 0; y < c; y++) {
					var g = r[l + y],
					m = n[l + y],
					v = r[l + y + c],
					w = n[l + y + c],
					_ = p * v - b * w;
					w = p * w + b * v,
					v = _,
					r[l + y] = g + v,
					n[l + y] = m + w,
					r[l + y + c] = g - v,
					n[l + y + c] = m - w,
					y !== u && (_ = d * p - h * b, b = d * b + h * p, p = _)
				}
			},
			g.prototype.guessLen13b = function(e, t) {
				var r = 1 | i(t, e),
				n = 1 & r,
				o = 0;
				for (r = 0 | r / 2; r; r >>>= 1) o++;
				return 1 << o + 1 + n
			},
			g.prototype.conjugate = function(e, t, r) {
				if (! (r <= 1)) for (var n, i = 0; i < r / 2; i++) n = e[i],
				e[i] = e[r - i - 1],
				e[r - i - 1] = n,
				n = t[i],
				t[i] = -t[r - i - 1],
				t[r - i - 1] = -n
			},
			g.prototype.normalize13b = function(e, t) {
				for (var r, n = 0,
				i = 0; i < t / 2; i++) r = 8192 * o(e[2 * i + 1] / t) + o(e[2 * i] / t) + n,
				e[i] = 67108863 & r,
				n = r < 67108864 ? 0 : 0 | r / 67108864;
				return e
			},
			g.prototype.convert13b = function(e, t, r, n) {
				for (var i = 0,
				o = 0; o < t; o++) i += 0 | e[o],
				r[2 * o] = 8191 & i,
				i >>>= 13,
				r[2 * o + 1] = 8191 & i,
				i >>>= 13;
				for (o = 2 * t; o < n; ++o) r[o] = 0;
				u(0 === i),
				u(0 == ( - 8192 & i))
			},
			g.prototype.stub = function(e) {
				for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
				return t
			},
			g.prototype.mulp = function(e, t, r) {
				var n = 2 * this.guessLen13b(e.length, t.length),
				i = this.makeRBT(n),
				o = this.stub(n),
				a = Array(n),
				s = Array(n),
				f = Array(n),
				c = Array(n),
				u = Array(n),
				d = Array(n),
				h = r.words;
				h.length = n,
				this.convert13b(e.words, e.length, a, n),
				this.convert13b(t.words, t.length, c, n),
				this.transform(a, o, s, f, n, i),
				this.transform(c, o, u, d, n, i);
				for (var l, p = 0; p < n; p++) l = s[p] * u[p] - f[p] * d[p],
				f[p] = s[p] * d[p] + f[p] * u[p],
				s[p] = l;
				return this.conjugate(s, f, n),
				this.transform(s, f, h, o, n, i),
				this.conjugate(h, o, n),
				this.normalize13b(h, n),
				r.negative = e.negative ^ t.negative,
				r.length = e.length + t.length,
				r.strip()
			},
			h.prototype.mul = function(e) {
				var t = new h(null);
				return t.words = Array(this.length + e.length),
				this.mulTo(e, t)
			},
			h.prototype.mulf = function(e) {
				var t = new h(null);
				return t.words = Array(this.length + e.length),
				y(this, e, t)
			},
			h.prototype.imul = function(e) {
				return this.clone().mulTo(e, this)
			},
			h.prototype.imuln = function(e) {
				u("number" == typeof e),
				u(e < 67108864);
				for (var t = 0,
				r = 0; r < this.length; r++) {
					var n = (0 | this.words[r]) * e,
					i = (67108863 & n) + (67108863 & t);
					t >>= 26,
					t += 0 | n / 67108864,
					t += i >>> 26,
					this.words[r] = 67108863 & i
				}
				return 0 !== t && (this.words[r] = t, this.length++),
				this
			},
			h.prototype.muln = function(e) {
				return this.clone().imuln(e)
			},
			h.prototype.sqr = function() {
				return this.mul(this)
			},
			h.prototype.isqr = function() {
				return this.imul(this.clone())
			},
			h.prototype.pow = function(e) {
				var t = function(e) {
					for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
						var n = 0 | r / 26,
						i = r % 26;
						t[r] = (e.words[n] & 1 << i) >>> i
					}
					return t
				} (e);
				if (0 === t.length) return new h(1);
				for (var r = this,
				n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
				if (++n < t.length) for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
				return r
			},
			h.prototype.iushln = function(e) {
				u("number" == typeof e && 0 <= e);
				var t, r = e % 26,
				n = (e - r) / 26;
				if (0 != r) {
					var i = 0;
					for (t = 0; t < this.length; t++) {
						var o = this.words[t] & 67108863 >>> 26 - r << 26 - r,
						a = (0 | this.words[t]) - o << r;
						this.words[t] = a | i,
						i = o >>> 26 - r
					}
					i && (this.words[t] = i, this.length++)
				}
				if (0 != n) {
					for (t = this.length - 1; 0 <= t; t--) this.words[t + n] = this.words[t];
					for (t = 0; t < n; t++) this.words[t] = 0;
					this.length += n
				}
				return this.strip()
			},
			h.prototype.ishln = function(e) {
				return u(0 === this.negative),
				this.iushln(e)
			},
			h.prototype.iushrn = function(e, t, r) {
				u("number" == typeof e && 0 <= e);
				var o = t ? (t - t % 26) / 26 : 0,
				a = e % 26,
				s = n((e - a) / 26, this.length),
				f = r;
				if (o = i(0, o -= s), f) {
					for (var c = 0; c < s; c++) f.words[c] = this.words[c];
					f.length = s
				}
				if (0 !== s) if (this.length > s) for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s];
				else this.words[0] = 0,
				this.length = 1;
				var d = 0;
				for (c = this.length - 1; 0 <= c && (0 !== d || o <= c); c--) {
					var h = 0 | this.words[c];
					this.words[c] = d << 26 - a | h >>> a,
					d = h & (67108863 ^ 67108863 >>> a << a)
				}
				return f && 0 !== d && (f.words[f.length++] = d),
				0 === this.length && (this.words[0] = 0, this.length = 1),
				this.strip()
			},
			h.prototype.ishrn = function(e, t, r) {
				return u(0 === this.negative),
				this.iushrn(e, t, r)
			},
			h.prototype.shln = function(e) {
				return this.clone().ishln(e)
			},
			h.prototype.ushln = function(e) {
				return this.clone().iushln(e)
			},
			h.prototype.shrn = function(e) {
				return this.clone().ishrn(e)
			},
			h.prototype.ushrn = function(e) {
				return this.clone().iushrn(e)
			},
			h.prototype.testn = function(e) {
				u("number" == typeof e && 0 <= e);
				var t = e % 26,
				r = (e - t) / 26;
				return ! (this.length <= r || !(this.words[r] & 1 << t))
			},
			h.prototype.imaskn = function(e) {
				u("number" == typeof e && 0 <= e);
				var t = e % 26,
				r = (e - t) / 26;
				return u(0 === this.negative, "imaskn works only with positive numbers"),
				this.length <= r ? this: (0 != t && r++, this.length = n(r, this.length), 0 != t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this.strip())
			},
			h.prototype.maskn = function(e) {
				return this.clone().imaskn(e)
			},
			h.prototype.iaddn = function(e) {
				return u("number" == typeof e),
				u(e < 67108864),
				e < 0 ? this.isubn( - e) : 0 === this.negative ? this._iaddn(e) : (1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this)
			},
			h.prototype._iaddn = function(e) {
				this.words[0] += e;
				for (var t = 0; t < this.length && 67108864 <= this.words[t]; t++) this.words[t] -= 67108864,
				t == this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
				return this.length = i(this.length, t + 1),
				this
			},
			h.prototype.isubn = function(e) {
				if (u("number" == typeof e), u(e < 67108864), e < 0) return this.iaddn( - e);
				if (0 !== this.negative) return this.negative = 0,
				this.iaddn(e),
				this.negative = 1,
				this;
				if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0],
				this.negative = 1;
				else for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864,
				--this.words[t + 1];
				return this.strip()
			},
			h.prototype.addn = function(e) {
				return this.clone().iaddn(e)
			},
			h.prototype.subn = function(e) {
				return this.clone().isubn(e)
			},
			h.prototype.iabs = function() {
				return this.negative = 0,
				this
			},
			h.prototype.abs = function() {
				return this.clone().iabs()
			},
			h.prototype._ishlnsubmul = function(e, t, r) {
				var n, i = e.length + r;
				this._expand(i);
				var o, a = 0;
				for (n = 0; n < e.length; n++) {
					o = (0 | this.words[n + r]) + a;
					var s = (0 | e.words[n]) * t;
					a = ((o -= 67108863 & s) >> 26) - (0 | s / 67108864),
					this.words[n + r] = 67108863 & o
				}
				for (; n < this.length - r; n++) a = (o = (0 | this.words[n + r]) + a) >> 26,
				this.words[n + r] = 67108863 & o;
				if (0 === a) return this.strip();
				for (u( - 1 === a), n = a = 0; n < this.length; n++) a = (o = -(0 | this.words[n]) + a) >> 26,
				this.words[n] = 67108863 & o;
				return this.negative = 1,
				this.strip()
			},
			h.prototype._wordDiv = function(e, t) {
				var r = (this.length, e.length),
				i = this.clone(),
				o = e,
				a = 0 | o.words[o.length - 1];
				0 != (r = 26 - this._countBits(a)) && (o = o.ushln(r), i.iushln(r), a = 0 | o.words[o.length - 1]);
				var s, f = i.length - o.length;
				if ("mod" !== t) { (s = new h(null)).length = 1 + f,
					s.words = Array(s.length);
					for (var c = 0; c < s.length; c++) s.words[c] = 0
				}
				var u = i.clone()._ishlnsubmul(o, 1, f);
				0 === u.negative && (i = u, s && (s.words[f] = 1));
				for (var d, l = f - 1; 0 <= l; l--) {
					for (d = 67108864 * (0 | i.words[o.length + l]) + (0 | i.words[o.length + l - 1]), d = n(0 | d / a, 67108863), i._ishlnsubmul(o, d, l); 0 !== i.negative;) d--,
					i.negative = 0,
					i._ishlnsubmul(o, 1, l),
					i.isZero() || (i.negative ^= 1);
					s && (s.words[l] = d)
				}
				return s && s.strip(),
				i.strip(),
				"div" !== t && 0 != r && i.iushrn(r),
				{
					div: s || null,
					mod: i
				}
			},
			h.prototype.divmod = function(e, t, r) {
				return u(!e.isZero()),
				this.isZero() ? {
					div: new h(0),
					mod: new h(0)
				}: 0 !== this.negative && 0 === e.negative ? (o = this.neg().divmod(e, t), "mod" !== t && (n = o.div.neg()), "div" !== t && (i = o.mod.neg(), r && 0 !== i.negative && i.iadd(e)), {
					div: n,
					mod: i
				}) : 0 === this.negative && 0 !== e.negative ? (o = this.divmod(e.neg(), t), "mod" !== t && (n = o.div.neg()), {
					div: n,
					mod: o.mod
				}) : 0 == (this.negative & e.negative) ? e.length > this.length || this.cmp(e) < 0 ? {
					div: new h(0),
					mod: this
				}: 1 === e.length ? "div" === t ? {
					div: this.divn(e.words[0]),
					mod: null
				}: "mod" === t ? {
					div: null,
					mod: new h(this.modn(e.words[0]))
				}: {
					div: this.divn(e.words[0]),
					mod: new h(this.modn(e.words[0]))
				}: this._wordDiv(e, t) : (o = this.neg().divmod(e.neg(), t), "div" !== t && (i = o.mod.neg(), r && 0 !== i.negative && i.isub(e)), {
					div: o.div,
					mod: i
				});
				var n, i, o
			}, h.prototype.div = function(e) {
				return this.divmod(e, "div", !1).div
			},
			h.prototype.mod = function(e) {
				return this.divmod(e, "mod", !1).mod
			},
			h.prototype.umod = function(e) {
				return this.divmod(e, "mod", !0).mod
			},
			h.prototype.divRound = function(e) {
				var t = this.divmod(e);
				if (t.mod.isZero()) return t.div;
				var r = 0 === t.div.negative ? t.mod: t.mod.isub(e),
				n = e.ushrn(1),
				i = e.andln(1),
				o = r.cmp(n);
				return o < 0 || 1 === i && 0 === o ? t.div: 0 === t.div.negative ? t.div.iaddn(1) : t.div.isubn(1)
			},
			h.prototype.modn = function(e) {
				u(e <= 67108863);
				for (var t = 0,
				r = this.length - 1; 0 <= r; r--) t = (67108864 % e * t + (0 | this.words[r])) % e;
				return t
			},
			h.prototype.idivn = function(e) {
				u(e <= 67108863);
				for (var t, r = 0,
				n = this.length - 1; 0 <= n; n--) t = (0 | this.words[n]) + 67108864 * r,
				this.words[n] = 0 | t / e,
				r = t % e;
				return this.strip()
			},
			h.prototype.divn = function(e) {
				return this.clone().idivn(e)
			},
			h.prototype.egcd = function(e) {
				u(0 === e.negative),
				u(!e.isZero());
				var t = this,
				r = e.clone();
				t = 0 === t.negative ? t.clone() : t.umod(e);
				for (var n = new h(1), i = new h(0), o = new h(0), a = new h(1), s = 0; t.isEven() && r.isEven();) t.iushrn(1),
				r.iushrn(1),
				++s;
				for (var f = r.clone(), c = t.clone(); ! t.isZero();) {
					for (var d = 0,
					l = 1; 0 == (t.words[0] & l) && d < 26; ++d, l <<= 1);
					if (0 < d) for (t.iushrn(d); 0 < d--;)(n.isOdd() || i.isOdd()) && (n.iadd(f), i.isub(c)),
					n.iushrn(1),
					i.iushrn(1);
					for (var p = 0,
					b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);
					if (0 < p) for (r.iushrn(p); 0 < p--;)(o.isOdd() || a.isOdd()) && (o.iadd(f), a.isub(c)),
					o.iushrn(1),
					a.iushrn(1);
					0 <= t.cmp(r) ? (t.isub(r), n.isub(o), i.isub(a)) : (r.isub(t), o.isub(n), a.isub(i))
				}
				return {
					a: o,
					b: a,
					gcd: r.iushln(s)
				}
			},
			h.prototype._invmp = function(e) {
				u(0 === e.negative),
				u(!e.isZero());
				var t, r = this,
				n = e.clone();
				r = 0 === r.negative ? r.clone() : r.umod(e);
				for (var i = new h(1), o = new h(0), a = n.clone(); 0 < r.cmpn(1) && 0 < n.cmpn(1);) {
					for (var s = 0,
					f = 1; 0 == (r.words[0] & f) && s < 26; ++s, f <<= 1);
					if (0 < s) for (r.iushrn(s); 0 < s--;) i.isOdd() && i.iadd(a),
					i.iushrn(1);
					for (var c = 0,
					d = 1; 0 == (n.words[0] & d) && c < 26; ++c, d <<= 1);
					if (0 < c) for (n.iushrn(c); 0 < c--;) o.isOdd() && o.iadd(a),
					o.iushrn(1);
					0 <= r.cmp(n) ? (r.isub(n), i.isub(o)) : (n.isub(r), o.isub(i))
				}
				return (t = 0 === r.cmpn(1) ? i: o).cmpn(0) < 0 && t.iadd(e),
				t
			},
			h.prototype.gcd = function(e) {
				if (this.isZero()) return e.abs();
				if (e.isZero()) return this.abs();
				var t = this.clone(),
				r = e.clone();
				t.negative = 0;
				for (var n = r.negative = 0; t.isEven() && r.isEven(); n++) t.iushrn(1),
				r.iushrn(1);
				for (;;) {
					for (; t.isEven();) t.iushrn(1);
					for (; r.isEven();) r.iushrn(1);
					var i = t.cmp(r);
					if (i < 0) {
						var o = t;
						t = r,
						r = o
					} else if (0 === i || 0 === r.cmpn(1)) break;
					t.isub(r)
				}
				return r.iushln(n)
			},
			h.prototype.invm = function(e) {
				return this.egcd(e).a.umod(e)
			},
			h.prototype.isEven = function() {
				return 0 == (1 & this.words[0])
			},
			h.prototype.isOdd = function() {
				return 1 == (1 & this.words[0])
			},
			h.prototype.andln = function(e) {
				return this.words[0] & e
			},
			h.prototype.bincn = function(e) {
				u("number" == typeof e);
				var t = e % 26,
				r = (e - t) / 26,
				n = 1 << t;
				if (this.length <= r) return this._expand(1 + r),
				this.words[r] |= n,
				this;
				for (var i, o = n,
				a = r; 0 !== o && a < this.length; a++) i = 0 | this.words[a],
				o = (i += o) >>> 26,
				i &= 67108863,
				this.words[a] = i;
				return 0 !== o && (this.words[a] = o, this.length++),
				this
			},
			h.prototype.isZero = function() {
				return 1 === this.length && 0 === this.words[0]
			},
			h.prototype.cmpn = function(e) {
				var t, r = e < 0;
				if (0 !== this.negative && !r) return - 1;
				if (0 === this.negative && r) return 1;
				if (this.strip(), 1 < this.length) t = 1;
				else {
					r && (e = -e),
					u(e <= 67108863, "Number is too big");
					var n = 0 | this.words[0];
					t = n === e ? 0 : n < e ? -1 : 1
				}
				return 0 === this.negative ? t: 0 | -t
			},
			h.prototype.cmp = function(e) {
				if (0 !== this.negative && 0 === e.negative) return - 1;
				if (0 === this.negative && 0 !== e.negative) return 1;
				var t = this.ucmp(e);
				return 0 === this.negative ? t: 0 | -t
			},
			h.prototype.ucmp = function(e) {
				if (this.length > e.length) return 1;
				if (this.length < e.length) return - 1;
				for (var t = 0,
				r = this.length - 1; 0 <= r; r--) {
					var n = 0 | this.words[r],
					i = 0 | e.words[r];
					if (n != i) {
						n < i ? t = -1 : i < n && (t = 1);
						break
					}
				}
				return t
			},
			h.prototype.gtn = function(e) {
				return 1 === this.cmpn(e)
			},
			h.prototype.gt = function(e) {
				return 1 === this.cmp(e)
			},
			h.prototype.gten = function(e) {
				return 0 <= this.cmpn(e)
			},
			h.prototype.gte = function(e) {
				return 0 <= this.cmp(e)
			},
			h.prototype.ltn = function(e) {
				return - 1 === this.cmpn(e)
			},
			h.prototype.lt = function(e) {
				return - 1 === this.cmp(e)
			},
			h.prototype.lten = function(e) {
				return this.cmpn(e) <= 0
			},
			h.prototype.lte = function(e) {
				return this.cmp(e) <= 0
			},
			h.prototype.eqn = function(e) {
				return 0 === this.cmpn(e)
			},
			h.prototype.eq = function(e) {
				return 0 === this.cmp(e)
			},
			h.red = function(e) {
				return new k(e)
			},
			h.prototype.toRed = function(e) {
				return u(!this.red, "Already a number in reduction context"),
				u(0 === this.negative, "red works only with positives"),
				e.convertTo(this)._forceRed(e)
			},
			h.prototype.fromRed = function() {
				return u(this.red, "fromRed works only with numbers in reduction context"),
				this.red.convertFrom(this)
			},
			h.prototype._forceRed = function(e) {
				return this.red = e,
				this
			},
			h.prototype.forceRed = function(e) {
				return u(!this.red, "Already a number in reduction context"),
				this._forceRed(e)
			},
			h.prototype.redAdd = function(e) {
				return u(this.red, "redAdd works only with red numbers"),
				this.red.add(this, e)
			},
			h.prototype.redIAdd = function(e) {
				return u(this.red, "redIAdd works only with red numbers"),
				this.red.iadd(this, e)
			},
			h.prototype.redSub = function(e) {
				return u(this.red, "redSub works only with red numbers"),
				this.red.sub(this, e)
			},
			h.prototype.redISub = function(e) {
				return u(this.red, "redISub works only with red numbers"),
				this.red.isub(this, e)
			},
			h.prototype.redShl = function(e) {
				return u(this.red, "redShl works only with red numbers"),
				this.red.shl(this, e)
			},
			h.prototype.redMul = function(e) {
				return u(this.red, "redMul works only with red numbers"),
				this.red._verify2(this, e),
				this.red.mul(this, e)
			},
			h.prototype.redIMul = function(e) {
				return u(this.red, "redMul works only with red numbers"),
				this.red._verify2(this, e),
				this.red.imul(this, e)
			},
			h.prototype.redSqr = function() {
				return u(this.red, "redSqr works only with red numbers"),
				this.red._verify1(this),
				this.red.sqr(this)
			},
			h.prototype.redISqr = function() {
				return u(this.red, "redISqr works only with red numbers"),
				this.red._verify1(this),
				this.red.isqr(this)
			},
			h.prototype.redSqrt = function() {
				return u(this.red, "redSqrt works only with red numbers"),
				this.red._verify1(this),
				this.red.sqrt(this)
			},
			h.prototype.redInvm = function() {
				return u(this.red, "redInvm works only with red numbers"),
				this.red._verify1(this),
				this.red.invm(this)
			},
			h.prototype.redNeg = function() {
				return u(this.red, "redNeg works only with red numbers"),
				this.red._verify1(this),
				this.red.neg(this)
			},
			h.prototype.redPow = function(e) {
				return u(this.red && !e.red, "redPow(normalNum)"),
				this.red._verify1(this),
				this.red.pow(this, e)
			};
			var j = {
				k256: null,
				p224: null,
				p192: null,
				p25519: null
			};
			m.prototype._tmp = function() {
				var e = new h(null);
				return e.words = Array(r(this.n / 13)),
				e
			},
			m.prototype.ireduce = function(e) {
				for (var t, r = e; this.split(r, this.tmp), (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()) > this.n;);
				var n = t < this.n ? -1 : r.ucmp(this.p);
				return 0 === n ? (r.words[0] = 0, r.length = 1) : 0 < n ? r.isub(this.p) : r.strip(),
				r
			},
			m.prototype.split = function(e, t) {
				e.iushrn(this.n, 0, t)
			},
			m.prototype.imulK = function(e) {
				return e.imul(this.k)
			},
			d(v, m),
			v.prototype.split = function(e, t) {
				for (var r = n(e.length, 9), i = 0; i < r; i++) t.words[i] = e.words[i];
				if (t.length = r, e.length <= 9) return e.words[0] = 0,
				void(e.length = 1);
				var o = e.words[9];
				for (t.words[t.length++] = 4194303 & o, i = 10; i < e.length; i++) {
					var a = 0 | e.words[i];
					e.words[i - 10] = (4194303 & a) << 4 | o >>> 22,
					o = a
				}
				o >>>= 22,
				e.words[i - 10] = o,
				e.length -= 0 === o && 10 < e.length ? 10 : 9
			},
			v.prototype.imulK = function(e) {
				e.words[e.length] = 0,
				e.words[e.length + 1] = 0,
				e.length += 2;
				for (var t, r = 0,
				n = 0; n < e.length; n++) r += 977 * (t = 0 | e.words[n]),
				e.words[n] = 67108863 & r,
				r = 64 * t + (0 | r / 67108864);
				return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--),
				e
			},
			d(w, m),
			d(_, m),
			d(S, m),
			S.prototype.imulK = function(e) {
				for (var t = 0,
				r = 0; r < e.length; r++) {
					var n = 19 * (0 | e.words[r]) + t,
					i = 67108863 & n;
					n >>>= 26,
					e.words[r] = i,
					t = n
				}
				return 0 !== t && (e.words[e.length++] = t),
				e
			},
			h._prime = function(e) {
				if (j[e]) return j[e];
				var t;
				if ("k256" === e) t = new v;
				else if ("p224" === e) t = new w;
				else if ("p192" === e) t = new _;
				else {
					if ("p25519" !== e) throw new Error("Unknown prime " + e);
					t = new S
				}
				return j[e] = t
			},
			k.prototype._verify1 = function(e) {
				u(0 === e.negative, "red works only with positives"),
				u(e.red, "red works only with red numbers")
			},
			k.prototype._verify2 = function(e, t) {
				u(0 == (e.negative | t.negative), "red works only with positives"),
				u(e.red && e.red === t.red, "red works only with red numbers")
			},
			k.prototype.imod = function(e) {
				return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
			},
			k.prototype.neg = function(e) {
				return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
			},
			k.prototype.add = function(e, t) {
				this._verify2(e, t);
				var r = e.add(t);
				return 0 <= r.cmp(this.m) && r.isub(this.m),
				r._forceRed(this)
			},
			k.prototype.iadd = function(e, t) {
				this._verify2(e, t);
				var r = e.iadd(t);
				return 0 <= r.cmp(this.m) && r.isub(this.m),
				r
			},
			k.prototype.sub = function(e, t) {
				this._verify2(e, t);
				var r = e.sub(t);
				return r.cmpn(0) < 0 && r.iadd(this.m),
				r._forceRed(this)
			},
			k.prototype.isub = function(e, t) {
				this._verify2(e, t);
				var r = e.isub(t);
				return r.cmpn(0) < 0 && r.iadd(this.m),
				r
			},
			k.prototype.shl = function(e, t) {
				return this._verify1(e),
				this.imod(e.ushln(t))
			},
			k.prototype.imul = function(e, t) {
				return this._verify2(e, t),
				this.imod(e.imul(t))
			},
			k.prototype.mul = function(e, t) {
				return this._verify2(e, t),
				this.imod(e.mul(t))
			},
			k.prototype.isqr = function(e) {
				return this.imul(e, e.clone())
			},
			k.prototype.sqr = function(e) {
				return this.mul(e, e)
			},
			k.prototype.sqrt = function(e) {
				if (e.isZero()) return e.clone();
				var t = this.m.andln(3);
				if (u(1 == t % 2), 3 === t) {
					var r = this.m.add(new h(1)).iushrn(2);
					return this.pow(e, r)
				}
				for (var n = this.m.subn(1), i = 0; ! n.isZero() && 0 === n.andln(1);) i++,
				n.iushrn(1);
				u(!n.isZero());
				var o = new h(1).toRed(this),
				a = o.redNeg(),
				s = this.m.subn(1).iushrn(1),
				f = this.m.bitLength();
				for (f = new h(2 * f * f).toRed(this); 0 !== this.pow(f, s).cmp(a);) f.redIAdd(a);
				for (var c = this.pow(f, n), d = this.pow(e, n.addn(1).iushrn(1)), l = this.pow(e, n), p = i; 0 !== l.cmp(o);) {
					for (var b = l,
					y = 0; 0 !== b.cmp(o); y++) b = b.redSqr();
					u(y < p);
					var g = this.pow(c, new h(1).iushln(p - y - 1));
					d = d.redMul(g),
					c = g.redSqr(),
					l = l.redMul(c),
					p = y
				}
				return d
			},
			k.prototype.invm = function(e) {
				var t = e._invmp(this.m);
				return 0 === t.negative ? this.imod(t) : (t.negative = 0, this.imod(t).redNeg())
			},
			k.prototype.pow = function(e, t) {
				if (t.isZero()) return new h(1).toRed(this);
				if (0 === t.cmpn(1)) return e.clone();
				var r = Array(16);
				r[0] = new h(1).toRed(this),
				r[1] = e;
				for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
				var i = r[0],
				o = 0,
				a = 0,
				s = t.bitLength() % 26;
				for (0 === s && (s = 26), n = t.length - 1; 0 <= n; n--) {
					for (var f, c = t.words[n], u = s - 1; 0 <= u; u--) f = 1 & c >> u,
					i !== r[0] && (i = this.sqr(i)),
					0 != f || 0 !== o ? (o <<= 1, o |= f, 4 != ++a && (0 !== n || 0 !== u) || (i = this.mul(i, r[o]), o = a = 0)) : a = 0;
					s = 26
				}
				return i
			},
			k.prototype.convertTo = function(e) {
				var t = e.umod(this.m);
				return t === e ? t.clone() : t
			},
			k.prototype.convertFrom = function(e) {
				var t = e.clone();
				return t.red = null,
				t
			},
			h.mont = function(e) {
				return new E(e)
			},
			d(E, k),
			E.prototype.convertTo = function(e) {
				return this.imod(e.ushln(this.shift))
			},
			E.prototype.convertFrom = function(e) {
				var t = this.imod(e.mul(this.rinv));
				return t.red = null,
				t
			},
			E.prototype.imul = function(e, t) {
				if (e.isZero() || t.isZero()) return e.words[0] = 0,
				e.length = 1,
				e;
				var r = e.imul(t),
				n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
				i = r.isub(n).iushrn(this.shift),
				o = i;
				return 0 <= i.cmp(this.m) ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
				o._forceRed(this)
			},
			E.prototype.mul = function(e, t) {
				if (e.isZero() || t.isZero()) return new h(0)._forceRed(this);
				var r = e.mul(t),
				n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
				i = r.isub(n).iushrn(this.shift),
				o = i;
				return 0 <= i.cmp(this.m) ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
				o._forceRed(this)
			},
			E.prototype.invm = function(e) {
				return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
			}
		} (void 0 === t || t, this)
	},
	{
		buffer: 30
	}],
	29 : [function(e, t) {
		function r(e) {
			this.rand = e
		}
		var n;
		if (t.exports = function(e) {
			return (n = n || new r(null)).generate(e)
		},
		(t.exports.Rand = r).prototype.generate = function(e) {
			return this._rand(e)
		},
		r.prototype._rand = function(e) {
			if (this.rand.getBytes) return this.rand.getBytes(e);
			for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
			return t
		},
		"object" == typeof self) self.crypto && self.crypto.getRandomValues ? r.prototype._rand = function(e) {
			var t = new Uint8Array(e);
			return self.crypto.getRandomValues(t),
			t
		}: self.msCrypto && self.msCrypto.getRandomValues ? r.prototype._rand = function(e) {
			var t = new Uint8Array(e);
			return self.msCrypto.getRandomValues(t),
			t
		}: "object" == typeof window && (r.prototype._rand = function() {
			throw new Error("Not implemented yet")
		});
		else try {
			var i = e("crypto");
			if ("function" != typeof i.randomBytes) throw new Error("Not supported");
			r.prototype._rand = function(e) {
				return i.randomBytes(e)
			}
		} catch(t) {}
	},
	{
		crypto: 30
	}],
	30 : [function() {},
	{}],
	31 : [function(e, t) {
		function r(e) {
			a.isBuffer(e) || (e = a.from(e));
			for (var t = 0 | e.length / 4,
			r = Array(t), n = 0; n < t; n++) r[n] = e.readUInt32BE(4 * n);
			return r
		}
		function n(e) {
			for (; 0 < e.length; e++) e[0] = 0
		}
		function i(e, t, r, n, i) {
			for (var o, a, s, f, c = r[0], u = r[1], d = r[2], h = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], y = e[3] ^ t[3], g = 4, m = 1; m < i; m++) o = c[l >>> 24] ^ u[255 & p >>> 16] ^ d[255 & b >>> 8] ^ h[255 & y] ^ t[g++],
			a = c[p >>> 24] ^ u[255 & b >>> 16] ^ d[255 & y >>> 8] ^ h[255 & l] ^ t[g++],
			s = c[b >>> 24] ^ u[255 & y >>> 16] ^ d[255 & l >>> 8] ^ h[255 & p] ^ t[g++],
			f = c[y >>> 24] ^ u[255 & l >>> 16] ^ d[255 & p >>> 8] ^ h[255 & b] ^ t[g++],
			l = o,
			p = a,
			b = s,
			y = f;
			return o = (n[l >>> 24] << 24 | n[255 & p >>> 16] << 16 | n[255 & b >>> 8] << 8 | n[255 & y]) ^ t[g++],
			a = (n[p >>> 24] << 24 | n[255 & b >>> 16] << 16 | n[255 & y >>> 8] << 8 | n[255 & l]) ^ t[g++],
			s = (n[b >>> 24] << 24 | n[255 & y >>> 16] << 16 | n[255 & l >>> 8] << 8 | n[255 & p]) ^ t[g++],
			f = (n[y >>> 24] << 24 | n[255 & l >>> 16] << 16 | n[255 & p >>> 8] << 8 | n[255 & b]) ^ t[g++],
			[o >>>= 0, a >>>= 0, s >>>= 0, f >>>= 0]
		}
		function o(e) {
			this._key = r(e),
			this._reset()
		}
		var a = e("safe-buffer").Buffer,
		s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
		f = function() {
			for (var e = Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : 283 ^ t << 1;
			for (var r, n = [], i = [], o = [[], [], [], []], a = [[], [], [], []], s = 0, f = 0, c = 0; c < 256; ++c) {
				r = (r = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4) >>> 8 ^ 255 & r ^ 99;
				var u = e[i[n[s] = r] = s],
				d = e[u],
				h = e[d],
				l = 257 * e[r] ^ 16843008 * r;
				o[0][s] = l << 24 | l >>> 8,
				o[1][s] = l << 16 | l >>> 16,
				o[2][s] = l << 8 | l >>> 24,
				o[3][s] = l,
				l = 16843009 * h ^ 65537 * d ^ 257 * u ^ 16843008 * s,
				a[0][r] = l << 24 | l >>> 8,
				a[1][r] = l << 16 | l >>> 16,
				a[2][r] = l << 8 | l >>> 24,
				a[3][r] = l,
				0 === s ? s = f = 1 : (s = u ^ e[e[e[h ^ u]]], f ^= e[e[f]])
			}
			return {
				SBOX: n,
				INV_SBOX: i,
				SUB_MIX: o,
				INV_SUB_MIX: a
			}
		} ();
		o.blockSize = 16,
		o.keySize = 32,
		o.prototype.blockSize = o.blockSize,
		o.prototype.keySize = o.keySize,
		o.prototype._reset = function() {
			for (var e = this._key,
			t = e.length,
			r = t + 6,
			n = 4 * (r + 1), i = [], o = 0; o < t; o++) i[o] = e[o];
			for (o = t; o < n; o++) {
				var a = i[o - 1];
				0 == o % t ? (a = a << 8 | a >>> 24, a = f.SBOX[a >>> 24] << 24 | f.SBOX[255 & a >>> 16] << 16 | f.SBOX[255 & a >>> 8] << 8 | f.SBOX[255 & a], a ^= s[0 | o / t] << 24) : 6 < t && 4 == o % t && (a = f.SBOX[a >>> 24] << 24 | f.SBOX[255 & a >>> 16] << 16 | f.SBOX[255 & a >>> 8] << 8 | f.SBOX[255 & a]),
				i[o] = i[o - t] ^ a
			}
			for (var c = [], u = 0; u < n; u++) {
				var d = n - u,
				h = i[d - (u % 4 ? 0 : 4)];
				c[u] = u < 4 || d <= 4 ? h: f.INV_SUB_MIX[0][f.SBOX[h >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[255 & h >>> 16]] ^ f.INV_SUB_MIX[2][f.SBOX[255 & h >>> 8]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & h]]
			}
			this._nRounds = r,
			this._keySchedule = i,
			this._invKeySchedule = c
		},
		o.prototype.encryptBlockRaw = function(e) {
			return i(e = r(e), this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds)
		},
		o.prototype.encryptBlock = function(e) {
			var t = this.encryptBlockRaw(e),
			r = a.allocUnsafe(16);
			return r.writeUInt32BE(t[0], 0),
			r.writeUInt32BE(t[1], 4),
			r.writeUInt32BE(t[2], 8),
			r.writeUInt32BE(t[3], 12),
			r
		},
		o.prototype.decryptBlock = function(e) {
			var t = (e = r(e))[1];
			e[1] = e[3],
			e[3] = t;
			var n = i(e, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds),
			o = a.allocUnsafe(16);
			return o.writeUInt32BE(n[0], 0),
			o.writeUInt32BE(n[3], 4),
			o.writeUInt32BE(n[2], 8),
			o.writeUInt32BE(n[1], 12),
			o
		},
		o.prototype.scrub = function() {
			n(this._keySchedule),
			n(this._invKeySchedule),
			n(this._key)
		},
		t.exports.AES = o
	},
	{
		"safe-buffer": 141
	}],
	32 : [function(e, t) {
		function r(e, t, r, a) {
			o.call(this);
			var f = i.alloc(4, 0);
			this._cipher = new n.AES(t);
			var u = this._cipher.encryptBlock(f);
			this._ghash = new s(u),
			r = function(e, t, r) {
				if (12 === t.length) return e._finID = i.concat([t, i.from([0, 0, 0, 1])]),
				i.concat([t, i.from([0, 0, 0, 2])]);
				var n = new s(r),
				o = t.length,
				a = o % 16;
				n.update(t),
				a && (a = 16 - a, n.update(i.alloc(a, 0))),
				n.update(i.alloc(8, 0));
				var f = i.alloc(8);
				f.writeUIntBE(8 * o, 0, 8),
				n.update(f),
				e._finID = n.state;
				var u = i.from(e._finID);
				return c(u),
				u
			} (this, r, u),
			this._prev = i.from(r),
			this._cache = i.allocUnsafe(0),
			this._secCache = i.allocUnsafe(0),
			this._decrypt = a,
			this._alen = 0,
			this._len = 0,
			this._mode = e,
			this._authTag = null,
			this._called = !1
		}
		var n = e("./aes"),
		i = e("safe-buffer").Buffer,
		o = e("cipher-base"),
		a = e("inherits"),
		s = e("./ghash"),
		f = e("buffer-xor"),
		c = e("./incr32");
		a(r, o),
		r.prototype._update = function(e) {
			if (!this._called && this._alen) {
				var t = 16 - this._alen % 16;
				t < 16 && (t = i.alloc(t, 0), this._ghash.update(t))
			}
			this._called = !0;
			var r = this._mode.encrypt(this, e);
			return this._decrypt ? this._ghash.update(e) : this._ghash.update(r),
			this._len += e.length,
			r
		},
		r.prototype._final = function() {
			if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
			var e = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
			if (this._decrypt &&
			function(e, t) {
				var r = 0;
				e.length !== t.length && r++;
				for (var n = Math.min(e.length, t.length), i = 0; i < n; ++i) r += e[i] ^ t[i];
				return r
			} (e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
			this._authTag = e,
			this._cipher.scrub()
		},
		r.prototype.getAuthTag = function() {
			if (this._decrypt || !i.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
			return this._authTag
		},
		r.prototype.setAuthTag = function(e) {
			if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
			this._authTag = e
		},
		r.prototype.setAAD = function(e) {
			if (this._called) throw new Error("Attempting to set AAD in unsupported state");
			this._ghash.update(e),
			this._alen += e.length
		},
		t.exports = r
	},
	{
		"./aes": 31,
		"./ghash": 36,
		"./incr32": 37,
		"buffer-xor": 60,
		"cipher-base": 62,
		inherits: 113,
		"safe-buffer": 141
	}],
	33 : [function(e, t, r) {
		var n = e("./encrypter"),
		i = e("./decrypter"),
		o = e("./modes/list.json");
		r.createCipher = r.Cipher = n.createCipher,
		r.createCipheriv = r.Cipheriv = n.createCipheriv,
		r.createDecipher = r.Decipher = i.createDecipher,
		r.createDecipheriv = r.Decipheriv = i.createDecipheriv,
		r.listCiphers = r.getCiphers = function() {
			return Object.keys(o)
		}
	},
	{
		"./decrypter": 34,
		"./encrypter": 35,
		"./modes/list.json": 45
	}],
	34 : [function(e, t, r) {
		function n(e, t, r) {
			u.call(this),
			this._cache = new i,
			this._last = void 0,
			this._cipher = new d.AES(t),
			this._prev = s.from(r),
			this._mode = e,
			this._autopadding = !0
		}
		function i() {
			this.cache = s.allocUnsafe(0)
		}
		function o(e, t, r) {
			var i = f[e.toLowerCase()];
			if (!i) throw new TypeError("invalid suite type");
			if ("string" == typeof r && (r = s.from(r)), "GCM" !== i.mode && r.length !== i.iv) throw new TypeError("invalid iv length " + r.length);
			if ("string" == typeof t && (t = s.from(t)), t.length !== i.key / 8) throw new TypeError("invalid key length " + t.length);
			return "stream" === i.type ? new c(i.module, t, r, !0) : "auth" === i.type ? new a(i.module, t, r, !0) : new n(i.module, t, r)
		}
		var a = e("./authCipher"),
		s = e("safe-buffer").Buffer,
		f = e("./modes"),
		c = e("./streamCipher"),
		u = e("cipher-base"),
		d = e("./aes"),
		h = e("evp_bytestokey");
		e("inherits")(n, u),
		n.prototype._update = function(e) {
			this._cache.add(e);
			for (var t, r, n = []; t = this._cache.get(this._autopadding);) r = this._mode.decrypt(this, t),
			n.push(r);
			return s.concat(n)
		},
		n.prototype._final = function() {
			var e = this._cache.flush();
			if (this._autopadding) return function(e) {
				var t = e[15];
				if (t < 1 || 16 < t) throw new Error("unable to decrypt data");
				for (var r = -1; ++r < t;) if (e[r + (16 - t)] !== t) throw new Error("unable to decrypt data");
				return 16 === t ? void 0 : e.slice(0, 16 - t)
			} (this._mode.decrypt(this, e));
			if (e) throw new Error("data not multiple of block length")
		},
		n.prototype.setAutoPadding = function(e) {
			return this._autopadding = !!e,
			this
		},
		i.prototype.add = function(e) {
			this.cache = s.concat([this.cache, e])
		},
		i.prototype.get = function(e) {
			var t;
			if (e) {
				if (16 < this.cache.length) return t = this.cache.slice(0, 16),
				this.cache = this.cache.slice(16),
				t
			} else if (16 <= this.cache.length) return t = this.cache.slice(0, 16),
			this.cache = this.cache.slice(16),
			t;
			return null
		},
		i.prototype.flush = function() {
			if (this.cache.length) return this.cache
		},
		r.createDecipher = function(e, t) {
			var r = f[e.toLowerCase()];
			if (!r) throw new TypeError("invalid suite type");
			var n = h(t, !1, r.key, r.iv);
			return o(e, n.key, n.iv)
		},
		r.createDecipheriv = o
	},
	{
		"./aes": 31,
		"./authCipher": 32,
		"./modes": 44,
		"./streamCipher": 47,
		"cipher-base": 62,
		evp_bytestokey: 97,
		inherits: 113,
		"safe-buffer": 141
	}],
	35 : [function(e, t, r) {
		function n(e, t, r) {
			u.call(this),
			this._cache = new i,
			this._cipher = new d.AES(t),
			this._prev = f.from(r),
			this._mode = e,
			this._autopadding = !0
		}
		function i() {
			this.cache = f.allocUnsafe(0)
		}
		function o(e, t, r) {
			var i = a[e.toLowerCase()];
			if (!i) throw new TypeError("invalid suite type");
			if ("string" == typeof t && (t = f.from(t)), t.length !== i.key / 8) throw new TypeError("invalid key length " + t.length);
			if ("string" == typeof r && (r = f.from(r)), "GCM" !== i.mode && r.length !== i.iv) throw new TypeError("invalid iv length " + r.length);
			return new("stream" === i.type ? c: "auth" === i.type ? s: n)(i.module, t, r)
		}
		var a = e("./modes"),
		s = e("./authCipher"),
		f = e("safe-buffer").Buffer,
		c = e("./streamCipher"),
		u = e("cipher-base"),
		d = e("./aes"),
		h = e("evp_bytestokey");
		e("inherits")(n, u),
		n.prototype._update = function(e) {
			this._cache.add(e);
			for (var t, r, n = []; t = this._cache.get();) r = this._mode.encrypt(this, t),
			n.push(r);
			return f.concat(n)
		};
		var l = f.alloc(16, 16);
		n.prototype._final = function() {
			var e = this._cache.flush();
			if (this._autopadding) return e = this._mode.encrypt(this, e),
			this._cipher.scrub(),
			e;
			if (!e.equals(l)) throw this._cipher.scrub(),
			new Error("data not multiple of block length")
		},
		n.prototype.setAutoPadding = function(e) {
			return this._autopadding = !!e,
			this
		},
		i.prototype.add = function(e) {
			this.cache = f.concat([this.cache, e])
		},
		i.prototype.get = function() {
			if (15 < this.cache.length) {
				var e = this.cache.slice(0, 16);
				return this.cache = this.cache.slice(16),
				e
			}
			return null
		},
		i.prototype.flush = function() {
			for (var e = 16 - this.cache.length,
			t = f.allocUnsafe(e), r = -1; ++r < e;) t.writeUInt8(e, r);
			return f.concat([this.cache, t])
		},
		r.createCipheriv = o,
		r.createCipher = function(e, t) {
			var r = a[e.toLowerCase()];
			if (!r) throw new TypeError("invalid suite type");
			var n = h(t, !1, r.key, r.iv);
			return o(e, n.key, n.iv)
		}
	},
	{
		"./aes": 31,
		"./authCipher": 32,
		"./modes": 44,
		"./streamCipher": 47,
		"cipher-base": 62,
		evp_bytestokey: 97,
		inherits: 113,
		"safe-buffer": 141
	}],
	36 : [function(e, t) {
		function r(e) {
			var t = i.allocUnsafe(16);
			return t.writeUInt32BE(e[0] >>> 0, 0),
			t.writeUInt32BE(e[1] >>> 0, 4),
			t.writeUInt32BE(e[2] >>> 0, 8),
			t.writeUInt32BE(e[3] >>> 0, 12),
			t
		}
		function n(e) {
			this.h = e,
			this.state = i.alloc(16, 0),
			this.cache = i.allocUnsafe(0)
		}
		var i = e("safe-buffer").Buffer,
		o = i.alloc(16, 0);
		n.prototype.ghash = function(e) {
			for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
			this._multiply()
		},
		n.prototype._multiply = function() {
			for (var e, t, n = [(a = this.h).readUInt32BE(0), a.readUInt32BE(4), a.readUInt32BE(8), a.readUInt32BE(12)], i = [0, 0, 0, 0], o = -1; ++o < 128;) {
				for (0 != (this.state[~~ (o / 8)] & 1 << 7 - o % 8) && (i[0] ^= n[0], i[1] ^= n[1], i[2] ^= n[2], i[3] ^= n[3]), t = 0 != (1 & n[3]), e = 3; 0 < e; e--) n[e] = n[e] >>> 1 | (1 & n[e - 1]) << 31;
				n[0] >>>= 1,
				t && (n[0] ^= -520093696)
			}
			var a;
			this.state = r(i)
		},
		n.prototype.update = function(e) {
			this.cache = i.concat([this.cache, e]);
			for (var t; 16 <= this.cache.length;) t = this.cache.slice(0, 16),
			this.cache = this.cache.slice(16),
			this.ghash(t)
		},
		n.prototype.final = function(e, t) {
			return this.cache.length && this.ghash(i.concat([this.cache, o], 16)),
			this.ghash(r([0, e, 0, t])),
			this.state
		},
		t.exports = n
	},
	{
		"safe-buffer": 141
	}],
	37 : [function(e, t) {
		t.exports = function(e) {
			for (var t, r = e.length; r--;) {
				if (255 !== (t = e.readUInt8(r))) {
					t++,
					e.writeUInt8(t, r);
					break
				}
				e.writeUInt8(0, r)
			}
		}
	},
	{}],
	38 : [function(e, t, r) {
		var n = e("buffer-xor");
		r.encrypt = function(e, t) {
			var r = n(t, e._prev);
			return e._prev = e._cipher.encryptBlock(r),
			e._prev
		},
		r.decrypt = function(e, t) {
			var r = e._prev;
			e._prev = t;
			var i = e._cipher.decryptBlock(t);
			return n(i, r)
		}
	},
	{
		"buffer-xor": 60
	}],
	39 : [function(e, t, r) {
		function n(e, t, r) {
			var n = t.length,
			a = o(t, e._cache);
			return e._cache = e._cache.slice(n),
			e._prev = i.concat([e._prev, r ? t: a]),
			a
		}
		var i = e("safe-buffer").Buffer,
		o = e("buffer-xor");
		r.encrypt = function(e, t, r) {
			for (var o, a = i.allocUnsafe(0); t.length;) {
				if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = i.allocUnsafe(0)), !(e._cache.length <= t.length)) {
					a = i.concat([a, n(e, t, r)]);
					break
				}
				o = e._cache.length,
				a = i.concat([a, n(e, t.slice(0, o), r)]),
				t = t.slice(o)
			}
			return a
		}
	},
	{
		"buffer-xor": 60,
		"safe-buffer": 141
	}],
	40 : [function(e, t, r) {
		function n(e, t, r) {
			for (var n, o, a = -1,
			s = 0; ++a < 8;) n = t & 1 << 7 - a ? 128 : 0,
			s += (128 & (o = e._cipher.encryptBlock(e._prev)[0] ^ n)) >> a % 8,
			e._prev = i(e._prev, r ? n: o);
			return s
		}
		function i(e, t) {
			var r = e.length,
			n = -1,
			i = o.allocUnsafe(e.length);
			for (e = o.concat([e, o.from([t])]); ++n < r;) i[n] = e[n] << 1 | e[n + 1] >> 7;
			return i
		}
		var o = e("safe-buffer").Buffer;
		r.encrypt = function(e, t, r) {
			for (var i = t.length,
			a = o.allocUnsafe(i), s = -1; ++s < i;) a[s] = n(e, t[s], r);
			return a
		}
	},
	{
		"safe-buffer": 141
	}],
	41 : [function(e, t, r) {
		var n = e("safe-buffer").Buffer;
		r.encrypt = function(e, t, r) {
			for (var i = t.length,
			o = n.allocUnsafe(i), a = -1; ++a < i;) o[a] = (s = e, f = t[a], c = r, u = s._cipher.encryptBlock(s._prev)[0] ^ f, s._prev = n.concat([s._prev.slice(1), n.from([c ? f: u])]), u);
			var s, f, c, u;
			return o
		}
	},
	{
		"safe-buffer": 141
	}],
	42 : [function(e, t, r) {
		var n = Math.ceil,
		i = e("buffer-xor"),
		o = e("safe-buffer").Buffer,
		a = e("../incr32");
		r.encrypt = function(e, t) {
			var r, s, f = n(t.length / 16),
			c = e._cache.length;
			e._cache = o.concat([e._cache, o.allocUnsafe(16 * f)]);
			for (var u = 0; u < f; u++) {
				var d = (s = (r = e)._cipher.encryptBlockRaw(r._prev), a(r._prev), s),
				h = c + 16 * u;
				e._cache.writeUInt32BE(d[0], h + 0),
				e._cache.writeUInt32BE(d[1], h + 4),
				e._cache.writeUInt32BE(d[2], h + 8),
				e._cache.writeUInt32BE(d[3], h + 12)
			}
			var l = e._cache.slice(0, t.length);
			return e._cache = e._cache.slice(t.length),
			i(t, l)
		}
	},
	{
		"../incr32": 37,
		"buffer-xor": 60,
		"safe-buffer": 141
	}],
	43 : [function(e, t, r) {
		r.encrypt = function(e, t) {
			return e._cipher.encryptBlock(t)
		},
		r.decrypt = function(e, t) {
			return e._cipher.decryptBlock(t)
		}
	},
	{}],
	44 : [function(e, t) {
		var r = {
			ECB: e("./ecb"),
			CBC: e("./cbc"),
			CFB: e("./cfb"),
			CFB8: e("./cfb8"),
			CFB1: e("./cfb1"),
			OFB: e("./ofb"),
			CTR: e("./ctr"),
			GCM: e("./ctr")
		},
		n = e("./list.json");
		for (var i in n) n[i].module = r[n[i].mode];
		t.exports = n
	},
	{
		"./cbc": 38,
		"./cfb": 39,
		"./cfb1": 40,
		"./cfb8": 41,
		"./ctr": 42,
		"./ecb": 43,
		"./list.json": 45,
		"./ofb": 46
	}],
	45 : [function(e, t) {
		t.exports = {
			"aes-128-ecb": {
				cipher: "AES",
				key: 128,
				iv: 0,
				mode: "ECB",
				type: "block"
			},
			"aes-192-ecb": {
				cipher: "AES",
				key: 192,
				iv: 0,
				mode: "ECB",
				type: "block"
			},
			"aes-256-ecb": {
				cipher: "AES",
				key: 256,
				iv: 0,
				mode: "ECB",
				type: "block"
			},
			"aes-128-cbc": {
				cipher: "AES",
				key: 128,
				iv: 16,
				mode: "CBC",
				type: "block"
			},
			"aes-192-cbc": {
				cipher: "AES",
				key: 192,
				iv: 16,
				mode: "CBC",
				type: "block"
			},
			"aes-256-cbc": {
				cipher: "AES",
				key: 256,
				iv: 16,
				mode: "CBC",
				type: "block"
			},
			aes128: {
				cipher: "AES",
				key: 128,
				iv: 16,
				mode: "CBC",
				type: "block"
			},
			aes192: {
				cipher: "AES",
				key: 192,
				iv: 16,
				mode: "CBC",
				type: "block"
			},
			aes256: {
				cipher: "AES",
				key: 256,
				iv: 16,
				mode: "CBC",
				type: "block"
			},
			"aes-128-cfb": {
				cipher: "AES",
				key: 128,
				iv: 16,
				mode: "CFB",
				type: "stream"
			},
			"aes-192-cfb": {
				cipher: "AES",
				key: 192,
				iv: 16,
				mode: "CFB",
				type: "stream"
			},
			"aes-256-cfb": {
				cipher: "AES",
				key: 256,
				iv: 16,
				mode: "CFB",
				type: "stream"
			},
			"aes-128-cfb8": {
				cipher: "AES",
				key: 128,
				iv: 16,
				mode: "CFB8",
				type: "stream"
			},
			"aes-192-cfb8": {
				cipher: "AES",
				key: 192,
				iv: 16,
				mode: "CFB8",
				type: "stream"
			},
			"aes-256-cfb8": {
				cipher: "AES",
				key: 256,
				iv: 16,
				mode: "CFB8",
				type: "stream"
			},
			"aes-128-cfb1": {
				cipher: "AES",
				key: 128,
				iv: 16,
				mode: "CFB1",
				type: "stream"
			},
			"aes-192-cfb1": {
				cipher: "AES",
				key: 192,
				iv: 16,
				mode: "CFB1",
				type: "stream"
			},
			"aes-256-cfb1": {
				cipher: "AES",
				key: 256,
				iv: 16,
				mode: "CFB1",
				type: "stream"
			},
			"aes-128-ofb": {
				cipher: "AES",
				key: 128,
				iv: 16,
				mode: "OFB",
				type: "stream"
			},
			"aes-192-ofb": {
				cipher: "AES",
				key: 192,
				iv: 16,
				mode: "OFB",
				type: "stream"
			},
			"aes-256-ofb": {
				cipher: "AES",
				key: 256,
				iv: 16,
				mode: "OFB",
				type: "stream"
			},
			"aes-128-ctr": {
				cipher: "AES",
				key: 128,
				iv: 16,
				mode: "CTR",
				type: "stream"
			},
			"aes-192-ctr": {
				cipher: "AES",
				key: 192,
				iv: 16,
				mode: "CTR",
				type: "stream"
			},
			"aes-256-ctr": {
				cipher: "AES",
				key: 256,
				iv: 16,
				mode: "CTR",
				type: "stream"
			},
			"aes-128-gcm": {
				cipher: "AES",
				key: 128,
				iv: 12,
				mode: "GCM",
				type: "auth"
			},
			"aes-192-gcm": {
				cipher: "AES",
				key: 192,
				iv: 12,
				mode: "GCM",
				type: "auth"
			},
			"aes-256-gcm": {
				cipher: "AES",
				key: 256,
				iv: 12,
				mode: "GCM",
				type: "auth"
			}
		}
	},
	{}],
	46 : [function(e, t, r) { (function(t) {
			var n = e("buffer-xor");
			r.encrypt = function(e, r) {
				for (; e._cache.length < r.length;) e._cache = t.concat([e._cache, ((i = e)._prev = i._cipher.encryptBlock(i._prev), i._prev)]);
				var i, o = e._cache.slice(0, r.length);
				return e._cache = e._cache.slice(r.length),
				n(r, o)
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		buffer: 61,
		"buffer-xor": 60
	}],
	47 : [function(e, t) {
		function r(e, t, r, a) {
			o.call(this),
			this._cipher = new n.AES(t),
			this._prev = i.from(r),
			this._cache = i.allocUnsafe(0),
			this._secCache = i.allocUnsafe(0),
			this._decrypt = a,
			this._mode = e
		}
		var n = e("./aes"),
		i = e("safe-buffer").Buffer,
		o = e("cipher-base");
		e("inherits")(r, o),
		r.prototype._update = function(e) {
			return this._mode.encrypt(this, e, this._decrypt)
		},
		r.prototype._final = function() {
			this._cipher.scrub()
		},
		t.exports = r
	},
	{
		"./aes": 31,
		"cipher-base": 62,
		inherits: 113,
		"safe-buffer": 141
	}],
	48 : [function(e, t, r) {
		function n(e, t, r) {
			if (e = e.toLowerCase(), s[e]) return a.createCipheriv(e, t, r);
			if (f[e]) return new o({
				key: t,
				iv: r,
				mode: e
			});
			throw new TypeError("invalid suite type")
		}
		function i(e, t, r) {
			if (e = e.toLowerCase(), s[e]) return a.createDecipheriv(e, t, r);
			if (f[e]) return new o({
				key: t,
				iv: r,
				mode: e,
				decrypt: !0
			});
			throw new TypeError("invalid suite type")
		}
		var o = e("browserify-des"),
		a = e("browserify-aes/browser"),
		s = e("browserify-aes/modes"),
		f = e("browserify-des/modes"),
		c = e("evp_bytestokey");
		r.createCipher = r.Cipher = function(e, t) {
			var r, i;
			if (e = e.toLowerCase(), s[e]) r = s[e].key,
			i = s[e].iv;
			else {
				if (!f[e]) throw new TypeError("invalid suite type");
				r = 8 * f[e].key,
				i = f[e].iv
			}
			var o = c(t, !1, r, i);
			return n(e, o.key, o.iv)
		},
		r.createCipheriv = r.Cipheriv = n,
		r.createDecipher = r.Decipher = function(e, t) {
			var r, n;
			if (e = e.toLowerCase(), s[e]) r = s[e].key,
			n = s[e].iv;
			else {
				if (!f[e]) throw new TypeError("invalid suite type");
				r = 8 * f[e].key,
				n = f[e].iv
			}
			var o = c(t, !1, r, n);
			return i(e, o.key, o.iv)
		},
		r.createDecipheriv = r.Decipheriv = i,
		r.listCiphers = r.getCiphers = function() {
			return Object.keys(f).concat(a.getCiphers())
		}
	},
	{
		"browserify-aes/browser": 33,
		"browserify-aes/modes": 44,
		"browserify-des": 49,
		"browserify-des/modes": 50,
		evp_bytestokey: 97
	}],
	49 : [function(e, t) {
		function r(e) {
			n.call(this);
			var t, r = e.mode.toLowerCase(),
			i = s[r];
			t = e.decrypt ? "decrypt": "encrypt";
			var o = e.key;
			a.isBuffer(o) || (o = a.from(o)),
			"des-ede" !== r && "des-ede-cbc" !== r || (o = a.concat([o, o.slice(0, 8)]));
			var f = e.iv;
			a.isBuffer(f) || (f = a.from(f)),
			this._des = i.create({
				key: o,
				iv: f,
				type: t
			})
		}
		var n = e("cipher-base"),
		i = e("des.js"),
		o = e("inherits"),
		a = e("safe-buffer").Buffer,
		s = {
			"des-ede3-cbc": i.CBC.instantiate(i.EDE),
			"des-ede3": i.EDE,
			"des-ede-cbc": i.CBC.instantiate(i.EDE),
			"des-ede": i.EDE,
			"des-cbc": i.CBC.instantiate(i.DES),
			"des-ecb": i.DES
		};
		s.des = s["des-cbc"],
		s.des3 = s["des-ede3-cbc"],
		o(t.exports = r, n),
		r.prototype._update = function(e) {
			return a.from(this._des.update(e))
		},
		r.prototype._final = function() {
			return a.from(this._des.final())
		}
	},
	{
		"cipher-base": 62,
		"des.js": 70,
		inherits: 113,
		"safe-buffer": 141
	}],
	50 : [function(e, t, r) {
		r["des-ecb"] = {
			key: 8,
			iv: 0
		},
		r["des-cbc"] = r.des = {
			key: 8,
			iv: 8
		},
		r["des-ede3-cbc"] = r.des3 = {
			key: 24,
			iv: 8
		},
		r["des-ede3"] = {
			key: 24,
			iv: 0
		},
		r["des-ede-cbc"] = {
			key: 16,
			iv: 8
		},
		r["des-ede"] = {
			key: 16,
			iv: 0
		}
	},
	{}],
	51 : [function(e, t) { (function(r) {
			function n(e) {
				for (var t = e.modulus.byteLength(), r = new i(o(t)); 0 <= r.cmp(e.modulus) || !r.umod(e.prime1) || !r.umod(e.prime2);) r = new i(o(t));
				return r
			}
			var i = e("bn.js"),
			o = e("randombytes"); (t.exports = function(e, t) {
				var o, a, s = {
					blinder: (a = n(o = t)).toRed(i.mont(o.modulus)).redPow(new i(o.publicExponent)).fromRed(),
					unblinder: a.invm(o.modulus)
				},
				f = t.modulus.byteLength(),
				c = (i.mont(t.modulus), new i(e).mul(s.blinder).umod(t.modulus)),
				u = c.toRed(i.mont(t.prime1)),
				d = c.toRed(i.mont(t.prime2)),
				h = t.coefficient,
				l = t.prime1,
				p = t.prime2,
				b = u.redPow(t.exponent1),
				y = d.redPow(t.exponent2);
				b = b.fromRed(),
				y = y.fromRed();
				var g = b.isub(y).imul(h).umod(l);
				return g.imul(p),
				y.iadd(g),
				new r(y.imul(s.unblinder).umod(t.modulus).toArray(!1, f))
			}).getr = n
		}).call(this, e("buffer").Buffer)
	},
	{
		"bn.js": 28,
		buffer: 61,
		randombytes: 138
	}],
	52 : [function(e, t) {
		t.exports = e("./browser/algorithms.json")
	},
	{
		"./browser/algorithms.json": 53
	}],
	53 : [function(e, t) {
		t.exports = {
			sha224WithRSAEncryption: {
				sign: "rsa",
				hash: "sha224",
				id: "302d300d06096086480165030402040500041c"
			},
			"RSA-SHA224": {
				sign: "ecdsa/rsa",
				hash: "sha224",
				id: "302d300d06096086480165030402040500041c"
			},
			sha256WithRSAEncryption: {
				sign: "rsa",
				hash: "sha256",
				id: "3031300d060960864801650304020105000420"
			},
			"RSA-SHA256": {
				sign: "ecdsa/rsa",
				hash: "sha256",
				id: "3031300d060960864801650304020105000420"
			},
			sha384WithRSAEncryption: {
				sign: "rsa",
				hash: "sha384",
				id: "3041300d060960864801650304020205000430"
			},
			"RSA-SHA384": {
				sign: "ecdsa/rsa",
				hash: "sha384",
				id: "3041300d060960864801650304020205000430"
			},
			sha512WithRSAEncryption: {
				sign: "rsa",
				hash: "sha512",
				id: "3051300d060960864801650304020305000440"
			},
			"RSA-SHA512": {
				sign: "ecdsa/rsa",
				hash: "sha512",
				id: "3051300d060960864801650304020305000440"
			},
			"RSA-SHA1": {
				sign: "rsa",
				hash: "sha1",
				id: "3021300906052b0e03021a05000414"
			},
			"ecdsa-with-SHA1": {
				sign: "ecdsa",
				hash: "sha1",
				id: ""
			},
			sha256: {
				sign: "ecdsa",
				hash: "sha256",
				id: ""
			},
			sha224: {
				sign: "ecdsa",
				hash: "sha224",
				id: ""
			},
			sha384: {
				sign: "ecdsa",
				hash: "sha384",
				id: ""
			},
			sha512: {
				sign: "ecdsa",
				hash: "sha512",
				id: ""
			},
			"DSA-SHA": {
				sign: "dsa",
				hash: "sha1",
				id: ""
			},
			"DSA-SHA1": {
				sign: "dsa",
				hash: "sha1",
				id: ""
			},
			DSA: {
				sign: "dsa",
				hash: "sha1",
				id: ""
			},
			"DSA-WITH-SHA224": {
				sign: "dsa",
				hash: "sha224",
				id: ""
			},
			"DSA-SHA224": {
				sign: "dsa",
				hash: "sha224",
				id: ""
			},
			"DSA-WITH-SHA256": {
				sign: "dsa",
				hash: "sha256",
				id: ""
			},
			"DSA-SHA256": {
				sign: "dsa",
				hash: "sha256",
				id: ""
			},
			"DSA-WITH-SHA384": {
				sign: "dsa",
				hash: "sha384",
				id: ""
			},
			"DSA-SHA384": {
				sign: "dsa",
				hash: "sha384",
				id: ""
			},
			"DSA-WITH-SHA512": {
				sign: "dsa",
				hash: "sha512",
				id: ""
			},
			"DSA-SHA512": {
				sign: "dsa",
				hash: "sha512",
				id: ""
			},
			"DSA-RIPEMD160": {
				sign: "dsa",
				hash: "rmd160",
				id: ""
			},
			ripemd160WithRSA: {
				sign: "rsa",
				hash: "rmd160",
				id: "3021300906052b2403020105000414"
			},
			"RSA-RIPEMD160": {
				sign: "rsa",
				hash: "rmd160",
				id: "3021300906052b2403020105000414"
			},
			md5WithRSAEncryption: {
				sign: "rsa",
				hash: "md5",
				id: "3020300c06082a864886f70d020505000410"
			},
			"RSA-MD5": {
				sign: "rsa",
				hash: "md5",
				id: "3020300c06082a864886f70d020505000410"
			}
		}
	},
	{}],
	54 : [function(e, t) {
		t.exports = {
			"1.3.132.0.10": "secp256k1",
			"1.3.132.0.33": "p224",
			"1.2.840.10045.3.1.1": "p192",
			"1.2.840.10045.3.1.7": "p256",
			"1.3.132.0.34": "p384",
			"1.3.132.0.35": "p521"
		}
	},
	{}],
	55 : [function(e, t) { (function(r) {
			function n(e) {
				f.Writable.call(this);
				var t = h[e];
				if (!t) throw new Error("Unknown message digest");
				this._hashType = t.hash,
				this._hash = s(t.hash),
				this._tag = t.id,
				this._signType = t.sign
			}
			function i(e) {
				f.Writable.call(this);
				var t = h[e];
				if (!t) throw new Error("Unknown message digest");
				this._hash = s(t.hash),
				this._tag = t.id,
				this._signType = t.sign
			}
			function o(e) {
				return new n(e)
			}
			function a(e) {
				return new i(e)
			}
			var s = e("create-hash"),
			f = e("stream"),
			c = e("inherits"),
			u = e("./sign"),
			d = e("./verify"),
			h = e("./algorithms.json");
			Object.keys(h).forEach(function(e) {
				h[e].id = new r(h[e].id, "hex"),
				h[e.toLowerCase()] = h[e]
			}),
			c(n, f.Writable),
			n.prototype._write = function(e, t, r) {
				this._hash.update(e),
				r()
			},
			n.prototype.update = function(e, t) {
				return "string" == typeof e && (e = new r(e, t)),
				this._hash.update(e),
				this
			},
			n.prototype.sign = function(e, t) {
				this.end();
				var r = this._hash.digest(),
				n = u(r, e, this._hashType, this._signType, this._tag);
				return t ? n.toString(t) : n
			},
			c(i, f.Writable),
			i.prototype._write = function(e, t, r) {
				this._hash.update(e),
				r()
			},
			i.prototype.update = function(e, t) {
				return "string" == typeof e && (e = new r(e, t)),
				this._hash.update(e),
				this
			},
			i.prototype.verify = function(e, t, n) {
				"string" == typeof t && (t = new r(t, n)),
				this.end();
				var i = this._hash.digest();
				return d(t, i, e, this._signType, this._tag)
			},
			t.exports = {
				Sign: o,
				Verify: a,
				createSign: o,
				createVerify: a
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		"./algorithms.json": 53,
		"./sign": 56,
		"./verify": 57,
		buffer: 61,
		"create-hash": 65,
		inherits: 113,
		stream: 150
	}],
	56 : [function(e, t) { (function(r) {
			function n(e, t, n) {
				for (var s, f = t.params.priv_key,
				c = t.params.p,
				d = t.params.q,
				h = t.params.g,
				l = new u(0), p = o(e, d).mod(d), b = !1, y = i(f, d, e, n); ! 1 === b;) g = s = a(d, y, n),
				m = c,
				v = d,
				l = h.toRed(u.mont(m)).redPow(g).fromRed().mod(v),
				0 === (b = s.invm(d).imul(p.add(f.mul(l))).mod(d)).cmpn(0) && (b = !1, l = new u(0));
				var g, m, v;
				return function(e, t) {
					e = e.toArray(),
					t = t.toArray(),
					128 & e[0] && (e = [0].concat(e)),
					128 & t[0] && (t = [0].concat(t));
					var n = [48, e.length + t.length + 4, 2, e.length];
					return n = n.concat(e, [2, t.length], t),
					new r(n)
				} (l, b)
			}
			function i(e, t, n, i) {
				if ((e = new r(e.toArray())).length < t.byteLength()) {
					var a = new r(t.byteLength() - e.length);
					a.fill(0),
					e = r.concat([a, e])
				}
				var f = n.length,
				c = function(e, t) {
					e = (e = o(e, t)).mod(t);
					var n = new r(e.toArray());
					if (n.length < t.byteLength()) {
						var i = new r(t.byteLength() - n.length);
						i.fill(0),
						n = r.concat([i, n])
					}
					return n
				} (n, t),
				u = new r(f);
				u.fill(1);
				var d = new r(f);
				return d.fill(0),
				d = s(i, d).update(u).update(new r([0])).update(e).update(c).digest(),
				u = s(i, d).update(u).digest(),
				{
					k: d = s(i, d).update(u).update(new r([1])).update(e).update(c).digest(),
					v: u = s(i, d).update(u).digest()
				}
			}
			function o(e, t) {
				var r = new u(e),
				n = (e.length << 3) - t.bitLength();
				return 0 < n && r.ishrn(n),
				r
			}
			function a(e, t, n) {
				var i, a;
				do {
					for (i = new r(0); 8 * i.length < e.bitLength();) t.v = s(n, t.k).update(t.v).digest(), i = r.concat([i, t.v]);
					a = o(i, e), t.k = s(n, t.k).update(t.v).update(new r([0])).digest(), t.v = s(n, t.k).update(t.v).digest()
				} while ( - 1 !== a . cmp ( e ));
				return a
			}
			var s = e("create-hmac"),
			f = e("browserify-rsa"),
			c = e("elliptic").ec,
			u = e("bn.js"),
			d = e("parse-asn1"),
			h = e("./curves.json");
			t.exports = function(e, t, i, o, a) {
				var s = d(t);
				if (s.curve) {
					if ("ecdsa" !== o && "ecdsa/rsa" !== o) throw new Error("wrong private key type");
					return function(e, t) {
						var n = h[t.curve.join(".")];
						if (!n) throw new Error("unknown curve " + t.curve.join("."));
						var i = new c(n).keyFromPrivate(t.privateKey).sign(e);
						return new r(i.toDER())
					} (e, s)
				}
				if ("dsa" === s.type) {
					if ("dsa" !== o) throw new Error("wrong private key type");
					return n(e, s, i)
				}
				if ("rsa" !== o && "ecdsa/rsa" !== o) throw new Error("wrong private key type");
				e = r.concat([a, e]);
				for (var u = s.modulus.byteLength(), l = [0, 1]; e.length + l.length + 1 < u;) l.push(255);
				l.push(0);
				for (var p = -1; ++p < e.length;) l.push(e[p]);
				return f(l, s)
			},
			t.exports.getKey = i,
			t.exports.makeKey = a
		}).call(this, e("buffer").Buffer)
	},
	{
		"./curves.json": 54,
		"bn.js": 28,
		"browserify-rsa": 51,
		buffer: 61,
		"create-hmac": 67,
		elliptic: 80,
		"parse-asn1": 124
	}],
	57 : [function(e, t) {
		var r = Math.min; (function(n) {
			function i(e, t) {
				if (e.cmpn(0) <= 0) throw new Error("invalid sig");
				if (e.cmp(t) >= t) throw new Error("invalid sig")
			}
			var o = e("bn.js"),
			a = e("elliptic").ec,
			s = e("parse-asn1"),
			f = e("./curves.json");
			t.exports = function(e, t, c, u, d) {
				var h = s(c);
				if ("ec" === h.type) {
					if ("ecdsa" !== u && "ecdsa/rsa" !== u) throw new Error("wrong public key type");
					return function(e, t, r) {
						var n = f[r.data.algorithm.curve.join(".")];
						if (!n) throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
						var i = new a(n),
						o = r.data.subjectPrivateKey.data;
						return i.verify(t, e, o)
					} (e, t, h)
				}
				if ("dsa" === h.type) {
					if ("dsa" !== u) throw new Error("wrong public key type");
					return function(e, t, r) {
						var n = r.data.p,
						a = r.data.q,
						f = r.data.g,
						c = r.data.pub_key,
						u = s.signature.decode(e, "der"),
						d = u.s,
						h = u.r;
						i(d, a),
						i(h, a);
						var l = o.mont(n),
						p = d.invm(a);
						return 0 === f.toRed(l).redPow(new o(t).mul(p).mod(a)).fromRed().mul(c.toRed(l).redPow(h.mul(p).mod(a)).fromRed()).mod(n).mod(a).cmp(h)
					} (e, t, h)
				}
				if ("rsa" !== u && "ecdsa/rsa" !== u) throw new Error("wrong public key type");
				t = n.concat([d, t]);
				for (var l = h.modulus.byteLength(), p = [1], b = 0; t.length + p.length + 2 < l;) p.push(255),
				b++;
				p.push(0);
				for (var y = -1; ++y < t.length;) p.push(t[y]);
				p = new n(p);
				var g = o.mont(h.modulus);
				e = (e = new o(e).toRed(g)).redPow(new o(h.publicExponent)),
				e = new n(e.fromRed().toArray());
				var m = b < 8 ? 1 : 0;
				for (l = r(e.length, p.length), e.length !== p.length && (m = 1), y = -1; ++y < l;) m |= e[y] ^ p[y];
				return 0 == m
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		"./curves.json": 54,
		"bn.js": 28,
		buffer: 61,
		elliptic: 80,
		"parse-asn1": 124
	}],
	58 : [function(e, t, r) {
		"use strict";
		function n(e) {
			var t = function(e) {
				if (!e) return "utf8";
				for (var t;;) switch (e) {
				case "utf8":
				case "utf-8":
					return "utf8";
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return "utf16le";
				case "latin1":
				case "binary":
					return "latin1";
				case "base64":
				case "ascii":
				case "hex":
					return e;
				default:
					if (t) return;
					e = ("" + e).toLowerCase(),
					t = !0
				}
			} (e);
			if ("string" != typeof t && (l.isEncoding === p || !p(e))) throw new Error("Unknown encoding: " + e);
			return t || e
		}
		function i(e) {
			var t;
			switch (this.encoding = n(e), this.encoding) {
			case "utf16le":
				this.text = s,
				this.end = f,
				t = 4;
				break;
			case "utf8":
				this.fillLast = a,
				t = 4;
				break;
			case "base64":
				this.text = c,
				this.end = u,
				t = 3;
				break;
			default:
				return this.write = d,
				void(this.end = h)
			}
			this.lastNeed = 0,
			this.lastTotal = 0,
			this.lastChar = l.allocUnsafe(t)
		}
		function o(e) {
			return e <= 127 ? 0 : 6 == e >> 5 ? 2 : 14 == e >> 4 ? 3 : 30 == e >> 3 ? 4 : 2 == e >> 6 ? -1 : -2
		}
		function a(e) {
			var t = this.lastTotal - this.lastNeed,
			r = function(e, t) {
				if (128 != (192 & t[0])) return e.lastNeed = 0,
				"\ufffd";
				if (1 < e.lastNeed && 1 < t.length) {
					if (128 != (192 & t[1])) return e.lastNeed = 1,
					"\ufffd";
					if (2 < e.lastNeed && 2 < t.length && 128 != (192 & t[2])) return e.lastNeed = 2,
					"\ufffd"
				}
			} (this, e);
			return void 0 === r ? this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length)) : r
		}
		function s(e, t) {
			if (0 != (e.length - t) % 2) return this.lastNeed = 1,
			this.lastTotal = 2,
			this.lastChar[0] = e[e.length - 1],
			e.toString("utf16le", t, e.length - 1);
			var r = e.toString("utf16le", t);
			if (r) {
				var n = r.charCodeAt(r.length - 1);
				if (55296 <= n && n <= 56319) return this.lastNeed = 2,
				this.lastTotal = 4,
				this.lastChar[0] = e[e.length - 2],
				this.lastChar[1] = e[e.length - 1],
				r.slice(0, -1)
			}
			return r
		}
		function f(e) {
			var t = e && e.length ? this.write(e) : "";
			if (this.lastNeed) {
				var r = this.lastTotal - this.lastNeed;
				return t + this.lastChar.toString("utf16le", 0, r)
			}
			return t
		}
		function c(e, t) {
			var r = (e.length - t) % 3;
			return 0 == r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 == r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
		}
		function u(e) {
			var t = e && e.length ? this.write(e) : "";
			return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
		}
		function d(e) {
			return e.toString(this.encoding)
		}
		function h(e) {
			return e && e.length ? this.write(e) : ""
		}
		var l = e("safe-buffer").Buffer,
		p = l.isEncoding ||
		function(e) {
			switch ((e = "" + e) && e.toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
			case "raw":
				return ! 0;
			default:
				return ! 1
			}
		}; (r.StringDecoder = i).prototype.write = function(e) {
			if (0 === e.length) return "";
			var t, r;
			if (this.lastNeed) {
				if (void 0 === (t = this.fillLast(e))) return "";
				r = this.lastNeed,
				this.lastNeed = 0
			} else r = 0;
			return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
		},
		i.prototype.end = function(e) {
			var t = e && e.length ? this.write(e) : "";
			return this.lastNeed ? t + "\ufffd": t
		},
		i.prototype.text = function(e, t) {
			var r = function(e, t, r) {
				var n = t.length - 1;
				if (n < r) return 0;
				var i = o(t[n]);
				return 0 <= i ? (0 < i && (e.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : 0 <= (i = o(t[n])) ? (0 < i && (e.lastNeed = i - 2), i) : --n < r || -2 === i ? 0 : 0 <= (i = o(t[n])) ? (0 < i && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
			} (this, e, t);
			if (!this.lastNeed) return e.toString("utf8", t);
			this.lastTotal = r;
			var n = e.length - (r - this.lastNeed);
			return e.copy(this.lastChar, 0, n),
			e.toString("utf8", t, n)
		},
		i.prototype.fillLast = function(e) {
			return this.lastNeed <= e.length ? (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), void(this.lastNeed -= e.length))
		}
	},
	{
		"safe-buffer": 59
	}],
	59 : [function(e, t, r) {
		function n(e, t) {
			for (var r in e) t[r] = e[r]
		}
		function i(e, t, r) {
			return a(e, t, r)
		}
		var o = e("buffer"),
		a = o.Buffer;
		a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? t.exports = o: (n(o, r), r.Buffer = i),
		i.prototype = Object.create(a.prototype),
		n(a, i),
		i.from = function(e, t, r) {
			if ("number" == typeof e) throw new TypeError("Argument must not be a number");
			return a(e, t, r)
		},
		i.alloc = function(e, t, r) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			var n = a(e);
			return void 0 === t ? n.fill(0) : "string" == typeof r ? n.fill(t, r) : n.fill(t),
			n
		},
		i.allocUnsafe = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return a(e)
		},
		i.allocUnsafeSlow = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return o.SlowBuffer(e)
		}
	},
	{
		buffer: 61
	}],
	60 : [function(e, t) { (function(e) {
			t.exports = function(t, r) {
				for (var n = Math.min(t.length, r.length), i = new e(n), o = 0; o < n; ++o) i[o] = t[o] ^ r[o];
				return i
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		buffer: 61
	}],
	61 : [function(e, t, r) {
		var n = Math.min,
		i = String.fromCharCode,
		o = Math.pow; (function(t) {
			"use strict";
			function a(e) {
				if (2147483647 < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
				var r = new Uint8Array(e);
				return r.__proto__ = t.prototype,
				r
			}
			function t(e, t, r) {
				if ("number" != typeof e) return s(e, t, r);
				if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
				return c(e)
			}
			function s(e, r, n) {
				if ("string" == typeof e) return function(e, r) {
					if ("string" == typeof r && "" !== r || (r = "utf8"), !t.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
					var n = 0 | h(e, r),
					i = a(n),
					o = i.write(e, r);
					return o !== n && (i = i.slice(0, o)),
					i
				} (e, r);
				if (ArrayBuffer.isView(e)) return u(e);
				if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
				if (P(e, ArrayBuffer) || e && P(e.buffer, ArrayBuffer)) return function(e, r, n) {
					if (r < 0 || e.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
					if (e.byteLength < r + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
					var i;
					return (i = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n)).__proto__ = t.prototype,
					i
				} (e, r, n);
				if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
				var i = e.valueOf && e.valueOf();
				if (null != i && i !== e) return t.from(i, r, n);
				var o = function(e) {
					if (t.isBuffer(e)) {
						var r = 0 | d(e.length),
						n = a(r);
						return 0 === n.length || e.copy(n, 0, 0, r),
						n
					}
					return void 0 === e.length ? "Buffer" === e.type && Array.isArray(e.data) ? u(e.data) : void 0 : "number" != typeof e.length || C(e.length) ? a(0) : u(e)
				} (e);
				if (o) return o;
				if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return t.from(e[Symbol.toPrimitive]("string"), r, n);
				throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
			}
			function f(e) {
				if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
				if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
			}
			function c(e) {
				return f(e),
				a(e < 0 ? 0 : 0 | d(e))
			}
			function u(e) {
				for (var t = e.length < 0 ? 0 : 0 | d(e.length), r = a(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
				return r
			}
			function d(e) {
				if (2147483647 <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
				return 0 | e
			}
			function h(e, r) {
				if (t.isBuffer(e)) return e.length;
				if (ArrayBuffer.isView(e) || P(e, ArrayBuffer)) return e.byteLength;
				if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
				var n = e.length,
				i = 2 < arguments.length && !0 === arguments[2];
				if (!i && 0 === n) return 0;
				for (var o = !1;;) switch (r) {
				case "ascii":
				case "latin1":
				case "binary":
					return n;
				case "utf8":
				case "utf-8":
					return j(e).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * n;
				case "hex":
					return n >>> 1;
				case "base64":
					return T(e).length;
				default:
					if (o) return i ? -1 : j(e).length;
					r = ("" + r).toLowerCase(),
					o = !0
				}
			}
			function l(e, t, r) {
				var n = e[t];
				e[t] = e[r],
				e[r] = n
			}
			function p(e, r, n, i, o) {
				if (0 === e.length) return - 1;
				if ("string" == typeof n ? (i = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), C(n = +n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
					if (o) return - 1;
					n = e.length - 1
				} else if (n < 0) {
					if (!o) return - 1;
					n = 0
				}
				if ("string" == typeof r && (r = t.from(r, i)), t.isBuffer(r)) return 0 === r.length ? -1 : b(e, r, n, i, o);
				if ("number" == typeof r) return r &= 255,
				"function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, r, n) : Uint8Array.prototype.lastIndexOf.call(e, r, n) : b(e, [r], n, i, o);
				throw new TypeError("val must be string, number or Buffer")
			}
			function b(e, t, r, n, i) {
				function o(e, t) {
					return 1 === s ? e[t] : e.readUInt16BE(t * s)
				}
				var a, s = 1,
				f = e.length,
				c = t.length;
				if (void 0 !== n && ("ucs2" === (n = (n + "").toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
					if (e.length < 2 || t.length < 2) return - 1;
					f /= s = 2,
					c /= 2,
					r /= 2
				}
				if (i) {
					var u = -1;
					for (a = r; a < f; a++) if (o(e, a) !== o(t, -1 === u ? 0 : a - u)) - 1 !== u && (a -= a - u),
					u = -1;
					else if ( - 1 === u && (u = a), a - u + 1 === c) return u * s
				} else for (f < r + c && (r = f - c), a = r; 0 <= a; a--) {
					for (var d = !0,
					h = 0; h < c; h++) if (o(e, a + h) !== o(t, h)) {
						d = !1;
						break
					}
					if (d) return a
				}
				return - 1
			}
			function y(e, t, r, n) {
				r = +r || 0;
				var i = e.length - r;
				n ? i < (n = +n) && (n = i) : n = i;
				var o = t.length;
				o / 2 < n && (n = o / 2);
				for (var a, s = 0; s < n; ++s) {
					if (C(a = parseInt(t.substr(2 * s, 2), 16))) return s;
					e[r + s] = a
				}
				return s
			}
			function g(e, t, r, n) {
				return O(function(e) {
					for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
					return t
				} (t), e, r, n)
			}
			function m(e, t, r, n) {
				return O(function(e, t) {
					for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8,
					i = r % 256,
					o.push(i),
					o.push(n);
					return o
				} (t, e.length - r), e, r, n)
			}
			function v(e, t, r) {
				r = n(e.length, r);
				for (var o = [], a = t; a < r;) {
					var s, f, c, u, d = e[a],
					h = null,
					l = 239 < d ? 4 : 223 < d ? 3 : 191 < d ? 2 : 1;
					a + l <= r && (1 === l ? d < 128 && (h = d) : 2 === l ? 128 == (192 & (s = e[a + 1])) && 127 < (u = (31 & d) << 6 | 63 & s) && (h = u) : 3 === l ? (s = e[a + 1], f = e[a + 2], 128 == (192 & s) && 128 == (192 & f) && 2047 < (u = (15 & d) << 12 | (63 & s) << 6 | 63 & f) && (u < 55296 || 57343 < u) && (h = u)) : 4 === l && (s = e[a + 1], f = e[a + 2], c = e[a + 3], 128 == (192 & s) && 128 == (192 & f) && 128 == (192 & c) && 65535 < (u = (15 & d) << 18 | (63 & s) << 12 | (63 & f) << 6 | 63 & c) && u < 1114112 && (h = u))),
					null === h ? (h = 65533, l = 1) : 65535 < h && (h -= 65536, o.push(55296 | 1023 & h >>> 10), h = 56320 | 1023 & h),
					o.push(h),
					a += l
				}
				return function(e) {
					var t = e.length;
					if (t <= 4096) return i.apply(String, e);
					for (var r = "",
					n = 0; n < t;) r += i.apply(String, e.slice(n, n += 4096));
					return r
				} (o)
			}
			function w(e, t, r) {
				var o = "";
				r = n(e.length, r);
				for (var a = t; a < r; ++a) o += i(127 & e[a]);
				return o
			}
			function _(e, t, r) {
				var o = "";
				r = n(e.length, r);
				for (var a = t; a < r; ++a) o += i(e[a]);
				return o
			}
			function S(e, t, r) {
				var n, i = e.length; (!t || t < 0) && (t = 0),
				(!r || r < 0 || i < r) && (r = i);
				for (var o = "",
				a = t; a < r; ++a) o += (n = e[a]) < 16 ? "0" + n.toString(16) : n.toString(16);
				return o
			}
			function k(e, t, r) {
				for (var n = e.slice(t, r), o = "", a = 0; a < n.length; a += 2) o += i(n[a] + 256 * n[a + 1]);
				return o
			}
			function E(e, t, r) {
				if (0 != e % 1 || e < 0) throw new RangeError("offset is not uint");
				if (r < e + t) throw new RangeError("Trying to access beyond buffer length")
			}
			function x(e, r, n, i, o, a) {
				if (!t.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (o < r || r < a) throw new RangeError('"value" argument is out of bounds');
				if (n + i > e.length) throw new RangeError("Index out of range")
			}
			function I(e, t, r, n) {
				if (r + n > e.length) throw new RangeError("Index out of range");
				if (r < 0) throw new RangeError("Index out of range")
			}
			function A(e, t, r, n, i) {
				return t = +t,
				r >>>= 0,
				i || I(e, 0, r, 4),
				M.write(e, t, r, n, 23, 4),
				r + 4
			}
			function B(e, t, r, n, i) {
				return t = +t,
				r >>>= 0,
				i || I(e, 0, r, 8),
				M.write(e, t, r, n, 52, 8),
				r + 8
			}
			function j(e, t) {
				t = t || 1 / 0;
				for (var r, n = e.length,
				i = null,
				o = [], a = 0; a < n; ++a) {
					if (55295 < (r = e.charCodeAt(a)) && r < 57344) {
						if (!i) {
							if (56319 < r) { - 1 < (t -= 3) && o.push(239, 191, 189);
								continue
							}
							if (a + 1 === n) { - 1 < (t -= 3) && o.push(239, 191, 189);
								continue
							}
							i = r;
							continue
						}
						if (r < 56320) { - 1 < (t -= 3) && o.push(239, 191, 189),
							i = r;
							continue
						}
						r = 65536 + (i - 55296 << 10 | r - 56320)
					} else i && -1 < (t -= 3) && o.push(239, 191, 189);
					if (i = null, r < 128) {
						if (--t < 0) break;
						o.push(r)
					} else if (r < 2048) {
						if ((t -= 2) < 0) break;
						o.push(192 | r >> 6, 128 | 63 & r)
					} else if (r < 65536) {
						if ((t -= 3) < 0) break;
						o.push(224 | r >> 12, 128 | 63 & r >> 6, 128 | 63 & r)
					} else {
						if (! (r < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						o.push(240 | r >> 18, 128 | 63 & r >> 12, 128 | 63 & r >> 6, 128 | 63 & r)
					}
				}
				return o
			}
			function T(e) {
				return U.toByteArray(function(e) {
					if ((e = (e = e.split("=")[0]).trim().replace(R, "")).length < 2) return "";
					for (; 0 != e.length % 4;) e += "=";
					return e
				} (e))
			}
			function O(e, t, r, n) {
				for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
				return i
			}
			function P(e, t) {
				return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
			}
			function C(e) {
				return e != e
			}
			var U = e("base64-js"),
			M = e("ieee754");
			r.Buffer = t,
			r.SlowBuffer = function(e) {
				return + e != e && (e = 0),
				t.alloc( + e)
			},
			r.INSPECT_MAX_BYTES = 50,
			r.kMaxLength = 2147483647,
			(t.TYPED_ARRAY_SUPPORT = function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					},
					42 === e.foo()
				} catch(e) {
					return ! 1
				}
			} ()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
			Object.defineProperty(t.prototype, "parent", {
				enumerable: !0,
				get: function() {
					return t.isBuffer(this) ? this.buffer: void 0
				}
			}),
			Object.defineProperty(t.prototype, "offset", {
				enumerable: !0,
				get: function() {
					return t.isBuffer(this) ? this.byteOffset: void 0
				}
			}),
			"undefined" != typeof Symbol && null != Symbol.species && t[Symbol.species] === t && Object.defineProperty(t, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			}),
			t.poolSize = 8192,
			t.from = function(e, t, r) {
				return s(e, t, r)
			},
			t.prototype.__proto__ = Uint8Array.prototype,
			t.__proto__ = Uint8Array,
			t.alloc = function(e, t, r) {
				return i = t,
				o = r,
				f(n = e),
				n <= 0 || void 0 === i ? a(n) : "string" == typeof o ? a(n).fill(i, o) : a(n).fill(i);
				var n, i, o
			}, t.allocUnsafe = function(e) {
				return c(e)
			},
			t.allocUnsafeSlow = function(e) {
				return c(e)
			},
			t.isBuffer = function(e) {
				return null != e && !0 === e._isBuffer && e !== t.prototype
			},
			t.compare = function(e, r) {
				if (P(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), P(r, Uint8Array) && (r = t.from(r, r.offset, r.byteLength)), !t.isBuffer(e) || !t.isBuffer(r)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
				if (e === r) return 0;
				for (var i = e.length,
				o = r.length,
				a = 0,
				s = n(i, o); a < s; ++a) if (e[a] !== r[a]) {
					i = e[a],
					o = r[a];
					break
				}
				return i < o ? -1 : o < i ? 1 : 0
			},
			t.isEncoding = function(e) {
				switch ((e + "").toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return ! 0;
				default:
					return ! 1
				}
			},
			t.concat = function(e, r) {
				if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return t.alloc(0);
				var n;
				if (void 0 === r) for (n = r = 0; n < e.length; ++n) r += e[n].length;
				var i = t.allocUnsafe(r),
				o = 0;
				for (n = 0; n < e.length; ++n) {
					var a = e[n];
					if (P(a, Uint8Array) && (a = t.from(a)), !t.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
					a.copy(i, o),
					o += a.length
				}
				return i
			},
			t.byteLength = h,
			t.prototype._isBuffer = !0,
			t.prototype.swap16 = function() {
				var e = this.length;
				if (0 != e % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var t = 0; t < e; t += 2) l(this, t, t + 1);
				return this
			},
			t.prototype.swap32 = function() {
				var e = this.length;
				if (0 != e % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var t = 0; t < e; t += 4) l(this, t, t + 3),
				l(this, t + 1, t + 2);
				return this
			},
			t.prototype.swap64 = function() {
				var e = this.length;
				if (0 != e % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var t = 0; t < e; t += 8) l(this, t, t + 7),
				l(this, t + 1, t + 6),
				l(this, t + 2, t + 5),
				l(this, t + 3, t + 4);
				return this
			},
			t.prototype.toLocaleString = t.prototype.toString = function() {
				var e = this.length;
				return 0 === e ? "": 0 === arguments.length ? v(this, 0, e) : function(e, t, r) {
					var n, i, o, a = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
					if ((r >>>= 0) <= (t >>>= 0)) return "";
					for (e = e || "utf8";;) switch (e) {
					case "hex":
						return S(this, t, r);
					case "utf8":
					case "utf-8":
						return v(this, t, r);
					case "ascii":
						return w(this, t, r);
					case "latin1":
					case "binary":
						return _(this, t, r);
					case "base64":
						return n = this,
						o = r,
						0 === (i = t) && o === n.length ? U.fromByteArray(n) : U.fromByteArray(n.slice(i, o));
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return k(this, t, r);
					default:
						if (a) throw new TypeError("Unknown encoding: " + e);
						e = (e + "").toLowerCase(),
						a = !0
					}
				}.apply(this, arguments)
			},
			t.prototype.equals = function(e) {
				if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === t.compare(this, e)
			},
			t.prototype.inspect = function() {
				var e = "",
				t = r.INSPECT_MAX_BYTES;
				return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
				this.length > t && (e += " ... "),
				"<Buffer " + e + ">"
			},
			t.prototype.compare = function(e, r, i, o, a) {
				if (P(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), !t.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
				if (void 0 === r && (r = 0), void 0 === i && (i = e ? e.length: 0), void 0 === o && (o = 0), void 0 === a && (a = this.length), r < 0 || i > e.length || o < 0 || a > this.length) throw new RangeError("out of range index");
				if (a <= o && i <= r) return 0;
				if (a <= o) return - 1;
				if (i <= r) return 1;
				if (this === e) return 0;
				for (var s = (a >>>= 0) - (o >>>= 0), f = (i >>>= 0) - (r >>>= 0), c = n(s, f), u = this.slice(o, a), d = e.slice(r, i), h = 0; h < c; ++h) if (u[h] !== d[h]) {
					s = u[h],
					f = d[h];
					break
				}
				return s < f ? -1 : f < s ? 1 : 0
			},
			t.prototype.includes = function(e, t, r) {
				return - 1 !== this.indexOf(e, t, r)
			},
			t.prototype.indexOf = function(e, t, r) {
				return p(this, e, t, r, !0)
			},
			t.prototype.lastIndexOf = function(e, t, r) {
				return p(this, e, t, r, !1)
			},
			t.prototype.write = function(e, t, r, n) {
				if (void 0 === t) n = "utf8",
				r = this.length,
				t = 0;
				else if (void 0 === r && "string" == typeof t) n = t,
				r = this.length,
				t = 0;
				else {
					if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					t >>>= 0,
					isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
				}
				var i, o, a, s, f = this.length - t;
				if ((void 0 === r || f < r) && (r = f), 0 < e.length && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				n = n || "utf8";
				for (var c = !1;;) switch (n) {
				case "hex":
					return y(this, e, t, r);
				case "utf8":
				case "utf-8":
					return a = t,
					s = r,
					O(j(e, this.length - a), this, a, s);
				case "ascii":
					return g(this, e, t, r);
				case "latin1":
				case "binary":
					return g(this, e, t, r);
				case "base64":
					return i = t,
					o = r,
					O(T(e), this, i, o);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return m(this, e, t, r);
				default:
					if (c) throw new TypeError("Unknown encoding: " + n);
					n = ("" + n).toLowerCase(),
					c = !0
				}
			},
			t.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			},
			t.prototype.slice = function(e, r) {
				var n = this.length; (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n),
				(r = void 0 === r ? n: ~~r) < 0 ? (r += n) < 0 && (r = 0) : n < r && (r = n),
				r < e && (r = e);
				var i = this.subarray(e, r);
				return i.__proto__ = t.prototype,
				i
			},
			t.prototype.readUIntLE = function(e, t, r) {
				e >>>= 0,
				t >>>= 0,
				r || E(e, t, this.length);
				for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
				return n
			},
			t.prototype.readUIntBE = function(e, t, r) {
				e >>>= 0,
				t >>>= 0,
				r || E(e, t, this.length);
				for (var n = this[e + --t], i = 1; 0 < t && (i *= 256);) n += this[e + --t] * i;
				return n
			},
			t.prototype.readUInt8 = function(e, t) {
				return e >>>= 0,
				t || E(e, 1, this.length),
				this[e]
			},
			t.prototype.readUInt16LE = function(e, t) {
				return e >>>= 0,
				t || E(e, 2, this.length),
				this[e] | this[e + 1] << 8
			},
			t.prototype.readUInt16BE = function(e, t) {
				return e >>>= 0,
				t || E(e, 2, this.length),
				this[e] << 8 | this[e + 1]
			},
			t.prototype.readUInt32LE = function(e, t) {
				return e >>>= 0,
				t || E(e, 4, this.length),
				(this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
			},
			t.prototype.readUInt32BE = function(e, t) {
				return e >>>= 0,
				t || E(e, 4, this.length),
				16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
			},
			t.prototype.readIntLE = function(e, t, r) {
				e >>>= 0,
				t >>>= 0,
				r || E(e, t, this.length);
				for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) n += this[e + a] * i;
				return (i *= 128) <= n && (n -= o(2, 8 * t)),
				n
			},
			t.prototype.readIntBE = function(e, t, r) {
				e >>>= 0,
				t >>>= 0,
				r || E(e, t, this.length);
				for (var n = t,
				i = 1,
				a = this[e + --n]; 0 < n && (i *= 256);) a += this[e + --n] * i;
				return (i *= 128) <= a && (a -= o(2, 8 * t)),
				a
			},
			t.prototype.readInt8 = function(e, t) {
				return e >>>= 0,
				t || E(e, 1, this.length),
				128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
			},
			t.prototype.readInt16LE = function(e, t) {
				e >>>= 0,
				t || E(e, 2, this.length);
				var r = this[e] | this[e + 1] << 8;
				return 32768 & r ? 4294901760 | r: r
			},
			t.prototype.readInt16BE = function(e, t) {
				e >>>= 0,
				t || E(e, 2, this.length);
				var r = this[e + 1] | this[e] << 8;
				return 32768 & r ? 4294901760 | r: r
			},
			t.prototype.readInt32LE = function(e, t) {
				return e >>>= 0,
				t || E(e, 4, this.length),
				this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
			},
			t.prototype.readInt32BE = function(e, t) {
				return e >>>= 0,
				t || E(e, 4, this.length),
				this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
			},
			t.prototype.readFloatLE = function(e, t) {
				return e >>>= 0,
				t || E(e, 4, this.length),
				M.read(this, e, !0, 23, 4)
			},
			t.prototype.readFloatBE = function(e, t) {
				return e >>>= 0,
				t || E(e, 4, this.length),
				M.read(this, e, !1, 23, 4)
			},
			t.prototype.readDoubleLE = function(e, t) {
				return e >>>= 0,
				t || E(e, 8, this.length),
				M.read(this, e, !0, 52, 8)
			},
			t.prototype.readDoubleBE = function(e, t) {
				return e >>>= 0,
				t || E(e, 8, this.length),
				M.read(this, e, !1, 52, 8)
			},
			t.prototype.writeUIntLE = function(e, t, r, n) {
				e = +e,
				t >>>= 0,
				r >>>= 0,
				n || x(this, e, t, r, o(2, 8 * r) - 1, 0);
				var i = 1,
				a = 0;
				for (this[t] = 255 & e; ++a < r && (i *= 256);) this[t + a] = 255 & e / i;
				return t + r
			},
			t.prototype.writeUIntBE = function(e, t, r, n) {
				e = +e,
				t >>>= 0,
				r >>>= 0,
				n || x(this, e, t, r, o(2, 8 * r) - 1, 0);
				var i = r - 1,
				a = 1;
				for (this[t + i] = 255 & e; 0 <= --i && (a *= 256);) this[t + i] = 255 & e / a;
				return t + r
			},
			t.prototype.writeUInt8 = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 1, 255, 0),
				this[t] = 255 & e,
				t + 1
			},
			t.prototype.writeUInt16LE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 2, 65535, 0),
				this[t] = 255 & e,
				this[t + 1] = e >>> 8,
				t + 2
			},
			t.prototype.writeUInt16BE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 2, 65535, 0),
				this[t] = e >>> 8,
				this[t + 1] = 255 & e,
				t + 2
			},
			t.prototype.writeUInt32LE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 4, 4294967295, 0),
				this[t + 3] = e >>> 24,
				this[t + 2] = e >>> 16,
				this[t + 1] = e >>> 8,
				this[t] = 255 & e,
				t + 4
			},
			t.prototype.writeUInt32BE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 4, 4294967295, 0),
				this[t] = e >>> 24,
				this[t + 1] = e >>> 16,
				this[t + 2] = e >>> 8,
				this[t + 3] = 255 & e,
				t + 4
			},
			t.prototype.writeIntLE = function(e, t, r, n) {
				if (e = +e, t >>>= 0, !n) {
					var i = o(2, 8 * r - 1);
					x(this, e, t, r, i - 1, -i)
				}
				var a = 0,
				s = 1,
				f = 0;
				for (this[t] = 255 & e; ++a < r && (s *= 256);) e < 0 && 0 === f && 0 !== this[t + a - 1] && (f = 1),
				this[t + a] = 255 & (e / s >> 0) - f;
				return t + r
			},
			t.prototype.writeIntBE = function(e, t, r, n) {
				if (e = +e, t >>>= 0, !n) {
					var i = o(2, 8 * r - 1);
					x(this, e, t, r, i - 1, -i)
				}
				var a = r - 1,
				s = 1,
				f = 0;
				for (this[t + a] = 255 & e; 0 <= --a && (s *= 256);) e < 0 && 0 === f && 0 !== this[t + a + 1] && (f = 1),
				this[t + a] = 255 & (e / s >> 0) - f;
				return t + r
			},
			t.prototype.writeInt8 = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 1, 127, -128),
				e < 0 && (e = 255 + e + 1),
				this[t] = 255 & e,
				t + 1
			},
			t.prototype.writeInt16LE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 2, 32767, -32768),
				this[t] = 255 & e,
				this[t + 1] = e >>> 8,
				t + 2
			},
			t.prototype.writeInt16BE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 2, 32767, -32768),
				this[t] = e >>> 8,
				this[t + 1] = 255 & e,
				t + 2
			},
			t.prototype.writeInt32LE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 4, 2147483647, -2147483648),
				this[t] = 255 & e,
				this[t + 1] = e >>> 8,
				this[t + 2] = e >>> 16,
				this[t + 3] = e >>> 24,
				t + 4
			},
			t.prototype.writeInt32BE = function(e, t, r) {
				return e = +e,
				t >>>= 0,
				r || x(this, e, t, 4, 2147483647, -2147483648),
				e < 0 && (e = 4294967295 + e + 1),
				this[t] = e >>> 24,
				this[t + 1] = e >>> 16,
				this[t + 2] = e >>> 8,
				this[t + 3] = 255 & e,
				t + 4
			},
			t.prototype.writeFloatLE = function(e, t, r) {
				return A(this, e, t, !0, r)
			},
			t.prototype.writeFloatBE = function(e, t, r) {
				return A(this, e, t, !1, r)
			},
			t.prototype.writeDoubleLE = function(e, t, r) {
				return B(this, e, t, !0, r)
			},
			t.prototype.writeDoubleBE = function(e, t, r) {
				return B(this, e, t, !1, r)
			},
			t.prototype.copy = function(e, r, n, i) {
				if (!t.isBuffer(e)) throw new TypeError("argument should be a Buffer");
				if (n = n || 0, i || 0 === i || (i = this.length), r >= e.length && (r = e.length), r = r || 0, 0 < i && i < n && (i = n), i === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (r < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
				if (i < 0) throw new RangeError("sourceEnd out of bounds");
				i > this.length && (i = this.length),
				e.length - r < i - n && (i = e.length - r + n);
				var o = i - n;
				if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(r, n, i);
				else if (this === e && n < r && r < i) for (var a = o - 1; 0 <= a; --a) e[a + r] = this[a + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, i), r);
				return o
			},
			t.prototype.fill = function(e, r, n, i) {
				if ("string" == typeof e) {
					if ("string" == typeof r ? (i = r, r = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
					if ("string" == typeof i && !t.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
					if (1 === e.length) {
						var o = e.charCodeAt(0); ("utf8" === i && o < 128 || "latin1" === i) && (e = o)
					}
				} else "number" == typeof e && (e &= 255);
				if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");
				if (n <= r) return this;
				var a;
				if (r >>>= 0, n = void 0 === n ? this.length: n >>> 0, "number" == typeof(e = e || 0)) for (a = r; a < n; ++a) this[a] = e;
				else {
					var s = t.isBuffer(e) ? e: t.from(e, i),
					f = s.length;
					if (0 === f) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
					for (a = 0; a < n - r; ++a) this[a + r] = s[a % f]
				}
				return this
			};
			var R = /[^+\/0-9A-Za-z-_]/g
		}).call(this, e("buffer").Buffer)
	},
	{
		"base64-js": 27,
		buffer: 61,
		ieee754: 112
	}],
	62 : [function(e, t) {
		function r(e) {
			i.call(this),
			this.hashMode = "string" == typeof e,
			this.hashMode ? this[e] = this._finalOrDigest: this.final = this._finalOrDigest,
			this._final && (this.__final = this._final, this._final = null),
			this._decoder = null,
			this._encoding = null
		}
		var n = e("safe-buffer").Buffer,
		i = e("stream").Transform,
		o = e("string_decoder").StringDecoder;
		e("inherits")(r, i),
		r.prototype.update = function(e, t, r) {
			"string" == typeof e && (e = n.from(e, t));
			var i = this._update(e);
			return this.hashMode ? this: (r && (i = this._toString(i, r)), i)
		},
		r.prototype.setAutoPadding = function() {},
		r.prototype.getAuthTag = function() {
			throw new Error("trying to get auth tag in unsupported state")
		},
		r.prototype.setAuthTag = function() {
			throw new Error("trying to set auth tag in unsupported state")
		},
		r.prototype.setAAD = function() {
			throw new Error("trying to set aad in unsupported state")
		},
		r.prototype._transform = function(e, t, r) {
			var n;
			try {
				this.hashMode ? this._update(e) : this.push(this._update(e))
			} catch(t) {
				n = t
			} finally {
				r(n)
			}
		},
		r.prototype._flush = function(e) {
			var t;
			try {
				this.push(this.__final())
			} catch(e) {
				t = e
			}
			e(t)
		},
		r.prototype._finalOrDigest = function(e) {
			var t = this.__final() || n.alloc(0);
			return e && (t = this._toString(t, e, !0)),
			t
		},
		r.prototype._toString = function(e, t, r) {
			if (this._decoder || (this._decoder = new o(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
			var n = this._decoder.write(e);
			return r && (n += this._decoder.end()),
			n
		},
		t.exports = r
	},
	{
		inherits: 113,
		"safe-buffer": 141,
		stream: 150,
		string_decoder: 58
	}],
	63 : [function(e, t, r) { (function(e) {
			function t(e) {
				return Object.prototype.toString.call(e)
			}
			r.isArray = function(e) {
				return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e)
			},
			r.isBoolean = function(e) {
				return "boolean" == typeof e
			},
			r.isNull = function(e) {
				return null === e
			},
			r.isNullOrUndefined = function(e) {
				return null == e
			},
			r.isNumber = function(e) {
				return "number" == typeof e
			},
			r.isString = function(e) {
				return "string" == typeof e
			},
			r.isSymbol = function(e) {
				return "symbol" == typeof e
			},
			r.isUndefined = function(e) {
				return void 0 === e
			},
			r.isRegExp = function(e) {
				return "[object RegExp]" === t(e)
			},
			r.isObject = function(e) {
				return "object" == typeof e && null !== e
			},
			r.isDate = function(e) {
				return "[object Date]" === t(e)
			},
			r.isError = function(e) {
				return "[object Error]" === t(e) || e instanceof Error
			},
			r.isFunction = function(e) {
				return "function" == typeof e
			},
			r.isPrimitive = function(e) {
				return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
			},
			r.isBuffer = e.isBuffer
		}).call(this, {
			isBuffer: e("../../is-buffer/index.js")
		})
	},
	{
		"../../is-buffer/index.js": 114
	}],
	64 : [function(e, t) { (function(r) {
			function n(e) {
				this.curveType = s[e],
				this.curveType || (this.curveType = {
					name: e
				}),
				this.curve = new o.ec(this.curveType.name),
				this.keys = void 0
			}
			function i(e, t, n) {
				Array.isArray(e) || (e = e.toArray());
				var i = new r(e);
				if (n && i.length < n) {
					var o = new r(n - i.length);
					o.fill(0),
					i = r.concat([o, i])
				}
				return t ? i.toString(t) : i
			}
			var o = e("elliptic"),
			a = e("bn.js");
			t.exports = function(e) {
				return new n(e)
			};
			var s = {
				secp256k1: {
					name: "secp256k1",
					byteLength: 32
				},
				secp224r1: {
					name: "p224",
					byteLength: 28
				},
				prime256v1: {
					name: "p256",
					byteLength: 32
				},
				prime192v1: {
					name: "p192",
					byteLength: 24
				},
				ed25519: {
					name: "ed25519",
					byteLength: 32
				},
				secp384r1: {
					name: "p384",
					byteLength: 48
				},
				secp521r1: {
					name: "p521",
					byteLength: 66
				}
			};
			s.p224 = s.secp224r1,
			s.p256 = s.secp256r1 = s.prime256v1,
			s.p192 = s.secp192r1 = s.prime192v1,
			s.p384 = s.secp384r1,
			s.p521 = s.secp521r1,
			n.prototype.generateKeys = function(e, t) {
				return this.keys = this.curve.genKeyPair(),
				this.getPublicKey(e, t)
			},
			n.prototype.computeSecret = function(e, t, n) {
				return t = t || "utf8",
				r.isBuffer(e) || (e = new r(e, t)),
				i(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), n, this.curveType.byteLength)
			},
			n.prototype.getPublicKey = function(e, t) {
				var r = this.keys.getPublic("compressed" === t, !0);
				return "hybrid" === t && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6),
				i(r, e)
			},
			n.prototype.getPrivateKey = function(e) {
				return i(this.keys.getPrivate(), e)
			},
			n.prototype.setPublicKey = function(e, t) {
				return t = t || "utf8",
				r.isBuffer(e) || (e = new r(e, t)),
				this.keys._importPublic(e),
				this
			},
			n.prototype.setPrivateKey = function(e, t) {
				t = t || "utf8",
				r.isBuffer(e) || (e = new r(e, t));
				var n = new a(e);
				return n = n.toString(16),
				this.keys = this.curve.genKeyPair(),
				this.keys._importPrivate(n),
				this
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		"bn.js": 28,
		buffer: 61,
		elliptic: 80
	}],
	65 : [function(e, t) {
		"use strict";
		function r(e) {
			s.call(this, "digest"),
			this._hash = e
		}
		var n = e("inherits"),
		i = e("md5.js"),
		o = e("ripemd160"),
		a = e("sha.js"),
		s = e("cipher-base");
		n(r, s),
		r.prototype._update = function(e) {
			this._hash.update(e)
		},
		r.prototype._final = function() {
			return this._hash.digest()
		},
		t.exports = function(e) {
			return "md5" === (e = e.toLowerCase()) ? new i: "rmd160" === e || "ripemd160" === e ? new o: new r(a(e))
		}
	},
	{
		"cipher-base": 62,
		inherits: 113,
		"md5.js": 116,
		ripemd160: 140,
		"sha.js": 143
	}],
	66 : [function(e, t) {
		var r = e("md5.js");
		t.exports = function(e) {
			return (new r).update(e).digest()
		}
	},
	{
		"md5.js": 116
	}],
	67 : [function(e, t) {
		"use strict";
		function r(e, t) {
			o.call(this, "digest"),
			"string" == typeof t && (t = a.from(t));
			var r = "sha512" === e || "sha384" === e ? 128 : 64;
			this._alg = e,
			(this._key = t).length > r ? t = ("rmd160" === e ? new f: c(e)).update(t).digest() : t.length < r && (t = a.concat([t, u], r));
			for (var n = this._ipad = a.allocUnsafe(r), i = this._opad = a.allocUnsafe(r), s = 0; s < r; s++) n[s] = 54 ^ t[s],
			i[s] = 92 ^ t[s];
			this._hash = "rmd160" === e ? new f: c(e),
			this._hash.update(n)
		}
		var n = e("inherits"),
		i = e("./legacy"),
		o = e("cipher-base"),
		a = e("safe-buffer").Buffer,
		s = e("create-hash/md5"),
		f = e("ripemd160"),
		c = e("sha.js"),
		u = a.alloc(128);
		n(r, o),
		r.prototype._update = function(e) {
			this._hash.update(e)
		},
		r.prototype._final = function() {
			var e = this._hash.digest();
			return ("rmd160" === this._alg ? new f: c(this._alg)).update(this._opad).update(e).digest()
		},
		t.exports = function(e, t) {
			return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new r("rmd160", t) : "md5" === e ? new i(s, t) : new r(e, t)
		}
	},
	{
		"./legacy": 68,
		"cipher-base": 62,
		"create-hash/md5": 66,
		inherits: 113,
		ripemd160: 140,
		"safe-buffer": 141,
		"sha.js": 143
	}],
	68 : [function(e, t) {
		"use strict";
		function r(e, t) {
			o.call(this, "digest"),
			"string" == typeof t && (t = i.from(t)),
			this._alg = e,
			64 < (this._key = t).length ? t = e(t) : t.length < 64 && (t = i.concat([t, a], 64));
			for (var r = this._ipad = i.allocUnsafe(64), n = this._opad = i.allocUnsafe(64), s = 0; s < 64; s++) r[s] = 54 ^ t[s],
			n[s] = 92 ^ t[s];
			this._hash = [r]
		}
		var n = e("inherits"),
		i = e("safe-buffer").Buffer,
		o = e("cipher-base"),
		a = i.alloc(128);
		n(r, o),
		r.prototype._update = function(e) {
			this._hash.push(e)
		},
		r.prototype._final = function() {
			var e = this._alg(i.concat(this._hash));
			return this._alg(i.concat([this._opad, e]))
		},
		t.exports = r
	},
	{
		"cipher-base": 62,
		inherits: 113,
		"safe-buffer": 141
	}],
	69 : [function(e, t, r) {
		"use strict";
		r.randomBytes = r.rng = r.pseudoRandomBytes = r.prng = e("randombytes"),
		r.createHash = r.Hash = e("create-hash"),
		r.createHmac = r.Hmac = e("create-hmac");
		var n = e("browserify-sign/algos"),
		i = Object.keys(n),
		o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(i);
		r.getHashes = function() {
			return o
		};
		var a = e("pbkdf2");
		r.pbkdf2 = a.pbkdf2,
		r.pbkdf2Sync = a.pbkdf2Sync;
		var s = e("browserify-cipher");
		r.Cipher = s.Cipher,
		r.createCipher = s.createCipher,
		r.Cipheriv = s.Cipheriv,
		r.createCipheriv = s.createCipheriv,
		r.Decipher = s.Decipher,
		r.createDecipher = s.createDecipher,
		r.Decipheriv = s.Decipheriv,
		r.createDecipheriv = s.createDecipheriv,
		r.getCiphers = s.getCiphers,
		r.listCiphers = s.listCiphers;
		var f = e("diffie-hellman");
		r.DiffieHellmanGroup = f.DiffieHellmanGroup,
		r.createDiffieHellmanGroup = f.createDiffieHellmanGroup,
		r.getDiffieHellman = f.getDiffieHellman,
		r.createDiffieHellman = f.createDiffieHellman,
		r.DiffieHellman = f.DiffieHellman;
		var c = e("browserify-sign");
		r.createSign = c.createSign,
		r.Sign = c.Sign,
		r.createVerify = c.createVerify,
		r.Verify = c.Verify,
		r.createECDH = e("create-ecdh");
		var u = e("public-encrypt");
		r.publicEncrypt = u.publicEncrypt,
		r.privateEncrypt = u.privateEncrypt,
		r.publicDecrypt = u.publicDecrypt,
		r.privateDecrypt = u.privateDecrypt;
		var d = e("randomfill");
		r.randomFill = d.randomFill,
		r.randomFillSync = d.randomFillSync,
		r.createCredentials = function() {
			throw new Error("sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify")
		},
		r.constants = {
			DH_CHECK_P_NOT_SAFE_PRIME: 2,
			DH_CHECK_P_NOT_PRIME: 1,
			DH_UNABLE_TO_CHECK_GENERATOR: 4,
			DH_NOT_SUITABLE_GENERATOR: 8,
			NPN_ENABLED: 1,
			ALPN_ENABLED: 1,
			RSA_PKCS1_PADDING: 1,
			RSA_SSLV23_PADDING: 2,
			RSA_NO_PADDING: 3,
			RSA_PKCS1_OAEP_PADDING: 4,
			RSA_X931_PADDING: 5,
			RSA_PKCS1_PSS_PADDING: 6,
			POINT_CONVERSION_COMPRESSED: 2,
			POINT_CONVERSION_UNCOMPRESSED: 4,
			POINT_CONVERSION_HYBRID: 6
		}
	},
	{
		"browserify-cipher": 48,
		"browserify-sign": 55,
		"browserify-sign/algos": 52,
		"create-ecdh": 64,
		"create-hash": 65,
		"create-hmac": 67,
		"diffie-hellman": 76,
		pbkdf2: 125,
		"public-encrypt": 132,
		randombytes: 138,
		randomfill: 139
	}],
	70 : [function(e, t, r) {
		"use strict";
		r.utils = e("./des/utils"),
		r.Cipher = e("./des/cipher"),
		r.DES = e("./des/des"),
		r.CBC = e("./des/cbc"),
		r.EDE = e("./des/ede")
	},
	{
		"./des/cbc": 71,
		"./des/cipher": 72,
		"./des/des": 73,
		"./des/ede": 74,
		"./des/utils": 75
	}],
	71 : [function(e, t, r) {
		"use strict";
		function n(e) {
			i.equal(e.length, 8, "Invalid IV length"),
			this.iv = Array(8);
			for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
		}
		var i = e("minimalistic-assert"),
		o = e("inherits"),
		a = {};
		r.instantiate = function(e) {
			function t(t) {
				e.call(this, t),
				this._cbcInit()
			}
			o(t, e);
			for (var r, n = Object.keys(a), i = 0; i < n.length; i++) r = n[i],
			t.prototype[r] = a[r];
			return t.create = function(e) {
				return new t(e)
			},
			t
		},
		a._cbcInit = function() {
			var e = new n(this.options.iv);
			this._cbcState = e
		},
		a._update = function(e, t, r, n) {
			var i = this._cbcState,
			o = this.constructor.super_.prototype,
			a = i.iv;
			if ("encrypt" === this.type) {
				for (var s = 0; s < this.blockSize; s++) a[s] ^= e[t + s];
				for (o._update.call(this, a, 0, r, n), s = 0; s < this.blockSize; s++) a[s] = r[n + s]
			} else {
				for (o._update.call(this, e, t, r, n), s = 0; s < this.blockSize; s++) r[n + s] ^= a[s];
				for (s = 0; s < this.blockSize; s++) a[s] = e[t + s]
			}
		}
	},
	{
		inherits: 113,
		"minimalistic-assert": 118
	}],
	72 : [function(e, t) {
		"use strict";
		var r = Math.ceil,
		n = Math.min;
		function i(e) {
			this.options = e,
			this.type = this.options.type,
			this.blockSize = 8,
			this._init(),
			this.buffer = Array(this.blockSize),
			this.bufferOff = 0
		}
		var o = e("minimalistic-assert"); (t.exports = i).prototype._init = function() {},
		i.prototype.update = function(e) {
			return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
		},
		i.prototype._buffer = function(e, t) {
			for (var r = n(this.buffer.length - this.bufferOff, e.length - t), i = 0; i < r; i++) this.buffer[this.bufferOff + i] = e[t + i];
			return this.bufferOff += r,
			r
		},
		i.prototype._flushBuffer = function(e, t) {
			return this._update(this.buffer, 0, e, t),
			this.bufferOff = 0,
			this.blockSize
		},
		i.prototype._updateEncrypt = function(e) {
			var t = 0,
			r = 0,
			n = 0 | (this.bufferOff + e.length) / this.blockSize,
			i = Array(n * this.blockSize);
			0 !== this.bufferOff && (t += this._buffer(e, t), this.bufferOff === this.buffer.length && (r += this._flushBuffer(i, r)));
			for (var o = e.length - (e.length - t) % this.blockSize; t < o; t += this.blockSize) this._update(e, t, i, r),
			r += this.blockSize;
			for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
			return i
		},
		i.prototype._updateDecrypt = function(e) {
			for (var t = 0,
			n = 0,
			i = r((this.bufferOff + e.length) / this.blockSize) - 1, o = Array(i * this.blockSize); 0 < i; i--) t += this._buffer(e, t),
			n += this._flushBuffer(o, n);
			return t += this._buffer(e, t),
			o
		},
		i.prototype.final = function(e) {
			var t, r;
			return e && (t = this.update(e)),
			r = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(),
			t ? t.concat(r) : r
		},
		i.prototype._pad = function(e, t) {
			if (0 === t) return ! 1;
			for (; t < e.length;) e[t++] = 0;
			return ! 0
		},
		i.prototype._finalEncrypt = function() {
			if (!this._pad(this.buffer, this.bufferOff)) return [];
			var e = Array(this.blockSize);
			return this._update(this.buffer, 0, e, 0),
			e
		},
		i.prototype._unpad = function(e) {
			return e
		},
		i.prototype._finalDecrypt = function() {
			o.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
			var e = Array(this.blockSize);
			return this._flushBuffer(e, 0),
			this._unpad(e)
		}
	},
	{
		"minimalistic-assert": 118
	}],
	73 : [function(e, t) {
		"use strict";
		function r() {
			this.tmp = [, , ],
			this.keys = null
		}
		function n(e) {
			s.call(this, e);
			var t = new r;
			this._desState = t,
			this.deriveKeys(t, e.key)
		}
		var i = e("minimalistic-assert"),
		o = e("inherits"),
		a = e("./utils"),
		s = e("./cipher");
		o(n, s),
		(t.exports = n).create = function(e) {
			return new n(e)
		};
		var f = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
		n.prototype.deriveKeys = function(e, t) {
			e.keys = Array(32),
			i.equal(t.length, this.blockSize, "Invalid key length");
			var r = a.readUInt32BE(t, 0),
			n = a.readUInt32BE(t, 4);
			a.pc1(r, n, e.tmp, 0),
			r = e.tmp[0],
			n = e.tmp[1];
			for (var o, s = 0; s < e.keys.length; s += 2) o = f[s >>> 1],
			r = a.r28shl(r, o),
			n = a.r28shl(n, o),
			a.pc2(r, n, e.keys, s)
		},
		n.prototype._update = function(e, t, r, n) {
			var i = this._desState,
			o = a.readUInt32BE(e, t),
			s = a.readUInt32BE(e, t + 4);
			a.ip(o, s, i.tmp, 0),
			o = i.tmp[0],
			s = i.tmp[1],
			"encrypt" === this.type ? this._encrypt(i, o, s, i.tmp, 0) : this._decrypt(i, o, s, i.tmp, 0),
			o = i.tmp[0],
			s = i.tmp[1],
			a.writeUInt32BE(r, o, n),
			a.writeUInt32BE(r, s, n + 4)
		},
		n.prototype._pad = function(e, t) {
			for (var r = e.length - t,
			n = t; n < e.length; n++) e[n] = r;
			return ! 0
		},
		n.prototype._unpad = function(e) {
			for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++) i.equal(e[r], t);
			return e.slice(0, e.length - t)
		},
		n.prototype._encrypt = function(e, t, r, n, i) {
			for (var o = t,
			s = r,
			f = 0; f < e.keys.length; f += 2) {
				var c = e.keys[f],
				u = e.keys[f + 1];
				a.expand(s, e.tmp, 0),
				c ^= e.tmp[0],
				u ^= e.tmp[1];
				var d = a.substitute(c, u),
				h = s;
				s = (o ^ a.permute(d)) >>> 0,
				o = h
			}
			a.rip(s, o, n, i)
		},
		n.prototype._decrypt = function(e, t, r, n, i) {
			for (var o = r,
			s = t,
			f = e.keys.length - 2; 0 <= f; f -= 2) {
				var c = e.keys[f],
				u = e.keys[f + 1];
				a.expand(o, e.tmp, 0),
				c ^= e.tmp[0],
				u ^= e.tmp[1];
				var d = a.substitute(c, u),
				h = o;
				o = (s ^ a.permute(d)) >>> 0,
				s = h
			}
			a.rip(o, s, n, i)
		}
	},
	{
		"./cipher": 72,
		"./utils": 75,
		inherits: 113,
		"minimalistic-assert": 118
	}],
	74 : [function(e, t) {
		"use strict";
		function r(e, t) {
			i.equal(t.length, 24, "Invalid key length");
			var r = t.slice(0, 8),
			n = t.slice(8, 16),
			o = t.slice(16, 24);
			this.ciphers = "encrypt" === e ? [s.create({
				type: "encrypt",
				key: r
			}), s.create({
				type: "decrypt",
				key: n
			}), s.create({
				type: "encrypt",
				key: o
			})] : [s.create({
				type: "decrypt",
				key: o
			}), s.create({
				type: "encrypt",
				key: n
			}), s.create({
				type: "decrypt",
				key: r
			})]
		}
		function n(e) {
			a.call(this, e);
			var t = new r(this.type, this.options.key);
			this._edeState = t
		}
		var i = e("minimalistic-assert"),
		o = e("inherits"),
		a = e("./cipher"),
		s = e("./des");
		o(n, a),
		(t.exports = n).create = function(e) {
			return new n(e)
		},
		n.prototype._update = function(e, t, r, n) {
			var i = this._edeState;
			i.ciphers[0]._update(e, t, r, n),
			i.ciphers[1]._update(r, n, r, n),
			i.ciphers[2]._update(r, n, r, n)
		},
		n.prototype._pad = s.prototype._pad,
		n.prototype._unpad = s.prototype._unpad
	},
	{
		"./cipher": 72,
		"./des": 73,
		inherits: 113,
		"minimalistic-assert": 118
	}],
	75 : [function(e, t, r) {
		"use strict";
		r.readUInt32BE = function(e, t) {
			return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
		},
		r.writeUInt32BE = function(e, t, r) {
			e[0 + r] = t >>> 24,
			e[1 + r] = 255 & t >>> 16,
			e[2 + r] = 255 & t >>> 8,
			e[3 + r] = 255 & t
		},
		r.ip = function(e, t, r, n) {
			for (var i = 0,
			o = 0,
			a = 6; 0 <= a; a -= 2) {
				for (var s = 0; s <= 24; s += 8) i <<= 1,
				i |= 1 & t >>> s + a;
				for (s = 0; s <= 24; s += 8) i <<= 1,
				i |= 1 & e >>> s + a
			}
			for (a = 6; 0 <= a; a -= 2) {
				for (s = 1; s <= 25; s += 8) o <<= 1,
				o |= 1 & t >>> s + a;
				for (s = 1; s <= 25; s += 8) o <<= 1,
				o |= 1 & e >>> s + a
			}
			r[n + 0] = i >>> 0,
			r[n + 1] = o >>> 0
		},
		r.rip = function(e, t, r, n) {
			for (var i = 0,
			o = 0,
			a = 0; a < 4; a++) for (var s = 24; 0 <= s; s -= 8) i <<= 1,
			i |= 1 & t >>> s + a,
			i <<= 1,
			i |= 1 & e >>> s + a;
			for (a = 4; a < 8; a++) for (s = 24; 0 <= s; s -= 8) o <<= 1,
			o |= 1 & t >>> s + a,
			o <<= 1,
			o |= 1 & e >>> s + a;
			r[n + 0] = i >>> 0,
			r[n + 1] = o >>> 0
		},
		r.pc1 = function(e, t, r, n) {
			for (var i = 0,
			o = 0,
			a = 7; 5 <= a; a--) {
				for (var s = 0; s <= 24; s += 8) i <<= 1,
				i |= 1 & t >> s + a;
				for (s = 0; s <= 24; s += 8) i <<= 1,
				i |= 1 & e >> s + a
			}
			for (s = 0; s <= 24; s += 8) i <<= 1,
			i |= 1 & t >> s + a;
			for (a = 1; a <= 3; a++) {
				for (s = 0; s <= 24; s += 8) o <<= 1,
				o |= 1 & t >> s + a;
				for (s = 0; s <= 24; s += 8) o <<= 1,
				o |= 1 & e >> s + a
			}
			for (s = 0; s <= 24; s += 8) o <<= 1,
			o |= 1 & e >> s + a;
			r[n + 0] = i >>> 0,
			r[n + 1] = o >>> 0
		},
		r.r28shl = function(e, t) {
			return 268435455 & e << t | e >>> 28 - t
		};
		var n = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
		r.pc2 = function(e, t, r, i) {
			for (var o = 0,
			a = 0,
			s = n.length >>> 1,
			f = 0; f < s; f++) o <<= 1,
			o |= 1 & e >>> n[f];
			for (f = s; f < n.length; f++) a <<= 1,
			a |= 1 & t >>> n[f];
			r[i + 0] = o >>> 0,
			r[i + 1] = a >>> 0
		},
		r.expand = function(e, t, r) {
			var n = 0,
			i = 0;
			n = (1 & e) << 5 | e >>> 27;
			for (var o = 23; 15 <= o; o -= 4) n <<= 6,
			n |= 63 & e >>> o;
			for (o = 11; 3 <= o; o -= 4) i |= 63 & e >>> o,
			i <<= 6;
			i |= (31 & e) << 1 | e >>> 31,
			t[r + 0] = n >>> 0,
			t[r + 1] = i >>> 0
		};
		var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
		r.substitute = function(e, t) {
			for (var r = 0,
			n = 0; n < 4; n++) r <<= 4,
			r |= i[64 * n + (63 & e >>> 18 - 6 * n)];
			for (n = 0; n < 4; n++) r <<= 4,
			r |= i[256 + 64 * n + (63 & t >>> 18 - 6 * n)];
			return r >>> 0
		};
		var o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
		r.permute = function(e) {
			for (var t = 0,
			r = 0; r < o.length; r++) t <<= 1,
			t |= 1 & e >>> o[r];
			return t >>> 0
		},
		r.padSplit = function(e, t, r) {
			for (var n = e.toString(2); n.length < t;) n = "0" + n;
			for (var i = [], o = 0; o < t; o += r) i.push(n.slice(o, o + r));
			return i.join(" ")
		}
	},
	{}],
	76 : [function(e, t, r) { (function(t) {
			var n = e("./lib/generatePrime"),
			i = e("./lib/primes.json"),
			o = e("./lib/dh"),
			a = {
				binary: !0,
				hex: !0,
				base64: !0
			};
			r.DiffieHellmanGroup = r.createDiffieHellmanGroup = r.getDiffieHellman = function(e) {
				var r = new t(i[e].prime, "hex"),
				n = new t(i[e].gen, "hex");
				return new o(r, n)
			},
			r.createDiffieHellman = r.DiffieHellman = function e(r, i, s, f) {
				return t.isBuffer(i) || void 0 === a[i] ? e(r, "binary", i, s) : (i = i || "binary", f = f || "binary", s = s || new t([2]), t.isBuffer(s) || (s = new t(s, f)), "number" == typeof r ? new o(n(r, s), s, !0) : (t.isBuffer(r) || (r = new t(r, i)), new o(r, s, !0)))
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		"./lib/dh": 77,
		"./lib/generatePrime": 78,
		"./lib/primes.json": 79,
		buffer: 61
	}],
	77 : [function(e, t) { (function(r) {
			function n(e, t) {
				return t = t || "utf8",
				r.isBuffer(e) || (e = new r(e, t)),
				this._pub = new s(e),
				this
			}
			function i(e, t) {
				return t = t || "utf8",
				r.isBuffer(e) || (e = new r(e, t)),
				this._priv = new s(e),
				this
			}
			function o(e, t, r) {
				this.setGenerator(t),
				this.__prime = new s(e),
				this._prime = s.mont(this.__prime),
				this._primeLen = e.length,
				this._pub = void 0,
				this._priv = void 0,
				this._primeCode = void 0,
				r ? (this.setPublicKey = n, this.setPrivateKey = i) : this._primeCode = 8
			}
			function a(e, t) {
				var n = new r(e.toArray());
				return t ? n.toString(t) : n
			}
			var s = e("bn.js"),
			f = new(e("miller-rabin")),
			c = new s(24),
			u = new s(11),
			d = new s(10),
			h = new s(3),
			l = new s(7),
			p = e("./generatePrime"),
			b = e("randombytes");
			t.exports = o;
			var y = {};
			Object.defineProperty(o.prototype, "verifyError", {
				enumerable: !0,
				get: function() {
					return "number" != typeof this._primeCode && (this._primeCode = function(e, t) {
						var r = t.toString("hex"),
						n = [r, e.toString(16)].join("_");
						if (n in y) return y[n];
						var i, o = 0;
						return ! e.isEven() && p.simpleSieve && p.fermatTest(e) && f.test(e) ? (f.test(e.shrn(1)) || (o += 2), "02" === r ? e.mod(c).cmp(u) && (o += 8) : "05" === r ? (i = e.mod(d)).cmp(h) && i.cmp(l) && (o += 8) : o += 4) : (o += 1, o += "02" === r || "05" === r ? 8 : 4),
						y[n] = o
					} (this.__prime, this.__gen)),
					this._primeCode
				}
			}),
			o.prototype.generateKeys = function() {
				return this._priv || (this._priv = new s(b(this._primeLen))),
				this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(),
				this.getPublicKey()
			},
			o.prototype.computeSecret = function(e) {
				var t = (e = (e = new s(e)).toRed(this._prime)).redPow(this._priv).fromRed(),
				n = new r(t.toArray()),
				i = this.getPrime();
				if (n.length < i.length) {
					var o = new r(i.length - n.length);
					o.fill(0),
					n = r.concat([o, n])
				}
				return n
			},
			o.prototype.getPublicKey = function(e) {
				return a(this._pub, e)
			},
			o.prototype.getPrivateKey = function(e) {
				return a(this._priv, e)
			},
			o.prototype.getPrime = function(e) {
				return a(this.__prime, e)
			},
			o.prototype.getGenerator = function(e) {
				return a(this._gen, e)
			},
			o.prototype.setGenerator = function(e, t) {
				return t = t || "utf8",
				r.isBuffer(e) || (e = new r(e, t)),
				this.__gen = e,
				this._gen = new s(e),
				this
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		"./generatePrime": 78,
		"bn.js": 28,
		buffer: 61,
		"miller-rabin": 117,
		randombytes: 138
	}],
	78 : [function(e, t) {
		var r = Math.ceil;
		function n(e) {
			for (var t = function() {
				var e = Math.sqrt;
				if (null !== g) return g;
				var t = [];
				t[0] = 2;
				for (var n, i = 1,
				o = 3; o < 1048576; o += 2) {
					n = r(e(o));
					for (var a = 0; a < i && t[a] <= n && 0 != o % t[a]; a++);
					i != a && t[a] <= n || (t[i++] = o)
				}
				return g = t
			} (), n = 0; n < t.length; n++) if (0 === e.modn(t[n])) return 0 === e.cmpn(t[n]);
			return ! 0
		}
		function i(e) {
			var t = s.mont(e);
			return 0 === d.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
		}
		function o(e, t) {
			if (e < 16) return new s(2 === t || 5 === t ? [140, 123] : [140, 39]);
			t = new s(t);
			for (var o, g;;) {
				for (o = new s(a(r(e / 8))); o.bitLength() > e;) o.ishrn(1);
				if (o.isEven() && o.iadd(u), o.testn(1) || o.iadd(d), t.cmp(d)) {
					if (!t.cmp(h)) for (; o.mod(l).cmp(p);) o.iadd(y)
				} else for (; o.mod(f).cmp(b);) o.iadd(y);
				if (n(g = o.shrn(1)) && n(o) && i(g) && i(o) && c.test(g) && c.test(o)) return o
			}
		}
		var a = e("randombytes"); (t.exports = o).simpleSieve = n,
		o.fermatTest = i;
		var s = e("bn.js"),
		f = new s(24),
		c = new(e("miller-rabin")),
		u = new s(1),
		d = new s(2),
		h = new s(5),
		l = (new s(16), new s(8), new s(10)),
		p = new s(3),
		b = (new s(7), new s(11)),
		y = new s(4),
		g = (new s(12), null)
	},
	{
		"bn.js": 28,
		"miller-rabin": 117,
		randombytes: 138
	}],
	79 : [function(e, t) {
		t.exports = {
			modp1: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
			},
			modp2: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
			},
			modp5: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
			},
			modp14: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
			},
			modp15: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
			},
			modp16: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
			},
			modp17: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
			},
			modp18: {
				gen: "02",
				prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
			}
		}
	},
	{}],
	80 : [function(e, t, r) {
		"use strict";
		var n = r;
		n.version = e("../package.json").version,
		n.utils = e("./elliptic/utils"),
		n.rand = e("brorand"),
		n.curve = e("./elliptic/curve"),
		n.curves = e("./elliptic/curves"),
		n.ec = e("./elliptic/ec"),
		n.eddsa = e("./elliptic/eddsa")
	},
	{
		"../package.json": 95,
		"./elliptic/curve": 83,
		"./elliptic/curves": 86,
		"./elliptic/ec": 87,
		"./elliptic/eddsa": 90,
		"./elliptic/utils": 94,
		brorand: 29
	}],
	81 : [function(e, t) {
		"use strict";
		var r = Math.max;
		function n(e, t) {
			this.type = e,
			this.p = new o(t.p, 16),
			this.red = t.prime ? o.red(t.prime) : o.mont(this.p),
			this.zero = new o(0).toRed(this.red),
			this.one = new o(1).toRed(this.red),
			this.two = new o(2).toRed(this.red),
			this.n = t.n && new o(t.n, 16),
			this.g = t.g && this.pointFromJSON(t.g, t.gRed),
			this._wnafT1 = [, , , , ],
			this._wnafT2 = [, , , , ],
			this._wnafT3 = [, , , , ],
			this._wnafT4 = [, , , , ],
			this._bitLength = this.n ? this.n.bitLength() : 0;
			var r = this.n && this.p.div(this.n); ! r || 0 < r.cmpn(100) ? this.redN = null: (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
		}
		function i(e, t) {
			this.curve = e,
			this.type = t,
			this.precomputed = null
		}
		var o = e("bn.js"),
		a = e("../utils"),
		s = a.getNAF,
		f = a.getJSF,
		c = a.assert; (t.exports = n).prototype.point = function() {
			throw new Error("Not implemented")
		},
		n.prototype.validate = function() {
			throw new Error("Not implemented")
		},
		n.prototype._fixedNafMul = function(e, t) {
			c(e.precomputed);
			var r = e._getDoubles(),
			n = s(t, 1, this._bitLength),
			i = (1 << r.step + 1) - (0 == r.step % 2 ? 2 : 1);
			i /= 3;
			for (var o = [], a = 0; a < n.length; a += r.step) {
				for (h = 0, t = a + r.step - 1; a <= t; t--) h = (h << 1) + n[t];
				o.push(h)
			}
			for (var f = this.jpoint(null, null, null), u = this.jpoint(null, null, null), d = i; 0 < d; d--) {
				var h;
				for (a = 0; a < o.length; a++)(h = o[a]) === d ? u = u.mixedAdd(r.points[a]) : h === -d && (u = u.mixedAdd(r.points[a].neg()));
				f = f.add(u)
			}
			return f.toP()
		},
		n.prototype._wnafMul = function(e, t) {
			var r = 4,
			n = e._getNAFPoints(r);
			r = n.wnd;
			for (var i = n.points,
			o = s(t, r, this._bitLength), a = this.jpoint(null, null, null), f = o.length - 1; 0 <= f; f--) {
				for (t = 0; 0 <= f && 0 === o[f]; f--) t++;
				if (0 <= f && t++, a = a.dblp(t), f < 0) break;
				var u = o[f];
				c(0 !== u),
				a = "affine" === e.type ? 0 < u ? a.mixedAdd(i[u - 1 >> 1]) : a.mixedAdd(i[ - u - 1 >> 1].neg()) : 0 < u ? a.add(i[u - 1 >> 1]) : a.add(i[ - u - 1 >> 1].neg())
			}
			return "affine" === e.type ? a.toP() : a
		},
		n.prototype._wnafMulAdd = function(e, t, n, i, o) {
			for (var a = this._wnafT1,
			c = this._wnafT2,
			u = this._wnafT3,
			d = 0,
			h = 0; h < i; h++) {
				var l = (I = t[h])._getNAFPoints(e);
				a[h] = l.wnd,
				c[h] = l.points
			}
			for (h = i - 1; 1 <= h; h -= 2) {
				var p = h - 1,
				b = h;
				if (1 === a[p] && 1 === a[b]) {
					var y = [t[p], null, null, t[b]];
					0 === t[p].y.cmp(t[b].y) ? (y[1] = t[p].add(t[b]), y[2] = t[p].toJ().mixedAdd(t[b].neg())) : 0 === t[p].y.cmp(t[b].y.redNeg()) ? (y[1] = t[p].toJ().mixedAdd(t[b]), y[2] = t[p].add(t[b].neg())) : (y[1] = t[p].toJ().mixedAdd(t[b]), y[2] = t[p].toJ().mixedAdd(t[b].neg()));
					var g = [ - 3, -1, -5, -7, 0, 7, 5, 1, 3],
					m = f(n[p], n[b]);
					d = r(m[0].length, d),
					u[p] = Array(d),
					u[b] = Array(d);
					for (var v = 0; v < d; v++) {
						var w = 0 | m[0][v],
						_ = 0 | m[1][v];
						u[p][v] = g[3 * (1 + w) + (1 + _)],
						u[b][v] = 0,
						c[p] = y
					}
				} else u[p] = s(n[p], a[p], this._bitLength),
				u[b] = s(n[b], a[b], this._bitLength),
				d = r(u[p].length, d),
				d = r(u[b].length, d)
			}
			var S, k = this.jpoint(null, null, null),
			E = this._wnafT4;
			for (h = d; 0 <= h; h--) {
				for (S = 0; 0 <= h;) {
					var x = !0;
					for (v = 0; v < i; v++) E[v] = 0 | u[v][h],
					0 !== E[v] && (x = !1);
					if (!x) break;
					S++,
					h--
				}
				if (0 <= h && S++, k = k.dblp(S), h < 0) break;
				for (v = 0; v < i; v++) {
					var I, A = E[v];
					0 !== A && (0 < A ? I = c[v][A - 1 >> 1] : A < 0 && (I = c[v][ - A - 1 >> 1].neg()), k = "affine" === I.type ? k.mixedAdd(I) : k.add(I))
				}
			}
			for (h = 0; h < i; h++) c[h] = null;
			return o ? k: k.toP()
		},
		(n.BasePoint = i).prototype.eq = function() {
			throw new Error("Not implemented")
		},
		i.prototype.validate = function() {
			return this.curve.validate(this)
		},
		n.prototype.decodePoint = function(e, t) {
			e = a.toArray(e, t);
			var r = this.p.byteLength();
			if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? c(0 == e[e.length - 1] % 2) : 7 === e[0] && c(1 == e[e.length - 1] % 2),
			this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
			if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
			throw new Error("Unknown point format")
		},
		i.prototype.encodeCompressed = function(e) {
			return this.encode(e, !0)
		},
		i.prototype._encode = function(e) {
			var t = this.curve.p.byteLength(),
			r = this.getX().toArray("be", t);
			return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
		},
		i.prototype.encode = function(e, t) {
			return a.encode(this._encode(t), e)
		},
		i.prototype.precompute = function(e) {
			if (this.precomputed) return this;
			var t = {
				doubles: null,
				naf: null,
				beta: null
			};
			return t.naf = this._getNAFPoints(8),
			t.doubles = this._getDoubles(4, e),
			t.beta = this._getBeta(),
			this.precomputed = t,
			this
		},
		i.prototype._hasDoubles = function(e) {
			if (!this.precomputed) return ! 1;
			var t = this.precomputed.doubles;
			return !! t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
		},
		i.prototype._getDoubles = function(e, t) {
			if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
			for (var r = [this], n = this, i = 0; i < t; i += e) {
				for (var o = 0; o < e; o++) n = n.dbl();
				r.push(n)
			}
			return {
				step: e,
				points: r
			}
		},
		i.prototype._getNAFPoints = function(e) {
			if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
			for (var t = [this], r = (1 << e) - 1, n = 1 == r ? null: this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
			return {
				wnd: e,
				points: t
			}
		},
		i.prototype._getBeta = function() {
			return null
		},
		i.prototype.dblp = function(e) {
			for (var t = this,
			r = 0; r < e; r++) t = t.dbl();
			return t
		}
	},
	{
		"../utils": 94,
		"bn.js": 28
	}],
	82 : [function(e, t) {
		"use strict";
		function r(e) {
			this.twisted = 1 != (0 | e.a),
			this.mOneA = this.twisted && -1 == (0 | e.a),
			this.extended = this.mOneA,
			s.call(this, "edwards", e),
			this.a = new o(e.a, 16).umod(this.red.m),
			this.a = this.a.toRed(this.red),
			this.c = new o(e.c, 16).toRed(this.red),
			this.c2 = this.c.redSqr(),
			this.d = new o(e.d, 16).toRed(this.red),
			this.dd = this.d.redAdd(this.d),
			f(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
			this.oneC = 1 == (0 | e.c)
		}
		function n(e, t, r, n, i) {
			s.BasePoint.call(this, e, "projective"),
			null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new o(t, 16), this.y = new o(r, 16), this.z = n ? new o(n, 16) : this.curve.one, this.t = i && new o(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
		}
		var i = e("../utils"),
		o = e("bn.js"),
		a = e("inherits"),
		s = e("./base"),
		f = i.assert;
		a(r, s),
		(t.exports = r).prototype._mulA = function(e) {
			return this.mOneA ? e.redNeg() : this.a.redMul(e)
		},
		r.prototype._mulC = function(e) {
			return this.oneC ? e: this.c.redMul(e)
		},
		r.prototype.jpoint = function(e, t, r, n) {
			return this.point(e, t, r, n)
		},
		r.prototype.pointFromX = function(e, t) { (e = new o(e, 16)).red || (e = e.toRed(this.red));
			var r = e.redSqr(),
			n = this.c2.redSub(this.a.redMul(r)),
			i = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
			a = n.redMul(i.redInvm()),
			s = a.redSqrt();
			if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
			var f = s.fromRed().isOdd();
			return (t && !f || !t && f) && (s = s.redNeg()),
			this.point(e, s)
		},
		r.prototype.pointFromY = function(e, t) { (e = new o(e, 16)).red || (e = e.toRed(this.red));
			var r = e.redSqr(),
			n = r.redSub(this.c2),
			i = r.redMul(this.d).redMul(this.c2).redSub(this.a),
			a = n.redMul(i.redInvm());
			if (0 === a.cmp(this.zero)) {
				if (t) throw new Error("invalid point");
				return this.point(this.zero, e)
			}
			var s = a.redSqrt();
			if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
			return s.fromRed().isOdd() !== t && (s = s.redNeg()),
			this.point(s, e)
		},
		r.prototype.validate = function(e) {
			if (e.isInfinity()) return ! 0;
			e.normalize();
			var t = e.x.redSqr(),
			r = e.y.redSqr(),
			n = t.redMul(this.a).redAdd(r),
			i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
			return 0 === n.cmp(i)
		},
		a(n, s.BasePoint),
		r.prototype.pointFromJSON = function(e) {
			return n.fromJSON(this, e)
		},
		r.prototype.point = function(e, t, r, i) {
			return new n(this, e, t, r, i)
		},
		n.fromJSON = function(e, t) {
			return new n(e, t[0], t[1], t[2])
		},
		n.prototype.inspect = function() {
			return this.isInfinity() ? "<EC Point Infinity>": "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
		},
		n.prototype.isInfinity = function() {
			return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
		},
		n.prototype._extDbl = function() {
			var e = this.x.redSqr(),
			t = this.y.redSqr(),
			r = this.z.redSqr();
			r = r.redIAdd(r);
			var n = this.curve._mulA(e),
			i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
			o = n.redAdd(t),
			a = o.redSub(r),
			s = n.redSub(t),
			f = i.redMul(a),
			c = o.redMul(s),
			u = i.redMul(s),
			d = a.redMul(o);
			return this.curve.point(f, c, d, u)
		},
		n.prototype._projDbl = function() {
			var e, t, r, n = this.x.redAdd(this.y).redSqr(),
			i = this.x.redSqr(),
			o = this.y.redSqr();
			if (this.curve.twisted) {
				var a = (c = this.curve._mulA(i)).redAdd(o);
				if (this.zOne) e = n.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)),
				t = a.redMul(c.redSub(o)),
				r = a.redSqr().redSub(a).redSub(a);
				else {
					var s = this.z.redSqr(),
					f = a.redSub(s).redISub(s);
					e = n.redSub(i).redISub(o).redMul(f),
					t = a.redMul(c.redSub(o)),
					r = a.redMul(f)
				}
			} else {
				var c = i.redAdd(o);
				s = this.curve._mulC(this.z).redSqr(),
				f = c.redSub(s).redSub(s),
				e = this.curve._mulC(n.redISub(c)).redMul(f),
				t = this.curve._mulC(c).redMul(i.redISub(o)),
				r = c.redMul(f)
			}
			return this.curve.point(e, t, r)
		},
		n.prototype.dbl = function() {
			return this.isInfinity() ? this: this.curve.extended ? this._extDbl() : this._projDbl()
		},
		n.prototype._extAdd = function(e) {
			var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
			r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
			n = this.t.redMul(this.curve.dd).redMul(e.t),
			i = this.z.redMul(e.z.redAdd(e.z)),
			o = r.redSub(t),
			a = i.redSub(n),
			s = i.redAdd(n),
			f = r.redAdd(t),
			c = o.redMul(a),
			u = s.redMul(f),
			d = o.redMul(f),
			h = a.redMul(s);
			return this.curve.point(c, u, h, d)
		},
		n.prototype._projAdd = function(e) {
			var t, r, n = this.z.redMul(e.z),
			i = n.redSqr(),
			o = this.x.redMul(e.x),
			a = this.y.redMul(e.y),
			s = this.curve.d.redMul(o).redMul(a),
			f = i.redSub(s),
			c = i.redAdd(s),
			u = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
			d = n.redMul(f).redMul(u);
			return r = this.curve.twisted ? (t = n.redMul(c).redMul(a.redSub(this.curve._mulA(o))), f.redMul(c)) : (t = n.redMul(c).redMul(a.redSub(o)), this.curve._mulC(f).redMul(c)),
			this.curve.point(d, t, r)
		},
		n.prototype.add = function(e) {
			return this.isInfinity() ? e: e.isInfinity() ? this: this.curve.extended ? this._extAdd(e) : this._projAdd(e)
		},
		n.prototype.mul = function(e) {
			return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
		},
		n.prototype.mulAdd = function(e, t, r) {
			return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
		},
		n.prototype.jmulAdd = function(e, t, r) {
			return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
		},
		n.prototype.normalize = function() {
			if (this.zOne) return this;
			var e = this.z.redInvm();
			return this.x = this.x.redMul(e),
			this.y = this.y.redMul(e),
			this.t && (this.t = this.t.redMul(e)),
			this.z = this.curve.one,
			this.zOne = !0,
			this
		},
		n.prototype.neg = function() {
			return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
		},
		n.prototype.getX = function() {
			return this.normalize(),
			this.x.fromRed()
		},
		n.prototype.getY = function() {
			return this.normalize(),
			this.y.fromRed()
		},
		n.prototype.eq = function(e) {
			return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
		},
		n.prototype.eqXToP = function(e) {
			var t = e.toRed(this.curve.red).redMul(this.z);
			if (0 === this.x.cmp(t)) return ! 0;
			for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
				if (r.iadd(this.curve.n), 0 <= r.cmp(this.curve.p)) return ! 1;
				if (t.redIAdd(n), 0 === this.x.cmp(t)) return ! 0
			}
		},
		n.prototype.toP = n.prototype.normalize,
		n.prototype.mixedAdd = n.prototype.add
	},
	{
		"../utils": 94,
		"./base": 81,
		"bn.js": 28,
		inherits: 113
	}],
	83 : [function(e, t, r) {
		"use strict";
		var n = r;
		n.base = e("./base"),
		n.short = e("./short"),
		n.mont = e("./mont"),
		n.edwards = e("./edwards")
	},
	{
		"./base": 81,
		"./edwards": 82,
		"./mont": 84,
		"./short": 85
	}],
	84 : [function(e, t) {
		"use strict";
		function r(e) {
			a.call(this, "mont", e),
			this.a = new i(e.a, 16).toRed(this.red),
			this.b = new i(e.b, 16).toRed(this.red),
			this.i4 = new i(4).toRed(this.red).redInvm(),
			this.two = new i(2).toRed(this.red),
			this.a24 = this.i4.redMul(this.a.redAdd(this.two))
		}
		function n(e, t, r) {
			a.BasePoint.call(this, e, "projective"),
			null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(t, 16), this.z = new i(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
		}
		var i = e("bn.js"),
		o = e("inherits"),
		a = e("./base"),
		s = e("../utils");
		o(r, a),
		(t.exports = r).prototype.validate = function(e) {
			var t = e.normalize().x,
			r = t.redSqr(),
			n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
			return 0 === n.redSqrt().redSqr().cmp(n)
		},
		o(n, a.BasePoint),
		r.prototype.decodePoint = function(e, t) {
			return this.point(s.toArray(e, t), 1)
		},
		r.prototype.point = function(e, t) {
			return new n(this, e, t)
		},
		r.prototype.pointFromJSON = function(e) {
			return n.fromJSON(this, e)
		},
		n.prototype.precompute = function() {},
		n.prototype._encode = function() {
			return this.getX().toArray("be", this.curve.p.byteLength())
		},
		n.fromJSON = function(e, t) {
			return new n(e, t[0], t[1] || e.one)
		},
		n.prototype.inspect = function() {
			return this.isInfinity() ? "<EC Point Infinity>": "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
		},
		n.prototype.isInfinity = function() {
			return 0 === this.z.cmpn(0)
		},
		n.prototype.dbl = function() {
			var e = this.x.redAdd(this.z).redSqr(),
			t = this.x.redSub(this.z).redSqr(),
			r = e.redSub(t),
			n = e.redMul(t),
			i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
			return this.curve.point(n, i)
		},
		n.prototype.add = function() {
			throw new Error("Not supported on Montgomery curve")
		},
		n.prototype.diffAdd = function(e, t) {
			var r = this.x.redAdd(this.z),
			n = this.x.redSub(this.z),
			i = e.x.redAdd(e.z),
			o = e.x.redSub(e.z).redMul(r),
			a = i.redMul(n),
			s = t.z.redMul(o.redAdd(a).redSqr()),
			f = t.x.redMul(o.redISub(a).redSqr());
			return this.curve.point(s, f)
		},
		n.prototype.mul = function(e) {
			for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
			for (var o = i.length - 1; 0 <= o; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
			return n
		},
		n.prototype.mulAdd = function() {
			throw new Error("Not supported on Montgomery curve")
		},
		n.prototype.jumlAdd = function() {
			throw new Error("Not supported on Montgomery curve")
		},
		n.prototype.eq = function(e) {
			return 0 === this.getX().cmp(e.getX())
		},
		n.prototype.normalize = function() {
			return this.x = this.x.redMul(this.z.redInvm()),
			this.z = this.curve.one,
			this
		},
		n.prototype.getX = function() {
			return this.normalize(),
			this.x.fromRed()
		}
	},
	{
		"../utils": 94,
		"./base": 81,
		"bn.js": 28,
		inherits: 113
	}],
	85 : [function(e, t) {
		"use strict";
		var r = Math.floor;
		function n(e) {
			c.call(this, "short", e),
			this.a = new s(e.a, 16).toRed(this.red),
			this.b = new s(e.b, 16).toRed(this.red),
			this.tinv = this.two.redInvm(),
			this.zeroA = 0 === this.a.fromRed().cmpn(0),
			this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn( - 3),
			this.endo = this._getEndomorphism(e),
			this._endoWnafT1 = [, , , , ],
			this._endoWnafT2 = [, , , , ]
		}
		function i(e, t, r, n) {
			c.BasePoint.call(this, e, "affine"),
			null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new s(t, 16), this.y = new s(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
		}
		function o(e, t, r, n) {
			c.BasePoint.call(this, e, "jacobian"),
			null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new s(0)) : (this.x = new s(t, 16), this.y = new s(r, 16), this.z = new s(n, 16)),
			this.x.red || (this.x = this.x.toRed(this.curve.red)),
			this.y.red || (this.y = this.y.toRed(this.curve.red)),
			this.z.red || (this.z = this.z.toRed(this.curve.red)),
			this.zOne = this.z === this.curve.one
		}
		var a = e("../utils"),
		s = e("bn.js"),
		f = e("inherits"),
		c = e("./base"),
		u = a.assert;
		f(n, c),
		(t.exports = n).prototype._getEndomorphism = function(e) {
			if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
				var t, r;
				if (e.beta) t = new s(e.beta, 16).toRed(this.red);
				else {
					var n = this._getEndoRoots(this.p);
					t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
				}
				if (e.lambda) r = new s(e.lambda, 16);
				else {
					var i = this._getEndoRoots(this.n);
					0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(t)) ? r = i[0] : (r = i[1], u(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
				}
				return {
					beta: t,
					lambda: r,
					basis: e.basis ? e.basis.map(function(e) {
						return {
							a: new s(e.a, 16),
							b: new s(e.b, 16)
						}
					}) : this._getEndoBasis(r)
				}
			}
		},
		n.prototype._getEndoRoots = function(e) {
			var t = e === this.p ? this.red: s.mont(e),
			r = new s(2).toRed(t).redInvm(),
			n = r.redNeg(),
			i = new s(3).toRed(t).redNeg().redSqrt().redMul(r);
			return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
		},
		n.prototype._getEndoBasis = function(e) {
			for (var t, n, i, o, a, f, c, u, d, h, l = this.n.ushrn(r(this.n.bitLength() / 2)), p = e, b = this.n.clone(), y = new s(1), g = new s(0), m = new s(0), v = new s(1), w = 0; 0 !== p.cmpn(0);) {
				h = b.div(p),
				u = b.sub(h.mul(p)),
				d = m.sub(h.mul(y));
				var _ = v.sub(h.mul(g));
				if (!i && u.cmp(l) < 0) t = c.neg(),
				n = y,
				i = u.neg(),
				o = d;
				else if (i && 2 == ++w) break;
				b = p,
				p = c = u,
				m = y,
				y = d,
				v = g,
				g = _
			}
			a = u.neg(),
			f = d;
			var S = i.sqr().add(o.sqr());
			return 0 <= a.sqr().add(f.sqr()).cmp(S) && (a = t, f = n),
			i.negative && (i = i.neg(), o = o.neg()),
			a.negative && (a = a.neg(), f = f.neg()),
			[{
				a: i,
				b: o
			},
			{
				a: a,
				b: f
			}]
		},
		n.prototype._endoSplit = function(e) {
			var t = this.endo.basis,
			r = t[0],
			n = t[1],
			i = n.b.mul(e).divRound(this.n),
			o = r.b.neg().mul(e).divRound(this.n),
			a = i.mul(r.a),
			s = o.mul(n.a),
			f = i.mul(r.b),
			c = o.mul(n.b);
			return {
				k1: e.sub(a).sub(s),
				k2: f.add(c).neg()
			}
		},
		n.prototype.pointFromX = function(e, t) { (e = new s(e, 16)).red || (e = e.toRed(this.red));
			var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
			n = r.redSqrt();
			if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
			var i = n.fromRed().isOdd();
			return (t && !i || !t && i) && (n = n.redNeg()),
			this.point(e, n)
		},
		n.prototype.validate = function(e) {
			if (e.inf) return ! 0;
			var t = e.x,
			r = e.y,
			n = this.a.redMul(t),
			i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
			return 0 === r.redSqr().redISub(i).cmpn(0)
		},
		n.prototype._endoWnafMulAdd = function(e, t, r) {
			for (var n = this._endoWnafT1,
			i = this._endoWnafT2,
			o = 0; o < e.length; o++) {
				var a = this._endoSplit(t[o]),
				s = e[o],
				f = s._getBeta();
				a.k1.negative && (a.k1.ineg(), s = s.neg(!0)),
				a.k2.negative && (a.k2.ineg(), f = f.neg(!0)),
				n[2 * o] = s,
				n[2 * o + 1] = f,
				i[2 * o] = a.k1,
				i[2 * o + 1] = a.k2
			}
			for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0; u < 2 * o; u++) n[u] = null,
			i[u] = null;
			return c
		},
		f(i, c.BasePoint),
		n.prototype.point = function(e, t, r) {
			return new i(this, e, t, r)
		},
		n.prototype.pointFromJSON = function(e, t) {
			return i.fromJSON(this, e, t)
		},
		i.prototype._getBeta = function() {
			if (this.curve.endo) {
				var e = this.precomputed;
				if (e && e.beta) return e.beta;
				var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
				if (e) {
					var r = this.curve,
					n = function(e) {
						return r.point(e.x.redMul(r.endo.beta), e.y)
					}; (e.beta = t).precomputed = {
						beta: null,
						naf: e.naf && {
							wnd: e.naf.wnd,
							points: e.naf.points.map(n)
						},
						doubles: e.doubles && {
							step: e.doubles.step,
							points: e.doubles.points.map(n)
						}
					}
				}
				return t
			}
		},
		i.prototype.toJSON = function() {
			return this.precomputed ? [this.x, this.y, this.precomputed && {
				doubles: this.precomputed.doubles && {
					step: this.precomputed.doubles.step,
					points: this.precomputed.doubles.points.slice(1)
				},
				naf: this.precomputed.naf && {
					wnd: this.precomputed.naf.wnd,
					points: this.precomputed.naf.points.slice(1)
				}
			}] : [this.x, this.y]
		},
		i.fromJSON = function(e, t, r) {
			function n(t) {
				return e.point(t[0], t[1], r)
			}
			"string" == typeof t && (t = JSON.parse(t));
			var i = e.point(t[0], t[1], r);
			if (!t[2]) return i;
			var o = t[2];
			return i.precomputed = {
				beta: null,
				doubles: o.doubles && {
					step: o.doubles.step,
					points: [i].concat(o.doubles.points.map(n))
				},
				naf: o.naf && {
					wnd: o.naf.wnd,
					points: [i].concat(o.naf.points.map(n))
				}
			},
			i
		},
		i.prototype.inspect = function() {
			return this.isInfinity() ? "<EC Point Infinity>": "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
		},
		i.prototype.isInfinity = function() {
			return this.inf
		},
		i.prototype.add = function(e) {
			if (this.inf) return e;
			if (e.inf) return this;
			if (this.eq(e)) return this.dbl();
			if (this.neg().eq(e)) return this.curve.point(null, null);
			if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
			var t = this.y.redSub(e.y);
			0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
			var r = t.redSqr().redISub(this.x).redISub(e.x),
			n = t.redMul(this.x.redSub(r)).redISub(this.y);
			return this.curve.point(r, n)
		},
		i.prototype.dbl = function() {
			if (this.inf) return this;
			var e = this.y.redAdd(this.y);
			if (0 === e.cmpn(0)) return this.curve.point(null, null);
			var t = this.curve.a,
			r = this.x.redSqr(),
			n = e.redInvm(),
			i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
			o = i.redSqr().redISub(this.x.redAdd(this.x)),
			a = i.redMul(this.x.redSub(o)).redISub(this.y);
			return this.curve.point(o, a)
		},
		i.prototype.getX = function() {
			return this.x.fromRed()
		},
		i.prototype.getY = function() {
			return this.y.fromRed()
		},
		i.prototype.mul = function(e) {
			return e = new s(e, 16),
			this.isInfinity() ? this: this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
		},
		i.prototype.mulAdd = function(e, t, r) {
			var n = [this, t],
			i = [e, r];
			return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
		},
		i.prototype.jmulAdd = function(e, t, r) {
			var n = [this, t],
			i = [e, r];
			return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
		},
		i.prototype.eq = function(e) {
			return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
		},
		i.prototype.neg = function(e) {
			if (this.inf) return this;
			var t = this.curve.point(this.x, this.y.redNeg());
			if (e && this.precomputed) {
				var r = this.precomputed,
				n = function(e) {
					return e.neg()
				};
				t.precomputed = {
					naf: r.naf && {
						wnd: r.naf.wnd,
						points: r.naf.points.map(n)
					},
					doubles: r.doubles && {
						step: r.doubles.step,
						points: r.doubles.points.map(n)
					}
				}
			}
			return t
		},
		i.prototype.toJ = function() {
			return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
		},
		f(o, c.BasePoint),
		n.prototype.jpoint = function(e, t, r) {
			return new o(this, e, t, r)
		},
		o.prototype.toP = function() {
			if (this.isInfinity()) return this.curve.point(null, null);
			var e = this.z.redInvm(),
			t = e.redSqr(),
			r = this.x.redMul(t),
			n = this.y.redMul(t).redMul(e);
			return this.curve.point(r, n)
		},
		o.prototype.neg = function() {
			return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
		},
		o.prototype.add = function(e) {
			if (this.isInfinity()) return e;
			if (e.isInfinity()) return this;
			var t = e.z.redSqr(),
			r = this.z.redSqr(),
			n = this.x.redMul(t),
			i = e.x.redMul(r),
			o = this.y.redMul(t.redMul(e.z)),
			a = e.y.redMul(r.redMul(this.z)),
			s = n.redSub(i),
			f = o.redSub(a);
			if (0 === s.cmpn(0)) return 0 === f.cmpn(0) ? this.dbl() : this.curve.jpoint(null, null, null);
			var c = s.redSqr(),
			u = c.redMul(s),
			d = n.redMul(c),
			h = f.redSqr().redIAdd(u).redISub(d).redISub(d),
			l = f.redMul(d.redISub(h)).redISub(o.redMul(u)),
			p = this.z.redMul(e.z).redMul(s);
			return this.curve.jpoint(h, l, p)
		},
		o.prototype.mixedAdd = function(e) {
			if (this.isInfinity()) return e.toJ();
			if (e.isInfinity()) return this;
			var t = this.z.redSqr(),
			r = this.x,
			n = e.x.redMul(t),
			i = this.y,
			o = e.y.redMul(t).redMul(this.z),
			a = r.redSub(n),
			s = i.redSub(o);
			if (0 === a.cmpn(0)) return 0 === s.cmpn(0) ? this.dbl() : this.curve.jpoint(null, null, null);
			var f = a.redSqr(),
			c = f.redMul(a),
			u = r.redMul(f),
			d = s.redSqr().redIAdd(c).redISub(u).redISub(u),
			h = s.redMul(u.redISub(d)).redISub(i.redMul(c)),
			l = this.z.redMul(a);
			return this.curve.jpoint(d, h, l)
		},
		o.prototype.dblp = function(e) {
			if (0 === e) return this;
			if (this.isInfinity()) return this;
			if (!e) return this.dbl();
			if (this.curve.zeroA || this.curve.threeA) {
				for (var t = this,
				r = 0; r < e; r++) t = t.dbl();
				return t
			}
			var n = this.curve.a,
			i = this.curve.tinv,
			o = this.x,
			a = this.y,
			s = this.z,
			f = s.redSqr().redSqr(),
			c = a.redAdd(a);
			for (r = 0; r < e; r++) {
				var u = o.redSqr(),
				d = c.redSqr(),
				h = d.redSqr(),
				l = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f)),
				p = o.redMul(d),
				b = l.redSqr().redISub(p.redAdd(p)),
				y = p.redISub(b),
				g = l.redMul(y);
				g = g.redIAdd(g).redISub(h);
				var m = c.redMul(s);
				r + 1 < e && (f = f.redMul(h)),
				o = b,
				s = m,
				c = g
			}
			return this.curve.jpoint(o, c.redMul(i), s)
		},
		o.prototype.dbl = function() {
			return this.isInfinity() ? this: this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
		},
		o.prototype._zeroDbl = function() {
			var e, t, r;
			if (this.zOne) {
				var n = this.x.redSqr(),
				i = this.y.redSqr(),
				o = i.redSqr(),
				a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
				a = a.redIAdd(a);
				var s = n.redAdd(n).redIAdd(n),
				f = s.redSqr().redISub(a).redISub(a),
				c = o.redIAdd(o);
				c = (c = c.redIAdd(c)).redIAdd(c),
				e = f,
				t = s.redMul(a.redISub(f)).redISub(c),
				r = this.y.redAdd(this.y)
			} else {
				var u = this.x.redSqr(),
				d = this.y.redSqr(),
				h = d.redSqr(),
				l = this.x.redAdd(d).redSqr().redISub(u).redISub(h);
				l = l.redIAdd(l);
				var p = u.redAdd(u).redIAdd(u),
				b = p.redSqr(),
				y = h.redIAdd(h);
				y = (y = y.redIAdd(y)).redIAdd(y),
				e = b.redISub(l).redISub(l),
				t = p.redMul(l.redISub(e)).redISub(y),
				r = (r = this.y.redMul(this.z)).redIAdd(r)
			}
			return this.curve.jpoint(e, t, r)
		},
		o.prototype._threeDbl = function() {
			var e, t, r;
			if (this.zOne) {
				var n = this.x.redSqr(),
				i = this.y.redSqr(),
				o = i.redSqr(),
				a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
				a = a.redIAdd(a);
				var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
				f = s.redSqr().redISub(a).redISub(a);
				e = f;
				var c = o.redIAdd(o);
				c = (c = c.redIAdd(c)).redIAdd(c),
				t = s.redMul(a.redISub(f)).redISub(c),
				r = this.y.redAdd(this.y)
			} else {
				var u = this.z.redSqr(),
				d = this.y.redSqr(),
				h = this.x.redMul(d),
				l = this.x.redSub(u).redMul(this.x.redAdd(u));
				l = l.redAdd(l).redIAdd(l);
				var p = h.redIAdd(h),
				b = (p = p.redIAdd(p)).redAdd(p);
				e = l.redSqr().redISub(b),
				r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);
				var y = d.redSqr();
				y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y),
				t = l.redMul(p.redISub(e)).redISub(y)
			}
			return this.curve.jpoint(e, t, r)
		},
		o.prototype._dbl = function() {
			var e = this.curve.a,
			t = this.x,
			r = this.y,
			n = this.z,
			i = n.redSqr().redSqr(),
			o = t.redSqr(),
			a = r.redSqr(),
			s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
			f = t.redAdd(t),
			c = (f = f.redIAdd(f)).redMul(a),
			u = s.redSqr().redISub(c.redAdd(c)),
			d = c.redISub(u),
			h = a.redSqr();
			h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
			var l = s.redMul(d).redISub(h),
			p = r.redAdd(r).redMul(n);
			return this.curve.jpoint(u, l, p)
		},
		o.prototype.trpl = function() {
			if (!this.curve.zeroA) return this.dbl().add(this);
			var e = this.x.redSqr(),
			t = this.y.redSqr(),
			r = this.z.redSqr(),
			n = t.redSqr(),
			i = e.redAdd(e).redIAdd(e),
			o = i.redSqr(),
			a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
			s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
			f = n.redIAdd(n);
			f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
			var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
			u = t.redMul(c);
			u = (u = u.redIAdd(u)).redIAdd(u);
			var d = this.x.redMul(s).redISub(u);
			d = (d = d.redIAdd(d)).redIAdd(d);
			var h = this.y.redMul(c.redMul(f.redISub(c)).redISub(a.redMul(s)));
			h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
			var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
			return this.curve.jpoint(d, h, l)
		},
		o.prototype.mul = function(e, t) {
			return e = new s(e, t),
			this.curve._wnafMul(this, e)
		},
		o.prototype.eq = function(e) {
			if ("affine" === e.type) return this.eq(e.toJ());
			if (this === e) return ! 0;
			var t = this.z.redSqr(),
			r = e.z.redSqr();
			if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return ! 1;
			var n = t.redMul(this.z),
			i = r.redMul(e.z);
			return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
		},
		o.prototype.eqXToP = function(e) {
			var t = this.z.redSqr(),
			r = e.toRed(this.curve.red).redMul(t);
			if (0 === this.x.cmp(r)) return ! 0;
			for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
				if (n.iadd(this.curve.n), 0 <= n.cmp(this.curve.p)) return ! 1;
				if (r.redIAdd(i), 0 === this.x.cmp(r)) return ! 0
			}
		},
		o.prototype.inspect = function() {
			return this.isInfinity() ? "<EC JPoint Infinity>": "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
		},
		o.prototype.isInfinity = function() {
			return 0 === this.z.cmpn(0)
		}
	},
	{
		"../utils": 94,
		"./base": 81,
		"bn.js": 28,
		inherits: 113
	}],
	86 : [function(e, t, r) {
		"use strict";
		function n(e) {
			this.curve = "short" === e.type ? new f.short(e) : "edwards" === e.type ? new f.edwards(e) : new f.mont(e),
			this.g = this.curve.g,
			this.n = this.curve.n,
			this.hash = e.hash,
			c(this.g.validate(), "Invalid curve"),
			c(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
		}
		function i(e, t) {
			Object.defineProperty(a, e, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					var r = new n(t);
					return Object.defineProperty(a, e, {
						configurable: !0,
						enumerable: !0,
						value: r
					}),
					r
				}
			})
		}
		var o, a = r,
		s = e("hash.js"),
		f = e("./curve"),
		c = e("./utils").assert;
		a.PresetCurve = n,
		i("p192", {
			type: "short",
			prime: "p192",
			p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
			a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
			b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
			n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
			hash: s.sha256,
			gRed: !1,
			g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
		}),
		i("p224", {
			type: "short",
			prime: "p224",
			p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
			a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
			b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
			n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
			hash: s.sha256,
			gRed: !1,
			g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
		}),
		i("p256", {
			type: "short",
			prime: null,
			p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
			a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
			b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
			n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
			hash: s.sha256,
			gRed: !1,
			g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
		}),
		i("p384", {
			type: "short",
			prime: null,
			p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
			a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
			b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
			n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
			hash: s.sha384,
			gRed: !1,
			g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
		}),
		i("p521", {
			type: "short",
			prime: null,
			p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
			a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
			b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
			n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
			hash: s.sha512,
			gRed: !1,
			g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
		}),
		i("curve25519", {
			type: "mont",
			prime: "p25519",
			p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
			a: "76d06",
			b: "1",
			n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
			hash: s.sha256,
			gRed: !1,
			g: ["9"]
		}),
		i("ed25519", {
			type: "edwards",
			prime: "p25519",
			p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
			a: "-1",
			c: "1",
			d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
			n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
			hash: s.sha256,
			gRed: !1,
			g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
		});
		try {
			o = e("./precomputed/secp256k1")
		} catch(t) {
			o = void 0
		}
		i("secp256k1", {
			type: "short",
			prime: "k256",
			p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
			a: "0",
			b: "7",
			n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
			h: "1",
			hash: s.sha256,
			beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
			lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
			basis: [{
				a: "3086d221a7d46bcde86c90e49284eb15",
				b: "-e4437ed6010e88286f547fa90abfe4c3"
			},
			{
				a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
				b: "3086d221a7d46bcde86c90e49284eb15"
			}],
			gRed: !1,
			g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", o]
		})
	},
	{
		"./curve": 83,
		"./precomputed/secp256k1": 93,
		"./utils": 94,
		"hash.js": 99
	}],
	87 : [function(e, t) {
		"use strict";
		function r(e) {
			return this instanceof r ? ("string" == typeof e && (f(a.hasOwnProperty(e), "Unknown curve " + e), e = a[e]), e instanceof a.PresetCurve && (e = {
				curve: e
			}), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), void(this.hash = e.hash || e.curve.hash)) : new r(e)
		}
		var n = e("bn.js"),
		i = e("hmac-drbg"),
		o = e("../utils"),
		a = e("../curves"),
		s = e("brorand"),
		f = o.assert,
		c = e("./key"),
		u = e("./signature"); (t.exports = r).prototype.keyPair = function(e) {
			return new c(this, e)
		},
		r.prototype.keyFromPrivate = function(e, t) {
			return c.fromPrivate(this, e, t)
		},
		r.prototype.keyFromPublic = function(e, t) {
			return c.fromPublic(this, e, t)
		},
		r.prototype.genKeyPair = function(e) {
			e = e || {};
			for (var t = new i({
				hash: this.hash,
				pers: e.pers,
				persEnc: e.persEnc || "utf8",
				entropy: e.entropy || s(this.hash.hmacStrength),
				entropyEnc: e.entropy && e.entropyEnc || "utf8",
				nonce: this.n.toArray()
			}), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
				var a = new n(t.generate(r));
				if (! (0 < a.cmp(o))) return a.iaddn(1),
				this.keyFromPrivate(a)
			}
		},
		r.prototype._truncateToN = function(e, t) {
			var r = 8 * e.byteLength() - this.n.bitLength();
			return 0 < r && (e = e.ushrn(r)),
			!t && 0 <= e.cmp(this.n) ? e.sub(this.n) : e
		},
		r.prototype.sign = function(e, t, r, o) {
			"object" == typeof r && (o = r, r = null),
			o = o || {},
			t = this.keyFromPrivate(t, r),
			e = this._truncateToN(new n(e, 16));
			for (var a, s = this.n.byteLength(), f = t.getPrivate().toArray("be", s), c = e.toArray("be", s), d = new i({
				hash: this.hash,
				entropy: f,
				nonce: c,
				pers: o.pers,
				persEnc: o.persEnc || "utf8"
			}), h = this.n.sub(new n(1)), l = 0;; l++) if (a = o.k ? o.k(l) : new n(d.generate(this.n.byteLength())), !((a = this._truncateToN(a, !0)).cmpn(1) <= 0 || 0 <= a.cmp(h))) {
				var p = this.g.mul(a);
				if (!p.isInfinity()) {
					var b = p.getX(),
					y = b.umod(this.n);
					if (0 !== y.cmpn(0)) {
						var g = a.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
						if (0 !== (g = g.umod(this.n)).cmpn(0)) {
							var m = (p.getY().isOdd() ? 1 : 0) | (0 === b.cmp(y) ? 0 : 2);
							return o.canonical && 0 < g.cmp(this.nh) && (g = this.n.sub(g), m ^= 1),
							new u({
								r: y,
								s: g,
								recoveryParam: m
							})
						}
					}
				}
			}
		},
		r.prototype.verify = function(e, t, r, i) {
			e = this._truncateToN(new n(e, 16)),
			r = this.keyFromPublic(r, i);
			var o = (t = new u(t, "hex")).r,
			a = t.s;
			if (o.cmpn(1) < 0 || 0 <= o.cmp(this.n)) return ! 1;
			if (a.cmpn(1) < 0 || 0 <= a.cmp(this.n)) return ! 1;
			var s, f = a.invm(this.n),
			c = f.mul(e).umod(this.n),
			d = f.mul(o).umod(this.n);
			return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, r.getPublic(), d)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(c, r.getPublic(), d)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
		},
		r.prototype.recoverPubKey = function(e, t, r, i) {
			f((3 & r) === r, "The recovery param is more than two bits"),
			t = new u(t, i);
			var o = this.n,
			a = new n(e),
			s = t.r,
			c = t.s,
			d = 1 & r,
			h = r >> 1;
			if (0 <= s.cmp(this.curve.p.umod(this.curve.n)) && h) throw new Error("Unable to find sencond key candinate");
			s = h ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d);
			var l = t.r.invm(o),
			p = o.sub(a).mul(l).umod(o),
			b = c.mul(l).umod(o);
			return this.g.mulAdd(p, s, b)
		},
		r.prototype.getKeyRecoveryParam = function(e, t, r, n) {
			if (null !== (t = new u(t, n)).recoveryParam) return t.recoveryParam;
			for (var i = 0; i < 4; i++) {
				var o;
				try {
					o = this.recoverPubKey(e, t, i)
				} catch(e) {
					continue
				}
				if (o.eq(r)) return i
			}
			throw new Error("Unable to find valid recovery factor")
		}
	},
	{
		"../curves": 86,
		"../utils": 94,
		"./key": 88,
		"./signature": 89,
		"bn.js": 28,
		brorand: 29,
		"hmac-drbg": 111
	}],
	88 : [function(e, t) {
		"use strict";
		function r(e, t) {
			this.ec = e,
			this.priv = null,
			this.pub = null,
			t.priv && this._importPrivate(t.priv, t.privEnc),
			t.pub && this._importPublic(t.pub, t.pubEnc)
		}
		var n = e("bn.js"),
		i = e("../utils").assert; (t.exports = r).fromPublic = function(e, t, n) {
			return t instanceof r ? t: new r(e, {
				pub: t,
				pubEnc: n
			})
		},
		r.fromPrivate = function(e, t, n) {
			return t instanceof r ? t: new r(e, {
				priv: t,
				privEnc: n
			})
		},
		r.prototype.validate = function() {
			var e = this.getPublic();
			return e.isInfinity() ? {
				result: !1,
				reason: "Invalid public key"
			}: e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
				result: !0,
				reason: null
			}: {
				result: !1,
				reason: "Public key * N != O"
			}: {
				result: !1,
				reason: "Public key is not a point"
			}
		},
		r.prototype.getPublic = function(e, t) {
			return "string" == typeof e && (t = e, e = null),
			this.pub || (this.pub = this.ec.g.mul(this.priv)),
			t ? this.pub.encode(t, e) : this.pub
		},
		r.prototype.getPrivate = function(e) {
			return "hex" === e ? this.priv.toString(16, 2) : this.priv
		},
		r.prototype._importPrivate = function(e, t) {
			this.priv = new n(e, t || 16),
			this.priv = this.priv.umod(this.ec.curve.n)
		},
		r.prototype._importPublic = function(e, t) {
			return e.x || e.y ? ("mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y))) : void(this.pub = this.ec.curve.decodePoint(e, t))
		},
		r.prototype.derive = function(e) {
			return e.mul(this.priv).getX()
		},
		r.prototype.sign = function(e, t, r) {
			return this.ec.sign(e, this, t, r)
		},
		r.prototype.verify = function(e, t) {
			return this.ec.verify(e, t, this)
		},
		r.prototype.inspect = function() {
			return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
		}
	},
	{
		"../utils": 94,
		"bn.js": 28
	}],
	89 : [function(e, t) {
		"use strict";
		function r(e, t) {
			return e instanceof r ? e: void(this._importDER(e, t) || (c(e.r && e.s, "Signature without r or s"), this.r = new s(e.r, 16), this.s = new s(e.s, 16), this.recoveryParam = void 0 === e.recoveryParam ? null: e.recoveryParam))
		}
		function n() {
			this.place = 0
		}
		function i(e, t) {
			var r = e[t.place++];
			if (! (128 & r)) return r;
			for (var n = 0,
			i = 0,
			o = t.place; i < (15 & r); i++, o++) n <<= 8,
			n |= e[o];
			return t.place = o,
			n
		}
		function o(e) {
			for (var t = 0,
			r = e.length - 1; ! e[t] && !(128 & e[t + 1]) && t < r;) t++;
			return 0 === t ? e: e.slice(t)
		}
		function a(e, t) {
			if (t < 128) e.push(t);
			else {
				var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
				for (e.push(128 | r); --r;) e.push(255 & t >>> (r << 3));
				e.push(t)
			}
		}
		var s = e("bn.js"),
		f = e("../utils"),
		c = f.assert; (t.exports = r).prototype._importDER = function(e, t) {
			e = f.toArray(e, t);
			var r = new n;
			if (48 !== e[r.place++]) return ! 1;
			if (i(e, r) + r.place !== e.length) return ! 1;
			if (2 !== e[r.place++]) return ! 1;
			var o = i(e, r),
			a = e.slice(r.place, o + r.place);
			if (r.place += o, 2 !== e[r.place++]) return ! 1;
			var c = i(e, r);
			if (e.length !== c + r.place) return ! 1;
			var u = e.slice(r.place, c + r.place);
			return 0 === a[0] && 128 & a[1] && (a = a.slice(1)),
			0 === u[0] && 128 & u[1] && (u = u.slice(1)),
			this.r = new s(a),
			this.s = new s(u),
			!(this.recoveryParam = null)
		},
		r.prototype.toDER = function(e) {
			var t = this.r.toArray(),
			r = this.s.toArray();
			for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = o(t), r = o(r); ! (r[0] || 128 & r[1]);) r = r.slice(1);
			var n = [2];
			a(n, t.length),
			(n = n.concat(t)).push(2),
			a(n, r.length);
			var i = n.concat(r),
			s = [48];
			return a(s, i.length),
			s = s.concat(i),
			f.encode(s, e)
		}
	},
	{
		"../utils": 94,
		"bn.js": 28
	}],
	90 : [function(e, t) {
		"use strict";
		var r = Math.ceil;
		function n(e) {
			if (s("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof n)) return new n(e);
			e = o[e].curve,
			this.curve = e,
			this.g = e.g,
			this.g.precompute(e.n.bitLength() + 1),
			this.pointClass = e.point().constructor,
			this.encodingLength = r(e.n.bitLength() / 8),
			this.hash = i.sha512
		}
		var i = e("hash.js"),
		o = e("../curves"),
		a = e("../utils"),
		s = a.assert,
		f = a.parseBytes,
		c = e("./key"),
		u = e("./signature"); (t.exports = n).prototype.sign = function(e, t) {
			e = f(e);
			var r = this.keyFromSecret(t),
			n = this.hashInt(r.messagePrefix(), e),
			i = this.g.mul(n),
			o = this.encodePoint(i),
			a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
			s = n.add(a).umod(this.curve.n);
			return this.makeSignature({
				R: i,
				S: s,
				Rencoded: o
			})
		},
		n.prototype.verify = function(e, t, r) {
			e = f(e),
			t = this.makeSignature(t);
			var n = this.keyFromPublic(r),
			i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
			o = this.g.mul(t.S());
			return t.R().add(n.pub().mul(i)).eq(o)
		},
		n.prototype.hashInt = function() {
			for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
			return a.intFromLE(e.digest()).umod(this.curve.n)
		},
		n.prototype.keyFromPublic = function(e) {
			return c.fromPublic(this, e)
		},
		n.prototype.keyFromSecret = function(e) {
			return c.fromSecret(this, e)
		},
		n.prototype.makeSignature = function(e) {
			return e instanceof u ? e: new u(this, e)
		},
		n.prototype.encodePoint = function(e) {
			var t = e.getY().toArray("le", this.encodingLength);
			return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0,
			t
		},
		n.prototype.decodePoint = function(e) {
			var t = (e = a.parseBytes(e)).length - 1,
			r = e.slice(0, t).concat( - 129 & e[t]),
			n = 0 != (128 & e[t]),
			i = a.intFromLE(r);
			return this.curve.pointFromY(i, n)
		},
		n.prototype.encodeInt = function(e) {
			return e.toArray("le", this.encodingLength)
		},
		n.prototype.decodeInt = function(e) {
			return a.intFromLE(e)
		},
		n.prototype.isPoint = function(e) {
			return e instanceof this.pointClass
		}
	},
	{
		"../curves": 86,
		"../utils": 94,
		"./key": 91,
		"./signature": 92,
		"hash.js": 99
	}],
	91 : [function(e, t) {
		"use strict";
		function r(e, t) {
			this.eddsa = e,
			this._secret = o(t.secret),
			e.isPoint(t.pub) ? this._pub = t.pub: this._pubBytes = o(t.pub)
		}
		var n = e("../utils"),
		i = n.assert,
		o = n.parseBytes,
		a = n.cachedProperty;
		r.fromPublic = function(e, t) {
			return t instanceof r ? t: new r(e, {
				pub: t
			})
		},
		r.fromSecret = function(e, t) {
			return t instanceof r ? t: new r(e, {
				secret: t
			})
		},
		r.prototype.secret = function() {
			return this._secret
		},
		a(r, "pubBytes",
		function() {
			return this.eddsa.encodePoint(this.pub())
		}),
		a(r, "pub",
		function() {
			return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
		}),
		a(r, "privBytes",
		function() {
			var e = this.eddsa,
			t = this.hash(),
			r = e.encodingLength - 1,
			n = t.slice(0, e.encodingLength);
			return n[0] &= 248,
			n[r] &= 127,
			n[r] |= 64,
			n
		}),
		a(r, "priv",
		function() {
			return this.eddsa.decodeInt(this.privBytes())
		}),
		a(r, "hash",
		function() {
			return this.eddsa.hash().update(this.secret()).digest()
		}),
		a(r, "messagePrefix",
		function() {
			return this.hash().slice(this.eddsa.encodingLength)
		}),
		r.prototype.sign = function(e) {
			return i(this._secret, "KeyPair can only verify"),
			this.eddsa.sign(e, this)
		},
		r.prototype.verify = function(e, t) {
			return this.eddsa.verify(e, t, this)
		},
		r.prototype.getSecret = function(e) {
			return i(this._secret, "KeyPair is public only"),
			n.encode(this.secret(), e)
		},
		r.prototype.getPublic = function(e) {
			return n.encode(this.pubBytes(), e)
		},
		t.exports = r
	},
	{
		"../utils": 94
	}],
	92 : [function(e, t) {
		"use strict";
		function r(e, t) {
			this.eddsa = e,
			"object" != typeof t && (t = s(t)),
			Array.isArray(t) && (t = {
				R: t.slice(0, e.encodingLength),
				S: t.slice(e.encodingLength)
			}),
			o(t.R && t.S, "Signature without R or S"),
			e.isPoint(t.R) && (this._R = t.R),
			t.S instanceof n && (this._S = t.S),
			this._Rencoded = Array.isArray(t.R) ? t.R: t.Rencoded,
			this._Sencoded = Array.isArray(t.S) ? t.S: t.Sencoded
		}
		var n = e("bn.js"),
		i = e("../utils"),
		o = i.assert,
		a = i.cachedProperty,
		s = i.parseBytes;
		a(r, "S",
		function() {
			return this.eddsa.decodeInt(this.Sencoded())
		}),
		a(r, "R",
		function() {
			return this.eddsa.decodePoint(this.Rencoded())
		}),
		a(r, "Rencoded",
		function() {
			return this.eddsa.encodePoint(this.R())
		}),
		a(r, "Sencoded",
		function() {
			return this.eddsa.encodeInt(this.S())
		}),
		r.prototype.toBytes = function() {
			return this.Rencoded().concat(this.Sencoded())
		},
		r.prototype.toHex = function() {
			return i.encode(this.toBytes(), "hex").toUpperCase()
		},
		t.exports = r
	},
	{
		"../utils": 94,
		"bn.js": 28
	}],
	93 : [function(e, t) {
		t.exports = {
			doubles: {
				step: 4,
				points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
			},
			naf: {
				wnd: 7,
				points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
			}
		}
	},
	{}],
	94 : [function(e, t, r) {
		"use strict";
		var n = r,
		i = e("bn.js"),
		o = e("minimalistic-assert"),
		a = e("minimalistic-crypto-utils");
		n.assert = o,
		n.toArray = a.toArray,
		n.zero2 = a.zero2,
		n.toHex = a.toHex,
		n.encode = a.encode,
		n.getNAF = function(e, t, r) {
			var n = Array(Math.max(e.bitLength(), r) + 1);
			n.fill(0);
			for (var i = 1 << t + 1,
			o = e.clone(), a = 0; a < n.length; a++) {
				var s, f = o.andln(i - 1);
				o.isOdd() ? (s = (i >> 1) - 1 < f ? (i >> 1) - f: f, o.isubn(s)) : s = 0,
				n[a] = s,
				o.iushrn(1)
			}
			return n
		},
		n.getJSF = function(e, t) {
			var r = [[], []];
			e = e.clone(),
			t = t.clone();
			for (var n = 0,
			i = 0; 0 < e.cmpn( - n) || 0 < t.cmpn( - i);) {
				var o, a, s, f = 3 & e.andln(3) + n,
				c = 3 & t.andln(3) + i;
				3 == f && (f = -1),
				3 === c && (c = -1),
				o = 0 == (1 & f) ? 0 : 3 != (s = 7 & e.andln(7) + n) && 5 !== s || 2 !== c ? f: -f,
				r[0].push(o),
				a = 0 == (1 & c) ? 0 : 3 != (s = 7 & t.andln(7) + i) && 5 !== s || 2 !== f ? c: -c,
				r[1].push(a),
				2 * n === o + 1 && (n = 1 - n),
				2 * i === a + 1 && (i = 1 - i),
				e.iushrn(1),
				t.iushrn(1)
			}
			return r
		},
		n.cachedProperty = function(e, t, r) {
			var n = "_" + t;
			e.prototype[t] = function() {
				return void 0 === this[n] ? this[n] = r.call(this) : this[n]
			}
		},
		n.parseBytes = function(e) {
			return "string" == typeof e ? n.toArray(e, "hex") : e
		},
		n.intFromLE = function(e) {
			return new i(e, "hex", "le")
		}
	},
	{
		"bn.js": 28,
		"minimalistic-assert": 118,
		"minimalistic-crypto-utils": 119
	}],
	95 : [function(e, t) {
		t.exports = {
			_args: [["elliptic@6.5.2", "/Users/giangnguyen/Development/amanotes/ama-sdk"]],
			_development: !0,
			_from: "elliptic@6.5.2",
			_id: "elliptic@6.5.2",
			_inBundle: !1,
			_integrity: "sha512-f4x70okzZbIQl/NSRLkI/+tteV/9WqL98zx+SQ69KbXxmVrmjwsNUPn/gYJJ0sHvEak24cZgHIPegRePAtA/xw==",
			_location: "/elliptic",
			_phantomChildren: {},
			_requested: {
				type: "version",
				registry: !0,
				raw: "elliptic@6.5.2",
				name: "elliptic",
				escapedName: "elliptic",
				rawSpec: "6.5.2",
				saveSpec: null,
				fetchSpec: "6.5.2"
			},
			_requiredBy: ["/browserify-sign", "/create-ecdh"],
			_resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.5.2.tgz",
			_spec: "6.5.2",
			_where: "/Users/giangnguyen/Development/amanotes/ama-sdk",
			author: {
				name: "Fedor Indutny",
				email: "fedor@indutny.com"
			},
			bugs: {
				url: "https://github.com/indutny/elliptic/issues"
			},
			dependencies: {
				"bn.js": "^4.4.0",
				brorand: "^1.0.1",
				"hash.js": "^1.0.0",
				"hmac-drbg": "^1.0.0",
				inherits: "^2.0.1",
				"minimalistic-assert": "^1.0.0",
				"minimalistic-crypto-utils": "^1.0.0"
			},
			description: "EC cryptography",
			devDependencies: {
				brfs: "^1.4.3",
				coveralls: "^3.0.8",
				grunt: "^1.0.4",
				"grunt-browserify": "^5.0.0",
				"grunt-cli": "^1.2.0",
				"grunt-contrib-connect": "^1.0.0",
				"grunt-contrib-copy": "^1.0.0",
				"grunt-contrib-uglify": "^1.0.1",
				"grunt-mocha-istanbul": "^3.0.1",
				"grunt-saucelabs": "^9.0.1",
				istanbul: "^0.4.2",
				jscs: "^3.0.7",
				jshint: "^2.10.3",
				mocha: "^6.2.2"
			},
			files: ["lib"],
			homepage: "https://github.com/indutny/elliptic",
			keywords: ["EC", "Elliptic", "curve", "Cryptography"],
			license: "MIT",
			main: "lib/elliptic.js",
			name: "elliptic",
			repository: {
				type: "git",
				url: "git+ssh://git@github.com/indutny/elliptic.git"
			},
			scripts: {
				jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
				jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
				lint: "npm run jscs && npm run jshint",
				test: "npm run lint && npm run unit",
				unit: "istanbul test _mocha --reporter=spec test/index.js",
				version: "grunt dist && git add dist/"
			},
			version: "6.5.2"
		}
	},
	{}],
	96 : [function(e, t) {
		function r() {
			this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = u(null), this._eventsCount = 0),
			this._maxListeners = this._maxListeners || void 0
		}
		function n(e) {
			return void 0 === e._maxListeners ? r.defaultMaxListeners: e._maxListeners
		}
		function i(e, t, r, i) {
			var o, a, s;
			if ("function" != typeof r) throw new TypeError('"listener" argument must be a function');
			if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, r.listener ? r.listener: r), a = e._events), s = a[t]) : (a = e._events = u(null), e._eventsCount = 0), s) {
				if ("function" == typeof s ? s = a[t] = i ? [r, s] : [s, r] : i ? s.unshift(r) : s.push(r), !s.warned && (o = n(e)) && 0 < o && s.length > o) {
					s.warned = !0;
					var f = new Error("Possible EventEmitter memory leak detected. " + s.length + ' "' + t + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
					f.name = "MaxListenersExceededWarning",
					f.emitter = e,
					f.type = t,
					f.count = s.length,
					"object" == typeof console && console.warn && console.warn("%s: %s", f.name, f.message)
				}
			} else s = a[t] = r,
			++e._eventsCount;
			return e
		}
		function o() {
			if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
			case 0:
				return this.listener.call(this.target);
			case 1:
				return this.listener.call(this.target, arguments[0]);
			case 2:
				return this.listener.call(this.target, arguments[0], arguments[1]);
			case 3:
				return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
			default:
				for (var e = Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				this.listener.apply(this.target, e)
			}
		}
		function a(e, t, r) {
			var n = {
				fired: !1,
				wrapFn: void 0,
				target: e,
				type: t,
				listener: r
			},
			i = h.call(o, n);
			return i.listener = r,
			n.wrapFn = i
		}
		function s(e, t, r) {
			var n = e._events;
			if (!n) return [];
			var i = n[t];
			return i ? "function" == typeof i ? r ? [i.listener || i] : [i] : r ?
			function(e) {
				for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
				return t
			} (i) : c(i, i.length) : []
		}
		function f(e) {
			var t = this._events;
			if (t) {
				var r = t[e];
				if ("function" == typeof r) return 1;
				if (r) return r.length
			}
			return 0
		}
		function c(e, t) {
			for (var r = Array(t), n = 0; n < t; ++n) r[n] = e[n];
			return r
		}
		var u = Object.create ||
		function(e) {
			function t() {}
			return t.prototype = e,
			new t
		},
		d = Object.keys ||
		function(e) {
			var t = [];
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
			return r
		},
		h = Function.prototype.bind ||
		function(e) {
			var t = this;
			return function() {
				return t.apply(e, arguments)
			}
		}; ((t.exports = r).EventEmitter = r).prototype._events = void 0,
		r.prototype._maxListeners = void 0;
		var l, p = 10;
		try {
			var b = {};
			Object.defineProperty && Object.defineProperty(b, "x", {
				value: 0
			}),
			l = 0 === b.x
		} catch(e) {
			l = !1
		}
		l ? Object.defineProperty(r, "defaultMaxListeners", {
			enumerable: !0,
			get: function() {
				return p
			},
			set: function(e) {
				if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
				p = e
			}
		}) : r.defaultMaxListeners = p,
		r.prototype.setMaxListeners = function(e) {
			if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
			return this._maxListeners = e,
			this
		},
		r.prototype.getMaxListeners = function() {
			return n(this)
		},
		r.prototype.emit = function(e) {
			var t, r, n, i, o, a, s = "error" === e;
			if (a = this._events) s = s && null == a.error;
			else if (!s) return ! 1;
			if (s) {
				if (1 < arguments.length && (t = arguments[1]), t instanceof Error) throw t;
				var f = new Error('Unhandled "error" event. (' + t + ")");
				throw f.context = t,
				f
			}
			if (! (r = a[e])) return ! 1;
			var u = "function" == typeof r;
			switch (n = arguments.length) {
			case 1:
				!
				function(e, t, r) {
					if (u) e.call(r);
					else for (var n = e.length,
					i = c(e, n), o = 0; o < n; ++o) i[o].call(r)
				} (r, 0, this);
				break;
			case 2:
				!
				function(e, t, r, n) {
					if (t) e.call(r, n);
					else for (var i = e.length,
					o = c(e, i), a = 0; a < i; ++a) o[a].call(r, n)
				} (r, u, this, arguments[1]);
				break;
			case 3:
				!
				function(e, t, r, n, i) {
					if (t) e.call(r, n, i);
					else for (var o = e.length,
					a = c(e, o), s = 0; s < o; ++s) a[s].call(r, n, i)
				} (r, u, this, arguments[1], arguments[2]);
				break;
			case 4:
				!
				function(e, t, r, n, i, o) {
					if (t) e.call(r, n, i, o);
					else for (var a = e.length,
					s = c(e, a), f = 0; f < a; ++f) s[f].call(r, n, i, o)
				} (r, u, this, arguments[1], arguments[2], arguments[3]);
				break;
			default:
				for (i = Array(n - 1), o = 1; o < n; o++) i[o - 1] = arguments[o]; !
				function(e, t, r, n) {
					if (u) e.apply(r, n);
					else for (var i = e.length,
					o = c(e, i), a = 0; a < i; ++a) o[a].apply(r, n)
				} (r, 0, this, i)
			}
			return ! 0
		},
		r.prototype.on = r.prototype.addListener = function(e, t) {
			return i(this, e, t, !1)
		},
		r.prototype.prependListener = function(e, t) {
			return i(this, e, t, !0)
		},
		r.prototype.once = function(e, t) {
			if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
			return this.on(e, a(this, e, t)),
			this
		},
		r.prototype.prependOnceListener = function(e, t) {
			if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
			return this.prependListener(e, a(this, e, t)),
			this
		},
		r.prototype.removeListener = function(e, t) {
			var r, n, i, o, a;
			if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
			if (! (n = this._events)) return this;
			if (! (r = n[e])) return this;
			if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = u(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
			else if ("function" != typeof r) {
				for (i = -1, o = r.length - 1; 0 <= o; o--) if (r[o] === t || r[o].listener === t) {
					a = r[o].listener,
					i = o;
					break
				}
				if (i < 0) return this;
				0 === i ? r.shift() : function(e, t) {
					for (var r = t,
					n = r + 1,
					i = e.length; n < i; r += 1, n += 1) e[r] = e[n];
					e.pop()
				} (r, i),
				1 === r.length && (n[e] = r[0]),
				n.removeListener && this.emit("removeListener", e, a || t)
			}
			return this
		},
		r.prototype.removeAllListeners = function(e) {
			var t, r, n;
			if (! (r = this._events)) return this;
			if (!r.removeListener) return 0 === arguments.length ? (this._events = u(null), this._eventsCount = 0) : r[e] && (0 == --this._eventsCount ? this._events = u(null) : delete r[e]),
			this;
			if (0 === arguments.length) {
				var i, o = d(r);
				for (n = 0; n < o.length; ++n)"removeListener" === (i = o[n]) || this.removeAllListeners(i);
				return this.removeAllListeners("removeListener"),
				this._events = u(null),
				this._eventsCount = 0,
				this
			}
			if ("function" == typeof(t = r[e])) this.removeListener(e, t);
			else if (t) for (n = t.length - 1; 0 <= n; n--) this.removeListener(e, t[n]);
			return this
		},
		r.prototype.listeners = function(e) {
			return s(this, e, !0)
		},
		r.prototype.rawListeners = function(e) {
			return s(this, e, !1)
		},
		r.listenerCount = function(e, t) {
			return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
		},
		r.prototype.listenerCount = f,
		r.prototype.eventNames = function() {
			return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : []
		}
	},
	{}],
	97 : [function(e, t) {
		var r = Math.min,
		n = e("safe-buffer").Buffer,
		i = e("md5.js");
		t.exports = function(e, t, o, a) {
			if (n.isBuffer(e) || (e = n.from(e, "binary")), t && (n.isBuffer(t) || (t = n.from(t, "binary")), 8 !== t.length)) throw new RangeError("salt should be Buffer with 8 byte length");
			for (var s, f = o / 8,
			c = n.alloc(f), u = n.alloc(a || 0), d = n.alloc(0); 0 < f || 0 < a;) { (s = new i).update(d),
				s.update(e),
				t && s.update(t),
				d = s.digest();
				var h = 0;
				if (0 < f) {
					var l = c.length - f;
					h = r(f, d.length),
					d.copy(c, l, 0, h),
					f -= h
				}
				if (h < d.length && 0 < a) {
					var p = u.length - a,
					b = r(a, d.length - h);
					d.copy(u, p, h, h + b),
					a -= b
				}
			}
			return d.fill(0),
			{
				key: c,
				iv: u
			}
		}
	},
	{
		"md5.js": 116,
		"safe-buffer": 141
	}],
	98 : [function(e, t) {
		"use strict";
		function r(e) {
			i.call(this),
			this._block = n.allocUnsafe(e),
			this._blockSize = e,
			this._blockOffset = 0,
			this._length = [0, 0, 0, 0],
			this._finalized = !1
		}
		var n = e("safe-buffer").Buffer,
		i = e("stream").Transform;
		e("inherits")(r, i),
		r.prototype._transform = function(e, t, r) {
			var n = null;
			try {
				this.update(e, t)
			} catch(e) {
				n = e
			}
			r(n)
		},
		r.prototype._flush = function(e) {
			var t = null;
			try {
				this.push(this.digest())
			} catch(e) {
				t = e
			}
			e(t)
		},
		r.prototype.update = function(e, t) {
			if (function(e) {
				if (!n.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer")
			} (e), this._finalized) throw new Error("Digest already called");
			n.isBuffer(e) || (e = n.from(e, t));
			for (var r = this._block,
			i = 0; this._blockOffset + e.length - i >= this._blockSize;) {
				for (var o = this._blockOffset; o < this._blockSize;) r[o++] = e[i++];
				this._update(),
				this._blockOffset = 0
			}
			for (; i < e.length;) r[this._blockOffset++] = e[i++];
			for (var a = 0,
			s = 8 * e.length; 0 < s; ++a) this._length[a] += s,
			0 < (s = 0 | this._length[a] / 4294967296) && (this._length[a] -= 4294967296 * s);
			return this
		},
		r.prototype._update = function() {
			throw new Error("_update is not implemented")
		},
		r.prototype.digest = function(e) {
			if (this._finalized) throw new Error("Digest already called");
			this._finalized = !0;
			var t = this._digest();
			void 0 !== e && (t = t.toString(e)),
			this._block.fill(0);
			for (var r = this._blockOffset = 0; r < 4; ++r) this._length[r] = 0;
			return t
		},
		r.prototype._digest = function() {
			throw new Error("_digest is not implemented")
		},
		t.exports = r
	},
	{
		inherits: 113,
		"safe-buffer": 141,
		stream: 150
	}],
	99 : [function(e, t, r) {
		var n = r;
		n.utils = e("./hash/utils"),
		n.common = e("./hash/common"),
		n.sha = e("./hash/sha"),
		n.ripemd = e("./hash/ripemd"),
		n.hmac = e("./hash/hmac"),
		n.sha1 = n.sha.sha1,
		n.sha256 = n.sha.sha256,
		n.sha224 = n.sha.sha224,
		n.sha384 = n.sha.sha384,
		n.sha512 = n.sha.sha512,
		n.ripemd160 = n.ripemd.ripemd160
	},
	{
		"./hash/common": 100,
		"./hash/hmac": 101,
		"./hash/ripemd": 102,
		"./hash/sha": 103,
		"./hash/utils": 110
	}],
	100 : [function(e, t, r) {
		"use strict";
		function n() {
			this.pending = null,
			this.pendingTotal = 0,
			this.blockSize = this.constructor.blockSize,
			this.outSize = this.constructor.outSize,
			this.hmacStrength = this.constructor.hmacStrength,
			this.padLength = this.constructor.padLength / 8,
			this.endian = "big",
			this._delta8 = this.blockSize / 8,
			this._delta32 = this.blockSize / 32
		}
		var i = e("./utils"),
		o = e("minimalistic-assert"); (r.BlockHash = n).prototype.update = function(e, t) {
			if (e = i.toArray(e, t), this.pending = this.pending ? this.pending.concat(e) : e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
				var r = (e = this.pending).length % this._delta8;
				this.pending = e.slice(e.length - r, e.length),
				0 === this.pending.length && (this.pending = null),
				e = i.join32(e, 0, e.length - r, this.endian);
				for (var n = 0; n < e.length; n += this._delta32) this._update(e, n, n + this._delta32)
			}
			return this
		},
		n.prototype.digest = function(e) {
			return this.update(this._pad()),
			o(null === this.pending),
			this._digest(e)
		},
		n.prototype._pad = function() {
			var e = this.pendingTotal,
			t = this._delta8,
			r = t - (e + this.padLength) % t,
			n = Array(r + this.padLength);
			n[0] = 128;
			for (var i = 1; i < r; i++) n[i] = 0;
			if (e <<= 3, "big" === this.endian) {
				for (var o = 8; o < this.padLength; o++) n[i++] = 0;
				n[i++] = 0,
				n[i++] = 0,
				n[i++] = 0,
				n[i++] = 0,
				n[i++] = 255 & e >>> 24,
				n[i++] = 255 & e >>> 16,
				n[i++] = 255 & e >>> 8,
				n[i++] = 255 & e
			} else for (n[i++] = 255 & e, n[i++] = 255 & e >>> 8, n[i++] = 255 & e >>> 16, n[i++] = 255 & e >>> 24, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
			return n
		}
	},
	{
		"./utils": 110,
		"minimalistic-assert": 118
	}],
	101 : [function(e, t) {
		"use strict";
		function r(e, t, i) {
			return this instanceof r ? (this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, void this._init(n.toArray(t, i))) : new r(e, t, i)
		}
		var n = e("./utils"),
		i = e("minimalistic-assert"); (t.exports = r).prototype._init = function(e) {
			e.length > this.blockSize && (e = (new this.Hash).update(e).digest()),
			i(e.length <= this.blockSize);
			for (var t = e.length; t < this.blockSize; t++) e.push(0);
			for (t = 0; t < e.length; t++) e[t] ^= 54;
			for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
			this.outer = (new this.Hash).update(e)
		},
		r.prototype.update = function(e, t) {
			return this.inner.update(e, t),
			this
		},
		r.prototype.digest = function(e) {
			return this.outer.update(this.inner.digest()),
			this.outer.digest(e)
		}
	},
	{
		"./utils": 110,
		"minimalistic-assert": 118
	}],
	102 : [function(e, t, r) {
		"use strict";
		function n() {
			return this instanceof n ? (d.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void(this.endian = "little")) : new n
		}
		function i(e, t, r, n) {
			return e <= 15 ? t ^ r ^ n: e <= 31 ? t & r | ~t & n: e <= 47 ? (t | ~r) ^ n: e <= 63 ? t & n | r & ~n: t ^ (r | ~n)
		}
		var o = e("./utils"),
		a = e("./common"),
		s = o.rotl32,
		f = o.sum32,
		c = o.sum32_3,
		u = o.sum32_4,
		d = a.BlockHash;
		o.inherits(n, d),
		(r.ripemd160 = n).blockSize = 512,
		n.outSize = 160,
		n.hmacStrength = 192,
		n.padLength = 64,
		n.prototype._update = function(e, t) {
			for (var r, n = this.h[0], o = this.h[1], a = this.h[2], d = this.h[3], y = this.h[4], g = n, m = o, v = a, w = d, _ = y, S = 0; S < 80; S++) r = f(s(u(n, i(S, o, a, d), e[h[S] + t], (E = S) <= 15 ? 0 : E <= 31 ? 1518500249 : E <= 47 ? 1859775393 : E <= 63 ? 2400959708 : 2840853838), p[S]), y),
			n = y,
			y = d,
			d = s(a, 10),
			a = o,
			o = r,
			r = f(s(u(g, i(79 - S, m, v, w), e[l[S] + t], (k = S) <= 15 ? 1352829926 : k <= 31 ? 1548603684 : k <= 47 ? 1836072691 : k <= 63 ? 2053994217 : 0), b[S]), _),
			g = _,
			_ = w,
			w = s(v, 10),
			v = m,
			m = r;
			var k, E;
			r = c(this.h[1], a, w),
			this.h[1] = c(this.h[2], d, _),
			this.h[2] = c(this.h[3], y, g),
			this.h[3] = c(this.h[4], n, m),
			this.h[4] = c(this.h[0], o, v),
			this.h[0] = r
		},
		n.prototype._digest = function(e) {
			return "hex" === e ? o.toHex32(this.h, "little") : o.split32(this.h, "little")
		};
		var h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
		l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
		p = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
		b = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
	},
	{
		"./common": 100,
		"./utils": 110
	}],
	103 : [function(e, t, r) {
		"use strict";
		r.sha1 = e("./sha/1"),
		r.sha224 = e("./sha/224"),
		r.sha256 = e("./sha/256"),
		r.sha384 = e("./sha/384"),
		r.sha512 = e("./sha/512")
	},
	{
		"./sha/1": 104,
		"./sha/224": 105,
		"./sha/256": 106,
		"./sha/384": 107,
		"./sha/512": 108
	}],
	104 : [function(e, t) {
		"use strict";
		function r() {
			return this instanceof r ? (u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void(this.W = Array(80))) : new r
		}
		var n = e("../utils"),
		i = e("../common"),
		o = e("./common"),
		a = n.rotl32,
		s = n.sum32,
		f = n.sum32_5,
		c = o.ft_1,
		u = i.BlockHash,
		d = [1518500249, 1859775393, 2400959708, 3395469782];
		n.inherits(r, u),
		(t.exports = r).blockSize = 512,
		r.outSize = 160,
		r.hmacStrength = 80,
		r.padLength = 64,
		r.prototype._update = function(e, t) {
			for (var r = this.W,
			n = 0; n < 16; n++) r[n] = e[t + n];
			for (; n < r.length; n++) r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
			var i = this.h[0],
			o = this.h[1],
			u = this.h[2],
			h = this.h[3],
			l = this.h[4];
			for (n = 0; n < r.length; n++) {
				var p = ~~ (n / 20),
				b = f(a(i, 5), c(p, o, u, h), l, r[n], d[p]);
				l = h,
				h = u,
				u = a(o, 30),
				o = i,
				i = b
			}
			this.h[0] = s(this.h[0], i),
			this.h[1] = s(this.h[1], o),
			this.h[2] = s(this.h[2], u),
			this.h[3] = s(this.h[3], h),
			this.h[4] = s(this.h[4], l)
		},
		r.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
		}
	},
	{
		"../common": 100,
		"../utils": 110,
		"./common": 109
	}],
	105 : [function(e, t) {
		"use strict";
		function r() {
			return this instanceof r ? (i.call(this), void(this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])) : new r
		}
		var n = e("../utils"),
		i = e("./256");
		n.inherits(r, i),
		(t.exports = r).blockSize = 512,
		r.outSize = 224,
		r.hmacStrength = 192,
		r.padLength = 64,
		r.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
		}
	},
	{
		"../utils": 110,
		"./256": 106
	}],
	106 : [function(e, t) {
		"use strict";
		function r() {
			return this instanceof r ? (y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, void(this.W = Array(64))) : new r
		}
		var n = e("../utils"),
		i = e("../common"),
		o = e("./common"),
		a = e("minimalistic-assert"),
		s = n.sum32,
		f = n.sum32_4,
		c = n.sum32_5,
		u = o.ch32,
		d = o.maj32,
		h = o.s0_256,
		l = o.s1_256,
		p = o.g0_256,
		b = o.g1_256,
		y = i.BlockHash,
		g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
		n.inherits(r, y),
		(t.exports = r).blockSize = 512,
		r.outSize = 256,
		r.hmacStrength = 192,
		r.padLength = 64,
		r.prototype._update = function(e, t) {
			for (var r = this.W,
			n = 0; n < 16; n++) r[n] = e[t + n];
			for (; n < r.length; n++) r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
			var i = this.h[0],
			o = this.h[1],
			y = this.h[2],
			g = this.h[3],
			m = this.h[4],
			v = this.h[5],
			w = this.h[6],
			_ = this.h[7];
			for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
				var S = c(_, l(m), u(m, v, w), this.k[n], r[n]),
				k = s(h(i), d(i, o, y));
				_ = w,
				w = v,
				v = m,
				m = s(g, S),
				g = y,
				y = o,
				o = i,
				i = s(S, k)
			}
			this.h[0] = s(this.h[0], i),
			this.h[1] = s(this.h[1], o),
			this.h[2] = s(this.h[2], y),
			this.h[3] = s(this.h[3], g),
			this.h[4] = s(this.h[4], m),
			this.h[5] = s(this.h[5], v),
			this.h[6] = s(this.h[6], w),
			this.h[7] = s(this.h[7], _)
		},
		r.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
		}
	},
	{
		"../common": 100,
		"../utils": 110,
		"./common": 109,
		"minimalistic-assert": 118
	}],
	107 : [function(e, t) {
		"use strict";
		function r() {
			return this instanceof r ? (i.call(this), void(this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])) : new r
		}
		var n = e("../utils"),
		i = e("./512");
		n.inherits(r, i),
		(t.exports = r).blockSize = 1024,
		r.outSize = 384,
		r.hmacStrength = 192,
		r.padLength = 128,
		r.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
		}
	},
	{
		"../utils": 110,
		"./512": 108
	}],
	108 : [function(e, t) {
		"use strict";
		function r() {
			return this instanceof r ? (g.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = m, void(this.W = Array(160))) : new r
		}
		var n = e("../utils"),
		i = e("../common"),
		o = e("minimalistic-assert"),
		a = n.rotr64_hi,
		s = n.rotr64_lo,
		f = n.shr64_hi,
		c = n.shr64_lo,
		u = n.sum64,
		d = n.sum64_hi,
		h = n.sum64_lo,
		l = n.sum64_4_hi,
		p = n.sum64_4_lo,
		b = n.sum64_5_hi,
		y = n.sum64_5_lo,
		g = i.BlockHash,
		m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
		n.inherits(r, g),
		(t.exports = r).blockSize = 1024,
		r.outSize = 512,
		r.hmacStrength = 192,
		r.padLength = 128,
		r.prototype._prepareBlock = function(e, t) {
			for (var r = this.W,
			n = 0; n < 32; n++) r[n] = e[t + n];
			for (; n < r.length; n += 2) {
				var i = (A = r[n - 4], B = r[n - 3], j = void 0, (j = a(A, B, 19) ^ a(B, A, 29) ^ f(A, B, 6)) < 0 && (j += 4294967296), j),
				o = (E = r[n - 4], x = r[n - 3], I = void 0, (I = s(E, x, 19) ^ s(x, E, 29) ^ c(E, x, 6)) < 0 && (I += 4294967296), I),
				u = r[n - 14],
				d = r[n - 13],
				h = (_ = r[n - 30], S = r[n - 29], k = void 0, (k = a(_, S, 1) ^ a(_, S, 8) ^ f(_, S, 7)) < 0 && (k += 4294967296), k),
				b = (m = r[n - 30], v = r[n - 29], w = void 0, (w = s(m, v, 1) ^ s(m, v, 8) ^ c(m, v, 7)) < 0 && (w += 4294967296), w),
				y = r[n - 32],
				g = r[n - 31];
				r[n] = l(i, o, u, d, h, b, y, g),
				r[n + 1] = p(i, o, u, d, h, b, y, g)
			}
			var m, v, w, _, S, k, E, x, I, A, B, j
		}, r.prototype._update = function(e, t) {
			this._prepareBlock(e, t);
			var r, n, i, f, c, l, p, g, m, v, w, _, S, k, E, x, I, A, B, j, T, O, P, C, U = this.W,
			M = this.h[0],
			R = this.h[1],
			N = this.h[2],
			L = this.h[3],
			D = this.h[4],
			q = this.h[5],
			z = this.h[6],
			F = this.h[7],
			K = this.h[8],
			H = this.h[9],
			V = this.h[10],
			W = this.h[11],
			J = this.h[12],
			G = this.h[13],
			X = this.h[14],
			Z = this.h[15];
			o(this.k.length === U.length);
			for (var Y = 0; Y < U.length; Y += 2) {
				var $ = X,
				Q = Z,
				ee = (C = void 0, (C = a(O = K, P = H, 14) ^ a(O, P, 18) ^ a(P, O, 9)) < 0 && (C += 4294967296), C),
				te = (T = void 0, (T = s(B = K, j = H, 14) ^ s(B, j, 18) ^ s(j, B, 9)) < 0 && (T += 4294967296), T),
				re = (A = void 0, (A = (I = K) & V ^ ~I & J) < 0 && (A += 4294967296), A),
				ne = (x = void 0, (x = (E = H) & W ^ ~E & G) < 0 && (x += 4294967296), x),
				ie = this.k[Y],
				oe = this.k[Y + 1],
				ae = U[Y],
				se = U[Y + 1],
				fe = b($, Q, ee, te, re, ne, ie, oe, ae, se),
				ce = y($, Q, ee, te, re, ne, ie, oe, ae, se);
				k = void 0,
				(k = a(_ = M, S = R, 28) ^ a(S, _, 2) ^ a(S, _, 7)) < 0 && (k += 4294967296),
				$ = k,
				w = void 0,
				(w = s(m = M, v = R, 28) ^ s(v, m, 2) ^ s(v, m, 7)) < 0 && (w += 4294967296),
				g = void 0,
				(g = (c = M) & (l = N) ^ c & (p = D) ^ l & p) < 0 && (g += 4294967296),
				f = void 0,
				(f = (r = R) & (n = L) ^ r & (i = q) ^ n & i) < 0 && (f += 4294967296);
				var ue = d($, Q = w, ee = g, te = f),
				de = h($, Q, ee, te);
				X = J,
				Z = G,
				J = V,
				G = W,
				V = K,
				W = H,
				K = d(z, F, fe, ce),
				H = h(F, F, fe, ce),
				z = D,
				F = q,
				D = N,
				q = L,
				N = M,
				L = R,
				M = d(fe, ce, ue, de),
				R = h(fe, ce, ue, de)
			}
			u(this.h, 0, M, R),
			u(this.h, 2, N, L),
			u(this.h, 4, D, q),
			u(this.h, 6, z, F),
			u(this.h, 8, K, H),
			u(this.h, 10, V, W),
			u(this.h, 12, J, G),
			u(this.h, 14, X, Z)
		},
		r.prototype._digest = function(e) {
			return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
		}
	},
	{
		"../common": 100,
		"../utils": 110,
		"minimalistic-assert": 118
	}],
	109 : [function(e, t, r) {
		"use strict";
		function n(e, t, r) {
			return e & t ^ ~e & r
		}
		function i(e, t, r) {
			return e & t ^ e & r ^ t & r
		}
		var o = e("../utils").rotr32;
		r.ft_1 = function(e, t, r, o) {
			return 0 === e ? n(t, r, o) : 1 === e || 3 === e ? t ^ r ^ o: 2 === e ? i(t, r, o) : void 0
		},
		r.ch32 = n,
		r.maj32 = i,
		r.p32 = function(e, t, r) {
			return e ^ t ^ r
		},
		r.s0_256 = function(e) {
			return o(e, 2) ^ o(e, 13) ^ o(e, 22)
		},
		r.s1_256 = function(e) {
			return o(e, 6) ^ o(e, 11) ^ o(e, 25)
		},
		r.g0_256 = function(e) {
			return o(e, 7) ^ o(e, 18) ^ e >>> 3
		},
		r.g1_256 = function(e) {
			return o(e, 17) ^ o(e, 19) ^ e >>> 10
		}
	},
	{
		"../utils": 110
	}],
	110 : [function(e, t, r) {
		"use strict";
		function n(e) {
			return (e >>> 24 | 65280 & e >>> 8 | 16711680 & e << 8 | (255 & e) << 24) >>> 0
		}
		function i(e) {
			return 1 === e.length ? "0" + e: e
		}
		function o(e) {
			return 7 === e.length ? "0" + e: 6 === e.length ? "00" + e: 5 === e.length ? "000" + e: 4 === e.length ? "0000" + e: 3 === e.length ? "00000" + e: 2 === e.length ? "000000" + e: 1 === e.length ? "0000000" + e: e
		}
		var a = e("minimalistic-assert"),
		s = e("inherits");
		r.inherits = s,
		r.toArray = function(e, t) {
			if (Array.isArray(e)) return e.slice();
			if (!e) return [];
			var r, n, i = [];
			if ("string" != typeof e) for (s = 0; s < e.length; s++) i[s] = 0 | e[s];
			else if (t) {
				if ("hex" === t) for (0 != (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 && (e = "0" + e), s = 0; s < e.length; s += 2) i.push(parseInt(e[s] + e[s + 1], 16))
			} else for (var o, a = 0,
			s = 0; s < e.length; s++)(o = e.charCodeAt(s)) < 128 ? i[a++] = o: o < 2048 ? (i[a++] = 192 | o >> 6, i[a++] = 128 | 63 & o) : (n = s, 55296 != (64512 & (r = e).charCodeAt(n)) || n < 0 || n + 1 >= r.length || 56320 != (64512 & r.charCodeAt(n + 1)) ? i[a++] = 224 | o >> 12 : (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++s)), i[a++] = 240 | o >> 18, i[a++] = 128 | 63 & o >> 12), i[a++] = 128 | 63 & o >> 6, i[a++] = 128 | 63 & o);
			return i
		},
		r.toHex = function(e) {
			for (var t = "",
			r = 0; r < e.length; r++) t += i(e[r].toString(16));
			return t
		},
		r.htonl = n,
		r.toHex32 = function(e, t) {
			for (var r, i = "",
			a = 0; a < e.length; a++) r = e[a],
			"little" === t && (r = n(r)),
			i += o(r.toString(16));
			return i
		},
		r.zero2 = i,
		r.zero8 = o,
		r.join32 = function(e, t, r, n) {
			var i = r - t;
			a(0 == i % 4);
			for (var o = Array(i / 4), s = 0, f = t; s < o.length; s++, f += 4) {
				var c;
				c = "big" === n ? e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f],
				o[s] = c >>> 0
			}
			return o
		},
		r.split32 = function(e, t) {
			for (var r, n = Array(4 * e.length), i = 0, o = 0; i < e.length; i++, o += 4) r = e[i],
			"big" === t ? (n[o] = r >>> 24, n[o + 1] = 255 & r >>> 16, n[o + 2] = 255 & r >>> 8, n[o + 3] = 255 & r) : (n[o + 3] = r >>> 24, n[o + 2] = 255 & r >>> 16, n[o + 1] = 255 & r >>> 8, n[o] = 255 & r);
			return n
		},
		r.rotr32 = function(e, t) {
			return e >>> t | e << 32 - t
		},
		r.rotl32 = function(e, t) {
			return e << t | e >>> 32 - t
		},
		r.sum32 = function(e, t) {
			return e + t >>> 0
		},
		r.sum32_3 = function(e, t, r) {
			return e + t + r >>> 0
		},
		r.sum32_4 = function(e, t, r, n) {
			return e + t + r + n >>> 0
		},
		r.sum32_5 = function(e, t, r, n, i) {
			return e + t + r + n + i >>> 0
		},
		r.sum64 = function(e, t, r, n) {
			var i = e[t],
			o = n + e[t + 1] >>> 0,
			a = (o < n ? 1 : 0) + r + i;
			e[t] = a >>> 0,
			e[t + 1] = o
		},
		r.sum64_hi = function(e, t, r, n) {
			return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
		},
		r.sum64_lo = function(e, t, r, n) {
			return t + n >>> 0
		},
		r.sum64_4_hi = function(e, t, r, n, i, o, a, s) {
			var f = 0,
			c = t;
			return f += (c = c + n >>> 0) < t ? 1 : 0,
			f += (c = c + o >>> 0) < o ? 1 : 0,
			e + r + i + a + (f += (c = c + s >>> 0) < s ? 1 : 0) >>> 0
		},
		r.sum64_4_lo = function(e, t, r, n, i, o, a, s) {
			return t + n + o + s >>> 0
		},
		r.sum64_5_hi = function(e, t, r, n, i, o, a, s, f, c) {
			var u = 0,
			d = t;
			return u += (d = d + n >>> 0) < t ? 1 : 0,
			u += (d = d + o >>> 0) < o ? 1 : 0,
			u += (d = d + s >>> 0) < s ? 1 : 0,
			e + r + i + a + f + (u += (d = d + c >>> 0) < c ? 1 : 0) >>> 0
		},
		r.sum64_5_lo = function(e, t, r, n, i, o, a, s, f, c) {
			return t + n + o + s + c >>> 0
		},
		r.rotr64_hi = function(e, t, r) {
			return (t << 32 - r | e >>> r) >>> 0
		},
		r.rotr64_lo = function(e, t, r) {
			return (e << 32 - r | t >>> r) >>> 0
		},
		r.shr64_hi = function(e, t, r) {
			return e >>> r
		},
		r.shr64_lo = function(e, t, r) {
			return (e << 32 - r | t >>> r) >>> 0
		}
	},
	{
		inherits: 113,
		"minimalistic-assert": 118
	}],
	111 : [function(e, t) {
		"use strict";
		function r(e) {
			if (! (this instanceof r)) return new r(e);
			this.hash = e.hash,
			this.predResist = !!e.predResist,
			this.outLen = this.hash.outSize,
			this.minEntropy = e.minEntropy || this.hash.hmacStrength,
			this._reseed = null,
			this.reseedInterval = null,
			this.K = null,
			this.V = null;
			var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
			n = i.toArray(e.nonce, e.nonceEnc || "hex"),
			a = i.toArray(e.pers, e.persEnc || "hex");
			o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
			this._init(t, n, a)
		}
		var n = e("hash.js"),
		i = e("minimalistic-crypto-utils"),
		o = e("minimalistic-assert"); (t.exports = r).prototype._init = function(e, t, r) {
			var n = e.concat(t).concat(r);
			this.K = Array(this.outLen / 8),
			this.V = Array(this.outLen / 8);
			for (var i = 0; i < this.V.length; i++) this.K[i] = 0,
			this.V[i] = 1;
			this._update(n),
			this._reseed = 1,
			this.reseedInterval = 281474976710656
		},
		r.prototype._hmac = function() {
			return new n.hmac(this.hash, this.K)
		},
		r.prototype._update = function(e) {
			var t = this._hmac().update(this.V).update([0]);
			e && (t = t.update(e)),
			this.K = t.digest(),
			this.V = this._hmac().update(this.V).digest(),
			e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
		},
		r.prototype.reseed = function(e, t, r, n) {
			"string" != typeof t && (n = r, r = t, t = null),
			e = i.toArray(e, t),
			r = i.toArray(r, n),
			o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
			this._update(e.concat(r || [])),
			this._reseed = 1
		},
		r.prototype.generate = function(e, t, r, n) {
			if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
			"string" != typeof t && (n = r, r = t, t = null),
			r && (r = i.toArray(r, n || "hex"), this._update(r));
			for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(),
			o = o.concat(this.V);
			var a = o.slice(0, e);
			return this._update(r),
			this._reseed++,
			i.encode(a, t)
		}
	},
	{
		"hash.js": 99,
		"minimalistic-assert": 118,
		"minimalistic-crypto-utils": 119
	}],
	112 : [function(e, t, r) {
		var n = Math.LN2,
		i = Math.log,
		o = Math.pow,
		a = Math.floor;
		r.read = function(e, t, r, n, i) {
			var a, s, f = 8 * i - n - 1,
			c = (1 << f) - 1,
			u = c >> 1,
			d = -7,
			h = r ? i - 1 : 0,
			l = r ? -1 : 1,
			p = e[t + h];
			for (h += l, a = p & (1 << -d) - 1, p >>= -d, d += f; 0 < d; a = 256 * a + e[t + h], h += l, d -= 8);
			for (s = a & (1 << -d) - 1, a >>= -d, d += n; 0 < d; s = 256 * s + e[t + h], h += l, d -= 8);
			if (0 === a) a = 1 - u;
			else {
				if (a === c) return s ? NaN: 1 / 0 * (p ? -1 : 1);
				s += o(2, n),
				a -= u
			}
			return (p ? -1 : 1) * s * o(2, a - n)
		},
		r.write = function(e, t, r, s, f, c) {
			var u, d, h, l = Math.abs,
			p = 8 * c - f - 1,
			b = (1 << p) - 1,
			y = b >> 1,
			g = 23 === f ? o(2, -24) - o(2, -77) : 0,
			m = s ? 0 : c - 1,
			v = s ? 1 : -1,
			w = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
			for (t = l(t), isNaN(t) || t === 1 / 0 ? (d = isNaN(t) ? 1 : 0, u = b) : (u = a(i(t) / n), t * (h = o(2, -u)) < 1 && (u--, h *= 2), 2 <= (t += 1 <= u + y ? g / h: g * o(2, 1 - y)) * h && (u++, h /= 2), b <= u + y ? (d = 0, u = b) : 1 <= u + y ? (d = (t * h - 1) * o(2, f), u += y) : (d = t * o(2, y - 1) * o(2, f), u = 0)); 8 <= f; e[r + m] = 255 & d, m += v, d /= 256, f -= 8);
			for (u = u << f | d, p += f; 0 < p; e[r + m] = 255 & u, m += v, u /= 256, p -= 8);
			e[r + m - v] |= 128 * w
		}
	},
	{}],
	113 : [function(e, t) {
		t.exports = "function" == typeof Object.create ?
		function(e, t) {
			t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}))
		}: function(e, t) {
			if (t) {
				function r() {}
				e.super_ = t,
				r.prototype = t.prototype,
				e.prototype = new r,
				e.prototype.constructor = e
			}
		}
	},
	{}],
	114 : [function(e, t) {
		function r(e) {
			return !! e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
		}
		t.exports = function(e) {
			return null != e && (r(e) || "function" == typeof(t = e).readFloatLE && "function" == typeof t.slice && r(t.slice(0, 0)) || !!e._isBuffer);
			var t
		}
	}, {}], 115 : [function(e, t) {
		var r = {}.toString;
		t.exports = Array.isArray ||
		function(e) {
			return "[object Array]" == r.call(e)
		}
	},
	{}],
	116 : [function(e, t) {
		"use strict";
		function r() {
			c.call(this, 64),
			this._a = 1732584193,
			this._b = 4023233417,
			this._c = 2562383102,
			this._d = 271733878
		}
		function n(e, t) {
			return e << t | e >>> 32 - t
		}
		function i(e, t, r, i, o, a, s) {
			return 0 | n(0 | e + (t & r | ~t & i) + o + a, s) + t
		}
		function o(e, t, r, i, o, a, s) {
			return 0 | n(0 | e + (t & i | r & ~i) + o + a, s) + t
		}
		function a(e, t, r, i, o, a, s) {
			return 0 | n(0 | e + (t ^ r ^ i) + o + a, s) + t
		}
		function s(e, t, r, i, o, a, s) {
			return 0 | n(0 | e + (r ^ (t | ~i)) + o + a, s) + t
		}
		var f = e("inherits"),
		c = e("hash-base"),
		u = e("safe-buffer").Buffer,
		d = Array(16);
		f(r, c),
		r.prototype._update = function() {
			for (var e = d,
			t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
			var r = this._a,
			n = this._b,
			f = this._c,
			c = this._d;
			r = i(r, n, f, c, e[0], 3614090360, 7),
			c = i(c, r, n, f, e[1], 3905402710, 12),
			f = i(f, c, r, n, e[2], 606105819, 17),
			n = i(n, f, c, r, e[3], 3250441966, 22),
			r = i(r, n, f, c, e[4], 4118548399, 7),
			c = i(c, r, n, f, e[5], 1200080426, 12),
			f = i(f, c, r, n, e[6], 2821735955, 17),
			n = i(n, f, c, r, e[7], 4249261313, 22),
			r = i(r, n, f, c, e[8], 1770035416, 7),
			c = i(c, r, n, f, e[9], 2336552879, 12),
			f = i(f, c, r, n, e[10], 4294925233, 17),
			n = i(n, f, c, r, e[11], 2304563134, 22),
			r = i(r, n, f, c, e[12], 1804603682, 7),
			c = i(c, r, n, f, e[13], 4254626195, 12),
			f = i(f, c, r, n, e[14], 2792965006, 17),
			r = o(r, n = i(n, f, c, r, e[15], 1236535329, 22), f, c, e[1], 4129170786, 5),
			c = o(c, r, n, f, e[6], 3225465664, 9),
			f = o(f, c, r, n, e[11], 643717713, 14),
			n = o(n, f, c, r, e[0], 3921069994, 20),
			r = o(r, n, f, c, e[5], 3593408605, 5),
			c = o(c, r, n, f, e[10], 38016083, 9),
			f = o(f, c, r, n, e[15], 3634488961, 14),
			n = o(n, f, c, r, e[4], 3889429448, 20),
			r = o(r, n, f, c, e[9], 568446438, 5),
			c = o(c, r, n, f, e[14], 3275163606, 9),
			f = o(f, c, r, n, e[3], 4107603335, 14),
			n = o(n, f, c, r, e[8], 1163531501, 20),
			r = o(r, n, f, c, e[13], 2850285829, 5),
			c = o(c, r, n, f, e[2], 4243563512, 9),
			f = o(f, c, r, n, e[7], 1735328473, 14),
			r = a(r, n = o(n, f, c, r, e[12], 2368359562, 20), f, c, e[5], 4294588738, 4),
			c = a(c, r, n, f, e[8], 2272392833, 11),
			f = a(f, c, r, n, e[11], 1839030562, 16),
			n = a(n, f, c, r, e[14], 4259657740, 23),
			r = a(r, n, f, c, e[1], 2763975236, 4),
			c = a(c, r, n, f, e[4], 1272893353, 11),
			f = a(f, c, r, n, e[7], 4139469664, 16),
			n = a(n, f, c, r, e[10], 3200236656, 23),
			r = a(r, n, f, c, e[13], 681279174, 4),
			c = a(c, r, n, f, e[0], 3936430074, 11),
			f = a(f, c, r, n, e[3], 3572445317, 16),
			n = a(n, f, c, r, e[6], 76029189, 23),
			r = a(r, n, f, c, e[9], 3654602809, 4),
			c = a(c, r, n, f, e[12], 3873151461, 11),
			f = a(f, c, r, n, e[15], 530742520, 16),
			r = s(r, n = a(n, f, c, r, e[2], 3299628645, 23), f, c, e[0], 4096336452, 6),
			c = s(c, r, n, f, e[7], 1126891415, 10),
			f = s(f, c, r, n, e[14], 2878612391, 15),
			n = s(n, f, c, r, e[5], 4237533241, 21),
			r = s(r, n, f, c, e[12], 1700485571, 6),
			c = s(c, r, n, f, e[3], 2399980690, 10),
			f = s(f, c, r, n, e[10], 4293915773, 15),
			n = s(n, f, c, r, e[1], 2240044497, 21),
			r = s(r, n, f, c, e[8], 1873313359, 6),
			c = s(c, r, n, f, e[15], 4264355552, 10),
			f = s(f, c, r, n, e[6], 2734768916, 15),
			n = s(n, f, c, r, e[13], 1309151649, 21),
			r = s(r, n, f, c, e[4], 4149444226, 6),
			c = s(c, r, n, f, e[11], 3174756917, 10),
			f = s(f, c, r, n, e[2], 718787259, 15),
			n = s(n, f, c, r, e[9], 3951481745, 21),
			this._a = 0 | this._a + r,
			this._b = 0 | this._b + n,
			this._c = 0 | this._c + f,
			this._d = 0 | this._d + c
		},
		r.prototype._digest = function() {
			this._block[this._blockOffset++] = 128,
			56 < this._blockOffset && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0),
			this._block.fill(0, this._blockOffset, 56),
			this._block.writeUInt32LE(this._length[0], 56),
			this._block.writeUInt32LE(this._length[1], 60),
			this._update();
			var e = u.allocUnsafe(16);
			return e.writeInt32LE(this._a, 0),
			e.writeInt32LE(this._b, 4),
			e.writeInt32LE(this._c, 8),
			e.writeInt32LE(this._d, 12),
			e
		},
		t.exports = r
	},
	{
		"hash-base": 98,
		inherits: 113,
		"safe-buffer": 141
	}],
	117 : [function(e, t) {
		var r = Math.max;
		function n(e) {
			this.rand = e || new o.Rand
		}
		var i = e("bn.js"),
		o = e("brorand"); (t.exports = n).create = function(e) {
			return new n(e)
		},
		n.prototype._randbelow = function(e) {
			var t = e.bitLength(),
			r = Math.ceil(t / 8);
			do {
				var n = new i(this.rand.generate(r))
			} while ( 0 <= n . cmp ( e ));
			return n
		},
		n.prototype._randrange = function(e, t) {
			var r = t.sub(e);
			return e.add(this._randbelow(r))
		},
		n.prototype.test = function(e, t, n) {
			var o = e.bitLength(),
			a = i.mont(e),
			s = new i(1).toRed(a);
			t = t || r(1, 0 | o / 48);
			for (var f = e.subn(1), c = 0; ! f.testn(c); c++);
			for (var u = e.shrn(c), d = f.toRed(a); 0 < t; t--) {
				var h = this._randrange(new i(2), f);
				n && n(h);
				var l = h.toRed(a).redPow(u);
				if (0 !== l.cmp(s) && 0 !== l.cmp(d)) {
					for (var p = 1; p < c; p++) {
						if (0 === (l = l.redSqr()).cmp(s)) return ! 1;
						if (0 === l.cmp(d)) break
					}
					if (p === c) return ! 1
				}
			}
			return ! 0
		},
		n.prototype.getDivisor = function(e, t) {
			var n = e.bitLength(),
			o = i.mont(e),
			a = new i(1).toRed(o);
			t = t || r(1, 0 | n / 48);
			for (var s = e.subn(1), f = 0; ! s.testn(f); f++);
			for (var c = e.shrn(f), u = s.toRed(o); 0 < t; t--) {
				var d = this._randrange(new i(2), s),
				h = e.gcd(d);
				if (0 !== h.cmpn(1)) return h;
				var l = d.toRed(o).redPow(c);
				if (0 !== l.cmp(a) && 0 !== l.cmp(u)) {
					for (var p = 1; p < f; p++) {
						if (0 === (l = l.redSqr()).cmp(a)) return l.fromRed().subn(1).gcd(e);
						if (0 === l.cmp(u)) break
					}
					if (p === f) return (l = l.redSqr()).fromRed().subn(1).gcd(e)
				}
			}
			return ! 1
		}
	},
	{
		"bn.js": 28,
		brorand: 29
	}],
	118 : [function(e, t) { (t.exports = function(e, t) {
			if (!e) throw new Error(t || "Assertion failed")
		}).equal = function(e, t, r) {
			if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
		}
	},
	{}],
	119 : [function(e, t, r) {
		"use strict";
		function n(e) {
			return 1 === e.length ? "0" + e: e
		}
		function i(e) {
			for (var t = "",
			r = 0; r < e.length; r++) t += n(e[r].toString(16));
			return t
		}
		var o = r;
		o.toArray = function(e, t) {
			if (Array.isArray(e)) return e.slice();
			if (!e) return [];
			var r = [];
			if ("string" != typeof e) {
				for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
				return r
			}
			if ("hex" === t) for (0 != (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16));
			else for (n = 0; n < e.length; n++) {
				var i = e.charCodeAt(n),
				o = i >> 8,
				a = 255 & i;
				o ? r.push(o, a) : r.push(a)
			}
			return r
		},
		o.zero2 = n,
		o.toHex = i,
		o.encode = function(e, t) {
			return "hex" === t ? i(e) : e
		}
	},
	{}],
	120 : [function(e, t) {
		t.exports = {
			"2.16.840.1.101.3.4.1.1": "aes-128-ecb",
			"2.16.840.1.101.3.4.1.2": "aes-128-cbc",
			"2.16.840.1.101.3.4.1.3": "aes-128-ofb",
			"2.16.840.1.101.3.4.1.4": "aes-128-cfb",
			"2.16.840.1.101.3.4.1.21": "aes-192-ecb",
			"2.16.840.1.101.3.4.1.22": "aes-192-cbc",
			"2.16.840.1.101.3.4.1.23": "aes-192-ofb",
			"2.16.840.1.101.3.4.1.24": "aes-192-cfb",
			"2.16.840.1.101.3.4.1.41": "aes-256-ecb",
			"2.16.840.1.101.3.4.1.42": "aes-256-cbc",
			"2.16.840.1.101.3.4.1.43": "aes-256-ofb",
			"2.16.840.1.101.3.4.1.44": "aes-256-cfb"
		}
	},
	{}],
	121 : [function(e, t, r) {
		"use strict";
		var n = e("asn1.js");
		r.certificate = e("./certificate");
		var i = n.define("RSAPrivateKey",
		function() {
			this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
		});
		r.RSAPrivateKey = i;
		var o = n.define("RSAPublicKey",
		function() {
			this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
		});
		r.RSAPublicKey = o;
		var a = n.define("SubjectPublicKeyInfo",
		function() {
			this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
		});
		r.PublicKey = a;
		var s = n.define("AlgorithmIdentifier",
		function() {
			this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
		}),
		f = n.define("PrivateKeyInfo",
		function() {
			this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
		});
		r.PrivateKey = f;
		var c = n.define("EncryptedPrivateKeyInfo",
		function() {
			this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
		});
		r.EncryptedPrivateKey = c;
		var u = n.define("DSAPrivateKey",
		function() {
			this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
		});
		r.DSAPrivateKey = u,
		r.DSAparam = n.define("DSAparam",
		function() {
			this.int()
		});
		var d = n.define("ECPrivateKey",
		function() {
			this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(h), this.key("publicKey").optional().explicit(1).bitstr())
		});
		r.ECPrivateKey = d;
		var h = n.define("ECParameters",
		function() {
			this.choice({
				namedCurve: this.objid()
			})
		});
		r.signature = n.define("signature",
		function() {
			this.seq().obj(this.key("r").int(), this.key("s").int())
		})
	},
	{
		"./certificate": 122,
		"asn1.js": 13
	}],
	122 : [function(e, t) {
		"use strict";
		var r = e("asn1.js"),
		n = r.define("Time",
		function() {
			this.choice({
				utcTime: this.utctime(),
				generalTime: this.gentime()
			})
		}),
		i = r.define("AttributeTypeValue",
		function() {
			this.seq().obj(this.key("type").objid(), this.key("value").any())
		}),
		o = r.define("AlgorithmIdentifier",
		function() {
			this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
		}),
		a = r.define("SubjectPublicKeyInfo",
		function() {
			this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr())
		}),
		s = r.define("RelativeDistinguishedName",
		function() {
			this.setof(i)
		}),
		f = r.define("RDNSequence",
		function() {
			this.seqof(s)
		}),
		c = r.define("Name",
		function() {
			this.choice({
				rdnSequence: this.use(f)
			})
		}),
		u = r.define("Validity",
		function() {
			this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n))
		}),
		d = r.define("Extension",
		function() {
			this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
		}),
		h = r.define("TBSCertificate",
		function() {
			this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(o), this.key("issuer").use(c), this.key("validity").use(u), this.key("subject").use(c), this.key("subjectPublicKeyInfo").use(a), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(d).optional())
		}),
		l = r.define("X509Certificate",
		function() {
			this.seq().obj(this.key("tbsCertificate").use(h), this.key("signatureAlgorithm").use(o), this.key("signatureValue").bitstr())
		});
		t.exports = l
	},
	{
		"asn1.js": 13
	}],
	123 : [function(e, t) {
		var r = e("evp_bytestokey"),
		n = e("browserify-aes"),
		i = e("safe-buffer").Buffer;
		t.exports = function(e, t) {
			var o, a = e.toString(),
			s = a.match(/Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m);
			if (s) {
				var f = "aes" + s[1],
				c = i.from(s[2], "hex"),
				u = i.from(s[3].replace(/[\r\n]/g, ""), "base64"),
				d = r(t, c.slice(0, 8), parseInt(s[1], 10)).key,
				h = [],
				l = n.createDecipheriv(f, d, c);
				h.push(l.update(u)),
				h.push(l.final()),
				o = i.concat(h)
			} else {
				var p = a.match(/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m);
				o = new i(p[2].replace(/[\r\n]/g, ""), "base64")
			}
			return {
				tag: a.match(/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m)[1],
				data: o
			}
		}
	},
	{
		"browserify-aes": 33,
		evp_bytestokey: 97,
		"safe-buffer": 141
	}],
	124 : [function(e, t) {
		var r = e("./asn1"),
		n = e("./aesid.json"),
		i = e("./fixProc"),
		o = e("browserify-aes"),
		a = e("pbkdf2"),
		s = e("safe-buffer").Buffer; (t.exports = function(e) {
			var t;
			"object" != typeof e || s.isBuffer(e) || (t = e.passphrase, e = e.key),
			"string" == typeof e && (e = s.from(e));
			var f, c, u, d, h, l, p, b, y, g, m, v, w, _ = i(e, t),
			S = _.tag,
			k = _.data;
			switch (S) {
			case "CERTIFICATE":
				c = r.certificate.decode(k, "der").tbsCertificate.subjectPublicKeyInfo;
			case "PUBLIC KEY":
				switch (f = (c = c || r.PublicKey.decode(k, "der")).algorithm.algorithm.join(".")) {
				case "1.2.840.113549.1.1.1":
					return r.RSAPublicKey.decode(c.subjectPublicKey.data, "der");
				case "1.2.840.10045.2.1":
					return c.subjectPrivateKey = c.subjectPublicKey,
					{
						type: "ec",
						data: c
					};
				case "1.2.840.10040.4.1":
					return c.algorithm.params.pub_key = r.DSAparam.decode(c.subjectPublicKey.data, "der"),
					{
						type: "dsa",
						data: c.algorithm.params
					};
				default:
					throw new Error("unknown key id " + f)
				}
				throw new Error("unknown key type " + S);
			case "ENCRYPTED PRIVATE KEY":
				d = t,
				h = (u = k = r.EncryptedPrivateKey.decode(k, "der")).algorithm.decrypt.kde.kdeparams.salt,
				l = parseInt(u.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
				p = n[u.algorithm.decrypt.cipher.algo.join(".")],
				b = u.algorithm.decrypt.cipher.iv,
				y = u.subjectPrivateKey,
				g = parseInt(p.split("-")[1], 10) / 8,
				m = a.pbkdf2Sync(d, h, l, g, "sha1"),
				v = o.createDecipheriv(p, m, b),
				(w = []).push(v.update(y)),
				w.push(v.final()),
				k = s.concat(w);
			case "PRIVATE KEY":
				switch (f = (c = r.PrivateKey.decode(k, "der")).algorithm.algorithm.join(".")) {
				case "1.2.840.113549.1.1.1":
					return r.RSAPrivateKey.decode(c.subjectPrivateKey, "der");
				case "1.2.840.10045.2.1":
					return {
						curve:
						c.algorithm.curve,
						privateKey: r.ECPrivateKey.decode(c.subjectPrivateKey, "der").privateKey
					};
				case "1.2.840.10040.4.1":
					return c.algorithm.params.priv_key = r.DSAparam.decode(c.subjectPrivateKey, "der"),
					{
						type: "dsa",
						params: c.algorithm.params
					};
				default:
					throw new Error("unknown key id " + f)
				}
				throw new Error("unknown key type " + S);
			case "RSA PUBLIC KEY":
				return r.RSAPublicKey.decode(k, "der");
			case "RSA PRIVATE KEY":
				return r.RSAPrivateKey.decode(k, "der");
			case "DSA PRIVATE KEY":
				return {
					type:
					"dsa",
					params: r.DSAPrivateKey.decode(k, "der")
				};
			case "EC PRIVATE KEY":
				return {
					curve:
					(k = r.ECPrivateKey.decode(k, "der")).parameters.value,
					privateKey: k.privateKey
				};
			default:
				throw new Error("unknown key type " + S)
			}
		}).signature = r.signature
	},
	{
		"./aesid.json": 120,
		"./asn1": 121,
		"./fixProc": 123,
		"browserify-aes": 33,
		pbkdf2: 125,
		"safe-buffer": 141
	}],
	125 : [function(e, t, r) {
		r.pbkdf2 = e("./lib/async"),
		r.pbkdf2Sync = e("./lib/sync")
	},
	{
		"./lib/async": 126,
		"./lib/sync": 129
	}],
	126 : [function(e, t) { (function(r, n) {
			function i(e, t, r, n, i) {
				return u.importKey("raw", e, {
					name: "PBKDF2"
				},
				!1, ["deriveBits"]).then(function(e) {
					return u.deriveBits({
						name: "PBKDF2",
						salt: t,
						iterations: r,
						hash: {
							name: i
						}
					},
					e, n << 3)
				}).then(function(e) {
					return c.from(e)
				})
			}
			var o, a = e("./precondition"),
			s = e("./default-encoding"),
			f = e("./sync"),
			c = e("safe-buffer").Buffer,
			u = n.crypto && n.crypto.subtle,
			d = {
				sha: "SHA-1",
				"sha-1": "SHA-1",
				sha1: "SHA-1",
				sha256: "SHA-256",
				"sha-256": "SHA-256",
				sha384: "SHA-384",
				"sha-384": "SHA-384",
				"sha-512": "SHA-512",
				sha512: "SHA-512"
			},
			h = [];
			t.exports = function(e, t, l, p, b, y) {
				"function" == typeof b && (y = b, b = void 0);
				var g, m, v = d[(b = b || "sha1").toLowerCase()];
				if (!v || "function" != typeof n.Promise) return r.nextTick(function() {
					var r;
					try {
						r = f(e, t, l, p, b)
					} catch(r) {
						return y(r)
					}
					y(null, r)
				});
				if (a(e, t, l, p), "function" != typeof y) throw new Error("No callback provided to pbkdf2");
				c.isBuffer(e) || (e = c.from(e, s)),
				c.isBuffer(t) || (t = c.from(t, s)),
				g = function(e) {
					if (n.process && !n.process.browser) return Promise.resolve(!1);
					if (!u || !u.importKey || !u.deriveBits) return Promise.resolve(!1);
					if (void 0 !== h[e]) return h[e];
					var t = i(o = o || c.alloc(8), o, 10, 128, e).then(function() {
						return ! 0
					}).
					catch(function() {
						return ! 1
					});
					return h[e] = t
				} (v).then(function(r) {
					return r ? i(e, t, l, p, v) : f(e, t, l, p, b)
				}),
				m = y,
				g.then(function(e) {
					r.nextTick(function() {
						m(null, e)
					})
				},
				function(e) {
					r.nextTick(function() {
						m(e)
					})
				})
			}
		}).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {}: window: self: global)
	},
	{
		"./default-encoding": 127,
		"./precondition": 128,
		"./sync": 129,
		_process: 131,
		"safe-buffer": 141
	}],
	127 : [function(e, t) { (function(e) {
			var r;
			r = e.browser ? "utf-8": 6 <= parseInt(e.version.split(".")[0].slice(1), 10) ? "utf-8": "binary",
			t.exports = r
		}).call(this, e("_process"))
	},
	{
		_process: 131
	}],
	128 : [function(e, t) { (function(e) {
			function r(t, r) {
				if ("string" != typeof t && !e.isBuffer(t)) throw new TypeError(r + " must be a buffer or string")
			}
			Math.pow(2, 30),
			t.exports = function(e, t, n, i) {
				if (r(e, "Password"), r(t, "Salt"), "number" != typeof n) throw new TypeError("Iterations not a number");
				if (n < 0) throw new TypeError("Bad iterations");
				if ("number" != typeof i) throw new TypeError("Key length not a number");
				if (i < 0 || 1073741823 < i || i != i) throw new TypeError("Bad key length")
			}
		}).call(this, {
			isBuffer: e("../../is-buffer/index.js")
		})
	},
	{
		"../../is-buffer/index.js": 114
	}],
	129 : [function(e, t) {
		function r(e, t, r) {
			var a, s = "rmd160" === (a = e) || "ripemd160" === a ?
			function(e) {
				return (new i).update(e).digest()
			}: "md5" === a ? n: function(e) {
				return o(a).update(e).digest()
			},
			d = "sha512" === e || "sha384" === e ? 128 : 64;
			t.length > d ? t = s(t) : t.length < d && (t = f.concat([t, c], d));
			for (var h = f.allocUnsafe(d + u[e]), l = f.allocUnsafe(d + u[e]), p = 0; p < d; p++) h[p] = 54 ^ t[p],
			l[p] = 92 ^ t[p];
			var b = f.allocUnsafe(d + r + 4);
			h.copy(b, 0, 0, d),
			this.ipad1 = b,
			this.ipad2 = h,
			this.opad = l,
			this.alg = e,
			this.blocksize = d,
			this.hash = s,
			this.size = u[e]
		}
		var n = e("create-hash/md5"),
		i = e("ripemd160"),
		o = e("sha.js"),
		a = e("./precondition"),
		s = e("./default-encoding"),
		f = e("safe-buffer").Buffer,
		c = f.alloc(128),
		u = {
			md5: 16,
			sha1: 20,
			sha224: 28,
			sha256: 32,
			sha384: 48,
			sha512: 64,
			rmd160: 20,
			ripemd160: 20
		};
		r.prototype.run = function(e, t) {
			return e.copy(t, this.blocksize),
			this.hash(t).copy(this.opad, this.blocksize),
			this.hash(this.opad)
		},
		t.exports = function(e, t, n, i, o) {
			a(e, t, n, i),
			f.isBuffer(e) || (e = f.from(e, s)),
			f.isBuffer(t) || (t = f.from(t, s));
			var c = new r(o = o || "sha1", e, t.length),
			d = f.allocUnsafe(i),
			h = f.allocUnsafe(t.length + 4);
			t.copy(h, 0, 0, t.length);
			for (var l = 0,
			p = u[o], b = Math.ceil(i / p), y = 1; y <= b; y++) {
				h.writeUInt32BE(y, t.length);
				for (var g = c.run(h, c.ipad1), m = g, v = 1; v < n; v++) {
					m = c.run(m, c.ipad2);
					for (var w = 0; w < p; w++) g[w] ^= m[w]
				}
				g.copy(d, l),
				l += p
			}
			return d
		}
	},
	{
		"./default-encoding": 127,
		"./precondition": 128,
		"create-hash/md5": 66,
		ripemd160: 140,
		"safe-buffer": 141,
		"sha.js": 143
	}],
	130 : [function(e, t) { (function(e) {
			"use strict";
			t.exports = void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? {
				nextTick: function(t, r, n, i) {
					if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
					var o, a, s = arguments.length;
					switch (s) {
					case 0:
					case 1:
						return e.nextTick(t);
					case 2:
						return e.nextTick(function() {
							t.call(null, r)
						});
					case 3:
						return e.nextTick(function() {
							t.call(null, r, n)
						});
					case 4:
						return e.nextTick(function() {
							t.call(null, r, n, i)
						});
					default:
						for (o = Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
						return e.nextTick(function() {
							t.apply(null, o)
						})
					}
				}
			}: e
		}).call(this, e("_process"))
	},
	{
		_process: 131
	}],
	131 : [function(e, t) {
		function r() {
			throw new Error("setTimeout has not been defined")
		}
		function n() {
			throw new Error("clearTimeout has not been defined")
		}
		function i(t) {
			if (c === setTimeout) return setTimeout(t, 0);
			if ((c === r || !c) && setTimeout) return c = setTimeout,
			setTimeout(t, 0);
			try {
				return c(t, 0)
			} catch(e) {
				try {
					return c.call(null, t, 0)
				} catch(e) {
					return c.call(this, t, 0)
				}
			}
		}
		function o() {
			p && h && (p = !1, h.length ? l = h.concat(l) : b = -1, l.length && a())
		}
		function a() {
			if (!p) {
				var e = i(o);
				p = !0;
				for (var t = l.length; t;) {
					for (h = l, l = []; ++b < t;) h && h[b].run();
					b = -1,
					t = l.length
				}
				h = null,
				p = !1,
				function(t) {
					if (u === clearTimeout) return clearTimeout(t);
					if ((u === n || !u) && clearTimeout) return u = clearTimeout,
					clearTimeout(t);
					try {
						u(t)
					} catch(e) {
						try {
							return u.call(null, t)
						} catch(e) {
							return u.call(this, t)
						}
					}
				} (e)
			}
		}
		function s(e, t) {
			this.fun = e,
			this.array = t
		}
		function f() {}
		var c, u, d = t.exports = {}; !
		function() {
			try {
				c = "function" == typeof setTimeout ? setTimeout: r
			} catch(e) {
				c = r
			}
			try {
				u = "function" == typeof clearTimeout ? clearTimeout: n
			} catch(e) {
				u = n
			}
		} ();
		var h, l = [],
		p = !1,
		b = -1;
		d.nextTick = function(e) {
			var t = Array(arguments.length - 1);
			if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
			l.push(new s(e, t)),
			1 !== l.length || p || i(a)
		},
		s.prototype.run = function() {
			this.fun.apply(null, this.array)
		},
		d.title = "browser",
		d.browser = !0,
		d.env = {},
		d.argv = [],
		d.version = "",
		d.versions = {},
		d.on = f,
		d.addListener = f,
		d.once = f,
		d.off = f,
		d.removeListener = f,
		d.removeAllListeners = f,
		d.emit = f,
		d.prependListener = f,
		d.prependOnceListener = f,
		d.listeners = function() {
			return []
		},
		d.binding = function() {
			throw new Error("process.binding is not supported")
		},
		d.cwd = function() {
			return "/"
		},
		d.chdir = function() {
			throw new Error("process.chdir is not supported")
		},
		d.umask = function() {
			return 0
		}
	},
	{}],
	132 : [function(e, t, r) {
		r.publicEncrypt = e("./publicEncrypt"),
		r.privateDecrypt = e("./privateDecrypt"),
		r.privateEncrypt = function(e, t) {
			return r.publicEncrypt(e, t, !0)
		},
		r.publicDecrypt = function(e, t) {
			return r.privateDecrypt(e, t, !0)
		}
	},
	{
		"./privateDecrypt": 134,
		"./publicEncrypt": 135
	}],
	133 : [function(e, t) {
		var r = e("create-hash"),
		n = e("safe-buffer").Buffer;
		t.exports = function(e, t) {
			for (var i, o = n.alloc(0), a = 0; o.length < t;) s = a++,
			f = void 0,
			(f = n.allocUnsafe(4)).writeUInt32BE(s, 0),
			i = f,
			o = n.concat([o, r("sha1").update(e).update(i).digest()]);
			var s, f;
			return o.slice(0, t)
		}
	},
	{
		"create-hash": 65,
		"safe-buffer": 141
	}],
	134 : [function(e, t) {
		function r(e, t) {
			var r = e.modulus.byteLength(),
			n = f("sha1").update(u.alloc(0)).digest(),
			a = n.length;
			if (0 !== t[0]) throw new Error("decryption error");
			var s = t.slice(1, a + 1),
			c = t.slice(a + 1),
			d = o(s, i(c, a)),
			h = o(c, i(d, r - a - 1));
			if (function(e, t) {
				e = u.from(e),
				t = u.from(t);
				var r = 0,
				n = e.length;
				e.length !== t.length && (r++, n = Math.min(e.length, t.length));
				for (var i = -1; ++i < n;) r += e[i] ^ t[i];
				return r
			} (n, h.slice(0, a))) throw new Error("decryption error");
			for (var l = a; 0 === h[l];) l++;
			if (1 !== h[l++]) throw new Error("decryption error");
			return h.slice(l)
		}
		var n = e("parse-asn1"),
		i = e("./mgf"),
		o = e("./xor"),
		a = e("bn.js"),
		s = e("browserify-rsa"),
		f = e("create-hash"),
		c = e("./withPublic"),
		u = e("safe-buffer").Buffer;
		t.exports = function(e, t, i) {
			var o = e.padding ? e.padding: i ? 1 : 4,
			f = n(e),
			d = f.modulus.byteLength();
			if (t.length > d || 0 <= new a(t).cmp(f.modulus)) throw new Error("decryption error");
			var h = i ? c(new a(t), f) : s(t, f),
			l = u.alloc(d - h.length);
			if (h = u.concat([l, h], d), 4 === o) return r(f, h);
			if (1 === o) return function(e, t) {
				for (var r = e.slice(0, 2), n = 2, i = 0; 0 !== e[n++];) if (n >= e.length) {
					i++;
					break
				}
				var o = e.slice(2, n - 1);
				if (("0002" !== r.toString("hex") && !t || "0001" !== r.toString("hex") && t) && i++, o.length < 8 && i++, i) throw new Error("decryption error");
				return e.slice(n)
			} (h, i);
			if (3 === o) return h;
			throw new Error("unknown padding")
		}
	},
	{
		"./mgf": 133,
		"./withPublic": 136,
		"./xor": 137,
		"bn.js": 28,
		"browserify-rsa": 51,
		"create-hash": 65,
		"parse-asn1": 124,
		"safe-buffer": 141
	}],
	135 : [function(e, t) {
		function r(e, t, r) {
			var n, o = t.length,
			a = e.modulus.byteLength();
			if (a - 11 < o) throw new Error("message too long");
			return n = r ? d.alloc(a - o - 3, 255) : function(e) {
				for (var t, r = d.allocUnsafe(e), n = 0, o = i(2 * e), a = 0; n < e;) a === o.length && (o = i(2 * e), a = 0),
				(t = o[a++]) && (r[n++] = t);
				return r
			} (a - o - 3),
			new f(d.concat([d.from([0, r ? 1 : 2]), n, d.alloc(1), t], a))
		}
		var n = e("parse-asn1"),
		i = e("randombytes"),
		o = e("create-hash"),
		a = e("./mgf"),
		s = e("./xor"),
		f = e("bn.js"),
		c = e("./withPublic"),
		u = e("browserify-rsa"),
		d = e("safe-buffer").Buffer;
		t.exports = function(e, t, h) {
			var l, p = e.padding ? e.padding: h ? 1 : 4,
			b = n(e);
			if (4 === p) l = function(e, t) {
				var r = e.modulus.byteLength(),
				n = t.length,
				c = o("sha1").update(d.alloc(0)).digest(),
				u = c.length,
				h = 2 * u;
				if (r - h - 2 < n) throw new Error("message too long");
				var l = d.alloc(r - n - h - 2),
				p = r - u - 1,
				b = i(u),
				y = s(d.concat([c, l, d.alloc(1, 1), t], p), a(b, p)),
				g = s(b, a(y, u));
				return new f(d.concat([d.alloc(1), g, y], r))
			} (b, t);
			else if (1 === p) l = r(b, t, h);
			else {
				if (3 !== p) throw new Error("unknown padding");
				if (0 <= (l = new f(t)).cmp(b.modulus)) throw new Error("data too long for modulus")
			}
			return (h ? u: c)(l, b)
		}
	},
	{
		"./mgf": 133,
		"./withPublic": 136,
		"./xor": 137,
		"bn.js": 28,
		"browserify-rsa": 51,
		"create-hash": 65,
		"parse-asn1": 124,
		randombytes: 138,
		"safe-buffer": 141
	}],
	136 : [function(e, t) {
		var r = e("bn.js"),
		n = e("safe-buffer").Buffer;
		t.exports = function(e, t) {
			return n.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray())
		}
	},
	{
		"bn.js": 28,
		"safe-buffer": 141
	}],
	137 : [function(e, t) {
		t.exports = function(e, t) {
			for (var r = e.length,
			n = -1; ++n < r;) e[n] ^= t[n];
			return e
		}
	},
	{}],
	138 : [function(e, t) { (function(r, n) {
			"use strict";
			var i = e("safe-buffer").Buffer,
			o = n.crypto || n.msCrypto;
			t.exports = o && o.getRandomValues ?
			function(e, t) {
				if (4294967295 < e) throw new RangeError("requested too many random bytes");
				var n = i.allocUnsafe(e);
				if (0 < e) if (65536 < e) for (var a = 0; a < e; a += 65536) o.getRandomValues(n.slice(a, a + 65536));
				else o.getRandomValues(n);
				return "function" == typeof t ? r.nextTick(function() {
					t(null, n)
				}) : n
			}: function() {
				throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
			}
		}).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {}: window: self: global)
	},
	{
		_process: 131,
		"safe-buffer": 141
	}],
	139 : [function(e, t, r) { (function(t, n) {
			"use strict";
			function i() {
				throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
			}
			function o(e, t) {
				if ("number" != typeof e || e != e) throw new TypeError("offset must be a number");
				if (4294967295 < e || e < 0) throw new TypeError("offset must be a uint32");
				if (d < e || t < e) throw new RangeError("offset out of range")
			}
			function a(e, t, r) {
				if ("number" != typeof e || e != e) throw new TypeError("size must be a number");
				if (4294967295 < e || e < 0) throw new TypeError("size must be a uint32");
				if (r < e + t || d < e) throw new RangeError("buffer too small")
			}
			function s(e, r, n, i) {
				if (t.browser) {
					var o = e.buffer,
					a = new Uint8Array(o, r, n);
					return h.getRandomValues(a),
					i ? void t.nextTick(function() {
						i(null, e)
					}) : e
				}
				if (!i) return c(n).copy(e, r),
				e;
				c(n,
				function(t, n) {
					return t ? i(t) : (n.copy(e, r), void i(null, e))
				})
			}
			var f = e("safe-buffer"),
			c = e("randombytes"),
			u = f.Buffer,
			d = f.kMaxLength,
			h = n.crypto || n.msCrypto;
			Math.pow(2, 32),
			h && h.getRandomValues || !t.browser ? (r.randomFill = function(e, t, r, i) {
				if (! (u.isBuffer(e) || e instanceof n.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
				if ("function" == typeof t) i = t,
				t = 0,
				r = e.length;
				else if ("function" == typeof r) i = r,
				r = e.length - t;
				else if ("function" != typeof i) throw new TypeError('"cb" argument must be a function');
				return o(t, e.length),
				a(r, t, e.length),
				s(e, t, r, i)
			},
			r.randomFillSync = function(e, t, r) {
				if (void 0 === t && (t = 0), !(u.isBuffer(e) || e instanceof n.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
				return o(t, e.length),
				void 0 === r && (r = e.length - t),
				a(r, t, e.length),
				s(e, t, r)
			}) : (r.randomFill = i, r.randomFillSync = i)
		}).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {}: window: self: global)
	},
	{
		_process: 131,
		randombytes: 138,
		"safe-buffer": 141
	}],
	140 : [function(e, t) {
		"use strict";
		function r() {
			d.call(this, 64),
			this._a = 1732584193,
			this._b = 4023233417,
			this._c = 2562383102,
			this._d = 271733878,
			this._e = 3285377520
		}
		function n(e, t) {
			return e << t | e >>> 32 - t
		}
		function i(e, t, r, i, o, a, s, f) {
			return 0 | n(0 | e + (t ^ r ^ i) + a + s, f) + o
		}
		function o(e, t, r, i, o, a, s, f) {
			return 0 | n(0 | e + (t & r | ~t & i) + a + s, f) + o
		}
		function a(e, t, r, i, o, a, s, f) {
			return 0 | n(0 | e + ((t | ~r) ^ i) + a + s, f) + o
		}
		function s(e, t, r, i, o, a, s, f) {
			return 0 | n(0 | e + (t & i | r & ~i) + a + s, f) + o
		}
		function f(e, t, r, i, o, a, s, f) {
			return 0 | n(0 | e + (t ^ (r | ~i)) + a + s, f) + o
		}
		var c = e("buffer").Buffer,
		u = e("inherits"),
		d = e("hash-base"),
		h = Array(16),
		l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
		p = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
		b = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
		y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
		g = [0, 1518500249, 1859775393, 2400959708, 2840853838],
		m = [1352829926, 1548603684, 1836072691, 2053994217, 0];
		u(r, d),
		r.prototype._update = function() {
			for (var e = h,
			t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
			for (var r = 0 | this._a,
			c = 0 | this._b,
			u = 0 | this._c,
			d = 0 | this._d,
			v = 0 | this._e,
			w = 0 | this._a,
			_ = 0 | this._b,
			S = 0 | this._c,
			k = 0 | this._d,
			E = 0 | this._e,
			x = 0; x < 80; x += 1) {
				var I, A;
				A = x < 16 ? (I = i(r, c, u, d, v, e[l[x]], g[0], b[x]), f(w, _, S, k, E, e[p[x]], m[0], y[x])) : x < 32 ? (I = o(r, c, u, d, v, e[l[x]], g[1], b[x]), s(w, _, S, k, E, e[p[x]], m[1], y[x])) : x < 48 ? (I = a(r, c, u, d, v, e[l[x]], g[2], b[x]), a(w, _, S, k, E, e[p[x]], m[2], y[x])) : x < 64 ? (I = s(r, c, u, d, v, e[l[x]], g[3], b[x]), o(w, _, S, k, E, e[p[x]], m[3], y[x])) : (I = f(r, c, u, d, v, e[l[x]], g[4], b[x]), i(w, _, S, k, E, e[p[x]], m[4], y[x])),
				r = v,
				v = d,
				d = n(u, 10),
				u = c,
				c = I,
				w = E,
				E = k,
				k = n(S, 10),
				S = _,
				_ = A
			}
			var B = 0 | this._b + u + k;
			this._b = 0 | this._c + d + E,
			this._c = 0 | this._d + v + w,
			this._d = 0 | this._e + r + _,
			this._e = 0 | this._a + c + S,
			this._a = B
		},
		r.prototype._digest = function() {
			this._block[this._blockOffset++] = 128,
			56 < this._blockOffset && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0),
			this._block.fill(0, this._blockOffset, 56),
			this._block.writeUInt32LE(this._length[0], 56),
			this._block.writeUInt32LE(this._length[1], 60),
			this._update();
			var e = c.alloc ? c.alloc(20) : new c(20);
			return e.writeInt32LE(this._a, 0),
			e.writeInt32LE(this._b, 4),
			e.writeInt32LE(this._c, 8),
			e.writeInt32LE(this._d, 12),
			e.writeInt32LE(this._e, 16),
			e
		},
		t.exports = r
	},
	{
		buffer: 61,
		"hash-base": 98,
		inherits: 113
	}],
	141 : [function(e, t, r) {
		function n(e, t) {
			for (var r in e) t[r] = e[r]
		}
		function i(e, t, r) {
			return a(e, t, r)
		}
		var o = e("buffer"),
		a = o.Buffer;
		a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? t.exports = o: (n(o, r), r.Buffer = i),
		n(a, i),
		i.from = function(e, t, r) {
			if ("number" == typeof e) throw new TypeError("Argument must not be a number");
			return a(e, t, r)
		},
		i.alloc = function(e, t, r) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			var n = a(e);
			return void 0 === t ? n.fill(0) : "string" == typeof r ? n.fill(t, r) : n.fill(t),
			n
		},
		i.allocUnsafe = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return a(e)
		},
		i.allocUnsafeSlow = function(e) {
			if ("number" != typeof e) throw new TypeError("Argument must be a number");
			return o.SlowBuffer(e)
		}
	},
	{
		buffer: 61
	}],
	142 : [function(e, t) {
		var r = Math.min;
		function n(e, t) {
			this._block = i.alloc(e),
			this._finalSize = t,
			this._blockSize = e,
			this._len = 0
		}
		var i = e("safe-buffer").Buffer;
		n.prototype.update = function(e, t) {
			"string" == typeof e && (t = t || "utf8", e = i.from(e, t));
			for (var n = this._block,
			o = this._blockSize,
			a = e.length,
			s = this._len,
			f = 0; f < a;) {
				for (var c = s % o,
				u = r(a - f, o - c), d = 0; d < u; d++) n[c + d] = e[f + d];
				f += u,
				0 == (s += u) % o && this._update(n)
			}
			return this._len += a,
			this
		},
		n.prototype.digest = function(e) {
			var t = this._len % this._blockSize;
			this._block[t] = 128,
			this._block.fill(0, 1 + t),
			t >= this._finalSize && (this._update(this._block), this._block.fill(0));
			var r = 8 * this._len;
			if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
			else {
				var n = (4294967295 & r) >>> 0;
				this._block.writeUInt32BE((r - n) / 4294967296, this._blockSize - 8),
				this._block.writeUInt32BE(n, this._blockSize - 4)
			}
			this._update(this._block);
			var i = this._hash();
			return e ? i.toString(e) : i
		},
		n.prototype._update = function() {
			throw new Error("_update must be implemented by subclass")
		},
		t.exports = n
	},
	{
		"safe-buffer": 141
	}],
	143 : [function(e, t, r) { (r = t.exports = function(e) {
			e = e.toLowerCase();
			var t = r[e];
			if (!t) throw new Error(e + " is not supported (we accept pull requests)");
			return new t
		}).sha = e("./sha"),
		r.sha1 = e("./sha1"),
		r.sha224 = e("./sha224"),
		r.sha256 = e("./sha256"),
		r.sha384 = e("./sha384"),
		r.sha512 = e("./sha512")
	},
	{
		"./sha": 144,
		"./sha1": 145,
		"./sha224": 146,
		"./sha256": 147,
		"./sha384": 148,
		"./sha512": 149
	}],
	144 : [function(e, t) {
		function r() {
			this.init(),
			this._w = s,
			i.call(this, 64, 56)
		}
		var n = e("inherits"),
		i = e("./hash"),
		o = e("safe-buffer").Buffer,
		a = [1518500249, 1859775393, -1894007588, -899497514],
		s = Array(80);
		n(r, i),
		r.prototype.init = function() {
			return this._a = 1732584193,
			this._b = 4023233417,
			this._c = 2562383102,
			this._d = 271733878,
			this._e = 3285377520,
			this
		},
		r.prototype._update = function(e) {
			for (var t = this._w,
			r = 0 | this._a,
			n = 0 | this._b,
			i = 0 | this._c,
			o = 0 | this._d,
			s = 0 | this._e,
			f = 0; f < 16; ++f) t[f] = e.readInt32BE(4 * f);
			for (; f < 80; ++f) t[f] = t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16];
			for (var c = 0; c < 80; ++c) {
				var u = ~~ (c / 20),
				d = 0 | ((g = r) << 5 | g >>> 27) + (p = n, b = i, y = o, 0 === (l = u) ? p & b | ~p & y: 2 === l ? p & b | p & y | b & y: p ^ b ^ y) + s + t[c] + a[u];
				s = o,
				o = i,
				i = (h = n) << 30 | h >>> 2,
				n = r,
				r = d
			}
			var h, l, p, b, y, g;
			this._a = 0 | r + this._a,
			this._b = 0 | n + this._b,
			this._c = 0 | i + this._c,
			this._d = 0 | o + this._d,
			this._e = 0 | s + this._e
		},
		r.prototype._hash = function() {
			var e = o.allocUnsafe(20);
			return e.writeInt32BE(0 | this._a, 0),
			e.writeInt32BE(0 | this._b, 4),
			e.writeInt32BE(0 | this._c, 8),
			e.writeInt32BE(0 | this._d, 12),
			e.writeInt32BE(0 | this._e, 16),
			e
		},
		t.exports = r
	},
	{
		"./hash": 142,
		inherits: 113,
		"safe-buffer": 141
	}],
	145 : [function(e, t) {
		function r() {
			this.init(),
			this._w = s,
			i.call(this, 64, 56)
		}
		var n = e("inherits"),
		i = e("./hash"),
		o = e("safe-buffer").Buffer,
		a = [1518500249, 1859775393, -1894007588, -899497514],
		s = Array(80);
		n(r, i),
		r.prototype.init = function() {
			return this._a = 1732584193,
			this._b = 4023233417,
			this._c = 2562383102,
			this._d = 271733878,
			this._e = 3285377520,
			this
		},
		r.prototype._update = function(e) {
			for (var t = this._w,
			r = 0 | this._a,
			n = 0 | this._b,
			i = 0 | this._c,
			o = 0 | this._d,
			s = 0 | this._e,
			f = 0; f < 16; ++f) t[f] = e.readInt32BE(4 * f);
			for (; f < 80; ++f) t[f] = (c = t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16]) << 1 | c >>> 31;
			for (var c, u, d, h, l, p, b, y = 0; y < 80; ++y) {
				var g = ~~ (y / 20),
				m = 0 | ((b = r) << 5 | b >>> 27) + (h = n, l = i, p = o, 0 === (d = g) ? h & l | ~h & p: 2 === d ? h & l | h & p | l & p: h ^ l ^ p) + s + t[y] + a[g];
				s = o,
				o = i,
				i = (u = n) << 30 | u >>> 2,
				n = r,
				r = m
			}
			this._a = 0 | r + this._a,
			this._b = 0 | n + this._b,
			this._c = 0 | i + this._c,
			this._d = 0 | o + this._d,
			this._e = 0 | s + this._e
		},
		r.prototype._hash = function() {
			var e = o.allocUnsafe(20);
			return e.writeInt32BE(0 | this._a, 0),
			e.writeInt32BE(0 | this._b, 4),
			e.writeInt32BE(0 | this._c, 8),
			e.writeInt32BE(0 | this._d, 12),
			e.writeInt32BE(0 | this._e, 16),
			e
		},
		t.exports = r
	},
	{
		"./hash": 142,
		inherits: 113,
		"safe-buffer": 141
	}],
	146 : [function(e, t) {
		function r() {
			this.init(),
			this._w = s,
			o.call(this, 64, 56)
		}
		var n = e("inherits"),
		i = e("./sha256"),
		o = e("./hash"),
		a = e("safe-buffer").Buffer,
		s = Array(64);
		n(r, i),
		r.prototype.init = function() {
			return this._a = 3238371032,
			this._b = 914150663,
			this._c = 812702999,
			this._d = 4144912697,
			this._e = 4290775857,
			this._f = 1750603025,
			this._g = 1694076839,
			this._h = 3204075428,
			this
		},
		r.prototype._hash = function() {
			var e = a.allocUnsafe(28);
			return e.writeInt32BE(this._a, 0),
			e.writeInt32BE(this._b, 4),
			e.writeInt32BE(this._c, 8),
			e.writeInt32BE(this._d, 12),
			e.writeInt32BE(this._e, 16),
			e.writeInt32BE(this._f, 20),
			e.writeInt32BE(this._g, 24),
			e
		},
		t.exports = r
	},
	{
		"./hash": 142,
		"./sha256": 147,
		inherits: 113,
		"safe-buffer": 141
	}],
	147 : [function(e, t) {
		function r() {
			this.init(),
			this._w = s,
			i.call(this, 64, 56)
		}
		var n = e("inherits"),
		i = e("./hash"),
		o = e("safe-buffer").Buffer,
		a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
		s = Array(64);
		n(r, i),
		r.prototype.init = function() {
			return this._a = 1779033703,
			this._b = 3144134277,
			this._c = 1013904242,
			this._d = 2773480762,
			this._e = 1359893119,
			this._f = 2600822924,
			this._g = 528734635,
			this._h = 1541459225,
			this
		},
		r.prototype._update = function(e) {
			for (var t = this._w,
			r = 0 | this._a,
			n = 0 | this._b,
			i = 0 | this._c,
			o = 0 | this._d,
			s = 0 | this._e,
			f = 0 | this._f,
			c = 0 | this._g,
			u = 0 | this._h,
			d = 0; d < 16; ++d) t[d] = e.readInt32BE(4 * d);
			for (; d < 64; ++d) t[d] = 0 | (((l = t[d - 2]) >>> 17 | l << 15) ^ (l >>> 19 | l << 13) ^ l >>> 10) + t[d - 7] + (((h = t[d - 15]) >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3) + t[d - 16];
			for (var h, l, p, b, y, g, m, v = 0; v < 64; ++v) {
				var w = 0 | u + (((m = s) >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + ((g = c) ^ s & (f ^ g)) + a[v] + t[v],
				_ = 0 | (((y = r) >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + ((p = r) & (b = n) | i & (p | b));
				u = c,
				c = f,
				f = s,
				s = 0 | o + w,
				o = i,
				i = n,
				n = r,
				r = 0 | w + _
			}
			this._a = 0 | r + this._a,
			this._b = 0 | n + this._b,
			this._c = 0 | i + this._c,
			this._d = 0 | o + this._d,
			this._e = 0 | s + this._e,
			this._f = 0 | f + this._f,
			this._g = 0 | c + this._g,
			this._h = 0 | u + this._h
		},
		r.prototype._hash = function() {
			var e = o.allocUnsafe(32);
			return e.writeInt32BE(this._a, 0),
			e.writeInt32BE(this._b, 4),
			e.writeInt32BE(this._c, 8),
			e.writeInt32BE(this._d, 12),
			e.writeInt32BE(this._e, 16),
			e.writeInt32BE(this._f, 20),
			e.writeInt32BE(this._g, 24),
			e.writeInt32BE(this._h, 28),
			e
		},
		t.exports = r
	},
	{
		"./hash": 142,
		inherits: 113,
		"safe-buffer": 141
	}],
	148 : [function(e, t) {
		function r() {
			this.init(),
			this._w = s,
			o.call(this, 128, 112)
		}
		var n = e("inherits"),
		i = e("./sha512"),
		o = e("./hash"),
		a = e("safe-buffer").Buffer,
		s = Array(160);
		n(r, i),
		r.prototype.init = function() {
			return this._ah = 3418070365,
			this._bh = 1654270250,
			this._ch = 2438529370,
			this._dh = 355462360,
			this._eh = 1731405415,
			this._fh = 2394180231,
			this._gh = 3675008525,
			this._hh = 1203062813,
			this._al = 3238371032,
			this._bl = 914150663,
			this._cl = 812702999,
			this._dl = 4144912697,
			this._el = 4290775857,
			this._fl = 1750603025,
			this._gl = 1694076839,
			this._hl = 3204075428,
			this
		},
		r.prototype._hash = function() {
			function e(e, r, n) {
				t.writeInt32BE(e, n),
				t.writeInt32BE(r, n + 4)
			}
			var t = a.allocUnsafe(48);
			return e(this._ah, this._al, 0),
			e(this._bh, this._bl, 8),
			e(this._ch, this._cl, 16),
			e(this._dh, this._dl, 24),
			e(this._eh, this._el, 32),
			e(this._fh, this._fl, 40),
			t
		},
		t.exports = r
	},
	{
		"./hash": 142,
		"./sha512": 149,
		inherits: 113,
		"safe-buffer": 141
	}],
	149 : [function(e, t) {
		function r() {
			this.init(),
			this._w = h,
			c.call(this, 128, 112)
		}
		function n(e, t, r) {
			return r ^ e & (t ^ r)
		}
		function i(e, t, r) {
			return e & t | r & (e | t)
		}
		function o(e, t) {
			return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
		}
		function a(e, t) {
			return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
		}
		function s(e, t) {
			return e >>> 0 < t >>> 0 ? 1 : 0
		}
		var f = e("inherits"),
		c = e("./hash"),
		u = e("safe-buffer").Buffer,
		d = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
		h = Array(160);
		f(r, c),
		r.prototype.init = function() {
			return this._ah = 1779033703,
			this._bh = 3144134277,
			this._ch = 1013904242,
			this._dh = 2773480762,
			this._eh = 1359893119,
			this._fh = 2600822924,
			this._gh = 528734635,
			this._hh = 1541459225,
			this._al = 4089235720,
			this._bl = 2227873595,
			this._cl = 4271175723,
			this._dl = 1595750129,
			this._el = 2917565137,
			this._fl = 725511199,
			this._gl = 4215389547,
			this._hl = 327033209,
			this
		},
		r.prototype._update = function(e) {
			for (var t = this._w,
			r = 0 | this._ah,
			f = 0 | this._bh,
			c = 0 | this._ch,
			u = 0 | this._dh,
			h = 0 | this._eh,
			l = 0 | this._fh,
			p = 0 | this._gh,
			b = 0 | this._hh,
			y = 0 | this._al,
			g = 0 | this._bl,
			m = 0 | this._cl,
			v = 0 | this._dl,
			w = 0 | this._el,
			_ = 0 | this._fl,
			S = 0 | this._gl,
			k = 0 | this._hl,
			E = 0; E < 32; E += 2) t[E] = e.readInt32BE(4 * E),
			t[E + 1] = e.readInt32BE(4 * E + 4);
			for (; E < 160; E += 2) {
				var x = t[E - 30],
				I = t[E - 30 + 1],
				A = ((K = x) >>> 1 | (H = I) << 31) ^ (K >>> 8 | H << 24) ^ K >>> 7,
				B = ((z = I) >>> 1 | (F = x) << 31) ^ (z >>> 8 | F << 24) ^ (z >>> 7 | F << 25),
				j = ((D = x = t[E - 4]) >>> 19 | (q = I = t[E - 4 + 1]) << 13) ^ (q >>> 29 | D << 3) ^ D >>> 6,
				T = ((N = I) >>> 19 | (L = x) << 13) ^ (L >>> 29 | N << 3) ^ (N >>> 6 | L << 26),
				O = t[E - 14],
				P = t[E - 14 + 1],
				C = t[E - 32],
				U = t[E - 32 + 1],
				M = 0 | B + P,
				R = 0 | A + O + s(M, B);
				R = 0 | (R = 0 | R + j + s(M = 0 | M + T, T)) + C + s(M = 0 | M + U, U),
				t[E] = R,
				t[E + 1] = M
			}
			for (var N, L, D, q, z, F, K, H, V = 0; V < 160; V += 2) {
				R = t[V],
				M = t[V + 1];
				var W = i(r, f, c),
				J = i(y, g, m),
				G = o(r, y),
				X = o(y, r),
				Z = a(h, w),
				Y = a(w, h),
				$ = d[V + 1],
				Q = n(h, l, p),
				ee = n(w, _, S),
				te = 0 | k + Y,
				re = 0 | b + Z + s(te, k);
				re = 0 | (re = 0 | (re = 0 | re + Q + s(te = 0 | te + ee, ee)) + d[V] + s(te = 0 | te + $, $)) + R + s(te = 0 | te + M, M);
				var ne = 0 | X + J,
				ie = 0 | G + W + s(ne, X);
				b = p,
				k = S,
				p = l,
				S = _,
				l = h,
				_ = w,
				h = 0 | u + re + s(w = 0 | v + te, v),
				u = c,
				v = m,
				c = f,
				m = g,
				f = r,
				g = y,
				r = 0 | re + ie + s(y = 0 | te + ne, te)
			}
			this._al = 0 | this._al + y,
			this._bl = 0 | this._bl + g,
			this._cl = 0 | this._cl + m,
			this._dl = 0 | this._dl + v,
			this._el = 0 | this._el + w,
			this._fl = 0 | this._fl + _,
			this._gl = 0 | this._gl + S,
			this._hl = 0 | this._hl + k,
			this._ah = 0 | this._ah + r + s(this._al, y),
			this._bh = 0 | this._bh + f + s(this._bl, g),
			this._ch = 0 | this._ch + c + s(this._cl, m),
			this._dh = 0 | this._dh + u + s(this._dl, v),
			this._eh = 0 | this._eh + h + s(this._el, w),
			this._fh = 0 | this._fh + l + s(this._fl, _),
			this._gh = 0 | this._gh + p + s(this._gl, S),
			this._hh = 0 | this._hh + b + s(this._hl, k)
		},
		r.prototype._hash = function() {
			function e(e, r, n) {
				t.writeInt32BE(e, n),
				t.writeInt32BE(r, n + 4)
			}
			var t = u.allocUnsafe(64);
			return e(this._ah, this._al, 0),
			e(this._bh, this._bl, 8),
			e(this._ch, this._cl, 16),
			e(this._dh, this._dl, 24),
			e(this._eh, this._el, 32),
			e(this._fh, this._fl, 40),
			e(this._gh, this._gl, 48),
			e(this._hh, this._hl, 56),
			t
		},
		t.exports = r
	},
	{
		"./hash": 142,
		inherits: 113,
		"safe-buffer": 141
	}],
	150 : [function(e, t) {
		function r() {
			n.call(this)
		}
		t.exports = r;
		var n = e("events").EventEmitter;
		e("inherits")(r, n),
		r.Readable = e("readable-stream/readable.js"),
		r.Writable = e("readable-stream/writable.js"),
		r.Duplex = e("readable-stream/duplex.js"),
		r.Transform = e("readable-stream/transform.js"),
		r.PassThrough = e("readable-stream/passthrough.js"),
		(r.Stream = r).prototype.pipe = function(e, t) {
			function r(t) {
				e.writable && !1 === e.write(t) && c.pause && c.pause()
			}
			function i() {
				c.readable && c.resume && c.resume()
			}
			function o() {
				u || (u = !0, e.end())
			}
			function a() {
				u || (u = !0, "function" == typeof e.destroy && e.destroy())
			}
			function s(e) {
				if (f(), 0 === n.listenerCount(this, "error")) throw e
			}
			function f() {
				c.removeListener("data", r),
				e.removeListener("drain", i),
				c.removeListener("end", o),
				c.removeListener("close", a),
				c.removeListener("error", s),
				e.removeListener("error", s),
				c.removeListener("end", f),
				c.removeListener("close", f),
				e.removeListener("close", f)
			}
			var c = this;
			c.on("data", r),
			e.on("drain", i),
			e._isStdio || t && !1 === t.end || (c.on("end", o), c.on("close", a));
			var u = !1;
			return c.on("error", s),
			e.on("error", s),
			c.on("end", f),
			c.on("close", f),
			e.on("close", f),
			e.emit("pipe", c),
			e
		}
	},
	{
		events: 96,
		inherits: 113,
		"readable-stream/duplex.js": 151,
		"readable-stream/passthrough.js": 160,
		"readable-stream/readable.js": 161,
		"readable-stream/transform.js": 162,
		"readable-stream/writable.js": 163
	}],
	151 : [function(e, t) {
		t.exports = e("./lib/_stream_duplex.js")
	},
	{
		"./lib/_stream_duplex.js": 152
	}],
	152 : [function(e, t) {
		"use strict";
		function r(e) {
			return this instanceof r ? (f.call(this, e), c.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), void this.once("end", n)) : new r(e)
		}
		function n() {
			this.allowHalfOpen || this._writableState.ended || o.nextTick(i, this)
		}
		function i(e) {
			e.end()
		}
		var o = e("process-nextick-args"),
		a = Object.keys ||
		function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t
		};
		t.exports = r;
		var s = Object.create(e("core-util-is"));
		s.inherits = e("inherits");
		var f = e("./_stream_readable"),
		c = e("./_stream_writable");
		s.inherits(r, f);
		for (var u, d = a(c.prototype), h = 0; h < d.length; h++) u = d[h],
		r.prototype[u] || (r.prototype[u] = c.prototype[u]);
		Object.defineProperty(r.prototype, "writableHighWaterMark", {
			enumerable: !1,
			get: function() {
				return this._writableState.highWaterMark
			}
		}),
		Object.defineProperty(r.prototype, "destroyed", {
			get: function() {
				return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
			},
			set: function(e) {
				void 0 === this._readableState || void 0 === this._writableState || (this._readableState.destroyed = e, this._writableState.destroyed = e)
			}
		}),
		r.prototype._destroy = function(e, t) {
			this.push(null),
			this.end(),
			o.nextTick(t, e)
		}
	},
	{
		"./_stream_readable": 154,
		"./_stream_writable": 156,
		"core-util-is": 63,
		inherits: 113,
		"process-nextick-args": 130
	}],
	153 : [function(e, t) {
		"use strict";
		function r(e) {
			return this instanceof r ? void n.call(this, e) : new r(e)
		}
		t.exports = r;
		var n = e("./_stream_transform"),
		i = Object.create(e("core-util-is"));
		i.inherits = e("inherits"),
		i.inherits(r, n),
		r.prototype._transform = function(e, t, r) {
			r(null, e)
		}
	},
	{
		"./_stream_transform": 155,
		"core-util-is": 63,
		inherits: 113
	}],
	154 : [function(e, t) { (function(r, n) {
			"use strict";
			function i(t, r) {
				t = t || {};
				var n = r instanceof(_ = _ || e("./_stream_duplex"));
				this.objectMode = !!t.objectMode,
				n && (this.objectMode = this.objectMode || !!t.readableObjectMode);
				var i = t.highWaterMark,
				o = t.readableHighWaterMark,
				a = this.objectMode ? 16 : 16384;
				this.highWaterMark = i || 0 === i ? i: n && (o || 0 === o) ? o: a,
				this.highWaterMark = Math.floor(this.highWaterMark),
				this.buffer = new O,
				this.length = 0,
				this.pipes = null,
				this.pipesCount = 0,
				this.flowing = null,
				this.ended = !1,
				this.endEmitted = !1,
				this.reading = !1,
				this.sync = !0,
				this.needReadable = !1,
				this.emittedReadable = !1,
				this.readableListening = !1,
				this.resumeScheduled = !1,
				this.destroyed = !1,
				this.defaultEncoding = t.defaultEncoding || "utf8",
				this.awaitDrain = 0,
				this.readingMore = !1,
				this.decoder = null,
				this.encoding = null,
				t.encoding && (T || (T = e("string_decoder/").StringDecoder), this.decoder = new T(t.encoding), this.encoding = t.encoding)
			}
			function o(t) {
				return _ = _ || e("./_stream_duplex"),
				this instanceof o ? (this._readableState = new i(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), void E.call(this)) : new o(t)
			}
			function a(e, t, r, n, i) {
				var o, a, f, u, h, l, p = e._readableState;
				return null === t ? (p.reading = !1,
				function(e, t) {
					if (!t.ended) {
						if (t.decoder) {
							var r = t.decoder.end();
							r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
						}
						t.ended = !0,
						c(e)
					}
				} (e, p)) : (i || (f = p,
				function(e) {
					return x.isBuffer(e) || e instanceof I
				} (u = t) || "string" == typeof u || void 0 === u || f.objectMode || (h = new TypeError("Invalid non-string/buffer chunk")), o = h), o ? e.emit("error", o) : p.objectMode || t && 0 < t.length ? ("string" == typeof t || p.objectMode || Object.getPrototypeOf(t) === x.prototype || (a = t, t = x.from(a)), n ? p.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : s(e, p, t, !0) : p.ended ? e.emit("error", new Error("stream.push() after EOF")) : (p.reading = !1, p.decoder && !r ? (t = p.decoder.write(t), p.objectMode || 0 !== t.length ? s(e, p, t, !1) : d(e, p)) : s(e, p, t, !1))) : n || (p.reading = !1)),
				!(l = p).ended && (l.needReadable || l.length < l.highWaterMark || 0 === l.length)
			}
			function s(e, t, r, n) {
				t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && c(e)),
				d(e, t)
			}
			function f(e, t) {
				return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e == e ? (e > t.highWaterMark && (t.highWaterMark = (8388608 <= (r = e) ? r = 8388608 : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r)), e <= t.length ? e: t.ended ? t.length: (t.needReadable = !0, 0)) : t.flowing && t.length ? t.buffer.head.data.length: t.length;
				var r
			}
			function c(e) {
				var t = e._readableState;
				t.needReadable = !1,
				t.emittedReadable || (j("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? w.nextTick(u, e) : u(e))
			}
			function u(e) {
				j("emit readable"),
				e.emit("readable"),
				b(e)
			}
			function d(e, t) {
				t.readingMore || (t.readingMore = !0, w.nextTick(h, e, t))
			}
			function h(e, t) {
				for (var r = t.length; ! t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (j("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
				t.readingMore = !1
			}
			function l(e) {
				j("readable nexttick read 0"),
				e.read(0)
			}
			function p(e, t) {
				t.reading || (j("resume read 0"), e.read(0)),
				t.resumeScheduled = !1,
				t.awaitDrain = 0,
				e.emit("resume"),
				b(e),
				t.flowing && !t.reading && e.read(0)
			}
			function b(e) {
				var t = e._readableState;
				for (j("flow", t.flowing); t.flowing && null !== e.read(););
			}
			function y(e, t) {
				return 0 === t.length ? null: (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data: t.buffer.concat(t.length), t.buffer.clear()) : (n = e, i = t.buffer, o = t.decoder, n < i.head.data.length ? (a = i.head.data.slice(0, n), i.head.data = i.head.data.slice(n)) : a = n === i.head.data.length ? i.shift() : (o ?
				function(e, t) {
					var r = t.head,
					n = 1,
					i = r.data;
					for (e -= i.length; r = r.next;) {
						var o = r.data,
						a = e > o.length ? o.length: e;
						if (i += a === o.length ? o: o.slice(0, e), 0 == (e -= a)) {
							a === o.length ? (++n, t.head = r.next ? r.next: t.tail = null) : (t.head = r).data = o.slice(a);
							break
						}++n
					}
					return t.length -= n,
					i
				}: function(e, t) {
					var r = x.allocUnsafe(e),
					n = t.head,
					i = 1;
					for (n.data.copy(r), e -= n.data.length; n = n.next;) {
						var o = n.data,
						a = e > o.length ? o.length: e;
						if (o.copy(r, r.length - e, 0, a), 0 == (e -= a)) {
							a === o.length ? (++i, t.head = n.next ? n.next: t.tail = null) : (t.head = n).data = o.slice(a);
							break
						}++i
					}
					return t.length -= i,
					r
				})(n, i), r = a), r);
				var r, n, i, o, a
			}
			function g(e) {
				var t = e._readableState;
				if (0 < t.length) throw new Error('"endReadable()" called on non-empty stream');
				t.endEmitted || (t.ended = !0, w.nextTick(m, t, e))
			}
			function m(e, t) {
				e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
			}
			function v(e, t) {
				for (var r = 0,
				n = e.length; r < n; r++) if (e[r] === t) return r;
				return - 1
			}
			var w = e("process-nextick-args");
			t.exports = o;
			var _, S = e("isarray");
			function k(e, t) {
				return e.listeners(t).length
			}
			o.ReadableState = i,
			e("events").EventEmitter;
			var E = e("./internal/streams/stream"),
			x = e("safe-buffer").Buffer,
			I = n.Uint8Array ||
			function() {},
			A = Object.create(e("core-util-is"));
			A.inherits = e("inherits");
			var B = e("util"),
			j = void 0;
			j = B && B.debuglog ? B.debuglog("stream") : function() {};
			var T, O = e("./internal/streams/BufferList"),
			P = e("./internal/streams/destroy");
			A.inherits(o, E);
			var C = ["error", "close", "destroy", "pause", "resume"];
			Object.defineProperty(o.prototype, "destroyed", {
				get: function() {
					return void 0 !== this._readableState && this._readableState.destroyed
				},
				set: function(e) {
					this._readableState && (this._readableState.destroyed = e)
				}
			}),
			o.prototype.destroy = P.destroy,
			o.prototype._undestroy = P.undestroy,
			o.prototype._destroy = function(e, t) {
				this.push(null),
				t(e)
			},
			o.prototype.push = function(e, t) {
				var r, n = this._readableState;
				return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = x.from(e, t), t = ""), r = !0),
				a(this, e, t, !1, r)
			},
			o.prototype.unshift = function(e) {
				return a(this, e, null, !0, !1)
			},
			o.prototype.isPaused = function() {
				return ! 1 === this._readableState.flowing
			},
			o.prototype.setEncoding = function(t) {
				return T = T || e("string_decoder/").StringDecoder,
				this._readableState.decoder = new T(t),
				this._readableState.encoding = t,
				this
			},
			o.prototype.read = function(e) {
				j("read", e),
				e = parseInt(e, 10);
				var t = this._readableState,
				r = e;
				if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return j("read: emitReadable", t.length, t.ended),
				(0 === t.length && t.ended ? g: c)(this),
				null;
				if (0 === (e = f(e, t)) && t.ended) return 0 === t.length && g(this),
				null;
				var n, i = t.needReadable;
				return j("need readable", i),
				(0 === t.length || t.length - e < t.highWaterMark) && j("length less than watermark", i = !0),
				t.ended || t.reading ? j("reading or ended", i = !1) : i && (j("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = f(r, t))),
				null === (n = 0 < e ? y(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e,
				0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && g(this)),
				null !== n && this.emit("data", n),
				n
			},
			o.prototype._read = function() {
				this.emit("error", new Error("_read() is not implemented"))
			},
			o.prototype.pipe = function(e, t) {
				function n() {
					j("onend"),
					e.end()
				}
				function i(t) {
					j("ondata"),
					(_ = !1) !== e.write(t) || _ || ((1 === u.pipesCount && u.pipes === e || 1 < u.pipesCount && -1 !== v(u.pipes, e)) && !m && (j("false write response, pause", c._readableState.awaitDrain), c._readableState.awaitDrain++, _ = !0), c.pause())
				}
				function o(t) {
					j("onerror", t),
					f(),
					e.removeListener("error", o),
					0 === k(e, "error") && e.emit("error", t)
				}
				function a() {
					e.removeListener("finish", s),
					f()
				}
				function s() {
					j("onfinish"),
					e.removeListener("close", a),
					f()
				}
				function f() {
					j("unpipe"),
					c.unpipe(e)
				}
				var c = this,
				u = this._readableState;
				switch (u.pipesCount) {
				case 0:
					u.pipes = e;
					break;
				case 1:
					u.pipes = [u.pipes, e];
					break;
				default:
					u.pipes.push(e)
				}
				u.pipesCount += 1,
				j("pipe count=%d opts=%j", u.pipesCount, t);
				var d = t && !1 === t.end || e === r.stdout || e === r.stderr ? f: n;
				u.endEmitted ? w.nextTick(d) : c.once("end", d),
				e.on("unpipe",
				function t(r, d) {
					j("onunpipe"),
					r === c && d && !1 === d.hasUnpiped && (d.hasUnpiped = !0, j("cleanup"), e.removeListener("close", a), e.removeListener("finish", s), e.removeListener("drain", l), e.removeListener("error", o), e.removeListener("unpipe", t), c.removeListener("end", n), c.removeListener("end", f), c.removeListener("data", i), m = !0, !u.awaitDrain || e._writableState && !e._writableState.needDrain || l())
				});
				var h, l = (h = c,
				function() {
					var e = h._readableState;
					j("pipeOnDrain", e.awaitDrain),
					e.awaitDrain && e.awaitDrain--,
					0 === e.awaitDrain && k(h, "data") && (e.flowing = !0, b(h))
				});
				e.on("drain", l);
				var p, y, g, m = !1,
				_ = !1;
				return c.on("data", i),
				y = "error",
				g = o,
				"function" == typeof(p = e).prependListener ? p.prependListener(y, g) : p._events && p._events[y] ? S(p._events[y]) ? p._events[y].unshift(g) : p._events[y] = [g, p._events[y]] : p.on(y, g),
				e.once("close", a),
				e.once("finish", s),
				e.emit("pipe", c),
				u.flowing || (j("pipe resume"), c.resume()),
				e
			},
			o.prototype.unpipe = function(e) {
				var t = this._readableState,
				r = {
					hasUnpiped: !1
				};
				if (0 === t.pipesCount) return this;
				if (1 === t.pipesCount) return e && e !== t.pipes || (e = e || t.pipes, t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)),
				this;
				if (!e) {
					var n = t.pipes,
					i = t.pipesCount;
					t.pipes = null,
					t.pipesCount = 0,
					t.flowing = !1;
					for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r);
					return this
				}
				var a = v(t.pipes, e);
				return - 1 === a || (t.pipes.splice(a, 1), --t.pipesCount, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)),
				this
			},
			o.prototype.addListener = o.prototype.on = function(e, t) {
				var r = E.prototype.on.call(this, e, t);
				if ("data" === e) ! 1 !== this._readableState.flowing && this.resume();
				else if ("readable" === e) {
					var n = this._readableState;
					n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && c(this) : w.nextTick(l, this))
				}
				return r
			},
			o.prototype.resume = function() {
				var e, t = this._readableState;
				return t.flowing || (j("resume"), t.flowing = !0, (e = t).resumeScheduled || (e.resumeScheduled = !0, w.nextTick(p, this, e))),
				this
			},
			o.prototype.pause = function() {
				return j("call pause flowing=%j", this._readableState.flowing),
				!1 !== this._readableState.flowing && (j("pause"), this._readableState.flowing = !1, this.emit("pause")),
				this
			},
			o.prototype.wrap = function(e) {
				var t = this,
				r = this._readableState,
				n = !1;
				for (var i in e.on("end",
				function() {
					if (j("wrapped end"), r.decoder && !r.ended) {
						var e = r.decoder.end();
						e && e.length && t.push(e)
					}
					t.push(null)
				}), e.on("data",
				function(i) {
					j("wrapped data"),
					r.decoder && (i = r.decoder.write(i)),
					r.objectMode && null == i || !(r.objectMode || i && i.length) || t.push(i) || (n = !0, e.pause())
				}), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
					return function() {
						return e[t].apply(e, arguments)
					}
				} (i));
				for (var o = 0; o < C.length; o++) e.on(C[o], this.emit.bind(this, C[o]));
				return this._read = function(t) {
					j("wrapped _read", t),
					n && (n = !1, e.resume())
				},
				this
			},
			Object.defineProperty(o.prototype, "readableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._readableState.highWaterMark
				}
			}),
			o._fromList = y
		}).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {}: window: self: global)
	},
	{
		"./_stream_duplex": 152,
		"./internal/streams/BufferList": 157,
		"./internal/streams/destroy": 158,
		"./internal/streams/stream": 159,
		_process: 131,
		"core-util-is": 63,
		events: 96,
		inherits: 113,
		isarray: 115,
		"process-nextick-args": 130,
		"safe-buffer": 141,
		"string_decoder/": 164,
		util: 30
	}],
	155 : [function(e, t) {
		"use strict";
		function r(e) {
			return this instanceof r ? (o.call(this, e), this._transformState = {
				afterTransform: function(e, t) {
					var r = this._transformState;
					r.transforming = !1;
					var n = r.writecb;
					if (!n) return this.emit("error", new Error("write callback called multiple times"));
					r.writechunk = null,
					(r.writecb = null) != t && this.push(t),
					n(e);
					var i = this._readableState;
					i.reading = !1,
					(i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
				}.bind(this),
				needTransform: !1,
				transforming: !1,
				writecb: null,
				writechunk: null,
				writeencoding: null
			},
			this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), void this.on("prefinish", n)) : new r(e)
		}
		function n() {
			var e = this;
			"function" == typeof this._flush ? this._flush(function(t, r) {
				i(e, t, r)
			}) : i(this, null, null)
		}
		function i(e, t, r) {
			if (t) return e.emit("error", t);
			if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
			if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
			return e.push(null)
		}
		t.exports = r;
		var o = e("./_stream_duplex"),
		a = Object.create(e("core-util-is"));
		a.inherits = e("inherits"),
		a.inherits(r, o),
		r.prototype.push = function(e, t) {
			return this._transformState.needTransform = !1,
			o.prototype.push.call(this, e, t)
		},
		r.prototype._transform = function() {
			throw new Error("_transform() is not implemented")
		},
		r.prototype._write = function(e, t, r) {
			var n = this._transformState;
			if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
				var i = this._readableState; (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
			}
		},
		r.prototype._read = function() {
			var e = this._transformState;
			null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
		},
		r.prototype._destroy = function(e, t) {
			var r = this;
			o.prototype._destroy.call(this, e,
			function(e) {
				t(e),
				r.emit("close")
			})
		}
	},
	{
		"./_stream_duplex": 152,
		"core-util-is": 63,
		inherits: 113
	}],
	156 : [function(e, t) { (function(r, n, i) {
			"use strict";
			function o(e) {
				var t = this;
				this.next = null,
				this.entry = null,
				this.finish = function() { !
					function(e, t) {
						var r = e.entry;
						for (e.entry = null; r;) {
							var n = r.callback;
							t.pendingcb--,
							n(void 0),
							r = r.next
						}
						t.corkedRequestsFree ? t.corkedRequestsFree.next = e: t.corkedRequestsFree = e
					} (t, e)
				}
			}
			function a() {}
			function s(t, r) {
				g = g || e("./_stream_duplex"),
				t = t || {};
				var n = r instanceof g;
				this.objectMode = !!t.objectMode,
				n && (this.objectMode = this.objectMode || !!t.writableObjectMode);
				var i = t.highWaterMark,
				a = t.writableHighWaterMark,
				s = this.objectMode ? 16 : 16384;
				this.highWaterMark = i || 0 === i ? i: n && (a || 0 === a) ? a: s,
				this.highWaterMark = Math.floor(this.highWaterMark),
				this.finalCalled = !1,
				this.needDrain = !1,
				this.ending = !1,
				this.ended = !1,
				this.finished = !1;
				var f = (this.destroyed = !1) === t.decodeStrings;
				this.decodeStrings = !f,
				this.defaultEncoding = t.defaultEncoding || "utf8",
				this.length = 0,
				this.writing = !1,
				this.corked = 0,
				this.sync = !0,
				this.bufferProcessing = !1,
				this.onwrite = function(e) { !
					function(e, t) {
						var r = e._writableState,
						n = r.sync,
						i = r.writecb;
						if (function(e) {
							e.writing = !1,
							e.writecb = null,
							e.length -= e.writelen,
							e.writelen = 0
						} (r), t) !
						function(e, t, r, n, i) {--t.pendingcb,
							r ? (y.nextTick(i, n), y.nextTick(b, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (i(n), e._writableState.errorEmitted = !0, e.emit("error", n), b(e, t))
						} (e, r, n, t, i);
						else {
							var o = l(r);
							o || r.corked || r.bufferProcessing || !r.bufferedRequest || h(e, r),
							n ? m(d, e, r, o, i) : d(e, r, o, i)
						}
					} (r, e)
				},
				this.writecb = null,
				this.writelen = 0,
				this.bufferedRequest = null,
				this.lastBufferedRequest = null,
				this.pendingcb = 0,
				this.prefinished = !1,
				this.errorEmitted = !1,
				this.bufferedRequestCount = 0,
				this.corkedRequestsFree = new o(this)
			}
			function f(t) {
				return g = g || e("./_stream_duplex"),
				w.call(f, this) || this instanceof g ? (this._writableState = new s(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), void S.call(this)) : new f(t)
			}
			function c(e, t, r, n, i, o) {
				if (!r) {
					var a = (f = n, c = i, (s = t).objectMode || !1 === s.decodeStrings || "string" != typeof f || (f = k.from(f, c)), f);
					n !== a && (r = !0, i = "buffer", n = a)
				}
				var s, f, c, d = t.objectMode ? 1 : n.length;
				t.length += d;
				var h = t.length < t.highWaterMark;
				if (h || (t.needDrain = !0), t.writing || t.corked) {
					var l = t.lastBufferedRequest;
					t.lastBufferedRequest = {
						chunk: n,
						encoding: i,
						isBuf: r,
						callback: o,
						next: null
					},
					l ? l.next = t.lastBufferedRequest: t.bufferedRequest = t.lastBufferedRequest,
					t.bufferedRequestCount += 1
				} else u(e, t, !1, d, n, i, o);
				return h
			}
			function u(e, t, r, n, i, o, a) {
				t.writelen = n,
				t.writecb = a,
				t.writing = !0,
				t.sync = !0,
				r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
				t.sync = !1
			}
			function d(e, t, r, n) {
				var i, o;
				r || (i = e, 0 === (o = t).length && o.needDrain && (o.needDrain = !1, i.emit("drain"))),
				t.pendingcb--,
				n(),
				b(e, t)
			}
			function h(e, t) {
				t.bufferProcessing = !0;
				var r = t.bufferedRequest;
				if (e._writev && r && r.next) {
					var n = t.bufferedRequestCount,
					i = Array(n),
					a = t.corkedRequestsFree;
					a.entry = r;
					for (var s = 0,
					f = !0; r;)(i[s] = r).isBuf || (f = !1),
					r = r.next,
					s += 1;
					i.allBuffers = f,
					u(e, t, !0, t.length, i, "", a.finish),
					t.pendingcb++,
					t.lastBufferedRequest = null,
					a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new o(t),
					t.bufferedRequestCount = 0
				} else {
					for (; r;) {
						var c = r.chunk,
						d = r.encoding,
						h = r.callback;
						if (u(e, t, !1, t.objectMode ? 1 : c.length, c, d, h), r = r.next, t.bufferedRequestCount--, t.writing) break
					}
					null === r && (t.lastBufferedRequest = null)
				}
				t.bufferedRequest = r,
				t.bufferProcessing = !1
			}
			function l(e) {
				return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
			}
			function p(e, t) {
				e._final(function(r) {
					t.pendingcb--,
					r && e.emit("error", r),
					t.prefinished = !0,
					e.emit("prefinish"),
					b(e, t)
				})
			}
			function b(e, t) {
				var r, n, i = l(t);
				return i && (r = e, (n = t).prefinished || n.finalCalled || ("function" == typeof r._final ? (n.pendingcb++, n.finalCalled = !0, y.nextTick(p, r, n)) : (n.prefinished = !0, r.emit("prefinish"))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))),
				i
			}
			var y = e("process-nextick-args");
			t.exports = f;
			var g, m = !r.browser && -1 < ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) ? i: y.nextTick;
			f.WritableState = s;
			var v = Object.create(e("core-util-is"));
			v.inherits = e("inherits");
			var w, _ = {
				deprecate: e("util-deprecate")
			},
			S = e("./internal/streams/stream"),
			k = e("safe-buffer").Buffer,
			E = n.Uint8Array ||
			function() {},
			x = e("./internal/streams/destroy");
			v.inherits(f, S),
			s.prototype.getBuffer = function() {
				for (var e = this.bufferedRequest,
				t = []; e;) t.push(e),
				e = e.next;
				return t
			},
			function() {
				try {
					Object.defineProperty(s.prototype, "buffer", {
						get: _.deprecate(function() {
							return this.getBuffer()
						},
						"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
					})
				} catch(r) {}
			} (),
			"function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (w = Function.prototype[Symbol.hasInstance], Object.defineProperty(f, Symbol.hasInstance, {
				value: function(e) {
					return !! w.call(this, e) || !(this !== f) && e && e._writableState instanceof s
				}
			})) : w = function(e) {
				return e instanceof this
			},
			f.prototype.pipe = function() {
				this.emit("error", new Error("Cannot pipe, not readable"))
			},
			f.prototype.write = function(e, t, r) {
				var n, i, o, s, f, u, d, h, l, p = this._writableState,
				b = !1,
				g = !p.objectMode && (n = e, k.isBuffer(n) || n instanceof E);
				return g && !k.isBuffer(e) && (l = e, e = k.from(l)),
				"function" == typeof t && (r = t, t = null),
				g ? t = "buffer": t || (t = p.defaultEncoding),
				"function" != typeof r && (r = a),
				p.ended ? (d = r, h = new Error("write after end"), this.emit("error", h), y.nextTick(d, h)) : (g || (i = p, s = r, u = !(f = !0), null === (o = e) ? u = new TypeError("May not write null values to stream") : "string" == typeof o || void 0 === o || i.objectMode || (u = new TypeError("Invalid non-string/buffer chunk")), u && (this.emit("error", u), y.nextTick(s, u), f = !1), f)) && (p.pendingcb++, b = c(this, p, g, e, t, r)),
				b
			},
			f.prototype.cork = function() {
				this._writableState.corked++
			},
			f.prototype.uncork = function() {
				var e = this._writableState;
				e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || h(this, e))
			},
			f.prototype.setDefaultEncoding = function(e) {
				if ("string" == typeof e && (e = e.toLowerCase()), !( - 1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + e);
				return this._writableState.defaultEncoding = e,
				this
			},
			Object.defineProperty(f.prototype, "writableHighWaterMark", {
				enumerable: !1,
				get: function() {
					return this._writableState.highWaterMark
				}
			}),
			f.prototype._write = function(e, t, r) {
				r(new Error("_write() is not implemented"))
			},
			f.prototype._writev = null,
			f.prototype.end = function(e, t, r) {
				var n, i, o, a = this._writableState;
				"function" == typeof e ? (r = e, t = e = null) : "function" == typeof t && (r = t, t = null),
				null != e && this.write(e, t),
				a.corked && (a.corked = 1, this.uncork()),
				a.ending || a.finished || (n = this, o = r, (i = a).ending = !0, b(n, i), o && (i.finished ? y.nextTick(o) : n.once("finish", o)), i.ended = !0, n.writable = !1)
			},
			Object.defineProperty(f.prototype, "destroyed", {
				get: function() {
					return void 0 !== this._writableState && this._writableState.destroyed
				},
				set: function(e) {
					this._writableState && (this._writableState.destroyed = e)
				}
			}),
			f.prototype.destroy = x.destroy,
			f.prototype._undestroy = x.undestroy,
			f.prototype._destroy = function(e, t) {
				this.end(),
				t(e)
			}
		}).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {}: window: self: global, e("timers").setImmediate)
	},
	{
		"./_stream_duplex": 152,
		"./internal/streams/destroy": 158,
		"./internal/streams/stream": 159,
		_process: 131,
		"core-util-is": 63,
		inherits: 113,
		"process-nextick-args": 130,
		"safe-buffer": 141,
		timers: 165,
		"util-deprecate": 166
	}],
	157 : [function(e, t) {
		"use strict";
		var r = e("safe-buffer").Buffer,
		n = e("util");
		function i() { (function(e) {
				if (! (e instanceof i)) throw new TypeError("Cannot call a class as a function")
			})(this),
			this.head = null,
			this.tail = null,
			this.length = 0
		}
		t.exports = (i.prototype.push = function(e) {
			var t = {
				data: e,
				next: null
			};
			0 < this.length ? this.tail.next = t: this.head = t,
			this.tail = t,
			++this.length
		},
		i.prototype.unshift = function(e) {
			var t = {
				data: e,
				next: this.head
			};
			0 === this.length && (this.tail = t),
			this.head = t,
			++this.length
		},
		i.prototype.shift = function() {
			if (0 !== this.length) {
				var e = this.head.data;
				return this.head = 1 === this.length ? this.tail = null: this.head.next,
				--this.length,
				e
			}
		},
		i.prototype.clear = function() {
			this.head = this.tail = null,
			this.length = 0
		},
		i.prototype.join = function(e) {
			if (0 === this.length) return "";
			for (var t = this.head,
			r = "" + t.data; t = t.next;) r += e + t.data;
			return r
		},
		i.prototype.concat = function(e) {
			if (0 === this.length) return r.alloc(0);
			if (1 === this.length) return this.head.data;
			for (var t = r.allocUnsafe(e >>> 0), n = this.head, i = 0; n;) o = t,
			a = i,
			n.data.copy(o, a),
			i += n.data.length,
			n = n.next;
			var o, a;
			return t
		},
		i),
		n && n.inspect && n.inspect.custom && (t.exports.prototype[n.inspect.custom] = function() {
			var e = n.inspect({
				length: this.length
			});
			return this.constructor.name + " " + e
		})
	},
	{
		"safe-buffer": 141,
		util: 30
	}],
	158 : [function(e, t) {
		"use strict";
		function r(e, t) {
			e.emit("error", t)
		}
		var n = e("process-nextick-args");
		t.exports = {
			destroy: function(e, t) {
				var i = this,
				o = this._readableState && this._readableState.destroyed,
				a = this._writableState && this._writableState.destroyed;
				return o || a ? t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(r, this, e) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null,
				function(e) { ! t && e ? (n.nextTick(r, i, e), i._writableState && (i._writableState.errorEmitted = !0)) : t && t(e)
				})),
				this
			},
			undestroy: function() {
				this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1),
				this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
			}
		}
	},
	{
		"process-nextick-args": 130
	}],
	159 : [function(e, t) {
		t.exports = e("events").EventEmitter
	},
	{
		events: 96
	}],
	160 : [function(e, t) {
		t.exports = e("./readable").PassThrough
	},
	{
		"./readable": 161
	}],
	161 : [function(e, t, r) { (((r = t.exports = e("./lib/_stream_readable.js")).Stream = r).Readable = r).Writable = e("./lib/_stream_writable.js"),
		r.Duplex = e("./lib/_stream_duplex.js"),
		r.Transform = e("./lib/_stream_transform.js"),
		r.PassThrough = e("./lib/_stream_passthrough.js")
	},
	{
		"./lib/_stream_duplex.js": 152,
		"./lib/_stream_passthrough.js": 153,
		"./lib/_stream_readable.js": 154,
		"./lib/_stream_transform.js": 155,
		"./lib/_stream_writable.js": 156
	}],
	162 : [function(e, t) {
		t.exports = e("./readable").Transform
	},
	{
		"./readable": 161
	}],
	163 : [function(e, t) {
		t.exports = e("./lib/_stream_writable.js")
	},
	{
		"./lib/_stream_writable.js": 156
	}],
	164 : [function(e, t, r) {
		arguments[4][58][0].apply(r, arguments)
	},
	{
		dup: 58,
		"safe-buffer": 141
	}],
	165 : [function(e, t, r) { (function(t, n) {
			function i(e, t) {
				this._id = e,
				this._clearFn = t
			}
			var o = e("process/browser.js").nextTick,
			a = Function.prototype.apply,
			s = Array.prototype.slice,
			f = {},
			c = 0;
			r.setTimeout = function() {
				return new i(a.call(setTimeout, window, arguments), clearTimeout)
			},
			r.setInterval = function() {
				return new i(a.call(setInterval, window, arguments), clearInterval)
			},
			r.clearTimeout = r.clearInterval = function(e) {
				e.close()
			},
			i.prototype.unref = i.prototype.ref = function() {},
			i.prototype.close = function() {
				this._clearFn.call(window, this._id)
			},
			r.enroll = function(e, t) {
				clearTimeout(e._idleTimeoutId),
				e._idleTimeout = t
			},
			r.unenroll = function(e) {
				clearTimeout(e._idleTimeoutId),
				e._idleTimeout = -1
			},
			r._unrefActive = r.active = function(e) {
				clearTimeout(e._idleTimeoutId);
				var t = e._idleTimeout;
				0 <= t && (e._idleTimeoutId = setTimeout(function() {
					e._onTimeout && e._onTimeout()
				},
				t))
			},
			r.setImmediate = "function" == typeof t ? t: function(e) {
				var t = c++,
				n = !(arguments.length < 2) && s.call(arguments, 1);
				return f[t] = !0,
				o(function() {
					f[t] && (n ? e.apply(null, n) : e.call(null), r.clearImmediate(t))
				}),
				t
			},
			r.clearImmediate = "function" == typeof n ? n: function(e) {
				delete f[e]
			}
		}).call(this, e("timers").setImmediate, e("timers").clearImmediate)
	},
	{
		"process/browser.js": 131,
		timers: 165
	}],
	166 : [function(e, t) { (function(e) {
			function r(t) {
				try {
					if (!e.localStorage) return
				} catch(t) {
					return
				}
				var r = e.localStorage[t];
				return null != r && "true" === (r + "").toLowerCase()
			}
			t.exports = function(e, t) {
				if (r("noDeprecation")) return e;
				var n = !1;
				return function() {
					if (!n) {
						if (r("throwDeprecation")) throw new Error(t);
						r("traceDeprecation") ? console.trace(t) : console.warn(t),
						n = !0
					}
					return e.apply(this, arguments)
				}
			}
		}).call(this, "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {}: window: self: global)
	},
	{}],
	167 : [function(require, module, exports) {
		function Context() {}
		var indexOf = function(e, t) {
			if (e.indexOf) return e.indexOf(t);
			for (var r = 0; r < e.length; r++) if (e[r] === t) return r;
			return - 1
		},
		Object_keys = function(e) {
			if (Object.keys) return Object.keys(e);
			var t = [];
			for (var r in e) t.push(r);
			return t
		},
		forEach = function(e, t) {
			if (e.forEach) return e.forEach(t);
			for (var r = 0; r < e.length; r++) t(e[r], r, e)
		},
		defineProp = function() {
			try {
				return Object.defineProperty({},
				"_", {}),
				function(e, t, r) {
					Object.defineProperty(e, t, {
						writable: !0,
						enumerable: !1,
						configurable: !0,
						value: r
					})
				}
			} catch(e) {
				return function(e, t, r) {
					e[t] = r
				}
			}
		} (),
		globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];
		Context.prototype = {};
		var Script = exports.Script = function(e) {
			return this instanceof Script ? void(this.code = e) : new Script(e)
		};
		Script.prototype.runInContext = function(e) {
			if (! (e instanceof Context)) throw new TypeError("needs a 'context' argument.");
			var t = document.createElement("iframe");
			t.style || (t.style = {}),
			t.style.display = "none",
			document.body.appendChild(t);
			var r = t.contentWindow,
			n = r.eval,
			i = r.execScript; ! n && i && (i.call(r, "null"), n = r.eval),
			forEach(Object_keys(e),
			function(t) {
				r[t] = e[t]
			}),
			forEach(globals,
			function(t) {
				e[t] && (r[t] = e[t])
			});
			var o = Object_keys(r),
			a = n.call(r, this.code);
			return forEach(Object_keys(r),
			function(t) { (t in e || -1 === indexOf(o, t)) && (e[t] = r[t])
			}),
			forEach(globals,
			function(t) {
				t in e || defineProp(e, t, r[t])
			}),
			document.body.removeChild(t),
			a
		},
		Script.prototype.runInThisContext = function() {
			return eval(this.code)
		},
		Script.prototype.runInNewContext = function(e) {
			var t = Script.createContext(e),
			r = this.runInContext(t);
			return e && forEach(Object_keys(t),
			function(r) {
				e[r] = t[r]
			}),
			r
		},
		forEach(Object_keys(Script.prototype),
		function(e) {
			exports[e] = Script[e] = function(t) {
				var r = Script(t);
				return r[e].apply(r, [].slice.call(arguments, 1))
			}
		}),
		exports.isContext = function(e) {
			return e instanceof Context
		},
		exports.createScript = function(e) {
			return exports.Script(e)
		},
		exports.createContext = Script.createContext = function(e) {
			var t = new Context;
			return "object" == typeof e && forEach(Object_keys(e),
			function(r) {
				t[r] = e[r]
			}),
			t
		}
	},
	{}],
	168 : [function(e) {
		"use strict";
		var t = e("./mep-content-reader");
		window.AmaSdk = t
	},
	{
		"./mep-content-reader": 175
	}],
	169 : [function(e, t) {
		"use strict";
		function r(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})),
				r.push.apply(r, n)
			}
			return r
		}
		function n(e) {
			for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {}: arguments[n],
			n % 2 ? r(Object(t), !0).forEach(function(r) { (0, o.
			default)(e, r, t[r])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
			});
			return e
		}
		var i = e("@babel/runtime/helpers/interopRequireDefault"),
		o = i(e("@babel/runtime/helpers/defineProperty")),
		a = i(e("@babel/runtime/helpers/toConsumableArray")),
		s = e("./midi-util"),
		f = s.pitchToMidi,
		c = s.applyLongNoteLogic,
		u = s.magnetNotesByGridImproved,
		d = s.tabs,
		h = s.sort;
		t.exports = function(e, t) {
			var r, i, o = d.bluePrint,
			s = e.sort(h.timeAsc).filter(function(e) {
				return e.name === o.bpm
			});
			return c(u((r = e, i = d.bluePrint, r.reduce(function(e, t) {
				return t.name === i.melody ? [].concat((0, a.
			default)(e), [n({},
				t, {
					midi: f(d.amazing.line3)
				})]) : t.name === i.drums ? [].concat((0, a.
			default)(e), [n({},
				t, {
					midi: f(d.amazing.line2)
				})]) : t.name === i.vocal ? [].concat((0, a.
			default)(e), [n({},
				t, {
					midi: f(d.amazing.line1)
				})]) : e
			},
			[]).sort(h.timeAsc)), "1/8", s, t))
		}
	},
	{
		"./midi-util": 172,
		"@babel/runtime/helpers/defineProperty": 4,
		"@babel/runtime/helpers/interopRequireDefault": 5,
		"@babel/runtime/helpers/toConsumableArray": 8
	}],
	170 : [function(e, t) {
		"use strict";
		var r = e("./midi-util"),
		n = r.sort,
		i = r.applyShortNoteLogic;
		t.exports = function(e) {
			var t = e.sort(n.timeAsc);
			return i(t)
		}
	},
	{
		"./midi-util": 172
	}],
	171 : [function(e, t) {
		"use strict";
		function r(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})),
				r.push.apply(r, n)
			}
			return r
		}
		var n = e("@babel/runtime/helpers/interopRequireDefault"),
		i = n(e("@babel/runtime/helpers/defineProperty")),
		o = n(e("@babel/runtime/helpers/toConsumableArray")),
		a = e("./super-easy"),
		s = e("./easy"),
		f = e("./amazing"),
		c = e("./midi-util").isMepFormat;
		t.exports = {
			convert: function(e) {
				if (c(e)) return e;
				var t = e.toJSON(),
				n = t.tracks.find(function(e) {
					return "PART GUITAR" === e.name.toUpperCase()
				}) || t.tracks[0],
				u = a(n.notes, e.header),
				d = s(n.notes, e.header),
				h = f(n.notes, e.header),
				l = [].concat((0, o.
			default)(u), (0, o.
			default)(d), (0, o.
			default)(h)),
				p = e.clone();
				return p.fromJSON({
					header: t.header,
					tracks: [function(e) {
						for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {}: arguments[n],
						n % 2 ? r(Object(t), !0).forEach(function(r) { (0, i.
						default)(e, r, t[r])
						}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(r) {
							Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
						});
						return e
					} ({},
					n, {
						notes: l
					})]
				}),
				p
			}
		}
	},
	{
		"./amazing": 169,
		"./easy": 170,
		"./midi-util": 172,
		"./super-easy": 173,
		"@babel/runtime/helpers/defineProperty": 4,
		"@babel/runtime/helpers/interopRequireDefault": 5,
		"@babel/runtime/helpers/toConsumableArray": 8
	}],
	172 : [function(e, t) {
		"use strict";
		function r(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})),
				r.push.apply(r, n)
			}
			return r
		}
		function n(e) {
			for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {}: arguments[n],
			n % 2 ? r(Object(t), !0).forEach(function(r) { (0, f.
			default)(e, r, t[r])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
			});
			return e
		}
		function i(e, t, r) {
			return (e.ticks > t.ticks ? e.ticks - t.ticks: t.ticks - e.ticks) < r
		}
		function o(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
			r = e.sort(d.timeAsc).reduce(function(e, r) {
				var o, a, s = e.counting,
				c = e.prevNote;
				if (c) {
					if (i(c, r, t)) return e;
					o = r.ticks - c.ticks
				} else o = 0;
				return a = s[o] ? s[o] + 1 : 1,
				{
					counting: n({},
					s, (0, f.
				default)({},
					o, a)),
					prevNote: r
				}
			},
			{
				counting: {},
				prevNote: null
			}),
			o = Object.keys(r.counting).map(function(e) {
				return {
					value: e,
					count: r.counting[e]
				}
			}).reduce(function(e, t) {
				return ! e || t.value < 1 || t.count > e.count || t.count === e.count && t.value < e.value ? t: e
			});
			return Number.parseInt(o.value, 10)
		}
		var a = e("@babel/runtime/helpers/interopRequireDefault"),
		s = a(e("@babel/runtime/helpers/toConsumableArray")),
		f = a(e("@babel/runtime/helpers/defineProperty")),
		c = {
			cbb: -2,
			cb: -1,
			c: 0,
			"c#": 1,
			cx: 2,
			dbb: 0,
			db: 1,
			d: 2,
			"d#": 3,
			dx: 4,
			ebb: 2,
			eb: 3,
			e: 4,
			"e#": 5,
			ex: 6,
			fbb: 3,
			fb: 4,
			f: 5,
			"f#": 6,
			fx: 7,
			gbb: 5,
			gb: 6,
			g: 7,
			"g#": 8,
			gx: 9,
			abb: 7,
			ab: 8,
			a: 9,
			"a#": 10,
			ax: 11,
			bbb: 9,
			bb: 10,
			b: 11,
			"b#": 12,
			bx: 13
		},
		u = {
			superEasy: {
				line1: "C4",
				line2: "C#4",
				line3: "D4"
			},
			easy: {
				line1: "C5",
				line2: "C#5",
				line3: "D5"
			},
			medium: {
				line1: "C6",
				line2: "C#6",
				line3: "D6",
				line4: "D#6",
				line5: "E6"
			},
			amazing: {
				line1: "C7",
				line2: "C#7",
				line3: "D7"
			},
			bluePrint: {
				bpm: "C5",
				soundEnergy: "C#5",
				vocal: "D5",
				melody: "D#5",
				drums: "E5"
			}
		},
		d = {
			timeAsc: function(e, t) {
				if (e.ticks === t.ticks) {
					if (e.name === u.bluePrint.melody) return - 1;
					if (t.name === u.bluePrint.melody) return 1
				}
				return e.ticks - t.ticks
			}
		};
		t.exports = {
			pitchToMidi: function(e) {
				var t = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.exec(e),
				r = t[1],
				n = t[2];
				return c[r.toLowerCase()] + 12 * (parseInt(n, 10) + 1)
			},
			areAlmostAtTheSameMoment: i,
			findStandardDistance: o,
			applyShortNoteLogic: function(e) {
				return e.map(function(e) {
					return n({},
					e, {
						durationTicks: 1 < e.durationTicks ? 1 : e.durationTicks
					})
				})
			},
			applyLongNoteLogic: function(e) {
				var t = o(e);
				return e.sort(d.timeAsc).reduce(function(e, r) {
					var n = e.notes,
					i = e.prevNote;
					if (!i) return {
						notes: [].concat((0, s.
					default)(n), [r]),
						prevNote: r
					};
					var o = r.ticks - i.ticks;
					if (o === t) i.durationTicks = 1;
					else {
						if (! (t < o)) return e;
						i.durationTicks = r.ticks - i.ticks
					}
					return {
						notes: [].concat((0, s.
					default)(n), [r]),
						prevNote: r
					}
				},
				{
					notes: [],
					prevNote: null
				}).notes
			},
			magnetNotesByGridImproved: function(e, t, r, n) {
				for (var i = n.ppq,
				o = n.tempos[0].bpm, a = [], s = function(e, t) {
					var r = 128;
					switch (e) {
					case "1/4":
						r = 1;
						break;
					case "1/8":
						r = 2;
						break;
					case "1/12":
						r = 3;
						break;
					case "1/16":
						r = 4;
						break;
					case "1/24":
						r = 6;
						break;
					case "1/32":
						r = 8;
						break;
					case "1/48":
						r = 12;
						break;
					case "1/64":
						r = 16;
						break;
					case "1/96":
						r = 24;
						break;
					default:
						r = 128
					}
					return t / r
				} (t, i) * (60 / o / i), f = function(e) {
					return r.reverse().find(function(t) {
						return t.time < e
					}) || r[0]
				},
				c = 0; c < e.length; c += 1) {
					for (var u = e[c], d = u.time, h = f(d).time, l = h, p = s + h; (l + p) / 2 < d;) l = p,
					p += s;
					u.ticks = n.secondsToTicks(l),
					a.push(u)
				}
				return a
			},
			isMepFormat: function(e) {
				var t, r, n, i, o = (e.tracks.find(function(e) {
					return "PART GUITAR" === e.name.toUpperCase()
				}) || e.tracks[0]).notes,
				a = -1 !== {
					notes: o
				}.notes.findIndex(function(e) {
					return "D4" === e.name
				}),
				s = -1 !== {
					notes: o
				}.notes.findIndex(function(e) {
					return "C#5" === e.name
				}),
				f = (r = -1 !== (t = {
					notes: o
				}.notes).findIndex(function(e) {
					return "C7" === e.name
				}), n = -1 !== t.findIndex(function(e) {
					return "C#7" === e.name
				}), i = -1 !== t.findIndex(function(e) {
					return "D7" === e.name
				}), !!(r || n || i));
				return a && s && f
			},
			sort: d,
			tabs: u
		}
	},
	{
		"@babel/runtime/helpers/defineProperty": 4,
		"@babel/runtime/helpers/interopRequireDefault": 5,
		"@babel/runtime/helpers/toConsumableArray": 8
	}],
	173 : [function(e, t) {
		"use strict";
		function r(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})),
				r.push.apply(r, n)
			}
			return r
		}
		var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/defineProperty")),
		i = e("./midi-util"),
		o = i.pitchToMidi,
		a = i.tabs,
		s = i.sort;
		t.exports = function(e) {
			var t = a.bluePrint;
			return e.filter(function(e) {
				return e.name === t.soundEnergy
			}).map(function(e) {
				return function(e) {
					for (var t, i = 1; i < arguments.length; i++) t = null == arguments[i] ? {}: arguments[i],
					i % 2 ? r(Object(t), !0).forEach(function(r) { (0, n.
					default)(e, r, t[r])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(r) {
						Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
					});
					return e
				} ({},
				e, {
					midi: o(a.superEasy.line3)
				})
			}).sort(s.timeAsc)
		}
	},
	{
		"./midi-util": 172,
		"@babel/runtime/helpers/defineProperty": 4,
		"@babel/runtime/helpers/interopRequireDefault": 5
	}],
	174 : [function(e, t) { (function(r) {
			"use strict";
			function n(e) {
				return r.from(e)
			}
			function i(e, t, r) {
				for (var i = [], o = 0; o < t; o++) i[o] = e[o + r];
				return n(i)
			}
			function o(e) {
				if (null != l) e(null, l);
				else {
					var t = r.from([238, 239, 255, 69, 145, 142, 170, 198, 144, 205, 2, 104, 105, 198, 255, 154, 232, 61, 84, 7, 230, 170, 127, 25, 223, 97, 55, 162, 233, 122, 224, 25]);
					d.pbkdf2(t, n(h), 1e3, 48, null,
					function(t, r) {
						null == t && (l = r),
						e(t, l)
					})
				}
			}
			function a(e) {
				for (var t = [], r = 0; r < e.length; r++) t[r] = e[r];
				return t
			}
			function s() {
				return (s = (0, u.
			default)(c.
			default.mark(function e(t) {
					var n, s, f, u, h, l, p, b;
					return c.
				default.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
						case 0:
							return n = r.from(t),
							e.next = 3,
							new Promise(function(e, t) {
								o(function(r, n) {
									r ? t(r) : e(n)
								})
							});
						case 3:
							return s = e.sent,
							f = a(s),
							u = i(f, 32, 0),
							h = i(f, 16, 32),
							l = d.createDecipheriv("aes-256-cbc", u, h),
							p = l.update(n),
							b = r.from(l.final("binary"), "binary"),
							p = r.concat([p, b]),
							e.abrupt("return", p);
						case 12:
						case "end":
							return e.stop()
						}
					},
					e)
				}))).apply(this, arguments)
			}
			var f = e("@babel/runtime/helpers/interopRequireDefault"),
			c = f(e("@babel/runtime/regenerator")),
			u = f(e("@babel/runtime/helpers/asyncToGenerator")),
			d = e("crypto"),
			h = [1, 2, 3, 4, 5, 6, 7, 8],
			l = null;
			t.exports = {
				decrypt: function() {
					return s.apply(this, arguments)
				}
			}
		}).call(this, e("buffer").Buffer)
	},
	{
		"@babel/runtime/helpers/asyncToGenerator": 3,
		"@babel/runtime/helpers/interopRequireDefault": 5,
		"@babel/runtime/regenerator": 11,
		buffer: 61,
		crypto: 69
	}],
	175 : [function(e, t) {
		"use strict";
		function r() {
			return (r = (0, o.
		default)(i.
		default.mark(function e(t) {
				var r, n, o, c;
				return i.
			default.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
					case 0:
						return e.next = 2,
						fetch(t);
					case 2:
						if ((r = e.sent).ok) {
							e.next = 5;
							break
						}
						throw new Error(r.statusText);
					case 5:
						return e.next = 7,
						r.arrayBuffer();
					case 7:
						if (n = e.sent, t.endsWith(".bin")) return e.next = 11,
						f.decrypt(n);
						e.next = 12;
						break;
					case 11:
						n = e.sent;
					case 12:
						return o = new a(n),
						c = s.convert(o),
						e.abrupt("return", {
							midi: c,
							json: c.toJSON()
						});
					case 15:
					case "end":
						return e.stop()
					}
				},
				e)
			}))).apply(this, arguments)
		}
		var n = e("@babel/runtime/helpers/interopRequireDefault"),
		i = n(e("@babel/runtime/regenerator")),
		o = n(e("@babel/runtime/helpers/asyncToGenerator")),
		a = e("@tonejs/midi").Midi,
		s = e("./adapter"),
		f = e("./decrypter");
		t.exports = {
			fromUrl: function() {
				return r.apply(this, arguments)
			}
		}
	},
	{
		"./adapter": 171,
		"./decrypter": 174,
		"@babel/runtime/helpers/asyncToGenerator": 3,
		"@babel/runtime/helpers/interopRequireDefault": 5,
		"@babel/runtime/regenerator": 11,
		"@tonejs/midi": 12
	}]
},
{},
[168]);