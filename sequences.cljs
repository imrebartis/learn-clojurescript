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


;; map & reduce

(def data [5 4 9])
(defn square [x] (* x x))
(map square data) ;; => (25 16 81)
(defn cube [x] (* x x x))
(map cube data) ;; => (125 64 729)

;;anonymous function:
(map (fn [x] (/ 1 x)) data) ;; => (0.2 0.25 0.1111111111111111)

;; shortcut for the above function, %1 stands for the first parameter:
(map #(/ 1 %1) data) ;; => (0.2 0.25 0.1111111111111111)

(map (fn [x] (/ 1 x)) [4 0 6]) ;; => (0.25 Infinity 0.16666666666666666)

;; getting rid of "Infinity", solution 1:
(filter (fn [x] (not (zero? x))) [4 0 6]) ;; => (4 6)
(map (fn [x] (/ 1 x)) (filter (fn [x] (not (zero? x))) [4 0 6])) ;; => (0.25 0.16666666666666666)

;; getting rid of "Infinity", solution 2:
(remove zero? [4 0 5]) ;; => (4 5)
(map (fn [x] (/ 1 x)) (remove zero? [4 0 5])) ;; => (0.25 0.2)


;; reduce

(def data [5 4 6])
(defn sumsq [acc x] (+ acc (* x x)))
(reduce sumsq 0 data) ;; => 77
(reduce * [5 4 6 3]) ;; => 360
(reduce + [5 4 6 3]) ;; => 18


