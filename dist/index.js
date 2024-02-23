var Tt = Object.defineProperty;
var ie = Object.getOwnPropertySymbols;
var bt = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable;
var oe = (s, e, t) => e in s ? Tt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, z = (s, e) => {
  for (var t in e || (e = {}))
    bt.call(e, t) && oe(s, t, e[t]);
  if (ie)
    for (var t of ie(e))
      Et.call(e, t) && oe(s, t, e[t]);
  return s;
};
var ae = (s, e, t) => new Promise((n, r) => {
  var o = (c) => {
    try {
      l(t.next(c));
    } catch (h) {
      r(h);
    }
  }, a = (c) => {
    try {
      l(t.throw(c));
    } catch (h) {
      r(h);
    }
  }, l = (c) => c.done ? n(c.value) : Promise.resolve(c.value).then(o, a);
  l((t = t.apply(s, e)).next());
});
import wt from "axios";
const Mt = `/* Container */\r
ue-player {\r
  background: black;\r
  cursor: pointer;\r
  display: block;\r
  height: 100%;\r
  position: relative;\r
  width: 100%;\r
  z-index: 0;\r
}\r
\r
/* Medias */\r
.ue-media-wrapper {\r
  position: relative;\r
}\r
.ue-media-wrapper video {\r
  height: 100%;\r
  width: 100%;\r
}\r
`, Pt = `.debug-close {\r
  float: right;\r
  font-size: 2em;\r
  margin: 0.5rem;\r
  padding-top: 0.5rem;\r
  padding-bottom: 0.5rem;\r
  padding-right: 0.5rem;\r
}\r
.debug-close::after {\r
  padding-left: 0.5rem;\r
  display: inline-block;\r
  content: '\\00d7';\r
}\r
.debug-close:hover {\r
  color: var(--color3);\r
  transform: scale(0.95);\r
}\r
\r
.debug-code {\r
  margin-top: 0.25rem;\r
}\r
\r
.debug-column {\r
  flex-grow: 1;\r
  padding: 0.15rem 10px 0.15rem 10px;\r
}\r
.debug-column textarea {\r
  width: 100%;\r
}\r
.debug-column-header {\r
  margin-bottom: 10px;\r
}\r
.debug-columns {\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
  padding-top: 10px;\r
  padding-bottom: 10px;\r
}\r
\r
.debug-content {\r
  margin-left: 2rem;\r
  margin-right: 2rem;\r
}\r
\r
.debug-form {\r
  margin-left: 2rem;\r
  margin-right: 2rem;\r
  overflow-y: auto;\r
  padding: 1em;\r
}\r
\r
.debug-group {\r
  box-sizing: border-box;\r
  color-scheme: dark;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
  padding: 0.15rem 10px 0.15rem 10px;\r
  width: 100%;\r
}\r
.debug-group input[type="textbox"] {\r
  caret-color: var(--color5);\r
  padding: 0 0.25rem;\r
  text-align: left;\r
}\r
.debug-group input[type="number"] {\r
  caret-color: var(--color5);\r
  text-align: right;\r
}\r
.debug-group input + input {\r
  margin-left: 0.5rem;\r
}\r
.debug-group select {\r
  padding: 0 0.25rem;\r
  text-align: left;\r
}\r
.debug-group select + input {\r
  margin-left: 0.5rem;\r
}\r
\r
.debug-header {\r
  color: var(--color3);\r
  font-style: italic;\r
  font-weight: bold;\r
}\r
.debug-header::after {\r
  content: '▾';\r
  float: right;\r
  font-style: normal;\r
  transform: rotate(0);\r
  transition-duration: .5s;\r
  transition-property: transform;\r
}\r
\r
.debug-heading {\r
  display: inline-block;\r
  font-size: 2em;\r
  margin-block-start: 0.67em;\r
  margin-block-end: 0.67em;\r
  margin-inline-start: 0px;\r
  margin-inline-end: 0px;\r
  padding: 0 0 0 2rem;\r
  position: relative;\r
}\r
\r
.debug-input {\r
  background-color: var(--color7);\r
  border: 2px solid var(--color7);\r
  border-radius: 4px;\r
  color: var(--color2);\r
  font-family: inherit;\r
}\r
\r
.debug-number-input {\r
  width: 75px;\r
}\r
\r
.debug-rows {\r
  border-bottom: 1px solid var(--color7);\r
  box-sizing: border-box;\r
  overflow: hidden;\r
  padding: 10px 0;\r
}\r
.debug-rows.collapsed {\r
  height: 2.5rem;\r
}\r
.debug-rows.collapsed .debug-header {\r
  color: var(--color2);\r
  margin-bottom: 1rem;\r
}\r
.debug-rows.collapsed .debug-header::after {\r
  transform: rotate(150deg);\r
}\r
\r
.debug-text {\r
  color: var(--color2);\r
  vertical-align: middle;\r
  font-weight: normal;\r
}\r
\r
.drawer-container {\r
  align-items: flex-end;\r
  color: var(--color2);\r
  display: flex;\r
  inset: 0;\r
  justify-content: center;\r
  overflow: hidden;\r
  pointer-events: none;\r
  position: absolute;\r
  z-index: 99;\r
}\r
\r
.drawer-wrap {\r
  backdrop-filter: blur(10px);\r
  -webkit-backdrop-filter: blur(10px);\r
  background-color: var(--color0);\r
  box-sizing: border-box;\r
  height: auto;\r
  max-height: 90%;\r
  min-height: 30%;\r
  overflow-y: auto;\r
  overflow-x: hidden;\r
  pointer-events: all;\r
  transform: translateY(100%);\r
  transition: .2s ease-out;\r
  width: 800px;\r
}\r
.drawer-wrap-visible {\r
  transform: translateY(0);\r
}\r
\r
#command-input {\r
  width: 300px;\r
}\r
\r
#debug-panel {\r
  min-width: 600px;\r
  width: 25%;\r
}\r
\r
textarea.silent {\r
  outline: none;\r
  resize: none;\r
}\r
`;
let N = null;
const Rt = (s, e = 62.5, t = !1) => (...n) => {
  N && clearTimeout(N), t && s(...n), N = setTimeout(() => {
    t || s(...n), N = null;
  }, e);
}, kt = Rt((...s) => {
  if (!(f != null && f.isConnected))
    return;
  const [e, t] = s, n = (e != null ? e : f.matchMakerURL).replace(/\/$/, ""), r = t != null ? t : f.applicationName;
  if (!n || !r)
    return;
  const o = `${n}/GetPixelStreamingInstance?ApplicationName=${r}`, a = f.getAttribute("data-source");
  o !== a && (f.setAttribute("data-source", o), fe(o).then((l) => {
    f == null || f.setAttribute("signaling-url", l);
  }).catch((l) => {
    ft(l);
  }));
});
function fe(s) {
  return new Promise((e, t) => {
    wt(s).then((n) => {
      const r = n.data;
      switch (r.Code) {
        case "0": {
          r.Data ? e(r.Data) : t("Get Pixel Streaming Instance Failed!");
          break;
        }
        case "3": {
          t(r);
          break;
        }
        default:
          setTimeout(() => {
            e(fe(s));
          }, 1e3);
      }
    }).catch((n) => {
      t(n);
    });
  });
}
const Lt = `ue-player {\r
  align-items: center;\r
  display: flex;\r
  justify-content: center;\r
}\r
\r
.ue-media-wrapper {\r
  aspect-ratio: 16 / 9;\r
}\r
\r
@media screen and (max-aspect-ratio: 16 / 9) {\r
  .ue-media-wrapper {\r
    width: 100%;\r
  }\r
}\r
@media screen and (min-aspect-ratio: 16 / 9) {\r
  .ue-media-wrapper {\r
    height: 100%;\r
  }\r
}\r
`;
var Ce = { exports: {} };
(function(s) {
  const e = {};
  e.generateIdentifier = function() {
    return Math.random().toString(36).substring(2, 12);
  }, e.localCName = e.generateIdentifier(), e.splitLines = function(t) {
    return t.trim().split(`
`).map((n) => n.trim());
  }, e.splitSections = function(t) {
    return t.split(`
m=`).map((r, o) => (o > 0 ? "m=" + r : r).trim() + `\r
`);
  }, e.getDescription = function(t) {
    const n = e.splitSections(t);
    return n && n[0];
  }, e.getMediaSections = function(t) {
    const n = e.splitSections(t);
    return n.shift(), n;
  }, e.matchPrefix = function(t, n) {
    return e.splitLines(t).filter((r) => r.indexOf(n) === 0);
  }, e.parseCandidate = function(t) {
    let n;
    t.indexOf("a=candidate:") === 0 ? n = t.substring(12).split(" ") : n = t.substring(10).split(" ");
    const r = {
      foundation: n[0],
      component: { 1: "rtp", 2: "rtcp" }[n[1]] || n[1],
      protocol: n[2].toLowerCase(),
      priority: parseInt(n[3], 10),
      ip: n[4],
      address: n[4],
      // address is an alias for ip.
      port: parseInt(n[5], 10),
      // skip parts[6] == 'typ'
      type: n[7]
    };
    for (let o = 8; o < n.length; o += 2)
      switch (n[o]) {
        case "raddr":
          r.relatedAddress = n[o + 1];
          break;
        case "rport":
          r.relatedPort = parseInt(n[o + 1], 10);
          break;
        case "tcptype":
          r.tcpType = n[o + 1];
          break;
        case "ufrag":
          r.ufrag = n[o + 1], r.usernameFragment = n[o + 1];
          break;
        default:
          r[n[o]] === void 0 && (r[n[o]] = n[o + 1]);
          break;
      }
    return r;
  }, e.writeCandidate = function(t) {
    const n = [];
    n.push(t.foundation);
    const r = t.component;
    r === "rtp" ? n.push(1) : r === "rtcp" ? n.push(2) : n.push(r), n.push(t.protocol.toUpperCase()), n.push(t.priority), n.push(t.address || t.ip), n.push(t.port);
    const o = t.type;
    return n.push("typ"), n.push(o), o !== "host" && t.relatedAddress && t.relatedPort && (n.push("raddr"), n.push(t.relatedAddress), n.push("rport"), n.push(t.relatedPort)), t.tcpType && t.protocol.toLowerCase() === "tcp" && (n.push("tcptype"), n.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (n.push("ufrag"), n.push(t.usernameFragment || t.ufrag)), "candidate:" + n.join(" ");
  }, e.parseIceOptions = function(t) {
    return t.substring(14).split(" ");
  }, e.parseRtpMap = function(t) {
    let n = t.substring(9).split(" ");
    const r = {
      payloadType: parseInt(n.shift(), 10)
      // was: id
    };
    return n = n[0].split("/"), r.name = n[0], r.clockRate = parseInt(n[1], 10), r.channels = n.length === 3 ? parseInt(n[2], 10) : 1, r.numChannels = r.channels, r;
  }, e.writeRtpMap = function(t) {
    let n = t.payloadType;
    t.preferredPayloadType !== void 0 && (n = t.preferredPayloadType);
    const r = t.channels || t.numChannels || 1;
    return "a=rtpmap:" + n + " " + t.name + "/" + t.clockRate + (r !== 1 ? "/" + r : "") + `\r
`;
  }, e.parseExtmap = function(t) {
    const n = t.substring(9).split(" ");
    return {
      id: parseInt(n[0], 10),
      direction: n[0].indexOf("/") > 0 ? n[0].split("/")[1] : "sendrecv",
      uri: n[1],
      attributes: n.slice(2).join(" ")
    };
  }, e.writeExtmap = function(t) {
    return "a=extmap:" + (t.id || t.preferredId) + (t.direction && t.direction !== "sendrecv" ? "/" + t.direction : "") + " " + t.uri + (t.attributes ? " " + t.attributes : "") + `\r
`;
  }, e.parseFmtp = function(t) {
    const n = {};
    let r;
    const o = t.substring(t.indexOf(" ") + 1).split(";");
    for (let a = 0; a < o.length; a++)
      r = o[a].trim().split("="), n[r[0].trim()] = r[1];
    return n;
  }, e.writeFmtp = function(t) {
    let n = "", r = t.payloadType;
    if (t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
      const o = [];
      Object.keys(t.parameters).forEach((a) => {
        t.parameters[a] !== void 0 ? o.push(a + "=" + t.parameters[a]) : o.push(a);
      }), n += "a=fmtp:" + r + " " + o.join(";") + `\r
`;
    }
    return n;
  }, e.parseRtcpFb = function(t) {
    const n = t.substring(t.indexOf(" ") + 1).split(" ");
    return {
      type: n.shift(),
      parameter: n.join(" ")
    };
  }, e.writeRtcpFb = function(t) {
    let n = "", r = t.payloadType;
    return t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach((o) => {
      n += "a=rtcp-fb:" + r + " " + o.type + (o.parameter && o.parameter.length ? " " + o.parameter : "") + `\r
`;
    }), n;
  }, e.parseSsrcMedia = function(t) {
    const n = t.indexOf(" "), r = {
      ssrc: parseInt(t.substring(7, n), 10)
    }, o = t.indexOf(":", n);
    return o > -1 ? (r.attribute = t.substring(n + 1, o), r.value = t.substring(o + 1)) : r.attribute = t.substring(n + 1), r;
  }, e.parseSsrcGroup = function(t) {
    const n = t.substring(13).split(" ");
    return {
      semantics: n.shift(),
      ssrcs: n.map((r) => parseInt(r, 10))
    };
  }, e.getMid = function(t) {
    const n = e.matchPrefix(t, "a=mid:")[0];
    if (n)
      return n.substring(6);
  }, e.parseFingerprint = function(t) {
    const n = t.substring(14).split(" ");
    return {
      algorithm: n[0].toLowerCase(),
      // algorithm is case-sensitive in Edge.
      value: n[1].toUpperCase()
      // the definition is upper-case in RFC 4572.
    };
  }, e.getDtlsParameters = function(t, n) {
    return {
      role: "auto",
      fingerprints: e.matchPrefix(
        t + n,
        "a=fingerprint:"
      ).map(e.parseFingerprint)
    };
  }, e.writeDtlsParameters = function(t, n) {
    let r = "a=setup:" + n + `\r
`;
    return t.fingerprints.forEach((o) => {
      r += "a=fingerprint:" + o.algorithm + " " + o.value + `\r
`;
    }), r;
  }, e.parseCryptoLine = function(t) {
    const n = t.substring(9).split(" ");
    return {
      tag: parseInt(n[0], 10),
      cryptoSuite: n[1],
      keyParams: n[2],
      sessionParams: n.slice(3)
    };
  }, e.writeCryptoLine = function(t) {
    return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + (typeof t.keyParams == "object" ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + `\r
`;
  }, e.parseCryptoKeyParams = function(t) {
    if (t.indexOf("inline:") !== 0)
      return null;
    const n = t.substring(7).split("|");
    return {
      keyMethod: "inline",
      keySalt: n[0],
      lifeTime: n[1],
      mkiValue: n[2] ? n[2].split(":")[0] : void 0,
      mkiLength: n[2] ? n[2].split(":")[1] : void 0
    };
  }, e.writeCryptoKeyParams = function(t) {
    return t.keyMethod + ":" + t.keySalt + (t.lifeTime ? "|" + t.lifeTime : "") + (t.mkiValue && t.mkiLength ? "|" + t.mkiValue + ":" + t.mkiLength : "");
  }, e.getCryptoParameters = function(t, n) {
    return e.matchPrefix(
      t + n,
      "a=crypto:"
    ).map(e.parseCryptoLine);
  }, e.getIceParameters = function(t, n) {
    const r = e.matchPrefix(
      t + n,
      "a=ice-ufrag:"
    )[0], o = e.matchPrefix(
      t + n,
      "a=ice-pwd:"
    )[0];
    return r && o ? {
      usernameFragment: r.substring(12),
      password: o.substring(10)
    } : null;
  }, e.writeIceParameters = function(t) {
    let n = "a=ice-ufrag:" + t.usernameFragment + `\r
a=ice-pwd:` + t.password + `\r
`;
    return t.iceLite && (n += `a=ice-lite\r
`), n;
  }, e.parseRtpParameters = function(t) {
    const n = {
      codecs: [],
      headerExtensions: [],
      fecMechanisms: [],
      rtcp: []
    }, o = e.splitLines(t)[0].split(" ");
    n.profile = o[2];
    for (let l = 3; l < o.length; l++) {
      const c = o[l], h = e.matchPrefix(
        t,
        "a=rtpmap:" + c + " "
      )[0];
      if (h) {
        const g = e.parseRtpMap(h), E = e.matchPrefix(
          t,
          "a=fmtp:" + c + " "
        );
        switch (g.parameters = E.length ? e.parseFmtp(E[0]) : {}, g.rtcpFeedback = e.matchPrefix(
          t,
          "a=rtcp-fb:" + c + " "
        ).map(e.parseRtcpFb), n.codecs.push(g), g.name.toUpperCase()) {
          case "RED":
          case "ULPFEC":
            n.fecMechanisms.push(g.name.toUpperCase());
            break;
        }
      }
    }
    e.matchPrefix(t, "a=extmap:").forEach((l) => {
      n.headerExtensions.push(e.parseExtmap(l));
    });
    const a = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
    return n.codecs.forEach((l) => {
      a.forEach((c) => {
        l.rtcpFeedback.find((g) => g.type === c.type && g.parameter === c.parameter) || l.rtcpFeedback.push(c);
      });
    }), n;
  }, e.writeRtpDescription = function(t, n) {
    let r = "";
    r += "m=" + t + " ", r += n.codecs.length > 0 ? "9" : "0", r += " " + (n.profile || "UDP/TLS/RTP/SAVPF") + " ", r += n.codecs.map((a) => a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType).join(" ") + `\r
`, r += `c=IN IP4 0.0.0.0\r
`, r += `a=rtcp:9 IN IP4 0.0.0.0\r
`, n.codecs.forEach((a) => {
      r += e.writeRtpMap(a), r += e.writeFmtp(a), r += e.writeRtcpFb(a);
    });
    let o = 0;
    return n.codecs.forEach((a) => {
      a.maxptime > o && (o = a.maxptime);
    }), o > 0 && (r += "a=maxptime:" + o + `\r
`), n.headerExtensions && n.headerExtensions.forEach((a) => {
      r += e.writeExtmap(a);
    }), r;
  }, e.parseRtpEncodingParameters = function(t) {
    const n = [], r = e.parseRtpParameters(t), o = r.fecMechanisms.indexOf("RED") !== -1, a = r.fecMechanisms.indexOf("ULPFEC") !== -1, l = e.matchPrefix(t, "a=ssrc:").map((v) => e.parseSsrcMedia(v)).filter((v) => v.attribute === "cname"), c = l.length > 0 && l[0].ssrc;
    let h;
    const g = e.matchPrefix(t, "a=ssrc-group:FID").map((v) => v.substring(17).split(" ").map((M) => parseInt(M, 10)));
    g.length > 0 && g[0].length > 1 && g[0][0] === c && (h = g[0][1]), r.codecs.forEach((v) => {
      if (v.name.toUpperCase() === "RTX" && v.parameters.apt) {
        let y = {
          ssrc: c,
          codecPayloadType: parseInt(v.parameters.apt, 10)
        };
        c && h && (y.rtx = { ssrc: h }), n.push(y), o && (y = JSON.parse(JSON.stringify(y)), y.fec = {
          ssrc: c,
          mechanism: a ? "red+ulpfec" : "red"
        }, n.push(y));
      }
    }), n.length === 0 && c && n.push({
      ssrc: c
    });
    let E = e.matchPrefix(t, "b=");
    return E.length && (E[0].indexOf("b=TIAS:") === 0 ? E = parseInt(E[0].substring(7), 10) : E[0].indexOf("b=AS:") === 0 ? E = parseInt(E[0].substring(5), 10) * 1e3 * 0.95 - 50 * 40 * 8 : E = void 0, n.forEach((v) => {
      v.maxBitrate = E;
    })), n;
  }, e.parseRtcpParameters = function(t) {
    const n = {}, r = e.matchPrefix(t, "a=ssrc:").map((l) => e.parseSsrcMedia(l)).filter((l) => l.attribute === "cname")[0];
    r && (n.cname = r.value, n.ssrc = r.ssrc);
    const o = e.matchPrefix(t, "a=rtcp-rsize");
    n.reducedSize = o.length > 0, n.compound = o.length === 0;
    const a = e.matchPrefix(t, "a=rtcp-mux");
    return n.mux = a.length > 0, n;
  }, e.writeRtcpParameters = function(t) {
    let n = "";
    return t.reducedSize && (n += `a=rtcp-rsize\r
`), t.mux && (n += `a=rtcp-mux\r
`), t.ssrc !== void 0 && t.cname && (n += "a=ssrc:" + t.ssrc + " cname:" + t.cname + `\r
`), n;
  }, e.parseMsid = function(t) {
    let n;
    const r = e.matchPrefix(t, "a=msid:");
    if (r.length === 1)
      return n = r[0].substring(7).split(" "), { stream: n[0], track: n[1] };
    const o = e.matchPrefix(t, "a=ssrc:").map((a) => e.parseSsrcMedia(a)).filter((a) => a.attribute === "msid");
    if (o.length > 0)
      return n = o[0].value.split(" "), { stream: n[0], track: n[1] };
  }, e.parseSctpDescription = function(t) {
    const n = e.parseMLine(t), r = e.matchPrefix(t, "a=max-message-size:");
    let o;
    r.length > 0 && (o = parseInt(r[0].substring(19), 10)), isNaN(o) && (o = 65536);
    const a = e.matchPrefix(t, "a=sctp-port:");
    if (a.length > 0)
      return {
        port: parseInt(a[0].substring(12), 10),
        protocol: n.fmt,
        maxMessageSize: o
      };
    const l = e.matchPrefix(t, "a=sctpmap:");
    if (l.length > 0) {
      const c = l[0].substring(10).split(" ");
      return {
        port: parseInt(c[0], 10),
        protocol: c[1],
        maxMessageSize: o
      };
    }
  }, e.writeSctpDescription = function(t, n) {
    let r = [];
    return t.protocol !== "DTLS/SCTP" ? r = [
      "m=" + t.kind + " 9 " + t.protocol + " " + n.protocol + `\r
`,
      `c=IN IP4 0.0.0.0\r
`,
      "a=sctp-port:" + n.port + `\r
`
    ] : r = [
      "m=" + t.kind + " 9 " + t.protocol + " " + n.port + `\r
`,
      `c=IN IP4 0.0.0.0\r
`,
      "a=sctpmap:" + n.port + " " + n.protocol + ` 65535\r
`
    ], n.maxMessageSize !== void 0 && r.push("a=max-message-size:" + n.maxMessageSize + `\r
`), r.join("");
  }, e.generateSessionId = function() {
    return Math.random().toString().substr(2, 22);
  }, e.writeSessionBoilerplate = function(t, n, r) {
    let o;
    const a = n !== void 0 ? n : 2;
    return t ? o = t : o = e.generateSessionId(), `v=0\r
o=` + (r || "thisisadapterortc") + " " + o + " " + a + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
  }, e.getDirection = function(t, n) {
    const r = e.splitLines(t);
    for (let o = 0; o < r.length; o++)
      switch (r[o]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return r[o].substring(2);
      }
    return n ? e.getDirection(n) : "sendrecv";
  }, e.getKind = function(t) {
    return e.splitLines(t)[0].split(" ")[0].substring(2);
  }, e.isRejected = function(t) {
    return t.split(" ", 2)[1] === "0";
  }, e.parseMLine = function(t) {
    const r = e.splitLines(t)[0].substring(2).split(" ");
    return {
      kind: r[0],
      port: parseInt(r[1], 10),
      protocol: r[2],
      fmt: r.slice(3).join(" ")
    };
  }, e.parseOLine = function(t) {
    const r = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
    return {
      username: r[0],
      sessionId: r[1],
      sessionVersion: parseInt(r[2], 10),
      netType: r[3],
      addressType: r[4],
      address: r[5]
    };
  }, e.isValidSDP = function(t) {
    if (typeof t != "string" || t.length === 0)
      return !1;
    const n = e.splitLines(t);
    for (let r = 0; r < n.length; r++)
      if (n[r].length < 2 || n[r].charAt(1) !== "=")
        return !1;
    return !0;
  }, s.exports = e;
})(Ce);
var le = Ce.exports, L, w, Q = { d: (s, e) => {
  for (var t in e)
    Q.o(e, t) && !Q.o(s, t) && Object.defineProperty(s, t, { enumerable: !0, get: e[t] });
}, o: (s, e) => Object.prototype.hasOwnProperty.call(s, e) }, u = {};
Q.d(u, { Dz: () => et, g$: () => Me, Lt: () => Ee, Q9: () => we, qf: () => ee, hV: () => ot, z$: () => st, J0: () => ne, De: () => Xt, $C: () => U, al: () => Oe, _W: () => Ie, Gv: () => qe, m: () => Xe, tz: () => Fe, Nu: () => rt, zg: () => ct, vp: () => Ze, vU: () => d, wF: () => Ne, rv: () => tt, Nh: () => nt, ss: () => lt, qW: () => je, QL: () => Qe, cf: () => ht, eM: () => Ve, Yd: () => i, Tk: () => p, iM: () => ye, qy: () => D, ce: () => Bt, sK: () => S, Ok: () => C, q5: () => it, g: () => En, xl: () => He, I: () => We, bx: () => te, dD: () => Ye, Ib: () => W, Az: () => T, Iw: () => A, qY: () => Z, db: () => be, mR: () => _, Tn: () => Y, rV: () => $e, gh: () => ze, Mi: () => Ge, j: () => Be, YB: () => _e, i5: () => Ke, x_: () => I, Am: () => re, eR: () => Pe, r8: () => Ue, u3: () => dt, vd: () => ke, iV: () => xe, jZ: () => Le, SW: () => De, ZH: () => Ae, Ni: () => ut, lh: () => Re, bq: () => Te, $f: () => mt, eu: () => Je, Ax: () => Nt, Mc: () => Vt });
class i {
  static GetStackTrace() {
    const e = new Error();
    let t = "No Stack Available for this browser";
    return e.stack && (t = e.stack.toString().replace(/Error/g, "")), t;
  }
  static SetLoggerVerbosity(e) {
    this.verboseLogLevel != null && (this.verboseLogLevel = e);
  }
  static Log(e, t, n) {
    if (n > this.verboseLogLevel)
      return;
    const r = `Level: Log
Msg: ${t}
Caller: ${e}`;
    console.log(r);
  }
  static Info(e, t, n) {
    if (n > this.verboseLogLevel)
      return;
    const r = `Level: Info
Msg: ${t}`;
    console.info(r);
  }
  static Error(e, t) {
    const n = `Level: Error
Msg: ${t}
Caller: ${e}`;
    console.error(n);
  }
  static Warning(e, t) {
    const n = `Level: Warning
Caller: ${e}
Msg: ${t}`;
    console.warn(n);
  }
}
i.verboseLogLevel = 5, function(s) {
  s.LIST_STREAMERS = "listStreamers", s.SUBSCRIBE = "subscribe", s.UNSUBSCRIBE = "unsubscribe", s.ICE_CANDIDATE = "iceCandidate", s.OFFER = "offer", s.ANSWER = "answer", s.DATACHANNELREQUEST = "dataChannelRequest", s.SFURECVDATACHANNELREADY = "peerDataChannelsReady", s.PONG = "pong";
}(L || (L = {}));
class D {
  payload() {
    return i.Log(i.GetStackTrace(), `Sending => 
` + JSON.stringify(this, void 0, 4), 6), JSON.stringify(this);
  }
}
class xt extends D {
  constructor() {
    super(), this.type = L.LIST_STREAMERS;
  }
}
class At extends D {
  constructor(e) {
    super(), this.type = L.SUBSCRIBE, this.streamerId = e;
  }
}
class Dt extends D {
  constructor() {
    super(), this.type = L.UNSUBSCRIBE;
  }
}
let Ft = class extends D {
  constructor(e) {
    super(), this.type = L.PONG, this.time = e;
  }
};
class Ot extends D {
  constructor(e) {
    super(), this.type = L.OFFER, e && (this.type = e.type, this.sdp = e.sdp);
  }
}
class It extends D {
  constructor(e) {
    super(), this.type = L.ANSWER, e && (this.type = e.type, this.sdp = e.sdp);
  }
}
class Ut extends D {
  constructor() {
    super(), this.type = L.DATACHANNELREQUEST;
  }
}
class zt extends D {
  constructor() {
    super(), this.type = L.SFURECVDATACHANNELREADY;
  }
}
class Gt {
  constructor(e) {
    this.type = L.ICE_CANDIDATE, this.candidate = e;
  }
  payload() {
    return i.Log(i.GetStackTrace(), `Sending => 
` + JSON.stringify(this, void 0, 4), 6), JSON.stringify(this);
  }
}
(function(s) {
  s.CONFIG = "config", s.STREAMER_LIST = "streamerList", s.PLAYER_COUNT = "playerCount", s.OFFER = "offer", s.ANSWER = "answer", s.ICE_CANDIDATE = "iceCandidate", s.PEER_DATA_CHANNELS = "peerDataChannels", s.PING = "ping", s.WARNING = "warning";
})(w || (w = {}));
class ye {
}
class Bt extends ye {
}
class Y {
  constructor() {
    this.FromUEMessageHandlers = /* @__PURE__ */ new Map();
  }
  addMessageHandler(e, t) {
    this.FromUEMessageHandlers.set(e, t);
  }
  handleMessage(e, t) {
    this.FromUEMessageHandlers.has(e) ? this.FromUEMessageHandlers.get(e)(t) : i.Error(i.GetStackTrace(), `Message type of ${e} does not have a message handler registered on the frontend - ignoring message.`);
  }
  static setupDefaultHandlers(e) {
    e.signallingProtocol.addMessageHandler(w.PING, (t) => {
      const n = new Ft((/* @__PURE__ */ new Date()).getTime()).payload();
      i.Log(i.GetStackTrace(), w.PING + ": " + t, 6), e.webSocket.send(n);
    }), e.signallingProtocol.addMessageHandler(w.CONFIG, (t) => {
      i.Log(i.GetStackTrace(), w.CONFIG, 6);
      const n = JSON.parse(t);
      e.onConfig(n);
    }), e.signallingProtocol.addMessageHandler(w.STREAMER_LIST, (t) => {
      i.Log(i.GetStackTrace(), w.STREAMER_LIST, 6);
      const n = JSON.parse(t);
      e.onStreamerList(n);
    }), e.signallingProtocol.addMessageHandler(w.PLAYER_COUNT, (t) => {
      i.Log(i.GetStackTrace(), w.PLAYER_COUNT, 6);
      const n = JSON.parse(t);
      i.Log(i.GetStackTrace(), "Player Count: " + n.count, 6), e.onPlayerCount(n);
    }), e.signallingProtocol.addMessageHandler(w.ANSWER, (t) => {
      i.Log(i.GetStackTrace(), w.ANSWER, 6);
      const n = JSON.parse(t);
      e.onWebRtcAnswer(n);
    }), e.signallingProtocol.addMessageHandler(w.OFFER, (t) => {
      i.Log(i.GetStackTrace(), w.OFFER, 6);
      const n = JSON.parse(t);
      e.onWebRtcOffer(n);
    }), e.signallingProtocol.addMessageHandler(w.ICE_CANDIDATE, (t) => {
      i.Log(i.GetStackTrace(), w.ICE_CANDIDATE, 6);
      const n = JSON.parse(t);
      e.onIceCandidate(n.candidate);
    }), e.signallingProtocol.addMessageHandler(w.WARNING, (t) => {
      i.Warning(i.GetStackTrace(), `Warning received: ${t}`);
    }), e.signallingProtocol.addMessageHandler(w.PEER_DATA_CHANNELS, (t) => {
      i.Log(i.GetStackTrace(), w.PEER_DATA_CHANNELS, 6);
      const n = JSON.parse(t);
      e.onWebRtcPeerDataChannels(n);
    });
  }
}
class Te {
  constructor() {
    this.WS_OPEN_STATE = 1, this.onOpen = new EventTarget(), this.onClose = new EventTarget(), this.signallingProtocol = new Y(), Y.setupDefaultHandlers(this);
  }
  connect(e) {
    i.Log(i.GetStackTrace(), e, 6);
    try {
      return this.webSocket = new WebSocket(e), this.webSocket.onopen = (t) => this.handleOnOpen(t), this.webSocket.onerror = () => this.handleOnError(), this.webSocket.onclose = (t) => this.handleOnClose(t), this.webSocket.onmessage = (t) => this.handleOnMessage(t), this.webSocket.onmessagebinary = (t) => this.handleOnMessageBinary(t), !0;
    } catch (t) {
      return i.Error(t, t), !1;
    }
  }
  handleOnMessageBinary(e) {
    e && e.data && e.data.text().then((t) => {
      const n = new MessageEvent("messageFromBinary", { data: t });
      this.handleOnMessage(n);
    }).catch((t) => {
      i.Error(i.GetStackTrace(), `Failed to parse binary blob from websocket, reason: ${t}`);
    });
  }
  handleOnMessage(e) {
    if (e.data && e.data instanceof Blob)
      return void this.handleOnMessageBinary(e);
    const t = JSON.parse(e.data);
    i.Log(i.GetStackTrace(), `received => 
` + JSON.stringify(JSON.parse(e.data), void 0, 4), 6), this.signallingProtocol.handleMessage(t.type, e.data);
  }
  handleOnOpen(e) {
    i.Log(i.GetStackTrace(), "Connected to the signalling server via WebSocket", 6), this.onOpen.dispatchEvent(new Event("open"));
  }
  handleOnError() {
    i.Error(i.GetStackTrace(), "WebSocket error");
  }
  handleOnClose(e) {
    this.onWebSocketOncloseOverlayMessage(e), i.Log(i.GetStackTrace(), "Disconnected to the signalling server via WebSocket: " + JSON.stringify(e.code) + " - " + e.reason), this.onClose.dispatchEvent(new CustomEvent("close", { detail: e }));
  }
  requestStreamerList() {
    const e = new xt();
    this.webSocket.send(e.payload());
  }
  sendSubscribe(e) {
    const t = new At(e);
    this.webSocket.send(t.payload());
  }
  sendUnsubscribe() {
    const e = new Dt();
    this.webSocket.send(e.payload());
  }
  sendWebRtcOffer(e) {
    const t = new Ot(e);
    this.webSocket.send(t.payload());
  }
  sendWebRtcAnswer(e) {
    const t = new It(e);
    this.webSocket.send(t.payload());
  }
  sendWebRtcDatachannelRequest() {
    const e = new Ut();
    this.webSocket.send(e.payload());
  }
  sendSFURecvDataChannelReady() {
    const e = new zt();
    this.webSocket.send(e.payload());
  }
  sendIceCandidate(e) {
    if (i.Log(i.GetStackTrace(), "Sending Ice Candidate"), this.webSocket && this.webSocket.readyState === this.WS_OPEN_STATE) {
      const t = new Gt(e);
      this.webSocket.send(t.payload());
    }
  }
  close() {
    var e;
    (e = this.webSocket) === null || e === void 0 || e.close();
  }
  onWebSocketOncloseOverlayMessage(e) {
  }
  onConfig(e) {
  }
  onStreamerList(e) {
  }
  onIceCandidate(e) {
  }
  onWebRtcAnswer(e) {
  }
  onWebRtcOffer(e) {
  }
  onWebRtcPeerDataChannels(e) {
  }
  onPlayerCount(e) {
  }
}
class _t {
  constructor(e) {
    this.videoElementProvider = e, this.audioElement = document.createElement("Audio"), this.videoElementProvider.setAudioElement(this.audioElement);
  }
  handleOnTrack(e) {
    i.Log(i.GetStackTrace(), "handleOnTrack " + JSON.stringify(e.streams), 6);
    const t = this.videoElementProvider.getVideoElement();
    if (e.track && i.Log(i.GetStackTrace(), "Got track - " + e.track.kind + " id=" + e.track.id + " readyState=" + e.track.readyState, 6), e.track.kind != "audio")
      return e.track.kind == "video" && t.srcObject !== e.streams[0] ? (t.srcObject = e.streams[0], void i.Log(i.GetStackTrace(), "Set video source from video track ontrack.")) : void 0;
    this.CreateAudioTrack(e.streams[0]);
  }
  CreateAudioTrack(e) {
    const t = this.videoElementProvider.getVideoElement();
    t.srcObject != e && t.srcObject && t.srcObject !== e && (this.audioElement.srcObject = e, i.Log(i.GetStackTrace(), "Created new audio element to play separate audio stream."));
  }
}
let Ht = class {
  constructor(e) {
    this.freezeFrameHeight = 0, this.freezeFrameWidth = 0, this.rootDiv = e, this.rootElement = document.createElement("div"), this.rootElement.id = "freezeFrame", this.rootElement.style.display = "none", this.rootElement.style.pointerEvents = "none", this.rootElement.style.position = "absolute", this.rootElement.style.zIndex = "20", this.imageElement = document.createElement("img"), this.imageElement.style.position = "absolute", this.rootElement.appendChild(this.imageElement), this.rootDiv.appendChild(this.rootElement);
  }
  setElementForShow() {
    this.rootElement.style.display = "block";
  }
  setElementForHide() {
    this.rootElement.style.display = "none";
  }
  updateImageElementSource(e) {
    const t = btoa(e.reduce((n, r) => n + String.fromCharCode(r), ""));
    this.imageElement.src = "data:image/jpeg;base64," + t;
  }
  setDimensionsFromElementAndResize() {
    this.freezeFrameHeight = this.imageElement.naturalHeight, this.freezeFrameWidth = this.imageElement.naturalWidth, this.resize();
  }
  resize() {
    if (this.freezeFrameWidth !== 0 && this.freezeFrameHeight !== 0) {
      let e = 0, t = 0, n = 0, r = 0;
      const o = this.rootDiv.clientWidth / this.rootDiv.clientHeight, a = this.freezeFrameWidth / this.freezeFrameHeight;
      o < a ? (e = this.rootDiv.clientWidth, t = Math.floor(this.rootDiv.clientWidth / a), n = Math.floor(0.5 * (this.rootDiv.clientHeight - t)), r = 0) : (e = Math.floor(this.rootDiv.clientHeight * a), t = this.rootDiv.clientHeight, n = 0, r = Math.floor(0.5 * (this.rootDiv.clientWidth - e))), this.rootElement.style.width = this.rootDiv.offsetWidth + "px", this.rootElement.style.height = this.rootDiv.offsetHeight + "px", this.rootElement.style.left = "0px", this.rootElement.style.top = "0px", this.imageElement.style.width = e + "px", this.imageElement.style.height = t + "px", this.imageElement.style.left = r + "px", this.imageElement.style.top = n + "px";
    }
  }
};
class Wt {
  constructor(e) {
    this.receiving = !1, this.size = 0, this.jpeg = void 0, this.valid = !1, this.freezeFrameDelay = 50, this.freezeFrame = new Ht(e);
  }
  showFreezeFrame() {
    this.valid && this.freezeFrame.setElementForShow();
  }
  hideFreezeFrame() {
    this.valid = !1, this.freezeFrame.setElementForHide();
  }
  updateFreezeFrameAndShow(e, t) {
    this.freezeFrame.updateImageElementSource(e), this.freezeFrame.imageElement.onload = () => {
      this.freezeFrame.setDimensionsFromElementAndResize(), t();
    };
  }
  processFreezeFrameMessage(e, t) {
    this.receiving || (this.receiving = !0, this.valid = !1, this.size = 0, this.jpeg = void 0), this.size = new DataView(e.slice(1, 5).buffer).getInt32(0, !0);
    const n = e.slice(5);
    if (this.jpeg) {
      const r = new Uint8Array(this.jpeg.length + n.length);
      r.set(this.jpeg, 0), r.set(n, this.jpeg.length), this.jpeg = r;
    } else
      this.jpeg = n, this.receiving = !0, i.Log(i.GetStackTrace(), `received first chunk of freeze frame: ${this.jpeg.length}/${this.size}`, 6);
    this.jpeg.length === this.size ? (this.receiving = !1, this.valid = !0, i.Log(i.GetStackTrace(), `received complete freeze frame ${this.size}`, 6), this.updateFreezeFrameAndShow(this.jpeg, t)) : this.jpeg.length > this.size && (i.Error(i.GetStackTrace(), `received bigger freeze frame than advertised: ${this.jpeg.length}/${this.size}`), this.jpeg = void 0, this.receiving = !1);
  }
}
class W {
  constructor(e, t, n, r, o = () => {
  }) {
    this.onChange = o, this.onChangeEmit = () => {
    }, this.id = e, this.description = n, this.label = t, this.value = r;
  }
  set label(e) {
    this._label = e, this.onChangeEmit(this._value);
  }
  get label() {
    return this._label;
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e, this.onChange(this._value, this), this.onChangeEmit(this._value);
  }
}
class T extends W {
  constructor(e, t, n, r, o, a = () => {
  }) {
    super(e, t, n, r, a);
    const l = new URLSearchParams(window.location.search);
    if (o && l.has(this.id)) {
      const c = this.getUrlParamFlag();
      this.flag = c;
    } else
      this.flag = r;
    this.useUrlParams = o;
  }
  getUrlParamFlag() {
    const e = new URLSearchParams(window.location.search);
    return !!e.has(this.id) && e.get(this.id) !== "false" && e.get(this.id) !== "False";
  }
  updateURLParams() {
    if (this.useUrlParams) {
      const e = new URLSearchParams(window.location.search);
      this.flag === !0 ? e.set(this.id, "true") : e.set(this.id, "false"), window.history.replaceState({}, "", e.toString() !== "" ? `${location.pathname}?${e}` : `${location.pathname}`);
    }
  }
  enable() {
    this.flag = !0;
  }
  get flag() {
    return !!this.value;
  }
  set flag(e) {
    this.value = e;
  }
}
class A extends W {
  constructor(e, t, n, r, o, a, l, c = () => {
  }) {
    super(e, t, n, a, c), this._min = r, this._max = o;
    const h = new URLSearchParams(window.location.search);
    if (l && h.has(this.id)) {
      const g = Number.parseInt(h.get(this.id));
      this.number = Number.isNaN(g) ? a : g;
    } else
      this.number = a;
    this.useUrlParams = l;
  }
  updateURLParams() {
    if (this.useUrlParams) {
      const e = new URLSearchParams(window.location.search);
      e.set(this.id, this.number.toString()), window.history.replaceState({}, "", e.toString() !== "" ? `${location.pathname}?${e}` : `${location.pathname}`);
    }
  }
  set number(e) {
    this.value = this.clamp(e);
  }
  get number() {
    return this.value;
  }
  clamp(e) {
    return Math.max(Math.min(this._max, e), this._min);
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
  addOnChangedListener(e) {
    this.onChange = e;
  }
}
class be extends W {
  constructor(e, t, n, r, o, a = () => {
  }) {
    super(e, t, n, r, a);
    const l = new URLSearchParams(window.location.search);
    if (o && l.has(this.id)) {
      const c = this.getUrlParamText();
      this.text = c;
    } else
      this.text = r;
    this.useUrlParams = o;
  }
  getUrlParamText() {
    var e;
    const t = new URLSearchParams(window.location.search);
    return t.has(this.id) && (e = t.get(this.id)) !== null && e !== void 0 ? e : "";
  }
  updateURLParams() {
    if (this.useUrlParams) {
      const e = new URLSearchParams(window.location.search);
      e.set(this.id, this.text), window.history.replaceState({}, "", e.toString() !== "" ? `${location.pathname}?${e}` : `${location.pathname}`);
    }
  }
  get text() {
    return this.value;
  }
  set text(e) {
    this.value = e;
  }
}
class Z extends W {
  constructor(e, t, n, r, o, a, l = () => {
  }) {
    super(e, t, n, [r, r], l), this.options = o;
    const c = new URLSearchParams(window.location.search), h = a && c.has(this.id) ? this.getUrlParamText() : r;
    this.selected = h, this.useUrlParams = a;
  }
  getUrlParamText() {
    var e;
    const t = new URLSearchParams(window.location.search);
    return t.has(this.id) && (e = t.get(this.id)) !== null && e !== void 0 ? e : "";
  }
  updateURLParams() {
    if (this.useUrlParams) {
      const e = new URLSearchParams(window.location.search);
      e.set(this.id, this.selected), window.history.replaceState({}, "", e.toString() !== "" ? `${location.pathname}?${e}` : `${location.pathname}`);
    }
  }
  addOnChangedListener(e) {
    this.onChange = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this._options = e, this.onChangeEmit(this.selected);
  }
  get selected() {
    return this.value;
  }
  set selected(e) {
    let t = this.options.filter((n) => n.indexOf(e) !== -1);
    t.length ? this.value = t[0] : (t = this.options.filter((n) => n.indexOf(e.split(" ")[0]) !== -1), t.length && (this.value = t[0]));
  }
}
class Ee extends Event {
  constructor(e) {
    super("afkWarningActivate"), this.data = e;
  }
}
class ee extends Event {
  constructor(e) {
    super("afkWarningUpdate"), this.data = e;
  }
}
class we extends Event {
  constructor() {
    super("afkWarningDeactivate");
  }
}
class Me extends Event {
  constructor() {
    super("afkTimedOut");
  }
}
class Pe extends Event {
  constructor(e) {
    super("videoEncoderAvgQP"), this.data = e;
  }
}
class Re extends Event {
  constructor() {
    super("webRtcSdp");
  }
}
class ke extends Event {
  constructor() {
    super("webRtcAutoConnect");
  }
}
class Le extends Event {
  constructor() {
    super("webRtcConnecting");
  }
}
class xe extends Event {
  constructor() {
    super("webRtcConnected");
  }
}
class Ae extends Event {
  constructor() {
    super("webRtcFailed");
  }
}
class De extends Event {
  constructor(e) {
    super("webRtcDisconnected"), this.data = e;
  }
}
class Fe extends Event {
  constructor(e) {
    super("dataChannelOpen"), this.data = e;
  }
}
class Oe extends Event {
  constructor(e) {
    super("dataChannelClose"), this.data = e;
  }
}
class Ie extends Event {
  constructor(e) {
    super("dataChannelError"), this.data = e;
  }
}
class Ue extends Event {
  constructor() {
    super("videoInitialized");
  }
}
class ze extends Event {
  constructor() {
    super("streamLoading");
  }
}
class Ge extends Event {
  constructor() {
    super("streamConnect");
  }
}
class Be extends Event {
  constructor() {
    super("streamDisconnect");
  }
}
class _e extends Event {
  constructor() {
    super("streamReconnect");
  }
}
class He extends Event {
  constructor(e) {
    super("playStreamError"), this.data = e;
  }
}
class We extends Event {
  constructor() {
    super("playStream");
  }
}
class te extends Event {
  constructor(e) {
    super("playStreamRejected"), this.data = e;
  }
}
class Ve extends Event {
  constructor(e) {
    super("loadFreezeFrame"), this.data = e;
  }
}
class Ne extends Event {
  constructor() {
    super("hideFreezeFrame");
  }
}
class $e extends Event {
  constructor(e) {
    super("statsReceived"), this.data = e;
  }
}
class Ke extends Event {
  constructor(e) {
    super("streamerListMessage"), this.data = e;
  }
}
class Qe extends Event {
  constructor(e) {
    super("latencyTestResult"), this.data = e;
  }
}
class qe extends Event {
  constructor(e) {
    super("dataChannelLatencyTestResponse"), this.data = e;
  }
}
class Xe extends Event {
  constructor(e) {
    super("dataChannelLatencyTestResult"), this.data = e;
  }
}
class je extends Event {
  constructor(e) {
    super("initialSettings"), this.data = e;
  }
}
class _ extends Event {
  constructor(e) {
    super("settingsChanged"), this.data = e;
  }
}
class Vt extends Event {
  constructor() {
    super("xrSessionStarted");
  }
}
class Nt extends Event {
  constructor() {
    super("xrSessionEnded");
  }
}
class Je extends Event {
  constructor(e) {
    super("xrFrame"), this.data = e;
  }
}
class Ye extends Event {
  constructor(e) {
    super("playerCount"), this.data = e;
  }
}
class Ze extends EventTarget {
  dispatchEvent(e) {
    return super.dispatchEvent(e);
  }
  addEventListener(e, t) {
    super.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    super.removeEventListener(e, t);
  }
}
class d {
}
d.AutoConnect = "AutoConnect", d.AutoPlayVideo = "AutoPlayVideo", d.AFKDetection = "TimeoutIfIdle", d.BrowserSendOffer = "OfferToReceive", d.HoveringMouseMode = "HoveringMouse", d.ForceMonoAudio = "ForceMonoAudio", d.ForceTURN = "ForceTURN", d.FakeMouseWithTouches = "FakeMouseWithTouches", d.IsQualityController = "ControlsQuality", d.MatchViewportResolution = "MatchViewportRes", d.StartVideoMuted = "StartVideoMuted", d.SuppressBrowserKeys = "SuppressBrowserKeys", d.UseMic = "UseMic", d.KeyboardInput = "KeyboardInput", d.MouseInput = "MouseInput", d.TouchInput = "TouchInput", d.GamepadInput = "GamepadInput", d.XRControllerInput = "XRControllerInput", d.WaitForStreamer = "WaitForStreamer";
const $t = (s) => Object.getOwnPropertyNames(d).some((e) => d[e] === s);
class S {
}
S.AFKTimeoutSecs = "AFKTimeout", S.MinQP = "MinQP", S.MaxQP = "MaxQP", S.WebRTCFPS = "WebRTCFPS", S.WebRTCMinBitrate = "WebRTCMinBitrate", S.WebRTCMaxBitrate = "WebRTCMaxBitrate", S.MaxReconnectAttempts = "MaxReconnectAttempts", S.StreamerAutoJoinInterval = "StreamerAutoJoinInterval";
const Kt = (s) => Object.getOwnPropertyNames(S).some((e) => S[e] === s);
class I {
}
I.SignallingServerUrl = "ss";
const Qt = (s) => Object.getOwnPropertyNames(I).some((e) => I[e] === s);
class C {
}
C.PreferredCodec = "PreferredCodec", C.StreamerId = "StreamerId";
const qt = (s) => Object.getOwnPropertyNames(C).some((e) => C[e] === s);
class Xt {
  constructor(e = {}) {
    this.flags = /* @__PURE__ */ new Map(), this.numericParameters = /* @__PURE__ */ new Map(), this.textParameters = /* @__PURE__ */ new Map(), this.optionParameters = /* @__PURE__ */ new Map();
    const { initialSettings: t, useUrlParams: n } = e;
    this._useUrlParams = !!n, this.populateDefaultSettings(this._useUrlParams), t && this.setSettings(t);
  }
  get useUrlParams() {
    return this._useUrlParams;
  }
  populateDefaultSettings(e) {
    this.textParameters.set(I.SignallingServerUrl, new be(I.SignallingServerUrl, "Signalling url", "Url of the signalling server", (location.protocol === "https:" ? "wss://" : "ws://") + window.location.hostname + (window.location.port === "80" || window.location.port === "" ? "" : `:${window.location.port}`), e)), this.optionParameters.set(C.StreamerId, new Z(C.StreamerId, "Streamer ID", "The ID of the streamer to stream.", "", [], e)), this.optionParameters.set(C.PreferredCodec, new Z(C.PreferredCodec, "Preferred Codec", "The preferred codec to be used during codec negotiation", "H264 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f", function() {
      const t = [];
      if (!RTCRtpReceiver.getCapabilities)
        return t.push("Only available on Chrome"), t;
      const n = /(VP\d|H26\d|AV1).*/;
      return RTCRtpReceiver.getCapabilities("video").codecs.forEach((r) => {
        const o = r.mimeType.split("/")[1] + " " + (r.sdpFmtpLine || "");
        n.exec(o) !== null && t.push(o);
      }), t;
    }(), e)), this.flags.set(d.AutoConnect, new T(d.AutoConnect, "Auto connect to stream", "Whether we should attempt to auto connect to the signalling server or show a click to start prompt.", !1, e)), this.flags.set(d.AutoPlayVideo, new T(d.AutoPlayVideo, "Auto play video", "When video is ready automatically start playing it as opposed to showing a play button.", !0, e)), this.flags.set(d.BrowserSendOffer, new T(d.BrowserSendOffer, "Browser send offer", "Browser will initiate the WebRTC handshake by sending the offer to the streamer", !1, e)), this.flags.set(d.UseMic, new T(d.UseMic, "Use microphone", "Make browser request microphone access and open an input audio track.", !1, e)), this.flags.set(d.StartVideoMuted, new T(d.StartVideoMuted, "Start video muted", "Video will start muted if true.", !1, e)), this.flags.set(d.SuppressBrowserKeys, new T(d.SuppressBrowserKeys, "Suppress browser keys", "Suppress certain browser keys that we use in UE, for example F5 to show shader complexity instead of refresh the page.", !0, e)), this.flags.set(d.IsQualityController, new T(d.IsQualityController, "Is quality controller?", "True if this peer controls stream quality", !0, e)), this.flags.set(d.ForceMonoAudio, new T(d.ForceMonoAudio, "Force mono audio", "Force browser to request mono audio in the SDP", !1, e)), this.flags.set(d.ForceTURN, new T(d.ForceTURN, "Force TURN", "Only generate TURN/Relayed ICE candidates.", !1, e)), this.flags.set(d.AFKDetection, new T(d.AFKDetection, "AFK if idle", "Timeout the experience if user is AFK for a period.", !1, e)), this.flags.set(d.MatchViewportResolution, new T(d.MatchViewportResolution, "Match viewport resolution", "Pixel Streaming will be instructed to dynamically resize the video stream to match the size of the video element.", !1, e)), this.flags.set(d.HoveringMouseMode, new T(d.HoveringMouseMode, "Control Scheme: Locked Mouse", "Either locked mouse, where the pointer is consumed by the video and locked to it, or hovering mouse, where the mouse is not consumed.", !1, e, (t, n) => {
      n.label = `Control Scheme: ${t ? "Hovering" : "Locked"} Mouse`;
    })), this.flags.set(d.FakeMouseWithTouches, new T(d.FakeMouseWithTouches, "Fake mouse with touches", "A single finger touch is converted into a mouse event. This allows a non-touch application to be controlled partially via a touch device.", !1, e)), this.flags.set(d.KeyboardInput, new T(d.KeyboardInput, "Keyboard input", "If enabled, send keyboard events to streamer", !0, e)), this.flags.set(d.MouseInput, new T(d.MouseInput, "Mouse input", "If enabled, send mouse events to streamer", !0, e)), this.flags.set(d.TouchInput, new T(d.TouchInput, "Touch input", "If enabled, send touch events to streamer", !0, e)), this.flags.set(d.GamepadInput, new T(d.GamepadInput, "Gamepad input", "If enabled, send gamepad events to streamer", !0, e)), this.flags.set(d.XRControllerInput, new T(d.XRControllerInput, "XR controller input", "If enabled, send XR controller events to streamer", !0, e)), this.flags.set(d.WaitForStreamer, new T(d.WaitForStreamer, "Wait for streamer", "Will continue trying to connect to the first streamer available.", !0, e)), this.numericParameters.set(S.AFKTimeoutSecs, new A(S.AFKTimeoutSecs, "AFK timeout", "The time (in seconds) it takes for the application to time out if AFK timeout is enabled.", 0, 600, 120, e)), this.numericParameters.set(S.MaxReconnectAttempts, new A(S.MaxReconnectAttempts, "Max Reconnects", "Maximum number of reconnects the application will attempt when a streamer disconnects.", 0, 999, 3, e)), this.numericParameters.set(S.MinQP, new A(S.MinQP, "Min QP", "The lower bound for the quantization parameter (QP) of the encoder. 0 = Best quality, 51 = worst quality.", 0, 51, 0, e)), this.numericParameters.set(S.MaxQP, new A(S.MaxQP, "Max QP", "The upper bound for the quantization parameter (QP) of the encoder. 0 = Best quality, 51 = worst quality.", 0, 51, 51, e)), this.numericParameters.set(S.WebRTCFPS, new A(S.WebRTCFPS, "Max FPS", "The maximum FPS that WebRTC will try to transmit frames at.", 1, 999, 60, e)), this.numericParameters.set(S.WebRTCMinBitrate, new A(S.WebRTCMinBitrate, "Min Bitrate (kbps)", "The minimum bitrate that WebRTC should use.", 0, 5e5, 0, e)), this.numericParameters.set(S.WebRTCMaxBitrate, new A(S.WebRTCMaxBitrate, "Max Bitrate (kbps)", "The maximum bitrate that WebRTC should use.", 0, 5e5, 0, e)), this.numericParameters.set(S.StreamerAutoJoinInterval, new A(S.StreamerAutoJoinInterval, "Streamer Auto Join Interval (ms)", "Delay between retries when waiting for an available streamer.", 500, 9e5, 3e3, e));
  }
  _addOnNumericSettingChangedListener(e, t) {
    this.numericParameters.has(e) && this.numericParameters.get(e).addOnChangedListener(t);
  }
  _addOnOptionSettingChangedListener(e, t) {
    this.optionParameters.has(e) && this.optionParameters.get(e).addOnChangedListener(t);
  }
  getNumericSettingValue(e) {
    if (this.numericParameters.has(e))
      return this.numericParameters.get(e).number;
    throw new Error(`There is no numeric setting with the id of ${e}`);
  }
  getTextSettingValue(e) {
    if (this.textParameters.has(e))
      return this.textParameters.get(e).value;
    throw new Error(`There is no numeric setting with the id of ${e}`);
  }
  setNumericSetting(e, t) {
    if (!this.numericParameters.has(e))
      throw new Error(`There is no numeric setting with the id of ${e}`);
    this.numericParameters.get(e).number = t;
  }
  _addOnSettingChangedListener(e, t) {
    this.flags.has(e) && (this.flags.get(e).onChange = t);
  }
  _addOnTextSettingChangedListener(e, t) {
    this.textParameters.has(e) && (this.textParameters.get(e).onChange = t);
  }
  getSettingOption(e) {
    return this.optionParameters.get(e);
  }
  isFlagEnabled(e) {
    return this.flags.get(e).flag;
  }
  setFlagEnabled(e, t) {
    this.flags.has(e) ? this.flags.get(e).flag = t : i.Warning(i.GetStackTrace(), `Cannot toggle flag called ${e} - it does not exist in the Config.flags map.`);
  }
  setTextSetting(e, t) {
    this.textParameters.has(e) ? this.textParameters.get(e).text = t : i.Warning(i.GetStackTrace(), `Cannot set text setting called ${e} - it does not exist in the Config.textParameters map.`);
  }
  setOptionSettingOptions(e, t) {
    this.optionParameters.has(e) ? this.optionParameters.get(e).options = t : i.Warning(i.GetStackTrace(), `Cannot set text setting called ${e} - it does not exist in the Config.optionParameters map.`);
  }
  setOptionSettingValue(e, t) {
    this.optionParameters.has(e) ? this.optionParameters.get(e).selected = t : i.Warning(i.GetStackTrace(), `Cannot set text setting called ${e} - it does not exist in the Config.enumParameters map.`);
  }
  setFlagLabel(e, t) {
    this.flags.has(e) ? this.flags.get(e).label = t : i.Warning(i.GetStackTrace(), `Cannot set label for flag called ${e} - it does not exist in the Config.flags map.`);
  }
  setSettings(e) {
    for (const t of Object.keys(e))
      $t(t) ? this.setFlagEnabled(t, e[t]) : Kt(t) ? this.setNumericSetting(t, e[t]) : Qt(t) ? this.setTextSetting(t, e[t]) : qt(t) && this.setOptionSettingValue(t, e[t]);
  }
  getSettings() {
    const e = {};
    for (const [t, n] of this.flags.entries())
      e[t] = n.flag;
    for (const [t, n] of this.numericParameters.entries())
      e[t] = n.number;
    for (const [t, n] of this.textParameters.entries())
      e[t] = n.text;
    for (const [t, n] of this.optionParameters.entries())
      e[t] = n.selected;
    return e;
  }
  getFlags() {
    return Array.from(this.flags.values());
  }
  getTextSettings() {
    return Array.from(this.textParameters.values());
  }
  getNumericSettings() {
    return Array.from(this.numericParameters.values());
  }
  getOptionSettings() {
    return Array.from(this.optionParameters.values());
  }
  _registerOnChangeEvents(e) {
    for (const t of this.flags.keys()) {
      const n = this.flags.get(t);
      n && (n.onChangeEmit = (r) => e.dispatchEvent(new _({ id: n.id, type: "flag", value: r, target: n })));
    }
    for (const t of this.numericParameters.keys()) {
      const n = this.numericParameters.get(t);
      n && (n.onChangeEmit = (r) => e.dispatchEvent(new _({ id: n.id, type: "number", value: r, target: n })));
    }
    for (const t of this.textParameters.keys()) {
      const n = this.textParameters.get(t);
      n && (n.onChangeEmit = (r) => e.dispatchEvent(new _({ id: n.id, type: "text", value: r, target: n })));
    }
    for (const t of this.optionParameters.keys()) {
      const n = this.optionParameters.get(t);
      n && (n.onChangeEmit = (r) => e.dispatchEvent(new _({ id: n.id, type: "option", value: r, target: n })));
    }
  }
}
var U;
(function(s) {
  s[s.LockedMouse = 0] = "LockedMouse", s[s.HoveringMouse = 1] = "HoveringMouse";
})(U || (U = {}));
class et {
  constructor(e, t, n) {
    this.closeTimeout = 10, this.active = !1, this.countdownActive = !1, this.warnTimer = void 0, this.countDown = 0, this.countDownTimer = void 0, this.config = e, this.pixelStreaming = t, this.onDismissAfk = n, this.onAFKTimedOutCallback = () => {
      console.log("AFK timed out, did you want to override this callback?");
    };
  }
  onAfkClick() {
    clearInterval(this.countDownTimer), (this.active || this.countdownActive) && (this.startAfkWarningTimer(), this.pixelStreaming.dispatchEvent(new we()));
  }
  startAfkWarningTimer() {
    this.config.getNumericSettingValue(S.AFKTimeoutSecs) > 0 && this.config.isFlagEnabled(d.AFKDetection) ? this.active = !0 : this.active = !1, this.resetAfkWarningTimer();
  }
  stopAfkWarningTimer() {
    this.active = !1, this.countdownActive = !1, clearTimeout(this.warnTimer), clearInterval(this.countDownTimer);
  }
  pauseAfkWarningTimer() {
    this.active = !1;
  }
  resetAfkWarningTimer() {
    this.active && this.config.isFlagEnabled(d.AFKDetection) && (clearTimeout(this.warnTimer), this.warnTimer = setTimeout(() => this.activateAfkEvent(), 1e3 * this.config.getNumericSettingValue(S.AFKTimeoutSecs)));
  }
  activateAfkEvent() {
    this.pauseAfkWarningTimer(), this.pixelStreaming.dispatchEvent(new Ee({ countDown: this.countDown, dismissAfk: this.onDismissAfk })), this.countDown = this.closeTimeout, this.countdownActive = !0, this.pixelStreaming.dispatchEvent(new ee({ countDown: this.countDown })), this.config.isFlagEnabled(d.HoveringMouseMode) || document.exitPointerLock && document.exitPointerLock(), this.countDownTimer = setInterval(() => {
      this.countDown--, this.countDown == 0 ? (this.pixelStreaming.dispatchEvent(new Me()), this.onAFKTimedOutCallback(), i.Log(i.GetStackTrace(), "You have been disconnected due to inactivity"), this.stopAfkWarningTimer()) : this.pixelStreaming.dispatchEvent(new ee({ countDown: this.countDown }));
    }, 1e3);
  }
}
class ce {
  constructor() {
    this.isReceivingFreezeFrame = !1;
  }
  getDataChannelInstance() {
    return this;
  }
  createDataChannel(e, t, n) {
    this.peerConnection = e, this.label = t, this.datachannelOptions = n, n == null && (this.datachannelOptions = {}, this.datachannelOptions.ordered = !0), this.dataChannel = this.peerConnection.createDataChannel(this.label, this.datachannelOptions), this.setupDataChannel();
  }
  setupDataChannel() {
    this.dataChannel.binaryType = "arraybuffer", this.dataChannel.onopen = (e) => this.handleOnOpen(e), this.dataChannel.onclose = (e) => this.handleOnClose(e), this.dataChannel.onmessage = (e) => this.handleOnMessage(e), this.dataChannel.onerror = (e) => this.handleOnError(e);
  }
  handleOnOpen(e) {
    var t;
    i.Log(i.GetStackTrace(), `Data Channel (${this.label}) opened.`, 7), this.onOpen((t = this.dataChannel) === null || t === void 0 ? void 0 : t.label, e);
  }
  handleOnClose(e) {
    var t;
    i.Log(i.GetStackTrace(), `Data Channel (${this.label}) closed.`, 7), this.onClose((t = this.dataChannel) === null || t === void 0 ? void 0 : t.label, e);
  }
  handleOnMessage(e) {
    i.Log(i.GetStackTrace(), `Data Channel (${this.label}) message: ${e}`, 8);
  }
  handleOnError(e) {
    var t;
    i.Log(i.GetStackTrace(), `Data Channel (${this.label}) error: ${e}`, 7), this.onError((t = this.dataChannel) === null || t === void 0 ? void 0 : t.label, e);
  }
  onOpen(e, t) {
  }
  onClose(e, t) {
  }
  onError(e, t) {
  }
}
class tt {
}
class nt {
}
class rt {
}
class ne {
}
class st {
}
class it {
}
class jt {
}
class Jt {
}
class ot {
  constructor() {
    this.inboundVideoStats = new nt(), this.inboundAudioStats = new tt(), this.candidatePair = new st(), this.DataChannelStats = new rt(), this.outBoundVideoStats = new it(), this.sessionStats = new jt(), this.streamStats = new Jt(), this.codecs = /* @__PURE__ */ new Map();
  }
  processStats(e) {
    this.localCandidates = new Array(), this.remoteCandidates = new Array(), e.forEach((t) => {
      switch (t.type) {
        case "candidate-pair":
          this.handleCandidatePair(t);
          break;
        case "certificate":
        case "media-source":
        case "media-playout":
        case "outbound-rtp":
        case "peer-connection":
        case "remote-inbound-rtp":
        case "transport":
          break;
        case "codec":
          this.handleCodec(t);
          break;
        case "data-channel":
          this.handleDataChannel(t);
          break;
        case "inbound-rtp":
          this.handleInBoundRTP(t);
          break;
        case "local-candidate":
          this.handleLocalCandidate(t);
          break;
        case "remote-candidate":
          this.handleRemoteCandidate(t);
          break;
        case "remote-outbound-rtp":
          this.handleRemoteOutBound(t);
          break;
        case "track":
          this.handleTrack(t);
          break;
        case "stream":
          this.handleStream(t);
          break;
        default:
          i.Error(i.GetStackTrace(), "unhandled Stat Type"), i.Log(i.GetStackTrace(), t);
      }
    });
  }
  handleStream(e) {
    this.streamStats = e;
  }
  handleCandidatePair(e) {
    this.candidatePair.bytesReceived = e.bytesReceived, this.candidatePair.bytesSent = e.bytesSent, this.candidatePair.localCandidateId = e.localCandidateId, this.candidatePair.remoteCandidateId = e.remoteCandidateId, this.candidatePair.nominated = e.nominated, this.candidatePair.readable = e.readable, this.candidatePair.selected = e.selected, this.candidatePair.writable = e.writable, this.candidatePair.state = e.state, this.candidatePair.currentRoundTripTime = e.currentRoundTripTime;
  }
  handleDataChannel(e) {
    this.DataChannelStats.bytesReceived = e.bytesReceived, this.DataChannelStats.bytesSent = e.bytesSent, this.DataChannelStats.dataChannelIdentifier = e.dataChannelIdentifier, this.DataChannelStats.id = e.id, this.DataChannelStats.label = e.label, this.DataChannelStats.messagesReceived = e.messagesReceived, this.DataChannelStats.messagesSent = e.messagesSent, this.DataChannelStats.protocol = e.protocol, this.DataChannelStats.state = e.state, this.DataChannelStats.timestamp = e.timestamp;
  }
  handleLocalCandidate(e) {
    const t = new ne();
    t.label = "local-candidate", t.address = e.address, t.port = e.port, t.protocol = e.protocol, t.candidateType = e.candidateType, t.id = e.id, this.localCandidates.push(t);
  }
  handleRemoteCandidate(e) {
    const t = new ne();
    t.label = "local-candidate", t.address = e.address, t.port = e.port, t.protocol = e.protocol, t.id = e.id, t.candidateType = e.candidateType, this.remoteCandidates.push(t);
  }
  handleInBoundRTP(e) {
    switch (e.kind) {
      case "video":
        this.inboundVideoStats = e, this.lastVideoStats != null && (this.inboundVideoStats.bitrate = 8 * (this.inboundVideoStats.bytesReceived - this.lastVideoStats.bytesReceived) / (this.inboundVideoStats.timestamp - this.lastVideoStats.timestamp), this.inboundVideoStats.bitrate = Math.floor(this.inboundVideoStats.bitrate)), this.lastVideoStats = Object.assign({}, this.inboundVideoStats);
        break;
      case "audio":
        this.inboundAudioStats = e, this.lastAudioStats != null && (this.inboundAudioStats.bitrate = 8 * (this.inboundAudioStats.bytesReceived - this.lastAudioStats.bytesReceived) / (this.inboundAudioStats.timestamp - this.lastAudioStats.timestamp), this.inboundAudioStats.bitrate = Math.floor(this.inboundAudioStats.bitrate)), this.lastAudioStats = Object.assign({}, this.inboundAudioStats);
        break;
      default:
        i.Log(i.GetStackTrace(), "Kind is not handled");
    }
  }
  handleRemoteOutBound(e) {
    e.kind === "video" && (this.outBoundVideoStats.bytesSent = e.bytesSent, this.outBoundVideoStats.id = e.id, this.outBoundVideoStats.localId = e.localId, this.outBoundVideoStats.packetsSent = e.packetsSent, this.outBoundVideoStats.remoteTimestamp = e.remoteTimestamp, this.outBoundVideoStats.timestamp = e.timestamp);
  }
  handleTrack(e) {
    e.type !== "track" || e.trackIdentifier !== "video_label" && e.kind !== "video" || (this.inboundVideoStats.framesDropped = e.framesDropped, this.inboundVideoStats.framesReceived = e.framesReceived, this.inboundVideoStats.frameHeight = e.frameHeight, this.inboundVideoStats.frameWidth = e.frameWidth);
  }
  handleCodec(e) {
    const t = e.id, n = `${e.mimeType.replace("video/", "").replace("audio/", "")}${e.sdpFmtpLine ? ` ${e.sdpFmtpLine}` : ""}`;
    this.codecs.set(t, n);
  }
  handleSessionStatistics(e, t, n) {
    const r = Date.now() - e;
    this.sessionStats.runTime = new Date(r).toISOString().substr(11, 8).toString();
    const o = t === null ? "Not sent yet" : t ? "true" : "false";
    this.sessionStats.controlsStreamInput = o, this.sessionStats.videoEncoderAvgQP = n;
  }
  isNumber(e) {
    return typeof e == "number" && isFinite(e);
  }
}
const de = (he = { parseRtpParameters: () => le.parseRtpParameters, splitSections: () => le.splitSections }, X = {}, Q.d(X, he), X);
var he, X;
class at {
  static isVideoTransciever(e) {
    return this.canTransceiverReceiveVideo(e) || this.canTransceiverSendVideo(e);
  }
  static canTransceiverReceiveVideo(e) {
    return !!e && (e.direction === "sendrecv" || e.direction === "recvonly") && e.receiver && e.receiver.track && e.receiver.track.kind === "video";
  }
  static canTransceiverSendVideo(e) {
    return !!e && (e.direction === "sendrecv" || e.direction === "sendonly") && e.sender && e.sender.track && e.sender.track.kind === "video";
  }
  static isAudioTransciever(e) {
    return this.canTransceiverReceiveAudio(e) || this.canTransceiverSendAudio(e);
  }
  static canTransceiverReceiveAudio(e) {
    return !!e && (e.direction === "sendrecv" || e.direction === "recvonly") && e.receiver && e.receiver.track && e.receiver.track.kind === "audio";
  }
  static canTransceiverSendAudio(e) {
    return !!e && (e.direction === "sendrecv" || e.direction === "sendonly") && e.sender && e.sender.track && e.sender.track.kind === "audio";
  }
}
var G, p, j = function(s, e, t, n) {
  return new (t || (t = Promise))(function(r, o) {
    function a(h) {
      try {
        c(n.next(h));
      } catch (g) {
        o(g);
      }
    }
    function l(h) {
      try {
        c(n.throw(h));
      } catch (g) {
        o(g);
      }
    }
    function c(h) {
      var g;
      h.done ? r(h.value) : (g = h.value, g instanceof t ? g : new t(function(E) {
        E(g);
      })).then(a, l);
    }
    c((n = n.apply(s, e || [])).next());
  });
};
class Yt {
  constructor(e, t, n) {
    this.config = t, this.createPeerConnection(e, n);
  }
  createPeerConnection(e, t) {
    this.config.isFlagEnabled(d.ForceTURN) && (e.iceTransportPolicy = "relay", i.Log(i.GetStackTrace(), "Forcing TURN usage by setting ICE Transport Policy in peer connection config.")), this.peerConnection = new RTCPeerConnection(e), this.peerConnection.onsignalingstatechange = (n) => this.handleSignalStateChange(n), this.peerConnection.oniceconnectionstatechange = (n) => this.handleIceConnectionStateChange(n), this.peerConnection.onicegatheringstatechange = (n) => this.handleIceGatheringStateChange(n), this.peerConnection.ontrack = (n) => this.handleOnTrack(n), this.peerConnection.onicecandidate = (n) => this.handleIceCandidate(n), this.peerConnection.ondatachannel = (n) => this.handleDataChannel(n), this.aggregatedStats = new ot(), this.preferredCodec = t, this.updateCodecSelection = !0;
  }
  createOffer(e, t) {
    return j(this, void 0, void 0, function* () {
      i.Log(i.GetStackTrace(), "Create Offer", 6);
      const n = location.hostname === "localhost" || location.hostname === "127.0.0.1", r = location.protocol === "https:";
      let o = t.isFlagEnabled(d.UseMic);
      !o || n || r || (o = !1, i.Error(i.GetStackTrace(), "Microphone access in the browser will not work if you are not on HTTPS or localhost. Disabling mic access."), i.Error(i.GetStackTrace(), "For testing you can enable HTTP microphone access Chrome by visiting chrome://flags/ and enabling 'unsafely-treat-insecure-origin-as-secure'")), this.setupTransceiversAsync(o).finally(() => {
        var a;
        (a = this.peerConnection) === null || a === void 0 || a.createOffer(e).then((l) => {
          var c;
          this.showTextOverlayConnecting(), l.sdp = this.mungeSDP(l.sdp, o), (c = this.peerConnection) === null || c === void 0 || c.setLocalDescription(l), this.onSendWebRTCOffer(l);
        }).catch(() => {
          this.showTextOverlaySetupFailure();
        });
      });
    });
  }
  receiveOffer(e, t) {
    var n;
    return j(this, void 0, void 0, function* () {
      i.Log(i.GetStackTrace(), "Receive Offer", 6), (n = this.peerConnection) === null || n === void 0 || n.setRemoteDescription(e).then(() => {
        const r = location.hostname === "localhost" || location.hostname === "127.0.0.1", o = location.protocol === "https:";
        let a = t.isFlagEnabled(d.UseMic);
        !a || r || o || (a = !1, i.Error(i.GetStackTrace(), "Microphone access in the browser will not work if you are not on HTTPS or localhost. Disabling mic access."), i.Error(i.GetStackTrace(), "For testing you can enable HTTP microphone access Chrome by visiting chrome://flags/ and enabling 'unsafely-treat-insecure-origin-as-secure'")), this.setupTransceiversAsync(a).finally(() => {
          var l;
          (l = this.peerConnection) === null || l === void 0 || l.createAnswer().then((c) => {
            var h;
            return c.sdp = this.mungeSDP(c.sdp, a), (h = this.peerConnection) === null || h === void 0 ? void 0 : h.setLocalDescription(c);
          }).then(() => {
            var c;
            this.onSendWebRTCAnswer((c = this.peerConnection) === null || c === void 0 ? void 0 : c.currentLocalDescription);
          }).catch(() => {
            i.Error(i.GetStackTrace(), "createAnswer() failed");
          });
        });
      }), this.config.setOptionSettingOptions(C.PreferredCodec, this.parseAvailableCodecs(e).filter((r) => this.config.getSettingOption(C.PreferredCodec).options.includes(r)));
    });
  }
  receiveAnswer(e) {
    var t;
    (t = this.peerConnection) === null || t === void 0 || t.setRemoteDescription(e), this.config.setOptionSettingOptions(C.PreferredCodec, this.parseAvailableCodecs(e).filter((n) => this.config.getSettingOption(C.PreferredCodec).options.includes(n)));
  }
  generateStats() {
    var e;
    (e = this.peerConnection) === null || e === void 0 || e.getStats(null).then((t) => {
      this.aggregatedStats.processStats(t), this.onVideoStats(this.aggregatedStats), this.updateCodecSelection && this.config.setOptionSettingValue(C.PreferredCodec, this.aggregatedStats.codecs.get(this.aggregatedStats.inboundVideoStats.codecId));
    });
  }
  close() {
    this.peerConnection && (this.peerConnection.close(), this.peerConnection = null);
  }
  mungeSDP(e, t) {
    let n = e.replace(/(a=fmtp:\d+ .*level-asymmetry-allowed=.*)\r\n/gm, `$1;x-google-start-bitrate=10000;x-google-max-bitrate=100000\r
`), r = "maxaveragebitrate=510000;";
    return t && (r += "sprop-maxcapturerate=48000;"), r += this.config.isFlagEnabled(d.ForceMonoAudio) ? "stereo=0;" : "stereo=1;", r += "useinbandfec=1", n = n.replace("useinbandfec=1", r), n;
  }
  handleOnIce(e) {
    var t;
    i.Log(i.GetStackTrace(), "peerconnection handleOnIce", 6), this.config.isFlagEnabled(d.ForceTURN) && e.candidate.indexOf("relay") < 0 ? i.Info(i.GetStackTrace(), `Dropping candidate because it was not TURN relay. | Type= ${e.type} | Protocol= ${e.protocol} | Address=${e.address} | Port=${e.port} |`, 6) : (t = this.peerConnection) === null || t === void 0 || t.addIceCandidate(e);
  }
  handleSignalStateChange(e) {
    i.Log(i.GetStackTrace(), "signaling state change: " + e, 6);
  }
  handleIceConnectionStateChange(e) {
    i.Log(i.GetStackTrace(), "ice connection state change: " + e, 6), this.onIceConnectionStateChange(e);
  }
  handleIceGatheringStateChange(e) {
    i.Log(i.GetStackTrace(), "ice gathering state change: " + JSON.stringify(e), 6);
  }
  handleOnTrack(e) {
    this.onTrack(e);
  }
  handleIceCandidate(e) {
    this.onPeerIceCandidate(e);
  }
  handleDataChannel(e) {
    this.onDataChannel(e);
  }
  onTrack(e) {
  }
  onIceConnectionStateChange(e) {
  }
  onPeerIceCandidate(e) {
  }
  onDataChannel(e) {
  }
  setupTransceiversAsync(e) {
    var t, n, r, o, a, l, c, h, g;
    return j(this, void 0, void 0, function* () {
      const E = ((t = this.peerConnection) === null || t === void 0 ? void 0 : t.getTransceivers().length) > 0;
      if ((n = this.peerConnection) === null || n === void 0 || n.addTransceiver("video", { direction: "recvonly" }), RTCRtpReceiver.getCapabilities && this.preferredCodec != "") {
        for (const v of (o = (r = this.peerConnection) === null || r === void 0 ? void 0 : r.getTransceivers()) !== null && o !== void 0 ? o : [])
          if (v && v.receiver && v.receiver.track && v.receiver.track.kind === "video" && v.setCodecPreferences) {
            const y = this.preferredCodec.split(" "), M = [{ mimeType: "video/" + y[0], clockRate: 9e4, sdpFmtpLine: y[1] ? y[1] : "" }];
            this.config.getSettingOption(C.PreferredCodec).options.filter((x) => x != this.preferredCodec).forEach((x) => {
              const q = x.split(" ");
              M.push({ mimeType: "video/" + q[0], clockRate: 9e4, sdpFmtpLine: q[1] ? q[1] : "" });
            });
            for (const x of M)
              x.sdpFmtpLine === "" && delete x.sdpFmtpLine;
            v.setCodecPreferences(M);
          }
      }
      if (e) {
        const v = { video: !1, audio: { autoGainControl: !1, channelCount: 1, echoCancellation: !1, latency: 0, noiseSuppression: !1, sampleRate: 48e3, sampleSize: 16, volume: 1 } }, y = yield navigator.mediaDevices.getUserMedia(v);
        if (y)
          if (E) {
            for (const M of (c = (l = this.peerConnection) === null || l === void 0 ? void 0 : l.getTransceivers()) !== null && c !== void 0 ? c : [])
              if (at.canTransceiverReceiveAudio(M))
                for (const x of y.getTracks())
                  x.kind && x.kind == "audio" && (M.sender.replaceTrack(x), M.direction = "sendrecv");
          } else
            for (const M of y.getTracks())
              M.kind && M.kind == "audio" && ((h = this.peerConnection) === null || h === void 0 || h.addTransceiver(M, { direction: "sendrecv" }));
        else
          (g = this.peerConnection) === null || g === void 0 || g.addTransceiver("audio", { direction: "recvonly" });
      } else
        (a = this.peerConnection) === null || a === void 0 || a.addTransceiver("audio", { direction: "recvonly" });
    });
  }
  onVideoStats(e) {
  }
  onSendWebRTCOffer(e) {
  }
  onSendWebRTCAnswer(e) {
  }
  showTextOverlayConnecting() {
  }
  showTextOverlaySetupFailure() {
  }
  parseAvailableCodecs(e) {
    if (!RTCRtpReceiver.getCapabilities)
      return ["Only available on Chrome"];
    const t = [], n = (0, de.splitSections)(e.sdp);
    return n.shift(), n.forEach((r) => {
      const { codecs: o } = (0, de.parseRtpParameters)(r), a = /(VP\d|H26\d|AV1).*/;
      o.forEach((l) => {
        const c = l.name + " " + Object.keys(l.parameters || {}).map((h) => h + "=" + l.parameters[h]).join(";");
        if (a.exec(c) !== null) {
          l.name == "VP9" && (l.parameters = { "profile-id": "0" });
          const h = l.name + " " + Object.keys(l.parameters || {}).map((g) => g + "=" + l.parameters[g]).join(";");
          t.push(h);
        }
      });
    }), t;
  }
}
class lt {
  constructor() {
    this.PixelStreamingSettings = new Zt(), this.EncoderSettings = new ct(), this.WebRTCSettings = new dt();
  }
  ueCompatible() {
    this.WebRTCSettings.MaxFPS != null && (this.WebRTCSettings.FPS = this.WebRTCSettings.MaxFPS);
  }
}
class Zt {
}
class ct {
}
class dt {
}
class ht {
  constructor() {
    this.ReceiptTimeMs = null, this.TransmissionTimeMs = null, this.PreCaptureTimeMs = null, this.PostCaptureTimeMs = null, this.PreEncodeTimeMs = null, this.PostEncodeTimeMs = null, this.EncodeMs = null, this.CaptureToSendMs = null, this.testStartTimeMs = 0, this.browserReceiptTimeMs = 0, this.latencyExcludingDecode = 0, this.testDuration = 0, this.networkLatency = 0, this.browserSendLatency = 0, this.frameDisplayDeltaTimeMs = 0, this.endToEndLatency = 0, this.encodeLatency = 0;
  }
  setFrameDisplayDeltaTime(e) {
    this.frameDisplayDeltaTimeMs == 0 && (this.frameDisplayDeltaTimeMs = Math.round(e));
  }
  processFields() {
    this.EncodeMs != null || this.PreEncodeTimeMs == null && this.PostEncodeTimeMs == null || (i.Log(i.GetStackTrace(), `Setting Encode Ms 
 ${this.PostEncodeTimeMs} 
 ${this.PreEncodeTimeMs}`, 6), this.EncodeMs = this.PostEncodeTimeMs - this.PreEncodeTimeMs), this.CaptureToSendMs != null || this.PreCaptureTimeMs == null && this.PostCaptureTimeMs == null || (i.Log(i.GetStackTrace(), `Setting CaptureToSendMs Ms 
 ${this.PostCaptureTimeMs} 
 ${this.PreCaptureTimeMs}`, 6), this.CaptureToSendMs = this.PostCaptureTimeMs - this.PreCaptureTimeMs);
  }
}
class J {
  static setExtensionFromBytes(e, t) {
    t.receiving || (t.mimetype = "", t.extension = "", t.receiving = !0, t.valid = !1, t.size = 0, t.data = [], t.timestampStart = (/* @__PURE__ */ new Date()).getTime(), i.Log(i.GetStackTrace(), "Received first chunk of file", 6));
    const n = new TextDecoder("utf-16").decode(e.slice(1));
    i.Log(i.GetStackTrace(), n, 6), t.extension = n;
  }
  static setMimeTypeFromBytes(e, t) {
    t.receiving || (t.mimetype = "", t.extension = "", t.receiving = !0, t.valid = !1, t.size = 0, t.data = [], t.timestampStart = (/* @__PURE__ */ new Date()).getTime(), i.Log(i.GetStackTrace(), "Received first chunk of file", 6));
    const n = new TextDecoder("utf-16").decode(e.slice(1));
    i.Log(i.GetStackTrace(), n, 6), t.mimetype = n;
  }
  static setContentsFromBytes(e, t) {
    if (!t.receiving)
      return;
    t.size = Math.ceil(new DataView(e.slice(1, 5).buffer).getInt32(0, !0) / 16379);
    const n = e.slice(5);
    if (t.data.push(n), i.Log(i.GetStackTrace(), `Received file chunk: ${t.data.length}/${t.size}`, 6), t.data.length === t.size) {
      t.receiving = !1, t.valid = !0, i.Log(i.GetStackTrace(), "Received complete file", 6);
      const r = (/* @__PURE__ */ new Date()).getTime() - t.timestampStart, o = Math.round(16 * t.size * 1024 / r);
      i.Log(i.GetStackTrace(), `Average transfer bitrate: ${o}kb/s over ${r / 1e3} seconds`, 6);
      const a = new Blob(t.data, { type: t.mimetype }), l = document.createElement("a");
      l.setAttribute("href", URL.createObjectURL(a)), l.setAttribute("download", `transfer.${t.extension}`), document.body.append(l), l.remove();
    } else
      t.data.length > t.size && (t.receiving = !1, i.Error(i.GetStackTrace(), `Received bigger file than advertised: ${t.data.length}/${t.size}`));
  }
}
class en {
  constructor() {
    this.mimetype = "", this.extension = "", this.receiving = !1, this.size = 0, this.data = [], this.valid = !1;
  }
}
class P {
}
P.mainButton = 0, P.auxiliaryButton = 1, P.secondaryButton = 2, P.fourthButton = 3, P.fifthButton = 4;
class R {
}
R.primaryButton = 1, R.secondaryButton = 2, R.auxiliaryButton = 4, R.fourthButton = 8, R.fifthButton = 16;
class B {
  constructor() {
    this.unregisterCallbacks = [];
  }
  addUnregisterCallback(e) {
    this.unregisterCallbacks.push(e);
  }
  unregisterAll() {
    for (const e of this.unregisterCallbacks)
      e();
    this.unregisterCallbacks = [];
  }
}
class tn {
  constructor(e, t, n) {
    this.touchEventListenerTracker = new B(), this.toStreamerMessagesProvider = e, this.videoElementProvider = t, this.coordinateConverter = n;
    const r = (l) => this.onTouchStart(l), o = (l) => this.onTouchEnd(l), a = (l) => this.onTouchMove(l);
    document.addEventListener("touchstart", r, { passive: !1 }), document.addEventListener("touchend", o, { passive: !1 }), document.addEventListener("touchmove", a, { passive: !1 }), this.touchEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("touchstart", r)), this.touchEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("touchend", o)), this.touchEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("touchmove", a));
  }
  unregisterTouchEvents() {
    this.touchEventListenerTracker.unregisterAll();
  }
  setVideoElementParentClientRect(e) {
    this.videoElementParentClientRect = e;
  }
  onTouchStart(e) {
    if (this.videoElementProvider.isVideoReady()) {
      if (this.fakeTouchFinger == null) {
        const t = e.changedTouches[0];
        this.fakeTouchFinger = new nn(t.identifier, t.clientX - this.videoElementParentClientRect.left, t.clientY - this.videoElementParentClientRect.top);
        const n = this.videoElementProvider.getVideoParentElement(), r = new MouseEvent("mouseenter", t);
        n.dispatchEvent(r);
        const o = this.coordinateConverter.normalizeAndQuantizeUnsigned(this.fakeTouchFinger.x, this.fakeTouchFinger.y);
        this.toStreamerMessagesProvider.toStreamerHandlers.get("MouseDown")([P.mainButton, o.x, o.y]);
      }
      e.preventDefault();
    }
  }
  onTouchEnd(e) {
    if (!this.videoElementProvider.isVideoReady())
      return;
    const t = this.videoElementProvider.getVideoParentElement(), n = this.toStreamerMessagesProvider.toStreamerHandlers;
    for (let r = 0; r < e.changedTouches.length; r++) {
      const o = e.changedTouches[r];
      if (o.identifier === this.fakeTouchFinger.id) {
        const a = o.clientX - this.videoElementParentClientRect.left, l = o.clientY - this.videoElementParentClientRect.top, c = this.coordinateConverter.normalizeAndQuantizeUnsigned(a, l);
        n.get("MouseUp")([P.mainButton, c.x, c.y]);
        const h = new MouseEvent("mouseleave", o);
        t.dispatchEvent(h), this.fakeTouchFinger = null;
        break;
      }
    }
    e.preventDefault();
  }
  onTouchMove(e) {
    if (!this.videoElementProvider.isVideoReady())
      return;
    const t = this.toStreamerMessagesProvider.toStreamerHandlers;
    for (let n = 0; n < e.touches.length; n++) {
      const r = e.touches[n];
      if (r.identifier === this.fakeTouchFinger.id) {
        const o = r.clientX - this.videoElementParentClientRect.left, a = r.clientY - this.videoElementParentClientRect.top, l = this.coordinateConverter.normalizeAndQuantizeUnsigned(o, a), c = this.coordinateConverter.normalizeAndQuantizeSigned(o - this.fakeTouchFinger.x, a - this.fakeTouchFinger.y);
        t.get("MouseMove")([l.x, l.y, c.x, c.y]), this.fakeTouchFinger.x = o, this.fakeTouchFinger.y = a;
        break;
      }
    }
    e.preventDefault();
  }
}
class nn {
  constructor(e, t, n) {
    this.id = e, this.x = t, this.y = n;
  }
}
class k {
}
k.backSpace = 8, k.shift = 16, k.control = 17, k.alt = 18, k.rightShift = 253, k.rightControl = 254, k.rightAlt = 255;
class rn {
  constructor(e, t, n) {
    this.keyboardEventListenerTracker = new B(), this.CodeToKeyCode = { Escape: 27, Digit0: 48, Digit1: 49, Digit2: 50, Digit3: 51, Digit4: 52, Digit5: 53, Digit6: 54, Digit7: 55, Digit8: 56, Digit9: 57, Minus: 173, Equal: 187, Backspace: 8, Tab: 9, KeyQ: 81, KeyW: 87, KeyE: 69, KeyR: 82, KeyT: 84, KeyY: 89, KeyU: 85, KeyI: 73, KeyO: 79, KeyP: 80, BracketLeft: 219, BracketRight: 221, Enter: 13, ControlLeft: 17, KeyA: 65, KeyS: 83, KeyD: 68, KeyF: 70, KeyG: 71, KeyH: 72, KeyJ: 74, KeyK: 75, KeyL: 76, Semicolon: 186, Quote: 222, Backquote: 192, ShiftLeft: 16, Backslash: 220, KeyZ: 90, KeyX: 88, KeyC: 67, KeyV: 86, KeyB: 66, KeyN: 78, KeyM: 77, Comma: 188, Period: 190, Slash: 191, ShiftRight: 253, AltLeft: 18, Space: 32, CapsLock: 20, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, Pause: 19, ScrollLock: 145, NumpadDivide: 111, NumpadMultiply: 106, NumpadSubtract: 109, NumpadAdd: 107, NumpadDecimal: 110, Numpad9: 105, Numpad8: 104, Numpad7: 103, Numpad6: 102, Numpad5: 101, Numpad4: 100, Numpad3: 99, Numpad2: 98, Numpad1: 97, Numpad0: 96, NumLock: 144, ControlRight: 254, AltRight: 255, Home: 36, End: 35, ArrowUp: 38, ArrowLeft: 37, ArrowRight: 39, ArrowDown: 40, PageUp: 33, PageDown: 34, Insert: 45, Delete: 46, ContextMenu: 93 }, this.toStreamerMessagesProvider = e, this.config = t, this.activeKeysProvider = n;
  }
  registerKeyBoardEvents() {
    const e = (r) => this.handleOnKeyDown(r), t = (r) => this.handleOnKeyUp(r), n = (r) => this.handleOnKeyPress(r);
    document.addEventListener("keydown", e), document.addEventListener("keyup", t), document.addEventListener("keypress", n), this.keyboardEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("keydown", e)), this.keyboardEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("keyup", t)), this.keyboardEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("keypress", n));
  }
  unregisterKeyBoardEvents() {
    this.keyboardEventListenerTracker.unregisterAll();
  }
  handleOnKeyDown(e) {
    const t = this.getKeycode(e);
    t && (i.Log(i.GetStackTrace(), `key down ${t}, repeat = ${e.repeat}`, 6), this.toStreamerMessagesProvider.toStreamerHandlers.get("KeyDown")([this.getKeycode(e), e.repeat ? 1 : 0]), this.activeKeysProvider.getActiveKeys().push(t), t === k.backSpace && document.dispatchEvent(new KeyboardEvent("keypress", { charCode: k.backSpace })), this.config.isFlagEnabled(d.SuppressBrowserKeys) && this.isKeyCodeBrowserKey(t) && e.preventDefault());
  }
  handleOnKeyUp(e) {
    const t = this.getKeycode(e);
    t && (i.Log(i.GetStackTrace(), `key up ${t}`, 6), this.toStreamerMessagesProvider.toStreamerHandlers.get("KeyUp")([t]), this.config.isFlagEnabled(d.SuppressBrowserKeys) && this.isKeyCodeBrowserKey(t) && e.preventDefault());
  }
  handleOnKeyPress(e) {
    if (!("charCode" in e))
      return void i.Warning(i.GetStackTrace(), "KeyboardEvent.charCode is deprecated in this browser, cannot send key press.");
    const t = e.charCode;
    i.Log(i.GetStackTrace(), `key press ${t}`, 6), this.toStreamerMessagesProvider.toStreamerHandlers.get("KeyPress")([t]);
  }
  getKeycode(e) {
    if (!("keyCode" in e)) {
      const t = e;
      return t.code in this.CodeToKeyCode ? this.CodeToKeyCode[t.code] : (i.Warning(i.GetStackTrace(), `Keyboard code of ${t.code} is not supported in our mapping, ignoring this key.`), null);
    }
    return e.keyCode === k.shift && e.code === "ShiftRight" ? k.rightShift : e.keyCode === k.control && e.code === "ControlRight" ? k.rightControl : e.keyCode === k.alt && e.code === "AltRight" ? k.rightAlt : e.keyCode;
  }
  isKeyCodeBrowserKey(e) {
    return e >= 112 && e <= 123 || e === 9;
  }
}
class sn {
  constructor(e, t, n) {
    this.x = 0, this.y = 0, this.updateMouseMovePositionEvent = (o) => {
      this.updateMouseMovePosition(o);
    }, this.mouseEventListenerTracker = new B(), this.videoElementProvider = e, this.mouseController = t, this.activeKeysProvider = n;
    const r = this.videoElementProvider.getVideoParentElement();
    this.x = r.getBoundingClientRect().width / 2, this.y = r.getBoundingClientRect().height / 2, this.coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(this.x, this.y);
  }
  unregisterMouseEvents() {
    this.mouseEventListenerTracker.unregisterAll();
  }
  lockStateChange() {
    const e = this.videoElementProvider.getVideoParentElement(), t = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers;
    if (document.pointerLockElement === e || document.mozPointerLockElement === e)
      i.Log(i.GetStackTrace(), "Pointer locked", 6), document.addEventListener("mousemove", this.updateMouseMovePositionEvent, !1), this.mouseEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("mousemove", this.updateMouseMovePositionEvent, !1));
    else {
      i.Log(i.GetStackTrace(), "The pointer lock status is now unlocked", 6), document.removeEventListener("mousemove", this.updateMouseMovePositionEvent, !1);
      let n = this.activeKeysProvider.getActiveKeys();
      const r = new Set(n), o = [];
      r.forEach((a) => {
      }), o.forEach((a) => {
        t.get("KeyUp")([a]);
      }), n = [];
    }
  }
  updateMouseMovePosition(e) {
    if (!this.videoElementProvider.isVideoReady())
      return;
    const t = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers, n = this.videoElementProvider.getVideoParentElement().clientWidth, r = this.videoElementProvider.getVideoParentElement().clientHeight;
    this.x += e.movementX, this.y += e.movementY, this.x > n && (this.x -= n), this.y > r && (this.y -= r), this.x < 0 && (this.x = n + this.x), this.y < 0 && (this.y = r - this.y), this.coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(this.x, this.y);
    const o = this.mouseController.coordinateConverter.normalizeAndQuantizeSigned(e.movementX, e.movementY);
    t.get("MouseMove")([this.coord.x, this.coord.y, o.x, o.y]);
  }
  handleMouseDown(e) {
    this.videoElementProvider.isVideoReady() && this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseDown")([e.button, this.coord.x, this.coord.y]);
  }
  handleMouseUp(e) {
    this.videoElementProvider.isVideoReady() && this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseUp")([e.button, this.coord.x, this.coord.y]);
  }
  handleMouseWheel(e) {
    this.videoElementProvider.isVideoReady() && this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseWheel")([e.wheelDelta, this.coord.x, this.coord.y]);
  }
  handleMouseDouble(e) {
    this.videoElementProvider.isVideoReady() && this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseDouble")([e.button, this.coord.x, this.coord.y]);
  }
  handlePressMouseButtons(e) {
    this.videoElementProvider.isVideoReady() && this.mouseController.pressMouseButtons(e.buttons, this.x, this.y);
  }
  handleReleaseMouseButtons(e) {
    this.videoElementProvider.isVideoReady() && this.mouseController.releaseMouseButtons(e.buttons, this.x, this.y);
  }
}
class on {
  constructor(e) {
    this.mouseController = e;
  }
  unregisterMouseEvents() {
  }
  updateMouseMovePosition(e) {
    if (!this.mouseController.videoElementProvider.isVideoReady())
      return;
    i.Log(i.GetStackTrace(), "MouseMove", 6);
    const t = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(e.offsetX, e.offsetY), n = this.mouseController.coordinateConverter.normalizeAndQuantizeSigned(e.movementX, e.movementY);
    this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseMove")([t.x, t.y, n.x, n.y]), e.preventDefault();
  }
  handleMouseDown(e) {
    if (!this.mouseController.videoElementProvider.isVideoReady())
      return;
    i.Log(i.GetStackTrace(), "onMouse Down", 6);
    const t = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(e.offsetX, e.offsetY);
    this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseDown")([e.button, t.x, t.y]), e.preventDefault();
  }
  handleMouseUp(e) {
    if (!this.mouseController.videoElementProvider.isVideoReady())
      return;
    i.Log(i.GetStackTrace(), "onMouse Up", 6);
    const t = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(e.offsetX, e.offsetY);
    this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseUp")([e.button, t.x, t.y]), e.preventDefault();
  }
  handleContextMenu(e) {
    this.mouseController.videoElementProvider.isVideoReady() && e.preventDefault();
  }
  handleMouseWheel(e) {
    if (!this.mouseController.videoElementProvider.isVideoReady())
      return;
    const t = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(e.offsetX, e.offsetY);
    this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseWheel")([e.wheelDelta, t.x, t.y]), e.preventDefault();
  }
  handleMouseDouble(e) {
    if (!this.mouseController.videoElementProvider.isVideoReady())
      return;
    const t = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(e.offsetX, e.offsetY);
    this.mouseController.toStreamerMessagesProvider.toStreamerHandlers.get("MouseDouble")([e.button, t.x, t.y]);
  }
  handlePressMouseButtons(e) {
    this.mouseController.videoElementProvider.isVideoReady() && (i.Log(i.GetStackTrace(), "onMouse press", 6), this.mouseController.pressMouseButtons(e.buttons, e.offsetX, e.offsetY));
  }
  handleReleaseMouseButtons(e) {
    this.mouseController.videoElementProvider.isVideoReady() && (i.Log(i.GetStackTrace(), "onMouse release", 6), this.mouseController.releaseMouseButtons(e.buttons, e.offsetX, e.offsetY));
  }
}
class an {
  constructor(e, t, n, r) {
    this.mouseEventListenerTracker = new B(), this.toStreamerMessagesProvider = e, this.coordinateConverter = n, this.videoElementProvider = t, this.activeKeysProvider = r, this.registerMouseEnterAndLeaveEvents();
  }
  unregisterMouseEvents() {
    this.mouseEventListenerTracker.unregisterAll();
  }
  registerLockedMouseEvents(e) {
    const t = this.videoElementProvider.getVideoParentElement(), n = new sn(this.videoElementProvider, e, this.activeKeysProvider);
    if (t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock, document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock, t.requestPointerLock) {
      const h = () => {
        t.requestPointerLock();
      };
      t.addEventListener("click", h), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("click", h));
    }
    const r = () => n.lockStateChange();
    document.addEventListener("pointerlockchange", r, !1), document.addEventListener("mozpointerlockchange", r, !1), this.mouseEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("pointerlockchange", r, !1)), this.mouseEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("mozpointerlockchange", r, !1));
    const o = (h) => n.handleMouseDown(h), a = (h) => n.handleMouseUp(h), l = (h) => n.handleMouseWheel(h), c = (h) => n.handleMouseDouble(h);
    t.addEventListener("mousedown", o), t.addEventListener("mouseup", a), t.addEventListener("wheel", l), t.addEventListener("dblclick", c), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("mousedown", o)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("mouseup", a)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("wheel", l)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("dblclick", c)), this.mouseEventListenerTracker.addUnregisterCallback(() => n.unregisterMouseEvents()), this.mouseEventListenerTracker.addUnregisterCallback(() => {
      !document.exitPointerLock || document.pointerLockElement !== t && document.mozPointerLockElement !== t || document.exitPointerLock();
    });
  }
  registerHoveringMouseEvents(e) {
    const t = this.videoElementProvider.getVideoParentElement(), n = new on(e), r = (g) => n.updateMouseMovePosition(g), o = (g) => n.handleMouseDown(g), a = (g) => n.handleMouseUp(g), l = (g) => n.handleContextMenu(g), c = (g) => n.handleMouseWheel(g), h = (g) => n.handleMouseDouble(g);
    t.addEventListener("mousemove", r), t.addEventListener("mousedown", o), t.addEventListener("mouseup", a), t.addEventListener("contextmenu", l), t.addEventListener("wheel", c), t.addEventListener("dblclick", h), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("mousemove", r)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("mousedown", o)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("mouseup", a)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("contextmenu", l)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("wheel", c)), this.mouseEventListenerTracker.addUnregisterCallback(() => t.removeEventListener("dblclick", h)), this.mouseEventListenerTracker.addUnregisterCallback(() => n.unregisterMouseEvents());
  }
  registerMouseEnterAndLeaveEvents() {
    const e = this.videoElementProvider.getVideoParentElement(), t = (r) => {
      this.videoElementProvider.isVideoReady() && (i.Log(i.GetStackTrace(), "Mouse Entered", 6), this.sendMouseEnter(), this.pressMouseButtons(r.buttons, r.x, r.y));
    }, n = (r) => {
      this.videoElementProvider.isVideoReady() && (i.Log(i.GetStackTrace(), "Mouse Left", 6), this.sendMouseLeave(), this.releaseMouseButtons(r.buttons, r.x, r.y));
    };
    e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), this.mouseEventListenerTracker.addUnregisterCallback(() => e.removeEventListener("mouseenter", t)), this.mouseEventListenerTracker.addUnregisterCallback(() => e.removeEventListener("mouseleave", n));
  }
  releaseMouseButtons(e, t, n) {
    const r = this.coordinateConverter.normalizeAndQuantizeUnsigned(t, n);
    e & R.primaryButton && this.sendMouseUp(P.mainButton, r.x, r.y), e & R.secondaryButton && this.sendMouseUp(P.secondaryButton, r.x, r.y), e & R.auxiliaryButton && this.sendMouseUp(P.auxiliaryButton, r.x, r.y), e & R.fourthButton && this.sendMouseUp(P.fourthButton, r.x, r.y), e & R.fifthButton && this.sendMouseUp(P.fifthButton, r.x, r.y);
  }
  pressMouseButtons(e, t, n) {
    if (!this.videoElementProvider.isVideoReady())
      return;
    const r = this.coordinateConverter.normalizeAndQuantizeUnsigned(t, n);
    e & R.primaryButton && this.sendMouseDown(P.mainButton, r.x, r.y), e & R.secondaryButton && this.sendMouseDown(P.secondaryButton, r.x, r.y), e & R.auxiliaryButton && this.sendMouseDown(P.auxiliaryButton, r.x, r.y), e & R.fourthButton && this.sendMouseDown(P.fourthButton, r.x, r.y), e & R.fifthButton && this.sendMouseDown(P.fifthButton, r.x, r.y);
  }
  sendMouseEnter() {
    this.videoElementProvider.isVideoReady() && this.toStreamerMessagesProvider.toStreamerHandlers.get("MouseEnter")();
  }
  sendMouseLeave() {
    this.videoElementProvider.isVideoReady() && this.toStreamerMessagesProvider.toStreamerHandlers.get("MouseLeave")();
  }
  sendMouseDown(e, t, n) {
    this.videoElementProvider.isVideoReady() && (i.Log(i.GetStackTrace(), `mouse button ${e} down at (${t}, ${n})`, 6), this.toStreamerMessagesProvider.toStreamerHandlers.get("MouseDown")([e, t, n]));
  }
  sendMouseUp(e, t, n) {
    if (!this.videoElementProvider.isVideoReady())
      return;
    i.Log(i.GetStackTrace(), `mouse button ${e} up at (${t}, ${n})`, 6);
    const r = this.coordinateConverter.normalizeAndQuantizeUnsigned(t, n);
    this.toStreamerMessagesProvider.toStreamerHandlers.get("MouseUp")([e, r.x, r.y]);
  }
}
class ln {
  constructor(e, t, n) {
    this.fingers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], this.fingerIds = /* @__PURE__ */ new Map(), this.maxByteValue = 255, this.touchEventListenerTracker = new B(), this.toStreamerMessagesProvider = e, this.videoElementProvider = t, this.coordinateConverter = n, this.videoElementParent = t.getVideoElement();
    const r = (c) => this.onTouchStart(c), o = (c) => this.onTouchEnd(c), a = (c) => this.onTouchMove(c);
    this.videoElementParent.addEventListener("touchstart", r), this.videoElementParent.addEventListener("touchend", o), this.videoElementParent.addEventListener("touchmove", a), this.touchEventListenerTracker.addUnregisterCallback(() => this.videoElementParent.removeEventListener("touchstart", r)), this.touchEventListenerTracker.addUnregisterCallback(() => this.videoElementParent.removeEventListener("touchend", o)), this.touchEventListenerTracker.addUnregisterCallback(() => this.videoElementParent.removeEventListener("touchmove", a)), i.Log(i.GetStackTrace(), "Touch Events Registered", 6);
    const l = (c) => {
      c.preventDefault();
    };
    document.addEventListener("touchmove", l), this.touchEventListenerTracker.addUnregisterCallback(() => document.removeEventListener("touchmove", l));
  }
  unregisterTouchEvents() {
    this.touchEventListenerTracker.unregisterAll();
  }
  rememberTouch(e) {
    const t = this.fingers.pop();
    t === void 0 && i.Log(i.GetStackTrace(), "exhausted touch identifiers", 6), this.fingerIds.set(e.identifier, t);
  }
  forgetTouch(e) {
    this.fingers.push(this.fingerIds.get(e.identifier)), this.fingers.sort(function(t, n) {
      return n - t;
    }), this.fingerIds.delete(e.identifier);
  }
  onTouchStart(e) {
    if (this.videoElementProvider.isVideoReady()) {
      for (let t = 0; t < e.changedTouches.length; t++)
        this.rememberTouch(e.changedTouches[t]);
      i.Log(i.GetStackTrace(), "touch start", 6), this.emitTouchData("TouchStart", e.changedTouches), e.preventDefault();
    }
  }
  onTouchEnd(e) {
    if (this.videoElementProvider.isVideoReady()) {
      i.Log(i.GetStackTrace(), "touch end", 6), this.emitTouchData("TouchEnd", e.changedTouches);
      for (let t = 0; t < e.changedTouches.length; t++)
        this.forgetTouch(e.changedTouches[t]);
      e.preventDefault();
    }
  }
  onTouchMove(e) {
    this.videoElementProvider.isVideoReady() && (i.Log(i.GetStackTrace(), "touch move", 6), this.emitTouchData("TouchMove", e.touches), e.preventDefault());
  }
  emitTouchData(e, t) {
    if (!this.videoElementProvider.isVideoReady())
      return;
    const n = this.videoElementProvider.getVideoParentElement().getBoundingClientRect(), r = this.toStreamerMessagesProvider.toStreamerHandlers;
    for (let o = 0; o < t.length; o++) {
      const l = t[o], c = l.clientX - n.left, h = l.clientY - n.top;
      i.Log(i.GetStackTrace(), `F${this.fingerIds.get(l.identifier)}=(${c}, ${h})`, 6);
      const g = this.coordinateConverter.normalizeAndQuantizeUnsigned(c, h);
      switch (e) {
        case "TouchStart":
          r.get("TouchStart")([1, g.x, g.y, this.fingerIds.get(l.identifier), this.maxByteValue * l.force, g.inRange ? 1 : 0]);
          break;
        case "TouchEnd":
          r.get("TouchEnd")([1, g.x, g.y, this.fingerIds.get(l.identifier), this.maxByteValue * l.force, g.inRange ? 1 : 0]);
          break;
        case "TouchMove":
          r.get("TouchMove")([1, g.x, g.y, this.fingerIds.get(l.identifier), this.maxByteValue * l.force, g.inRange ? 1 : 0]);
      }
    }
  }
}
class cn {
  constructor(e) {
    this.gamePadEventListenerTracker = new B(), this.toStreamerMessagesProvider = e, this.requestAnimationFrame = (window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.requestAnimationFrame).bind(window);
    const t = window;
    if ("GamepadEvent" in t) {
      const n = (o) => this.gamePadConnectHandler(o), r = (o) => this.gamePadDisconnectHandler(o);
      window.addEventListener("gamepadconnected", n), window.addEventListener("gamepaddisconnected", r), this.gamePadEventListenerTracker.addUnregisterCallback(() => window.removeEventListener("gamepadconnected", n)), this.gamePadEventListenerTracker.addUnregisterCallback(() => window.removeEventListener("gamepaddisconnected", r));
    } else if ("WebKitGamepadEvent" in t) {
      const n = (o) => this.gamePadConnectHandler(o), r = (o) => this.gamePadDisconnectHandler(o);
      window.addEventListener("webkitgamepadconnected", n), window.addEventListener("webkitgamepaddisconnected", r), this.gamePadEventListenerTracker.addUnregisterCallback(() => window.removeEventListener("webkitgamepadconnected", n)), this.gamePadEventListenerTracker.addUnregisterCallback(() => window.removeEventListener("webkitgamepaddisconnected", r));
    }
    if (this.controllers = [], navigator.getGamepads)
      for (const n of navigator.getGamepads())
        n && this.gamePadConnectHandler(new GamepadEvent("gamepadconnected", { gamepad: n }));
  }
  unregisterGamePadEvents() {
    this.gamePadEventListenerTracker.unregisterAll();
    for (const e of this.controllers)
      e.id !== void 0 && this.onGamepadDisconnected(e.id);
    this.controllers = [], this.onGamepadConnected = () => {
    }, this.onGamepadDisconnected = () => {
    };
  }
  gamePadConnectHandler(e) {
    i.Log(i.GetStackTrace(), "Gamepad connect handler", 6);
    const t = e.gamepad, n = { currentState: t, prevState: t, id: void 0 };
    this.controllers.push(n), this.controllers[t.index].currentState = t, this.controllers[t.index].prevState = t, i.Log(i.GetStackTrace(), "gamepad: " + t.id + " connected", 6), window.requestAnimationFrame(() => this.updateStatus()), this.onGamepadConnected();
  }
  gamePadDisconnectHandler(e) {
    i.Log(i.GetStackTrace(), "Gamepad disconnect handler", 6), i.Log(i.GetStackTrace(), "gamepad: " + e.gamepad.id + " disconnected", 6);
    const t = this.controllers[e.gamepad.index];
    delete this.controllers[e.gamepad.index], this.controllers = this.controllers.filter((n) => n !== void 0), this.onGamepadDisconnected(t.id);
  }
  scanGamePads() {
    const e = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [];
    for (let t = 0; t < e.length; t++)
      e[t] && e[t].index in this.controllers && (this.controllers[e[t].index].currentState = e[t]);
  }
  updateStatus() {
    this.scanGamePads();
    const e = this.toStreamerMessagesProvider.toStreamerHandlers;
    for (const t of this.controllers) {
      const n = t.id === void 0 ? this.controllers.indexOf(t) : t.id, r = t.currentState;
      for (let o = 0; o < t.currentState.buttons.length; o++) {
        const a = t.currentState.buttons[o], l = t.prevState.buttons[o];
        a.pressed ? o == G.LeftTrigger ? e.get("GamepadAnalog")([n, 5, a.value]) : o == G.RightTrigger ? e.get("GamepadAnalog")([n, 6, a.value]) : e.get("GamepadButtonPressed")([n, o, l.pressed ? 1 : 0]) : !a.pressed && l.pressed && (o == G.LeftTrigger ? e.get("GamepadAnalog")([n, 5, 0]) : o == G.RightTrigger ? e.get("GamepadAnalog")([n, 6, 0]) : e.get("GamepadButtonReleased")([n, o]));
      }
      for (let o = 0; o < r.axes.length; o += 2) {
        const a = parseFloat(r.axes[o].toFixed(4)), l = -parseFloat(r.axes[o + 1].toFixed(4));
        e.get("GamepadAnalog")([n, o + 1, a]), e.get("GamepadAnalog")([n, o + 2, l]);
      }
      this.controllers[n].prevState = r;
    }
    this.controllers.length > 0 && this.requestAnimationFrame(() => this.updateStatus());
  }
  onGamepadResponseReceived(e) {
    for (const t of this.controllers)
      if (t.id === void 0) {
        t.id = e;
        break;
      }
  }
  onGamepadConnected() {
  }
  onGamepadDisconnected(e) {
  }
}
(function(s) {
  s[s.RightClusterBottomButton = 0] = "RightClusterBottomButton", s[s.RightClusterRightButton = 1] = "RightClusterRightButton", s[s.RightClusterLeftButton = 2] = "RightClusterLeftButton", s[s.RightClusterTopButton = 3] = "RightClusterTopButton", s[s.LeftShoulder = 4] = "LeftShoulder", s[s.RightShoulder = 5] = "RightShoulder", s[s.LeftTrigger = 6] = "LeftTrigger", s[s.RightTrigger = 7] = "RightTrigger", s[s.SelectOrBack = 8] = "SelectOrBack", s[s.StartOrForward = 9] = "StartOrForward", s[s.LeftAnalogPress = 10] = "LeftAnalogPress", s[s.RightAnalogPress = 11] = "RightAnalogPress", s[s.LeftClusterTopButton = 12] = "LeftClusterTopButton", s[s.LeftClusterBottomButton = 13] = "LeftClusterBottomButton", s[s.LeftClusterLeftButton = 14] = "LeftClusterLeftButton", s[s.LeftClusterRightButton = 15] = "LeftClusterRightButton", s[s.CentreButton = 16] = "CentreButton", s[s.LeftStickHorizontal = 0] = "LeftStickHorizontal", s[s.LeftStickVertical = 1] = "LeftStickVertical", s[s.RightStickHorizontal = 2] = "RightStickHorizontal", s[s.RightStickVertical = 3] = "RightStickVertical";
})(G || (G = {}));
class dn {
  constructor(e, t, n) {
    this.activeKeys = new hn(), this.toStreamerMessagesProvider = e, this.videoElementProvider = t, this.coordinateConverter = n;
  }
  registerKeyBoard(e) {
    i.Log(i.GetStackTrace(), "Register Keyboard Events", 7);
    const t = new rn(this.toStreamerMessagesProvider, e, this.activeKeys);
    return t.registerKeyBoardEvents(), t;
  }
  registerMouse(e) {
    i.Log(i.GetStackTrace(), "Register Mouse Events", 7);
    const t = new an(this.toStreamerMessagesProvider, this.videoElementProvider, this.coordinateConverter, this.activeKeys);
    switch (e) {
      case U.LockedMouse:
        t.registerLockedMouseEvents(t);
        break;
      case U.HoveringMouse:
        t.registerHoveringMouseEvents(t);
        break;
      default:
        i.Info(i.GetStackTrace(), "unknown Control Scheme Type Defaulting to Locked Mouse Events"), t.registerLockedMouseEvents(t);
    }
    return t;
  }
  registerTouch(e, t) {
    if (i.Log(i.GetStackTrace(), "Registering Touch", 6), e) {
      const n = new tn(this.toStreamerMessagesProvider, this.videoElementProvider, this.coordinateConverter);
      return n.setVideoElementParentClientRect(t), n;
    }
    return new ln(this.toStreamerMessagesProvider, this.videoElementProvider, this.coordinateConverter);
  }
  registerGamePad() {
    return i.Log(i.GetStackTrace(), "Register Game Pad", 7), new cn(this.toStreamerMessagesProvider);
  }
}
class hn {
  constructor() {
    this.activeKeys = [], this.activeKeys = [];
  }
  getActiveKeys() {
    return this.activeKeys;
  }
}
class un {
  constructor(e, t) {
    this.lastTimeResized = (/* @__PURE__ */ new Date()).getTime(), this.videoElement = document.createElement("video"), this.config = t, this.videoElement.id = "streamingVideo", this.videoElement.disablePictureInPicture = !0, this.videoElement.playsInline = !0, this.videoElement.style.width = "100%", this.videoElement.style.height = "100%", this.videoElement.style.position = "absolute", this.videoElement.style.pointerEvents = "all", e.appendChild(this.videoElement), this.onResizePlayerCallback = () => {
      console.log("Resolution changed, restyling player, did you forget to override this function?");
    }, this.onMatchViewportResolutionCallback = () => {
      console.log("Resolution changed and match viewport resolution is turned on, did you forget to override this function?");
    }, this.videoElement.onclick = () => {
      this.audioElement != null && this.audioElement.paused && this.audioElement.play(), this.videoElement.paused && this.videoElement.play();
    }, this.videoElement.onloadedmetadata = () => {
      this.onVideoInitialized();
    }, window.addEventListener("resize", () => this.resizePlayerStyle(), !0), window.addEventListener("orientationchange", () => this.onOrientationChange());
  }
  setAudioElement(e) {
    this.audioElement = e;
  }
  play() {
    return this.videoElement.muted = this.config.isFlagEnabled(d.StartVideoMuted), this.videoElement.autoplay = this.config.isFlagEnabled(d.AutoPlayVideo), this.videoElement.play();
  }
  isPaused() {
    return this.videoElement.paused;
  }
  isVideoReady() {
    return this.videoElement.readyState !== void 0 && this.videoElement.readyState > 0;
  }
  hasVideoSource() {
    return this.videoElement.srcObject !== void 0 && this.videoElement.srcObject !== null;
  }
  getVideoElement() {
    return this.videoElement;
  }
  getVideoParentElement() {
    return this.videoElement.parentElement;
  }
  setVideoEnabled(e) {
    this.videoElement.srcObject.getTracks().forEach((t) => t.enabled = e);
  }
  onVideoInitialized() {
  }
  onOrientationChange() {
    clearTimeout(this.orientationChangeTimeout), this.orientationChangeTimeout = window.setTimeout(() => {
      this.resizePlayerStyle();
    }, 500);
  }
  resizePlayerStyle() {
    const e = this.getVideoParentElement();
    e && (this.updateVideoStreamSize(), e.classList.contains("fixed-size") || this.resizePlayerStyleToFillParentElement(), this.onResizePlayerCallback());
  }
  resizePlayerStyleToFillParentElement() {
    this.getVideoParentElement().setAttribute("style", "top: 0px; left: 0px; width: 100%; height: 100%; cursor: default;");
  }
  updateVideoStreamSize() {
    if (this.config.isFlagEnabled(d.MatchViewportResolution))
      if ((/* @__PURE__ */ new Date()).getTime() - this.lastTimeResized > 300) {
        const e = this.getVideoParentElement();
        if (!e)
          return;
        this.onMatchViewportResolutionCallback(e.clientWidth, e.clientHeight), this.lastTimeResized = (/* @__PURE__ */ new Date()).getTime();
      } else
        i.Log(i.GetStackTrace(), "Resizing too often - skipping", 6), clearTimeout(this.resizeTimeoutHandle), this.resizeTimeoutHandle = window.setTimeout(() => this.updateVideoStreamSize(), 100);
  }
}
class mn {
  constructor() {
    this.toStreamerHandlers = /* @__PURE__ */ new Map(), this.fromStreamerHandlers = /* @__PURE__ */ new Map(), this.toStreamerMessages = /* @__PURE__ */ new Map(), this.fromStreamerMessages = /* @__PURE__ */ new Map();
  }
  populateDefaultProtocol() {
    this.toStreamerMessages.set("IFrameRequest", { id: 0, structure: [] }), this.toStreamerMessages.set("RequestQualityControl", { id: 1, structure: [] }), this.toStreamerMessages.set("FpsRequest", { id: 2, structure: [] }), this.toStreamerMessages.set("AverageBitrateRequest", { id: 3, structure: [] }), this.toStreamerMessages.set("StartStreaming", { id: 4, structure: [] }), this.toStreamerMessages.set("StopStreaming", { id: 5, structure: [] }), this.toStreamerMessages.set("LatencyTest", { id: 6, structure: ["string"] }), this.toStreamerMessages.set("RequestInitialSettings", { id: 7, structure: [] }), this.toStreamerMessages.set("TestEcho", { id: 8, structure: [] }), this.toStreamerMessages.set("DataChannelLatencyTest", { id: 9, structure: [] }), this.toStreamerMessages.set("UIInteraction", { id: 50, structure: ["string"] }), this.toStreamerMessages.set("Command", { id: 51, structure: ["string"] }), this.toStreamerMessages.set("KeyDown", { id: 60, structure: ["uint8", "uint8"] }), this.toStreamerMessages.set("KeyUp", { id: 61, structure: ["uint8"] }), this.toStreamerMessages.set("KeyPress", { id: 62, structure: ["uint16"] }), this.toStreamerMessages.set("MouseEnter", { id: 70, structure: [] }), this.toStreamerMessages.set("MouseLeave", { id: 71, structure: [] }), this.toStreamerMessages.set("MouseDown", { id: 72, structure: ["uint8", "uint16", "uint16"] }), this.toStreamerMessages.set("MouseUp", { id: 73, structure: ["uint8", "uint16", "uint16"] }), this.toStreamerMessages.set("MouseMove", { id: 74, structure: ["uint16", "uint16", "int16", "int16"] }), this.toStreamerMessages.set("MouseWheel", { id: 75, structure: ["int16", "uint16", "uint16"] }), this.toStreamerMessages.set("MouseDouble", { id: 76, structure: ["uint8", "uint16", "uint16"] }), this.toStreamerMessages.set("TouchStart", { id: 80, structure: ["uint8", "uint16", "uint16", "uint8", "uint8", "uint8"] }), this.toStreamerMessages.set("TouchEnd", { id: 81, structure: ["uint8", "uint16", "uint16", "uint8", "uint8", "uint8"] }), this.toStreamerMessages.set("TouchMove", { id: 82, structure: ["uint8", "uint16", "uint16", "uint8", "uint8", "uint8"] }), this.toStreamerMessages.set("GamepadConnected", { id: 93, structure: [] }), this.toStreamerMessages.set("GamepadButtonPressed", { id: 90, structure: ["uint8", "uint8", "uint8"] }), this.toStreamerMessages.set("GamepadButtonReleased", { id: 91, structure: ["uint8", "uint8", "uint8"] }), this.toStreamerMessages.set("GamepadAnalog", { id: 92, structure: ["uint8", "uint8", "double"] }), this.toStreamerMessages.set("GamepadDisconnected", { id: 94, structure: ["uint8"] }), this.fromStreamerMessages.set(0, "QualityControlOwnership"), this.fromStreamerMessages.set(1, "Response"), this.fromStreamerMessages.set(2, "Command"), this.fromStreamerMessages.set(3, "FreezeFrame"), this.fromStreamerMessages.set(4, "UnfreezeFrame"), this.fromStreamerMessages.set(5, "VideoEncoderAvgQP"), this.fromStreamerMessages.set(6, "LatencyTest"), this.fromStreamerMessages.set(7, "InitialSettings"), this.fromStreamerMessages.set(8, "FileExtension"), this.fromStreamerMessages.set(9, "FileMimeType"), this.fromStreamerMessages.set(10, "FileContents"), this.fromStreamerMessages.set(11, "TestEcho"), this.fromStreamerMessages.set(12, "InputControlOwnership"), this.fromStreamerMessages.set(13, "GamepadResponse"), this.fromStreamerMessages.set(14, "DataChannelLatencyTest"), this.fromStreamerMessages.set(255, "Protocol");
  }
  registerMessageHandler(e, t, n) {
    switch (e) {
      case p.ToStreamer:
        this.toStreamerHandlers.set(t, n);
        break;
      case p.FromStreamer:
        this.fromStreamerHandlers.set(t, n);
        break;
      default:
        i.Log(i.GetStackTrace(), `Unknown message direction ${e}`);
    }
  }
}
(function(s) {
  s[s.ToStreamer = 0] = "ToStreamer", s[s.FromStreamer = 1] = "FromStreamer";
})(p || (p = {}));
class gn {
  constructor() {
    this.responseEventListeners = /* @__PURE__ */ new Map();
  }
  addResponseEventListener(e, t) {
    this.responseEventListeners.set(e, t);
  }
  removeResponseEventListener(e) {
    this.responseEventListeners.delete(e);
  }
  onResponse(e) {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.Response", 6);
    const t = new TextDecoder("utf-16").decode(e.slice(1));
    i.Log(i.GetStackTrace(), t, 6), this.responseEventListeners.forEach((n) => {
      n(t);
    });
  }
}
class pn {
  constructor(e, t) {
    this.dataChannelSender = e, this.toStreamerMessagesMapProvider = t;
  }
  sendMessageToStreamer(e, t) {
    t === void 0 && (t = []);
    const n = this.toStreamerMessagesMapProvider.toStreamerMessages.get(e);
    if (n === void 0)
      return void i.Error(i.GetStackTrace(), `Attempted to send a message to the streamer with message type: ${e}, but the frontend hasn't been configured to send such a message. Check you've added the message type in your cpp`);
    if (n.structure && t && n.structure.length !== t.length)
      return void i.Error(i.GetStackTrace(), `Provided message data doesn't match expected layout. Expected [ ${n.structure.map((c) => {
        switch (c) {
          case "uint8":
          case "uint16":
          case "int16":
          case "float":
          case "double":
            return "number";
          case "string":
            return "string";
        }
      }).toString()} ] but received [ ${t.map((c) => typeof c).toString()} ]`);
    let r = 0;
    const o = new TextEncoder();
    t.forEach((c, h) => {
      switch (n.structure[h]) {
        case "uint8":
          r += 1;
          break;
        case "uint16":
        case "int16":
          r += 2;
          break;
        case "float":
          r += 4;
          break;
        case "double":
          r += 8;
          break;
        case "string":
          r += 2, r += 2 * o.encode(c).length;
      }
    });
    const a = new DataView(new ArrayBuffer(r + 1));
    a.setUint8(0, n.id);
    let l = 1;
    t.forEach((c, h) => {
      switch (n.structure[h]) {
        case "uint8":
          a.setUint8(l, c), l += 1;
          break;
        case "uint16":
          a.setUint16(l, c, !0), l += 2;
          break;
        case "int16":
          a.setInt16(l, c, !0), l += 2;
          break;
        case "float":
          a.setFloat32(l, c, !0), l += 4;
          break;
        case "double":
          a.setFloat64(l, c, !0), l += 8;
          break;
        case "string":
          a.setUint16(l, c.length, !0), l += 2;
          for (let g = 0; g < c.length; g++)
            a.setUint16(l, c.charCodeAt(g), !0), l += 2;
      }
    }), this.dataChannelSender.canSend() ? this.dataChannelSender.sendData(a.buffer) : i.Info(i.GetStackTrace(), `Data channel cannot send yet, skipping sending message: ${e} - ${new Uint8Array(a.buffer)}`);
  }
}
class Sn {
  constructor(e) {
    this.sendMessageController = e;
  }
  SendRequestQualityControl() {
    this.sendMessageController.sendMessageToStreamer("RequestQualityControl");
  }
  SendMaxFpsRequest() {
    this.sendMessageController.sendMessageToStreamer("FpsRequest");
  }
  SendAverageBitrateRequest() {
    this.sendMessageController.sendMessageToStreamer("AverageBitrateRequest");
  }
  SendStartStreaming() {
    this.sendMessageController.sendMessageToStreamer("StartStreaming");
  }
  SendStopStreaming() {
    this.sendMessageController.sendMessageToStreamer("StopStreaming");
  }
  SendRequestInitialSettings() {
    this.sendMessageController.sendMessageToStreamer("RequestInitialSettings");
  }
}
class vn {
  constructor(e) {
    this.dataChannelProvider = e;
  }
  canSend() {
    return this.dataChannelProvider.getDataChannelInstance().dataChannel !== void 0 && this.dataChannelProvider.getDataChannelInstance().dataChannel.readyState == "open";
  }
  sendData(e) {
    const t = this.dataChannelProvider.getDataChannelInstance();
    t.dataChannel.readyState == "open" ? (t.dataChannel.send(e), i.Log(i.GetStackTrace(), `Message Sent: ${new Uint8Array(e)}`, 6), this.resetAfkWarningTimerOnDataSend()) : i.Error(i.GetStackTrace(), `Message Failed: ${new Uint8Array(e)}`);
  }
  resetAfkWarningTimerOnDataSend() {
  }
}
class fn {
  constructor(e) {
    this.videoElementProvider = e, this.normalizeAndQuantizeUnsignedFunc = () => {
      throw new Error("Normalize and quantize unsigned, method not implemented.");
    }, this.normalizeAndQuantizeSignedFunc = () => {
      throw new Error("Normalize and unquantize signed, method not implemented.");
    }, this.denormalizeAndUnquantizeUnsignedFunc = () => {
      throw new Error("Denormalize and unquantize unsigned, method not implemented.");
    };
  }
  normalizeAndQuantizeUnsigned(e, t) {
    return this.normalizeAndQuantizeUnsignedFunc(e, t);
  }
  unquantizeAndDenormalizeUnsigned(e, t) {
    return this.denormalizeAndUnquantizeUnsignedFunc(e, t);
  }
  normalizeAndQuantizeSigned(e, t) {
    return this.normalizeAndQuantizeSignedFunc(e, t);
  }
  setupNormalizeAndQuantize() {
    if (this.videoElementParent = this.videoElementProvider.getVideoParentElement(), this.videoElement = this.videoElementProvider.getVideoElement(), this.videoElementParent && this.videoElement) {
      const e = this.videoElementParent.clientHeight / this.videoElementParent.clientWidth, t = this.videoElement.videoHeight / this.videoElement.videoWidth;
      e > t ? (i.Log(i.GetStackTrace(), "Setup Normalize and Quantize for playerAspectRatio > videoAspectRatio", 6), this.ratio = e / t, this.normalizeAndQuantizeUnsignedFunc = (n, r) => this.normalizeAndQuantizeUnsignedPlayerBigger(n, r), this.normalizeAndQuantizeSignedFunc = (n, r) => this.normalizeAndQuantizeSignedPlayerBigger(n, r), this.denormalizeAndUnquantizeUnsignedFunc = (n, r) => this.denormalizeAndUnquantizeUnsignedPlayerBigger(n, r)) : (i.Log(i.GetStackTrace(), "Setup Normalize and Quantize for playerAspectRatio <= videoAspectRatio", 6), this.ratio = t / e, this.normalizeAndQuantizeUnsignedFunc = (n, r) => this.normalizeAndQuantizeUnsignedPlayerSmaller(n, r), this.normalizeAndQuantizeSignedFunc = (n, r) => this.normalizeAndQuantizeSignedPlayerSmaller(n, r), this.denormalizeAndUnquantizeUnsignedFunc = (n, r) => this.denormalizeAndUnquantizeUnsignedPlayerSmaller(n, r));
    }
  }
  normalizeAndQuantizeUnsignedPlayerBigger(e, t) {
    const n = e / this.videoElementParent.clientWidth, r = this.ratio * (t / this.videoElementParent.clientHeight - 0.5) + 0.5;
    return n < 0 || n > 1 || r < 0 || r > 1 ? new $(!1, 65535, 65535) : new $(!0, 65536 * n, 65536 * r);
  }
  denormalizeAndUnquantizeUnsignedPlayerBigger(e, t) {
    const n = e / 65536, r = (t / 65536 - 0.5) / this.ratio + 0.5;
    return new re(n * this.videoElementParent.clientWidth, r * this.videoElementParent.clientHeight);
  }
  normalizeAndQuantizeSignedPlayerBigger(e, t) {
    const n = e / (0.5 * this.videoElementParent.clientWidth), r = this.ratio * t / (0.5 * this.videoElementParent.clientHeight);
    return new ue(32767 * n, 32767 * r);
  }
  normalizeAndQuantizeUnsignedPlayerSmaller(e, t) {
    const n = this.ratio * (e / this.videoElementParent.clientWidth - 0.5) + 0.5, r = t / this.videoElementParent.clientHeight;
    return n < 0 || n > 1 || r < 0 || r > 1 ? new $(!1, 65535, 65535) : new $(!0, 65536 * n, 65536 * r);
  }
  denormalizeAndUnquantizeUnsignedPlayerSmaller(e, t) {
    const n = (e / 65536 - 0.5) / this.ratio + 0.5, r = t / 65536;
    return new re(n * this.videoElementParent.clientWidth, r * this.videoElementParent.clientHeight);
  }
  normalizeAndQuantizeSignedPlayerSmaller(e, t) {
    const n = this.ratio * e / (0.5 * this.videoElementParent.clientWidth), r = t / (0.5 * this.videoElementParent.clientHeight);
    return new ue(32767 * n, 32767 * r);
  }
}
class $ {
  constructor(e, t, n) {
    this.inRange = e, this.x = t, this.y = n;
  }
}
class re {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
}
class ue {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
}
class ut {
  constructor(e, t) {
    this.shouldShowPlayOverlay = !0, this.autoJoinTimer = void 0, this.config = e, this.pixelStreaming = t, this.responseController = new gn(), this.file = new en(), this.sdpConstraints = { offerToReceiveAudio: !0, offerToReceiveVideo: !0 }, this.afkController = new et(this.config, this.pixelStreaming, this.onAfkTriggered.bind(this)), this.afkController.onAFKTimedOutCallback = () => {
      this.setDisconnectMessageOverride("You have been disconnected due to inactivity"), this.closeSignalingServer();
    }, this.freezeFrameController = new Wt(this.pixelStreaming.videoElementParent), this.videoPlayer = new un(this.pixelStreaming.videoElementParent, this.config), this.videoPlayer.onVideoInitialized = () => this.handleVideoInitialized(), this.videoPlayer.onMatchViewportResolutionCallback = (n, r) => {
      const o = { "Resolution.Width": n, "Resolution.Height": r };
      this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify(o)]);
    }, this.videoPlayer.onResizePlayerCallback = () => {
      this.setUpMouseAndFreezeFrame();
    }, this.streamController = new _t(this.videoPlayer), this.coordinateConverter = new fn(this.videoPlayer), this.sendrecvDataChannelController = new ce(), this.recvDataChannelController = new ce(), this.registerDataChannelEventEmitters(this.sendrecvDataChannelController), this.registerDataChannelEventEmitters(this.recvDataChannelController), this.dataChannelSender = new vn(this.sendrecvDataChannelController), this.dataChannelSender.resetAfkWarningTimerOnDataSend = () => this.afkController.resetAfkWarningTimer(), this.streamMessageController = new mn(), this.webSocketController = new Te(), this.webSocketController.onConfig = (n) => this.handleOnConfigMessage(n), this.webSocketController.onStreamerList = (n) => this.handleStreamerListMessage(n), this.webSocketController.onWebSocketOncloseOverlayMessage = (n) => {
      this.pixelStreaming._onDisconnect(`Websocket disconnect (${n.code}) ${n.reason != "" ? "- " + n.reason : ""}`), this.setVideoEncoderAvgQP(0);
    }, this.webSocketController.onPlayerCount = (n) => {
      this.pixelStreaming._onPlayerCount(n.count);
    }, this.webSocketController.onOpen.addEventListener("open", () => {
      this.config.isFlagEnabled(d.BrowserSendOffer) || this.webSocketController.requestStreamerList();
    }), this.webSocketController.onClose.addEventListener("close", (n) => {
      this.afkController.stopAfkWarningTimer(), this.statsTimerHandle && this.statsTimerHandle !== void 0 && window.clearInterval(this.statsTimerHandle), this.setTouchInputEnabled(!1), this.setMouseInputEnabled(!1), this.setKeyboardInputEnabled(!1), this.setGamePadInputEnabled(!1), this.shouldReconnect && n.detail.code != 1001 && this.config.getNumericSettingValue(S.MaxReconnectAttempts) > 0 && (this.isReconnecting = !0, this.reconnectAttempt++, this.restartStreamAutomatically());
    }), this.sendMessageController = new pn(this.dataChannelSender, this.streamMessageController), this.toStreamerMessagesController = new Sn(this.sendMessageController), this.registerMessageHandlers(), this.streamMessageController.populateDefaultProtocol(), this.inputClassesFactory = new dn(this.streamMessageController, this.videoPlayer, this.coordinateConverter), this.isUsingSFU = !1, this.isQualityController = !1, this.preferredCodec = "", this.shouldReconnect = !0, this.isReconnecting = !1, this.reconnectAttempt = 0, this.config._addOnOptionSettingChangedListener(C.StreamerId, (n) => {
      n !== "" && (this.peerConnectionController.peerConnection.close(), this.peerConnectionController.createPeerConnection(this.peerConfig, this.preferredCodec), this.subscribedStream = n, this.webSocketController.sendSubscribe(n));
    }), this.setVideoEncoderAvgQP(-1), this.signallingUrlBuilder = () => {
      let n = this.config.getTextSettingValue(I.SignallingServerUrl);
      return this.config.isFlagEnabled(d.BrowserSendOffer) && (n += "?" + d.BrowserSendOffer + "=true"), n;
    };
  }
  requestUnquantizedAndDenormalizeUnsigned(e, t) {
    return this.coordinateConverter.unquantizeAndDenormalizeUnsigned(e, t);
  }
  handleOnMessage(e) {
    const t = new Uint8Array(e.data);
    i.Log(i.GetStackTrace(), "Message incoming:" + t, 6);
    const n = this.streamMessageController.fromStreamerMessages.get(t[0]);
    this.streamMessageController.fromStreamerHandlers.get(n)(e.data);
  }
  registerMessageHandlers() {
    this.streamMessageController.registerMessageHandler(p.FromStreamer, "QualityControlOwnership", (e) => this.onQualityControlOwnership(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "Response", (e) => this.responseController.onResponse(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "Command", (e) => {
      this.onCommand(e);
    }), this.streamMessageController.registerMessageHandler(p.FromStreamer, "FreezeFrame", (e) => this.onFreezeFrameMessage(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "UnfreezeFrame", () => this.invalidateFreezeFrameAndEnableVideo()), this.streamMessageController.registerMessageHandler(p.FromStreamer, "VideoEncoderAvgQP", (e) => this.handleVideoEncoderAvgQP(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "LatencyTest", (e) => this.handleLatencyTestResult(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "DataChannelLatencyTest", (e) => this.handleDataChannelLatencyTestResponse(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "InitialSettings", (e) => this.handleInitialSettings(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "FileExtension", (e) => this.onFileExtension(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "FileMimeType", (e) => this.onFileMimeType(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "FileContents", (e) => this.onFileContents(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "TestEcho", () => {
    }), this.streamMessageController.registerMessageHandler(p.FromStreamer, "InputControlOwnership", (e) => this.onInputControlOwnership(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "GamepadResponse", (e) => this.onGamepadResponse(e)), this.streamMessageController.registerMessageHandler(p.FromStreamer, "Protocol", (e) => this.onProtocolMessage(e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "IFrameRequest", () => this.sendMessageController.sendMessageToStreamer("IFrameRequest")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "RequestQualityControl", () => this.sendMessageController.sendMessageToStreamer("RequestQualityControl")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "FpsRequest", () => this.sendMessageController.sendMessageToStreamer("FpsRequest")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "AverageBitrateRequest", () => this.sendMessageController.sendMessageToStreamer("AverageBitrateRequest")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "StartStreaming", () => this.sendMessageController.sendMessageToStreamer("StartStreaming")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "StopStreaming", () => this.sendMessageController.sendMessageToStreamer("StopStreaming")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "LatencyTest", (e) => this.sendMessageController.sendMessageToStreamer("LatencyTest", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "RequestInitialSettings", () => this.sendMessageController.sendMessageToStreamer("RequestInitialSettings")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "TestEcho", () => {
    }), this.streamMessageController.registerMessageHandler(p.ToStreamer, "UIInteraction", (e) => this.sendMessageController.sendMessageToStreamer("UIInteraction", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "Command", (e) => this.sendMessageController.sendMessageToStreamer("Command", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "TextboxEntry", (e) => this.sendMessageController.sendMessageToStreamer("TextboxEntry", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "KeyDown", (e) => this.sendMessageController.sendMessageToStreamer("KeyDown", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "KeyUp", (e) => this.sendMessageController.sendMessageToStreamer("KeyUp", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "KeyPress", (e) => this.sendMessageController.sendMessageToStreamer("KeyPress", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "MouseEnter", (e) => this.sendMessageController.sendMessageToStreamer("MouseEnter", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "MouseLeave", (e) => this.sendMessageController.sendMessageToStreamer("MouseLeave", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "MouseDown", (e) => this.sendMessageController.sendMessageToStreamer("MouseDown", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "MouseUp", (e) => this.sendMessageController.sendMessageToStreamer("MouseUp", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "MouseMove", (e) => this.sendMessageController.sendMessageToStreamer("MouseMove", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "MouseWheel", (e) => this.sendMessageController.sendMessageToStreamer("MouseWheel", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "MouseDouble", (e) => this.sendMessageController.sendMessageToStreamer("MouseDouble", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "TouchStart", (e) => this.sendMessageController.sendMessageToStreamer("TouchStart", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "TouchEnd", (e) => this.sendMessageController.sendMessageToStreamer("TouchEnd", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "TouchMove", (e) => this.sendMessageController.sendMessageToStreamer("TouchMove", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "GamepadConnected", () => this.sendMessageController.sendMessageToStreamer("GamepadConnected")), this.streamMessageController.registerMessageHandler(p.ToStreamer, "GamepadButtonPressed", (e) => this.sendMessageController.sendMessageToStreamer("GamepadButtonPressed", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "GamepadButtonReleased", (e) => this.sendMessageController.sendMessageToStreamer("GamepadButtonReleased", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "GamepadAnalog", (e) => this.sendMessageController.sendMessageToStreamer("GamepadAnalog", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "GamepadDisconnected", (e) => this.sendMessageController.sendMessageToStreamer("GamepadDisconnected", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "XRHMDTransform", (e) => this.sendMessageController.sendMessageToStreamer("XRHMDTransform", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "XRControllerTransform", (e) => this.sendMessageController.sendMessageToStreamer("XRControllerTransform", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "XRSystem", (e) => this.sendMessageController.sendMessageToStreamer("XRSystem", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "XRButtonTouched", (e) => this.sendMessageController.sendMessageToStreamer("XRButtonTouched", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "XRButtonPressed", (e) => this.sendMessageController.sendMessageToStreamer("XRButtonPressed", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "XRButtonReleased", (e) => this.sendMessageController.sendMessageToStreamer("XRButtonReleased", e)), this.streamMessageController.registerMessageHandler(p.ToStreamer, "XRAnalog", (e) => this.sendMessageController.sendMessageToStreamer("XRAnalog", e));
  }
  onCommand(e) {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.Command", 6);
    const t = new TextDecoder("utf-16").decode(e.slice(1));
    i.Log(i.GetStackTrace(), "Data Channel Command: " + t, 6);
    const n = JSON.parse(t);
    n.command === "onScreenKeyboard" && this.pixelStreaming._activateOnScreenKeyboard(n);
  }
  onProtocolMessage(e) {
    try {
      const t = new TextDecoder("utf-16").decode(e.slice(1)), n = JSON.parse(t);
      Object.prototype.hasOwnProperty.call(n, "Direction") || i.Error(i.GetStackTrace(), "Malformed protocol received. Ensure the protocol message contains a direction");
      const r = n.Direction;
      delete n.Direction, i.Log(i.GetStackTrace(), `Received new ${r == p.FromStreamer ? "FromStreamer" : "ToStreamer"} protocol. Updating existing protocol...`), Object.keys(n).forEach((o) => {
        const a = n[o];
        switch (r) {
          case p.ToStreamer:
            if (!Object.prototype.hasOwnProperty.call(a, "id"))
              return void i.Error(i.GetStackTrace(), `ToStreamer->${o} protocol definition was malformed as it didn't contain at least an id

                                           Definition was: ${JSON.stringify(a, null, 2)}`);
            if (o === "UIInteraction" || o === "Command" || o === "LatencyTest")
              return;
            this.streamMessageController.toStreamerHandlers.get(o) ? this.streamMessageController.toStreamerMessages.set(o, a) : i.Error(i.GetStackTrace(), `There was no registered handler for "${o}" - try adding one using registerMessageHandler(MessageDirection.ToStreamer, "${o}", myHandler)`);
            break;
          case p.FromStreamer:
            if (!Object.prototype.hasOwnProperty.call(a, "id"))
              return void i.Error(i.GetStackTrace(), `FromStreamer->${o} protocol definition was malformed as it didn't contain at least an id

                            Definition was: ${JSON.stringify(a, null, 2)}`);
            this.streamMessageController.fromStreamerHandlers.get(o) ? this.streamMessageController.fromStreamerMessages.set(a.id, o) : i.Error(i.GetStackTrace(), `There was no registered handler for "${a}" - try adding one using registerMessageHandler(MessageDirection.FromStreamer, "${o}", myHandler)`);
            break;
          default:
            i.Error(i.GetStackTrace(), `Unknown direction: ${r}`);
        }
      }), this.toStreamerMessagesController.SendRequestInitialSettings(), this.toStreamerMessagesController.SendRequestQualityControl();
    } catch (t) {
      i.Log(i.GetStackTrace(), t);
    }
  }
  onInputControlOwnership(e) {
    const t = new Uint8Array(e);
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.InputControlOwnership", 6);
    const n = new Boolean(t[1]).valueOf();
    i.Log(i.GetStackTrace(), `Received input controller message - will your input control the stream: ${n}`), this.pixelStreaming._onInputControlOwnership(n);
  }
  onGamepadResponse(e) {
    const t = new TextDecoder("utf-16").decode(e.slice(1)), n = JSON.parse(t);
    this.gamePadController.onGamepadResponseReceived(n.controllerId);
  }
  onAfkTriggered() {
    this.afkController.onAfkClick(), this.videoPlayer.isPaused() && this.videoPlayer.hasVideoSource() && this.playStream();
  }
  setAfkEnabled(e) {
    e ? this.onAfkTriggered() : this.afkController.stopAfkWarningTimer();
  }
  restartStreamAutomatically() {
    if (this.webSocketController)
      if (this.webSocketController.webSocket && this.webSocketController.webSocket.readyState !== WebSocket.CLOSED) {
        this.pixelStreaming._showActionOrErrorOnDisconnect = !1, this.setDisconnectMessageOverride("Restarting stream..."), this.closeSignalingServer();
        const e = setTimeout(() => {
          this.pixelStreaming._onWebRtcAutoConnect(), this.connectToSignallingServer(), clearTimeout(e);
        }, 3e3);
      } else
        i.Log(i.GetStackTrace(), "A websocket connection has not been made yet so we will start the stream"), this.pixelStreaming._onWebRtcAutoConnect(), this.connectToSignallingServer();
    else
      i.Log(i.GetStackTrace(), "The Web Socket Controller does not exist so this will not work right now.");
  }
  loadFreezeFrameOrShowPlayOverlay() {
    this.pixelStreaming.dispatchEvent(new Ve({ shouldShowPlayOverlay: this.shouldShowPlayOverlay, isValid: this.freezeFrameController.valid, jpegData: this.freezeFrameController.jpeg })), this.shouldShowPlayOverlay === !0 ? (i.Log(i.GetStackTrace(), "showing play overlay"), this.resizePlayerStyle()) : (i.Log(i.GetStackTrace(), "showing freeze frame"), this.freezeFrameController.showFreezeFrame()), setTimeout(() => {
      this.videoPlayer.setVideoEnabled(!1);
    }, this.freezeFrameController.freezeFrameDelay);
  }
  onFreezeFrameMessage(e) {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.FreezeFrame", 6);
    const t = new Uint8Array(e);
    this.freezeFrameController.processFreezeFrameMessage(t, () => this.loadFreezeFrameOrShowPlayOverlay());
  }
  invalidateFreezeFrameAndEnableVideo() {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.FreezeFrame", 6), setTimeout(() => {
      this.pixelStreaming.dispatchEvent(new Ne()), this.freezeFrameController.hideFreezeFrame();
    }, this.freezeFrameController.freezeFrameDelay), this.videoPlayer.getVideoElement() && this.videoPlayer.setVideoEnabled(!0);
  }
  onFileExtension(e) {
    const t = new Uint8Array(e);
    J.setExtensionFromBytes(t, this.file);
  }
  onFileMimeType(e) {
    const t = new Uint8Array(e);
    J.setMimeTypeFromBytes(t, this.file);
  }
  onFileContents(e) {
    const t = new Uint8Array(e);
    J.setContentsFromBytes(t, this.file);
  }
  playStream() {
    if (!this.videoPlayer.getVideoElement()) {
      const e = "Could not play video stream because the video player was not initialized correctly.";
      return this.pixelStreaming.dispatchEvent(new He({ message: e })), i.Error(i.GetStackTrace(), e), this.setDisconnectMessageOverride("Stream not initialized correctly"), void this.closeSignalingServer();
    }
    if (this.videoPlayer.hasVideoSource()) {
      if (this.setTouchInputEnabled(this.config.isFlagEnabled(d.TouchInput)), this.pixelStreaming.dispatchEvent(new We()), this.streamController.audioElement.srcObject) {
        const e = this.config.isFlagEnabled(d.StartVideoMuted);
        this.streamController.audioElement.muted = e, e ? this.playVideo() : this.streamController.audioElement.play().then(() => {
          this.playVideo();
        }).catch((t) => {
          i.Log(i.GetStackTrace(), t), i.Log(i.GetStackTrace(), "Browser does not support autoplaying video without interaction - to resolve this we are going to show the play button overlay."), this.pixelStreaming.dispatchEvent(new te({ reason: t }));
        });
      } else
        this.playVideo();
      this.shouldShowPlayOverlay = !1, this.freezeFrameController.showFreezeFrame();
    } else
      i.Warning(i.GetStackTrace(), "Cannot play stream, the video element has no srcObject to play.");
  }
  playVideo() {
    this.videoPlayer.play().catch((e) => {
      this.streamController.audioElement.srcObject && this.streamController.audioElement.pause(), i.Log(i.GetStackTrace(), e), i.Log(i.GetStackTrace(), "Browser does not support autoplaying video without interaction - to resolve this we are going to show the play button overlay."), this.pixelStreaming.dispatchEvent(new te({ reason: e }));
    });
  }
  autoPlayVideoOrSetUpPlayOverlay() {
    this.config.isFlagEnabled(d.AutoPlayVideo) && this.playStream(), this.resizePlayerStyle();
  }
  connectToSignallingServer() {
    const e = this.signallingUrlBuilder();
    this.webSocketController.connect(e);
  }
  startSession(e) {
    if (this.peerConfig = e, this.config.isFlagEnabled(d.ForceTURN) && !this.checkTurnServerAvailability(e))
      return i.Info(i.GetStackTrace(), "No turn server was found in the Peer Connection Options. TURN cannot be forced, closing connection. Please use STUN instead"), this.setDisconnectMessageOverride("TURN cannot be forced, closing connection. Please use STUN instead."), void this.closeSignalingServer();
    this.peerConnectionController = new Yt(this.peerConfig, this.config, this.preferredCodec), this.peerConnectionController.onVideoStats = (n) => this.handleVideoStats(n), this.peerConnectionController.onSendWebRTCOffer = (n) => this.handleSendWebRTCOffer(n), this.peerConnectionController.onSendWebRTCAnswer = (n) => this.handleSendWebRTCAnswer(n), this.peerConnectionController.onPeerIceCandidate = (n) => this.handleSendIceCandidate(n), this.peerConnectionController.onDataChannel = (n) => this.handleDataChannel(n), this.peerConnectionController.showTextOverlayConnecting = () => this.pixelStreaming._onWebRtcConnecting(), this.peerConnectionController.showTextOverlaySetupFailure = () => this.pixelStreaming._onWebRtcFailed();
    let t = !1;
    this.peerConnectionController.onIceConnectionStateChange = () => {
      !t && ["connected", "completed"].includes(this.peerConnectionController.peerConnection.iceConnectionState) && (this.pixelStreaming._onWebRtcConnected(), t = !0);
    }, this.peerConnectionController.onTrack = (n) => this.streamController.handleOnTrack(n), this.config.isFlagEnabled(d.BrowserSendOffer) && (this.sendrecvDataChannelController.createDataChannel(this.peerConnectionController.peerConnection, "cirrus", this.datachannelOptions), this.sendrecvDataChannelController.handleOnMessage = (n) => this.handleOnMessage(n), this.peerConnectionController.createOffer(this.sdpConstraints, this.config));
  }
  checkTurnServerAvailability(e) {
    if (!e.iceServers)
      return i.Info(i.GetStackTrace(), "A turn sever was not found"), !1;
    for (const t of e.iceServers)
      for (const n of t.urls)
        if (n.includes("turn"))
          return i.Log(i.GetStackTrace(), `A turn sever was found at ${n}`), !0;
    return i.Info(i.GetStackTrace(), "A turn sever was not found"), !1;
  }
  handleOnConfigMessage(e) {
    this.resizePlayerStyle(), this.startSession(e.peerConnectionOptions), this.webSocketController.onWebRtcAnswer = (t) => this.handleWebRtcAnswer(t), this.webSocketController.onWebRtcOffer = (t) => this.handleWebRtcOffer(t), this.webSocketController.onWebRtcPeerDataChannels = (t) => this.handleWebRtcSFUPeerDatachannels(t), this.webSocketController.onIceCandidate = (t) => this.handleIceCandidate(t);
  }
  handleStreamerListMessage(e) {
    if (i.Log(i.GetStackTrace(), `Got streamer list ${e.ids}`, 6), this.isReconnecting)
      e.ids.includes(this.subscribedStream) ? (this.isReconnecting = !1, this.reconnectAttempt = 0, this.webSocketController.sendSubscribe(this.subscribedStream)) : this.reconnectAttempt < this.config.getNumericSettingValue(S.MaxReconnectAttempts) ? (this.reconnectAttempt++, setTimeout(() => {
        this.webSocketController.requestStreamerList();
      }, 2e3)) : (this.reconnectAttempt = 0, this.isReconnecting = !1, this.shouldReconnect = !1, this.webSocketController.close(), this.config.setOptionSettingValue(C.StreamerId, ""), this.config.setOptionSettingOptions(C.StreamerId, []));
    else {
      const t = [...e.ids];
      t.unshift(""), this.config.setOptionSettingOptions(C.StreamerId, t);
      const n = new URLSearchParams(window.location.search);
      let r = null;
      e.ids.length == 1 ? r = e.ids[0] : n.has(C.StreamerId) && e.ids.includes(n.get(C.StreamerId)) && (r = n.get(C.StreamerId)), r !== null ? this.config.setOptionSettingValue(C.StreamerId, r) : e.ids.length == 0 && this.config.isFlagEnabled(d.WaitForStreamer) && (this.closeSignalingServer(), this.startAutoJoinTimer()), this.pixelStreaming.dispatchEvent(new Ke({ messageStreamerList: e, autoSelectedStreamerId: r }));
    }
  }
  startAutoJoinTimer() {
    clearTimeout(this.autoJoinTimer), this.autoJoinTimer = setTimeout(() => this.tryAutoJoin(), this.config.getNumericSettingValue(S.StreamerAutoJoinInterval));
  }
  tryAutoJoin() {
    this.connectToSignallingServer();
  }
  handleWebRtcAnswer(e) {
    i.Log(i.GetStackTrace(), `Got answer sdp ${e.sdp}`, 6);
    const t = { sdp: e.sdp, type: "answer" };
    this.peerConnectionController.receiveAnswer(t), this.handlePostWebrtcNegotiation();
  }
  handleWebRtcOffer(e) {
    i.Log(i.GetStackTrace(), `Got offer sdp ${e.sdp}`, 6), this.isUsingSFU = !!e.sfu && e.sfu, this.isUsingSFU && (this.peerConnectionController.preferredCodec = "");
    const t = { sdp: e.sdp, type: "offer" };
    this.peerConnectionController.receiveOffer(t, this.config), this.handlePostWebrtcNegotiation();
  }
  handleWebRtcSFUPeerDatachannels(e) {
    const t = { ordered: !0, negotiated: !0, id: e.sendStreamId }, n = e.sendStreamId != e.recvStreamId;
    if (this.sendrecvDataChannelController.createDataChannel(this.peerConnectionController.peerConnection, n ? "send-datachannel" : "datachannel", t), n) {
      const r = { ordered: !0, negotiated: !0, id: e.recvStreamId };
      this.recvDataChannelController.createDataChannel(this.peerConnectionController.peerConnection, "recv-datachannel", r), this.recvDataChannelController.handleOnOpen = () => this.webSocketController.sendSFURecvDataChannelReady(), this.recvDataChannelController.handleOnMessage = (o) => this.handleOnMessage(o);
    } else
      this.sendrecvDataChannelController.handleOnMessage = (r) => this.handleOnMessage(r);
  }
  handlePostWebrtcNegotiation() {
    this.afkController.startAfkWarningTimer(), this.pixelStreaming._onWebRtcSdp(), this.statsTimerHandle && this.statsTimerHandle !== void 0 && window.clearInterval(this.statsTimerHandle), this.statsTimerHandle = window.setInterval(() => this.getStats(), 1e3), this.setMouseInputEnabled(this.config.isFlagEnabled(d.MouseInput)), this.setKeyboardInputEnabled(this.config.isFlagEnabled(d.KeyboardInput)), this.setGamePadInputEnabled(this.config.isFlagEnabled(d.GamepadInput));
  }
  handleIceCandidate(e) {
    i.Log(i.GetStackTrace(), "Web RTC Controller: onWebRtcIce", 6);
    const t = new RTCIceCandidate(e);
    this.peerConnectionController.handleOnIce(t);
  }
  handleSendIceCandidate(e) {
    i.Log(i.GetStackTrace(), "OnIceCandidate", 6), e.candidate && e.candidate.candidate && this.webSocketController.sendIceCandidate(e.candidate);
  }
  handleDataChannel(e) {
    i.Log(i.GetStackTrace(), "Data channel created for us by browser as we are a receiving peer.", 6), this.sendrecvDataChannelController.dataChannel = e.channel, this.sendrecvDataChannelController.setupDataChannel(), this.sendrecvDataChannelController.handleOnMessage = (t) => this.handleOnMessage(t);
  }
  handleSendWebRTCOffer(e) {
    i.Log(i.GetStackTrace(), "Sending the offer to the Server", 6), this.webSocketController.sendWebRtcOffer(e);
  }
  handleSendWebRTCAnswer(e) {
    i.Log(i.GetStackTrace(), "Sending the answer to the Server", 6), this.webSocketController.sendWebRtcAnswer(e), this.isUsingSFU && this.webSocketController.sendWebRtcDatachannelRequest();
  }
  setUpMouseAndFreezeFrame() {
    this.videoElementParentClientRect = this.videoPlayer.getVideoParentElement().getBoundingClientRect(), this.coordinateConverter.setupNormalizeAndQuantize(), this.freezeFrameController.freezeFrame.resize();
  }
  closeSignalingServer() {
    var e;
    this.shouldReconnect = !1, (e = this.webSocketController) === null || e === void 0 || e.close();
  }
  closePeerConnection() {
    var e;
    (e = this.peerConnectionController) === null || e === void 0 || e.close();
  }
  close() {
    this.closeSignalingServer(), this.closePeerConnection();
  }
  getStats() {
    this.peerConnectionController.generateStats();
  }
  sendLatencyTest() {
    this.latencyStartTime = Date.now(), this.streamMessageController.toStreamerHandlers.get("LatencyTest")([JSON.stringify({ StartTime: this.latencyStartTime })]);
  }
  sendDataChannelLatencyTest(e) {
    this.streamMessageController.toStreamerHandlers.get("DataChannelLatencyTest")([JSON.stringify(e)]);
  }
  sendEncoderMinQP(e) {
    i.Log(i.GetStackTrace(), `MinQP=${e}
`, 6), e != null && this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ "Encoder.MinQP": e })]);
  }
  sendEncoderMaxQP(e) {
    i.Log(i.GetStackTrace(), `MaxQP=${e}
`, 6), e != null && this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ "Encoder.MaxQP": e })]);
  }
  sendWebRTCMinBitrate(e) {
    i.Log(i.GetStackTrace(), `WebRTC Min Bitrate=${e}`, 6), e != null && this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ "WebRTC.MinBitrate": e })]);
  }
  sendWebRTCMaxBitrate(e) {
    i.Log(i.GetStackTrace(), `WebRTC Max Bitrate=${e}`, 6), e != null && this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ "WebRTC.MaxBitrate": e })]);
  }
  sendWebRTCFps(e) {
    i.Log(i.GetStackTrace(), `WebRTC FPS=${e}`, 6), e != null && (this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ "WebRTC.Fps": e })]), this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ "WebRTC.MaxFps": e })]));
  }
  sendShowFps() {
    i.Log(i.GetStackTrace(), "----   Sending show stat to UE   ----", 6), this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ "stat.fps": "" })]);
  }
  sendIframeRequest() {
    i.Log(i.GetStackTrace(), "----   Sending Request for an IFrame  ----", 6), this.streamMessageController.toStreamerHandlers.get("IFrameRequest")();
  }
  emitUIInteraction(e) {
    i.Log(i.GetStackTrace(), "----   Sending custom UIInteraction message   ----", 6), this.streamMessageController.toStreamerHandlers.get("UIInteraction")([JSON.stringify(e)]);
  }
  emitCommand(e) {
    i.Log(i.GetStackTrace(), "----   Sending custom Command message   ----", 6), this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify(e)]);
  }
  emitConsoleCommand(e) {
    i.Log(i.GetStackTrace(), "----   Sending custom Command:ConsoleCommand message   ----", 6), this.streamMessageController.toStreamerHandlers.get("Command")([JSON.stringify({ ConsoleCommand: e })]);
  }
  sendRequestQualityControlOwnership() {
    i.Log(i.GetStackTrace(), "----   Sending Request to Control Quality  ----", 6), this.toStreamerMessagesController.SendRequestQualityControl();
  }
  handleLatencyTestResult(e) {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.latencyTest", 6);
    const t = new TextDecoder("utf-16").decode(e.slice(1)), n = new ht();
    Object.assign(n, JSON.parse(t)), n.processFields(), n.testStartTimeMs = this.latencyStartTime, n.browserReceiptTimeMs = Date.now(), n.latencyExcludingDecode = ~~(n.browserReceiptTimeMs - n.testStartTimeMs), n.testDuration = ~~(n.TransmissionTimeMs - n.ReceiptTimeMs), n.networkLatency = ~~(n.latencyExcludingDecode - n.testDuration), n.frameDisplayDeltaTimeMs && n.browserReceiptTimeMs && (n.endToEndLatency = (n.frameDisplayDeltaTimeMs, n.networkLatency, ~~+n.CaptureToSendMs)), this.pixelStreaming._onLatencyTestResult(n);
  }
  handleDataChannelLatencyTestResponse(e) {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.dataChannelLatencyResponse", 6);
    const t = new TextDecoder("utf-16").decode(e.slice(1)), n = JSON.parse(t);
    this.pixelStreaming._onDataChannelLatencyTestResponse(n);
  }
  handleInitialSettings(e) {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.InitialSettings", 6);
    const t = new TextDecoder("utf-16").decode(e.slice(1)), n = JSON.parse(t), r = new lt();
    n.Encoder && (r.EncoderSettings = n.Encoder), n.WebRTC && (r.WebRTCSettings = n.WebRTC), n.PixelStreaming && (r.PixelStreamingSettings = n.PixelStreaming), n.ConfigOptions && n.ConfigOptions.DefaultToHover !== void 0 && this.config.setFlagEnabled(d.HoveringMouseMode, !!n.ConfigOptions.DefaultToHover), r.ueCompatible(), i.Log(i.GetStackTrace(), t, 6), this.pixelStreaming._onInitialSettings(r);
  }
  handleVideoEncoderAvgQP(e) {
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.VideoEncoderAvgQP", 6);
    const t = Number(new TextDecoder("utf-16").decode(e.slice(1)));
    this.setVideoEncoderAvgQP(t);
  }
  handleVideoInitialized() {
    this.pixelStreaming._onVideoInitialized(), this.autoPlayVideoOrSetUpPlayOverlay(), this.resizePlayerStyle(), this.videoPlayer.updateVideoStreamSize();
  }
  onQualityControlOwnership(e) {
    const t = new Uint8Array(e);
    i.Log(i.GetStackTrace(), "DataChannelReceiveMessageType.QualityControlOwnership", 6), this.isQualityController = new Boolean(t[1]).valueOf(), i.Log(i.GetStackTrace(), `Received quality controller message, will control quality: ${this.isQualityController}`), this.pixelStreaming._onQualityControlOwnership(this.isQualityController);
  }
  handleVideoStats(e) {
    this.pixelStreaming._onVideoStats(e);
  }
  resizePlayerStyle() {
    this.videoPlayer.resizePlayerStyle();
  }
  getDisconnectMessageOverride() {
    return this.disconnectMessageOverride;
  }
  setDisconnectMessageOverride(e) {
    this.disconnectMessageOverride = e;
  }
  setPreferredCodec(e) {
    this.preferredCodec = e, this.peerConnectionController && (this.peerConnectionController.preferredCodec = e, this.peerConnectionController.updateCodecSelection = !1);
  }
  setVideoEncoderAvgQP(e) {
    this.videoAvgQp = e, this.pixelStreaming._onVideoEncoderAvgQP(this.videoAvgQp);
  }
  setKeyboardInputEnabled(e) {
    var t;
    (t = this.keyboardController) === null || t === void 0 || t.unregisterKeyBoardEvents(), e && (this.keyboardController = this.inputClassesFactory.registerKeyBoard(this.config));
  }
  setMouseInputEnabled(e) {
    var t;
    if ((t = this.mouseController) === null || t === void 0 || t.unregisterMouseEvents(), e) {
      const n = this.config.isFlagEnabled(d.HoveringMouseMode) ? U.HoveringMouse : U.LockedMouse;
      this.mouseController = this.inputClassesFactory.registerMouse(n);
    }
  }
  setTouchInputEnabled(e) {
    var t;
    (t = this.touchController) === null || t === void 0 || t.unregisterTouchEvents(), e && (this.touchController = this.inputClassesFactory.registerTouch(this.config.isFlagEnabled(d.FakeMouseWithTouches), this.videoElementParentClientRect));
  }
  setGamePadInputEnabled(e) {
    var t;
    (t = this.gamePadController) === null || t === void 0 || t.unregisterGamePadEvents(), e && (this.gamePadController = this.inputClassesFactory.registerGamePad(), this.gamePadController.onGamepadConnected = () => {
      this.streamMessageController.toStreamerHandlers.get("GamepadConnected")();
    }, this.gamePadController.onGamepadDisconnected = (n) => {
      this.streamMessageController.toStreamerHandlers.get("GamepadDisconnected")([n]);
    });
  }
  registerDataChannelEventEmitters(e) {
    e.onOpen = (t, n) => this.pixelStreaming.dispatchEvent(new Fe({ label: t, event: n })), e.onClose = (t, n) => this.pixelStreaming.dispatchEvent(new Oe({ label: t, event: n })), e.onError = (t, n) => this.pixelStreaming.dispatchEvent(new Ie({ label: t, event: n }));
  }
  registerMessageHandler(e, t, n) {
    t === p.FromStreamer && n === void 0 && i.Warning(i.GetStackTrace(), `Unable to register handler for ${e} as no handler was passed`), this.streamMessageController.registerMessageHandler(t, e, (r) => n === void 0 && t === p.ToStreamer ? this.sendMessageController.sendMessageToStreamer(e, r) : n(r));
  }
}
class me {
  static vertexShader() {
    return `
		attribute vec2 a_position;
		attribute vec2 a_texCoord;

		// input
		uniform vec2 u_resolution;
		uniform vec4 u_offset;

		//
		varying vec2 v_texCoord;

		void main() {
		   // convert the rectangle from pixels to 0.0 to 1.0
		   vec2 zeroToOne = a_position / u_resolution;

		   // convert from 0->1 to 0->2
		   vec2 zeroToTwo = zeroToOne * 2.0;

		   // convert from 0->2 to -1->+1 (clipspace)
		   vec2 clipSpace = zeroToTwo - 1.0;

		   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
		   // pass the texCoord to the fragment shader
		   // The GPU will interpolate this value between points.
		   v_texCoord = (a_texCoord * u_offset.xy) + u_offset.zw;
		}
		`;
  }
  static fragmentShader() {
    return `
		precision mediump float;

		// our texture
		uniform sampler2D u_image;

		// the texCoords passed in from the vertex shader.
		varying vec2 v_texCoord;

		void main() {
		   gl_FragColor = texture2D(u_image, v_texCoord);
		}
		`;
  }
}
class ge {
  static deepCopyGamepad(e) {
    return JSON.parse(JSON.stringify({ buttons: e.buttons.map((t) => JSON.parse(JSON.stringify({ pressed: t.pressed, touched: t.touched }))), axes: e.axes }));
  }
}
class Cn {
  constructor(e) {
    this.toStreamerMessagesProvider = e, this.controllers = [];
  }
  updateStatus(e, t, n) {
    if (e.gamepad) {
      const r = t.getPose(e.gripSpace, n);
      if (!r)
        return;
      let o = 0;
      e.profiles.includes("htc-vive") ? o = 1 : e.profiles.includes("oculus-touch") && (o = 2), this.toStreamerMessagesProvider.toStreamerHandlers.get("XRSystem")([o]);
      let a = 2;
      switch (e.handedness) {
        case "left":
          a = 0;
          break;
        case "right":
          a = 1;
      }
      const l = r.transform.matrix, c = [];
      for (let v = 0; v < 16; v++)
        c[v] = new Float32Array([l[v]])[0];
      this.toStreamerMessagesProvider.toStreamerHandlers.get("XRControllerTransform")([c[0], c[4], c[8], c[12], c[1], c[5], c[9], c[13], c[2], c[6], c[10], c[14], c[3], c[7], c[11], c[15], a]), this.controllers[a] === void 0 && (this.controllers[a] = { prevState: void 0, currentState: void 0, id: void 0 }, this.controllers[a].prevState = ge.deepCopyGamepad(e.gamepad)), this.controllers[a].currentState = ge.deepCopyGamepad(e.gamepad);
      const h = this.controllers[a], g = h.currentState, E = h.prevState;
      for (let v = 0; v < g.buttons.length; v++) {
        const y = g.buttons[v], M = E.buttons[v];
        y.pressed ? this.toStreamerMessagesProvider.toStreamerHandlers.get("XRButtonPressed")([a, v, M.pressed ? 1 : 0]) : !y.pressed && M.pressed && this.toStreamerMessagesProvider.toStreamerHandlers.get("XRButtonReleased")([a, v, 0]), y.touched && !y.pressed ? this.toStreamerMessagesProvider.toStreamerHandlers.get("XRButtonPressed")([a, 3, M.touched ? 1 : 0]) : !y.touched && M.touched && this.toStreamerMessagesProvider.toStreamerHandlers.get("XRButtonReleased")([a, 3, 0]);
      }
      for (let v = 0; v < g.axes.length; v++)
        this.toStreamerMessagesProvider.toStreamerHandlers.get("XRAnalog")([a, v, g.axes[v]]);
      this.controllers[a].prevState = g;
    }
  }
}
class mt {
  constructor(e) {
    this.xrSession = null, this.webRtcController = e, this.xrControllers = [], this.xrGamepadController = new Cn(this.webRtcController.streamMessageController), this.onSessionEnded = new EventTarget(), this.onSessionStarted = new EventTarget(), this.onFrame = new EventTarget();
  }
  xrClicked() {
    this.xrSession ? this.xrSession.end() : navigator.xr.requestSession("immersive-vr").then((e) => {
      this.onXrSessionStarted(e);
    });
  }
  onXrSessionEnded() {
    i.Log(i.GetStackTrace(), "XR Session ended"), this.xrSession = null, this.onSessionEnded.dispatchEvent(new Event("xrSessionEnded"));
  }
  onXrSessionStarted(e) {
    i.Log(i.GetStackTrace(), "XR Session started"), this.xrSession = e, this.xrSession.addEventListener("end", () => {
      this.onXrSessionEnded();
    });
    const t = document.createElement("canvas");
    this.gl = t.getContext("webgl2", { xrCompatible: !0 }), this.xrSession.updateRenderState({ baseLayer: new XRWebGLLayer(this.xrSession, this.gl) });
    const n = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(n, me.vertexShader()), this.gl.compileShader(n);
    const r = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(r, me.fragmentShader()), this.gl.compileShader(r);
    const o = this.gl.createProgram();
    this.gl.attachShader(o, n), this.gl.attachShader(o, r), this.gl.linkProgram(o), this.gl.useProgram(o), this.positionLocation = this.gl.getAttribLocation(o, "a_position"), this.texcoordLocation = this.gl.getAttribLocation(o, "a_texCoord"), this.positionBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer), this.gl.enableVertexAttribArray(this.positionLocation);
    const a = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, a), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST), this.texcoordBuffer = this.gl.createBuffer(), this.resolutionLocation = this.gl.getUniformLocation(o, "u_resolution"), this.offsetLocation = this.gl.getUniformLocation(o, "u_offset"), e.requestReferenceSpace("local").then((l) => {
      this.xrRefSpace = l, this.xrSession.requestAnimationFrame((c, h) => this.onXrFrame(c, h));
    }), this.onSessionStarted.dispatchEvent(new Event("xrSessionStarted"));
  }
  onXrFrame(e, t) {
    const n = t.getViewerPose(this.xrRefSpace);
    if (n) {
      const r = n.transform.matrix, o = [];
      for (let l = 0; l < 16; l++)
        o[l] = new Float32Array([r[l]])[0];
      this.webRtcController.streamMessageController.toStreamerHandlers.get("XRHMDTransform")([o[0], o[4], o[8], o[12], o[1], o[5], o[9], o[13], o[2], o[6], o[10], o[14], o[3], o[7], o[11], o[15]]);
      const a = this.xrSession.renderState.baseLayer;
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, a.framebuffer), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.webRtcController.videoPlayer.getVideoElement()), this.render(this.webRtcController.videoPlayer.getVideoElement());
    }
    this.webRtcController.config.isFlagEnabled(d.XRControllerInput) && this.xrSession.inputSources.forEach((r, o, a) => {
      this.xrGamepadController.updateStatus(r, t, this.xrRefSpace);
    }, this), this.xrSession.requestAnimationFrame((r, o) => this.onXrFrame(r, o)), this.onFrame.dispatchEvent(new Je({ time: e, frame: t }));
  }
  render(e) {
    if (!this.gl)
      return;
    const t = this.xrSession.renderState.baseLayer;
    let n, r, o, a, l;
    this.gl.viewport(0, 0, t.framebufferWidth, t.framebufferHeight), this.gl.uniform4f(this.offsetLocation, 1, 1, 0, 0), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, e.videoWidth, 0, 0, e.videoHeight, 0, e.videoHeight, e.videoWidth, 0, e.videoWidth, e.videoHeight]), this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer), n = 2, r = this.gl.FLOAT, o = !1, a = 0, l = 0, this.gl.vertexAttribPointer(this.positionLocation, n, r, o, a, l), this.gl.enableVertexAttribArray(this.texcoordLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer), n = 2, r = this.gl.FLOAT, o = !1, a = 0, l = 0, this.gl.vertexAttribPointer(this.texcoordLocation, n, r, o, a, l), this.gl.uniform2f(this.resolutionLocation, e.videoWidth, e.videoHeight);
    const c = this.gl.TRIANGLES;
    l = 0, this.gl.drawArrays(c, l, 6);
  }
  static isSessionSupported(e) {
    return navigator.xr ? navigator.xr.isSessionSupported(e) : new Promise(() => !1);
  }
}
class yn {
  constructor(e) {
    this.editTextButton = null, this.hiddenInput = null, "ontouchstart" in document.documentElement && this.createOnScreenKeyboardHelpers(e);
  }
  unquantizeAndDenormalizeUnsigned(e, t) {
    return null;
  }
  createOnScreenKeyboardHelpers(e) {
    this.hiddenInput || (this.hiddenInput = document.createElement("input"), this.hiddenInput.id = "hiddenInput", this.hiddenInput.maxLength = 0, e.appendChild(this.hiddenInput)), this.editTextButton || (this.editTextButton = document.createElement("button"), this.editTextButton.id = "editTextButton", this.editTextButton.innerHTML = "edit text", e.appendChild(this.editTextButton), this.editTextButton.classList.add("hiddenState"), this.editTextButton.addEventListener("touchend", (t) => {
      this.hiddenInput.focus(), t.preventDefault();
    }));
  }
  showOnScreenKeyboard(e) {
    if (e.showOnScreenKeyboard) {
      this.editTextButton.classList.remove("hiddenState");
      const t = this.unquantizeAndDenormalizeUnsigned(e.x, e.y);
      this.editTextButton.style.top = t.y.toString() + "px", this.editTextButton.style.left = (t.x - 40).toString() + "px";
    } else
      this.editTextButton.classList.add("hiddenState"), this.hiddenInput.blur();
  }
}
class Tn {
  constructor(e) {
    this.seq = e.Seq, this.playerSentTimestamp = Date.now(), this.requestFillerSize = e.Filler ? e.Filler.length : 0;
  }
  update(e) {
    this.playerReceivedTimestamp = Date.now(), this.streamerReceivedTimestamp = e.ReceivedTimestamp, this.streamerSentTimestamp = e.SentTimestamp, this.responseFillerSize = e.Filler ? e.Filler.length : 0;
  }
}
class bn {
  constructor(e, t) {
    this.sink = e, this.callback = t, this.records = /* @__PURE__ */ new Map(), this.seq = 0;
  }
  start(e) {
    return !this.isRunning() && (this.startTime = Date.now(), this.records.clear(), this.interval = setInterval((() => {
      Date.now() - this.startTime >= e.duration ? this.stop() : this.sendRequest(e.requestSize, e.responseSize);
    }).bind(this), Math.floor(1e3 / e.rps)), !0);
  }
  stop() {
    this.interval && (clearInterval(this.interval), this.interval = void 0, this.callback(this.produceResult()));
  }
  produceResult() {
    const e = new Map(this.records);
    return { records: e, dataChannelRtt: Math.ceil(Array.from(this.records.values()).reduce((t, n) => t + (n.playerReceivedTimestamp - n.playerSentTimestamp), 0) / this.records.size), playerToStreamerTime: Math.ceil(Array.from(this.records.values()).reduce((t, n) => t + (n.streamerReceivedTimestamp - n.playerSentTimestamp), 0) / this.records.size), streamerToPlayerTime: Math.ceil(Array.from(this.records.values()).reduce((t, n) => t + (n.playerReceivedTimestamp - n.streamerSentTimestamp), 0) / this.records.size), exportLatencyAsCSV: () => {
      let t = `Timestamp;RTT;PlayerToStreamer;StreamerToPlayer;
`;
      return e.forEach((n) => {
        t += n.playerSentTimestamp + ";", t += n.playerReceivedTimestamp - n.playerSentTimestamp + ";", t += n.streamerReceivedTimestamp - n.playerSentTimestamp + ";", t += n.playerReceivedTimestamp - n.streamerSentTimestamp + ";", t += `
`;
      }), t;
    } };
  }
  isRunning() {
    return !!this.interval;
  }
  receive(e) {
    if (!this.isRunning())
      return;
    if (!e)
      return void i.Error(i.GetStackTrace(), "Undefined response from server");
    let t = this.records.get(e.Seq);
    t && t.update(e);
  }
  sendRequest(e, t) {
    let n = this.createRequest(e, t), r = new Tn(n);
    this.records.set(r.seq, r), this.sink(n);
  }
  createRequest(e, t) {
    return { Seq: this.seq++, FillResponseSize: t, Filler: e ? "A".repeat(e) : "" };
  }
}
class En {
  constructor(e, t) {
    this._showActionOrErrorOnDisconnect = !0, this.allowConsoleCommands = !1, this.config = e, t != null && t.videoElementParent && (this._videoElementParent = t.videoElementParent), this._eventEmitter = new Ze(), this.configureSettings(), this.setWebRtcPlayerController(new ut(this.config, this)), this.onScreenKeyboardHelper = new yn(this.videoElementParent), this.onScreenKeyboardHelper.unquantizeAndDenormalizeUnsigned = (n, r) => this._webRtcController.requestUnquantizedAndDenormalizeUnsigned(n, r), this._activateOnScreenKeyboard = (n) => this.onScreenKeyboardHelper.showOnScreenKeyboard(n), this._webXrController = new mt(this._webRtcController);
  }
  get videoElementParent() {
    return this._videoElementParent || (this._videoElementParent = document.createElement("div"), this._videoElementParent.id = "videoElementParent"), this._videoElementParent;
  }
  configureSettings() {
    this.config._addOnSettingChangedListener(d.IsQualityController, (e) => {
      e !== !0 || this._webRtcController.isQualityController || this._webRtcController.sendRequestQualityControlOwnership();
    }), this.config._addOnSettingChangedListener(d.AFKDetection, (e) => {
      this._webRtcController.setAfkEnabled(e);
    }), this.config._addOnSettingChangedListener(d.MatchViewportResolution, () => {
      this._webRtcController.videoPlayer.updateVideoStreamSize();
    }), this.config._addOnSettingChangedListener(d.HoveringMouseMode, (e) => {
      this.config.setFlagLabel(d.HoveringMouseMode, `Control Scheme: ${e ? "Hovering" : "Locked"} Mouse`), this._webRtcController.setMouseInputEnabled(this.config.isFlagEnabled(d.MouseInput));
    }), this.config._addOnSettingChangedListener(d.KeyboardInput, (e) => {
      this._webRtcController.setKeyboardInputEnabled(e);
    }), this.config._addOnSettingChangedListener(d.MouseInput, (e) => {
      this._webRtcController.setMouseInputEnabled(e);
    }), this.config._addOnSettingChangedListener(d.TouchInput, (e) => {
      this._webRtcController.setTouchInputEnabled(e);
    }), this.config._addOnSettingChangedListener(d.GamepadInput, (e) => {
      this._webRtcController.setGamePadInputEnabled(e);
    }), this.config._addOnNumericSettingChangedListener(S.MinQP, (e) => {
      i.Log(i.GetStackTrace(), "--------  Sending MinQP  --------", 7), this._webRtcController.sendEncoderMinQP(e), i.Log(i.GetStackTrace(), "-------------------------------------------", 7);
    }), this.config._addOnNumericSettingChangedListener(S.MaxQP, (e) => {
      i.Log(i.GetStackTrace(), "--------  Sending encoder settings  --------", 7), this._webRtcController.sendEncoderMaxQP(e), i.Log(i.GetStackTrace(), "-------------------------------------------", 7);
    }), this.config._addOnNumericSettingChangedListener(S.WebRTCMinBitrate, (e) => {
      i.Log(i.GetStackTrace(), "--------  Sending web rtc settings  --------", 7), this._webRtcController.sendWebRTCMinBitrate(1e3 * e), i.Log(i.GetStackTrace(), "-------------------------------------------", 7);
    }), this.config._addOnNumericSettingChangedListener(S.WebRTCMaxBitrate, (e) => {
      i.Log(i.GetStackTrace(), "--------  Sending web rtc settings  --------", 7), this._webRtcController.sendWebRTCMaxBitrate(1e3 * e), i.Log(i.GetStackTrace(), "-------------------------------------------", 7);
    }), this.config._addOnNumericSettingChangedListener(S.WebRTCFPS, (e) => {
      i.Log(i.GetStackTrace(), "--------  Sending web rtc settings  --------", 7), this._webRtcController.sendWebRTCFps(e), i.Log(i.GetStackTrace(), "-------------------------------------------", 7);
    }), this.config._addOnOptionSettingChangedListener(C.PreferredCodec, (e) => {
      this._webRtcController && this._webRtcController.setPreferredCodec(e);
    }), this.config._registerOnChangeEvents(this._eventEmitter);
  }
  _activateOnScreenKeyboard(e) {
    throw new Error("Method not implemented.");
  }
  _onInputControlOwnership(e) {
    this._inputController = e;
  }
  setWebRtcPlayerController(e) {
    this._webRtcController = e, this._webRtcController.setPreferredCodec(this.config.getSettingOption(C.PreferredCodec).selected), this._webRtcController.resizePlayerStyle(), this.checkForAutoConnect();
  }
  connect() {
    this._eventEmitter.dispatchEvent(new Ge()), this._webRtcController.connectToSignallingServer();
  }
  reconnect() {
    this._eventEmitter.dispatchEvent(new _e()), this._webRtcController.restartStreamAutomatically();
  }
  disconnect() {
    this._eventEmitter.dispatchEvent(new Be()), this._webRtcController.close();
  }
  play() {
    this._onStreamLoading(), this._webRtcController.playStream();
  }
  checkForAutoConnect() {
    this.config.isFlagEnabled(d.AutoConnect) && (this._onWebRtcAutoConnect(), this._webRtcController.connectToSignallingServer());
  }
  unmuteMicrophone(e = !1) {
    if (!this.config.isFlagEnabled("UseMic"))
      return e ? (this.config.setFlagEnabled("UseMic", !0), void this.reconnect()) : void i.Warning(i.GetStackTrace(), "Trying to unmute mic, but PixelStreaming was initialized with no microphone track. Call with forceEnable == true to re-connect with a mic track.");
    this.setMicrophoneMuted(!1);
  }
  muteMicrophone() {
    this.config.isFlagEnabled("UseMic") ? this.setMicrophoneMuted(!0) : i.Info(i.GetStackTrace(), "Trying to mute mic, but PixelStreaming has no microphone track, so sending sound is already disabled.");
  }
  setMicrophoneMuted(e) {
    var t, n, r, o;
    for (const a of (o = (r = (n = (t = this._webRtcController) === null || t === void 0 ? void 0 : t.peerConnectionController) === null || n === void 0 ? void 0 : n.peerConnection) === null || r === void 0 ? void 0 : r.getTransceivers()) !== null && o !== void 0 ? o : [])
      at.canTransceiverSendAudio(a) && (a.sender.track.enabled = !e);
  }
  _onWebRtcAutoConnect() {
    this._eventEmitter.dispatchEvent(new ke()), this._showActionOrErrorOnDisconnect = !0;
  }
  _onWebRtcSdp() {
    this._eventEmitter.dispatchEvent(new Re());
  }
  _onStreamLoading() {
    this._eventEmitter.dispatchEvent(new ze());
  }
  _onDisconnect(e) {
    this._webRtcController.getDisconnectMessageOverride() != "" && this._webRtcController.getDisconnectMessageOverride() !== void 0 && this._webRtcController.getDisconnectMessageOverride() != null && (e = this._webRtcController.getDisconnectMessageOverride(), this._webRtcController.setDisconnectMessageOverride("")), this._eventEmitter.dispatchEvent(new De({ eventString: e, showActionOrErrorOnDisconnect: this._showActionOrErrorOnDisconnect })), this._showActionOrErrorOnDisconnect == 0 && (this._showActionOrErrorOnDisconnect = !0);
  }
  _onWebRtcConnecting() {
    this._eventEmitter.dispatchEvent(new Le());
  }
  _onWebRtcConnected() {
    this._eventEmitter.dispatchEvent(new xe());
  }
  _onWebRtcFailed() {
    this._eventEmitter.dispatchEvent(new Ae());
  }
  _onVideoInitialized() {
    this._eventEmitter.dispatchEvent(new Ue()), this._videoStartTime = Date.now();
  }
  _onLatencyTestResult(e) {
    this._eventEmitter.dispatchEvent(new Qe({ latencyTimings: e }));
  }
  _onDataChannelLatencyTestResponse(e) {
    this._eventEmitter.dispatchEvent(new qe({ response: e }));
  }
  _onVideoStats(e) {
    this._videoStartTime && this._videoStartTime !== void 0 || (this._videoStartTime = Date.now()), e.handleSessionStatistics(this._videoStartTime, this._inputController, this._webRtcController.videoAvgQp), this._eventEmitter.dispatchEvent(new $e({ aggregatedStats: e }));
  }
  _onVideoEncoderAvgQP(e) {
    this._eventEmitter.dispatchEvent(new Pe({ avgQP: e }));
  }
  _onInitialSettings(e) {
    var t;
    this._eventEmitter.dispatchEvent(new je({ settings: e })), e.PixelStreamingSettings && (this.allowConsoleCommands = (t = e.PixelStreamingSettings.AllowPixelStreamingCommands) !== null && t !== void 0 && t, this.allowConsoleCommands === !1 && i.Info(i.GetStackTrace(), "-AllowPixelStreamingCommands=false, sending arbitrary console commands from browser to UE is disabled."));
    const n = this.config.useUrlParams, r = new URLSearchParams(window.location.search);
    e.EncoderSettings && (this.config.setNumericSetting(S.MinQP, n && r.has(S.MinQP) ? Number.parseInt(r.get(S.MinQP)) : e.EncoderSettings.MinQP), this.config.setNumericSetting(S.MaxQP, n && r.has(S.MaxQP) ? Number.parseInt(r.get(S.MaxQP)) : e.EncoderSettings.MaxQP)), e.WebRTCSettings && (this.config.setNumericSetting(S.WebRTCMinBitrate, n && r.has(S.WebRTCMinBitrate) ? Number.parseInt(r.get(S.WebRTCMinBitrate)) : e.WebRTCSettings.MinBitrate / 1e3), this.config.setNumericSetting(S.WebRTCMaxBitrate, n && r.has(S.WebRTCMaxBitrate) ? Number.parseInt(r.get(S.WebRTCMaxBitrate)) : e.WebRTCSettings.MaxBitrate / 1e3), this.config.setNumericSetting(S.WebRTCFPS, n && r.has(S.WebRTCFPS) ? Number.parseInt(r.get(S.WebRTCFPS)) : e.WebRTCSettings.FPS));
  }
  _onQualityControlOwnership(e) {
    this.config.setFlagEnabled(d.IsQualityController, e);
  }
  _onPlayerCount(e) {
    this._eventEmitter.dispatchEvent(new Ye({ count: e }));
  }
  requestLatencyTest() {
    return !!this._webRtcController.videoPlayer.isVideoReady() && (this._webRtcController.sendLatencyTest(), !0);
  }
  requestDataChannelLatencyTest(e) {
    return !!this._webRtcController.videoPlayer.isVideoReady() && (this._dataChannelLatencyTestController || (this._dataChannelLatencyTestController = new bn(this._webRtcController.sendDataChannelLatencyTest.bind(this._webRtcController), (t) => {
      this._eventEmitter.dispatchEvent(new Xe({ result: t }));
    }), this.addEventListener("dataChannelLatencyTestResponse", ({ data: { response: t } }) => {
      this._dataChannelLatencyTestController.receive(t);
    })), this._dataChannelLatencyTestController.start(e));
  }
  requestShowFps() {
    return !!this._webRtcController.videoPlayer.isVideoReady() && (this._webRtcController.sendShowFps(), !0);
  }
  requestIframe() {
    return !!this._webRtcController.videoPlayer.isVideoReady() && (this._webRtcController.sendIframeRequest(), !0);
  }
  emitUIInteraction(e) {
    return !!this._webRtcController.videoPlayer.isVideoReady() && (this._webRtcController.emitUIInteraction(e), !0);
  }
  emitCommand(e) {
    return !(!this._webRtcController.videoPlayer.isVideoReady() || !this.allowConsoleCommands && "ConsoleCommand" in e || (this._webRtcController.emitCommand(e), 0));
  }
  emitConsoleCommand(e) {
    return !(!this.allowConsoleCommands || !this._webRtcController.videoPlayer.isVideoReady() || (this._webRtcController.emitConsoleCommand(e), 0));
  }
  addResponseEventListener(e, t) {
    this._webRtcController.responseController.addResponseEventListener(e, t);
  }
  removeResponseEventListener(e) {
    this._webRtcController.responseController.removeResponseEventListener(e);
  }
  dispatchEvent(e) {
    return this._eventEmitter.dispatchEvent(e);
  }
  addEventListener(e, t) {
    this._eventEmitter.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    this._eventEmitter.removeEventListener(e, t);
  }
  toggleXR() {
    this.webXrController.xrClicked();
  }
  setSignallingUrlBuilder(e) {
    this._webRtcController.signallingUrlBuilder = e;
  }
  get webSocketController() {
    return this._webRtcController.webSocketController;
  }
  get webXrController() {
    return this._webXrController;
  }
  registerMessageHandler(e, t, n) {
    t !== p.FromStreamer || n !== void 0 ? t === p.ToStreamer && n === void 0 ? this._webRtcController.streamMessageController.registerMessageHandler(t, e, (r) => this._webRtcController.sendMessageController.sendMessageToStreamer(e, r)) : this._webRtcController.streamMessageController.registerMessageHandler(t, e, (r) => n(r)) : i.Warning(i.GetStackTrace(), `Unable to register an undefined handler for ${e}`);
  }
  get toStreamerHandlers() {
    return this._webRtcController.streamMessageController.toStreamerHandlers;
  }
}
u.Dz;
u.g$;
u.Lt;
u.Q9;
u.qf;
u.hV;
u.z$;
u.J0;
var wn = u.De;
u.$C;
u.al;
u._W;
u.Gv;
u.m;
u.tz;
u.Nu;
u.zg;
u.vp;
u.vU;
u.wF;
u.rv;
u.Nh;
u.ss;
u.qW;
u.QL;
u.cf;
u.eM;
var Mn = u.Yd;
u.Tk;
u.iM;
u.qy;
u.ce;
u.sK;
u.Ok;
u.q5;
var Pn = u.g;
u.xl;
u.I;
u.bx;
u.dD;
u.Ib;
u.Az;
u.Iw;
u.qY;
u.db;
u.mR;
u.Tn;
u.rV;
u.gh;
u.Mi;
u.j;
u.YB;
u.i5;
u.x_;
u.Am;
u.eR;
u.r8;
u.u3;
u.vd;
u.iV;
u.jZ;
u.SW;
u.ZH;
u.Ni;
u.lh;
u.bq;
u.$f;
u.eu;
u.Ax;
u.Mc;
Mn.SetLoggerVerbosity(0);
const pe = new wn({
  initialSettings: {
    AutoPlayVideo: !1,
    AutoConnect: !1,
    HoveringMouse: !0,
    MatchViewportRes: !0,
    MouseInput: !0,
    StartVideoMuted: !0,
    SuppressBrowserKeys: !1,
    WaitForStreamer: !0
  },
  useUrlParams: !1
});
let b = null, F = null, gt = Rn, O = null;
function Se(s) {
  var o;
  if (pt(), !(f != null && f.isConnected))
    return;
  const e = s != null ? s : f.signalingURL, t = e !== "", n = t ? e.replace(/^http/, "ws") : void 0;
  console.log("[ue] signaling-url ", n), pe.setSettings({
    AutoPlayVideo: t,
    AutoConnect: t,
    ss: n
  });
  const r = gt(pe);
  O = r.videoElementParent, F == null || F.appendChild(O), b = r.pixelStreaming, O == null || O.classList.toggle("fixed-size", vt()), (o = r == null ? void 0 : r.callback) == null || o.call(r), kn();
}
function Rn(s) {
  const e = document.createElement("div");
  return {
    pixelStreaming: new Pn(s, {
      videoElementParent: e
    }),
    videoElementParent: e
  };
}
function pt() {
  f && (b && (b.disconnect(), b = null), F && F.remove(), F = document.createElement("div"), F.className = "ue-media-wrapper", f.appendChild(F), f.ready = !1);
}
function se(s) {
  const e = JSON.parse(s), t = /^(\{|\[])|(\]|\})$/;
  return typeof e.Data == "string" && t.test(e.Data) && (e.Data = JSON.parse(e.Data)), e;
}
function St(s, e, t) {
  b == null || b.addResponseEventListener(s, (n) => {
    const r = se(n);
    (r == null ? void 0 : r.UID) === s && (t(r), b == null || b.removeResponseEventListener(s));
  }), b == null || b.emitUIInteraction(e);
}
function kn() {
  b && (b.addEventListener("playStream", () => {
    K("start", Date.now());
  }), b.addEventListener("playStreamError", () => {
    ft("Play Stream Error");
  }), b.addEventListener("playStreamRejected", () => {
    K("stop", "Play Stream Rejected");
  }), b.addEventListener("webRtcConnected", () => {
    f && (f.ready = !0);
  }), b.addResponseEventListener("Action", (s) => {
    const e = se(s);
    e.Action && An(e.Action, e.Data);
  }), b.addResponseEventListener("Message", (s) => {
    const e = se(s);
    K("message", e);
  }));
}
function Wn(s) {
  gt = s;
}
let H = null;
function vt() {
  const s = f == null ? void 0 : f.aspectRatio;
  return typeof s == "string" ? s.replace(/\s/g, "").split("/").length > 1 : !1;
}
function Ln(s) {
  H = s;
}
function ve() {
  if (!H)
    return;
  const s = f == null ? void 0 : f.aspectRatio;
  if (typeof s == "string") {
    const e = s.replace(/\s/g, "").split("/"), t = vt();
    if (O == null || O.classList.toggle("fixed-size", t), t) {
      const n = Number(e[0]), r = Number(e[1]);
      xn(n, r);
      return;
    }
  }
  H.textContent = `
.ue-media-wrapper {
  height: 100%;
  width: 100%;
}
`;
}
function xn(s = 16, e = 9) {
  if (!H)
    return;
  const t = /aspect-ratio: (\d+) \/ (\d+)/g, n = `aspect-ratio: ${s} / ${e}`;
  H.textContent = Lt.replace(t, n);
}
let f;
function Nn(s) {
  const e = "ue-player";
  customElements.get(e) || customElements.define(e, class extends HTMLElement {
    constructor() {
      super(), f = this, s == null || s(this);
    }
    get applicationName() {
      var n;
      return (n = this.getAttribute("application-name")) != null ? n : "";
    }
    set applicationName(n) {
      this.setAttribute("application-name", n);
    }
    get aspectRatio() {
      var n;
      return (n = this.getAttribute("aspect-ratio")) != null ? n : "auto";
    }
    set aspectRatio(n) {
      this.setAttribute("aspect-ratio", n);
    }
    attributeChangedCallback(n, r, o) {
      switch (n) {
        case "application-name":
        case "match-maker-url": {
          kt();
          break;
        }
        case "signaling-url": {
          Se();
          break;
        }
        case "aspect-ratio": {
          ve();
          break;
        }
        case "oncommand":
        case "onenter":
        case "onleave":
        case "onmessage":
        case "onpick":
        case "onstart":
        case "onstop": {
          const a = n.replace(/^on/, "");
          typeof o == "function" ? this.addEventListener(a, o) : typeof r == "function" && this.removeEventListener(a, r);
          break;
        }
        case "volume": {
          m("SetVolume", o);
          break;
        }
      }
    }
    connectedCallback() {
      const n = document.createElement("style");
      n.id = "ue-common-style", n.textContent = Mt;
      const r = document.createElement("style");
      r.id = "ue-debug-style", r.textContent = Pt;
      const o = document.createElement("style");
      o.id = "ue-specific-style", o.textContent = `
.ue-media-wrapper {
  height: 100%;
  width: 100%;
}
`, this.append(n, r, o), Ln(o), Se(), ve();
    }
    disconnectedCallback() {
      pt();
    }
    get height() {
      return Number(this.getAttribute("height"));
    }
    set height(n) {
      this.setAttribute("height", n.toFixed(0));
    }
    get matchMakerURL() {
      var n;
      return (n = this.getAttribute("match-maker-url")) != null ? n : "";
    }
    set matchMakerURL(n) {
      this.setAttribute("match-maker-url", n);
    }
    static get observedAttributes() {
      return [
        "application-name",
        "aspect-ratio",
        "match-maker-url",
        "oncommand",
        "onenter",
        "onleave",
        "onmessage",
        "onpick",
        "onstart",
        "onstop",
        "signaling-url",
        "volume"
      ];
    }
    set oncommand(n) {
      this.addEventListener("command", n);
    }
    set onenter(n) {
      this.addEventListener("enter", n);
    }
    set onleave(n) {
      this.addEventListener("leave", n);
    }
    set onmessage(n) {
      this.addEventListener("message", n);
    }
    set onpick(n) {
      this.addEventListener("pick", n);
    }
    set onstart(n) {
      this.addEventListener("start", n);
    }
    set onstop(n) {
      this.addEventListener("stop", n);
    }
    get ready() {
      return this.hasAttribute("ready");
    }
    set ready(n) {
      this.toggleAttribute("ready", n);
    }
    get signalingURL() {
      var n;
      return (n = this.getAttribute("signaling-url")) != null ? n : "";
    }
    set signalingURL(n) {
      this.setAttribute("signaling-url", n);
    }
    get volume() {
      const n = this.getAttribute("volume");
      return Number(typeof n != "string" ? 0.3 : n);
    }
    set volume(n) {
      this.setAttribute("volume", n.toFixed(1));
    }
    get width() {
      return Number(this.getAttribute("width"));
    }
    set width(n) {
      this.setAttribute("width", n.toFixed(0));
    }
  });
}
function An(s, e) {
  if (!(f != null && f.ready))
    return;
  const t = Dn(s);
  if (!t)
    return;
  const n = new CustomEvent(t, { detail: e });
  f.dispatchEvent(n);
}
function K(s, e) {
  if (!f)
    return;
  const t = new CustomEvent(s, { detail: e });
  f.dispatchEvent(t);
}
function ft(s) {
  if (!f)
    return;
  const e = new ErrorEvent("error", { message: s });
  f.dispatchEvent(e);
}
function Dn(s) {
  return /\w+(Click|Select)(ed)?/.test(s) ? "pick" : /\w+Hover(ed)?/.test(s) ? "enter" : /\w+Unhover(ed)?/.test(s) ? "leave" : /Measure\w+/.test(s) ? "measure" : null;
}
const Fn = (s, e, t, n) => {
  typeof window.ue.interface != "object" && (window.ue.interface = {});
  const o = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => {
    const h = Number(c), g = crypto.getRandomValues(new Uint8Array(1));
    return (h ^ g[0] & 15 >> h / 4).toString(16);
  });
  t && (window.ue.interface[o] = t);
  const a = 1e3 * Math.max(2, n != null ? n : 0);
  setTimeout(() => {
    delete window.ue.interface[o];
  }, a);
  const l = typeof e != "string" ? JSON.stringify(e) : "";
  window.ue.$receive.asyn(s, l, o);
};
function Ct(s, e) {
  var n;
  const t = (n = s.Command) != null ? n : s.Console;
  t && Fn(t, s, (r) => {
    (r == null ? void 0 : r.UID) === (s == null ? void 0 : s.UID) && e(r);
  });
}
function V(s, e) {
  const t = yt(), n = {
    Console: e ? s + " " + e : s,
    UID: t
  };
  return new Promise(
    (r, o) => {
      console.warn("[ue] Execute UE Console Command ===> ", n), window.ue ? Ct(n, r) : f ? St(t, n, r) : o({ Result: "[Error] Failed to get UE host!" });
    }
  );
}
function yt() {
  let e = 16;
  const t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [];
  e = e || t.length;
  for (let r = 0; r < 8; r++)
    n[r] = t[0 | Math.random() * e];
  return n.join("");
}
function m(s, e) {
  const t = yt(), n = {
    Command: s,
    Data: {
      Parameters: e
    },
    UID: t
  };
  return new Promise(
    (r, o) => {
      console.warn("[ue] Execute Web Command ===> ", n), K("command", n), window.ue ? Ct(n, r) : f ? St(t, n, r) : o({ Result: "[Error] Failed to get UE host!" });
    }
  );
}
const $n = {
  hide(s) {
    return m("HideActorByTag", s);
  },
  show(s) {
    return m("ShowActorByTag", s);
  }
}, Kn = {
  addArcgisLayer(s) {
    return m("AddArcGISWmtsLayer", s);
  },
  addCustomLayer(s) {
    return m("AddWmtsLayer", s);
  },
  addMapboxLayer(s) {
    return m("AddMapboxWmtsLayer", s);
  },
  addTiandituLayer(s) {
    return m("AddTianDiTuWmtsLayer", s);
  },
  config({
    GeographicEPSG: s = "4326",
    IsBigScene: e = !1,
    IsOriginLocationInProjectedCRS: t,
    OriginCenter: n,
    ProjectedEPSG: r = "4549"
  }) {
    return m("SetGeoReferencingParams", {
      IsBigScene: e,
      GeographicEPSG: s,
      IsOriginLocationInProjectedCRS: t,
      OriginCenter: n,
      ProjectedEPSG: r
    });
  },
  hideLayer(s) {
    return m("HideWmtsLayer", s);
  },
  hideLayerGroup(s) {
    return m("HideWmtsLayerByGroupID", s);
  },
  removeLayer(s) {
    return m("DeleteWmtsLayer", s);
  },
  removeLayerGroup(s) {
    return m("DeleteWmtsLayerByGroupID", s);
  },
  setCesiumTerrainLayer(s) {
    return m("SetTerrainLayerByCesiumIon", s);
  },
  setCustomLayer(s) {
    return m("ChangeWmtsLayer", s);
  },
  setHeaders(s, e) {
    return m("ChangeRequestHeaders", { ID: s, RequestHeaders: e });
  },
  setLayerIndex(s, e) {
    return m("ChangeWmtsLayerIndex", { ID: s, Index: e });
  },
  setTerrainLayer(s) {
    return m("SetTerrainLayerByUrl", s);
  },
  showLayer(s) {
    return m("ShowWmtsLayer", s);
  },
  showLayerGroup(s) {
    return m("ShowWmtsLayerByGroupID", s);
  },
  toggleDebug(s, e) {
    return m("ChangeDebugMessages", { ID: s, ShowDebugMessage: e });
  }
}, Qn = {
  openLevel(s, e) {
    return m("OpenLevel", {
      MainLevelName: s,
      StreamLevelNames: e
    });
  },
  restartLevel() {
    V("RestartLevel", "");
  },
  loadStreamLevels(s, e = !0, t = !0, n = !1) {
    return m("LoadStreamLevels", {
      LevelNames: s,
      UnloadOtherStreamLevels: e,
      MakeVisibleAfterLoad: t,
      ShouldBlockOnLoad: n
    });
  },
  unloadStreamLevels(s, e = !1) {
    return m("UnloadStreamLevels", {
      LevelNames: s,
      ShouldBlockOnLoad: e
    });
  }
}, qn = {
  checkExistance(s) {
    return m("CheckExistanceOfPoint", s);
  },
  create(s) {
    return m("CreatePoint", s);
  },
  hide(s) {
    return m("HidePoint", s);
  },
  pick(s) {
    return m("SelectPoint", s);
  },
  remove(s) {
    return m("DeletePoint", s);
  },
  show(s) {
    return m("ShowPoint", s);
  },
  unpick() {
    return m("UnselectPoint");
  }
}, Xn = {
  checkExistance(s) {
    return m("CheckExistanceOfPolygon", s);
  },
  create(s) {
    return m("CreatePolygon", s);
  },
  hide(s) {
    return m("HidePolygon", s);
  },
  pick(s) {
    return m("SelectPolygon", s);
  },
  remove(s) {
    return m("DeletePolygon", s);
  },
  show(s) {
    return m("ShowPolygon", s);
  },
  unpick() {
    return m("UnselectPolygon");
  }
}, jn = {
  checkExistance(s) {
    return m("CheckExistanceOfPolyline", s);
  },
  create(s) {
    return m("CreatePolyline", s);
  },
  hide(s) {
    return m("HidePolyline", s);
  },
  hideWithAnimateAndDuration(s, e, t) {
    const n = z({
      Animate: e,
      AnimateDuration: t
    }, s);
    return m("HidePolyline", n);
  },
  hideWithAnimateAndSpeed(s, e, t) {
    const n = z({
      Animate: e,
      AnimateSpeed: t
    }, s);
    return m("HidePolyline", n);
  },
  pick(s) {
    return m("SelectPolyline", s);
  },
  remove(s) {
    return m("DeletePolyline", s);
  },
  show(s) {
    return m("ShowPolyline", s);
  },
  showWithAnimateAndDuration(s, e, t) {
    const n = z({
      Animate: e,
      AnimateDuration: t
    }, s);
    return m("ShowPolyline", n);
  },
  showWithAnimateAndSpeed(s, e, t) {
    const n = z({
      Animate: e,
      AnimateSpeed: t
    }, s);
    return m("ShowPolyline", n);
  },
  unpick() {
    return m("UnselectPolyline");
  }
}, Jn = {
  create(s) {
    return m("CreatePolymesh", s);
  },
  hide(s) {
    return m("HidePolymesh", s);
  },
  pick(s) {
    return m("SelectPolymesh", s);
  },
  remove(s) {
    return m("DeletePolymesh", s);
  },
  show(s) {
    return m("ShowPolymesh", s);
  },
  unpick() {
    return m("UnselectPolymesh");
  }
}, Yn = {
  pause(s) {
    return m("PauseSequence", s);
  },
  play(s) {
    return m("PlaySequence", s);
  },
  stop() {
    return m("StopSequence");
  }
}, Zn = {
  mute() {
    return m("Mute");
  },
  setVolume(s) {
    return m("SetVolume", s);
  },
  unmute() {
    return m("Unmute");
  }
}, On = /^(\d)(\d)(\d)(\d)-(0?)(\d+)-(0?)(\d+)T(0?)(\d+):(0?)(\d+):(0?)(\d+).(0+)(\d+)Z$/, In = {
  dd: "$7$8",
  d: "$8",
  hh: "$9$10",
  h: "$10",
  MM: "$5$6",
  M: "$6",
  mm: "$11$12",
  m: "$12",
  ss: "$13$14",
  s: "$14",
  S: "$16",
  yyyy: "$1$2$3$4",
  yyy: "$2$3$4",
  yy: "$3$4",
  y: "$4"
};
function Un(s, e) {
  return Object.entries(In).forEach(([t, n]) => {
    e = e.replace(new RegExp(t), n);
  }), s.toJSON().replace(On, e);
}
const er = {
  disableRealtime() {
    return m("DisableRealtime");
  },
  enableRealtime() {
    return m("EnableRealtime");
  },
  setDateTime(s) {
    const e = Un(s, "yyyy-MM-dd hh:mm:ss");
    return m("SetDateTime", e);
  }
};
var zn = /* @__PURE__ */ ((s) => (s[s.SpringArm = 0] = "SpringArm", s[s.GIS = 1] = "GIS", s[s.Free = 2] = "Free", s))(zn || {});
const tr = {
  changeMode(s) {
    return m("ChangeViewMode", s);
  },
  flyTo(s) {
    var c;
    const [e, t, n] = s.Location, [r, o, a] = (c = s.Rotation) != null ? c : [], l = {
      Location: `(X=${e},Y=${t},Z=${n})`,
      LockRotation: s.LockRotation,
      Rotation: `(P=${o},Y=${a},R=${r})`,
      Distance: s.Distance,
      LockDistance: s.LockDistance,
      Duration: s.Duration
    };
    return m("FlyTo", l);
  },
  getView() {
    return ae(this, null, function* () {
      const s = yield m("GetPosition"), e = s.Data, [t, n, r] = e.Location.replace(/(X|Y|Z)=/g, "").split(" "), [o, a, l] = e.Rotation.replace(/(P|Y|R)=/g, "").split(" ");
      return {
        Type: "Command",
        UID: s.UID,
        Command: "GetPosition",
        Data: {
          Location: [Number(t), Number(n), Number(r)],
          Rotation: [Number(l), Number(o), Number(a)],
          Distance: e.ArmLength
        },
        Result: !0
      };
    });
  },
  resetView() {
    return m("ResetView");
  }
}, nr = {
  changeByPreset(s, e = 0) {
    return m("ChangeWeatherByPreset", { Duration: e, Preset: s });
  },
  changeBySettings(s, e = 0) {
    const t = z({ Duration: e }, s);
    return m("ChangeWeatherBySettings", t);
  }
};
class rr {
  constructor(e, t, n, r, o, a, l, c) {
    this.Coordinate = t, this.IsHeightBasedSurface = n, this.ID = o, this.Name = a, this.Offset = r, this.Parameters = c, this.Style = e, this.Tag = l;
  }
}
class sr {
  constructor(e, t, n, r, o, a, l, c) {
    this.Coordinates = t, this.IsHeightBasedSurface = n, this.ID = o, this.Name = a, this.Offset = r, this.Parameters = c, this.Style = e, this.Tag = l;
  }
}
class ir {
  constructor(e, t, n, r, o, a, l, c, h) {
    this.Coordinates = t, this.IsHeightBasedSurface = n, this.IsTraceSurface = r, this.ID = a, this.Name = l, this.Offset = o, this.Parameters = h, this.Style = e, this.Tag = c;
  }
}
class or {
  constructor(e, t, n, r, o, a, l, c, h, g) {
    this.Coordinates = t, this.DrawBottom = r, this.DrawSide = o, this.DrawTop = a, this.ID = l, this.Height = n, this.Name = c, this.Parameters = g, this.Style = e, this.Tag = h;
  }
}
function ar(s) {
  return V(
    "PixelStreaming.WebRTC.DegradationPreference",
    s
  );
}
function lr(s) {
  return V("r.DynamicRes.OperationMode", s ? "2" : s === void 0 ? "1" : "0");
}
function cr(s, e) {
  const t = `${s}x${e}f`;
  return V("r.setRes", t);
}
function dr(s) {
  s < 1 && (s = window.devicePixelRatio * 100);
  const e = s.toFixed();
  return V("r.ScreenPercentage", e);
}
export {
  F as $scalable,
  O as $videoParent,
  $n as ActorController,
  Kn as GisController,
  Qn as LevelController,
  qn as PointController,
  rr as PointData,
  Xn as PolygonController,
  sr as PolygonData,
  jn as PolylineController,
  ir as PolylineData,
  Jn as PolymeshController,
  or as PolymeshData,
  Yn as SequenceController,
  Zn as SystemController,
  er as TimeController,
  tr as ViewController,
  zn as ViewMode,
  nr as WeatherController,
  kt as connect2MatchMaker,
  Se as connect2Signaling,
  Nn as defineContainer,
  pt as disconnect,
  fe as getPixelStreamingInstance,
  b as pixelStreaming,
  f as player,
  St as sendByPixelStreaming,
  ar as setDegradationPreference,
  lr as setDynamicResolution,
  cr as setResolution,
  dr as setScreenPercentage,
  Wn as useUI
};
