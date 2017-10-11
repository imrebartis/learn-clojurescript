(ns seq_averages.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)


(defn arithmetic [values]
  ;; divide sum of values by number of values
  (/ (reduce + values) (count values)))

;; geometric mean: nth root of x1*x2*...xn
(defn geometric [values]
  (let [nonzero (remove zero? values)
        ;; changing values to positive numbers
        ;; take the nonzero numbers & map them
        ;; against the fn that takes the absolute
        ;; value of each item
        v (map (fn [x] (.abs js/Math x)) nonzero)
        ;; n is the number of the remaining values
        n (count v)]
    (.pow js/Math (reduce * v) (/ 1.0 n))))

;; harmonic mean: n divided by (1/x1 + 1/x2 + ... 1/xn)
 (defn harmonic [values]
  (let [v (remove zero? values)
        ;; recip = reciprocal (e.g. reciprocal of 3/4 is 4/3)
        ;; below is the shorthand for
        ;; recip (map (fn [x] (/ 1 x)) v)
        recip (map #(/ 1 %1) v)
        n (count v)]
    (/ n (reduce + recip))))

 (defn mean [choice values]
    (cond
      (= choice "arithmetic") (arithmetic values)
      (= choice "geometric") (geometric values)
      (= choice "harmonic") (harmonic values)))

(defn calculate [evt]
  (let [choice (dom/value (dom/by-id "meanType"))
        number-string (dom/value (dom/by-id "numbers"))
        numbers (cstr/split number-string #"[ ,]+")
        values (map (fn [x] (.parseFloat js/window x)) numbers)]
    (dom/set-text! (dom/by-id "result") (mean choice values))))

(ev/listen! (dom/by-id "calculate") "click" calculate)
