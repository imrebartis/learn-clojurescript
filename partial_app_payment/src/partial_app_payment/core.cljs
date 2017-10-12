(ns partial_app_payment.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn payment [principal apr years]
  (let [r (/ apr (* 12 100))
        n (* years 12)
        rate-factor (.pow js/Math (+ 1 r) n)]
    (vector years (/ (* principal r rate-factor) (- rate-factor 1)))))

(comment
(def years-vector [10 15 20 30])

(def part-pmt (partial payment 10000 5.0))
;; (part-pmt 10) => [10 106.06551523907493]


;; (map part-pmt years-vector) => ([10 106.06551523907493] [15 79.07936267415424] [20 65.9955739216656] [30 53.682162301213815])

(defn loan [principal apr]
  (partial payment principal apr))

(def low-interest (loan 10000 1.0))
;; (map low-interest years-vector) => ([10 87.60412137016414] [15 59.84945145183446] [20 45.98943069578528] [30 32.16395204465072])

(def high-principal (loan 500000 3.5))
;; (map high-principal years-vector) => ([10 4944.2933730951745] [15 3574.4127067158797] [20 2899.7985899154705] [30 2245.223439044125])
)

(defn float-value [field]
  (.parseFloat js/window (dom/value field)))

(defn make-row [[years amount]]
  (str "<tr><td>" years "</td><td>$"
       (.toFixed amount 2) "</td></tr>"))

(defn show-payments [evt]
  (let [apr (float-value (dom/by-id "apr"))
        principal (float-value (dom/by-id "principal"))
        tbody (dom/by-id "paymentTable")
        years-vector [10 15 20 30]
        part-pmt (partial payment principal apr)
        results (map part-pmt years-vector)]
    (.log js/console results)
    (dom/destroy-children! tbody)
    (doall (map #(dom/append! tbody (make-row %1)) results))))

(ev/listen! (dom/by-id "calculate") "click" show-payments)

