// import { useEffect } from 'react';

// declare global {
//   interface Window {
//     drift: any;
//     driftt: any;
//   }
// }

// const Messaging = ({ driftId }: { driftId: string }) => {
//   useEffect(() => {
//     if (typeof window !== 'undefined' && driftId) {
//       (function() {
//         const t = (window.driftt = window.drift = window.driftt || []);
//         if (!t.init) {
//           if (t.invoked) return;
//           t.invoked = true;
//           t.methods = ['identify', 'config', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on'];
//           t.factory = function(e: any) {
//             return function() {
//               const n = Array.prototype.slice.call(arguments);
//               n.unshift(e);
//               t.push(n);
//               return t;
//             };
//           };
//           for (let e = 0; e < t.methods.length; e++) {
//             const n = t.methods[e];
//             t[n] = t.factory(n);
//           }
//           t.load = function(e: any) {
//             const n = 3e5,
//               o = Math.ceil(new Date().getTime() / n) * n,
//               i = document.createElement('script');
//             i.type = 'text/javascript';
//             i.async = true;
//             i.crossOrigin = 'anonymous';
//             i.src = 'https://js.driftt.com/include/' + o + '/' + e + '.js';
//             const a = document.getElementsByTagName('script')[0];
//             a.parentNode.insertBefore(i, a);
//           };
//         }
//       })();

//       window.drift.SNIPPET_VERSION = '0.3.1';
//       window.drift.load(driftId);
//     }
//   }, [driftId]);

//   return <div>Drift Messaging Integrated</div>;
// };

// export default Messaging;
