(ns phone.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn dial [area prefix number]
  (str "(" area ")" prefix "-" number))

;; (def office (dial "408" "555" "1234")) => "(408)555-1234"

(defn dial-area [area]
  (partial dial area))

(def san-jose (dial-area "408"))

;; (san-jose "555" "4203") => "(408)555-4203"
