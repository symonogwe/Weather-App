(() => {
  let n;
  let e;
  let t;
  let i;
  let a;
  let A;
  let r;
  let o;
  let s;
  let c;
  let d;
  let l;
  let p;
  let C;
  const f = {
    705: (n) => {
      n.exports = function (n) {
        const e = [];
        return (
          (e.toString = function () {
            return this.map((e) => {
              let t = "";
              const i = void 0 !== e[5];
              return (
                e[4] && (t += "@supports (".concat(e[4], ") {")),
                e[2] && (t += "@media ".concat(e[2], " {")),
                i &&
                  (t += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {"
                  )),
                (t += n(e)),
                i && (t += "}"),
                e[2] && (t += "}"),
                e[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (e.i = function (n, t, i, a, A) {
            typeof n === "string" && (n = [[null, n, void 0]]);
            const r = {};
            if (i)
              for (let o = 0; o < this.length; o++) {
                const s = this[o][0];
                s != null && (r[s] = !0);
              }
            for (let c = 0; c < n.length; c++) {
              const d = [].concat(n[c]);
              (i && r[d[0]]) ||
                (void 0 !== A &&
                  (void 0 === d[5] ||
                    (d[1] = "@layer"
                      .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                      .concat(d[1], "}")),
                  (d[5] = A)),
                t &&
                  (d[2]
                    ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")),
                      (d[2] = t))
                    : (d[2] = t)),
                a &&
                  (d[4]
                    ? ((d[1] = "@supports ("
                        .concat(d[4], ") {")
                        .concat(d[1], "}")),
                      (d[4] = a))
                    : (d[4] = "".concat(a))),
                e.push(d));
            }
          }),
          e
        );
      };
    },
    476: (n) => {
      n.exports = function (n) {
        const e = n[1];
        const t = n[3];
        if (!t) return e;
        if (typeof btoa === "function") {
          const i = btoa(unescape(encodeURIComponent(JSON.stringify(t))));
          const a =
            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
              i
            );
          const A = "/*# ".concat(a, " */");
          return [e].concat([A]).join("\n");
        }
        return [e].join("\n");
      };
    },
    205: (n, e, t) => {
      t.d(e, { Z: () => o });
      const i = t(476);
      const a = t.n(i);
      const A = t(705);
      const r = t.n(A)()(a());
      r.push([
        n.id,
        "@import url(https://fonts.googleapis.com/css2?family=Volkhov&display=swap);",
      ]),
        r.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Secular+One&display=swap);",
        ]),
        r.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Aleo&display=swap);",
        ]),
        r.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Assistant:wght@700&display=swap);",
        ]),
        r.push([
          n.id,
          ':root {\n  --base-color: #1d2d44;\n  --sub-base-color: #3e5c76;\n  --sub-color: #0d1321;\n  --text-color: #f0ebd8;\n  --base-p-fs: calc(0.8rem + 0.7vw);\n  --base-h1-fs: calc(2rem + 2vw);\n  --base-h2-fs: calc(1.4rem + 1.2vw);\n  --base-h3-fs: calc(1.2rem + 1vw);\n  --base-h1-ff: "Secular One", sans-serif;\n  --base-h2-ff: "Assistant", sans-serif;\n  --base-p-ff: "Volkhov", sans-serif;\n  --logo-width: max(35px, 30%);\n  --base-paragraph-ff: "Nanum Myeongjo", sans-serif;\n  --base-margin: 0.2em 0.6em;\n  --base-padding: 0.4em 0.6em;\n  --box-shadow: 5px 10px 30px black;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--base-color);\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n#general-weather-container {\n  height: 65%;\n  width: 70%;\n  display: grid;\n  grid-template-columns: 1.5fr 1fr;\n  background-color: var(--sub-base-color);\n  border-radius: 0.5em;\n}\n\n/* LEFT WEATHER INFO */\n\n.left-weather-info {\n  border: 3px solid var(--text-color);\n  border-radius: 0.5em;\n}\n\n.location-info {\n  display: flex;\n  justify-content: space-between;\n}\n\n.location-area {\n  line-height: 1;\n  padding: var(--base-padding);\n}\n\n.location-region-txt {\n  font-size: var(--base-h1-fs);\n  font-family: var(--base-h1-ff);\n  color: var(--text-color);\n}\n\n.location-area-txt {\n  font-size: var(--base-h2-fs);\n  font-family: var(--base-h2-ff);\n}\n\n.location-country-txt {\n  font-size: var(--base-h3-fs);\n  font-family: var(--base-h2-ff);\n}\n\n.location-time {\n  padding: var(--base-padding);\n  color: var(--text-color);\n}\n\n.location-time-txt {\n  font-family: var(--base-p-ff);\n  font-size: calc(0.7rem + 0.6vw);\n}\n\n.temp-container {\n  height: 10%;\n  display: grid;\n  justify-items: center;\n  margin-top: 7%;\n}\n\n.temperature-info {\n  width: 60%;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.temperature-info .temp-c,\n.temperature-info .temp-f {\n  border: 1px solid var(--text-color);\n  border-radius: 0.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n  padding: var(--base-padding);\n}\n\n.celsius-icon,\n.f-icon {\n  width: max(20px, 15%);\n  filter: invert(88%) sepia(29%) saturate(142%) hue-rotate(350deg)\n    brightness(106%) contrast(88%);\n}\n\n.celsius-txt,\n.f-txt {\n  font-family: var(--base-p-ff);\n  font-size: var(--base-p-fs);\n}\n\n.location-weather-data {\n  height: 15%;\n  margin-top: 6%;\n  display: grid;\n  justify-items: center;\n}\n\n.location-weather {\n  width: 90%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.weather-txt {\n  font-size: calc(1.6rem + 1.5vw);\n  font-family: var(--base-h2-ff);\n  color: var(--text-color);\n}\n\n.weather-icon-big {\n  width: max(5px, 13%);\n  justify-items: flex-start;\n  filter: invert(88%) sepia(29%) saturate(142%) hue-rotate(350deg)\n    brightness(106%) contrast(88%);\n}\n\n.location-prediction-container {\n  margin-top: 4%;\n  height: 25%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.prediction-container-1,\n.prediction-container-2,\n.prediction-container-3,\n.prediction-container-4 {\n  border: 1.5px solid var(--text-color);\n  border-radius: 0.5em;\n  width: 20%;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n\n.prediction-time-1,\n.prediction-time-2,\n.prediction-time-3,\n.prediction-time-4 {\n  font-size: calc(1.1rem + 0.8vw);\n  font-family: "Aleo";\n  color: var(--text-color);\n}\n\n.prediction-location-1,\n.prediction-location-2,\n.prediction-location-3,\n.prediction-location-4 {\n  font-size: calc(0.8rem + 0.7vw);\n  font-family: "Aleo";\n}\n\n.prediction-weather-1,\n.prediction-weather-2,\n.prediction-weather-3,\n.prediction-weather-4 {\n  font-size: calc(0.6rem + 0.5vw);\n  font-family: var(--base-h1-ff);\n  color: var(--text-color);\n}\n\n/* RIGHT WEATHER INFO */\n\n.right-weather-info {\n  /* border: 0.8px solid var(--text-color);\n  border-radius: 0.5em; */\n}\n\n.weather-input-container {\n  /* border: 1px solid red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  height: 7%;\n  padding: var(--base-padding);\n}\n\n#city-value {\n  height: 80%;\n  border-radius: 0.5em;\n  border: none;\n  outline: none;\n  appearance: none;\n  font-size: calc(0.5rem + 0.5vw);\n}\n\n#city-value:focus:invalid {\n  outline: 1px solid red;\n  background-color: pink;\n}\n\n.city-submit-btn {\n  padding: 0.4em 0.8em;\n  border-radius: 0.5em;\n  border: none;\n  background-color: var(--base-color);\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n.city-submit-btn:hover {\n  scale: 1.1;\n}\n\n.wind-humidity-container {\n  /* border: 1px solid red; */\n  height: 10%;\n  margin-top: 8%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.wind-container,\n.humidity-container {\n  width: 30%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 5px;\n}\n\n.weather-icon {\n  width: var(--logo-width);\n  filter: invert(88%) sepia(29%) saturate(142%) hue-rotate(350deg)\n    brightness(106%) contrast(88%);\n}\n\n.wind-info-txt,\n.humidity-info-txt {\n  font-family: var(--base-p-ff);\n  font-size: var(--base-p-fs);\n}\n\n.weather-specifics-container {\n  height: 30%;\n  margin-top: 8%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(100px, 1fr));\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n  padding: var(--base-padding);\n}\n\n.weather-specifics {\n  border: 1px solid var(--text-color);\n  border-radius: 0.5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-specifics > p {\n  font-family: var(--base-p-ff);\n  font-size: calc(0.7rem + 0.6vw);\n}\n\n.sun-details-container {\n  /* border: 1px solid red; */\n  padding: var(--base-padding);\n  margin-top: 5%;\n  height: 7%;\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n}\n\n.sun-details-container > div {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: calc(0.7rem + 0.6vw);\n  font-family: var(--base-p-ff);\n  color: var(--text-color);\n}\n\n.moon-phase-container {\n  margin-top: 5%;\n  padding: var(--base-padding);\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  font-size: calc(0.7rem + 0.6vw);\n  font-family: var(--base-p-ff);\n  color: var(--text-color);\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/Styles/styles.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Volkhov&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");\n\n@import url("https://fonts.googleapis.com/css2?family=Aleo&display=swap");\n\n@import url("https://fonts.googleapis.com/css2?family=Assistant:wght@700&display=swap");\n\n:root {\n  --base-color: #1d2d44;\n  --sub-base-color: #3e5c76;\n  --sub-color: #0d1321;\n  --text-color: #f0ebd8;\n  --base-p-fs: calc(0.8rem + 0.7vw);\n  --base-h1-fs: calc(2rem + 2vw);\n  --base-h2-fs: calc(1.4rem + 1.2vw);\n  --base-h3-fs: calc(1.2rem + 1vw);\n  --base-h1-ff: "Secular One", sans-serif;\n  --base-h2-ff: "Assistant", sans-serif;\n  --base-p-ff: "Volkhov", sans-serif;\n  --logo-width: max(35px, 30%);\n  --base-paragraph-ff: "Nanum Myeongjo", sans-serif;\n  --base-margin: 0.2em 0.6em;\n  --base-padding: 0.4em 0.6em;\n  --box-shadow: 5px 10px 30px black;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--base-color);\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n#general-weather-container {\n  height: 65%;\n  width: 70%;\n  display: grid;\n  grid-template-columns: 1.5fr 1fr;\n  background-color: var(--sub-base-color);\n  border-radius: 0.5em;\n}\n\n/* LEFT WEATHER INFO */\n\n.left-weather-info {\n  border: 3px solid var(--text-color);\n  border-radius: 0.5em;\n}\n\n.location-info {\n  display: flex;\n  justify-content: space-between;\n}\n\n.location-area {\n  line-height: 1;\n  padding: var(--base-padding);\n}\n\n.location-region-txt {\n  font-size: var(--base-h1-fs);\n  font-family: var(--base-h1-ff);\n  color: var(--text-color);\n}\n\n.location-area-txt {\n  font-size: var(--base-h2-fs);\n  font-family: var(--base-h2-ff);\n}\n\n.location-country-txt {\n  font-size: var(--base-h3-fs);\n  font-family: var(--base-h2-ff);\n}\n\n.location-time {\n  padding: var(--base-padding);\n  color: var(--text-color);\n}\n\n.location-time-txt {\n  font-family: var(--base-p-ff);\n  font-size: calc(0.7rem + 0.6vw);\n}\n\n.temp-container {\n  height: 10%;\n  display: grid;\n  justify-items: center;\n  margin-top: 7%;\n}\n\n.temperature-info {\n  width: 60%;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.temperature-info .temp-c,\n.temperature-info .temp-f {\n  border: 1px solid var(--text-color);\n  border-radius: 0.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n  padding: var(--base-padding);\n}\n\n.celsius-icon,\n.f-icon {\n  width: max(20px, 15%);\n  filter: invert(88%) sepia(29%) saturate(142%) hue-rotate(350deg)\n    brightness(106%) contrast(88%);\n}\n\n.celsius-txt,\n.f-txt {\n  font-family: var(--base-p-ff);\n  font-size: var(--base-p-fs);\n}\n\n.location-weather-data {\n  height: 15%;\n  margin-top: 6%;\n  display: grid;\n  justify-items: center;\n}\n\n.location-weather {\n  width: 90%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.weather-txt {\n  font-size: calc(1.6rem + 1.5vw);\n  font-family: var(--base-h2-ff);\n  color: var(--text-color);\n}\n\n.weather-icon-big {\n  width: max(5px, 13%);\n  justify-items: flex-start;\n  filter: invert(88%) sepia(29%) saturate(142%) hue-rotate(350deg)\n    brightness(106%) contrast(88%);\n}\n\n.location-prediction-container {\n  margin-top: 4%;\n  height: 25%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.prediction-container-1,\n.prediction-container-2,\n.prediction-container-3,\n.prediction-container-4 {\n  border: 1.5px solid var(--text-color);\n  border-radius: 0.5em;\n  width: 20%;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n\n.prediction-time-1,\n.prediction-time-2,\n.prediction-time-3,\n.prediction-time-4 {\n  font-size: calc(1.1rem + 0.8vw);\n  font-family: "Aleo";\n  color: var(--text-color);\n}\n\n.prediction-location-1,\n.prediction-location-2,\n.prediction-location-3,\n.prediction-location-4 {\n  font-size: calc(0.8rem + 0.7vw);\n  font-family: "Aleo";\n}\n\n.prediction-weather-1,\n.prediction-weather-2,\n.prediction-weather-3,\n.prediction-weather-4 {\n  font-size: calc(0.6rem + 0.5vw);\n  font-family: var(--base-h1-ff);\n  color: var(--text-color);\n}\n\n/* RIGHT WEATHER INFO */\n\n.right-weather-info {\n  /* border: 0.8px solid var(--text-color);\n  border-radius: 0.5em; */\n}\n\n.weather-input-container {\n  /* border: 1px solid red; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  height: 7%;\n  padding: var(--base-padding);\n}\n\n#city-value {\n  height: 80%;\n  border-radius: 0.5em;\n  border: none;\n  outline: none;\n  appearance: none;\n  font-size: calc(0.5rem + 0.5vw);\n}\n\n#city-value:focus:invalid {\n  outline: 1px solid red;\n  background-color: pink;\n}\n\n.city-submit-btn {\n  padding: 0.4em 0.8em;\n  border-radius: 0.5em;\n  border: none;\n  background-color: var(--base-color);\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n.city-submit-btn:hover {\n  scale: 1.1;\n}\n\n.wind-humidity-container {\n  /* border: 1px solid red; */\n  height: 10%;\n  margin-top: 8%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.wind-container,\n.humidity-container {\n  width: 30%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 5px;\n}\n\n.weather-icon {\n  width: var(--logo-width);\n  filter: invert(88%) sepia(29%) saturate(142%) hue-rotate(350deg)\n    brightness(106%) contrast(88%);\n}\n\n.wind-info-txt,\n.humidity-info-txt {\n  font-family: var(--base-p-ff);\n  font-size: var(--base-p-fs);\n}\n\n.weather-specifics-container {\n  height: 30%;\n  margin-top: 8%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(100px, 1fr));\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n  padding: var(--base-padding);\n}\n\n.weather-specifics {\n  border: 1px solid var(--text-color);\n  border-radius: 0.5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-specifics > p {\n  font-family: var(--base-p-ff);\n  font-size: calc(0.7rem + 0.6vw);\n}\n\n.sun-details-container {\n  /* border: 1px solid red; */\n  padding: var(--base-padding);\n  margin-top: 5%;\n  height: 7%;\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n}\n\n.sun-details-container > div {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: calc(0.7rem + 0.6vw);\n  font-family: var(--base-p-ff);\n  color: var(--text-color);\n}\n\n.moon-phase-container {\n  margin-top: 5%;\n  padding: var(--base-padding);\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  font-size: calc(0.7rem + 0.6vw);\n  font-family: var(--base-p-ff);\n  color: var(--text-color);\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
      const o = r;
    },
    379: (n) => {
      const e = [];
      function t(n) {
        for (var t = -1, i = 0; i < e.length; i++)
          if (e[i].identifier === n) {
            t = i;
            break;
          }
        return t;
      }
      function i(n, i) {
        for (var A = {}, r = [], o = 0; o < n.length; o++) {
          const s = n[o];
          const c = i.base ? s[0] + i.base : s[0];
          const d = A[c] || 0;
          const l = "".concat(c, " ").concat(d);
          A[c] = d + 1;
          const p = t(l);
          const C = {
            css: s[1],
            media: s[2],
            sourceMap: s[3],
            supports: s[4],
            layer: s[5],
          };
          if (p !== -1) e[p].references++, e[p].updater(C);
          else {
            const f = a(C, i);
            (i.byIndex = o),
              e.splice(o, 0, { identifier: l, updater: f, references: 1 });
          }
          r.push(l);
        }
        return r;
      }
      function a(n, e) {
        const t = e.domAPI(e);
        return (
          t.update(n),
          function (e) {
            if (e) {
              if (
                e.css === n.css &&
                e.media === n.media &&
                e.sourceMap === n.sourceMap &&
                e.supports === n.supports &&
                e.layer === n.layer
              )
                return;
              t.update((n = e));
            } else t.remove();
          }
        );
      }
      n.exports = function (n, a) {
        let A = i((n = n || []), (a = a || {}));
        return function (n) {
          n = n || [];
          for (let r = 0; r < A.length; r++) {
            const o = t(A[r]);
            e[o].references--;
          }
          for (var s = i(n, a), c = 0; c < A.length; c++) {
            const d = t(A[c]);
            e[d].references === 0 && (e[d].updater(), e.splice(d, 1));
          }
          A = s;
        };
      };
    },
    569: (n) => {
      const e = {};
      n.exports = function (n, t) {
        const i = (function (n) {
          if (void 0 === e[n]) {
            let t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        })(n);
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(t);
      };
    },
    216: (n) => {
      n.exports = function (n) {
        const e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
      };
    },
    565: (n, e, t) => {
      n.exports = function (n) {
        const e = t.nc;
        e && n.setAttribute("nonce", e);
      };
    },
    795: (n) => {
      n.exports = function (n) {
        if (typeof document === "undefined")
          return { update() {}, remove() {} };
        const e = n.insertStyleElement(n);
        return {
          update(t) {
            !(function (n, e, t) {
              let i = "";
              t.supports && (i += "@supports (".concat(t.supports, ") {")),
                t.media && (i += "@media ".concat(t.media, " {"));
              const a = void 0 !== t.layer;
              a &&
                (i += "@layer".concat(
                  t.layer.length > 0 ? " ".concat(t.layer) : "",
                  " {"
                )),
                (i += t.css),
                a && (i += "}"),
                t.media && (i += "}"),
                t.supports && (i += "}");
              const A = t.sourceMap;
              A &&
                typeof btoa !== "undefined" &&
                (i +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(A)))),
                    " */"
                  )),
                e.styleTagTransform(i, n, e.options);
            })(e, n, t);
          },
          remove() {
            !(function (n) {
              if (n.parentNode === null) return !1;
              n.parentNode.removeChild(n);
            })(e);
          },
        };
      };
    },
    589: (n) => {
      n.exports = function (n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      };
    },
  };
  const u = {};
  function E(n) {
    const e = u[n];
    if (void 0 !== e) return e.exports;
    const t = (u[n] = { id: n, exports: {} });
    return f[n](t, t.exports, E), t.exports;
  }
  (E.n = (n) => {
    const e = n && n.__esModule ? () => n.default : () => n;
    return E.d(e, { a: e }), e;
  }),
    (E.d = (n, e) => {
      for (const t in e)
        E.o(e, t) &&
          !E.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (E.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (E.nc = void 0),
    (n = E(379)),
    (e = E.n(n)),
    (t = E(795)),
    (i = E.n(t)),
    (a = E(569)),
    (A = E.n(a)),
    (r = E(565)),
    (o = E.n(r)),
    (s = E(216)),
    (c = E.n(s)),
    (d = E(589)),
    (l = E.n(d)),
    (p = E(205)),
    ((C = {}).styleTagTransform = l()),
    (C.setAttributes = o()),
    (C.insert = A().bind(null, "head")),
    (C.domAPI = i()),
    (C.insertStyleElement = c()),
    e()(p.Z, C),
    p.Z && p.Z.locals && p.Z.locals,
    (document.querySelector(".celsius-icon").src =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIGZpbGw9IiMwMDAwMDAiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI1LjkyNCAyNS45MjQiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQuNjk5LDIuMjc4QzIuMTA3LDIuMjc4LDAsNC4zODYsMCw2Ljk3N2MwLDIuNTkzLDIuMTA3LDQuNjk4LDQuNjk5LDQuNjk4czQuNy0yLjEwNiw0LjY5OS00LjY5OA0KCQlDOS4zOTgsNC4zODYsNy4yOTEsMi4yNzgsNC42OTksMi4yNzh6IE00LjY5OSw5LjMyN2MtMS4yOTUsMC0yLjM1LTEuMDU0LTIuMzUtMi4zNWMwLTEuMjk0LDEuMDU1LTIuMzUsMi4zNS0yLjM1DQoJCXMyLjM1LDEuMDU1LDIuMzUsMi4zNUM3LjA0OSw4LjI3Myw1Ljk5NCw5LjMyNyw0LjY5OSw5LjMyN3ogTTIxLjMyNCwxOS45NzFjLTMuOTEsMC02LjIyNy0yLjQ2My02LjIyNy02LjM2OQ0KCQljMC00LjM0MiwyLjcyMS02LjQ1Niw2LjE5NS02LjQ1NmMxLjU5MiwwLDIuODM2LDAuMzQ5LDMuNzAzLDAuNzI1bDAuOTI4LTMuNDc1Yy0wLjc4Mi0wLjQzNS0yLjUyLTAuODY5LTQuODA3LTAuODY5DQoJCWMtNS45MDQsMC0xMC42NTIsMy42NzgtMTAuNjUyLDEwLjMzNmMwLDUuNTU4LDMuNDc1LDkuNzgzLDEwLjIyMSw5Ljc4M2MyLjM0NiwwLDQuMTk4LTAuNDY0LDQuOTc5LTAuODQxbC0wLjYzNy0zLjQ3Mw0KCQlDMjQuMTMxLDE5LjcwOSwyMi42ODMsMTkuOTcxLDIxLjMyNCwxOS45NzF6Ii8+DQo8L2c+DQo8L3N2Zz4="),
    (document.querySelector(".f-icon").src =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCSB2aWV3Qm94PSIwIDAgMTI3LjEyMiAxMjcuMTIyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjUuNTUzLDUuNDk2QzExLjQ2LDUuNDk2LDAsMTYuOTYyLDAsMzEuMDU0YzAsMTQuMTAzLDExLjQ2LDI1LjU1MywyNS41NTMsMjUuNTUzDQoJCXMyNS41NTgtMTEuNDU1LDI1LjU1OC0yNS41NTNDNTEuMTExLDE2Ljk2MiwzOS42NDUsNS40OTYsMjUuNTUzLDUuNDk2eiBNMjUuNTUzLDQzLjgzNmMtNy4wNDksMC0xMi43NzYtNS43MzMtMTIuNzc2LTEyLjc4Mg0KCQljMC03LjAzOCw1LjcyNy0xMi43ODIsMTIuNzc2LTEyLjc4MnMxMi43ODIsNS43NDQsMTIuNzgyLDEyLjc4MkMzOC4zMzUsMzguMTAzLDMyLjYwMiw0My44MzYsMjUuNTUzLDQzLjgzNnogTTEyNy4xMjIsMzQuMzIzDQoJCVYxNC40NTRINjEuNzY2djEwNy4xNzFoMjQuMTcxVjc4LjUzN2gzOC40ODFWNTguODE1SDg1LjkzN1YzNC4zMjNIMTI3LjEyMnoiLz4NCjwvZz4NCjwvc3ZnPg=="),
    (document.querySelector(".weather-icon-big").src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yNjAtMTYwcS05MSAwLTE1NS41LTYzVDQwLTM3N3EwLTc4IDQ3LTEzOXQxMjMtNzhxMjUtOTIgMTAwLTE0OXQxNzAtNTdxMTE3IDAgMTk4LjUgODEuNVQ3NjAtNTIwcTY5IDggMTE0LjUgNTkuNVQ5MjAtMzQwcTAgNzUtNTIuNSAxMjcuNVQ3NDAtMTYwSDI2MFptMC04MGg0ODBxNDIgMCA3MS0yOXQyOS03MXEwLTQyLTI5LTcxdC03MS0yOWgtNjB2LTgwcTAtODMtNTguNS0xNDEuNVQ0ODAtNzIwcS04MyAwLTE0MS41IDU4LjVUMjgwLTUyMGgtMjBxLTU4IDAtOTkgNDF0LTQxIDk5cTAgNTggNDEgOTl0OTkgNDFabTIyMC0yNDBaIi8+PC9zdmc+"),
    (document.querySelector(".wind-icon").src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NjAtMTYwcS01MCAwLTg1LTM1dC0zNS04NWg4MHEwIDE3IDExLjUgMjguNVQ0NjAtMjQwcTE3IDAgMjguNS0xMS41VDUwMC0yODBxMC0xNy0xMS41LTI4LjVUNDYwLTMyMEg4MHYtODBoMzgwcTUwIDAgODUgMzV0MzUgODVxMCA1MC0zNSA4NXQtODUgMzVaTTgwLTU2MHYtODBoNTQwcTI2IDAgNDMtMTd0MTctNDNxMC0yNi0xNy00M3QtNDMtMTdxLTI2IDAtNDMgMTd0LTE3IDQzaC04MHEwLTU5IDQwLjUtOTkuNVQ2MjAtODQwcTU5IDAgOTkuNSA0MC41VDc2MC03MDBxMCA1OS00MC41IDk5LjVUNjIwLTU2MEg4MFptNjYwIDMyMHYtODBxMjYgMCA0My0xN3QxNy00M3EwLTI2LTE3LTQzdC00My0xN0g4MHYtODBoNjYwcTU5IDAgOTkuNSA0MC41VDg4MC0zODBxMCA1OS00MC41IDk5LjVUNzQwLTI0MFoiLz48L3N2Zz4="),
    (document.querySelector(".humidity-icon").src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMTAwcS0xMzMgMC0yMjYuNS05MlQxNjAtNDE2cTAtNjMgMjQuNS0xMjAuNVQyNTQtNjM4bDIyNi0yMjIgMjI2IDIyMnE0NSA0NCA2OS41IDEwMS41VDgwMC00MTZxMCAxMzItOTMuNSAyMjRUNDgwLTEwMFoiLz48L3N2Zz4=");
})();
// # sourceMappingURL=bundle.js.map
