alert("here webdav.js");
!function (e) {
	var t = {}; function n(i) {
		if (t[i]) return t[i].exports; var r = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}

	n.m = e,
		n.c = t,
		n.d = function (e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) },
		n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) },
		n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var i = Object.create(null); if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) { return e[t] }.bind(null, r)); return i },
		n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t },
		n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) },
		n.p = "/js/", n(n.s = 6)
}

	([
		function (e, t, n) {
			"use strict"; var i = n(2), r = n.n(i), a = n(3), o = n.n(a)()(r.a);
			o.push([e.i, "#app-content-files tbody tr[data-type=file] td a.name,#app-content-files tbody tr[data-type=file] td a.name span.nametext,#app-content-files tbody tr[data-type=file] td a.name span.nametext span{cursor:default}#app-content-files .summary :last-child{padding:0}#app-content-files #filestable .summary .filesize{display:none}", "", { version: 3, sources: ["webpack://./apps/files_trashbin/src/trash.scss"], names: [], mappings: "AASA,4MAGC,cAAA,CAGD,2CACC,SAAA,CAED,qDACC,YAAA", sourcesContent: ['/*\n * Copyright (c) 2014\n *\n * This file is licensed under the Affero General Public License version 3\n * or later.\n *\n * See the COPYING-README file.\n *\n */\n#app-content-trashbin tbody tr[data-type="file"] td a.name,\n#app-content-files tbody tr[data-type="file"] td a.name span.nametext,\n#app-content-files tbody tr[data-type="file"] td a.name span.nametext span {\n\tcursor: default;\n}\n\n#app-content-files .summary :last-child {\n\tpadding: 0;\n}\n#app-content-files #filestable .summary .filesize {\n\tdisplay: none;\n}\n\n'], sourceRoot: "" }]),
				t.a = o
		},

		function (e, t, n) {
			"use strict"; var i,
				r = function () {
					return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
				},
				a = function () {
					var e = {}; return function (t) {
						if (void 0 === e[t]) { var n = document.querySelector(t); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null } e[t] = n }
						return e[t]
					}
				}(),

				o = [];
			function s(e) { for (var t = -1, n = 0; n < o.length; n++)if (o[n].identifier === e) { t = n; break } return t }

			function l(e, t) { for (var n = {}, i = [], r = 0; r < e.length; r++) { var a = e[r], l = t.base ? a[0] + t.base : a[0], c = n[l] || 0, u = "".concat(l, " ").concat(c); n[l] = c + 1; var f = s(u), h = { css: a[1], media: a[2], sourceMap: a[3] }; -1 !== f ? (o[f].references++, o[f].updater(h)) : o.push({ identifier: u, updater: b(h, t), references: 1 }), i.push(u) } return i }

			function c(e) { var t = document.createElement("style"), i = e.attributes || {}; if (void 0 === i.nonce) { var r = n.nc; r && (i.nonce = r) } if (Object.keys(i).forEach((function (e) { t.setAttribute(e, i[e]) })), "function" == typeof e.insert) e.insert(t); else { var o = a(e.insert || "head"); if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); o.appendChild(t) } return t }

			var u, f = (u = [], function (e, t) { return u[e] = t, u.filter(Boolean).join("\n") });

			function h(e, t, n, i) { var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css; if (e.styleSheet) e.styleSheet.cssText = f(t, r); else { var a = document.createTextNode(r), o = e.childNodes; o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a) } }

			function d(e, t, n) { var i = n.css, r = n.media, a = n.sourceMap; if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = i; else { for (; e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(i)) } }

			var p = null, m = 0;
			function b(e, t) { var n, i, r; if (t.singleton) { var a = m++; n = p || (p = c(t)), i = h.bind(null, n, a, !1), r = h.bind(null, n, a, !0) } else n = c(t), i = d.bind(null, n, t), r = function () { !function (e) { if (null === e.parentNode) return !1; e.parentNode.removeChild(e) }(n) }; return i(e), function (t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return; i(e = t) } else r() } }

			e.exports = function (e, t) { (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r()); var n = l(e = e || [], t); return function (e) { if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) { for (var i = 0; i < n.length; i++) { var r = s(n[i]); o[r].references-- } for (var a = l(e, t), c = 0; c < n.length; c++) { var u = s(n[c]); 0 === o[u].references && (o[u].updater(), o.splice(u, 1)) } n = a } } }
		},

		function (e, t, n) {
			"use strict"; function i(e, t) { return function (e) { if (Array.isArray(e)) return e }(e) || function (e, t) { var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]); if (null == n) return; var i, r, a = [], o = !0, s = !1; try { for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0); } catch (e) { s = !0, r = e } finally { try { o || null == n.return || n.return() } finally { if (s) throw r } } return a }(e, t) || function (e, t) { if (!e) return; if ("string" == typeof e) return r(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t) }(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

			function r(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, i = new Array(t); n < t; n++)i[n] = e[n]; return i }
			e.exports = function (e) { var t = i(e, 4), n = t[1], r = t[3]; if (!r) return n; if ("function" == typeof btoa) { var a = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), s = "/*# ".concat(o, " */"), l = r.sources.map((function (e) { return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */") })); return [n].concat(l).concat([s]).join("\n") } return [n].join("\n") }
		}
		, function (e, t, n) {
			"use strict"; e.exports = function (e) { var t = []; return t.toString = function () { return this.map((function (t) { var n = e(t); return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n })).join("") }, t.i = function (e, n, i) { "string" == typeof e && (e = [[null, e, ""]]); var r = {}; if (i) for (var a = 0; a < this.length; a++) { var o = this[a][0]; null != o && (r[o] = !0) } for (var s = 0; s < e.length; s++) { var l = [].concat(e[s]); i && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l)) } }, t }
		},

		function (e, n) {
			OCA.Ethswarm = {}, 
			OCA.Ethswarm.App = 
			{ 
				_initialized: !1, client: null, 
				initialize: function (e) 
				{ 
					if (!this._initialized) 
					{ 
						this._initialized = !0, this.client = new OC.Files.Client({ host: OC.getHost(), port: OC.getPort(), root: OC.linkToRemoteBase("dav") + "/files/" + OC.getCurrentUser().uid, useHTTPS: "https" === OC.getProtocol() }); var n = OC.Util.History.parseUrlQuery(); 
						this.fileList = new OCA.Ethswarm.FileList($("#app-content-files"), 
						{ 
							fileActions: this._createFileActions(), detailsViewEnabled: !1, scrollTo: n.scrollto, config: OCA.Files.App.getFilesConfig(), multiSelectMenu: [{ name: "restore", displayName: t("files_external_ethswarm", "Restore"), iconClass: "icon-history" }, { name: "delete", displayName: t("files_external_ethswarm", "Delete permanently"), iconClass: "icon-delete" }], client: this.client, shown: !0 
						}) 
					} 
				}, 
				
				_createFileActions: function () 
				{ 
					var e = this.client, 
					n = new OCA.Files.FileActions; 
					return n.register("dir", "Open", OC.PERMISSION_READ, "", (function (e, t) { var n = t.fileList.getCurrentDirectory(); t.fileList.changeDirectory(OC.joinPaths(n, e)) })), 
					n.setDefault("dir", "Open"), 
					n.registerAction({ name: "Restore", displayName: t("files_external_ethswarm", "Restore"), type: OCA.Files.FileActions.TYPE_INLINE, mime: "all", permissions: OC.PERMISSION_READ, iconClass: "icon-history", actionHandler: function (n, i) { var r = i.fileList, a = r.findFileEl(n); r.showFileBusyState(a, !0); var o = i.fileList.getCurrentDirectory(); e.move(OC.joinPaths("trash", o, n), OC.joinPaths("restore", n), !0).then(r._removeCallback.bind(r, [n]), (function () { r.showFileBusyState(a, !1), OC.Notification.show(t("files_external_ethswarm", "Error while restoring file from trash bin")) })) } }), 
					n.registerAction({ name: "Delete", displayName: t("files_external_ethswarm", "Delete permanently"), mime: "all", permissions: OC.PERMISSION_READ, iconClass: "icon-delete", render: function (e, i, r) { var a = n._makeActionLink(e, r); return a.attr("original-title", t("files_external_ethswarm", "Delete permanently")), a.children("img").attr("alt", t("files_external_ethswarm", "Delete permanently")), r.$file.find("td:last").append(a), a }, actionHandler: function (n, i) { var r = i.fileList; $(".tipsy").remove(); var a = r.findFileEl(n); r.showFileBusyState(a, !0); var o = i.fileList.getCurrentDirectory(); e.remove(OC.joinPaths("trash", o, n)).then(r._removeCallback.bind(r, [n]), (function () { r.showFileBusyState(a, !1), OC.Notification.show(t("files_external_ethswarm", "Error while removing file from trash bin")) })) } }), n 
				} 
			},

				window.addEventListener("DOMContentLoaded",
					(function () { $("#app-content-files").one("show", (function () { OCA.Ethswarm.App.initialize($("#app-content-files")) })) }
					))
		},

		function (e, n) {
			!function () {
				alert("here webdav.js function(e,n) {http://nextcloud.org/ns}trashbin-title");
				var e = new RegExp(/^(.+)\.d[0-9]+$/),
					n = "{http://nextcloud.org/ns}trashbin-filename",
					i = "{http://nextcloud.org/ns}trashbin-deletion-time",
					r = "{http://nextcloud.org/ns}trashbin-original-location",
					a = "{http://nextcloud.org/ns}trashbin-title";

				function o(t) { t = OC.basename(t); var n = e.exec(t); return n && n.length > 1 && (t = n[1]), t }
				var s = function (e, t) {
					this.client = t.client, this.initialize(e, t)
				};
				s.prototype = _.extend
					(
						{},
						OCA.Files.FileList.prototype,
						{
							id: "ethswarm", appName: t("files_external_ethswarm", "External Storage: Swarm"), client: null, 
							initialize: function () 
							{ 
								this.client.addFileInfoParser((function (e, t) { var o = e.propStat[0].properties, s = o[r], l = o[a]; return { displayName: o[n], mtime: 1e3 * parseInt(o[i], 10), hasPreview: !0, path: s, extraData: l } })); var e = OCA.Files.FileList.prototype.initialize.apply(this, arguments); return this.$el.find(".undelete").click("click", _.bind(this._onClickRestoreSelected, this)), this.setSort("mtime", "desc"), this.breadcrumb._makeCrumbs = function () { for (var e = OCA.Files.BreadCrumb.prototype._makeCrumbs.apply(this, [].concat(Array.prototype.slice.call(arguments), ["icon-delete no-hover"])), t = 1; t < e.length; t++)e[t].name = o(e[t].name); return e }, OC.Plugins.attach("OCA.Ethswarm.FileList", this), e 
							}, 
							getDirectoryPermissions: function () 
							{ 
								return OC.PERMISSION_READ | OC.PERMISSION_DELETE }
							, 
							_setCurrentDir: function (e) 
							{ 
								OCA.Files.FileList.prototype._setCurrentDir.apply(this, arguments); var t = OC.basename(e); "" !== t && this.setPageTitle(o(t)) 
							}
							, _createRow: function () 
							{ 	var e = OCA.Files.FileList.prototype._createRow.apply(this, arguments); return e.find("td.filesize").remove(), e }, 
								getAjaxUrl: function (e, t) { var n = ""; return t && (n = "?" + OC.buildQueryString(t)), OC.filePath("files_external_ethswarm", "ajax", e + ".php") + n }, 
								setupUploadEvents: function () { }, 
								linkTo: function (e) { return OC.linkTo("files", "index.php") + "?view=trashbin&dir=" + encodeURIComponent(e).replace(/%2F/g, "/") }, 
								elementToFile: function (e) { var t = OCA.Files.FileList.prototype.elementToFile(e); return "/" === this.getCurrentDirectory() && (t.displayName = o(t.name)), delete t.size, t }, 
								updateEmptyContent: function () { var e = this.$fileList.find("tr:first").exists(); this.$el.find("#emptycontent").toggleClass("hidden", e), this.$el.find("#filestable th").toggleClass("hidden", !e) }, 
								_removeCallback: function (e) { for (var t, n = 0; n < e.length; n++)t = this.remove(OC.basename(e[n]), { updateSummary: !1 }), this.fileSummary.remove({ type: t.attr("data-type"), size: t.attr("data-size") }); this.fileSummary.update(), this.updateEmptyContent() }, 
								_onClickRestoreSelected: function (e) { e.preventDefault(); for (var n = this, i = _.pluck(this.getSelectedFiles(), "name"), r = 0; r < i.length; r++) { var a = this.findFileEl(i[r]); this.showFileBusyState(a, !0) } this.fileMultiSelectMenu.toggleLoading("restore", !0); var o = i.map((function (e) { return n.client.move(OC.joinPaths("trash", n.getCurrentDirectory(), e), OC.joinPaths("restore", e), !0).then((function () { n._removeCallback([e]) })) })); return Promise.all(o).then((function () { n.fileMultiSelectMenu.toggleLoading("restore", !1) }), (function () { OC.Notification.show(t("files_external_ethswarm", "Error while restoring files from trash bin")) })) }, 
								_onClickDeleteSelected: function (e) { e.preventDefault(); for (var n = this, i = this.$el.find(".select-all").is(":checked"), r = _.pluck(this.getSelectedFiles(), "name"), a = 0; a < r.length; a++) { var o = this.findFileEl(r[a]); this.showFileBusyState(o, !0) } if (i) return this.client.remove(OC.joinPaths("trash", this.getCurrentDirectory())).then((function () { n.hideMask(), n.setFiles([]) }), (function () { OC.Notification.show(t("files_external_ethswarm", "Error while emptying trash bin")) })); this.fileMultiSelectMenu.toggleLoading("delete", !0); var s = r.map((function (e) { return n.client.remove(OC.joinPaths("trash", n.getCurrentDirectory(), e)).then((function () { n._removeCallback([e]) })) })); return Promise.all(s).then((function () { n.fileMultiSelectMenu.toggleLoading("delete", !1) }), (function () { OC.Notification.show(t("files_external_ethswarm", "Error while removing files from trash bin")) })) }, 
								_onClickFile: function (e) { var t = $(this).parent().parent().data("mime"); return "httpd/unix-directory" !== t && e.preventDefault(), OCA.Files.FileList.prototype._onClickFile.apply(this, arguments) }, 
								generatePreviewUrl: function (e) { return OC.generateUrl("/apps/files_trashbin/preview?") + $.param(e) }, 
								getDownloadUrl: function () { return "#" }, 
								getDefaultActionUrl: function () { return "#" }, 
								updateStorageStatistics: function () { }, 
								isSelectedDeletable: function () { return !0 }, 
								_getWebdavProperties: function () 
								{ 
									return [n, i, r, a].concat(this.filesClient.getPropfindProperties()) 
								}, 
								reload: function () 
								{ 
									this._selectedFiles = {}, this._selectionSummary.clear(), this.$el.find(".select-all").prop("checked", !1), this.showMask(), this._reloadCall && this._reloadCall.abort(), this._reloadCall = this.client.getFolderContents("trash/" + this.getCurrentDirectory(), { includeParent: !1, properties: this._getWebdavProperties() }); var e = this.reloadCallback.bind(this); return this._reloadCall.then(e, e) }, 
									reloadCallback: function (e, n) 
									{ 
										return delete this._reloadCall, this.hideMask(), 401 !== e && (403 === e ? (this.changeDirectory("/"), OC.Notification.show(t("files", "This operation is forbidden")), !1) : 500 === e ? (this.changeDirectory("/"), OC.Notification.show(t("files", "This directory is unavailable, please check the logs or contact the administrator")), !1) : 404 === e ? (this.changeDirectory("/"), !1) : (0 === e || this.setFiles(n), !0))
									}
						}
					),
					OCA.Ethswarm.FileList = s
			}()
		},

		function (e, t, n) {
			"use strict";
			n.r(t); n(4), n(5); var i = n(1), r = n.n(i), a = n(0), o = { insert: "head", singleton: !1 }; r()(a.a, o), a.a.locals;

			window.OCA.Ethswarm = OCA.Ethswarm
		}
	]);

//# sourceMappingURL=files_trashbin.js.map
