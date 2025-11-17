import gleam/io

import lustre
import lustre/effect
import lustre/element/html

pub fn main() -> Nil {
  io.println("Hello from bun_plugin_gleam_demo v0.1.2!")
  let _app = lustre.application(init, update, view)

  Nil
}

type Model {
  Model(Bool)
}

fn init(_) {
  #(Model(True), effect.none())
}

fn update(m, _e) {
  #(m, effect.none())
}

fn view(_m) {
  html.div([], [html.text("ola mundo")])
}
