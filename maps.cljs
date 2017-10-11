(def numbers {:one 1 :two 2 :three 3})
(get numbers :three) ;; => 3
(numbers :three) ;; => 3
(:three numbers) ;; => 3

;; assoc returns a new map (original map's unchanged)
(assoc numbers :four 4) ;; => {:one 1, :two 2, :three 3, :four 4}
numbers ;; => {:one 1, :two 2, :three 3}
(def numbers2 (assoc numbers :four 4))  ;; => {:one 1, :two 2, :three 3, :four 4}
numbers2  ;; => {:one 1, :two 2, :three 3, :four 4}
(def numbers3 (assoc numbers2 :four -4 :five 5)) ;; => {:one 1, :two 2, :three 3, :four -4, :five 5}

;; IMPORTANT: WHEN MAPS GROW LARGER
;; ASSOC WILL PLACE THE NEWLY ADDED ITEMS RANDOMLY

;; deleting items with dissoc
(def numbers6 (dissoc numbers3 :four :five)) ;; => {:one 1, :two 2, :three 3}

;; getting the keys
(keys numbers3) ;; => (:one :two :three :four :five)

;; turning key into a string
(name :one) ;; => "one"

;; turning string into a keyword
(keyword "one") ;; => :one

(for [item numbers] (println item)) ;; =>

;; [:one 1]
;; [:two 2]
;; [:three 3]
;; (nil nil nil)

;; getting only the values of a map:
(map (fn [item] (last item)) numbers) ;; => (1 2 3)

;; getting the sum of the values with reduce:
(reduce (fn [acc item] (+ acc (last item))) 0 numbers) ;; => 6

;; turning a list of vectors into a map
(into {} '([:a 1] [:b 2] [:c 3])) ;; => {:a 1, :b 2, :c 3}
