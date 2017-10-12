(ns gray.core
  (:require [clojure.browser.repl :as repl]
            [reagent.core :as reagent :refer [atom]]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(comment

  (def grayscale (atom 128)) ;; => #<Atom: 128>

  (deref grayscale) ;; => 128
  @grayscale ;; => 128

  (reset! grayscale 191) ;; => 191

  (swap! grayscale inc) ;; => 192

  (swap! grayscale / 2) ;; => 96

  (swap! grayscale (fn [x] (/ (* 3 x) 4))) ;; => 72

  (def rgb (atom {:r 255 :g 0 :b 0})) ;; => #<Atom: {:r 255, :g 0, :b 0}>

  (swap! rgb assoc :g 128) ;; => {:r 255, :g 128, :b 0}

  (swap! rgb assoc :r 64 :b 192) ;; => {:r 64, :g 128, :b 192}

  )

(defonce gray (atom 128))

(defn gray-changer [event]
  (reset! gray (.-value (.-target event))))

(defn gray-input []
  [:input {:type "tet"
           :size "5"
           :on-change gray-changer
           :value @gray}])

(defn gray-rect []
  [:div {:style
         {:width "50%"
          :margin "0.5em auto"
          :height "150px"
          :background-color (str "rgb(" @gray "," @gray "," @gray ")")
          :border "1px solid black"}} " "])

(defn para []
  [:p "Enter a number btw 0 and 255." [:small "(0=black, 255=white)"]])

(defn interface []
  [:div
   [para]
   [gray-input]
   [gray-rect]])
 (reagent/render-component [interface] (.getElementById js/document "dynamic"))

