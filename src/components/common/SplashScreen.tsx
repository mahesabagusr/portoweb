'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

/**
 * Full-screen splash shown on initial load. It "draws" the logo outline
 * path-by-path (step by step) and then fills it in, before fading out to
 * reveal the site.
 *
 * To show it only once per browser session, gate the initial state on
 * sessionStorage (see the commented lines in the effect below).
 */

// Logo paths (public/logo.svg, viewBox 0 0 1610 675), inlined so we can animate them.
const LOGO_PATHS = [
  'M1.06673 1.6003C0.533398 2.53363 6.51181e-05 153.2 -0.133268 336.4L-0.266602 669.6L3.86673 672.134C7.60007 674.4 10.9334 674.667 39.4667 674.667C68.5334 674.667 71.3334 674.534 74.1334 672.134L77.3334 669.6L78.0001 398.534L78.6667 127.467L82.1334 132.8C84.0001 135.6 93.7334 152.4 103.6 170C113.6 187.6 123.067 204.4 124.667 207.334C126.4 210.267 133.867 223.734 141.333 237.334C173.333 295.067 215.733 371.2 233.333 402C237.867 410 243.6 420.267 246 424.667C248.4 429.067 254.667 440.134 259.733 449.334C264.8 458.534 270.667 468.934 272.667 472.667C276.667 480 276.533 479.734 301.333 523.067C315.067 547.2 319.2 553.6 322 554.4C328.267 556.134 364.933 555.334 369.6 553.334C373.867 551.467 373.867 551.467 406.8 490.667C409.867 485.2 415.333 475.2 418.933 468.667C422.667 462 428.533 451.2 432 444.667C435.6 438 444.667 421.2 452.4 407.334C460 393.334 468.667 377.467 471.6 372C474.667 366.534 480.133 356.267 484 349.334C487.867 342.4 492.8 333.334 495.067 329.334C497.2 325.334 500.4 319.334 502.267 316C507.467 306.534 516 290.8 520.933 281.334C526 271.867 567.2 195.734 577.6 176.8C603.2 129.867 618 110.534 641.333 93.067C656.267 81.867 668.667 76.267 691.333 70.667C702.267 67.867 706.4 67.7336 795.333 67.067C900.533 66.267 950 67.7336 970 71.867C1003.87 79.067 1020.8 87.6003 1037.6 105.867C1047.47 116.667 1054.27 129.067 1059.6 145.867C1063.6 158.534 1063.87 160.534 1063.87 179.334C1063.87 197.6 1063.6 200.267 1060.13 210.534C1056 223.067 1051.6 232.534 1045.73 240.934C1040.93 248 1025.73 263.067 1020.93 265.467C1018.93 266.534 1015.2 268.667 1012.67 270.267C1007.33 273.734 992.533 279.467 982 282.267C960.933 287.867 954.8 288.267 891.333 288.8C823.867 289.334 817.867 289.867 788.667 297.6C754.4 306.667 734.4 316.267 708.933 335.867C674.8 362 648 398.534 630.933 442.134C622.267 464 614 503.334 611.467 534C609.6 556.8 609.067 671.6 610.933 673.467C611.867 674.4 669.333 674.8 797.733 674.667C950.533 674.667 985.467 674.267 996.8 672.667C1060.8 663.867 1100.67 646.667 1133.87 613.6C1145.73 601.734 1153.87 590.667 1162.27 574.667C1171.07 557.867 1174.27 548.934 1183.07 516.667C1194.4 475.734 1199.33 463.2 1210.4 447.734C1228.4 422.4 1256.27 407.467 1298.4 400.667C1308.93 398.934 1317.07 398.534 1327.73 399.067C1341.47 399.6 1342.8 400 1345.47 403.067C1348.4 406.534 1368.27 436.934 1386 465.467C1395.07 479.867 1414.67 510.4 1441.73 552.4C1447.07 560.534 1451.87 568.267 1452.4 569.334C1452.93 570.4 1454.93 573.734 1456.8 576.667C1458.8 579.6 1465.73 590.4 1472.27 600.667C1486 622 1502 646.8 1511.6 661.467C1515.33 667.067 1519.87 672.134 1521.87 673.067C1525.6 674.667 1608 675.867 1609.6 674.267C1610.27 673.467 1578.8 623.6 1574 618C1572.8 616.534 1566.13 606.4 1559.33 595.334C1552.53 584.4 1540.27 565.334 1532.13 553.067C1524 540.8 1513.73 525.2 1509.47 518.4C1505.07 511.6 1497.07 499.067 1491.6 490.667C1486.13 482.267 1478.27 470.134 1474.13 463.6C1470 457.2 1458.4 439.334 1448.27 423.734C1438.13 408.267 1429.2 394.267 1428.67 392.534C1427.6 389.734 1428 389.467 1434.4 388C1453.07 383.6 1468.27 377.2 1492.67 363.467C1533.6 340.134 1565.6 295.067 1574 248.667C1575.6 239.334 1578.4 211.067 1578.4 203.334C1578.4 191.067 1575.33 157.334 1573.47 149.334C1564.8 112.267 1547.2 79.467 1523.73 57.3336C1497.33 32.1336 1470.8 18.4003 1430.13 8.53363C1396.8 0.533634 1399.87 0.666967 1242 0.666967C1128 0.666967 1097.33 1.06697 1097.33 2.26697C1097.33 3.2003 1102.8 7.86697 1109.33 12.667C1123.73 23.067 1137.6 36.5336 1150.13 52.1336C1155.2 58.4003 1160.93 64.4003 1162.93 65.3336C1166 66.9336 1184.53 67.2003 1266.67 67.3336C1364.13 67.467 1367.07 67.6003 1383.2 70.5336C1407.2 74.8003 1417.87 78.0003 1433.33 85.3336C1474.53 104.934 1496.4 140.4 1498.93 192C1502.4 264.267 1463.07 313.734 1391.33 327.334C1385.07 328.534 1377.07 330.134 1373.33 330.934C1369.73 331.6 1348.4 332.534 1326 332.8C1278 333.467 1264.8 335.2 1240 343.334C1217.73 350.8 1205.6 356.4 1190.67 366.267C1174.67 376.934 1162.53 388.4 1152.4 402.4C1132.8 429.467 1124.13 448 1112 490C1103.07 521.2 1100.4 528.534 1094.27 540.4C1072.93 581.2 1036.93 600.534 970.667 606.934C944 609.467 692.267 609.467 689.733 606.934C687.333 604.534 686.8 581.734 688.533 550.667C691.067 503.734 697.733 475.334 713.333 444.534C733.6 404.4 758.267 382.4 801.067 366.4C812.8 362.134 822.267 359.734 841.6 356.667C851.067 355.2 866.267 354.667 906.267 354.667C951.867 354.667 960.933 355.067 976.667 357.334C1028.13 365.067 1059.33 382 1081.87 414.267C1085.07 418.934 1088.13 422.667 1088.53 422.667C1088.93 422.667 1091.73 418.267 1094.53 412.934C1101.47 400.267 1105.87 393.734 1117.47 379.6C1129.87 364.4 1130.27 362.267 1122.93 355.467C1119.87 352.667 1113.73 347.734 1109.33 344.667C1101.2 338.8 1070 322.267 1059.6 318.134L1053.73 315.867L1056.93 313.6C1060.93 310.667 1063.73 309.067 1072 304.534C1082.8 298.8 1088.8 294.134 1098.93 283.867C1112.27 270.267 1118.8 261.334 1125.47 247.334C1136.93 223.334 1140.67 207.6 1141.6 179.2C1142.67 149.6 1140 131.867 1130.67 107.334C1111.2 56.4003 1068 23.067 1001.07 7.33363C970.8 0.266967 970.8 0.266967 820.667 0.533634C669.067 0.800301 672.667 0.666967 646.667 8.53363C635.733 11.7336 614.933 21.467 613.333 24.0003C612.933 24.667 611.6 25.3336 610.533 25.3336C606.8 25.3336 588 39.467 576.133 51.467C556.4 71.067 537.333 100.267 509.067 153.334C474.8 217.6 458 249.067 433.333 294.667C419.2 320.667 404.8 347.334 401.333 354C397.867 360.534 389.733 375.6 383.467 387.334C377.067 399.067 366.267 419.067 359.333 431.6C352.533 444.267 346.533 454.667 346.133 454.667C345.2 454.667 339.733 445.867 334 435.334C332.4 432.4 328.8 426.134 326 421.334C323.333 416.534 318.667 408.134 315.733 402.667C302.267 377.6 291.467 358 282.667 342.667C273.2 326.134 268.267 317.2 256 294C252.4 287.334 245.867 275.334 241.333 267.334C226.133 240.534 219.333 228 219.333 227.334C219.333 227.067 216.933 222.8 214 218C211.067 213.2 208.667 209.067 208.667 208.8C208.667 208.534 202.933 197.867 195.867 185.067C188.8 172.4 180.933 158.134 178.267 153.334C175.733 148.534 173.2 144 172.667 143.334C172.133 142.534 170 138.934 168 135.334C155.333 112.667 152 107.067 142.667 92.0003C128.267 68.9336 123.467 62.8003 107.467 46.5336C86.5334 25.6003 69.8667 14.667 48.0001 7.6003C26.4001 0.666967 3.46673 -2.13303 1.06673 1.6003Z',
  'M671.467 124C664.933 128.4 656.133 135.867 652 140.4C642 151.467 627.6 173.334 618.4 191.6C610.933 206.4 610.933 206.534 609.867 222.267C608.133 248.134 609.067 380.4 610.933 380.934C611.733 381.2 615.067 377.334 618.267 372.4C633.733 348.667 657.333 322.667 676.667 307.867C681.867 304 686 300.134 686.133 299.467C686.133 298.667 686.4 296.8 686.8 295.334C687.067 293.867 687.6 253.2 687.867 205.067C688.267 115.867 688.267 116 684 116C683.733 116 678.133 119.6 671.467 124Z',
];

