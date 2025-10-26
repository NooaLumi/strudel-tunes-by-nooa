/* 
    WIP Remix of "Geoscape 2" from the "X-COM: UFO Defense" OST by John Broomhall (remix by @NooaLumi)
    Original song can be found on Youtube: https://www.youtube.com/watch?v=5IeNqYcQp8M
*/

setcpm(270)

const HOOK = stack(
  note("<A2 E2 G2 [A2 -]>").sound("gm_electric_bass_finger:2")
  .gain(0.32)
  .release("<0 0 0 0.08>")
  .lpf("1200:0"),
  note("<A2 E2 G2 [A2 -!25]>").sound("gm_fretless_bass:2")
  .gain(0.4)
  .attack(0.007)
  .release("<0 0 0 0.3>")
  .orbit(2)
  .room(0.8)
  .roomsize(1)
)

const HOOK_2 = arrange(
  [7, "-"],
  [8, stack(
    note("<E2@0.5 -@0.5 G2 A2 - A2@3 ->").sound("gm_electric_bass_finger:2")
    .gain(0.32)
    .release("<0 0 0.2!6>")
    .lpf("1200:0"),
    note("<E2@0.5 -@0.5 G2 A2 - A2@3 ->").sound("gm_fretless_bass:2")
    .release("<0 0 0.2!6>")
    .gain(0.4)
    .attack(0.007)
  )],
  [1, "-"]
)

$:arrange(
  [16, stack(HOOK)],
  [16, stack(HOOK, HOOK_2)],
)

._pianoroll()

$:note("<B3 G3 E3@2>/8").sound("gm_synth_brass_2:2")
.gain(0.5)
.orbit(3)
.room(0.8)
.roomsize(1)
._scope()