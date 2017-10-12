(ns phone.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn dial [area prefix number]
  (str "(" area ")" prefix "-" number))


(defn dial-area [area]
  (partial dial area))

(def san-jose (dial-area "408"))
