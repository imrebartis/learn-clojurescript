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

