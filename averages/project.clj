(defproject averages "0.1.0-SNAPSHOT"
  :description "Calculate various averages"
  :url "http://example.com/averages"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3169"]
                 [domina "1.0.3"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :node-dependencies [[source-map-support "0.2.8"]]
  :plugins [[lein-npm "0.4.0"]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target")
