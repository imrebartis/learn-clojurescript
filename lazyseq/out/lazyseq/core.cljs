(ns lazyseq.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn square [x] (println "Squaring" x) (* x x))

;; (first (map square [4 5 6 7 8 9]))
;; => Squaring 4
;; 16

;; (take 2 (map square [4 5 6 7 8 9]))
;; => Squaring 4
;; Squaring 5
;; (16 25)

;; (nth (map square [4 5 6 7 8 9]) 3)
;; => Squaring 4
;; Squaring 5
;; Squaring 6
;; Squaring 7
;; 49

(comment
  (range 1 20) ;; => (1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19)
)

(comment
(take 20 (range)) ;; => (1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19)
)


(def the-list (dom/by-id "sampleList"))

(def animals ["ant" "bee" "cat" "dog" "elk"])

(defn list-item [text] (str "<li>" text "</li>"))

(dorun
    (map (fn [x] (dom/append! the-list (list-item x))) animals))
