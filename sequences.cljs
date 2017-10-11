;; lists & vectors

re-seq #"\d+ "Sep. 04 15:23:16 2017" ;; => ("04" "15" "23" "16" "2017")

(require '[clojure.string :as cstr])
(cstr/split "dog, cat; fish, bird" #"[,;]+") ;; => ["dog" " cat" " fish" " bird"]

(def data [2 5 16])
(for [x data] (.sqrt js/Math x)) ;; => (1.4142135623730951 2.23606797749979 4)

(for
  [x [1 2 3]
   y [4 5]] (* x y))
;; => (4 5 8 10 12 15)

(for [x [1 2 3 4] :when (even? x)] (* x x)) ;; => (4 16)

(for [x [1 2 3] :let [s (.sqrt js/Math x)]] (+ x s)) ;; => (2 3.414213562373095 4.732050807568877)