const DRAW_DURATION = 1.5; // seconds to draw each path
const STAGGER = 0.35; // seconds between paths starting
const FILL_DURATION = 0.6;
const WELCOME_DURATION = 0.5;
const HOLD = 0.6; // pause after everything is shown, before fading out

// Derived timeline (seconds).
const DRAW_END = DRAW_DURATION + STAGGER * (LOGO_PATHS.length - 1);
const FILL_END = DRAW_END + FILL_DURATION;
const WELCOME_DELAY = FILL_END; // welcome text appears as the fill completes
const TOTAL_SECONDS = WELCOME_DELAY + WELCOME_DURATION + HOLD;

export default function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  const totalMs = reduceMotion ? 900 : TOTAL_SECONDS * 1000;

  // Timer: end the splash after the timeline completes.
  useEffect(() => {
    // To show only once per session, uncomment:
    // if (sessionStorage.getItem('splashShown')) { setDone(true); onComplete?.(); return; }

    const timer = setTimeout(() => {
      setDone(true);
      onComplete?.(); // signal the site to start its entrance animations
      // sessionStorage.setItem('splashShown', '1');
    }, totalMs);
    return () => clearTimeout(timer);
  }, [totalMs, onComplete]);

  // Scroll lock: active while the splash is showing; released as soon as `done`
  // flips true (the effect cleanup runs because the dependency changed).
  useEffect(() => {
    if (done) return;

    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // The site uses Lenis smooth-scroll, which intercepts wheel/touch via its
    // own listeners — so plain overflow:hidden is not enough. Stop Lenis too.
    // Lenis mounts slightly after this splash, so retry until it's available.
    let lenisTries = 0;
    const stopLenis = () => {
      if (window.lenis) {
        window.lenis.stop();
        return true;
      }
      return false;
    };
    let lenisInterval: ReturnType<typeof setInterval> | undefined;
    if (!stopLenis()) {
      lenisInterval = setInterval(() => {
        if (stopLenis() || ++lenisTries > 40) {
          if (lenisInterval) clearInterval(lenisInterval);
        }
      }, 50);
    }

    // Hard guarantee: swallow scroll input before Lenis (or the browser) acts.
    const blockScroll = (e: Event) => {
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
    const blockKeys = (e: KeyboardEvent) => {
      if (scrollKeys.includes(e.key)) e.preventDefault();
    };
    window.addEventListener('wheel', blockScroll, { passive: false });
    window.addEventListener('touchmove', blockScroll, { passive: false });
    window.addEventListener('keydown', blockKeys, { passive: false });

    return () => {
      if (lenisInterval) clearInterval(lenisInterval);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      window.lenis?.start();
      window.removeEventListener('wheel', blockScroll);
      window.removeEventListener('touchmove', blockScroll);
      window.removeEventListener('keydown', blockKeys);
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="splash"
          className="bg-canvas fixed inset-0 z-10000 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5 sm:gap-6">
            <motion.svg
              viewBox="0 0 1610 675"
              className="text-ink h-auto w-[min(46vw,240px)]"
              fill="none"
              initial="hidden"
              animate="visible"
              aria-label="MBR Logo"
            >
              {LOGO_PATHS.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  stroke="currentColor"
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                  variants={{
                    hidden: { pathLength: 0, fillOpacity: 0 },
                    visible: {
                      pathLength: 1,
                      fillOpacity: 1,
                      transition: reduceMotion
                        ? { duration: 0.01 }
                        : {
                            pathLength: {
                              duration: DRAW_DURATION,
                              delay: i * STAGGER,
                              ease: 'easeInOut',
                            },
                            fillOpacity: {
                              duration: FILL_DURATION,
                              delay: DRAW_DURATION + i * STAGGER,
                              ease: 'easeOut',
                            },
                          },
                    },
                  }}
                />
              ))}
            </motion.svg>

            <motion.p
              className="text-subtle text-xs tracking-[0.3em] uppercase sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0.2 }
                  : { delay: WELCOME_DELAY, duration: WELCOME_DURATION, ease: 'easeOut' }
              }
            >
              Hello Folks👋
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
