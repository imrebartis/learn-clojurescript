(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'testing.core
   :output-to "out/testing.js"
   :output-dir "out"})
