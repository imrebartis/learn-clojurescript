(ns averages.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn arithmetic [a b]
  (/ (+ a b) 2.0))

(defn geometric [a b]
  (.sqrt js/Math (* a b)))

(defn harmonic [a b]
  (/ 2 (+ (/ 1 a) (/ 1 b))))
